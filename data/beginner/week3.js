const LESSONS_BEGINNER_WEEK3 = {
  week: 3,
  level: 'beginner',
  theme: { en: 'Food & Daily Routine', fr: 'Alimentation et routine quotidienne' },
  days: [
    {
      day: 1,
      dayName: { en: 'Monday', fr: 'Lundi' },
      title: { en: 'Food Vocabulary — Likes & Dislikes', fr: 'Vocabulaire alimentaire — les goûts' },
      icon: '🍎',
      theory: {
        intro: {
          en: 'Food is one of the most important topics in everyday life — and one of the most fun to talk about! Today we learn the names of fruits, vegetables, and drinks in English, and how to say what you like and what you don\'t like.',
          fr: 'La nourriture est l\'un des sujets les plus importants de la vie quotidienne — et l\'un des plus amusants à aborder ! Aujourd\'hui, nous apprenons les noms des fruits, légumes et boissons en anglais, ainsi que comment dire ce que vous aimez et ce que vous n\'aimez pas.'
        },
        grammarTitle: { en: '"I like" and "I don\'t like" — Expressing Preferences', fr: '"I like" et "I don\'t like" — Exprimer ses préférences' },
        grammar: {
          en: 'To express likes in English, use "I like + noun": "I like apples." To express dislikes, use "I don\'t like + noun": "I don\'t like carrots." To say you love something, use "I love + noun": "I love pizza!" For strong dislike: "I hate + noun". You can also use "I like + verb-ing": "I like cooking." To ask about preferences: "Do you like...?" Answer: "Yes, I do." or "No, I don\'t." You can add adverbs: "I really like coffee" or "I don\'t like vegetables very much."',
          fr: 'Pour exprimer ce qu\'on aime en anglais : "I like + nom" : "I like apples." Pour les préférences négatives : "I don\'t like + nom" : "I don\'t like carrots." Pour dire qu\'on adore quelque chose : "I love + nom". Pour une forte aversion : "I hate + nom". Pour demander les préférences : "Do you like...?" Réponse : "Yes, I do." ou "No, I don\'t."'
        },
        examples: [
          { en: 'I like apples, but I don\'t like oranges.', fr: 'J\'aime les pommes, mais je n\'aime pas les oranges.', speak: 'I like apples but I don\'t like oranges.' },
          { en: 'Do you like coffee? Yes, I love it!', fr: 'Aimez-vous le café ? Oui, je l\'adore !', speak: 'Do you like coffee? Yes I love it!' },
          { en: 'She loves eating fresh vegetables.', fr: 'Elle adore manger des légumes frais.', speak: 'She loves eating fresh vegetables.' },
          { en: 'I don\'t like spicy food very much.', fr: 'Je n\'aime pas beaucoup la nourriture épicée.', speak: 'I don\'t like spicy food very much.' },
          { en: 'What is your favourite fruit?', fr: 'Quel est votre fruit préféré ?', speak: 'What is your favourite fruit?' }
        ],
        vocabulary: [
          {
            en: 'apple',
            fr: 'pomme',
            pronunciation: '/ˈæpəl/',
            example: { en: 'An apple a day keeps the doctor away.', fr: 'Une pomme par jour éloigne le médecin.' }
          },
          {
            en: 'banana',
            fr: 'banane',
            pronunciation: '/bəˈnɑːnə/',
            example: { en: 'Monkeys love bananas!', fr: 'Les singes adorent les bananes !' }
          },
          {
            en: 'carrot',
            fr: 'carotte',
            pronunciation: '/ˈkærət/',
            example: { en: 'Rabbits eat carrots.', fr: 'Les lapins mangent des carottes.' }
          },
          {
            en: 'tomato',
            fr: 'tomate',
            pronunciation: '/təˈmeɪtoʊ/',
            example: { en: 'Is a tomato a fruit or a vegetable?', fr: 'La tomate est-elle un fruit ou un légume ?' }
          },
          {
            en: 'water',
            fr: 'eau',
            pronunciation: '/ˈwɔːtər/',
            example: { en: 'I drink a lot of water every day.', fr: 'Je bois beaucoup d\'eau chaque jour.' }
          },
          {
            en: 'coffee',
            fr: 'café',
            pronunciation: '/ˈkɒfi/',
            example: { en: 'I drink coffee every morning.', fr: 'Je bois du café tous les matins.' }
          },
          {
            en: 'milk',
            fr: 'lait',
            pronunciation: '/mɪlk/',
            example: { en: 'Children need to drink milk.', fr: 'Les enfants doivent boire du lait.' }
          },
          {
            en: 'bread',
            fr: 'pain',
            pronunciation: '/brɛd/',
            example: { en: 'I eat bread for breakfast.', fr: 'Je mange du pain au petit-déjeuner.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w3d1ex1',
          question: { en: 'How do you say "Je n\'aime pas les carottes" in English?', fr: 'Comment dit-on "Je n\'aime pas les carottes" en anglais ?' },
          options: ['I no like carrots.', 'I don\'t like carrots.', 'I not like carrots.', 'I like not carrots.'],
          correct: 1,
          explanation: { en: '"I don\'t like carrots" is correct. To make a negative sentence with "like", use "don\'t" (do not) before "like". Never use "no" or "not" directly before the verb!', fr: '"I don\'t like carrots" est correct. Pour faire une phrase négative avec "like", utilisez "don\'t" (do not) avant "like". N\'utilisez jamais "no" ou "not" directement avant le verbe !' }
        },
        {
          type: 'match',
          id: 'w3d1ex2',
          instruction: { en: 'Match the food items with their French translations', fr: 'Associez les aliments à leurs traductions françaises' },
          pairs: [
            { left: 'apple', right: 'pomme' },
            { left: 'bread', right: 'pain' },
            { left: 'milk', right: 'lait' },
            { left: 'carrot', right: 'carotte' }
          ]
        },
        {
          type: 'fill',
          id: 'w3d1ex3',
          instruction: { en: 'Complete the question about food preferences', fr: 'Complétez la question sur les préférences alimentaires' },
          template: 'Do you ___ coffee or tea?',
          answer: 'like',
          hint: { en: 'The verb for expressing preferences about food', fr: 'Le verbe pour exprimer des préférences alimentaires' }
        },
        {
          type: 'order',
          id: 'w3d1ex4',
          instruction: { en: 'Put the words in the right order to express a preference', fr: 'Remettez les mots dans le bon ordre pour exprimer une préférence' },
          words: ['love', 'I', 'really', 'fruit', 'fresh'],
          answer: 'I really love fresh fruit'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d1q1',
          question: { en: 'Someone asks "Do you like pizza?" How do you respond if you love it?', fr: 'Quelqu\'un demande "Do you like pizza?" Comment répondez-vous si vous l\'adorez ?' },
          options: ['Yes, I am.', 'Yes, I like.', 'Yes, I love it!', 'Yes, I do like.'],
          correct: 2,
          explanation: { en: '"Yes, I love it!" is the most natural enthusiastic response. You can also say "Yes, I do" (simple confirmation) or "Yes, I really like it." "Yes, I am" is wrong — "am" is for the verb "to be", not "to like".', fr: '"Yes, I love it!" est la réponse enthousiaste la plus naturelle. Vous pouvez aussi dire "Yes, I do" (confirmation simple). "Yes, I am" est faux — "am" est pour le verbe "to be", pas "to like".' }
        },
        {
          type: 'mcq',
          id: 'w3d1q2',
          question: { en: 'Which question asks about food preferences?', fr: 'Quelle question demande les préférences alimentaires ?' },
          options: ['What do you eat?', 'Do you like vegetables?', 'Are you hungry?', 'How much food do you have?'],
          correct: 1,
          explanation: { en: '"Do you like vegetables?" directly asks about preferences. "What do you eat?" asks about habits. "Are you hungry?" asks about current feeling. "Do you like...?" is the standard preference question.', fr: '"Do you like vegetables?" demande directement les préférences. "What do you eat?" demande les habitudes. "Are you hungry?" demande la sensation actuelle. "Do you like...?" est la question standard pour les préférences.' }
        },
        {
          type: 'mcq',
          id: 'w3d1q3',
          question: { en: 'What is the negative form of "I like cheese"?', fr: 'Quelle est la forme négative de "I like cheese" ?' },
          options: ['I like not cheese.', 'I no like cheese.', 'I don\'t like cheese.', 'I am not like cheese.'],
          correct: 2,
          explanation: { en: '"I don\'t like cheese" is the correct negative. Always use "don\'t" (= do not) to make present simple negative sentences with I, you, we, they.', fr: '"I don\'t like cheese" est le négatif correct. Utilisez toujours "don\'t" (= do not) pour faire des phrases négatives au présent simple avec I, you, we, they.' }
        }
      ]
    },
    {
      day: 2,
      dayName: { en: 'Tuesday', fr: 'Mardi' },
      title: { en: 'Meals of the Day', fr: 'Les repas de la journée' },
      icon: '🍽️',
      theory: {
        intro: {
          en: 'What do you eat in a typical day? Today we learn the three main meals — breakfast, lunch, and dinner — and how to talk about what you eat for each one. This is perfect for everyday conversation!',
          fr: 'Que mangez-vous dans une journée typique ? Aujourd\'hui, nous apprenons les trois repas principaux — breakfast, lunch et dinner — et comment parler de ce que vous mangez pour chacun. C\'est parfait pour la conversation de tous les jours !'
        },
        grammarTitle: { en: 'Talking About Meals — "What do you eat for breakfast?"', fr: 'Parler des repas — "What do you eat for breakfast?"' },
        grammar: {
          en: 'The three main meals in English are: breakfast (petit-déjeuner), lunch (déjeuner), and dinner (dîner). Some people also have a snack (collation) or supper (souper). To talk about meals, use the preposition "for": "What do you eat for breakfast?" "I eat cereal for breakfast." To describe a typical meal, use the simple present: "I usually eat toast and coffee for breakfast." You can also use "have" with meals: "I have lunch at 12 o\'clock." Notice: in English, we "have" meals (not "take" meals, unlike in some languages).',
          fr: 'Les trois repas principaux en anglais sont : breakfast (petit-déjeuner), lunch (déjeuner) et dinner (dîner). Certaines personnes ont aussi un snack (collation). Pour parler des repas, utilisez la préposition "for" : "What do you eat for breakfast?" "I eat cereal for breakfast." On peut aussi utiliser "have" avec les repas : "I have lunch at 12 o\'clock."'
        },
        examples: [
          { en: 'What do you eat for breakfast?', fr: 'Que mangez-vous pour le petit-déjeuner ?', speak: 'What do you eat for breakfast?' },
          { en: 'I eat toast and drink orange juice for breakfast.', fr: 'Je mange du pain grillé et bois du jus d\'orange pour le petit-déjeuner.', speak: 'I eat toast and drink orange juice for breakfast.' },
          { en: 'I have lunch at noon with my colleagues.', fr: 'Je déjeune à midi avec mes collègues.', speak: 'I have lunch at noon with my colleagues.' },
          { en: 'We have dinner together every evening.', fr: 'Nous dînons ensemble chaque soir.', speak: 'We have dinner together every evening.' },
          { en: 'Do you eat a big breakfast or a small one?', fr: 'Prenez-vous un grand ou un petit déjeuner ?', speak: 'Do you eat a big breakfast or a small one?' }
        ],
        vocabulary: [
          {
            en: 'breakfast',
            fr: 'petit-déjeuner',
            pronunciation: '/ˈbrɛkfəst/',
            example: { en: 'I eat breakfast at 7am.', fr: 'Je prends mon petit-déjeuner à 7h.' }
          },
          {
            en: 'lunch',
            fr: 'déjeuner',
            pronunciation: '/lʌntʃ/',
            example: { en: 'I have lunch at the office.', fr: 'Je déjeune au bureau.' }
          },
          {
            en: 'dinner',
            fr: 'dîner',
            pronunciation: '/ˈdɪnər/',
            example: { en: 'Dinner is at 7pm in our house.', fr: 'Le dîner est à 19h chez nous.' }
          },
          {
            en: 'snack',
            fr: 'collation / en-cas',
            pronunciation: '/snæk/',
            example: { en: 'I eat a snack in the afternoon.', fr: 'Je mange une collation l\'après-midi.' }
          },
          {
            en: 'egg',
            fr: 'œuf',
            pronunciation: '/ɛɡ/',
            example: { en: 'I eat two eggs for breakfast.', fr: 'Je mange deux œufs pour le petit-déjeuner.' }
          },
          {
            en: 'sandwich',
            fr: 'sandwich',
            pronunciation: '/ˈsænwɪtʃ/',
            example: { en: 'I eat a sandwich for lunch.', fr: 'Je mange un sandwich pour le déjeuner.' }
          },
          {
            en: 'soup',
            fr: 'soupe',
            pronunciation: '/suːp/',
            example: { en: 'She eats soup for dinner.', fr: 'Elle mange de la soupe pour le dîner.' }
          },
          {
            en: 'juice',
            fr: 'jus',
            pronunciation: '/dʒuːs/',
            example: { en: 'I drink orange juice every morning.', fr: 'Je bois du jus d\'orange chaque matin.' }
          }
        ]
      },
      exercises: [
        {
          type: 'flashcard',
          id: 'w3d2ex1',
          instruction: { en: 'Click to flip each card and learn the meals vocabulary', fr: 'Cliquez pour retourner chaque carte et apprendre le vocabulaire des repas' },
          cards: [
            { front: 'breakfast', back: 'petit-déjeuner', example: { en: 'I have breakfast at 7am.', fr: 'Je prends mon petit-déjeuner à 7h.' } },
            { front: 'lunch', back: 'déjeuner', example: { en: 'I have lunch at noon.', fr: 'Je déjeune à midi.' } },
            { front: 'dinner', back: 'dîner', example: { en: 'Dinner is my favourite meal.', fr: 'Le dîner est mon repas préféré.' } },
            { front: 'snack', back: 'collation', example: { en: 'I eat an apple as a snack.', fr: 'Je mange une pomme comme collation.' } },
            { front: 'egg', back: 'œuf', example: { en: 'I like scrambled eggs.', fr: 'J\'aime les œufs brouillés.' } },
            { front: 'juice', back: 'jus', example: { en: 'Orange juice is delicious!', fr: 'Le jus d\'orange est délicieux !' } }
          ]
        },
        {
          type: 'mcq',
          id: 'w3d2ex2',
          question: { en: 'Which preposition do you use with meals? "What do you eat ___ breakfast?"', fr: 'Quelle préposition utilisez-vous avec les repas ? "What do you eat ___ breakfast?"' },
          options: ['at', 'in', 'for', 'with'],
          correct: 2,
          explanation: { en: 'We use "for" when talking about what we eat at a meal: "I eat toast for breakfast." We use "at" for the time: "I have breakfast at 7am."', fr: 'On utilise "for" pour parler de ce qu\'on mange à un repas : "I eat toast for breakfast." On utilise "at" pour l\'heure : "I have breakfast at 7am."' }
        },
        {
          type: 'fill',
          id: 'w3d2ex3',
          instruction: { en: 'Complete the sentence about your meal habit', fr: 'Complétez la phrase sur votre habitude de repas' },
          template: 'I ___ lunch at noon every day.',
          answer: 'have',
          hint: { en: 'In English, we "have" meals (breakfast, lunch, dinner)', fr: 'En anglais, on "have" les repas (on "a" le petit-déjeuner, le déjeuner...)' }
        },
        {
          type: 'order',
          id: 'w3d2ex4',
          instruction: { en: 'Put the words in the right order to talk about breakfast', fr: 'Remettez les mots dans le bon ordre pour parler du petit-déjeuner' },
          words: ['breakfast', 'coffee', 'for', 'drink', 'I', 'and', 'toast', 'eat', 'I'],
          answer: 'I eat toast and I drink coffee for breakfast'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d2q1',
          question: { en: 'Which meal do you eat at midday?', fr: 'Quel repas mangez-vous à midi ?' },
          options: ['breakfast', 'dinner', 'lunch', 'snack'],
          correct: 2,
          explanation: { en: '"Lunch" is the meal eaten around midday (12pm). Breakfast is in the morning, dinner is in the evening (or night). A snack is a small food eaten between meals.', fr: '"Lunch" est le repas mangé vers midi (12h). Breakfast est le matin, dinner est le soir. Un snack est un petit aliment mangé entre les repas.' }
        },
        {
          type: 'mcq',
          id: 'w3d2q2',
          question: { en: 'What is a typical English breakfast item?', fr: 'Qu\'est-ce qu\'un élément typique du petit-déjeuner anglais ?' },
          options: ['soup', 'pizza', 'toast and eggs', 'pasta'],
          correct: 2,
          explanation: { en: 'A typical English breakfast often includes toast, eggs, bacon, sausages, beans and mushrooms. Toast and eggs are the most common items across English-speaking countries.', fr: 'Un petit-déjeuner anglais typique comprend souvent du pain grillé, des œufs, du bacon, des saucisses, des haricots et des champignons. Le toast et les œufs sont les éléments les plus courants.' }
        },
        {
          type: 'mcq',
          id: 'w3d2q3',
          question: { en: 'How do you ask what someone eats for breakfast?', fr: 'Comment demandez-vous ce que quelqu\'un mange au petit-déjeuner ?' },
          options: ['What you eat for breakfast?', 'What do you eat for breakfast?', 'What does you eat for breakfast?', 'Do what you eat breakfast?'],
          correct: 1,
          explanation: { en: '"What do you eat for breakfast?" is correct. Remember: questions with "do" use the structure: Question word + do/does + subject + verb. "Do" for I/you/we/they, "does" for he/she/it.', fr: '"What do you eat for breakfast?" est correct. Rappel : les questions avec "do" utilisent la structure : Mot interrogatif + do/does + sujet + verbe.' }
        }
      ]
    },
    {
      day: 3,
      dayName: { en: 'Wednesday', fr: 'Mercredi' },
      title: { en: 'Present Simple — Affirmative', fr: 'Le présent simple — affirmatif' },
      icon: '📝',
      theory: {
        intro: {
          en: 'Today is a very important grammar day! We learn the present simple tense — used to talk about habits, routines, and facts. This is one of the most used tenses in English!',
          fr: 'Aujourd\'hui est une journée de grammaire très importante ! Nous apprenons le présent simple — utilisé pour parler des habitudes, des routines et des faits. C\'est l\'un des temps les plus utilisés en anglais !'
        },
        grammarTitle: { en: 'Present Simple — Rules & Formation', fr: 'Présent simple — règles et formation' },
        grammar: {
          en: 'The present simple is used for: habits ("I eat breakfast every day"), facts ("Water boils at 100°C"), and routines. Formation: For I/You/We/They → use the base verb: "I eat", "They drink". For He/She/It → add "-s" or "-es" to the verb: "She eats", "He drinks", "It works". Special cases: verbs ending in -o, -ch, -sh, -ss, -x add "-es": "She goes", "He watches". Verbs ending in consonant + y change to "-ies": "She studies", "He tries". The verb "to be" is irregular: I am, You are, He/She/It is.',
          fr: 'Le présent simple s\'utilise pour : les habitudes ("I eat breakfast every day"), les faits ("Water boils at 100°C") et les routines. Formation : Pour I/You/We/They → utilisez le verbe de base : "I eat", "They drink". Pour He/She/It → ajoutez "-s" ou "-es" : "She eats", "He drinks". Cas spéciaux : les verbes se terminant par -o, -ch, -sh, -ss, -x ajoutent "-es" : "She goes", "He watches". Les verbes se terminant par consonne + y → "-ies" : "She studies".'
        },
        examples: [
          { en: 'I eat breakfast at 7am every day.', fr: 'Je mange le petit-déjeuner à 7h tous les jours.', speak: 'I eat breakfast at 7am every day.' },
          { en: 'She drinks coffee in the morning.', fr: 'Elle boit du café le matin.', speak: 'She drinks coffee in the morning.' },
          { en: 'He goes to school by bus.', fr: 'Il va à l\'école en bus.', speak: 'He goes to school by bus.' },
          { en: 'They work from Monday to Friday.', fr: 'Ils travaillent du lundi au vendredi.', speak: 'They work from Monday to Friday.' },
          { en: 'My mother cooks dinner every evening.', fr: 'Ma mère prépare le dîner chaque soir.', speak: 'My mother cooks dinner every evening.' }
        ],
        vocabulary: [
          {
            en: 'eat',
            fr: 'manger',
            pronunciation: '/iːt/',
            example: { en: 'I eat fruit every day.', fr: 'Je mange des fruits chaque jour.' }
          },
          {
            en: 'drink',
            fr: 'boire',
            pronunciation: '/drɪŋk/',
            example: { en: 'She drinks two cups of coffee.', fr: 'Elle boit deux tasses de café.' }
          },
          {
            en: 'cook',
            fr: 'cuisiner',
            pronunciation: '/kʊk/',
            example: { en: 'He cooks very well.', fr: 'Il cuisine très bien.' }
          },
          {
            en: 'go',
            fr: 'aller',
            pronunciation: '/ɡoʊ/',
            example: { en: 'She goes to work by car.', fr: 'Elle va au travail en voiture.' }
          },
          {
            en: 'watch',
            fr: 'regarder',
            pronunciation: '/wɒtʃ/',
            example: { en: 'He watches TV after dinner.', fr: 'Il regarde la télé après le dîner.' }
          },
          {
            en: 'study',
            fr: 'étudier',
            pronunciation: '/ˈstʌdi/',
            example: { en: 'She studies English every day.', fr: 'Elle étudie l\'anglais chaque jour.' }
          },
          {
            en: 'work',
            fr: 'travailler',
            pronunciation: '/wɜːrk/',
            example: { en: 'He works in a hospital.', fr: 'Il travaille dans un hôpital.' }
          },
          {
            en: 'sleep',
            fr: 'dormir',
            pronunciation: '/sliːp/',
            example: { en: 'I sleep 8 hours a night.', fr: 'Je dors 8 heures par nuit.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w3d3ex1',
          question: { en: 'Which form is correct for "he"? "He ___ coffee."', fr: 'Quelle forme est correcte pour "he" ? "He ___ coffee."' },
          options: ['drink', 'drinking', 'drinks', 'is drink'],
          correct: 2,
          explanation: { en: '"Drinks" is correct. For he/she/it in the present simple, always add "-s" to the verb: drink → drinks, eat → eats, work → works. This is one of the most important English grammar rules!', fr: '"Drinks" est correct. Pour he/she/it au présent simple, ajoutez toujours "-s" au verbe : drink → drinks, eat → eats, work → works. C\'est l\'une des règles de grammaire anglaise les plus importantes !' }
        },
        {
          type: 'fill',
          id: 'w3d3ex2',
          instruction: { en: 'Complete the sentence with the correct present simple form', fr: 'Complétez la phrase avec la forme correcte du présent simple' },
          template: 'My sister ___ English at university. (study)',
          answer: 'studies',
          hint: { en: 'study → ? (consonant + y → ies for she)', fr: 'study → ? (consonne + y → ies pour she)' }
        },
        {
          type: 'match',
          id: 'w3d3ex3',
          instruction: { en: 'Match the subject with the correct verb form', fr: 'Associez le sujet à la forme verbale correcte' },
          pairs: [
            { left: 'I / You / We', right: 'eat' },
            { left: 'She / He / It', right: 'eats' },
            { left: 'He (watch)', right: 'watches' },
            { left: 'She (go)', right: 'goes' }
          ]
        },
        {
          type: 'order',
          id: 'w3d3ex4',
          instruction: { en: 'Put the words in the right order', fr: 'Remettez les mots dans le bon ordre' },
          words: ['every', 'She', 'morning', 'coffee', 'drinks'],
          answer: 'She drinks coffee every morning'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d3q1',
          question: { en: 'What happens to the verb when the subject is "she"?', fr: 'Que se passe-t-il avec le verbe quand le sujet est "she" ?' },
          options: ['Nothing, it stays the same', 'Add "-ing"', 'Add "-s" or "-es"', 'Add "-ed"'],
          correct: 2,
          explanation: { en: 'In present simple, for he/she/it, we add "-s" (or "-es" for verbs ending in -o, -ch, -sh, -ss, -x, -z). "She eats", "She watches", "She goes". This only happens with he/she/it!', fr: 'Au présent simple, pour he/she/it, on ajoute "-s" (ou "-es" pour les verbes se terminant par -o, -ch, -sh, -ss, -x). "She eats", "She watches", "She goes". Cela se produit seulement avec he/she/it !' }
        },
        {
          type: 'mcq',
          id: 'w3d3q2',
          question: { en: 'Which sentence uses the present simple correctly?', fr: 'Quelle phrase utilise correctement le présent simple ?' },
          options: ['He go to school every day.', 'She studying English.', 'They eats breakfast together.', 'I work in a school.'],
          correct: 3,
          explanation: { en: '"I work in a school" is correct — present simple, I + base verb. "He go" → should be "He goes". "She studying" → missing "is" for present continuous. "They eats" → should be "They eat".', fr: '"I work in a school" est correct — présent simple, I + verbe de base. "He go" → devrait être "He goes". "She studying" → il manque "is" pour le présent continu. "They eats" → devrait être "They eat".' }
        },
        {
          type: 'mcq',
          id: 'w3d3q3',
          question: { en: 'How do you say "Elle mange une pomme tous les jours" in English?', fr: 'Comment dit-on "Elle mange une pomme tous les jours" en anglais ?' },
          options: ['She eat an apple every day.', 'She eats an apple every day.', 'She is eating an apple every day.', 'She eating an apple every day.'],
          correct: 1,
          explanation: { en: '"She eats an apple every day" is correct. The key clue is "every day" — this shows a habit, so we use present simple. And "she" → "eats" (with an -s).', fr: '"She eats an apple every day" est correct. L\'indice clé est "every day" — cela montre une habitude, donc on utilise le présent simple. Et "she" → "eats" (avec un -s).' }
        }
      ]
    },
    {
      day: 4,
      dayName: { en: 'Thursday', fr: 'Jeudi' },
      title: { en: 'Telling the Time', fr: 'Dire l\'heure' },
      icon: '⏰',
      theory: {
        intro: {
          en: 'What time is it? Telling the time is an essential skill in English! Today we learn how to read and say the time, from the simple "o\'clock" to "half past" and "quarter to". This will be very useful in daily life!',
          fr: 'Quelle heure est-il ? Dire l\'heure est une compétence essentielle en anglais ! Aujourd\'hui, nous apprenons à lire et dire l\'heure, du simple "o\'clock" au "half past" et "quarter to". Cela sera très utile dans la vie quotidienne !'
        },
        grammarTitle: { en: 'Telling the Time in English', fr: 'Dire l\'heure en anglais' },
        grammar: {
          en: 'To ask the time: "What time is it?" or "What\'s the time?" To answer: "It\'s [time]." Key expressions: "o\'clock" = exactly on the hour (3:00 = it\'s three o\'clock), "half past" = 30 minutes past (3:30 = half past three), "quarter past" = 15 minutes past (3:15 = quarter past three), "quarter to" = 15 minutes before the next hour (3:45 = quarter to four). For digital time, just say the numbers: 3:20 = "three twenty". To specify AM or PM: "in the morning" (matin), "in the afternoon" (après-midi), "in the evening" (soir), "at night" (la nuit). Midnight = minuit, noon/midday = midi.',
          fr: 'Pour demander l\'heure : "What time is it?" ou "What\'s the time?" Pour répondre : "It\'s [heure]." Expressions clés : "o\'clock" = pile (3:00 = three o\'clock), "half past" = 30 minutes après (3:30 = half past three), "quarter past" = 15 minutes après (3:15 = quarter past three), "quarter to" = 15 minutes avant l\'heure suivante (3:45 = quarter to four).'
        },
        examples: [
          { en: 'What time is it? It\'s three o\'clock.', fr: 'Quelle heure est-il ? Il est trois heures.', speak: 'What time is it? It\'s three o\'clock.' },
          { en: 'It\'s half past seven. (7:30)', fr: 'Il est sept heures et demie. (7h30)', speak: 'It\'s half past seven.' },
          { en: 'It\'s quarter past nine. (9:15)', fr: 'Il est neuf heures et quart. (9h15)', speak: 'It\'s quarter past nine.' },
          { en: 'It\'s quarter to five. (4:45)', fr: 'Il est cinq heures moins le quart. (4h45)', speak: 'It\'s quarter to five.' },
          { en: 'My alarm rings at seven in the morning.', fr: 'Mon réveil sonne à sept heures du matin.', speak: 'My alarm rings at seven in the morning.' }
        ],
        vocabulary: [
          {
            en: 'o\'clock',
            fr: 'heure pile',
            pronunciation: '/əˈklɒk/',
            example: { en: 'It\'s six o\'clock.', fr: 'Il est six heures.' }
          },
          {
            en: 'half past',
            fr: 'et demie',
            pronunciation: '/hɑːf pɑːst/',
            example: { en: 'It\'s half past two. (2:30)', fr: 'Il est deux heures et demie.' }
          },
          {
            en: 'quarter past',
            fr: 'et quart',
            pronunciation: '/ˈkwɔːrtər pɑːst/',
            example: { en: 'It\'s quarter past eight. (8:15)', fr: 'Il est huit heures et quart.' }
          },
          {
            en: 'quarter to',
            fr: 'moins le quart',
            pronunciation: '/ˈkwɔːrtər tuː/',
            example: { en: 'It\'s quarter to ten. (9:45)', fr: 'Il est dix heures moins le quart.' }
          },
          {
            en: 'noon / midday',
            fr: 'midi',
            pronunciation: '/nuːn/ /ˈmɪddeɪ/',
            example: { en: 'We have lunch at noon.', fr: 'Nous déjeunons à midi.' }
          },
          {
            en: 'midnight',
            fr: 'minuit',
            pronunciation: '/ˈmɪdnaɪt/',
            example: { en: 'The party ends at midnight.', fr: 'La fête se termine à minuit.' }
          },
          {
            en: 'alarm clock',
            fr: 'réveil',
            pronunciation: '/əˈlɑːrm klɒk/',
            example: { en: 'My alarm clock rings at 6:30.', fr: 'Mon réveil sonne à 6h30.' }
          },
          {
            en: 'in the morning / afternoon / evening',
            fr: 'le matin / l\'après-midi / le soir',
            pronunciation: '/ɪn ðə ˈmɔːrnɪŋ/',
            example: { en: 'I exercise in the morning.', fr: 'Je fais de l\'exercice le matin.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w3d4ex1',
          question: { en: 'How do you say 7:30 in English?', fr: 'Comment dit-on 7h30 en anglais ?' },
          options: ['It\'s seven and half.', 'It\'s half past seven.', 'It\'s seven half past.', 'It\'s thirty past seven.'],
          correct: 1,
          explanation: { en: '"Half past seven" is correct for 7:30. The structure is "half past" + the hour. 7:30 = half past seven. 8:30 = half past eight. Always say the hour AFTER "half past".', fr: '"Half past seven" est correct pour 7h30. La structure est "half past" + l\'heure. 7:30 = half past seven. 8:30 = half past eight. Dites toujours l\'heure APRÈS "half past".' }
        },
        {
          type: 'fill',
          id: 'w3d4ex2',
          instruction: { en: 'Complete the question to ask for the time', fr: 'Complétez la question pour demander l\'heure' },
          template: 'What ___ is it?',
          answer: 'time',
          hint: { en: 'You are asking about hours and minutes', fr: 'Vous demandez les heures et les minutes' }
        },
        {
          type: 'match',
          id: 'w3d4ex3',
          instruction: { en: 'Match the digital time with its English expression', fr: 'Associez l\'heure digitale à son expression anglaise' },
          pairs: [
            { left: '3:00', right: 'three o\'clock' },
            { left: '6:15', right: 'quarter past six' },
            { left: '9:30', right: 'half past nine' },
            { left: '11:45', right: 'quarter to twelve' }
          ]
        },
        {
          type: 'order',
          id: 'w3d4ex4',
          instruction: { en: 'Put the words in the right order to tell the time', fr: 'Remettez les mots dans le bon ordre pour dire l\'heure' },
          words: ['ten', 'It\'s', 'past', 'quarter'],
          answer: 'It\'s quarter past ten'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d4q1',
          question: { en: 'It\'s 4:45. How do you say this in English?', fr: 'Il est 4h45. Comment dit-on cela en anglais ?' },
          options: ['It\'s quarter past four.', 'It\'s quarter to four.', 'It\'s quarter to five.', 'It\'s half past four.'],
          correct: 2,
          explanation: { en: '"Quarter to five" = 4:45. "Quarter to" means 15 minutes BEFORE the next hour. 4:45 is 15 minutes before 5:00, so it\'s "quarter to five". "Quarter past four" = 4:15.', fr: '"Quarter to five" = 4h45. "Quarter to" signifie 15 minutes AVANT l\'heure suivante. 4h45 est 15 minutes avant 5h00, donc c\'est "quarter to five". "Quarter past four" = 4h15.' }
        },
        {
          type: 'mcq',
          id: 'w3d4q2',
          question: { en: 'How do you say "à midi" in English?', fr: 'Comment dit-on "à midi" en anglais ?' },
          options: ['at noon', 'at midday', 'at twelve', 'at noon or midday'],
          correct: 3,
          explanation: { en: 'Both "noon" and "midday" mean midi! You can say "at noon" or "at midday" — they mean exactly the same thing. Midnight (minuit) is 12am, noon/midday is 12pm.', fr: '"Noon" et "midday" signifient tous les deux midi ! Vous pouvez dire "at noon" ou "at midday" — ils signifient exactement la même chose. Midnight (minuit) est 0h, noon/midday est 12h.' }
        },
        {
          type: 'mcq',
          id: 'w3d4q3',
          question: { en: 'I go to bed at 10:00 pm. How do you express this time?', fr: 'Je me couche à 22h00. Comment exprimez-vous cette heure ?' },
          options: ['ten o\'clock in the morning', 'ten o\'clock at night', 'ten in the noon', 'ten o\'clock midday'],
          correct: 1,
          explanation: { en: '"Ten o\'clock at night" or "ten o\'clock in the evening" = 10pm. "At night" is used for late evening/night hours. "In the morning" = am, "in the afternoon" = 12pm-6pm, "in the evening" = 6pm-9pm, "at night" = 9pm onwards.', fr: '"Ten o\'clock at night" ou "ten o\'clock in the evening" = 22h. "At night" s\'utilise pour les heures tardives. "In the morning" = matin, "in the afternoon" = après-midi, "in the evening" = soir, "at night" = tard le soir.' }
        }
      ]
    },
    {
      day: 5,
      dayName: { en: 'Friday', fr: 'Vendredi' },
      title: { en: 'Adverbs of Frequency', fr: 'Les adverbes de fréquence' },
      icon: '🔄',
      theory: {
        intro: {
          en: 'How often do you exercise? Do you always eat breakfast? Today we learn adverbs of frequency — words that tell us HOW OFTEN something happens. They are essential for describing your daily routine.',
          fr: 'À quelle fréquence faites-vous de l\'exercice ? Prenez-vous toujours le petit-déjeuner ? Aujourd\'hui, nous apprenons les adverbes de fréquence — des mots qui nous indiquent À QUELLE FRÉQUENCE quelque chose se produit. Ils sont essentiels pour décrire votre routine quotidienne.'
        },
        grammarTitle: { en: 'Adverbs of Frequency — Position in the Sentence', fr: 'Adverbes de fréquence — position dans la phrase' },
        grammar: {
          en: 'Adverbs of frequency in English, from 100% to 0%: always (toujours — 100%), usually (généralement — ~80%), often (souvent — ~60%), sometimes (parfois — ~40%), rarely/seldom (rarement — ~20%), never (jamais — 0%). Their position in a sentence: they go BEFORE the main verb ("I always eat breakfast") but AFTER the verb "to be" ("She is always happy"). This is an important rule! You can also put frequency expressions at the beginning or end of a sentence: "Every day, I eat fruit." "I exercise twice a week."',
          fr: 'Les adverbes de fréquence en anglais, de 100% à 0% : always (toujours — 100%), usually (généralement — ~80%), often (souvent — ~60%), sometimes (parfois — ~40%), rarely/seldom (rarement — ~20%), never (jamais — 0%). Position dans une phrase : ils vont AVANT le verbe principal ("I always eat breakfast") mais APRÈS le verbe "to be" ("She is always happy").'
        },
        examples: [
          { en: 'I always brush my teeth before bed.', fr: 'Je me brosse toujours les dents avant de dormir.', speak: 'I always brush my teeth before bed.' },
          { en: 'She usually drinks coffee in the morning.', fr: 'Elle boit généralement du café le matin.', speak: 'She usually drinks coffee in the morning.' },
          { en: 'We sometimes go to the cinema on weekends.', fr: 'Nous allons parfois au cinéma le week-end.', speak: 'We sometimes go to the cinema on weekends.' },
          { en: 'He is never late for work.', fr: 'Il n\'est jamais en retard au travail.', speak: 'He is never late for work.' },
          { en: 'I rarely eat fast food — maybe once a month.', fr: 'Je mange rarement de la restauration rapide — peut-être une fois par mois.', speak: 'I rarely eat fast food maybe once a month.' }
        ],
        vocabulary: [
          {
            en: 'always',
            fr: 'toujours',
            pronunciation: '/ˈɔːlweɪz/',
            example: { en: 'I always wake up early.', fr: 'Je me réveille toujours tôt.' }
          },
          {
            en: 'usually',
            fr: 'généralement / habituellement',
            pronunciation: '/ˈjuːʒuəli/',
            example: { en: 'She usually walks to work.', fr: 'Elle va généralement au travail à pied.' }
          },
          {
            en: 'often',
            fr: 'souvent',
            pronunciation: '/ˈɒfən/',
            example: { en: 'We often eat out on Fridays.', fr: 'Nous mangeons souvent au restaurant le vendredi.' }
          },
          {
            en: 'sometimes',
            fr: 'parfois',
            pronunciation: '/ˈsʌmtaɪmz/',
            example: { en: 'I sometimes forget my phone.', fr: 'J\'oublie parfois mon téléphone.' }
          },
          {
            en: 'rarely / seldom',
            fr: 'rarement',
            pronunciation: '/ˈrɛrli/ /ˈsɛldəm/',
            example: { en: 'He rarely eats red meat.', fr: 'Il mange rarement de la viande rouge.' }
          },
          {
            en: 'never',
            fr: 'jamais',
            pronunciation: '/ˈnɛvər/',
            example: { en: 'She never drinks alcohol.', fr: 'Elle ne boit jamais d\'alcool.' }
          },
          {
            en: 'every day',
            fr: 'chaque jour / tous les jours',
            pronunciation: '/ˈɛvri deɪ/',
            example: { en: 'I exercise every day.', fr: 'Je fais de l\'exercice tous les jours.' }
          },
          {
            en: 'once / twice a week',
            fr: 'une fois / deux fois par semaine',
            pronunciation: '/wʌns/ /twaɪs ə wiːk/',
            example: { en: 'I go swimming twice a week.', fr: 'Je nage deux fois par semaine.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w3d5ex1',
          question: { en: 'Where does the adverb of frequency go in this sentence? "I ___ eat breakfast."', fr: 'Où va l\'adverbe de fréquence dans cette phrase ? "I ___ eat breakfast."' },
          options: ['At the very end: "I eat breakfast always."', 'Before the verb: "I always eat breakfast."', 'After the noun: "I eat always breakfast."', 'At the beginning only: "Always I eat breakfast."'],
          correct: 1,
          explanation: { en: 'Adverbs of frequency go BEFORE the main verb: "I always eat breakfast." Exception: they go AFTER "to be": "She is always happy." Never put them after the noun or object!', fr: 'Les adverbes de fréquence vont AVANT le verbe principal : "I always eat breakfast." Exception : ils vont APRÈS "to be" : "She is always happy." Ne les mettez jamais après le nom ou le complément !' }
        },
        {
          type: 'match',
          id: 'w3d5ex2',
          instruction: { en: 'Match the adverb with the correct percentage of frequency', fr: 'Associez l\'adverbe au bon pourcentage de fréquence' },
          pairs: [
            { left: 'always', right: '100%' },
            { left: 'sometimes', right: '~40%' },
            { left: 'rarely', right: '~20%' },
            { left: 'never', right: '0%' }
          ]
        },
        {
          type: 'fill',
          id: 'w3d5ex3',
          instruction: { en: 'Complete the sentence with the correct adverb of frequency', fr: 'Complétez la phrase avec le bon adverbe de fréquence' },
          template: 'I ___ eat fast food — it\'s bad for health! (0%)',
          answer: 'never',
          hint: { en: '0% frequency — it never happens!', fr: '0% de fréquence — cela n\'arrive jamais !' }
        },
        {
          type: 'order',
          id: 'w3d5ex4',
          instruction: { en: 'Put the words in the right order', fr: 'Remettez les mots dans le bon ordre' },
          words: ['vegetables', 'eats', 'She', 'fresh', 'usually'],
          answer: 'She usually eats fresh vegetables'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d5q1',
          question: { en: 'Which sentence is grammatically correct?', fr: 'Quelle phrase est grammaticalement correcte ?' },
          options: ['She is happy always.', 'She always is happy.', 'She is always happy.', 'Always she is happy.'],
          correct: 2,
          explanation: { en: '"She is always happy" is correct. Remember: adverbs of frequency go AFTER the verb "to be". So: subject + is/am/are + frequency adverb + adjective.', fr: '"She is always happy" est correct. Rappel : les adverbes de fréquence vont APRÈS le verbe "to be". Donc : sujet + is/am/are + adverbe de fréquence + adjectif.' }
        },
        {
          type: 'mcq',
          id: 'w3d5q2',
          question: { en: 'Which adverb of frequency means "parfois" in French?', fr: 'Quel adverbe de fréquence signifie "parfois" en français ?' },
          options: ['usually', 'often', 'sometimes', 'rarely'],
          correct: 2,
          explanation: { en: '"Sometimes" = parfois. Frequency scale: always > usually > often > sometimes > rarely > never. "Sometimes" is in the middle — about 40% of the time.', fr: '"Sometimes" = parfois. Échelle de fréquence : always > usually > often > sometimes > rarely > never. "Sometimes" est au milieu — environ 40% du temps.' }
        },
        {
          type: 'mcq',
          id: 'w3d5q3',
          question: { en: 'How do you say "Il va rarement au cinéma" in English?', fr: 'Comment dit-on "Il va rarement au cinéma" en anglais ?' },
          options: ['He goes rarely to the cinema.', 'He rarely goes to the cinema.', 'He goes to the cinema rarely.', 'Rarely he goes to the cinema.'],
          correct: 1,
          explanation: { en: '"He rarely goes to the cinema" is correct. The adverb "rarely" comes before the main verb "goes". All frequency adverbs follow this rule with non-"to be" verbs.', fr: '"He rarely goes to the cinema" est correct. L\'adverbe "rarely" vient avant le verbe principal "goes". Tous les adverbes de fréquence suivent cette règle avec les verbes autres que "to be".' }
        }
      ]
    },
    {
      day: 6,
      dayName: { en: 'Saturday', fr: 'Samedi' },
      title: { en: 'Daily Routine Review Dialogue', fr: 'Dialogue de révision — la routine quotidienne' },
      icon: '🌅',
      theory: {
        intro: {
          en: 'Today we put everything together! We review the week\'s lessons through a real daily routine dialogue. You\'ll practice food vocabulary, present simple, time expressions, and adverbs of frequency — all in context.',
          fr: 'Aujourd\'hui, nous mettons tout ensemble ! Nous révisons les leçons de la semaine à travers un vrai dialogue de routine quotidienne. Vous pratiquerez le vocabulaire alimentaire, le présent simple, les expressions de temps et les adverbes de fréquence — tout en contexte.'
        },
        grammarTitle: { en: 'Putting It All Together — A Daily Routine in English', fr: 'Tout mettre ensemble — une routine quotidienne en anglais' },
        grammar: {
          en: 'A daily routine description in English combines many of the elements we have learned this week. Use the present simple for habits. Use adverbs of frequency (always, usually, sometimes, never) to describe how often you do things. Use time expressions (at 7am, in the morning, at noon, in the evening). Use food vocabulary to describe meals. The pattern for a routine description: "I [always/usually/sometimes] [verb] at [time] in the [morning/afternoon/evening]." For example: "I usually wake up at 6:30 in the morning. I always have coffee for breakfast. I sometimes go to the gym after work."',
          fr: 'Une description de routine quotidienne en anglais combine de nombreux éléments que nous avons appris cette semaine. Utilisez le présent simple pour les habitudes. Utilisez les adverbes de fréquence (always, usually, sometimes, never) pour décrire la fréquence. Utilisez les expressions de temps (at 7am, in the morning, at noon). Utilisez le vocabulaire alimentaire pour décrire les repas.'
        },
        examples: [
          { en: 'I usually wake up at 6:30 in the morning.', fr: 'Je me réveille généralement à 6h30 le matin.', speak: 'I usually wake up at 6:30 in the morning.' },
          { en: 'I always have breakfast at 7 o\'clock.', fr: 'Je prends toujours le petit-déjeuner à 7 heures.', speak: 'I always have breakfast at 7 o\'clock.' },
          { en: 'For breakfast, I eat toast and drink coffee.', fr: 'Pour le petit-déjeuner, je mange du pain grillé et bois du café.', speak: 'For breakfast I eat toast and drink coffee.' },
          { en: 'I sometimes eat a banana as a morning snack.', fr: 'Je mange parfois une banane comme collation matinale.', speak: 'I sometimes eat a banana as a morning snack.' },
          { en: 'I never skip dinner — it\'s my favourite meal!', fr: 'Je ne saute jamais le dîner — c\'est mon repas préféré !', speak: 'I never skip dinner it\'s my favourite meal!' }
        ],
        vocabulary: [
          {
            en: 'wake up',
            fr: 'se réveiller',
            pronunciation: '/weɪk ʌp/',
            example: { en: 'I wake up at 7am.', fr: 'Je me réveille à 7h.' }
          },
          {
            en: 'get up',
            fr: 'se lever',
            pronunciation: '/ɡɛt ʌp/',
            example: { en: 'I get up and shower.', fr: 'Je me lève et prends une douche.' }
          },
          {
            en: 'go to work / school',
            fr: 'aller au travail / à l\'école',
            pronunciation: '/ɡoʊ tuː wɜːrk/',
            example: { en: 'I go to work at 8:30.', fr: 'Je vais au travail à 8h30.' }
          },
          {
            en: 'have a shower',
            fr: 'prendre une douche',
            pronunciation: '/hæv ə ˈʃaʊər/',
            example: { en: 'I have a shower every morning.', fr: 'Je prends une douche tous les matins.' }
          },
          {
            en: 'go to bed',
            fr: 'aller au lit / se coucher',
            pronunciation: '/ɡoʊ tuː bɛd/',
            example: { en: 'I go to bed at 10pm.', fr: 'Je me couche à 22h.' }
          },
          {
            en: 'skip',
            fr: 'sauter / manquer',
            pronunciation: '/skɪp/',
            example: { en: 'I never skip breakfast.', fr: 'Je ne saute jamais le petit-déjeuner.' }
          },
          {
            en: 'busy',
            fr: 'occupé(e)',
            pronunciation: '/ˈbɪzi/',
            example: { en: 'I am always busy on Monday.', fr: 'Je suis toujours occupé(e) le lundi.' }
          },
          {
            en: 'free time',
            fr: 'temps libre',
            pronunciation: '/friː taɪm/',
            example: { en: 'I have free time in the evening.', fr: 'J\'ai du temps libre le soir.' }
          }
        ]
      },
      exercises: [
        {
          type: 'order',
          id: 'w3d6ex1',
          instruction: { en: 'Put the daily routine activities in the correct order (morning first)', fr: 'Mettez les activités de routine dans le bon ordre (le matin d\'abord)' },
          words: ['breakfast', 'have', 'up', 'wake', 'to', 'go', 'work'],
          answer: 'wake up have breakfast go to work'
        },
        {
          type: 'mcq',
          id: 'w3d6ex2',
          question: { en: 'Which sentence correctly describes a daily routine?', fr: 'Quelle phrase décrit correctement une routine quotidienne ?' },
          options: ['I am eating breakfast at 7am every day.', 'I usually eat breakfast at 7am.', 'I eating breakfast always at 7am.', 'Every day I am eating breakfast.'],
          correct: 1,
          explanation: { en: '"I usually eat breakfast at 7am" is correct — present simple (eat) + adverb of frequency (usually) + time expression (at 7am). The adverb goes before the verb.', fr: '"I usually eat breakfast at 7am" est correct — présent simple (eat) + adverbe de fréquence (usually) + expression de temps (at 7am). L\'adverbe va avant le verbe.' }
        },
        {
          type: 'fill',
          id: 'w3d6ex3',
          instruction: { en: 'Complete the sentence about your evening routine', fr: 'Complétez la phrase sur votre routine du soir' },
          template: 'I always ___ to bed before midnight.',
          answer: 'go',
          hint: { en: 'The phrasal verb for sleeping: go to ___', fr: 'Le verbe pour dormir : go to ___' }
        },
        {
          type: 'flashcard',
          id: 'w3d6ex4',
          instruction: { en: 'Review key daily routine phrases — click to flip each card', fr: 'Révisez les phrases clés de routine — cliquez pour retourner chaque carte' },
          cards: [
            { front: 'I wake up at...', back: 'Je me réveille à...', example: { en: 'I wake up at 6:30 every morning.', fr: 'Je me réveille à 6h30 tous les matins.' } },
            { front: 'I have breakfast at...', back: 'Je prends le petit-déj à...', example: { en: 'I have breakfast at 7 o\'clock.', fr: 'Je prends le petit-déjeuner à 7 heures.' } },
            { front: 'I go to work at...', back: 'Je vais au travail à...', example: { en: 'I go to work at 8:30.', fr: 'Je vais au travail à 8h30.' } },
            { front: 'I usually...', back: 'Je ... généralement...', example: { en: 'I usually eat salad for lunch.', fr: 'Je mange généralement de la salade pour le déjeuner.' } },
            { front: 'I never...', back: 'Je ne ... jamais...', example: { en: 'I never drink soda.', fr: 'Je ne bois jamais de soda.' } },
            { front: 'I go to bed at...', back: 'Je me couche à...', example: { en: 'I go to bed at 10pm.', fr: 'Je me couche à 22h.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d6q1',
          question: { en: 'How do you describe a habit in English?', fr: 'Comment décrit-on une habitude en anglais ?' },
          options: ['Use the past simple', 'Use the present simple', 'Use "going to"', 'Use the future tense'],
          correct: 1,
          explanation: { en: 'The present simple is used for habits and routines: "I eat breakfast every day." Key signal words: every day, always, usually, often, sometimes, never. If you see these words, use present simple!', fr: 'Le présent simple s\'utilise pour les habitudes et les routines : "I eat breakfast every day." Mots signaux : every day, always, usually, often, sometimes, never. Si vous voyez ces mots, utilisez le présent simple !' }
        },
        {
          type: 'mcq',
          id: 'w3d6q2',
          question: { en: 'Arrange the meals in the correct order of the day', fr: 'Disposez les repas dans le bon ordre de la journée' },
          options: ['dinner → lunch → breakfast', 'lunch → breakfast → dinner', 'breakfast → lunch → dinner', 'breakfast → dinner → lunch'],
          correct: 2,
          explanation: { en: 'The correct order is: breakfast (morning) → lunch (midday) → dinner (evening). This is the typical order of meals in an English-speaking day!', fr: 'L\'ordre correct est : breakfast (matin) → lunch (midi) → dinner (soir). C\'est l\'ordre typique des repas dans une journée anglophone !' }
        },
        {
          type: 'mcq',
          id: 'w3d6q3',
          question: { en: 'Which sentence correctly uses an adverb of frequency?', fr: 'Quelle phrase utilise correctement un adverbe de fréquence ?' },
          options: ['I go to bed always late.', 'I always go to bed late.', 'Always I go to bed late.', 'I go always to bed late.'],
          correct: 1,
          explanation: { en: '"I always go to bed late" is correct. The adverb of frequency (always) comes before the main verb (go). This is the standard position for frequency adverbs in English.', fr: '"I always go to bed late" est correct. L\'adverbe de fréquence (always) vient avant le verbe principal (go). C\'est la position standard pour les adverbes de fréquence en anglais.' }
        }
      ]
    }
  ],
  sunday: {
    title: { en: 'Week 3 Review', fr: 'Révision — Semaine 3' },
    summary: {
      en: 'This week you explored the world of food and daily routines! You learned food vocabulary (fruits, vegetables, drinks), how to express likes and dislikes with "I like/I don\'t like", the names of the three main meals, the present simple tense for habits and facts, how to tell the time in English, and adverbs of frequency (always, usually, sometimes, never). You can now describe your complete daily routine in English!',
      fr: 'Cette semaine, vous avez exploré le monde de l\'alimentation et des routines quotidiennes ! Vous avez appris le vocabulaire alimentaire (fruits, légumes, boissons), comment exprimer ce qu\'on aime et n\'aime pas avec "I like/I don\'t like", les noms des trois repas principaux, le présent simple pour les habitudes, comment dire l\'heure en anglais et les adverbes de fréquence (always, usually, sometimes, never). Vous pouvez maintenant décrire votre routine quotidienne complète en anglais !'
    },
    vocabulary: [
      { en: 'breakfast / lunch / dinner', fr: 'petit-déjeuner / déjeuner / dîner', pronunciation: '/ˈbrɛkfəst/ /lʌntʃ/ /ˈdɪnər/' },
      { en: 'I like / I don\'t like', fr: 'j\'aime / je n\'aime pas', pronunciation: '/aɪ laɪk/ /aɪ doʊnt laɪk/' },
      { en: 'apple / banana / carrot', fr: 'pomme / banane / carotte', pronunciation: '/ˈæpəl/ /bəˈnɑːnə/ /ˈkærət/' },
      { en: 'always', fr: 'toujours', pronunciation: '/ˈɔːlweɪz/' },
      { en: 'usually', fr: 'généralement', pronunciation: '/ˈjuːʒuəli/' },
      { en: 'sometimes', fr: 'parfois', pronunciation: '/ˈsʌmtaɪmz/' },
      { en: 'never', fr: 'jamais', pronunciation: '/ˈnɛvər/' },
      { en: 'o\'clock', fr: 'heure pile', pronunciation: '/əˈklɒk/' },
      { en: 'half past', fr: 'et demie', pronunciation: '/hɑːf pɑːst/' },
      { en: 'wake up / go to bed', fr: 'se réveiller / se coucher', pronunciation: '/weɪk ʌp/ /ɡoʊ tuː bɛd/' }
    ],
    grammarPoints: [
      {
        title: { en: 'Present Simple — He/She adds "-s"', fr: 'Présent simple — He/She ajoute "-s"' },
        rule: { en: 'For I/You/We/They: use the base verb (eat, drink, go). For He/She/It: add "-s" or "-es" (eats, drinks, goes, watches, studies). This is one of the most important rules in English!', fr: 'Pour I/You/We/They : utilisez le verbe de base (eat, drink, go). Pour He/She/It : ajoutez "-s" ou "-es" (eats, drinks, goes, watches, studies). C\'est l\'une des règles les plus importantes en anglais !' },
        example: { en: 'I eat salad. She eats salad. He watches TV. They watch TV.', fr: 'Je mange de la salade. Elle mange de la salade. Il regarde la télé. Ils regardent la télé.' }
      },
      {
        title: { en: 'Adverbs of Frequency — Position', fr: 'Adverbes de fréquence — position' },
        rule: { en: 'Adverbs of frequency go BEFORE the main verb: "I always eat breakfast." But AFTER the verb "to be": "She is always tired." Never put them after the object.', fr: 'Les adverbes de fréquence vont AVANT le verbe principal : "I always eat breakfast." Mais APRÈS le verbe "to be" : "She is always tired." Ne les mettez jamais après le complément.' },
        example: { en: 'I usually wake up at 7am. She is never late. He sometimes eats out.', fr: 'Je me réveille généralement à 7h. Elle n\'est jamais en retard. Il mange parfois au restaurant.' }
      },
      {
        title: { en: 'Telling the Time', fr: 'Dire l\'heure' },
        rule: { en: 'o\'clock = exact hour. half past = 30 minutes. quarter past = 15 minutes after. quarter to = 15 minutes before the next hour. Always use "It\'s" to say the time.', fr: 'o\'clock = heure pile. half past = 30 minutes. quarter past = 15 minutes après. quarter to = 15 minutes avant l\'heure suivante. Utilisez toujours "It\'s" pour dire l\'heure.' },
        example: { en: 'It\'s three o\'clock. It\'s half past six. It\'s quarter to nine.', fr: 'Il est trois heures. Il est six heures et demie. Il est neuf heures moins le quart.' }
      }
    ],
    conversationTopics: [
      {
        title: { en: 'Talking About Food', fr: 'Parler de la nourriture' },
        prompts: [
          { en: 'Do you like vegetables?', fr: 'Aimez-vous les légumes ?' },
          { en: 'I love fruit, but I don\'t like coffee.', fr: 'J\'adore les fruits, mais je n\'aime pas le café.' },
          { en: 'What is your favourite food?', fr: 'Quelle est votre nourriture préférée ?' },
          { en: 'I eat a lot of bread and cheese — I\'m French!', fr: 'Je mange beaucoup de pain et de fromage — je suis français(e) !' },
          { en: 'What do you eat for lunch?', fr: 'Que mangez-vous pour le déjeuner ?' }
        ]
      },
      {
        title: { en: 'Describing Your Daily Routine', fr: 'Décrire votre routine quotidienne' },
        prompts: [
          { en: 'I usually wake up at 7am and have a shower.', fr: 'Je me réveille généralement à 7h et prends une douche.' },
          { en: 'I always have breakfast before work.', fr: 'Je prends toujours le petit-déjeuner avant le travail.' },
          { en: 'I sometimes go to the gym after work.', fr: 'Je vais parfois à la salle de sport après le travail.' },
          { en: 'I go to bed at half past ten.', fr: 'Je me couche à dix heures et demie.' }
        ]
      },
      {
        title: { en: 'Asking About the Time', fr: 'Demander l\'heure' },
        prompts: [
          { en: 'What time is it?', fr: 'Quelle heure est-il ?' },
          { en: 'It\'s quarter past three.', fr: 'Il est trois heures et quart.' },
          { en: 'At what time do you have lunch?', fr: 'À quelle heure déjeunez-vous ?' },
          { en: 'I have lunch at noon.', fr: 'Je déjeune à midi.' }
        ]
      }
    ]
  }
};
