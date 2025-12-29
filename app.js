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

// オンライン/オフライン状態を監視
function updateOnlineStatus() {
    if (navigator.onLine) {
        offlineStatus.textContent = 'Online';
        offlineStatus.className = 'offline-status online';
        setTimeout(() => {
            offlineStatus.className = 'offline-status';
        }, 2000);
    } else {
        offlineStatus.textContent = 'Offline Mode';
        offlineStatus.className = 'offline-status offline';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// 初期化時にオフラインならステータス表示
if (!navigator.onLine) {
    updateOnlineStatus();
}

// Text-to-Speech で発音する（アメリカ英語）
function speakWord(word) {
    if ('speechSynthesis' in window) {
        // 既存の発話をキャンセル
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.85;
        utterance.pitch = 1;

        // アメリカ英語の音声を優先的に探す
        const voices = speechSynthesis.getVoices();

        // 優先順位: en-US > en_US > en（アメリカ英語を優先）
        let selectedVoice = voices.find(v => v.lang === 'en-US');
        if (!selectedVoice) {
            selectedVoice = voices.find(v => v.lang === 'en_US');
        }
        if (!selectedVoice) {
            selectedVoice = voices.find(v => v.lang.startsWith('en-US'));
        }
        if (!selectedVoice) {
            // Samantha (macOS) や Google US English などを探す
            selectedVoice = voices.find(v =>
                v.name.includes('Samantha') ||
                v.name.includes('US') ||
                v.name.includes('American')
            );
        }
        if (!selectedVoice) {
            selectedVoice = voices.find(v => v.lang.startsWith('en'));
        }

        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        speechSynthesis.speak(utterance);
    }
}

// 音声リストが読み込まれたら再取得
if ('speechSynthesis' in window) {
    speechSynthesis.onvoiceschanged = () => {
        speechSynthesis.getVoices();
    };
}

// Web Speech APIのサポートチェックと初期化
function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.log('Speech Recognition not supported');
        voiceBtn.title = 'Voice input not supported';
        return false;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        isListening = true;
        voiceBtn.classList.add('listening');
        voiceStatus.textContent = 'Listening... Speak a word';
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        wordInput.value = transcript;

        if (event.results[0].isFinal) {
            voiceStatus.textContent = `Recognized: "${transcript}"`;
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

    return true;
}

function getErrorMessage(error) {
    const messages = {
        'no-speech': 'No speech detected. Try again.',
        'audio-capture': 'Microphone not found.',
        'not-allowed': 'Microphone access denied.',
        'network': 'Network error. Voice needs internet.',
        'aborted': 'Voice input stopped.',
        'service-not-allowed': 'Speech service not available.'
    };
    return messages[error] || 'Voice error. Try typing instead.';
}

function stopListening() {
    isListening = false;
    voiceBtn.classList.remove('listening');
}

function startListening() {
    if (!recognition) {
        if (!initSpeechRecognition()) {
            voiceStatus.textContent = 'Voice not supported. Please type.';
            setTimeout(() => voiceStatus.textContent = '', 3000);
            return;
        }
    }

    try {
        voiceStatus.textContent = '';
        recognition.start();
    } catch (e) {
        console.error('Start error:', e);
        if (e.message && e.message.includes('already started')) {
            recognition.stop();
        } else {
            voiceStatus.textContent = 'Could not start voice. Try typing.';
            setTimeout(() => voiceStatus.textContent = '', 3000);
        }
    }
}

// 音声入力ボタンのクリックイベント
voiceBtn.addEventListener('click', () => {
    if (isListening) {
        recognition?.stop();
    } else {
        startListening();
    }
});

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
        showError('Please enter a valid English word');
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
                    showError(`"${cleanWord}" was not found`);
                } else {
                    showError('Search error occurred');
                }
                return;
            }

            const data = await response.json();
            displayResult(data[0], false);
        } catch (error) {
            console.error('Fetch error:', error);
            showError('Network error. Try a common word offline.');
        }
    } else {
        // オフラインで辞書にない場合
        showError(`"${cleanWord}" is not in offline dictionary. Try common words like: hello, good, happy, love, thank`);
    }
}

// ローディング表示
function showLoading() {
    resultDiv.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <p>Searching...</p>
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
            Speak
        </button>
    `;

    // オフラインバッジ
    if (isOffline) {
        html += '<span style="background: rgba(251,191,36,0.2); color: #fbbf24; padding: 4px 10px; border-radius: 12px; font-size: 0.75rem;">Offline</span>';
    }

    html += '</div>';

    // 意味を表示
    data.meanings.forEach(meaning => {
        html += '<div class="meaning-section">';
        html += `<span class="part-of-speech">${translatePartOfSpeech(meaning.partOfSpeech)}</span>`;

        meaning.definitions.slice(0, 3).forEach((def, index) => {
            html += '<div class="definition">';
            html += `<p class="definition-text"><span class="definition-number">${index + 1}</span>${def.definition}</p>`;
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
initSpeechRecognition();
