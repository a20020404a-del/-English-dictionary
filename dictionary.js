// オフライン用辞書データ（よく使う英単語）
const OFFLINE_DICTIONARY = {
  "hello": {
    word: "hello",
    phonetic: "/həˈloʊ/",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used as a greeting or to begin a phone conversation.", example: "Hello, how are you?" }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An utterance of 'hello'; a greeting.", example: "She gave me a warm hello." }
        ]
      }
    ]
  },
  "goodbye": {
    word: "goodbye",
    phonetic: "/ɡʊdˈbaɪ/",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used to express good wishes when parting.", example: "Goodbye, see you tomorrow!" }
        ]
      }
    ]
  },
  "thank": {
    word: "thank",
    phonetic: "/θæŋk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Express gratitude to someone.", example: "I thanked him for his help." }
        ]
      }
    ]
  },
  "thanks": {
    word: "thanks",
    phonetic: "/θæŋks/",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "An expression of gratitude.", example: "Thanks for your help!" }
        ]
      }
    ]
  },
  "please": {
    word: "please",
    phonetic: "/pliːz/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Used to add politeness to a request.", example: "Please sit down." }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Give satisfaction or pleasure to.", example: "The gift pleased her greatly." }
        ]
      }
    ]
  },
  "yes": {
    word: "yes",
    phonetic: "/jɛs/",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used to give an affirmative response.", example: "Yes, I agree." }
        ]
      }
    ]
  },
  "no": {
    word: "no",
    phonetic: "/noʊ/",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used to give a negative response.", example: "No, I don't think so." }
        ]
      },
      {
        partOfSpeech: "determiner",
        definitions: [
          { definition: "Not any.", example: "There is no time left." }
        ]
      }
    ]
  },
  "good": {
    word: "good",
    phonetic: "/ɡʊd/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of a high quality, standard, or level.", example: "This is a good book." },
          { definition: "Morally right; virtuous.", example: "He is a good person." }
        ]
      }
    ]
  },
  "bad": {
    word: "bad",
    phonetic: "/bæd/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of poor quality or a low standard.", example: "The weather is bad today." },
          { definition: "Not such as to be hoped for; unpleasant.", example: "I have bad news." }
        ]
      }
    ]
  },
  "love": {
    word: "love",
    phonetic: "/lʌv/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An intense feeling of deep affection.", example: "Their love grew stronger over time." }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Feel deep affection for someone.", example: "I love my family." }
        ]
      }
    ]
  },
  "hate": {
    word: "hate",
    phonetic: "/heɪt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Feel intense dislike for.", example: "I hate being late." }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "Intense dislike; hatred.", example: "Eyes full of hate." }
        ]
      }
    ]
  },
  "happy": {
    word: "happy",
    phonetic: "/ˈhæpi/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Feeling or showing pleasure or contentment.", example: "She looks very happy today." }
        ]
      }
    ]
  },
  "sad": {
    word: "sad",
    phonetic: "/sæd/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Feeling or showing sorrow; unhappy.", example: "I feel sad when you leave." }
        ]
      }
    ]
  },
  "beautiful": {
    word: "beautiful",
    phonetic: "/ˈbjuːtɪfəl/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Pleasing the senses or mind aesthetically.", example: "What a beautiful sunset!" }
        ]
      }
    ]
  },
  "ugly": {
    word: "ugly",
    phonetic: "/ˈʌɡli/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Unpleasant or repulsive in appearance.", example: "An ugly building." }
        ]
      }
    ]
  },
  "big": {
    word: "big",
    phonetic: "/bɪɡ/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of considerable size or extent.", example: "A big house." }
        ]
      }
    ]
  },
  "small": {
    word: "small",
    phonetic: "/smɔːl/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of a size that is less than normal.", example: "A small dog." }
        ]
      }
    ]
  },
  "hot": {
    word: "hot",
    phonetic: "/hɒt/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Having a high temperature.", example: "The coffee is too hot." }
        ]
      }
    ]
  },
  "cold": {
    word: "cold",
    phonetic: "/koʊld/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of or at a low temperature.", example: "It's cold outside." }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A common viral infection.", example: "I caught a cold." }
        ]
      }
    ]
  },
  "water": {
    word: "water",
    phonetic: "/ˈwɔːtər/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A colorless, transparent liquid that forms seas and rain.", example: "A glass of water." }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Pour water over a plant.", example: "I water the garden every day." }
        ]
      }
    ]
  },
  "food": {
    word: "food",
    phonetic: "/fuːd/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "Any nutritious substance that people eat or drink.", example: "We need food to survive." }
        ]
      }
    ]
  },
  "eat": {
    word: "eat",
    phonetic: "/iːt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Put food into the mouth and swallow it.", example: "Let's eat dinner." }
        ]
      }
    ]
  },
  "drink": {
    word: "drink",
    phonetic: "/drɪŋk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Take liquid into the mouth and swallow.", example: "I drink coffee every morning." }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A liquid that can be swallowed as refreshment.", example: "Would you like a drink?" }
        ]
      }
    ]
  },
  "sleep": {
    word: "sleep",
    phonetic: "/sliːp/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Rest with eyes closed and body inactive.", example: "I need to sleep early tonight." }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A condition of body and mind during rest.", example: "I had a good sleep." }
        ]
      }
    ]
  },
  "work": {
    word: "work",
    phonetic: "/wɜːrk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Be engaged in physical or mental activity.", example: "I work from home." }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "Activity involving mental or physical effort.", example: "I have a lot of work to do." }
        ]
      }
    ]
  },
  "play": {
    word: "play",
    phonetic: "/pleɪ/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Engage in activity for enjoyment.", example: "The children play in the park." },
          { definition: "Take part in a sport or game.", example: "I play tennis on weekends." }
        ]
      }
    ]
  },
  "run": {
    word: "run",
    phonetic: "/rʌn/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move at a speed faster than a walk.", example: "I run every morning." }
        ]
      }
    ]
  },
  "walk": {
    word: "walk",
    phonetic: "/wɔːk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move at a regular pace by lifting each foot.", example: "I walk to school." }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An act of walking.", example: "Let's go for a walk." }
        ]
      }
    ]
  },
  "come": {
    word: "come",
    phonetic: "/kʌm/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move toward or approach.", example: "Come here, please." }
        ]
      }
    ]
  },
  "go": {
    word: "go",
    phonetic: "/ɡoʊ/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move from one place to another.", example: "I go to work by train." }
        ]
      }
    ]
  },
  "see": {
    word: "see",
    phonetic: "/siː/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Perceive with the eyes.", example: "I can see the mountain from here." },
          { definition: "Understand or realize.", example: "I see what you mean." }
        ]
      }
    ]
  },
  "hear": {
    word: "hear",
    phonetic: "/hɪr/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Perceive with the ear.", example: "I can hear music." }
        ]
      }
    ]
  },
  "speak": {
    word: "speak",
    phonetic: "/spiːk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Say words; talk.", example: "Can you speak English?" }
        ]
      }
    ]
  },
  "read": {
    word: "read",
    phonetic: "/riːd/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Look at and understand written words.", example: "I like to read books." }
        ]
      }
    ]
  },
  "write": {
    word: "write",
    phonetic: "/raɪt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Mark letters or words on a surface.", example: "I write in my journal every day." }
        ]
      }
    ]
  },
  "think": {
    word: "think",
    phonetic: "/θɪŋk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Have a particular opinion or belief.", example: "I think you're right." },
          { definition: "Direct one's mind toward something.", example: "Let me think about it." }
        ]
      }
    ]
  },
  "know": {
    word: "know",
    phonetic: "/noʊ/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Be aware of through observation or information.", example: "I know the answer." }
        ]
      }
    ]
  },
  "learn": {
    word: "learn",
    phonetic: "/lɜːrn/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Gain knowledge or skill through study or experience.", example: "I want to learn Japanese." }
        ]
      }
    ]
  },
  "teach": {
    word: "teach",
    phonetic: "/tiːtʃ/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Show or explain how to do something.", example: "She teaches English at school." }
        ]
      }
    ]
  },
  "help": {
    word: "help",
    phonetic: "/hɛlp/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Make it easier for someone to do something.", example: "Can you help me?" }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "Assistance given to someone.", example: "I need your help." }
        ]
      }
    ]
  },
  "want": {
    word: "want",
    phonetic: "/wɒnt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Have a desire to possess or do something.", example: "I want to travel the world." }
        ]
      }
    ]
  },
  "need": {
    word: "need",
    phonetic: "/niːd/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Require something because it is essential.", example: "I need more time." }
        ]
      }
    ]
  },
  "like": {
    word: "like",
    phonetic: "/laɪk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Find agreeable or enjoyable.", example: "I like pizza." }
        ]
      },
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Similar to.", example: "She looks like her mother." }
        ]
      }
    ]
  },
  "make": {
    word: "make",
    phonetic: "/meɪk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Create or produce something.", example: "I make breakfast every morning." }
        ]
      }
    ]
  },
  "take": {
    word: "take",
    phonetic: "/teɪk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Reach for and hold.", example: "Take my hand." },
          { definition: "Carry or bring with oneself.", example: "I'll take an umbrella." }
        ]
      }
    ]
  },
  "give": {
    word: "give",
    phonetic: "/ɡɪv/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Transfer the possession of something to someone.", example: "I'll give you a gift." }
        ]
      }
    ]
  },
  "get": {
    word: "get",
    phonetic: "/ɡɛt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Come to have or hold; receive.", example: "I got a letter from her." },
          { definition: "Succeed in achieving.", example: "I need to get better at this." }
        ]
      }
    ]
  },
  "find": {
    word: "find",
    phonetic: "/faɪnd/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Discover or locate.", example: "I can't find my keys." }
        ]
      }
    ]
  },
  "time": {
    word: "time",
    phonetic: "/taɪm/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The indefinite continued progress of existence.", example: "Time flies when you're having fun." },
          { definition: "A point measured in hours and minutes.", example: "What time is it?" }
        ]
      }
    ]
  },
  "day": {
    word: "day",
    phonetic: "/deɪ/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A period of 24 hours.", example: "It rained all day." }
        ]
      }
    ]
  },
  "night": {
    word: "night",
    phonetic: "/naɪt/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The period from sunset to sunrise.", example: "Good night!" }
        ]
      }
    ]
  },
  "morning": {
    word: "morning",
    phonetic: "/ˈmɔːrnɪŋ/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The period from sunrise to noon.", example: "Good morning!" }
        ]
      }
    ]
  },
  "afternoon": {
    word: "afternoon",
    phonetic: "/ˌæftərˈnuːn/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The time from noon to evening.", example: "I'll see you this afternoon." }
        ]
      }
    ]
  },
  "evening": {
    word: "evening",
    phonetic: "/ˈiːvnɪŋ/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The period at the end of the day.", example: "Good evening!" }
        ]
      }
    ]
  },
  "today": {
    word: "today",
    phonetic: "/təˈdeɪ/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "On this present day.", example: "I'm busy today." }
        ]
      }
    ]
  },
  "tomorrow": {
    word: "tomorrow",
    phonetic: "/təˈmɒroʊ/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "On the day after today.", example: "See you tomorrow!" }
        ]
      }
    ]
  },
  "yesterday": {
    word: "yesterday",
    phonetic: "/ˈjɛstərdeɪ/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "On the day before today.", example: "I saw her yesterday." }
        ]
      }
    ]
  },
  "week": {
    word: "week",
    phonetic: "/wiːk/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A period of seven days.", example: "I'll finish it next week." }
        ]
      }
    ]
  },
  "month": {
    word: "month",
    phonetic: "/mʌnθ/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A period of about 30 days.", example: "I moved here last month." }
        ]
      }
    ]
  },
  "year": {
    word: "year",
    phonetic: "/jɪr/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A period of 365 days.", example: "Happy New Year!" }
        ]
      }
    ]
  },
  "house": {
    word: "house",
    phonetic: "/haʊs/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A building for people to live in.", example: "They live in a big house." }
        ]
      }
    ]
  },
  "home": {
    word: "home",
    phonetic: "/hoʊm/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The place where one lives.", example: "I'm going home." }
        ]
      }
    ]
  },
  "school": {
    word: "school",
    phonetic: "/skuːl/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An institution for educating children.", example: "I go to school by bus." }
        ]
      }
    ]
  },
  "book": {
    word: "book",
    phonetic: "/bʊk/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A written or printed work of pages.", example: "I'm reading a good book." }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Reserve accommodation or a ticket.", example: "I booked a hotel room." }
        ]
      }
    ]
  },
  "friend": {
    word: "friend",
    phonetic: "/frɛnd/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A person with whom one has a bond of mutual affection.", example: "She's my best friend." }
        ]
      }
    ]
  },
  "family": {
    word: "family",
    phonetic: "/ˈfæmɪli/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A group of parents and children.", example: "I love my family." }
        ]
      }
    ]
  },
  "mother": {
    word: "mother",
    phonetic: "/ˈmʌðər/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A female parent.", example: "My mother is a teacher." }
        ]
      }
    ]
  },
  "father": {
    word: "father",
    phonetic: "/ˈfɑːðər/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A male parent.", example: "My father works at a bank." }
        ]
      }
    ]
  },
  "child": {
    word: "child",
    phonetic: "/tʃaɪld/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A young human being.", example: "The child is playing in the park." }
        ]
      }
    ]
  },
  "man": {
    word: "man",
    phonetic: "/mæn/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An adult male human.", example: "The man is wearing a hat." }
        ]
      }
    ]
  },
  "woman": {
    word: "woman",
    phonetic: "/ˈwʊmən/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An adult female human.", example: "The woman is reading a book." }
        ]
      }
    ]
  },
  "people": {
    word: "people",
    phonetic: "/ˈpiːpəl/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "Human beings in general.", example: "Many people came to the event." }
        ]
      }
    ]
  },
  "world": {
    word: "world",
    phonetic: "/wɜːrld/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The earth and all its people.", example: "I want to travel the world." }
        ]
      }
    ]
  },
  "country": {
    word: "country",
    phonetic: "/ˈkʌntri/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A nation with its own government.", example: "Japan is a beautiful country." }
        ]
      }
    ]
  },
  "city": {
    word: "city",
    phonetic: "/ˈsɪti/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A large town.", example: "Tokyo is a big city." }
        ]
      }
    ]
  },
  "car": {
    word: "car",
    phonetic: "/kɑːr/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A road vehicle with an engine.", example: "I drive my car to work." }
        ]
      }
    ]
  },
  "money": {
    word: "money",
    phonetic: "/ˈmʌni/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A medium of exchange in the form of coins and banknotes.", example: "I don't have enough money." }
        ]
      }
    ]
  },
  "buy": {
    word: "buy",
    phonetic: "/baɪ/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Obtain in exchange for payment.", example: "I want to buy a new phone." }
        ]
      }
    ]
  },
  "sell": {
    word: "sell",
    phonetic: "/sɛl/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Give something in exchange for money.", example: "They sell fresh vegetables." }
        ]
      }
    ]
  },
  "new": {
    word: "new",
    phonetic: "/nuː/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Recently made or discovered.", example: "I bought a new laptop." }
        ]
      }
    ]
  },
  "old": {
    word: "old",
    phonetic: "/oʊld/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Having lived for a long time.", example: "My grandmother is 90 years old." },
          { definition: "Made or existing long ago.", example: "This is an old building." }
        ]
      }
    ]
  },
  "young": {
    word: "young",
    phonetic: "/jʌŋ/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Having lived for only a short time.", example: "She is still young." }
        ]
      }
    ]
  },
  "long": {
    word: "long",
    phonetic: "/lɔːŋ/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Measuring a great distance.", example: "It's a long road." }
        ]
      }
    ]
  },
  "short": {
    word: "short",
    phonetic: "/ʃɔːrt/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Measuring a small distance.", example: "She has short hair." },
          { definition: "Lasting a small amount of time.", example: "It was a short meeting." }
        ]
      }
    ]
  },
  "high": {
    word: "high",
    phonetic: "/haɪ/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Extending far upward.", example: "A high mountain." }
        ]
      }
    ]
  },
  "low": {
    word: "low",
    phonetic: "/loʊ/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of less than average height.", example: "A low table." },
          { definition: "Below average in amount.", example: "Low prices." }
        ]
      }
    ]
  },
  "fast": {
    word: "fast",
    phonetic: "/fæst/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Moving or capable of moving quickly.", example: "A fast car." }
        ]
      },
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At high speed.", example: "He runs fast." }
        ]
      }
    ]
  },
  "slow": {
    word: "slow",
    phonetic: "/sloʊ/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Moving or operating at a low speed.", example: "The slow train." }
        ]
      }
    ]
  },
  "easy": {
    word: "easy",
    phonetic: "/ˈiːzi/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Achieved without great effort.", example: "This test is easy." }
        ]
      }
    ]
  },
  "hard": {
    word: "hard",
    phonetic: "/hɑːrd/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Solid and firm; not easily broken.", example: "A hard surface." },
          { definition: "Requiring great effort.", example: "This is a hard question." }
        ]
      }
    ]
  },
  "important": {
    word: "important",
    phonetic: "/ɪmˈpɔːrtənt/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of great significance or value.", example: "This is an important meeting." }
        ]
      }
    ]
  },
  "different": {
    word: "different",
    phonetic: "/ˈdɪfərənt/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not the same as another.", example: "They have different opinions." }
        ]
      }
    ]
  },
  "same": {
    word: "same",
    phonetic: "/seɪm/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Identical; not different.", example: "We have the same idea." }
        ]
      }
    ]
  },
  "true": {
    word: "true",
    phonetic: "/truː/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "In accordance with fact.", example: "Is it true?" }
        ]
      }
    ]
  },
  "false": {
    word: "false",
    phonetic: "/fɔːls/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not according with truth or fact.", example: "The statement is false." }
        ]
      }
    ]
  },
  "right": {
    word: "right",
    phonetic: "/raɪt/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Morally good or correct.", example: "You made the right decision." },
          { definition: "On the side opposite to left.", example: "Turn right at the corner." }
        ]
      }
    ]
  },
  "wrong": {
    word: "wrong",
    phonetic: "/rɔːŋ/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not correct or true.", example: "That answer is wrong." }
        ]
      }
    ]
  },
  "left": {
    word: "left",
    phonetic: "/lɛft/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "On the side opposite to right.", example: "Turn left here." }
        ]
      }
    ]
  },
  "open": {
    word: "open",
    phonetic: "/ˈoʊpən/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not closed or blocked.", example: "The door is open." }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move so as to allow access.", example: "Please open the window." }
        ]
      }
    ]
  },
  "close": {
    word: "close",
    phonetic: "/kloʊz/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move to cover an opening.", example: "Please close the door." }
        ]
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "A short distance away.", example: "The station is close to my house." }
        ]
      }
    ]
  },
  "start": {
    word: "start",
    phonetic: "/stɑːrt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Begin doing something.", example: "Let's start the meeting." }
        ]
      }
    ]
  },
  "stop": {
    word: "stop",
    phonetic: "/stɒp/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Cease moving or operating.", example: "The bus stopped." },
          { definition: "Cause to come to an end.", example: "Stop making noise." }
        ]
      }
    ]
  },
  "begin": {
    word: "begin",
    phonetic: "/bɪˈɡɪn/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Start; perform the first part of an action.", example: "The class will begin at 9 AM." }
        ]
      }
    ]
  },
  "end": {
    word: "end",
    phonetic: "/ɛnd/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The final part of something.", example: "The end of the story." }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Come or bring to a final point.", example: "The movie ended at 10 PM." }
        ]
      }
    ]
  },
  "try": {
    word: "try",
    phonetic: "/traɪ/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Make an attempt to do something.", example: "I'll try my best." }
        ]
      }
    ]
  },
  "use": {
    word: "use",
    phonetic: "/juːz/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Take, hold, or deploy as a means of achieving something.", example: "I use a computer every day." }
        ]
      }
    ]
  },
  "change": {
    word: "change",
    phonetic: "/tʃeɪndʒ/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Make or become different.", example: "I want to change my hairstyle." }
        ]
      },
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The act of becoming different.", example: "There has been a change in plans." }
        ]
      }
    ]
  },
  "move": {
    word: "move",
    phonetic: "/muːv/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Go from one place to another.", example: "Don't move!" },
          { definition: "Change residence.", example: "We moved to a new apartment." }
        ]
      }
    ]
  },
  "put": {
    word: "put",
    phonetic: "/pʊt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Move to a specified place or position.", example: "Put the book on the table." }
        ]
      }
    ]
  },
  "keep": {
    word: "keep",
    phonetic: "/kiːp/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Have or retain possession of.", example: "Keep the change." },
          { definition: "Continue in a specified condition.", example: "Keep quiet." }
        ]
      }
    ]
  },
  "let": {
    word: "let",
    phonetic: "/lɛt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Allow or permit.", example: "Let me help you." }
        ]
      }
    ]
  },
  "tell": {
    word: "tell",
    phonetic: "/tɛl/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Communicate information to someone.", example: "Tell me a story." }
        ]
      }
    ]
  },
  "say": {
    word: "say",
    phonetic: "/seɪ/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Utter words to express a thought.", example: "What did you say?" }
        ]
      }
    ]
  },
  "ask": {
    word: "ask",
    phonetic: "/æsk/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Request information or an answer.", example: "Can I ask you a question?" }
        ]
      }
    ]
  },
  "answer": {
    word: "answer",
    phonetic: "/ˈænsər/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A response to a question.", example: "I don't know the answer." }
        ]
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Respond to a question.", example: "Please answer my question." }
        ]
      }
    ]
  },
  "question": {
    word: "question",
    phonetic: "/ˈkwɛstʃən/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A sentence worded to elicit information.", example: "I have a question." }
        ]
      }
    ]
  },
  "problem": {
    word: "problem",
    phonetic: "/ˈprɒbləm/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A matter that is difficult to deal with.", example: "We have a problem." }
        ]
      }
    ]
  },
  "idea": {
    word: "idea",
    phonetic: "/aɪˈdɪə/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A thought or suggestion.", example: "That's a good idea!" }
        ]
      }
    ]
  },
  "way": {
    word: "way",
    phonetic: "/weɪ/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A method or manner of doing something.", example: "This is the best way." },
          { definition: "A road or path.", example: "Which way should I go?" }
        ]
      }
    ]
  },
  "place": {
    word: "place",
    phonetic: "/pleɪs/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A particular position or location.", example: "This is a nice place." }
        ]
      }
    ]
  },
  "part": {
    word: "part",
    phonetic: "/pɑːrt/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A piece or segment of something.", example: "This is part of the plan." }
        ]
      }
    ]
  },
  "thing": {
    word: "thing",
    phonetic: "/θɪŋ/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "An object that is not specifically named.", example: "What is that thing?" }
        ]
      }
    ]
  },
  "name": {
    word: "name",
    phonetic: "/neɪm/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A word by which a person is known.", example: "What's your name?" }
        ]
      }
    ]
  },
  "number": {
    word: "number",
    phonetic: "/ˈnʌmbər/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A mathematical value expressed by a word or symbol.", example: "Pick a number." }
        ]
      }
    ]
  },
  "word": {
    word: "word",
    phonetic: "/wɜːrd/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "A single unit of language.", example: "I don't know this word." }
        ]
      }
    ]
  },
  "English": {
    word: "English",
    phonetic: "/ˈɪŋɡlɪʃ/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The language spoken in England and many other countries.", example: "I study English every day." }
        ]
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Relating to England.", example: "English literature." }
        ]
      }
    ]
  },
  "Japanese": {
    word: "Japanese",
    phonetic: "/ˌdʒæpəˈniːz/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The language spoken in Japan.", example: "I speak Japanese." }
        ]
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Relating to Japan.", example: "Japanese food is delicious." }
        ]
      }
    ]
  },
  "color": {
    word: "color",
    phonetic: "/ˈkʌlər/",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          { definition: "The property of objects producing different sensations on the eye.", example: "What color do you like?" }
        ]
      }
    ]
  },
  "red": {
    word: "red",
    phonetic: "/rɛd/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the color of blood.", example: "A red apple." }
        ]
      }
    ]
  },
  "blue": {
    word: "blue",
    phonetic: "/bluː/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the color of the sky.", example: "The sky is blue." }
        ]
      }
    ]
  },
  "green": {
    word: "green",
    phonetic: "/ɡriːn/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the color of grass.", example: "Green leaves." }
        ]
      }
    ]
  },
  "white": {
    word: "white",
    phonetic: "/waɪt/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the color of milk or snow.", example: "A white dress." }
        ]
      }
    ]
  },
  "black": {
    word: "black",
    phonetic: "/blæk/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of the darkest color.", example: "A black cat." }
        ]
      }
    ]
  },
  "wait": {
    word: "wait",
    phonetic: "/weɪt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Stay where one is until an expected event happens.", example: "Please wait here." }
        ]
      }
    ]
  },
  "leave": {
    word: "leave",
    phonetic: "/liːv/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Go away from a place.", example: "I have to leave now." }
        ]
      }
    ]
  },
  "call": {
    word: "call",
    phonetic: "/kɔːl/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Contact by phone.", example: "I'll call you later." },
          { definition: "Give a name to.", example: "They call him Tom." }
        ]
      }
    ]
  },
  "meet": {
    word: "meet",
    phonetic: "/miːt/",
    meanings: [
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "Come into the presence of someone.", example: "Nice to meet you!" }
        ]
      }
    ]
  },
  "sorry": {
    word: "sorry",
    phonetic: "/ˈsɒri/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Feeling regret or sadness.", example: "I'm sorry for being late." }
        ]
      }
    ]
  },
  "welcome": {
    word: "welcome",
    phonetic: "/ˈwɛlkəm/",
    meanings: [
      {
        partOfSpeech: "exclamation",
        definitions: [
          { definition: "Used to greet someone who has arrived.", example: "Welcome to our home!" }
        ]
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Gladly received.", example: "You're always welcome here." }
        ]
      }
    ]
  },
  "great": {
    word: "great",
    phonetic: "/ɡreɪt/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Of an extent or amount considerably above normal.", example: "A great success." },
          { definition: "Very good; excellent.", example: "That's great!" }
        ]
      }
    ]
  },
  "nice": {
    word: "nice",
    phonetic: "/naɪs/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Pleasant; agreeable.", example: "It's a nice day." }
        ]
      }
    ]
  },
  "sure": {
    word: "sure",
    phonetic: "/ʃʊr/",
    meanings: [
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Certain; confident.", example: "I'm sure it will work." }
        ]
      },
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Certainly; of course.", example: "Sure, I can help." }
        ]
      }
    ]
  },
  "maybe": {
    word: "maybe",
    phonetic: "/ˈmeɪbi/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Perhaps; possibly.", example: "Maybe I'll come tomorrow." }
        ]
      }
    ]
  },
  "always": {
    word: "always",
    phonetic: "/ˈɔːlweɪz/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At all times; on every occasion.", example: "I always wake up early." }
        ]
      }
    ]
  },
  "never": {
    word: "never",
    phonetic: "/ˈnɛvər/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At no time; not ever.", example: "I never give up." }
        ]
      }
    ]
  },
  "sometimes": {
    word: "sometimes",
    phonetic: "/ˈsʌmtaɪmz/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Occasionally; from time to time.", example: "I sometimes go jogging." }
        ]
      }
    ]
  },
  "often": {
    word: "often",
    phonetic: "/ˈɔːfən/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Frequently; many times.", example: "I often read books." }
        ]
      }
    ]
  },
  "usually": {
    word: "usually",
    phonetic: "/ˈjuːʒuəli/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Under normal conditions; generally.", example: "I usually take the train." }
        ]
      }
    ]
  },
  "very": {
    word: "very",
    phonetic: "/ˈvɛri/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In a high degree; extremely.", example: "I'm very happy." }
        ]
      }
    ]
  },
  "really": {
    word: "really",
    phonetic: "/ˈriːəli/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In actual fact; truly.", example: "I really mean it." },
          { definition: "Very; thoroughly.", example: "It's really good." }
        ]
      }
    ]
  },
  "just": {
    word: "just",
    phonetic: "/dʒʌst/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Exactly; precisely.", example: "That's just what I needed." },
          { definition: "Only; simply.", example: "I just want to help." }
        ]
      }
    ]
  },
  "only": {
    word: "only",
    phonetic: "/ˈoʊnli/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "And no one or nothing more.", example: "I only have one sister." }
        ]
      }
    ]
  },
  "also": {
    word: "also",
    phonetic: "/ˈɔːlsoʊ/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In addition; too.", example: "I also like coffee." }
        ]
      }
    ]
  },
  "too": {
    word: "too",
    phonetic: "/tuː/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In addition; also.", example: "I want to come too." },
          { definition: "To a higher degree than is desirable.", example: "It's too hot." }
        ]
      }
    ]
  },
  "here": {
    word: "here",
    phonetic: "/hɪr/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In, at, or to this place.", example: "Come here." }
        ]
      }
    ]
  },
  "there": {
    word: "there",
    phonetic: "/ðɛr/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In, at, or to that place.", example: "Go over there." }
        ]
      }
    ]
  },
  "now": {
    word: "now",
    phonetic: "/naʊ/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At the present time.", example: "I'm busy now." }
        ]
      }
    ]
  },
  "then": {
    word: "then",
    phonetic: "/ðɛn/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At that time.", example: "I was young then." },
          { definition: "After that; next.", example: "Eat first, then study." }
        ]
      }
    ]
  },
  "again": {
    word: "again",
    phonetic: "/əˈɡɛn/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Once more; another time.", example: "Try again." }
        ]
      }
    ]
  },
  "still": {
    word: "still",
    phonetic: "/stɪl/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Up to this time; yet.", example: "I'm still waiting." }
        ]
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          { definition: "Not moving.", example: "Stay still." }
        ]
      }
    ]
  },
  "already": {
    word: "already",
    phonetic: "/ɔːlˈrɛdi/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Before now or a specified time.", example: "I've already finished." }
        ]
      }
    ]
  },
  "yet": {
    word: "yet",
    phonetic: "/jɛt/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Up until now; so far.", example: "I haven't finished yet." }
        ]
      }
    ]
  },
  "soon": {
    word: "soon",
    phonetic: "/suːn/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In a short time; before long.", example: "I'll be there soon." }
        ]
      }
    ]
  },
  "later": {
    word: "later",
    phonetic: "/ˈleɪtər/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At a time after the present.", example: "See you later!" }
        ]
      }
    ]
  },
  "before": {
    word: "before",
    phonetic: "/bɪˈfɔːr/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "During the time preceding.", example: "Wash your hands before eating." }
        ]
      }
    ]
  },
  "after": {
    word: "after",
    phonetic: "/ˈæftər/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Following in time.", example: "After dinner, we watched TV." }
        ]
      }
    ]
  },
  "about": {
    word: "about",
    phonetic: "/əˈbaʊt/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Concerning; on the subject of.", example: "Tell me about yourself." }
        ]
      },
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Approximately.", example: "About 100 people came." }
        ]
      }
    ]
  },
  "with": {
    word: "with",
    phonetic: "/wɪð/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Accompanied by.", example: "I went with my friend." },
          { definition: "Having or possessing.", example: "A house with a garden." }
        ]
      }
    ]
  },
  "without": {
    word: "without",
    phonetic: "/wɪˈðaʊt/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "In the absence of.", example: "I can't live without music." }
        ]
      }
    ]
  },
  "for": {
    word: "for",
    phonetic: "/fɔːr/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Indicating purpose or intention.", example: "This gift is for you." },
          { definition: "Indicating a period of time.", example: "I've been waiting for an hour." }
        ]
      }
    ]
  },
  "from": {
    word: "from",
    phonetic: "/frʌm/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Indicating the origin.", example: "I'm from Japan." }
        ]
      }
    ]
  },
  "to": {
    word: "to",
    phonetic: "/tuː/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Expressing direction.", example: "I'm going to Tokyo." }
        ]
      }
    ]
  },
  "at": {
    word: "at",
    phonetic: "/æt/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Expressing location.", example: "I'm at home." },
          { definition: "Expressing time.", example: "The meeting is at 3 PM." }
        ]
      }
    ]
  },
  "in": {
    word: "in",
    phonetic: "/ɪn/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Expressing location inside.", example: "The keys are in my bag." },
          { definition: "During a period.", example: "I was born in 1990." }
        ]
      }
    ]
  },
  "on": {
    word: "on",
    phonetic: "/ɒn/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Physically touching and supported by.", example: "The book is on the table." },
          { definition: "Indicating a day.", example: "I'll see you on Monday." }
        ]
      }
    ]
  },
  "up": {
    word: "up",
    phonetic: "/ʌp/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Toward a higher position.", example: "Stand up." }
        ]
      }
    ]
  },
  "down": {
    word: "down",
    phonetic: "/daʊn/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Toward a lower position.", example: "Sit down." }
        ]
      }
    ]
  },
  "out": {
    word: "out",
    phonetic: "/aʊt/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Away from the inside.", example: "Let's go out." }
        ]
      }
    ]
  },
  "over": {
    word: "over",
    phonetic: "/ˈoʊvər/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Directly above.", example: "A bridge over the river." }
        ]
      },
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Finished.", example: "The game is over." }
        ]
      }
    ]
  },
  "under": {
    word: "under",
    phonetic: "/ˈʌndər/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Below; beneath.", example: "The cat is under the table." }
        ]
      }
    ]
  },
  "between": {
    word: "between",
    phonetic: "/bɪˈtwiːn/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "In the space separating two things.", example: "Sit between us." }
        ]
      }
    ]
  },
  "through": {
    word: "through",
    phonetic: "/θruː/",
    meanings: [
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Moving in one side and out another.", example: "Walk through the door." }
        ]
      }
    ]
  },
  "because": {
    word: "because",
    phonetic: "/bɪˈkɔːz/",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "For the reason that.", example: "I stayed home because I was sick." }
        ]
      }
    ]
  },
  "but": {
    word: "but",
    phonetic: "/bʌt/",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "Used to introduce a contrast.", example: "I tried, but I failed." }
        ]
      }
    ]
  },
  "and": {
    word: "and",
    phonetic: "/ænd/",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "Used to connect words.", example: "Bread and butter." }
        ]
      }
    ]
  },
  "or": {
    word: "or",
    phonetic: "/ɔːr/",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "Used to link alternatives.", example: "Coffee or tea?" }
        ]
      }
    ]
  },
  "if": {
    word: "if",
    phonetic: "/ɪf/",
    meanings: [
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "On the condition that.", example: "If it rains, I'll stay home." }
        ]
      }
    ]
  },
  "when": {
    word: "when",
    phonetic: "/wɛn/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At what time.", example: "When did you arrive?" }
        ]
      },
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "At the time that.", example: "Call me when you get there." }
        ]
      }
    ]
  },
  "where": {
    word: "where",
    phonetic: "/wɛr/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "At or in what place.", example: "Where are you?" }
        ]
      }
    ]
  },
  "why": {
    word: "why",
    phonetic: "/waɪ/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "For what reason.", example: "Why are you sad?" }
        ]
      }
    ]
  },
  "how": {
    word: "how",
    phonetic: "/haʊ/",
    meanings: [
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "In what way or manner.", example: "How do you do this?" },
          { definition: "To what extent.", example: "How old are you?" }
        ]
      }
    ]
  },
  "what": {
    word: "what",
    phonetic: "/wɒt/",
    meanings: [
      {
        partOfSpeech: "pronoun",
        definitions: [
          { definition: "Asking for information.", example: "What is your name?" }
        ]
      }
    ]
  },
  "who": {
    word: "who",
    phonetic: "/huː/",
    meanings: [
      {
        partOfSpeech: "pronoun",
        definitions: [
          { definition: "Asking about a person.", example: "Who is that?" }
        ]
      }
    ]
  },
  "which": {
    word: "which",
    phonetic: "/wɪtʃ/",
    meanings: [
      {
        partOfSpeech: "pronoun",
        definitions: [
          { definition: "Asking for choice from a set.", example: "Which one do you want?" }
        ]
      }
    ]
  }
};
