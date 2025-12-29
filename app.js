// DOM要素
const wordInput = document.getElementById('wordInput');
const voiceBtn = document.getElementById('voiceBtn');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const voiceStatus = document.getElementById('voiceStatus');
const resultDiv = document.getElementById('result');
const offlineStatus = document.getElementById('offlineStatus');

// 音声認識の設定
let recognition = null;
let isListening = false;

// 音声合成用の変数
let voicesLoaded = false;
let availableVoices = [];

// iOS検出
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// オンライン/オフライン状態を監視
function updateOnlineStatus() {
    if (navigator.onLine) {
        offlineStatus.textContent = 'オンライン';
        offlineStatus.className = 'offline-status online';
        setTimeout(() => {
            offlineStatus.className = 'offline-status';
        }, 2000);
    } else {
        offlineStatus.textContent = 'オフラインモード';
        offlineStatus.className = 'offline-status offline';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// 初期化時にオフラインならステータス表示
if (!navigator.onLine) {
    updateOnlineStatus();
}

// 音声リストを読み込む
function loadVoices() {
    return new Promise((resolve) => {
        const getVoicesAndResolve = () => {
            availableVoices = speechSynthesis.getVoices();
            voicesLoaded = availableVoices.length > 0;
            resolve(availableVoices);
        };

        availableVoices = speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
            voicesLoaded = true;
            resolve(availableVoices);
        } else {
            // 音声が非同期で読み込まれる場合
            if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = getVoicesAndResolve;
            }
            // タイムアウト: 2秒後に強制的に続行（iOSは遅いことがある）
            setTimeout(getVoicesAndResolve, 2000);
        }
    });
}

// アメリカ英語の音声を選択
function selectUSVoice(voices) {
    if (!voices || voices.length === 0) return null;

    // iOS用の音声を優先
    if (isIOS) {
        let iosVoice = voices.find(v => v.name.includes('Samantha'));
        if (iosVoice) return iosVoice;
        iosVoice = voices.find(v => v.lang === 'en-US' && v.localService);
        if (iosVoice) return iosVoice;
    }

    // 優先順位: en-US > en_US > en（アメリカ英語を優先）
    let selectedVoice = voices.find(v => v.lang === 'en-US');
    if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang === 'en_US');
    }
    if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang && v.lang.startsWith('en-US'));
    }
    if (!selectedVoice) {
        selectedVoice = voices.find(v =>
            v.name && (v.name.includes('Samantha') ||
            v.name.includes('US') ||
            v.name.includes('American'))
        );
    }
    if (!selectedVoice) {
        selectedVoice = voices.find(v => v.lang && v.lang.startsWith('en'));
    }
    return selectedVoice;
}

// Text-to-Speech で発音する（アメリカ英語）
async function speakWord(word) {
    if (!('speechSynthesis' in window)) {
        voiceStatus.textContent = '音声合成がサポートされていません';
        setTimeout(() => voiceStatus.textContent = '', 2000);
        return;
    }

    // iOS Safari: 発話前にキャンセルが必要
    speechSynthesis.cancel();

    // 音声がまだ読み込まれていない場合は待つ
    if (!voicesLoaded || availableVoices.length === 0) {
        await loadVoices();
    }

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = isIOS ? 0.9 : 0.85;
    utterance.pitch = 1;
    utterance.volume = 1;

    // 音声を選択
    const selectedVoice = selectUSVoice(availableVoices);
    if (selectedVoice) {
        utterance.voice = selectedVoice;
    }

    // エラーハンドリング
    utterance.onerror = (e) => {
        console.error('Speech error:', e);
    };

    // iOS Safari対策: 遅延を入れる
    setTimeout(() => {
        speechSynthesis.speak(utterance);
    }, isIOS ? 200 : 100);
}

// ページ読み込み時に音声を事前読み込み
if ('speechSynthesis' in window) {
    loadVoices();
    // iOSでは追加のトリガーが必要な場合がある
    document.addEventListener('touchstart', () => {
        if (!voicesLoaded) loadVoices();
    }, { once: true });
}

// 音声認識のサポートチェック
function isSpeechRecognitionSupported() {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
}

