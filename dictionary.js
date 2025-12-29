// オフライン用辞書データ（よく使う英単語 + 日本語訳）
const OFFLINE_DICTIONARY = {
  "hello": {
    word: "hello",
    phonetic: "/həˈloʊ/",
    japanese: "こんにちは、もしもし",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used as a greeting or to begin a phone conversation.", example: "Hello, how are you?", japanese: "挨拶や電話の始まりに使う" }
        ]
      }
    ]
  },
  "goodbye": {
    word: "goodbye",
    phonetic: "/ɡʊdˈbaɪ/",
    japanese: "さようなら",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used to express good wishes when parting.", example: "Goodbye, see you tomorrow!", japanese: "別れる時に使う" }
        ]
      }
    ]
  },
  "thank": {
    word: "thank",
    phonetic: "/θæŋk/",
    japanese: "感謝する",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Express gratitude to someone.", example: "I thanked him for his help.", japanese: "誰かに感謝を表す" }
        ]
      }
    ]
  },
  "thanks": {
    word: "thanks",
    phonetic: "/θæŋks/",
    japanese: "ありがとう",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "An expression of gratitude.", example: "Thanks for your help!", japanese: "感謝の表現" }
        ]
      }
    ]
  },
  "please": {
    word: "please",
    phonetic: "/pliːz/",
    japanese: "お願いします、どうぞ",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Used to add politeness to a request.", example: "Please sit down.", japanese: "リクエストに丁寧さを加える" }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Give satisfaction or pleasure to.", example: "The gift pleased her greatly.", japanese: "喜ばせる" }
        ]
      }
    ]
  },
  "yes": {
    word: "yes",
    phonetic: "/jɛs/",
    japanese: "はい",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used to give an affirmative response.", example: "Yes, I agree.", japanese: "肯定の返答に使う" }
        ]
      }
    ]
  },
  "no": {
    word: "no",
    phonetic: "/noʊ/",
    japanese: "いいえ",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used to give a negative response.", example: "No, I don't think so.", japanese: "否定の返答に使う" }
        ]
      }
    ]
  },
  "good": {
    word: "good",
    phonetic: "/ɡʊd/",
    japanese: "良い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of a high quality, standard, or level.", example: "This is a good book.", japanese: "高い品質や水準の" }
        ]
      }
    ]
  },
  "bad": {
    word: "bad",
    phonetic: "/bæd/",
    japanese: "悪い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of poor quality or a low standard.", example: "The weather is bad today.", japanese: "品質や水準が低い" }
        ]
      }
    ]
  },
  "love": {
    word: "love",
    phonetic: "/lʌv/",
    japanese: "愛、愛する",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An intense feeling of deep affection.", example: "Their love grew stronger over time.", japanese: "深い愛情の強い感情" }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Feel deep affection for someone.", example: "I love my family.", japanese: "深い愛情を感じる" }
        ]
      }
    ]
  },
  "hate": {
    word: "hate",
    phonetic: "/heɪt/",
    japanese: "嫌う、憎む",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Feel intense dislike for.", example: "I hate being late.", japanese: "強い嫌悪感を感じる" }
        ]
      }
    ]
  },
  "happy": {
    word: "happy",
    phonetic: "/ˈhæpi/",
    japanese: "幸せな、嬉しい",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Feeling or showing pleasure or contentment.", example: "She looks very happy today.", japanese: "喜びや満足を感じている" }
        ]
      }
    ]
  },
  "sad": {
    word: "sad",
    phonetic: "/sæd/",
    japanese: "悲しい",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Feeling or showing sorrow; unhappy.", example: "I feel sad when you leave.", japanese: "悲しみを感じている" }
        ]
      }
    ]
  },
  "beautiful": {
    word: "beautiful",
    phonetic: "/ˈbjuːtɪfəl/",
    japanese: "美しい",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Pleasing the senses or mind aesthetically.", example: "What a beautiful sunset!", japanese: "感覚や心を美的に喜ばせる" }
        ]
      }
    ]
  },
  "ugly": {
    word: "ugly",
    phonetic: "/ˈʌɡli/",
    japanese: "醜い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Unpleasant or repulsive in appearance.", example: "An ugly building.", japanese: "見た目が不快な" }
        ]
      }
    ]
  },
  "big": {
    word: "big",
    phonetic: "/bɪɡ/",
    japanese: "大きい",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of considerable size or extent.", example: "A big house.", japanese: "かなりの大きさの" }
        ]
      }
    ]
  },
  "small": {
    word: "small",
    phonetic: "/smɔːl/",
    japanese: "小さい",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of a size that is less than normal.", example: "A small dog.", japanese: "通常より小さいサイズの" }
        ]
      }
    ]
  },
  "hot": {
    word: "hot",
    phonetic: "/hɒt/",
    japanese: "暑い、熱い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Having a high temperature.", example: "The coffee is too hot.", japanese: "高い温度を持つ" }
        ]
      }
    ]
  },
  "cold": {
    word: "cold",
    phonetic: "/koʊld/",
    japanese: "寒い、冷たい",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of or at a low temperature.", example: "It's cold outside.", japanese: "低い温度の" }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A common viral infection.", example: "I caught a cold.", japanese: "風邪" }
        ]
      }
    ]
  },
  "water": {
    word: "water",
    phonetic: "/ˈwɔːtər/",
    japanese: "水",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A colorless, transparent liquid.", example: "A glass of water.", japanese: "無色透明の液体" }
        ]
      }
    ]
  },
  "food": {
    word: "food",
    phonetic: "/fuːd/",
    japanese: "食べ物",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "Any nutritious substance that people eat or drink.", example: "We need food to survive.", japanese: "人が食べたり飲んだりする栄養のある物質" }
        ]
      }
    ]
  },
  "eat": {
    word: "eat",
    phonetic: "/iːt/",
    japanese: "食べる",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Put food into the mouth and swallow it.", example: "Let's eat dinner.", japanese: "食べ物を口に入れて飲み込む" }
        ]
      }
    ]
  },
  "drink": {
    word: "drink",
    phonetic: "/drɪŋk/",
    japanese: "飲む、飲み物",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Take liquid into the mouth and swallow.", example: "I drink coffee every morning.", japanese: "液体を口に入れて飲み込む" }
        ]
      }
    ]
  },
  "sleep": {
    word: "sleep",
    phonetic: "/sliːp/",
    japanese: "眠る、睡眠",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Rest with eyes closed and body inactive.", example: "I need to sleep early tonight.", japanese: "目を閉じて体を休める" }
        ]
      }
    ]
  },
  "work": {
    word: "work",
    phonetic: "/wɜːrk/",
    japanese: "働く、仕事",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Be engaged in physical or mental activity.", example: "I work from home.", japanese: "身体的または精神的な活動に従事する" }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "Activity involving mental or physical effort.", example: "I have a lot of work to do.", japanese: "精神的または身体的な努力を伴う活動" }
        ]
      }
    ]
  },
  "play": {
    word: "play",
    phonetic: "/pleɪ/",
    japanese: "遊ぶ、演奏する",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Engage in activity for enjoyment.", example: "The children play in the park.", japanese: "楽しみのために活動する" }
        ]
      }
    ]
  },
  "run": {
    word: "run",
    phonetic: "/rʌn/",
    japanese: "走る",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move at a speed faster than a walk.", example: "I run every morning.", japanese: "歩くより速く動く" }
        ]
      }
    ]
  },
  "walk": {
    word: "walk",
    phonetic: "/wɔːk/",
    japanese: "歩く",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move at a regular pace by lifting each foot.", example: "I walk to school.", japanese: "足を交互に上げて一定のペースで動く" }
        ]
      }
    ]
  },
  "come": {
    word: "come",
    phonetic: "/kʌm/",
    japanese: "来る",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move toward or approach.", example: "Come here, please.", japanese: "近づく、やって来る" }
        ]
      }
    ]
  },
  "go": {
    word: "go",
    phonetic: "/ɡoʊ/",
    japanese: "行く",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move from one place to another.", example: "I go to work by train.", japanese: "ある場所から別の場所へ移動する" }
        ]
      }
    ]
  },
  "see": {
    word: "see",
    phonetic: "/siː/",
    japanese: "見る、会う",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Perceive with the eyes.", example: "I can see the mountain from here.", japanese: "目で知覚する" }
        ]
      }
    ]
  },
  "hear": {
    word: "hear",
    phonetic: "/hɪr/",
    japanese: "聞く、聞こえる",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Perceive with the ear.", example: "I can hear music.", japanese: "耳で知覚する" }
        ]
      }
    ]
  },
  "speak": {
    word: "speak",
    phonetic: "/spiːk/",
    japanese: "話す",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Say words; talk.", example: "Can you speak English?", japanese: "言葉を言う、話す" }
        ]
      }
    ]
  },
  "read": {
    word: "read",
    phonetic: "/riːd/",
    japanese: "読む",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Look at and understand written words.", example: "I like to read books.", japanese: "書かれた言葉を見て理解する" }
        ]
      }
    ]
  },
  "write": {
    word: "write",
    phonetic: "/raɪt/",
    japanese: "書く",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Mark letters or words on a surface.", example: "I write in my journal every day.", japanese: "表面に文字や言葉を記す" }
        ]
      }
    ]
  },
  "think": {
    word: "think",
    phonetic: "/θɪŋk/",
    japanese: "考える、思う",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Have a particular opinion or belief.", example: "I think you're right.", japanese: "特定の意見や考えを持つ" }
        ]
      }
    ]
  },
  "know": {
    word: "know",
    phonetic: "/noʊ/",
    japanese: "知っている",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Be aware of through observation or information.", example: "I know the answer.", japanese: "観察や情報を通じて認識している" }
        ]
      }
    ]
  },
  "learn": {
    word: "learn",
    phonetic: "/lɜːrn/",
    japanese: "学ぶ、習う",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Gain knowledge or skill through study or experience.", example: "I want to learn Japanese.", japanese: "勉強や経験を通じて知識や技術を得る" }
        ]
      }
    ]
  },
  "teach": {
    word: "teach",
    phonetic: "/tiːtʃ/",
    japanese: "教える",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Show or explain how to do something.", example: "She teaches English at school.", japanese: "何かのやり方を見せたり説明する" }
        ]
      }
    ]
  },
  "help": {
    word: "help",
    phonetic: "/hɛlp/",
    japanese: "助ける、手伝う",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Make it easier for someone to do something.", example: "Can you help me?", japanese: "誰かが何かをするのを容易にする" }
        ]
      }
    ]
  },
  "want": {
    word: "want",
    phonetic: "/wɒnt/",
    japanese: "欲しい、〜したい",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Have a desire to possess or do something.", example: "I want to travel the world.", japanese: "何かを所有したいまたはしたいという欲求を持つ" }
        ]
      }
    ]
  },
  "need": {
    word: "need",
    phonetic: "/niːd/",
    japanese: "必要とする",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Require something because it is essential.", example: "I need more time.", japanese: "必要不可欠なため何かを要求する" }
        ]
      }
    ]
  },
  "like": {
    word: "like",
    phonetic: "/laɪk/",
    japanese: "好き、〜のような",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Find agreeable or enjoyable.", example: "I like pizza.", japanese: "心地よいまたは楽しいと思う" }
        ]
      }
    ]
  },
  "make": {
    word: "make",
    phonetic: "/meɪk/",
    japanese: "作る",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Create or produce something.", example: "I make breakfast every morning.", japanese: "何かを作り出す" }
        ]
      }
    ]
  },
  "take": {
    word: "take",
    phonetic: "/teɪk/",
    japanese: "取る、持っていく",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Reach for and hold.", example: "Take my hand.", japanese: "手を伸ばして持つ" }
        ]
      }
    ]
  },
  "give": {
    word: "give",
    phonetic: "/ɡɪv/",
    japanese: "あげる、与える",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Transfer the possession of something to someone.", example: "I'll give you a gift.", japanese: "何かの所有権を誰かに移す" }
        ]
      }
    ]
  },
  "get": {
    word: "get",
    phonetic: "/ɡɛt/",
    japanese: "得る、〜になる",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Come to have or hold; receive.", example: "I got a letter from her.", japanese: "持つようになる、受け取る" }
        ]
      }
    ]
  },
  "find": {
    word: "find",
    phonetic: "/faɪnd/",
    japanese: "見つける",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Discover or locate.", example: "I can't find my keys.", japanese: "発見する、見つけ出す" }
        ]
      }
    ]
  },
  "time": {
    word: "time",
    phonetic: "/taɪm/",
    japanese: "時間、時",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The indefinite continued progress of existence.", example: "Time flies when you're having fun.", japanese: "存在の無限に続く進行" }
        ]
      }
    ]
  },
  "day": {
    word: "day",
    phonetic: "/deɪ/",
    japanese: "日、昼",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A period of 24 hours.", example: "It rained all day.", japanese: "24時間の期間" }
        ]
      }
    ]
  },
  "night": {
    word: "night",
    phonetic: "/naɪt/",
    japanese: "夜",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The period from sunset to sunrise.", example: "Good night!", japanese: "日没から日の出までの期間" }
        ]
      }
    ]
  },
  "morning": {
    word: "morning",
    phonetic: "/ˈmɔːrnɪŋ/",
    japanese: "朝",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The period from sunrise to noon.", example: "Good morning!", japanese: "日の出から正午までの期間" }
        ]
      }
    ]
  },
  "afternoon": {
    word: "afternoon",
    phonetic: "/ˌæftərˈnuːn/",
    japanese: "午後",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The time from noon to evening.", example: "I'll see you this afternoon.", japanese: "正午から夕方までの時間" }
        ]
      }
    ]
  },
  "evening": {
    word: "evening",
    phonetic: "/ˈiːvnɪŋ/",
    japanese: "夕方、晩",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The period at the end of the day.", example: "Good evening!", japanese: "一日の終わりの期間" }
        ]
      }
    ]
  },
  "today": {
    word: "today",
    phonetic: "/təˈdeɪ/",
    japanese: "今日",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "On this present day.", example: "I'm busy today.", japanese: "この現在の日に" }
        ]
      }
    ]
  },
  "tomorrow": {
    word: "tomorrow",
    phonetic: "/təˈmɒroʊ/",
    japanese: "明日",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "On the day after today.", example: "See you tomorrow!", japanese: "今日の次の日に" }
        ]
      }
    ]
  },
  "yesterday": {
    word: "yesterday",
    phonetic: "/ˈjɛstərdeɪ/",
    japanese: "昨日",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "On the day before today.", example: "I saw her yesterday.", japanese: "今日の前の日に" }
        ]
      }
    ]
  },
  "week": {
    word: "week",
    phonetic: "/wiːk/",
    japanese: "週",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A period of seven days.", example: "I'll finish it next week.", japanese: "7日間の期間" }
        ]
      }
    ]
  },
  "month": {
    word: "month",
    phonetic: "/mʌnθ/",
    japanese: "月",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A period of about 30 days.", example: "I moved here last month.", japanese: "約30日の期間" }
        ]
      }
    ]
  },
  "year": {
    word: "year",
    phonetic: "/jɪr/",
    japanese: "年",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A period of 365 days.", example: "Happy New Year!", japanese: "365日の期間" }
        ]
      }
    ]
  },
  "house": {
    word: "house",
    phonetic: "/haʊs/",
    japanese: "家",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A building for people to live in.", example: "They live in a big house.", japanese: "人が住むための建物" }
        ]
      }
    ]
  },
  "home": {
    word: "home",
    phonetic: "/hoʊm/",
    japanese: "家、故郷",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The place where one lives.", example: "I'm going home.", japanese: "人が住む場所" }
        ]
      }
    ]
  },
  "school": {
    word: "school",
    phonetic: "/skuːl/",
    japanese: "学校",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An institution for educating children.", example: "I go to school by bus.", japanese: "子供を教育するための機関" }
        ]
      }
    ]
  },
  "book": {
    word: "book",
    phonetic: "/bʊk/",
    japanese: "本",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A written or printed work of pages.", example: "I'm reading a good book.", japanese: "ページからなる書かれたまたは印刷された作品" }
        ]
      }
    ]
  },
  "friend": {
    word: "friend",
    phonetic: "/frɛnd/",
    japanese: "友達",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A person with whom one has a bond of mutual affection.", example: "She's my best friend.", japanese: "相互の愛情の絆を持つ人" }
        ]
      }
    ]
  },
  "family": {
    word: "family",
    phonetic: "/ˈfæmɪli/",
    japanese: "家族",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A group of parents and children.", example: "I love my family.", japanese: "親と子供のグループ" }
        ]
      }
    ]
  },
  "mother": {
    word: "mother",
    phonetic: "/ˈmʌðər/",
    japanese: "母",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A female parent.", example: "My mother is a teacher.", japanese: "女性の親" }
        ]
      }
    ]
  },
  "father": {
    word: "father",
    phonetic: "/ˈfɑːðər/",
    japanese: "父",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A male parent.", example: "My father works at a bank.", japanese: "男性の親" }
        ]
      }
    ]
  },
  "child": {
    word: "child",
    phonetic: "/tʃaɪld/",
    japanese: "子供",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A young human being.", example: "The child is playing in the park.", japanese: "若い人間" }
        ]
      }
    ]
  },
  "man": {
    word: "man",
    phonetic: "/mæn/",
    japanese: "男、男性",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An adult male human.", example: "The man is wearing a hat.", japanese: "成人の男性" }
        ]
      }
    ]
  },
  "woman": {
    word: "woman",
    phonetic: "/ˈwʊmən/",
    japanese: "女、女性",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An adult female human.", example: "The woman is reading a book.", japanese: "成人の女性" }
        ]
      }
    ]
  },
  "people": {
    word: "people",
    phonetic: "/ˈpiːpəl/",
    japanese: "人々",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "Human beings in general.", example: "Many people came to the event.", japanese: "一般的に人間" }
        ]
      }
    ]
  },
  "world": {
    word: "world",
    phonetic: "/wɜːrld/",
    japanese: "世界",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The earth and all its people.", example: "I want to travel the world.", japanese: "地球とそのすべての人々" }
        ]
      }
    ]
  },
  "country": {
    word: "country",
    phonetic: "/ˈkʌntri/",
    japanese: "国、田舎",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A nation with its own government.", example: "Japan is a beautiful country.", japanese: "独自の政府を持つ国家" }
        ]
      }
    ]
  },
  "city": {
    word: "city",
    phonetic: "/ˈsɪti/",
    japanese: "都市",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A large town.", example: "Tokyo is a big city.", japanese: "大きな町" }
        ]
      }
    ]
  },
  "car": {
    word: "car",
    phonetic: "/kɑːr/",
    japanese: "車",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A road vehicle with an engine.", example: "I drive my car to work.", japanese: "エンジンを持つ道路車両" }
        ]
      }
    ]
  },
  "money": {
    word: "money",
    phonetic: "/ˈmʌni/",
    japanese: "お金",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A medium of exchange in the form of coins and banknotes.", example: "I don't have enough money.", japanese: "硬貨や紙幣の形での交換媒体" }
        ]
      }
    ]
  },
  "buy": {
    word: "buy",
    phonetic: "/baɪ/",
    japanese: "買う",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Obtain in exchange for payment.", example: "I want to buy a new phone.", japanese: "支払いと引き換えに入手する" }
        ]
      }
    ]
  },
  "sell": {
    word: "sell",
    phonetic: "/sɛl/",
    japanese: "売る",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Give something in exchange for money.", example: "They sell fresh vegetables.", japanese: "お金と引き換えに何かを与える" }
        ]
      }
    ]
  },
  "new": {
    word: "new",
    phonetic: "/nuː/",
    japanese: "新しい",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Recently made or discovered.", example: "I bought a new laptop.", japanese: "最近作られたまたは発見された" }
        ]
      }
    ]
  },
  "old": {
    word: "old",
    phonetic: "/oʊld/",
    japanese: "古い、年をとった",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Having lived for a long time.", example: "My grandmother is 90 years old.", japanese: "長い間生きてきた" }
        ]
      }
    ]
  },
  "young": {
    word: "young",
    phonetic: "/jʌŋ/",
    japanese: "若い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Having lived for only a short time.", example: "She is still young.", japanese: "短い間しか生きていない" }
        ]
      }
    ]
  },
  "long": {
    word: "long",
    phonetic: "/lɔːŋ/",
    japanese: "長い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Measuring a great distance.", example: "It's a long road.", japanese: "大きな距離を測る" }
        ]
      }
    ]
  },
  "short": {
    word: "short",
    phonetic: "/ʃɔːrt/",
    japanese: "短い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Measuring a small distance.", example: "She has short hair.", japanese: "小さな距離を測る" }
        ]
      }
    ]
  },
  "high": {
    word: "high",
    phonetic: "/haɪ/",
    japanese: "高い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Extending far upward.", example: "A high mountain.", japanese: "上方に遠くまで伸びている" }
        ]
      }
    ]
  },
  "low": {
    word: "low",
    phonetic: "/loʊ/",
    japanese: "低い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of less than average height.", example: "A low table.", japanese: "平均より低い高さの" }
        ]
      }
    ]
  },
  "fast": {
    word: "fast",
    phonetic: "/fæst/",
    japanese: "速い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Moving or capable of moving quickly.", example: "A fast car.", japanese: "速く動くまたは動くことができる" }
        ]
      }
    ]
  },
  "slow": {
    word: "slow",
    phonetic: "/sloʊ/",
    japanese: "遅い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Moving or operating at a low speed.", example: "The slow train.", japanese: "低速で動くまたは動作する" }
        ]
      }
    ]
  },
  "easy": {
    word: "easy",
    phonetic: "/ˈiːzi/",
    japanese: "簡単な",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Achieved without great effort.", example: "This test is easy.", japanese: "大きな努力なしに達成される" }
        ]
      }
    ]
  },
  "hard": {
    word: "hard",
    phonetic: "/hɑːrd/",
    japanese: "難しい、硬い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Requiring great effort.", example: "This is a hard question.", japanese: "大きな努力を必要とする" }
        ]
      }
    ]
  },
  "important": {
    word: "important",
    phonetic: "/ɪmˈpɔːrtənt/",
    japanese: "重要な",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of great significance or value.", example: "This is an important meeting.", japanese: "大きな意義や価値がある" }
        ]
      }
    ]
  },
  "different": {
    word: "different",
    phonetic: "/ˈdɪfərənt/",
    japanese: "異なる、違う",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not the same as another.", example: "They have different opinions.", japanese: "別のものと同じではない" }
        ]
      }
    ]
  },
  "same": {
    word: "same",
    phonetic: "/seɪm/",
    japanese: "同じ",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Identical; not different.", example: "We have the same idea.", japanese: "同一の、異ならない" }
        ]
      }
    ]
  },
  "true": {
    word: "true",
    phonetic: "/truː/",
    japanese: "本当の",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "In accordance with fact.", example: "Is it true?", japanese: "事実に一致している" }
        ]
      }
    ]
  },
  "false": {
    word: "false",
    phonetic: "/fɔːls/",
    japanese: "偽の、間違った",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not according with truth or fact.", example: "The statement is false.", japanese: "真実や事実に一致しない" }
        ]
      }
    ]
  },
  "right": {
    word: "right",
    phonetic: "/raɪt/",
    japanese: "正しい、右",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Morally good or correct.", example: "You made the right decision.", japanese: "道徳的に良いまたは正しい" }
        ]
      }
    ]
  },
  "wrong": {
    word: "wrong",
    phonetic: "/rɔːŋ/",
    japanese: "間違った",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not correct or true.", example: "That answer is wrong.", japanese: "正しくないまたは真実でない" }
        ]
      }
    ]
  },
  "left": {
    word: "left",
    phonetic: "/lɛft/",
    japanese: "左",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "On the side opposite to right.", example: "Turn left here.", japanese: "右の反対側に" }
        ]
      }
    ]
  },
  "open": {
    word: "open",
    phonetic: "/ˈoʊpən/",
    japanese: "開いた、開ける",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not closed or blocked.", example: "The door is open.", japanese: "閉じていないまたは塞がれていない" }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move so as to allow access.", example: "Please open the window.", japanese: "アクセスを許可するように動かす" }
        ]
      }
    ]
  },
  "close": {
    word: "close",
    phonetic: "/kloʊz/",
    japanese: "閉める、近い",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move to cover an opening.", example: "Please close the door.", japanese: "開口部を覆うように動かす" }
        ]
      }
    ]
  },
  "start": {
    word: "start",
    phonetic: "/stɑːrt/",
    japanese: "始める、始まる",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Begin doing something.", example: "Let's start the meeting.", japanese: "何かをし始める" }
        ]
      }
    ]
  },
  "stop": {
    word: "stop",
    phonetic: "/stɒp/",
    japanese: "止まる、止める",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Cease moving or operating.", example: "The bus stopped.", japanese: "動くまたは動作するのをやめる" }
        ]
      }
    ]
  },
  "try": {
    word: "try",
    phonetic: "/traɪ/",
    japanese: "試す、努力する",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Make an attempt to do something.", example: "I'll try my best.", japanese: "何かをしようと試みる" }
        ]
      }
    ]
  },
  "use": {
    word: "use",
    phonetic: "/juːz/",
    japanese: "使う",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Take, hold, or deploy as a means of achieving something.", example: "I use a computer every day.", japanese: "何かを達成する手段として取る、持つ、または展開する" }
        ]
      }
    ]
  },
  "change": {
    word: "change",
    phonetic: "/tʃeɪndʒ/",
    japanese: "変える、変化",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Make or become different.", example: "I want to change my hairstyle.", japanese: "異なるものにするまたはなる" }
        ]
      }
    ]
  },
  "move": {
    word: "move",
    phonetic: "/muːv/",
    japanese: "動く、引っ越す",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Go from one place to another.", example: "Don't move!", japanese: "ある場所から別の場所へ行く" }
        ]
      }
    ]
  },
  "put": {
    word: "put",
    phonetic: "/pʊt/",
    japanese: "置く",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move to a specified place or position.", example: "Put the book on the table.", japanese: "指定された場所や位置に動かす" }
        ]
      }
    ]
  },
  "keep": {
    word: "keep",
    phonetic: "/kiːp/",
    japanese: "保つ、続ける",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Have or retain possession of.", example: "Keep the change.", japanese: "所有を持つまたは保持する" }
        ]
      }
    ]
  },
  "let": {
    word: "let",
    phonetic: "/lɛt/",
    japanese: "させる、許す",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Allow or permit.", example: "Let me help you.", japanese: "許可する" }
        ]
      }
    ]
  },
  "tell": {
    word: "tell",
    phonetic: "/tɛl/",
    japanese: "話す、伝える",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Communicate information to someone.", example: "Tell me a story.", japanese: "誰かに情報を伝える" }
        ]
      }
    ]
  },
  "say": {
    word: "say",
    phonetic: "/seɪ/",
    japanese: "言う",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Utter words to express a thought.", example: "What did you say?", japanese: "考えを表現するために言葉を発する" }
        ]
      }
    ]
  },
  "ask": {
    word: "ask",
    phonetic: "/æsk/",
    japanese: "尋ねる、頼む",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Request information or an answer.", example: "Can I ask you a question?", japanese: "情報や答えを求める" }
        ]
      }
    ]
  },
  "answer": {
    word: "answer",
    phonetic: "/ˈænsər/",
    japanese: "答え、答える",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A response to a question.", example: "I don't know the answer.", japanese: "質問への返答" }
        ]
      }
    ]
  },
  "question": {
    word: "question",
    phonetic: "/ˈkwɛstʃən/",
    japanese: "質問",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A sentence worded to elicit information.", example: "I have a question.", japanese: "情報を引き出すために言葉にされた文" }
        ]
      }
    ]
  },
  "problem": {
    word: "problem",
    phonetic: "/ˈprɒbləm/",
    japanese: "問題",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A matter that is difficult to deal with.", example: "We have a problem.", japanese: "対処が難しい事柄" }
        ]
      }
    ]
  },
  "idea": {
    word: "idea",
    phonetic: "/aɪˈdɪə/",
    japanese: "考え、アイデア",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A thought or suggestion.", example: "That's a good idea!", japanese: "考えや提案" }
        ]
      }
    ]
  },
  "way": {
    word: "way",
    phonetic: "/weɪ/",
    japanese: "方法、道",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A method or manner of doing something.", example: "This is the best way.", japanese: "何かをする方法や様式" }
        ]
      }
    ]
  },
  "place": {
    word: "place",
    phonetic: "/pleɪs/",
    japanese: "場所",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A particular position or location.", example: "This is a nice place.", japanese: "特定の位置や場所" }
        ]
      }
    ]
  },
  "thing": {
    word: "thing",
    phonetic: "/θɪŋ/",
    japanese: "もの、こと",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An object that is not specifically named.", example: "What is that thing?", japanese: "具体的に名前をつけられていない物体" }
        ]
      }
    ]
  },
  "name": {
    word: "name",
    phonetic: "/neɪm/",
    japanese: "名前",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A word by which a person is known.", example: "What's your name?", japanese: "人が知られている言葉" }
        ]
      }
    ]
  },
  "word": {
    word: "word",
    phonetic: "/wɜːrd/",
    japanese: "単語、言葉",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A single unit of language.", example: "I don't know this word.", japanese: "言語の単一の単位" }
        ]
      }
    ]
  },
  "English": {
    word: "English",
    phonetic: "/ˈɪŋɡlɪʃ/",
    japanese: "英語",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The language spoken in England and many other countries.", example: "I study English every day.", japanese: "イギリスや他の多くの国で話される言語" }
        ]
      }
    ]
  },
  "Japanese": {
    word: "Japanese",
    phonetic: "/ˌdʒæpəˈniːz/",
    japanese: "日本語、日本の",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The language spoken in Japan.", example: "I speak Japanese.", japanese: "日本で話される言語" }
        ]
      }
    ]
  },
  "color": {
    word: "color",
    phonetic: "/ˈkʌlər/",
    japanese: "色",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The property of objects producing different sensations on the eye.", example: "What color do you like?", japanese: "目に異なる感覚を生み出す物体の特性" }
        ]
      }
    ]
  },
  "red": {
    word: "red",
    phonetic: "/rɛd/",
    japanese: "赤",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the color of blood.", example: "A red apple.", japanese: "血の色の" }
        ]
      }
    ]
  },
  "blue": {
    word: "blue",
    phonetic: "/bluː/",
    japanese: "青",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the color of the sky.", example: "The sky is blue.", japanese: "空の色の" }
        ]
      }
    ]
  },
  "green": {
    word: "green",
    phonetic: "/ɡriːn/",
    japanese: "緑",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the color of grass.", example: "Green leaves.", japanese: "草の色の" }
        ]
      }
    ]
  },
  "white": {
    word: "white",
    phonetic: "/waɪt/",
    japanese: "白",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the color of milk or snow.", example: "A white dress.", japanese: "ミルクや雪の色の" }
        ]
      }
    ]
  },
  "black": {
    word: "black",
    phonetic: "/blæk/",
    japanese: "黒",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the darkest color.", example: "A black cat.", japanese: "最も暗い色の" }
        ]
      }
    ]
  },
  "wait": {
    word: "wait",
    phonetic: "/weɪt/",
    japanese: "待つ",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Stay where one is until an expected event happens.", example: "Please wait here.", japanese: "期待される出来事が起こるまでその場にいる" }
        ]
      }
    ]
  },
  "leave": {
    word: "leave",
    phonetic: "/liːv/",
    japanese: "去る、出発する",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Go away from a place.", example: "I have to leave now.", japanese: "場所から離れる" }
        ]
      }
    ]
  },
  "call": {
    word: "call",
    phonetic: "/kɔːl/",
    japanese: "呼ぶ、電話する",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Contact by phone.", example: "I'll call you later.", japanese: "電話で連絡する" }
        ]
      }
    ]
  },
  "meet": {
    word: "meet",
    phonetic: "/miːt/",
    japanese: "会う",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Come into the presence of someone.", example: "Nice to meet you!", japanese: "誰かの前に来る" }
        ]
      }
    ]
  },
  "sorry": {
    word: "sorry",
    phonetic: "/ˈsɒri/",
    japanese: "ごめんなさい、すみません",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Feeling regret or sadness.", example: "I'm sorry for being late.", japanese: "後悔や悲しみを感じている" }
        ]
      }
    ]
  },
  "welcome": {
    word: "welcome",
    phonetic: "/ˈwɛlkəm/",
    japanese: "ようこそ、どういたしまして",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used to greet someone who has arrived.", example: "Welcome to our home!", japanese: "到着した人を迎えるために使う" }
        ]
      }
    ]
  },
  "great": {
    word: "great",
    phonetic: "/ɡreɪt/",
    japanese: "素晴らしい、偉大な",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Very good; excellent.", example: "That's great!", japanese: "とても良い、優れた" }
        ]
      }
    ]
  },
  "nice": {
    word: "nice",
    phonetic: "/naɪs/",
    japanese: "素敵な、良い",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Pleasant; agreeable.", example: "It's a nice day.", japanese: "心地よい、感じの良い" }
        ]
      }
    ]
  },
  "sure": {
    word: "sure",
    phonetic: "/ʃʊr/",
    japanese: "確かな、もちろん",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Certain; confident.", example: "I'm sure it will work.", japanese: "確実な、自信がある" }
        ]
      }
    ]
  },
  "maybe": {
    word: "maybe",
    phonetic: "/ˈmeɪbi/",
    japanese: "たぶん、もしかすると",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Perhaps; possibly.", example: "Maybe I'll come tomorrow.", japanese: "おそらく、可能性として" }
        ]
      }
    ]
  },
  "always": {
    word: "always",
    phonetic: "/ˈɔːlweɪz/",
    japanese: "いつも",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At all times; on every occasion.", example: "I always wake up early.", japanese: "常に、あらゆる機会に" }
        ]
      }
    ]
  },
  "never": {
    word: "never",
    phonetic: "/ˈnɛvər/",
    japanese: "決して〜ない",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At no time; not ever.", example: "I never give up.", japanese: "決して〜ない、一度も〜ない" }
        ]
      }
    ]
  },
  "sometimes": {
    word: "sometimes",
    phonetic: "/ˈsʌmtaɪmz/",
    japanese: "時々",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Occasionally; from time to time.", example: "I sometimes go jogging.", japanese: "時折、時々" }
        ]
      }
    ]
  },
  "often": {
    word: "often",
    phonetic: "/ˈɔːfən/",
    japanese: "よく、しばしば",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Frequently; many times.", example: "I often read books.", japanese: "頻繁に、多くの回" }
        ]
      }
    ]
  },
  "very": {
    word: "very",
    phonetic: "/ˈvɛri/",
    japanese: "とても",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In a high degree; extremely.", example: "I'm very happy.", japanese: "高い程度で、非常に" }
        ]
      }
    ]
  },
  "really": {
    word: "really",
    phonetic: "/ˈriːəli/",
    japanese: "本当に",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In actual fact; truly.", example: "I really mean it.", japanese: "実際に、本当に" }
        ]
      }
    ]
  },
  "just": {
    word: "just",
    phonetic: "/dʒʌst/",
    japanese: "ちょうど、ただ",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Exactly; precisely.", example: "That's just what I needed.", japanese: "正確に、まさに" }
        ]
      }
    ]
  },
  "only": {
    word: "only",
    phonetic: "/ˈoʊnli/",
    japanese: "だけ、唯一の",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "And no one or nothing more.", example: "I only have one sister.", japanese: "そして他に誰も何もない" }
        ]
      }
    ]
  },
  "also": {
    word: "also",
    phonetic: "/ˈɔːlsoʊ/",
    japanese: "〜も、また",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In addition; too.", example: "I also like coffee.", japanese: "加えて、も" }
        ]
      }
    ]
  },
  "too": {
    word: "too",
    phonetic: "/tuː/",
    japanese: "〜も、〜すぎる",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In addition; also.", example: "I want to come too.", japanese: "加えて、も" }
        ]
      }
    ]
  },
  "here": {
    word: "here",
    phonetic: "/hɪr/",
    japanese: "ここ",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In, at, or to this place.", example: "Come here.", japanese: "この場所に、で、へ" }
        ]
      }
    ]
  },
  "there": {
    word: "there",
    phonetic: "/ðɛr/",
    japanese: "そこ",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In, at, or to that place.", example: "Go over there.", japanese: "その場所に、で、へ" }
        ]
      }
    ]
  },
  "now": {
    word: "now",
    phonetic: "/naʊ/",
    japanese: "今",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At the present time.", example: "I'm busy now.", japanese: "現在の時点で" }
        ]
      }
    ]
  },
  "then": {
    word: "then",
    phonetic: "/ðɛn/",
    japanese: "その時、それから",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At that time.", example: "I was young then.", japanese: "その時に" }
        ]
      }
    ]
  },
  "again": {
    word: "again",
    phonetic: "/əˈɡɛn/",
    japanese: "また、再び",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Once more; another time.", example: "Try again.", japanese: "もう一度、別の時に" }
        ]
      }
    ]
  },
  "still": {
    word: "still",
    phonetic: "/stɪl/",
    japanese: "まだ、静かな",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Up to this time; yet.", example: "I'm still waiting.", japanese: "この時まで、まだ" }
        ]
      }
    ]
  },
  "already": {
    word: "already",
    phonetic: "/ɔːlˈrɛdi/",
    japanese: "すでに、もう",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Before now or a specified time.", example: "I've already finished.", japanese: "今または指定された時間の前に" }
        ]
      }
    ]
  },
  "yet": {
    word: "yet",
    phonetic: "/jɛt/",
    japanese: "まだ、それでも",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Up until now; so far.", example: "I haven't finished yet.", japanese: "今まで、これまでのところ" }
        ]
      }
    ]
  },
  "soon": {
    word: "soon",
    phonetic: "/suːn/",
    japanese: "すぐに、まもなく",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In a short time; before long.", example: "I'll be there soon.", japanese: "短い時間で、間もなく" }
        ]
      }
    ]
  },
  "later": {
    word: "later",
    phonetic: "/ˈleɪtər/",
    japanese: "後で",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At a time after the present.", example: "See you later!", japanese: "現在より後の時間に" }
        ]
      }
    ]
  },
  "because": {
    word: "because",
    phonetic: "/bɪˈkɔːz/",
    japanese: "なぜなら",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "For the reason that.", example: "I stayed home because I was sick.", japanese: "その理由は〜だから" }
        ]
      }
    ]
  },
  "but": {
    word: "but",
    phonetic: "/bʌt/",
    japanese: "しかし",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "Used to introduce a contrast.", example: "I tried, but I failed.", japanese: "対比を導入するために使う" }
        ]
      }
    ]
  },
  "and": {
    word: "and",
    phonetic: "/ænd/",
    japanese: "と、そして",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "Used to connect words.", example: "Bread and butter.", japanese: "言葉をつなぐために使う" }
        ]
      }
    ]
  },
  "or": {
    word: "or",
    phonetic: "/ɔːr/",
    japanese: "または",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "Used to link alternatives.", example: "Coffee or tea?", japanese: "選択肢をつなぐために使う" }
        ]
      }
    ]
  },
  "if": {
    word: "if",
    phonetic: "/ɪf/",
    japanese: "もし",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "On the condition that.", example: "If it rains, I'll stay home.", japanese: "〜という条件で" }
        ]
      }
    ]
  },
  "when": {
    word: "when",
    phonetic: "/wɛn/",
    japanese: "いつ、〜する時",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At what time.", example: "When did you arrive?", japanese: "何時に" }
        ]
      }
    ]
  },
  "where": {
    word: "where",
    phonetic: "/wɛr/",
    japanese: "どこ",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At or in what place.", example: "Where are you?", japanese: "どの場所に、で" }
        ]
      }
    ]
  },
  "why": {
    word: "why",
    phonetic: "/waɪ/",
    japanese: "なぜ",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "For what reason.", example: "Why are you sad?", japanese: "何の理由で" }
        ]
      }
    ]
  },
  "how": {
    word: "how",
    phonetic: "/haʊ/",
    japanese: "どのように、どれくらい",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In what way or manner.", example: "How do you do this?", japanese: "どんな方法や様式で" }
        ]
      }
    ]
  },
  "what": {
    word: "what",
    phonetic: "/wɒt/",
    japanese: "何",
    meanings: [
      {
        partOfSpeech: "pronoun",
        definitions: [
          { definition: "Asking for information.", example: "What is your name?", japanese: "情報を求める" }
        ]
      }
    ]
  },
  "who": {
    word: "who",
    phonetic: "/huː/",
    japanese: "誰",
    meanings: [
      {
        partOfSpeech: "pronoun",
        definitions: [
          { definition: "Asking about a person.", example: "Who is that?", japanese: "人について尋ねる" }
        ]
      }
    ]
  },
  "which": {
    word: "which",
    phonetic: "/wɪtʃ/",
    japanese: "どれ、どちら",
    meanings: [
      {
        partOfSpeech: "pronoun",
        definitions: [
          { definition: "Asking for choice from a set.", example: "Which one do you want?", japanese: "セットからの選択を求める" }
        ]
      }
    ]
  },
  "about": {
    word: "about",
    phonetic: "/əˈbaʊt/",
    japanese: "約、〜について",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Concerning or regarding.", example: "Tell me about yourself.", japanese: "〜に関して" }] }
    ]
  },
  "after": {
    word: "after",
    phonetic: "/ˈæftər/",
    japanese: "〜の後に",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Following in time.", example: "After dinner, we watched TV.", japanese: "時間的に後に" }] }
    ]
  },
  "before": {
    word: "before",
    phonetic: "/bɪˈfɔːr/",
    japanese: "〜の前に",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Earlier than.", example: "I arrived before you.", japanese: "〜より早く" }] }
    ]
  },
  "between": {
    word: "between",
    phonetic: "/bɪˈtwiːn/",
    japanese: "〜の間に",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "In the space separating two things.", example: "The cat is between the boxes.", japanese: "2つのものを隔てる空間に" }] }
    ]
  },
  "through": {
    word: "through",
    phonetic: "/θruː/",
    japanese: "〜を通って",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Moving in one side and out the other.", example: "Walk through the door.", japanese: "一方から入り反対側から出る" }] }
    ]
  },
  "during": {
    word: "during",
    phonetic: "/ˈdʊrɪŋ/",
    japanese: "〜の間",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Throughout the duration of.", example: "During the meeting, I took notes.", japanese: "〜の間ずっと" }] }
    ]
  },
  "without": {
    word: "without",
    phonetic: "/wɪˈðaʊt/",
    japanese: "〜なしで",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "In the absence of.", example: "I can't live without you.", japanese: "〜がない状態で" }] }
    ]
  },
  "within": {
    word: "within",
    phonetic: "/wɪˈðɪn/",
    japanese: "〜以内に",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Inside the bounds of.", example: "Reply within 24 hours.", japanese: "〜の範囲内で" }] }
    ]
  },
  "above": {
    word: "above",
    phonetic: "/əˈbʌv/",
    japanese: "〜の上に",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "At a higher level than.", example: "The bird flew above the trees.", japanese: "〜より高い位置に" }] }
    ]
  },
  "below": {
    word: "below",
    phonetic: "/bɪˈloʊ/",
    japanese: "〜の下に",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "At a lower level than.", example: "The fish swam below the surface.", japanese: "〜より低い位置に" }] }
    ]
  },
  "under": {
    word: "under",
    phonetic: "/ˈʌndər/",
    japanese: "〜の下に",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Beneath and covered by.", example: "The cat is under the table.", japanese: "〜の下で覆われて" }] }
    ]
  },
  "over": {
    word: "over",
    phonetic: "/ˈoʊvər/",
    japanese: "〜の上に、終わって",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Above and across.", example: "The plane flew over the city.", japanese: "〜の上を横切って" }] }
    ]
  },
  "into": {
    word: "into",
    phonetic: "/ˈɪntuː/",
    japanese: "〜の中へ",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Expressing movement to the inside.", example: "She walked into the room.", japanese: "中への動きを表す" }] }
    ]
  },
  "onto": {
    word: "onto",
    phonetic: "/ˈɒntuː/",
    japanese: "〜の上へ",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Moving to a position on.", example: "Jump onto the stage.", japanese: "〜の上の位置へ移動" }] }
    ]
  },
  "around": {
    word: "around",
    phonetic: "/əˈraʊnd/",
    japanese: "〜の周りに",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "On every side of.", example: "They sat around the fire.", japanese: "〜の四方に" }] }
    ]
  },
  "along": {
    word: "along",
    phonetic: "/əˈlɒŋ/",
    japanese: "〜に沿って",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "Moving in a constant direction.", example: "Walk along the river.", japanese: "一定の方向に動いて" }] }
    ]
  },
  "across": {
    word: "across",
    phonetic: "/əˈkrɒs/",
    japanese: "〜を横切って",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "From one side to the other.", example: "Swim across the river.", japanese: "一方から他方へ" }] }
    ]
  },
  "toward": {
    word: "toward",
    phonetic: "/təˈwɔːrd/",
    japanese: "〜に向かって",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "In the direction of.", example: "Walk toward the light.", japanese: "〜の方向に" }] }
    ]
  },
  "against": {
    word: "against",
    phonetic: "/əˈɡɛnst/",
    japanese: "〜に対して",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "In opposition to.", example: "I'm against the idea.", japanese: "〜に反対して" }] }
    ]
  },
  "behind": {
    word: "behind",
    phonetic: "/bɪˈhaɪnd/",
    japanese: "〜の後ろに",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "At the back of.", example: "Hide behind the tree.", japanese: "〜の背後に" }] }
    ]
  },
  "beside": {
    word: "beside",
    phonetic: "/bɪˈsaɪd/",
    japanese: "〜のそばに",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "At the side of.", example: "Sit beside me.", japanese: "〜の横に" }] }
    ]
  },
  "near": {
    word: "near",
    phonetic: "/nɪr/",
    japanese: "〜の近くに",
    meanings: [
      { partOfSpeech: "preposition", definitions: [{ definition: "At a short distance from.", example: "The school is near my house.", japanese: "〜から短い距離に" }] }
    ]
  },
  "far": {
    word: "far",
    phonetic: "/fɑːr/",
    japanese: "遠い",
    meanings: [
      { partOfSpeech: "adverb", definitions: [{ definition: "At a great distance.", example: "How far is it?", japanese: "大きな距離に" }] }
    ]
  },
  "close": {
    word: "close",
    phonetic: "/kloʊz/",
    japanese: "閉じる、近い",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move to cover an opening.", example: "Close the door.", japanese: "開口部を覆うように動かす" }] },
      { partOfSpeech: "adjective", definitions: [{ definition: "At a short distance.", example: "The store is close by.", japanese: "短い距離に" }] }
    ]
  },
  "open": {
    word: "open",
    phonetic: "/ˈoʊpən/",
    japanese: "開ける、開いた",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move to allow access.", example: "Open the window.", japanese: "アクセスを許すように動かす" }] },
      { partOfSpeech: "adjective", definitions: [{ definition: "Not closed or blocked.", example: "The shop is open.", japanese: "閉じていない、塞がれていない" }] }
    ]
  },
  "start": {
    word: "start",
    phonetic: "/stɑːrt/",
    japanese: "始める、開始",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Begin or set in motion.", example: "Start the engine.", japanese: "始めるまたは動かし始める" }] }
    ]
  },
  "stop": {
    word: "stop",
    phonetic: "/stɒp/",
    japanese: "止まる、やめる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Cease moving or operating.", example: "Stop the car.", japanese: "動くまたは作動するのをやめる" }] }
    ]
  },
  "begin": {
    word: "begin",
    phonetic: "/bɪˈɡɪn/",
    japanese: "始まる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Start to happen.", example: "The show will begin soon.", japanese: "起こり始める" }] }
    ]
  },
  "end": {
    word: "end",
    phonetic: "/ɛnd/",
    japanese: "終わり、終える",
    meanings: [
      { partOfSpeech: "noun", definitions: [{ definition: "The final part.", example: "The end of the movie.", japanese: "最後の部分" }] },
      { partOfSpeech: "verb", definitions: [{ definition: "Come to a conclusion.", example: "The meeting ended at 5.", japanese: "結論に達する" }] }
    ]
  },
  "finish": {
    word: "finish",
    phonetic: "/ˈfɪnɪʃ/",
    japanese: "終える、完了する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Complete an action.", example: "I finished my homework.", japanese: "行動を完了する" }] }
    ]
  },
  "continue": {
    word: "continue",
    phonetic: "/kənˈtɪnjuː/",
    japanese: "続ける",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Persist in an activity.", example: "Continue reading.", japanese: "活動を続ける" }] }
    ]
  },
  "keep": {
    word: "keep",
    phonetic: "/kiːp/",
    japanese: "保つ、続ける",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Retain possession of.", example: "Keep the change.", japanese: "所有し続ける" }] }
    ]
  },
  "hold": {
    word: "hold",
    phonetic: "/hoʊld/",
    japanese: "持つ、握る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Grasp with hands.", example: "Hold my hand.", japanese: "手で握る" }] }
    ]
  },
  "put": {
    word: "put",
    phonetic: "/pʊt/",
    japanese: "置く",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Place in a position.", example: "Put it on the table.", japanese: "位置に置く" }] }
    ]
  },
  "take": {
    word: "take",
    phonetic: "/teɪk/",
    japanese: "取る、連れて行く",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Reach for and hold.", example: "Take my hand.", japanese: "手を伸ばして持つ" }] }
    ]
  },
  "bring": {
    word: "bring",
    phonetic: "/brɪŋ/",
    japanese: "持ってくる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Carry toward the speaker.", example: "Bring me some water.", japanese: "話者の方へ運ぶ" }] }
    ]
  },
  "carry": {
    word: "carry",
    phonetic: "/ˈkæri/",
    japanese: "運ぶ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Support and move.", example: "Carry the bags.", japanese: "支えて動かす" }] }
    ]
  },
  "move": {
    word: "move",
    phonetic: "/muːv/",
    japanese: "動く、動かす",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Change position.", example: "Don't move!", japanese: "位置を変える" }] }
    ]
  },
  "turn": {
    word: "turn",
    phonetic: "/tɜːrn/",
    japanese: "回る、曲がる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move in a circular direction.", example: "Turn left at the corner.", japanese: "円を描くように動く" }] }
    ]
  },
  "stand": {
    word: "stand",
    phonetic: "/stænd/",
    japanese: "立つ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be on one's feet.", example: "Please stand up.", japanese: "足で立っている" }] }
    ]
  },
  "sit": {
    word: "sit",
    phonetic: "/sɪt/",
    japanese: "座る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be seated.", example: "Sit down, please.", japanese: "座っている" }] }
    ]
  },
  "lie": {
    word: "lie",
    phonetic: "/laɪ/",
    japanese: "横になる、嘘をつく",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be in a horizontal position.", example: "Lie on the bed.", japanese: "水平な姿勢でいる" }] }
    ]
  },
  "rise": {
    word: "rise",
    phonetic: "/raɪz/",
    japanese: "上がる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move from a lower to a higher position.", example: "The sun will rise.", japanese: "低い位置から高い位置へ動く" }] }
    ]
  },
  "fall": {
    word: "fall",
    phonetic: "/fɔːl/",
    japanese: "落ちる、秋",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Drop down from a higher place.", example: "Leaves fall in autumn.", japanese: "高い場所から下に落ちる" }] }
    ]
  },
  "grow": {
    word: "grow",
    phonetic: "/ɡroʊ/",
    japanese: "成長する、育てる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Increase in size.", example: "Children grow fast.", japanese: "大きさが増す" }] }
    ]
  },
  "become": {
    word: "become",
    phonetic: "/bɪˈkʌm/",
    japanese: "〜になる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Begin to be.", example: "She became a doctor.", japanese: "〜であり始める" }] }
    ]
  },
  "seem": {
    word: "seem",
    phonetic: "/siːm/",
    japanese: "〜のように見える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Give the impression of being.", example: "You seem tired.", japanese: "〜である印象を与える" }] }
    ]
  },
  "appear": {
    word: "appear",
    phonetic: "/əˈpɪr/",
    japanese: "現れる、〜に見える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Come into sight.", example: "The sun appeared.", japanese: "見えるようになる" }] }
    ]
  },
  "show": {
    word: "show",
    phonetic: "/ʃoʊ/",
    japanese: "見せる、示す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make visible.", example: "Show me your work.", japanese: "見えるようにする" }] }
    ]
  },
  "tell": {
    word: "tell",
    phonetic: "/tɛl/",
    japanese: "伝える、話す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Communicate information.", example: "Tell me the truth.", japanese: "情報を伝える" }] }
    ]
  },
  "ask": {
    word: "ask",
    phonetic: "/æsk/",
    japanese: "尋ねる、頼む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Request information.", example: "Ask a question.", japanese: "情報を求める" }] }
    ]
  },
  "answer": {
    word: "answer",
    phonetic: "/ˈænsər/",
    japanese: "答える、答え",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Respond to a question.", example: "Answer the phone.", japanese: "質問に応答する" }] }
    ]
  },
  "speak": {
    word: "speak",
    phonetic: "/spiːk/",
    japanese: "話す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Say words.", example: "Speak slowly, please.", japanese: "言葉を言う" }] }
    ]
  },
  "talk": {
    word: "talk",
    phonetic: "/tɔːk/",
    japanese: "話す、会話",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Have a conversation.", example: "Let's talk later.", japanese: "会話をする" }] }
    ]
  },
  "say": {
    word: "say",
    phonetic: "/seɪ/",
    japanese: "言う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Utter words.", example: "What did you say?", japanese: "言葉を発する" }] }
    ]
  },
  "hear": {
    word: "hear",
    phonetic: "/hɪr/",
    japanese: "聞こえる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Perceive with the ear.", example: "I can hear music.", japanese: "耳で知覚する" }] }
    ]
  },
  "listen": {
    word: "listen",
    phonetic: "/ˈlɪsən/",
    japanese: "聞く、耳を傾ける",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Give attention to sound.", example: "Listen to this song.", japanese: "音に注意を向ける" }] }
    ]
  },
  "see": {
    word: "see",
    phonetic: "/siː/",
    japanese: "見る、分かる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Perceive with the eyes.", example: "I see a bird.", japanese: "目で知覚する" }] }
    ]
  },
  "look": {
    word: "look",
    phonetic: "/lʊk/",
    japanese: "見る、〜に見える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Direct one's gaze.", example: "Look at me.", japanese: "視線を向ける" }] }
    ]
  },
  "watch": {
    word: "watch",
    phonetic: "/wɒtʃ/",
    japanese: "見る、腕時計",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Look at attentively.", example: "Watch the movie.", japanese: "注意深く見る" }] }
    ]
  },
  "feel": {
    word: "feel",
    phonetic: "/fiːl/",
    japanese: "感じる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be aware of through senses.", example: "I feel cold.", japanese: "感覚を通じて認識する" }] }
    ]
  },
  "touch": {
    word: "touch",
    phonetic: "/tʌtʃ/",
    japanese: "触る、触れる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Come into contact with.", example: "Don't touch that!", japanese: "〜と接触する" }] }
    ]
  },
  "smell": {
    word: "smell",
    phonetic: "/smɛl/",
    japanese: "匂いがする、嗅ぐ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Perceive odor.", example: "This flower smells nice.", japanese: "匂いを知覚する" }] }
    ]
  },
  "taste": {
    word: "taste",
    phonetic: "/teɪst/",
    japanese: "味がする、味わう",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Perceive flavor.", example: "Taste this soup.", japanese: "味を知覚する" }] }
    ]
  },
  "eat": {
    word: "eat",
    phonetic: "/iːt/",
    japanese: "食べる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Put food in mouth and swallow.", example: "Let's eat dinner.", japanese: "食べ物を口に入れて飲み込む" }] }
    ]
  },
  "drink": {
    word: "drink",
    phonetic: "/drɪŋk/",
    japanese: "飲む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Take liquid into the mouth.", example: "Drink some water.", japanese: "液体を口に入れる" }] }
    ]
  },
  "sleep": {
    word: "sleep",
    phonetic: "/sliːp/",
    japanese: "眠る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Rest in a state of sleep.", example: "I need to sleep.", japanese: "睡眠状態で休む" }] }
    ]
  },
  "wake": {
    word: "wake",
    phonetic: "/weɪk/",
    japanese: "起きる、起こす",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Stop sleeping.", example: "Wake up early.", japanese: "眠るのをやめる" }] }
    ]
  },
  "live": {
    word: "live",
    phonetic: "/lɪv/",
    japanese: "住む、生きる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Remain alive.", example: "Where do you live?", japanese: "生き続ける" }] }
    ]
  },
  "die": {
    word: "die",
    phonetic: "/daɪ/",
    japanese: "死ぬ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Stop living.", example: "The plant died.", japanese: "生きるのをやめる" }] }
    ]
  },
  "kill": {
    word: "kill",
    phonetic: "/kɪl/",
    japanese: "殺す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Cause to die.", example: "Don't kill the spider.", japanese: "死なせる" }] }
    ]
  },
  "cut": {
    word: "cut",
    phonetic: "/kʌt/",
    japanese: "切る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make an opening with a sharp tool.", example: "Cut the paper.", japanese: "鋭い道具で開口部を作る" }] }
    ]
  },
  "break": {
    word: "break",
    phonetic: "/breɪk/",
    japanese: "壊す、休憩",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Separate into pieces.", example: "Don't break the glass.", japanese: "ピースに分ける" }] }
    ]
  },
  "fix": {
    word: "fix",
    phonetic: "/fɪks/",
    japanese: "直す、修理する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Repair something.", example: "Fix the broken chair.", japanese: "何かを修理する" }] }
    ]
  },
  "build": {
    word: "build",
    phonetic: "/bɪld/",
    japanese: "建てる、構築する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Construct by putting parts together.", example: "Build a house.", japanese: "部品を組み合わせて構築する" }] }
    ]
  },
  "create": {
    word: "create",
    phonetic: "/kriˈeɪt/",
    japanese: "作る、創造する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Bring into existence.", example: "Create something new.", japanese: "存在させる" }] }
    ]
  },
  "make": {
    word: "make",
    phonetic: "/meɪk/",
    japanese: "作る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Form by putting parts together.", example: "Make a cake.", japanese: "部品を組み合わせて形成する" }] }
    ]
  },
  "use": {
    word: "use",
    phonetic: "/juːz/",
    japanese: "使う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Take and hold for a purpose.", example: "Use a pen to write.", japanese: "目的のために取って持つ" }] }
    ]
  },
  "try": {
    word: "try",
    phonetic: "/traɪ/",
    japanese: "試す、努力する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make an attempt.", example: "Try your best.", japanese: "試みをする" }] }
    ]
  },
  "need": {
    word: "need",
    phonetic: "/niːd/",
    japanese: "必要とする",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Require something.", example: "I need help.", japanese: "何かを必要とする" }] }
    ]
  },
  "want": {
    word: "want",
    phonetic: "/wɒnt/",
    japanese: "欲しい、したい",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Desire something.", example: "I want ice cream.", japanese: "何かを望む" }] }
    ]
  },
  "like": {
    word: "like",
    phonetic: "/laɪk/",
    japanese: "好き、〜のような",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Find agreeable.", example: "I like pizza.", japanese: "好ましいと思う" }] }
    ]
  },
  "hope": {
    word: "hope",
    phonetic: "/hoʊp/",
    japanese: "望む、希望",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Want something to happen.", example: "I hope you're well.", japanese: "何かが起こることを望む" }] }
    ]
  },
  "wish": {
    word: "wish",
    phonetic: "/wɪʃ/",
    japanese: "願う、望む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Feel a strong desire.", example: "I wish I could fly.", japanese: "強い願望を感じる" }] }
    ]
  },
  "expect": {
    word: "expect",
    phonetic: "/ɪkˈspɛkt/",
    japanese: "期待する、予期する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Regard as likely to happen.", example: "I expect rain tomorrow.", japanese: "起こりそうだと思う" }] }
    ]
  },
  "believe": {
    word: "believe",
    phonetic: "/bɪˈliːv/",
    japanese: "信じる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Accept as true.", example: "I believe you.", japanese: "真実として受け入れる" }] }
    ]
  },
  "think": {
    word: "think",
    phonetic: "/θɪŋk/",
    japanese: "考える、思う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Use the mind to consider.", example: "I think it's a good idea.", japanese: "心を使って考慮する" }] }
    ]
  },
  "know": {
    word: "know",
    phonetic: "/noʊ/",
    japanese: "知っている",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be aware of through observation.", example: "I know the answer.", japanese: "観察を通じて認識している" }] }
    ]
  },
  "learn": {
    word: "learn",
    phonetic: "/lɜːrn/",
    japanese: "学ぶ、習う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Gain knowledge or skill.", example: "Learn a new language.", japanese: "知識やスキルを得る" }] }
    ]
  },
  "teach": {
    word: "teach",
    phonetic: "/tiːtʃ/",
    japanese: "教える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Impart knowledge to.", example: "Teach me how to cook.", japanese: "知識を伝える" }] }
    ]
  },
  "study": {
    word: "study",
    phonetic: "/ˈstʌdi/",
    japanese: "勉強する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Apply the mind to learning.", example: "Study hard for the exam.", japanese: "学習に心を向ける" }] }
    ]
  },
  "read": {
    word: "read",
    phonetic: "/riːd/",
    japanese: "読む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Look at and understand written words.", example: "Read a book.", japanese: "書かれた言葉を見て理解する" }] }
    ]
  },
  "write": {
    word: "write",
    phonetic: "/raɪt/",
    japanese: "書く",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Mark letters on a surface.", example: "Write your name.", japanese: "表面に文字を記す" }] }
    ]
  },
  "play": {
    word: "play",
    phonetic: "/pleɪ/",
    japanese: "遊ぶ、演奏する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Engage in activity for enjoyment.", example: "Play with friends.", japanese: "楽しみのための活動に従事する" }] }
    ]
  },
  "work": {
    word: "work",
    phonetic: "/wɜːrk/",
    japanese: "働く、仕事",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Do a job or task.", example: "I work every day.", japanese: "仕事やタスクをする" }] }
    ]
  },
  "help": {
    word: "help",
    phonetic: "/hɛlp/",
    japanese: "助ける、手伝う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make it easier for someone.", example: "Can you help me?", japanese: "誰かにとって楽にする" }] }
    ]
  },
  "give": {
    word: "give",
    phonetic: "/ɡɪv/",
    japanese: "あげる、与える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Freely transfer to someone.", example: "Give me your hand.", japanese: "誰かに自由に渡す" }] }
    ]
  },
  "get": {
    word: "get",
    phonetic: "/ɡɛt/",
    japanese: "得る、なる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Come to have or receive.", example: "Get a gift.", japanese: "持つようになるまたは受け取る" }] }
    ]
  },
  "send": {
    word: "send",
    phonetic: "/sɛnd/",
    japanese: "送る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Cause to go to a destination.", example: "Send an email.", japanese: "目的地に行かせる" }] }
    ]
  },
  "receive": {
    word: "receive",
    phonetic: "/rɪˈsiːv/",
    japanese: "受け取る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be given something.", example: "Receive a package.", japanese: "何かを与えられる" }] }
    ]
  },
  "buy": {
    word: "buy",
    phonetic: "/baɪ/",
    japanese: "買う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Obtain in exchange for payment.", example: "Buy some food.", japanese: "支払いと引き換えに得る" }] }
    ]
  },
  "sell": {
    word: "sell",
    phonetic: "/sɛl/",
    japanese: "売る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Give in exchange for money.", example: "Sell your car.", japanese: "お金と引き換えに与える" }] }
    ]
  },
  "pay": {
    word: "pay",
    phonetic: "/peɪ/",
    japanese: "払う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Give money for goods or services.", example: "Pay the bill.", japanese: "商品やサービスにお金を払う" }] }
    ]
  },
  "cost": {
    word: "cost",
    phonetic: "/kɒst/",
    japanese: "費用がかかる、値段",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Require a specified payment.", example: "How much does it cost?", japanese: "特定の支払いを必要とする" }] }
    ]
  },
  "spend": {
    word: "spend",
    phonetic: "/spɛnd/",
    japanese: "使う、過ごす",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Pay out money.", example: "Spend money wisely.", japanese: "お金を支払う" }] }
    ]
  },
  "save": {
    word: "save",
    phonetic: "/seɪv/",
    japanese: "救う、節約する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Keep safe from harm.", example: "Save the document.", japanese: "害から安全に保つ" }] }
    ]
  },
  "lose": {
    word: "lose",
    phonetic: "/luːz/",
    japanese: "失う、負ける",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be deprived of.", example: "Don't lose your key.", japanese: "〜を奪われる" }] }
    ]
  },
  "find": {
    word: "find",
    phonetic: "/faɪnd/",
    japanese: "見つける",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Discover or locate.", example: "Find your phone.", japanese: "発見するまたは見つける" }] }
    ]
  },
  "leave": {
    word: "leave",
    phonetic: "/liːv/",
    japanese: "去る、残す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Go away from.", example: "Leave the room.", japanese: "〜から去る" }] }
    ]
  },
  "stay": {
    word: "stay",
    phonetic: "/steɪ/",
    japanese: "滞在する、留まる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Remain in a place.", example: "Stay here.", japanese: "場所に留まる" }] }
    ]
  },
  "arrive": {
    word: "arrive",
    phonetic: "/əˈraɪv/",
    japanese: "到着する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Reach a destination.", example: "We will arrive soon.", japanese: "目的地に到達する" }] }
    ]
  },
  "return": {
    word: "return",
    phonetic: "/rɪˈtɜːrn/",
    japanese: "戻る、返す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Come or go back.", example: "Return home.", japanese: "戻ってくるまたは行く" }] }
    ]
  },
  "visit": {
    word: "visit",
    phonetic: "/ˈvɪzɪt/",
    japanese: "訪問する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Go to see someone or a place.", example: "Visit your grandmother.", japanese: "誰かまたは場所を見に行く" }] }
    ]
  },
  "meet": {
    word: "meet",
    phonetic: "/miːt/",
    japanese: "会う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Come into the presence of.", example: "Nice to meet you.", japanese: "〜の前に来る" }] }
    ]
  },
  "join": {
    word: "join",
    phonetic: "/dʒɔɪn/",
    japanese: "加わる、参加する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Link or connect.", example: "Join our team.", japanese: "つなげるまたは接続する" }] }
    ]
  },
  "follow": {
    word: "follow",
    phonetic: "/ˈfɒloʊ/",
    japanese: "従う、追う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Go or come after.", example: "Follow me.", japanese: "〜の後を行くまたは来る" }] }
    ]
  },
  "lead": {
    word: "lead",
    phonetic: "/liːd/",
    japanese: "導く、先頭",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Show the way to.", example: "Lead the team.", japanese: "〜への道を示す" }] }
    ]
  },
  "wait": {
    word: "wait",
    phonetic: "/weɪt/",
    japanese: "待つ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Stay in place until something happens.", example: "Wait for me.", japanese: "何かが起こるまでその場に留まる" }] }
    ]
  },
  "run": {
    word: "run",
    phonetic: "/rʌn/",
    japanese: "走る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move at a speed faster than walking.", example: "Run fast!", japanese: "歩くより速く動く" }] }
    ]
  },
  "walk": {
    word: "walk",
    phonetic: "/wɔːk/",
    japanese: "歩く",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move at a regular pace by lifting each foot.", example: "Walk to school.", japanese: "各足を上げて規則的なペースで動く" }] }
    ]
  },
  "jump": {
    word: "jump",
    phonetic: "/dʒʌmp/",
    japanese: "跳ぶ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Push oneself off the ground.", example: "Jump over the fence.", japanese: "地面から自分を押し上げる" }] }
    ]
  },
  "fly": {
    word: "fly",
    phonetic: "/flaɪ/",
    japanese: "飛ぶ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move through the air.", example: "Birds can fly.", japanese: "空中を移動する" }] }
    ]
  },
  "swim": {
    word: "swim",
    phonetic: "/swɪm/",
    japanese: "泳ぐ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Propel the body through water.", example: "Swim in the pool.", japanese: "水中で体を推進する" }] }
    ]
  },
  "drive": {
    word: "drive",
    phonetic: "/draɪv/",
    japanese: "運転する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Operate and control a vehicle.", example: "Drive a car.", japanese: "車両を操作してコントロールする" }] }
    ]
  },
  "ride": {
    word: "ride",
    phonetic: "/raɪd/",
    japanese: "乗る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Sit on and control a moving animal or vehicle.", example: "Ride a bike.", japanese: "動物や乗り物に乗ってコントロールする" }] }
    ]
  },
  "travel": {
    word: "travel",
    phonetic: "/ˈtrævəl/",
    japanese: "旅行する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Go from one place to another.", example: "Travel the world.", japanese: "ある場所から別の場所へ行く" }] }
    ]
  },
  "call": {
    word: "call",
    phonetic: "/kɔːl/",
    japanese: "呼ぶ、電話する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Cry out to summon someone.", example: "Call your mother.", japanese: "誰かを呼び出すために叫ぶ" }] }
    ]
  },
  "change": {
    word: "change",
    phonetic: "/tʃeɪndʒ/",
    japanese: "変える、変化",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make or become different.", example: "Change your clothes.", japanese: "異なるものにするまたはなる" }] }
    ]
  },
  "choose": {
    word: "choose",
    phonetic: "/tʃuːz/",
    japanese: "選ぶ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Pick out as being the best.", example: "Choose wisely.", japanese: "最良のものとして選び出す" }] }
    ]
  },
  "decide": {
    word: "decide",
    phonetic: "/dɪˈsaɪd/",
    japanese: "決める",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Come to a resolution.", example: "Decide what to do.", japanese: "解決に達する" }] }
    ]
  },
  "remember": {
    word: "remember",
    phonetic: "/rɪˈmɛmbər/",
    japanese: "覚えている",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Have in one's mind.", example: "Remember my name.", japanese: "心に持っている" }] }
    ]
  },
  "forget": {
    word: "forget",
    phonetic: "/fərˈɡɛt/",
    japanese: "忘れる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Fail to remember.", example: "Don't forget your keys.", japanese: "思い出せない" }] }
    ]
  },
  "understand": {
    word: "understand",
    phonetic: "/ˌʌndərˈstænd/",
    japanese: "理解する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Perceive the meaning of.", example: "I understand you.", japanese: "意味を理解する" }] }
    ]
  },
  "explain": {
    word: "explain",
    phonetic: "/ɪkˈspleɪn/",
    japanese: "説明する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make clear by describing.", example: "Explain the rules.", japanese: "説明して明確にする" }] }
    ]
  },
  "mean": {
    word: "mean",
    phonetic: "/miːn/",
    japanese: "意味する、意地悪な",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Intend to convey.", example: "What do you mean?", japanese: "伝えるつもりである" }] }
    ]
  },
  "agree": {
    word: "agree",
    phonetic: "/əˈɡriː/",
    japanese: "同意する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Have the same opinion.", example: "I agree with you.", japanese: "同じ意見を持つ" }] }
    ]
  },
  "disagree": {
    word: "disagree",
    phonetic: "/ˌdɪsəˈɡriː/",
    japanese: "反対する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Have a different opinion.", example: "I disagree with that.", japanese: "異なる意見を持つ" }] }
    ]
  },
  "accept": {
    word: "accept",
    phonetic: "/əkˈsɛpt/",
    japanese: "受け入れる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Consent to receive.", example: "Accept the offer.", japanese: "受け取ることに同意する" }] }
    ]
  },
  "refuse": {
    word: "refuse",
    phonetic: "/rɪˈfjuːz/",
    japanese: "断る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Indicate unwillingness.", example: "Refuse to help.", japanese: "意思がないことを示す" }] }
    ]
  },
  "allow": {
    word: "allow",
    phonetic: "/əˈlaʊ/",
    japanese: "許可する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Give permission for.", example: "Allow me to explain.", japanese: "〜の許可を与える" }] }
    ]
  },
  "let": {
    word: "let",
    phonetic: "/lɛt/",
    japanese: "〜させる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Not prevent or forbid.", example: "Let me go.", japanese: "妨げたり禁じたりしない" }] }
    ]
  },
  "check": {
    word: "check",
    phonetic: "/tʃɛk/",
    japanese: "確認する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Examine to determine accuracy.", example: "Check your work.", japanese: "正確さを確認するために調べる" }] }
    ]
  },
  "include": {
    word: "include",
    phonetic: "/ɪnˈkluːd/",
    japanese: "含む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Contain as part of a whole.", example: "The price includes tax.", japanese: "全体の一部として含む" }] }
    ]
  },
  "add": {
    word: "add",
    phonetic: "/æd/",
    japanese: "加える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Join something to something else.", example: "Add sugar to the coffee.", japanese: "何かを別のものに加える" }] }
    ]
  },
  "remove": {
    word: "remove",
    phonetic: "/rɪˈmuːv/",
    japanese: "取り除く",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Take away from a position.", example: "Remove the stain.", japanese: "位置から取り去る" }] }
    ]
  },
  "develop": {
    word: "develop",
    phonetic: "/dɪˈvɛləp/",
    japanese: "発展させる、開発する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Grow or cause to grow.", example: "Develop new skills.", japanese: "成長するまたは成長させる" }] }
    ]
  },
  "improve": {
    word: "improve",
    phonetic: "/ɪmˈpruːv/",
    japanese: "改善する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make or become better.", example: "Improve your English.", japanese: "より良くするまたはなる" }] }
    ]
  },
  "increase": {
    word: "increase",
    phonetic: "/ɪnˈkriːs/",
    japanese: "増加する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Become or make greater.", example: "Prices will increase.", japanese: "より大きくなるまたはする" }] }
    ]
  },
  "reduce": {
    word: "reduce",
    phonetic: "/rɪˈdjuːs/",
    japanese: "減らす",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make smaller in size or amount.", example: "Reduce waste.", japanese: "サイズや量を小さくする" }] }
    ]
  },
  "support": {
    word: "support",
    phonetic: "/səˈpɔːrt/",
    japanese: "支援する、支える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Give assistance to.", example: "Support your team.", japanese: "〜に援助を与える" }] }
    ]
  },
  "provide": {
    word: "provide",
    phonetic: "/prəˈvaɪd/",
    japanese: "提供する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make available for use.", example: "Provide information.", japanese: "使用可能にする" }] }
    ]
  },
  "offer": {
    word: "offer",
    phonetic: "/ˈɒfər/",
    japanese: "提供する、申し出る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Present for acceptance.", example: "Offer help.", japanese: "受け入れのために提示する" }] }
    ]
  },
  "share": {
    word: "share",
    phonetic: "/ʃɛr/",
    japanese: "共有する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Give a portion to others.", example: "Share your food.", japanese: "他の人に一部を与える" }] }
    ]
  },
  "pass": {
    word: "pass",
    phonetic: "/pæs/",
    japanese: "渡す、通る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move past something.", example: "Pass the salt.", japanese: "何かを通り過ぎる" }] }
    ]
  },
  "pull": {
    word: "pull",
    phonetic: "/pʊl/",
    japanese: "引く",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Exert force to move toward oneself.", example: "Pull the door.", japanese: "自分に向かって動かすために力を加える" }] }
    ]
  },
  "push": {
    word: "push",
    phonetic: "/pʊʃ/",
    japanese: "押す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Exert force to move away from oneself.", example: "Push the button.", japanese: "自分から離れるように動かすために力を加える" }] }
    ]
  },
  "throw": {
    word: "throw",
    phonetic: "/θroʊ/",
    japanese: "投げる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Propel through the air.", example: "Throw the ball.", japanese: "空中に推進する" }] }
    ]
  },
  "catch": {
    word: "catch",
    phonetic: "/kætʃ/",
    japanese: "捕まえる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Seize or take hold of.", example: "Catch the ball.", japanese: "つかむまたは握る" }] }
    ]
  },
  "hit": {
    word: "hit",
    phonetic: "/hɪt/",
    japanese: "打つ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Strike with force.", example: "Hit the target.", japanese: "力で打つ" }] }
    ]
  },
  "kick": {
    word: "kick",
    phonetic: "/kɪk/",
    japanese: "蹴る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Strike with the foot.", example: "Kick the ball.", japanese: "足で打つ" }] }
    ]
  },
  "win": {
    word: "win",
    phonetic: "/wɪn/",
    japanese: "勝つ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be victorious in a contest.", example: "Win the game.", japanese: "コンテストで勝利する" }] }
    ]
  },
  "fight": {
    word: "fight",
    phonetic: "/faɪt/",
    japanese: "戦う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Take part in a violent struggle.", example: "Fight for your rights.", japanese: "暴力的な争いに参加する" }] }
    ]
  },
  "wear": {
    word: "wear",
    phonetic: "/wɛr/",
    japanese: "着る、身につける",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Have on one's body as clothing.", example: "Wear a hat.", japanese: "衣服として体につける" }] }
    ]
  },
  "dress": {
    word: "dress",
    phonetic: "/drɛs/",
    japanese: "服を着せる、ドレス",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Put on clothes.", example: "Dress the baby.", japanese: "服を着る" }] },
      { partOfSpeech: "noun", definitions: [{ definition: "A woman's garment.", example: "She wore a red dress.", japanese: "女性の衣服" }] }
    ]
  },
  "wash": {
    word: "wash",
    phonetic: "/wɒʃ/",
    japanese: "洗う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Clean with water.", example: "Wash your hands.", japanese: "水で洗う" }] }
    ]
  },
  "clean": {
    word: "clean",
    phonetic: "/kliːn/",
    japanese: "きれいにする、きれいな",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make free from dirt.", example: "Clean the room.", japanese: "汚れをなくす" }] }
    ]
  },
  "cook": {
    word: "cook",
    phonetic: "/kʊk/",
    japanese: "料理する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Prepare food by heating.", example: "Cook dinner.", japanese: "加熱して食べ物を準備する" }] }
    ]
  },
  "bake": {
    word: "bake",
    phonetic: "/beɪk/",
    japanese: "焼く（オーブンで）",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Cook by dry heat in an oven.", example: "Bake a cake.", japanese: "オーブンで乾熱調理する" }] }
    ]
  },
  "order": {
    word: "order",
    phonetic: "/ˈɔːrdər/",
    japanese: "注文する、順序",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Request something to be made or supplied.", example: "Order food online.", japanese: "何かを作るまたは供給するように頼む" }] }
    ]
  },
  "serve": {
    word: "serve",
    phonetic: "/sɜːrv/",
    japanese: "給仕する、仕える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Present food or drink.", example: "Serve the guests.", japanese: "食べ物や飲み物を出す" }] }
    ]
  },
  "fill": {
    word: "fill",
    phonetic: "/fɪl/",
    japanese: "満たす",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make or become full.", example: "Fill the glass.", japanese: "いっぱいにするまたはなる" }] }
    ]
  },
  "empty": {
    word: "empty",
    phonetic: "/ˈɛmpti/",
    japanese: "空にする、空の",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Remove all contents from.", example: "Empty the trash.", japanese: "すべての中身を取り出す" }] }
    ]
  },
  "prepare": {
    word: "prepare",
    phonetic: "/prɪˈpɛr/",
    japanese: "準備する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make ready for use.", example: "Prepare for the exam.", japanese: "使用のために準備する" }] }
    ]
  },
  "plan": {
    word: "plan",
    phonetic: "/plæn/",
    japanese: "計画する、計画",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Decide on and arrange in advance.", example: "Plan your trip.", japanese: "事前に決定して手配する" }] }
    ]
  },
  "set": {
    word: "set",
    phonetic: "/sɛt/",
    japanese: "設定する、セット",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Put or arrange in a place.", example: "Set the table.", japanese: "場所に置くまたは配置する" }] }
    ]
  },
  "pick": {
    word: "pick",
    phonetic: "/pɪk/",
    japanese: "選ぶ、摘む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Choose from alternatives.", example: "Pick a card.", japanese: "選択肢から選ぶ" }] }
    ]
  },
  "drop": {
    word: "drop",
    phonetic: "/drɒp/",
    japanese: "落とす、しずく",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Let fall.", example: "Don't drop the glass.", japanese: "落とす" }] }
    ]
  },
  "raise": {
    word: "raise",
    phonetic: "/reɪz/",
    japanese: "上げる、育てる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Lift to a higher position.", example: "Raise your hand.", japanese: "より高い位置に上げる" }] }
    ]
  },
  "lower": {
    word: "lower",
    phonetic: "/ˈloʊər/",
    japanese: "下げる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move to a lower position.", example: "Lower your voice.", japanese: "より低い位置に動かす" }] }
    ]
  },
  "hang": {
    word: "hang",
    phonetic: "/hæŋ/",
    japanese: "掛ける、吊るす",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Suspend from above.", example: "Hang the picture.", japanese: "上から吊るす" }] }
    ]
  },
  "connect": {
    word: "connect",
    phonetic: "/kəˈnɛkt/",
    japanese: "接続する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Link together.", example: "Connect to WiFi.", japanese: "一緒につなぐ" }] }
    ]
  },
  "separate": {
    word: "separate",
    phonetic: "/ˈsɛpəreɪt/",
    japanese: "分ける、別々の",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Divide into parts.", example: "Separate the eggs.", japanese: "部分に分ける" }] }
    ]
  },
  "mix": {
    word: "mix",
    phonetic: "/mɪks/",
    japanese: "混ぜる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Combine together.", example: "Mix the ingredients.", japanese: "一緒に組み合わせる" }] }
    ]
  },
  "compare": {
    word: "compare",
    phonetic: "/kəmˈpɛr/",
    japanese: "比較する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Examine similarities and differences.", example: "Compare the prices.", japanese: "類似点と相違点を調べる" }] }
    ]
  },
  "copy": {
    word: "copy",
    phonetic: "/ˈkɒpi/",
    japanese: "コピーする、複製",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make a duplicate of.", example: "Copy the file.", japanese: "複製を作る" }] }
    ]
  },
  "count": {
    word: "count",
    phonetic: "/kaʊnt/",
    japanese: "数える",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Determine the total number.", example: "Count to ten.", japanese: "合計数を決定する" }] }
    ]
  },
  "measure": {
    word: "measure",
    phonetic: "/ˈmɛʒər/",
    japanese: "測る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Ascertain the size or amount.", example: "Measure the length.", japanese: "サイズや量を確認する" }] }
    ]
  },
  "test": {
    word: "test",
    phonetic: "/tɛst/",
    japanese: "テストする、試験",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Take measures to check quality.", example: "Test the product.", japanese: "品質を確認するための措置を取る" }] }
    ]
  },
  "guess": {
    word: "guess",
    phonetic: "/ɡɛs/",
    japanese: "推測する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Estimate without sufficient information.", example: "Guess the answer.", japanese: "十分な情報なしに推測する" }] }
    ]
  },
  "draw": {
    word: "draw",
    phonetic: "/drɔː/",
    japanese: "描く、引く",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Produce a picture.", example: "Draw a circle.", japanese: "絵を描く" }] }
    ]
  },
  "paint": {
    word: "paint",
    phonetic: "/peɪnt/",
    japanese: "塗る、絵を描く",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Apply color to a surface.", example: "Paint the wall.", japanese: "表面に色を塗る" }] }
    ]
  },
  "sing": {
    word: "sing",
    phonetic: "/sɪŋ/",
    japanese: "歌う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make musical sounds with the voice.", example: "Sing a song.", japanese: "声で音楽的な音を出す" }] }
    ]
  },
  "dance": {
    word: "dance",
    phonetic: "/dæns/",
    japanese: "踊る、ダンス",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Move rhythmically to music.", example: "Dance with me.", japanese: "音楽に合わせてリズミカルに動く" }] }
    ]
  },
  "laugh": {
    word: "laugh",
    phonetic: "/læf/",
    japanese: "笑う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make sounds expressing amusement.", example: "Laugh at a joke.", japanese: "楽しさを表す音を出す" }] }
    ]
  },
  "cry": {
    word: "cry",
    phonetic: "/kraɪ/",
    japanese: "泣く、叫ぶ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Shed tears.", example: "Don't cry.", japanese: "涙を流す" }] }
    ]
  },
  "smile": {
    word: "smile",
    phonetic: "/smaɪl/",
    japanese: "微笑む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Form a pleased expression.", example: "Smile for the camera.", japanese: "喜んだ表情をする" }] }
    ]
  },
  "enjoy": {
    word: "enjoy",
    phonetic: "/ɪnˈdʒɔɪ/",
    japanese: "楽しむ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Take delight in.", example: "Enjoy your meal.", japanese: "〜を喜ぶ" }] }
    ]
  },
  "hate": {
    word: "hate",
    phonetic: "/heɪt/",
    japanese: "嫌う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Feel intense dislike for.", example: "I hate lies.", japanese: "強い嫌悪を感じる" }] }
    ]
  },
  "care": {
    word: "care",
    phonetic: "/kɛr/",
    japanese: "気にかける、世話",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Feel concern.", example: "I care about you.", japanese: "関心を感じる" }] }
    ]
  },
  "worry": {
    word: "worry",
    phonetic: "/ˈwɜːri/",
    japanese: "心配する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Feel anxious.", example: "Don't worry about it.", japanese: "不安を感じる" }] }
    ]
  },
  "hurt": {
    word: "hurt",
    phonetic: "/hɜːrt/",
    japanese: "傷つける、痛い",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Cause physical or mental pain.", example: "That hurts!", japanese: "身体的または精神的な痛みを引き起こす" }] }
    ]
  },
  "surprise": {
    word: "surprise",
    phonetic: "/sərˈpraɪz/",
    japanese: "驚かせる、驚き",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Cause to feel amazement.", example: "Surprise your friend.", japanese: "驚きを感じさせる" }] }
    ]
  },
  "satisfy": {
    word: "satisfy",
    phonetic: "/ˈsætɪsfaɪ/",
    japanese: "満足させる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Meet the expectations of.", example: "Satisfy the customer.", japanese: "期待に応える" }] }
    ]
  },
  "prefer": {
    word: "prefer",
    phonetic: "/prɪˈfɜːr/",
    japanese: "〜を好む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Like better.", example: "I prefer tea to coffee.", japanese: "より好きである" }] }
    ]
  },
  "miss": {
    word: "miss",
    phonetic: "/mɪs/",
    japanese: "逃す、恋しく思う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Fail to hit or catch.", example: "I miss you.", japanese: "当たらないまたはキャッチできない" }] }
    ]
  },
  "reach": {
    word: "reach",
    phonetic: "/riːtʃ/",
    japanese: "届く、達する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Stretch out to touch.", example: "Reach the top shelf.", japanese: "触れるために伸ばす" }] }
    ]
  },
  "cross": {
    word: "cross",
    phonetic: "/krɒs/",
    japanese: "渡る、横切る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Go or extend across.", example: "Cross the street.", japanese: "横切って行くまたは伸びる" }] }
    ]
  },
  "enter": {
    word: "enter",
    phonetic: "/ˈɛntər/",
    japanese: "入る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Come or go into.", example: "Enter the room.", japanese: "〜の中に入る" }] }
    ]
  },
  "exit": {
    word: "exit",
    phonetic: "/ˈɛɡzɪt/",
    japanese: "出る、出口",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Go out of.", example: "Exit the building.", japanese: "〜から出る" }] }
    ]
  },
  "climb": {
    word: "climb",
    phonetic: "/klaɪm/",
    japanese: "登る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Go up toward the top.", example: "Climb the mountain.", japanese: "頂上に向かって上がる" }] }
    ]
  },
  "rest": {
    word: "rest",
    phonetic: "/rɛst/",
    japanese: "休む、残り",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Cease work or movement.", example: "Take a rest.", japanese: "仕事や動きをやめる" }] }
    ]
  },
  "relax": {
    word: "relax",
    phonetic: "/rɪˈlæks/",
    japanese: "リラックスする",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Become less tense.", example: "Relax and enjoy.", japanese: "緊張が緩む" }] }
    ]
  },
  "exercise": {
    word: "exercise",
    phonetic: "/ˈɛksərsaɪz/",
    japanese: "運動する、練習",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Engage in physical activity.", example: "Exercise every day.", japanese: "身体活動に従事する" }] }
    ]
  },
  "practice": {
    word: "practice",
    phonetic: "/ˈpræktɪs/",
    japanese: "練習する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Perform an activity repeatedly.", example: "Practice the piano.", japanese: "活動を繰り返し行う" }] }
    ]
  },
  "train": {
    word: "train",
    phonetic: "/treɪn/",
    japanese: "訓練する、電車",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Teach skills through practice.", example: "Train for the race.", japanese: "練習を通じてスキルを教える" }] }
    ]
  },
  "type": {
    word: "type",
    phonetic: "/taɪp/",
    japanese: "タイプする、種類",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Write using a keyboard.", example: "Type a message.", japanese: "キーボードを使って書く" }] }
    ]
  },
  "search": {
    word: "search",
    phonetic: "/sɜːrtʃ/",
    japanese: "検索する、探す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Try to find something.", example: "Search the web.", japanese: "何かを見つけようとする" }] }
    ]
  },
  "click": {
    word: "click",
    phonetic: "/klɪk/",
    japanese: "クリックする",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Press a button on a mouse.", example: "Click the link.", japanese: "マウスのボタンを押す" }] }
    ]
  },
  "download": {
    word: "download",
    phonetic: "/ˈdaʊnloʊd/",
    japanese: "ダウンロードする",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Copy data from the internet.", example: "Download the app.", japanese: "インターネットからデータをコピーする" }] }
    ]
  },
  "upload": {
    word: "upload",
    phonetic: "/ˈʌploʊd/",
    japanese: "アップロードする",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Transfer data to a server.", example: "Upload your photo.", japanese: "データをサーバーに転送する" }] }
    ]
  },
  "delete": {
    word: "delete",
    phonetic: "/dɪˈliːt/",
    japanese: "削除する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Remove or erase.", example: "Delete the file.", japanese: "削除または消す" }] }
    ]
  },
  "print": {
    word: "print",
    phonetic: "/prɪnt/",
    japanese: "印刷する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Produce text or images on paper.", example: "Print the document.", japanese: "紙にテキストや画像を作成する" }] }
    ]
  },
  "record": {
    word: "record",
    phonetic: "/rɪˈkɔːrd/",
    japanese: "記録する、録音する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Set down in writing or other form.", example: "Record the meeting.", japanese: "書面または他の形式で記録する" }] }
    ]
  },
  "edit": {
    word: "edit",
    phonetic: "/ˈɛdɪt/",
    japanese: "編集する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Prepare for publication by correcting.", example: "Edit the text.", japanese: "修正して出版の準備をする" }] }
    ]
  },
  "translate": {
    word: "translate",
    phonetic: "/trænsˈleɪt/",
    japanese: "翻訳する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Express in another language.", example: "Translate to Japanese.", japanese: "別の言語で表現する" }] }
    ]
  },
  "pronounce": {
    word: "pronounce",
    phonetic: "/prəˈnaʊns/",
    japanese: "発音する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make the sound of a word.", example: "Pronounce this word.", japanese: "単語の音を出す" }] }
    ]
  },
  "spell": {
    word: "spell",
    phonetic: "/spɛl/",
    japanese: "綴る",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Write or name the letters of a word.", example: "Spell your name.", japanese: "単語の文字を書くまたは言う" }] }
    ]
  },
  "repeat": {
    word: "repeat",
    phonetic: "/rɪˈpiːt/",
    japanese: "繰り返す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Say or do again.", example: "Repeat after me.", japanese: "もう一度言うまたはする" }] }
    ]
  },
  "describe": {
    word: "describe",
    phonetic: "/dɪˈskraɪb/",
    japanese: "描写する、説明する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Give an account of.", example: "Describe the picture.", japanese: "〜について説明する" }] }
    ]
  },
  "discuss": {
    word: "discuss",
    phonetic: "/dɪˈskʌs/",
    japanese: "議論する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Talk about something.", example: "Discuss the plan.", japanese: "何かについて話す" }] }
    ]
  },
  "solve": {
    word: "solve",
    phonetic: "/sɒlv/",
    japanese: "解決する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Find an answer to.", example: "Solve the problem.", japanese: "〜への答えを見つける" }] }
    ]
  },
  "complete": {
    word: "complete",
    phonetic: "/kəmˈpliːt/",
    japanese: "完成する、完全な",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Finish making or doing.", example: "Complete the task.", japanese: "作るまたはすることを終える" }] }
    ]
  },
  "succeed": {
    word: "succeed",
    phonetic: "/səkˈsiːd/",
    japanese: "成功する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Achieve the desired result.", example: "You will succeed.", japanese: "望んだ結果を達成する" }] }
    ]
  },
  "fail": {
    word: "fail",
    phonetic: "/feɪl/",
    japanese: "失敗する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be unsuccessful.", example: "Don't be afraid to fail.", japanese: "うまくいかない" }] }
    ]
  },
  "focus": {
    word: "focus",
    phonetic: "/ˈfoʊkəs/",
    japanese: "集中する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Concentrate attention on.", example: "Focus on your work.", japanese: "〜に注意を集中する" }] }
    ]
  },
  "notice": {
    word: "notice",
    phonetic: "/ˈnoʊtɪs/",
    japanese: "気づく、通知",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Become aware of.", example: "I noticed a change.", japanese: "〜に気づく" }] }
    ]
  },
  "ignore": {
    word: "ignore",
    phonetic: "/ɪɡˈnɔːr/",
    japanese: "無視する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Refuse to notice.", example: "Ignore the noise.", japanese: "気づくことを拒む" }] }
    ]
  },
  "avoid": {
    word: "avoid",
    phonetic: "/əˈvɔɪd/",
    japanese: "避ける",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Keep away from.", example: "Avoid the traffic.", japanese: "〜から離れている" }] }
    ]
  },
  "face": {
    word: "face",
    phonetic: "/feɪs/",
    japanese: "顔、向かう",
    meanings: [
      { partOfSpeech: "noun", definitions: [{ definition: "The front of the head.", example: "A smiling face.", japanese: "頭の前部" }] },
      { partOfSpeech: "verb", definitions: [{ definition: "Confront something.", example: "Face the truth.", japanese: "何かに向き合う" }] }
    ]
  },
  "handle": {
    word: "handle",
    phonetic: "/ˈhændl/",
    japanese: "扱う、取っ手",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Manage a situation.", example: "Handle with care.", japanese: "状況を管理する" }] }
    ]
  },
  "manage": {
    word: "manage",
    phonetic: "/ˈmænɪdʒ/",
    japanese: "管理する、何とかする",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be in charge of.", example: "Manage a team.", japanese: "〜を担当する" }] }
    ]
  },
  "control": {
    word: "control",
    phonetic: "/kənˈtroʊl/",
    japanese: "制御する、コントロール",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Direct the operation of.", example: "Control your emotions.", japanese: "〜の操作を指示する" }] }
    ]
  },
  "protect": {
    word: "protect",
    phonetic: "/prəˈtɛkt/",
    japanese: "守る、保護する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Keep safe from harm.", example: "Protect the environment.", japanese: "害から安全に保つ" }] }
    ]
  },
  "prevent": {
    word: "prevent",
    phonetic: "/prɪˈvɛnt/",
    japanese: "防ぐ",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Stop from happening.", example: "Prevent accidents.", japanese: "起こるのを止める" }] }
    ]
  },
  "cause": {
    word: "cause",
    phonetic: "/kɔːz/",
    japanese: "引き起こす、原因",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Make something happen.", example: "Cause trouble.", japanese: "何かを起こさせる" }] }
    ]
  },
  "happen": {
    word: "happen",
    phonetic: "/ˈhæpən/",
    japanese: "起こる",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Take place.", example: "What happened?", japanese: "起こる" }] }
    ]
  },
  "exist": {
    word: "exist",
    phonetic: "/ɪɡˈzɪst/",
    japanese: "存在する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Have reality or being.", example: "Does life exist on Mars?", japanese: "現実または存在を持つ" }] }
    ]
  },
  "require": {
    word: "require",
    phonetic: "/rɪˈkwaɪər/",
    japanese: "必要とする",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Need for a purpose.", example: "This requires patience.", japanese: "目的のために必要とする" }] }
    ]
  },
  "depend": {
    word: "depend",
    phonetic: "/dɪˈpɛnd/",
    japanese: "依存する、次第である",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Rely on.", example: "It depends on the weather.", japanese: "〜に頼る" }] }
    ]
  },
  "belong": {
    word: "belong",
    phonetic: "/bɪˈlɒŋ/",
    japanese: "属する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Be a member of.", example: "I belong to this club.", japanese: "〜のメンバーである" }] }
    ]
  },
  "contain": {
    word: "contain",
    phonetic: "/kənˈteɪn/",
    japanese: "含む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Have as a component.", example: "This contains sugar.", japanese: "成分として持つ" }] }
    ]
  },
  "involve": {
    word: "involve",
    phonetic: "/ɪnˈvɒlv/",
    japanese: "巻き込む、含む",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Include as a necessary part.", example: "This involves risk.", japanese: "必要な部分として含む" }] }
    ]
  },
  "represent": {
    word: "represent",
    phonetic: "/ˌrɛprɪˈzɛnt/",
    japanese: "代表する、表す",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Stand for or symbolize.", example: "This represents hope.", japanese: "〜を表すまたは象徴する" }] }
    ]
  },
  "express": {
    word: "express",
    phonetic: "/ɪkˈsprɛs/",
    japanese: "表現する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Convey in words or actions.", example: "Express your feelings.", japanese: "言葉や行動で伝える" }] }
    ]
  },
  "introduce": {
    word: "introduce",
    phonetic: "/ˌɪntrəˈdjuːs/",
    japanese: "紹介する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Present someone to another.", example: "Let me introduce myself.", japanese: "誰かを別の人に紹介する" }] }
    ]
  },
  "mention": {
    word: "mention",
    phonetic: "/ˈmɛnʃən/",
    japanese: "言及する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Refer to briefly.", example: "Don't mention it.", japanese: "簡単に言及する" }] }
    ]
  },
  "suggest": {
    word: "suggest",
    phonetic: "/səˈdʒɛst/",
    japanese: "提案する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Put forward for consideration.", example: "I suggest we leave.", japanese: "検討のために提出する" }] }
    ]
  },
  "recommend": {
    word: "recommend",
    phonetic: "/ˌrɛkəˈmɛnd/",
    japanese: "勧める",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Suggest as suitable.", example: "I recommend this book.", japanese: "適切だと提案する" }] }
    ]
  },
  "promise": {
    word: "promise",
    phonetic: "/ˈprɒmɪs/",
    japanese: "約束する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Assure that something will happen.", example: "I promise to help.", japanese: "何かが起こることを保証する" }] }
    ]
  },
  "confirm": {
    word: "confirm",
    phonetic: "/kənˈfɜːrm/",
    japanese: "確認する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Establish the truth of.", example: "Confirm your booking.", japanese: "真実を確立する" }] }
    ]
  },
  "prove": {
    word: "prove",
    phonetic: "/pruːv/",
    japanese: "証明する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Demonstrate the truth of.", example: "Prove your point.", japanese: "真実を示す" }] }
    ]
  },
  "suppose": {
    word: "suppose",
    phonetic: "/səˈpoʊz/",
    japanese: "思う、仮定する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Assume that something is true.", example: "I suppose so.", japanese: "何かが真実だと仮定する" }] }
    ]
  },
  "wonder": {
    word: "wonder",
    phonetic: "/ˈwʌndər/",
    japanese: "不思議に思う",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Feel curious about.", example: "I wonder why.", japanese: "〜について好奇心を感じる" }] }
    ]
  },
  "realize": {
    word: "realize",
    phonetic: "/ˈriːəlaɪz/",
    japanese: "気づく、実現する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Become fully aware of.", example: "I realized my mistake.", japanese: "十分に気づく" }] }
    ]
  },
  "recognize": {
    word: "recognize",
    phonetic: "/ˈrɛkəɡnaɪz/",
    japanese: "認識する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Identify from previous experience.", example: "I recognize that face.", japanese: "以前の経験から識別する" }] }
    ]
  },
  "consider": {
    word: "consider",
    phonetic: "/kənˈsɪdər/",
    japanese: "考慮する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Think carefully about.", example: "Consider your options.", japanese: "〜について慎重に考える" }] }
    ]
  },
  "assume": {
    word: "assume",
    phonetic: "/əˈsjuːm/",
    japanese: "仮定する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Suppose to be true without proof.", example: "I assume you agree.", japanese: "証拠なしに真実だと仮定する" }] }
    ]
  },
  "imagine": {
    word: "imagine",
    phonetic: "/ɪˈmædʒɪn/",
    japanese: "想像する",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Form a mental image of.", example: "Imagine a better world.", japanese: "〜の心象を形成する" }] }
    ]
  },
  "dream": {
    word: "dream",
    phonetic: "/driːm/",
    japanese: "夢を見る、夢",
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "Experience images while sleeping.", example: "I dream of success.", japanese: "睡眠中にイメージを経験する" }] }
    ]
  }
};
