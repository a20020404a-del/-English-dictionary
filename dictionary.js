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
  }
};