// Web Speech APIのサポートチェックと初期化
function initSpeechRecognition() {
    if (!isSpeechRecognitionSupported()) {
        console.log('Speech Recognition not supported');
        updateVoiceButtonState(false);
        return false;
    }

    try {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = !isIOS; // iOSでは中間結果を無効化
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            isListening = true;
            voiceBtn.classList.add('listening');
            voiceStatus.textContent = '聞いています... 単語を話してください';
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            wordInput.value = transcript;

            if (event.results[0].isFinal) {
                voiceStatus.textContent = `認識: "${transcript}"`;
                setTimeout(() => {
                    searchWord(transcript.trim());
                    voiceStatus.textContent = '';
                }, 500);
            }
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            voiceStatus.textContent = getErrorMessage(event.error);
            stopListening();
            setTimeout(() => {
                voiceStatus.textContent = '';
            }, 3000);
        };

        recognition.onend = () => {
            stopListening();
        };

        recognition.onnomatch = () => {
            voiceStatus.textContent = '認識できませんでした。もう一度お試しください。';
            stopListening();
            setTimeout(() => voiceStatus.textContent = '', 3000);
        };

        return true;
    } catch (e) {
        console.error('Failed to init speech recognition:', e);
        updateVoiceButtonState(false);
        return false;
    }
}

function updateVoiceButtonState(supported) {
    if (!supported) {
        voiceBtn.style.opacity = '0.5';
        voiceBtn.title = 'Voice input not supported on this device';
    }
}

function getErrorMessage(error) {
    const messages = {
        'no-speech': '音声が検出されませんでした。もう一度お試しください。',
        'audio-capture': 'マイクが見つかりません。',
        'not-allowed': 'マイクへのアクセスが拒否されました。設定で許可してください。',
        'network': 'ネットワークエラー。音声入力にはインターネットが必要です。',
        'aborted': '音声入力が中断されました。',
        'service-not-allowed': '音声サービスが利用できません。',
        'language-not-supported': '言語がサポートされていません。'
    };
    return messages[error] || '音声エラー。入力して検索してください。';
}

function stopListening() {
    isListening = false;
    voiceBtn.classList.remove('listening');
}

function startListening() {
    // HTTPSチェック（localhost以外）
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
        voiceStatus.textContent = '音声入力にはHTTPS接続が必要です';
        setTimeout(() => voiceStatus.textContent = '', 3000);
        return;
    }

    if (!recognition) {
        if (!initSpeechRecognition()) {
            voiceStatus.textContent = isIOS ?
                'このiOSバージョンでは音声入力がサポートされていません' :
                '音声入力がサポートされていません。入力してください。';
            setTimeout(() => voiceStatus.textContent = '', 3000);
            return;
        }
    }

    // 既に認識中なら停止
    if (isListening) {
        try {
            recognition.stop();
        } catch (e) {}
        return;
    }

    try {
        voiceStatus.textContent = '';
        recognition.start();
    } catch (e) {
        console.error('Start error:', e);
        if (e.name === 'InvalidStateError' || (e.message && e.message.includes('already started'))) {
            try {
                recognition.stop();
            } catch (stopError) {}
            setTimeout(() => {
                try {
                    recognition.start();
                } catch (retryError) {
                    voiceStatus.textContent = '音声入力を開始できませんでした。もう一度お試しください。';
                    setTimeout(() => voiceStatus.textContent = '', 3000);
                }
            }, 200);
        } else {
            voiceStatus.textContent = '音声入力を開始できませんでした。入力してください。';
            setTimeout(() => voiceStatus.textContent = '', 3000);
        }
    }
}

// 音声入力ボタンのイベント（clickとtouchendの両方に対応）
function handleVoiceButtonPress(e) {
    e.preventDefault();
    if (isListening) {
        try {
            recognition?.stop();
        } catch (e) {}
    } else {
        startListening();
    }
}

voiceBtn.addEventListener('click', handleVoiceButtonPress);
// iOSではtouchendも追加
if (isIOS) {
    voiceBtn.addEventListener('touchend', handleVoiceButtonPress);
}

// 検索ボタンのクリックイベント
searchBtn.addEventListener('click', () => {
    const word = wordInput.value.trim();
    if (word) {
        searchWord(word);
    }
});

// クリアボタンのクリックイベント
clearBtn.addEventListener('click', () => {
    wordInput.value = '';
    wordInput.focus();
});

// Enterキーで検索
wordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const word = wordInput.value.trim();
        if (word) {
            searchWord(word);
        }
    }
});

// 単語を検索する関数
async function searchWord(word) {
    // 入力を単語のみに整形
    const cleanWord = word.toLowerCase().trim().split(' ')[0].replace(/[^a-z'-]/g, '');

    if (!cleanWord) {
        showError('有効な英単語を入力してください');
        return;
    }

    // まずオフライン辞書を確認
    if (typeof OFFLINE_DICTIONARY !== 'undefined' && OFFLINE_DICTIONARY[cleanWord]) {
        displayResult(OFFLINE_DICTIONARY[cleanWord], true);
        return;
    }

    // オンラインの場合はAPIを使用
    if (navigator.onLine) {
        showLoading();
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`);

            if (!response.ok) {
                if (response.status === 404) {
                    showError(`"${cleanWord}" は見つかりませんでした`);
                } else {
                    showError('検索エラーが発生しました');
                }
                return;
            }

            const data = await response.json();
            displayResult(data[0], false);
        } catch (error) {
            console.error('Fetch error:', error);
            showError('ネットワークエラー。オフライン辞書の単語をお試しください。');
        }
    } else {
        // オフラインで辞書にない場合
        showError(`"${cleanWord}" はオフライン辞書にありません。例: hello, good, happy, love, thank`);
    }
}

// ローディング表示
function showLoading() {
    resultDiv.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>検索中...</p>
        </div>
    `;
}

// エラー表示
function showError(message) {
    resultDiv.innerHTML = `
        <div class="error">
            <div class="error-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--text-dim)">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                    <line x1="9" y1="9" x2="9.01" y2="9"/>
                    <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
            </div>
            <p>${message}</p>
        </div>
    `;
}

// 結果を表示する関数
function displayResult(data, isOffline) {
    let html = '<div class="word-header">';
    html += `<span class="word-title">${data.word}</span>`;

    // 発音記号
    const phonetic = getPhonetic(data);
    if (phonetic) {
        html += `<span class="phonetic">${phonetic}</span>`;
    }

    // 発音ボタン（Text-to-Speech）
    html += `
        <button class="play-audio" onclick="speakWord('${data.word}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
            発音
        </button>
    `;

    // オフラインバッジ
    if (isOffline) {
        html += '<span style="background: rgba(251,191,36,0.2); color: #fbbf24; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;">オフライン</span>';
    }

    html += '</div>';

    // 日本語訳（メイン）
    if (data.japanese) {
        html += `<div class="japanese-main">${data.japanese}</div>`;
    }

    // 意味を表示
    data.meanings.forEach(meaning => {
        html += '<div class="meaning-section">';
        html += `<span class="part-of-speech">${translatePartOfSpeech(meaning.partOfSpeech)}</span>`;

        meaning.definitions.slice(0, 3).forEach((def, index) => {
            html += '<div class="definition">';
            html += `<p class="definition-text"><span class="definition-number">${index + 1}</span>${def.definition}</p>`;
            // 日本語訳（定義ごと）
            if (def.japanese) {
                html += `<p class="definition-japanese">→ ${def.japanese}</p>`;
            }
            if (def.example) {
                html += `<p class="example">"${def.example}"</p>`;
            }
            html += '</div>';
        });

        html += '</div>';
    });

    resultDiv.innerHTML = html;
}

// 発音記号を取得
function getPhonetic(data) {
    if (data.phonetic) return data.phonetic;
    if (data.phonetics && data.phonetics.length > 0) {
        const withText = data.phonetics.find(p => p.text);
        if (withText) return withText.text;
    }
    return null;
}

// 品詞を日本語に翻訳
function translatePartOfSpeech(pos) {
    const translations = {
        'noun': '名詞 Noun',
        'verb': '動詞 Verb',
        'adjective': '形容詞 Adj',
        'adverb': '副詞 Adv',
        'pronoun': '代名詞 Pron',
        'preposition': '前置詞 Prep',
        'conjunction': '接続詞 Conj',
        'interjection': '感動詞 Interj',
        'determiner': '限定詞 Det',
        'exclamation': '感嘆詞 Excl'
    };
    return translations[pos] || pos;
}

// 初期化
if (isSpeechRecognitionSupported()) {
    initSpeechRecognition();
} else {
    updateVoiceButtonState(false);
    if (isIOS) {
        voiceStatus.textContent = '音声入力にはiOS 14.5以降が必要です';
        setTimeout(() => voiceStatus.textContent = '', 5000);
    }
}
