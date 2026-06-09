const LESSONS_BEGINNER_WEEK2 = {
  week: 2,
  level: 'beginner',
  theme: { en: 'Family & Daily Life', fr: 'Famille et vie quotidienne' },
  days: [
    {
      day: 1,
      dayName: { en: 'Monday', fr: 'Lundi' },
      title: { en: 'Family Members', fr: 'Les membres de la famille' },
      icon: '👨‍👩‍👧‍👦',
      theory: {
        intro: {
          en: 'Family is one of the most universal topics in any language! Today we learn the names of family members and the very important verb "to have". You\'ll be able to talk about your family in English.',
          fr: 'La famille est l\'un des sujets les plus universels dans n\'importe quelle langue ! Aujourd\'hui, nous apprenons les noms des membres de la famille et le verbe très important "to have" (avoir). Vous pourrez parler de votre famille en anglais.'
        },
        grammarTitle: { en: 'The Verb "To Have" — I have, She has', fr: 'Le verbe "avoir" — I have, She has' },
        grammar: {
          en: 'The verb "to have" in English is used to talk about possession and family relationships. In the present tense: I have, You have, He/She/It has, We have, They have. Notice that for he, she, and it, the verb changes to "has" — this is very important! To say you have a family member, use: "I have a sister", "He has two brothers". To say you do NOT have something, use "don\'t have" (for I/You/We/They) or "doesn\'t have" (for He/She/It): "I don\'t have a brother", "She doesn\'t have any children."',
          fr: 'Le verbe "to have" (avoir) en anglais s\'utilise pour parler de possession et de relations familiales. Au présent : I have (j\'ai), You have (vous avez), He/She/It has (il/elle a), We have (nous avons), They have (ils ont). Notez que pour he, she et it, le verbe devient "has" — c\'est très important ! Pour dire que vous avez un membre de la famille : "I have a sister" (j\'ai une sœur). Pour la négation, utilisez "don\'t have" ou "doesn\'t have".'
        },
        examples: [
          { en: 'I have one brother and two sisters.', fr: 'J\'ai un frère et deux sœurs.', speak: 'I have one brother and two sisters.' },
          { en: 'She has a big family.', fr: 'Elle a une grande famille.', speak: 'She has a big family.' },
          { en: 'My mother has blue eyes.', fr: 'Ma mère a les yeux bleus.', speak: 'My mother has blue eyes.' },
          { en: 'Do you have any brothers or sisters?', fr: 'Avez-vous des frères ou des sœurs ?', speak: 'Do you have any brothers or sisters?' },
          { en: 'He doesn\'t have a dog, but he has a cat.', fr: 'Il n\'a pas de chien, mais il a un chat.', speak: 'He doesn\'t have a dog but he has a cat.' }
        ],
        vocabulary: [
          {
            en: 'mother / mom',
            fr: 'mère / maman',
            pronunciation: '/ˈmʌðər/ /mɒm/',
            example: { en: 'My mother is a doctor.', fr: 'Ma mère est médecin.' }
          },
          {
            en: 'father / dad',
            fr: 'père / papa',
            pronunciation: '/ˈfɑːðər/ /dæd/',
            example: { en: 'My father works in Paris.', fr: 'Mon père travaille à Paris.' }
          },
          {
            en: 'sister',
            fr: 'sœur',
            pronunciation: '/ˈsɪstər/',
            example: { en: 'I have a younger sister.', fr: 'J\'ai une petite sœur.' }
          },
          {
            en: 'brother',
            fr: 'frère',
            pronunciation: '/ˈbrʌðər/',
            example: { en: 'My brother is 15 years old.', fr: 'Mon frère a 15 ans.' }
          },
          {
            en: 'grandmother / grandma',
            fr: 'grand-mère / mamie',
            pronunciation: '/ˈɡrænˌmʌðər/ /ˈɡrænmɑː/',
            example: { en: 'My grandma makes great cookies.', fr: 'Ma mamie fait de super gâteaux.' }
          },
          {
            en: 'grandfather / grandpa',
            fr: 'grand-père / papi',
            pronunciation: '/ˈɡrænˌfɑːðər/ /ˈɡrænpɑː/',
            example: { en: 'My grandpa tells great stories.', fr: 'Mon papi raconte de super histoires.' }
          },
          {
            en: 'uncle / aunt',
            fr: 'oncle / tante',
            pronunciation: '/ˈʌŋkəl/ /ænt/',
            example: { en: 'My uncle lives in New York.', fr: 'Mon oncle vit à New York.' }
          },
          {
            en: 'cousin',
            fr: 'cousin(e)',
            pronunciation: '/ˈkʌzən/',
            example: { en: 'I have five cousins.', fr: 'J\'ai cinq cousins.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d1ex1',
          question: { en: 'Which form of "to have" is correct for "she"?', fr: 'Quelle forme de "to have" est correcte pour "she" ?' },
          options: ['she have', 'she has', 'she haves', 'she is have'],
          correct: 1,
          explanation: { en: 'For he, she, and it, we always use "has". "She has a brother." For I, you, we, they, we use "have". This is one of the most common rules in English!', fr: 'Pour he (il), she (elle) et it, on utilise toujours "has". "She has a brother." Pour I, you, we, they, on utilise "have". C\'est l\'une des règles les plus courantes en anglais !' }
        },
        {
          type: 'fill',
          id: 'w2d1ex2',
          instruction: { en: 'Complete the sentence with the correct form of "to have"', fr: 'Complétez la phrase avec la forme correcte de "to have"' },
          template: 'My father ___ three brothers.',
          answer: 'has',
          hint: { en: 'My father = he → use has', fr: 'My father = il → utilisez has' }
        },
        {
          type: 'match',
          id: 'w2d1ex3',
          instruction: { en: 'Match the family members with their French translations', fr: 'Associez les membres de la famille à leurs traductions françaises' },
          pairs: [
            { left: 'mother', right: 'mère' },
            { left: 'brother', right: 'frère' },
            { left: 'grandmother', right: 'grand-mère' },
            { left: 'cousin', right: 'cousin(e)' }
          ]
        },
        {
          type: 'order',
          id: 'w2d1ex4',
          instruction: { en: 'Put the words in the right order to describe your family', fr: 'Remettez les mots dans le bon ordre pour décrire votre famille' },
          words: ['have', 'sisters', 'and', 'I', 'two', 'brother', 'one'],
          answer: 'I have two sisters and one brother'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d1q1',
          question: { en: 'How do you say "Elle a une grande famille" in English?', fr: 'Comment dit-on "Elle a une grande famille" en anglais ?' },
          options: ['She have a big family.', 'She has a big family.', 'She is have a big family.', 'She haves a big family.'],
          correct: 1,
          explanation: { en: '"She has a big family" is correct. Remember: she → has. The verb "to have" changes to "has" for he, she, and it.', fr: '"She has a big family" est correct. Rappel : she → has. Le verbe "to have" devient "has" pour he, she et it.' }
        },
        {
          type: 'mcq',
          id: 'w2d1q2',
          question: { en: 'What do we call the mother of your mother?', fr: 'Comment appelle-t-on la mère de votre mère ?' },
          options: ['aunt', 'sister', 'grandmother', 'cousin'],
          correct: 2,
          explanation: { en: 'Your mother\'s mother is your "grandmother" (or "grandma" informally). Your father\'s mother is also your grandmother!', fr: 'La mère de votre mère est votre "grandmother" (grand-mère). La mère de votre père est aussi votre grand-mère !' }
        },
        {
          type: 'mcq',
          id: 'w2d1q3',
          question: { en: 'Which sentence is in the negative form?', fr: 'Quelle phrase est à la forme négative ?' },
          options: ['I have a sister.', 'She has a brother.', 'I don\'t have any pets.', 'He has two cousins.'],
          correct: 2,
          explanation: { en: '"I don\'t have any pets" is the negative form. "Don\'t" = do not. For negatives: I/You/We/They + don\'t have. He/She/It + doesn\'t have.', fr: '"I don\'t have any pets" est la forme négative. "Don\'t" = do not. Pour les négations : I/You/We/They + don\'t have. He/She/It + doesn\'t have.' }
        }
      ]
    },
    {
      day: 2,
      dayName: { en: 'Tuesday', fr: 'Mardi' },
      title: { en: 'Days of the Week', fr: 'Les jours de la semaine' },
      icon: '📅',
      theory: {
        intro: {
          en: 'Knowing the days of the week is essential for making plans, talking about schedules, and daily communication. In English, all days of the week start with a capital letter! Today we also learn ordinal numbers (first, second, third...).',
          fr: 'Connaître les jours de la semaine est essentiel pour faire des plans, parler des emplois du temps et communiquer au quotidien. En anglais, tous les jours de la semaine commencent par une majuscule ! Aujourd\'hui, nous apprenons aussi les nombres ordinaux (first, second, third...).'
        },
        grammarTitle: { en: 'Days of the Week & Ordinal Numbers', fr: 'Les jours de la semaine et les nombres ordinaux' },
        grammar: {
          en: 'The days of the week in English are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. They ALWAYS start with a capital letter. The week starts on Monday in most of Europe. To say what day it is, use: "Today is Monday." To ask: "What day is it today?" or "What day is today?" Ordinal numbers show position or order: first (1st), second (2nd), third (3rd), fourth (4th), fifth (5th). Notice the irregular forms: first, second, third — then most just add "-th".',
          fr: 'Les jours de la semaine en anglais sont : Monday (lundi), Tuesday (mardi), Wednesday (mercredi), Thursday (jeudi), Friday (vendredi), Saturday (samedi), Sunday (dimanche). Ils commencent TOUJOURS par une majuscule. Pour dire quel jour on est : "Today is Monday." Pour demander : "What day is it today ?" Les nombres ordinaux indiquent la position : first (1er), second (2e), third (3e), fourth (4e), fifth (5e).'
        },
        examples: [
          { en: 'What day is it today? Today is Wednesday.', fr: 'Quel jour sommes-nous ? Aujourd\'hui c\'est mercredi.', speak: 'What day is it today? Today is Wednesday.' },
          { en: 'My English class is on Monday and Friday.', fr: 'Mon cours d\'anglais est le lundi et le vendredi.', speak: 'My English class is on Monday and Friday.' },
          { en: 'The first day of the week is Monday.', fr: 'Le premier jour de la semaine est lundi.', speak: 'The first day of the week is Monday.' },
          { en: 'Saturday is my favourite day!', fr: 'Le samedi est mon jour préféré !', speak: 'Saturday is my favourite day!' },
          { en: 'She works from Monday to Friday.', fr: 'Elle travaille du lundi au vendredi.', speak: 'She works from Monday to Friday.' }
        ],
        vocabulary: [
          {
            en: 'Monday',
            fr: 'lundi',
            pronunciation: '/ˈmʌndeɪ/',
            example: { en: 'I go to the gym on Monday.', fr: 'Je vais à la salle de sport le lundi.' }
          },
          {
            en: 'Tuesday',
            fr: 'mardi',
            pronunciation: '/ˈtjuːzdeɪ/',
            example: { en: 'We have a meeting on Tuesday.', fr: 'Nous avons une réunion le mardi.' }
          },
          {
            en: 'Wednesday',
            fr: 'mercredi',
            pronunciation: '/ˈwɛnzdeɪ/',
            example: { en: 'Wednesday is the middle of the week.', fr: 'Le mercredi est le milieu de la semaine.' }
          },
          {
            en: 'Thursday',
            fr: 'jeudi',
            pronunciation: '/ˈθɜːrzdeɪ/',
            example: { en: 'The market is open on Thursday.', fr: 'Le marché est ouvert le jeudi.' }
          },
          {
            en: 'Friday',
            fr: 'vendredi',
            pronunciation: '/ˈfraɪdeɪ/',
            example: { en: 'TGIF! — Thank God It\'s Friday!', fr: 'Enfin vendredi !' }
          },
          {
            en: 'Saturday',
            fr: 'samedi',
            pronunciation: '/ˈsætərdeɪ/',
            example: { en: 'I rest on Saturday.', fr: 'Je me repose le samedi.' }
          },
          {
            en: 'Sunday',
            fr: 'dimanche',
            pronunciation: '/ˈsʌndeɪ/',
            example: { en: 'Sunday is a day for family.', fr: 'Le dimanche est un jour en famille.' }
          },
          {
            en: 'first / second / third',
            fr: 'premier / deuxième / troisième',
            pronunciation: '/fɜːrst/ /ˈsɛkənd/ /θɜːrd/',
            example: { en: 'Monday is the first day of the week.', fr: 'Lundi est le premier jour de la semaine.' }
          }
        ]
      },
      exercises: [
        {
          type: 'match',
          id: 'w2d2ex1',
          instruction: { en: 'Match the English days with their French translations', fr: 'Associez les jours anglais à leurs traductions françaises' },
          pairs: [
            { left: 'Monday', right: 'lundi' },
            { left: 'Wednesday', right: 'mercredi' },
            { left: 'Friday', right: 'vendredi' },
            { left: 'Sunday', right: 'dimanche' }
          ]
        },
        {
          type: 'mcq',
          id: 'w2d2ex2',
          question: { en: 'Which day comes after Thursday?', fr: 'Quel jour vient après jeudi ?' },
          options: ['Wednesday', 'Saturday', 'Friday', 'Tuesday'],
          correct: 2,
          explanation: { en: 'The order is: Monday, Tuesday, Wednesday, Thursday, FRIDAY, Saturday, Sunday. Friday comes right after Thursday.', fr: 'L\'ordre est : Monday, Tuesday, Wednesday, Thursday, FRIDAY, Saturday, Sunday. Friday vient juste après Thursday.' }
        },
        {
          type: 'fill',
          id: 'w2d2ex3',
          instruction: { en: 'Complete the question about the day', fr: 'Complétez la question sur le jour' },
          template: 'What ___ is it today?',
          answer: 'day',
          hint: { en: 'You are asking about Monday, Tuesday, Wednesday...', fr: 'Vous demandez s\'il s\'agit de lundi, mardi, mercredi...' }
        },
        {
          type: 'order',
          id: 'w2d2ex4',
          instruction: { en: 'Put the days in the correct order (Monday first)', fr: 'Mettez les jours dans le bon ordre (lundi en premier)' },
          words: ['Wednesday', 'Friday', 'Monday', 'Thursday', 'Tuesday'],
          answer: 'Monday Tuesday Wednesday Thursday Friday'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d2q1',
          question: { en: 'What is the ordinal number for 3?', fr: 'Quel est le nombre ordinal pour 3 ?' },
          options: ['threeth', 'thirdly', 'third', 'three\'s'],
          correct: 2,
          explanation: { en: '"Third" is the ordinal for 3. The first three ordinals are irregular: first, second, third. From 4 onwards, most add "-th": fourth, fifth, sixth...', fr: '"Third" est l\'ordinal pour 3. Les trois premiers ordinaux sont irréguliers : first (1er), second (2e), third (3e). À partir de 4, la plupart ajoutent "-th" : fourth, fifth, sixth...' }
        },
        {
          type: 'mcq',
          id: 'w2d2q2',
          question: { en: 'How do you say "Mon cours est le mercredi" in English?', fr: 'Comment dit-on "Mon cours est le mercredi" en anglais ?' },
          options: ['My class is in Wednesday.', 'My class is at Wednesday.', 'My class is on Wednesday.', 'My class is Wednesday.'],
          correct: 2,
          explanation: { en: 'We use "on" with days of the week: "on Monday", "on Tuesday", "on Wednesday". Think of it as: on a specific day.', fr: 'On utilise "on" avec les jours de la semaine : "on Monday", "on Tuesday", "on Wednesday". Pensez-y comme : on a specific day (un jour précis).' }
        },
        {
          type: 'mcq',
          id: 'w2d2q3',
          question: { en: 'In English, how do you write days of the week?', fr: 'En anglais, comment écrit-on les jours de la semaine ?' },
          options: ['All in lowercase (monday)', 'Always with a capital letter (Monday)', 'In uppercase only on Monday', 'It doesn\'t matter'],
          correct: 1,
          explanation: { en: 'In English, days of the week ALWAYS start with a capital letter: Monday, Tuesday, Wednesday, etc. This is a grammar rule, not optional!', fr: 'En anglais, les jours de la semaine commencent TOUJOURS par une majuscule : Monday, Tuesday, Wednesday, etc. C\'est une règle de grammaire, pas optionnel !' }
        }
      ]
    },
    {
      day: 3,
      dayName: { en: 'Wednesday', fr: 'Mercredi' },
      title: { en: 'Months & Seasons', fr: 'Les mois et les saisons' },
      icon: '🌸',
      theory: {
        intro: {
          en: 'After learning the days of the week, we now discover the months and seasons! You\'ll also learn how to talk about birthdays — one of the most common conversation topics between people who are getting to know each other.',
          fr: 'Après avoir appris les jours de la semaine, nous découvrons maintenant les mois et les saisons ! Vous apprendrez aussi à parler des anniversaires — l\'un des sujets de conversation les plus courants entre personnes qui font connaissance.'
        },
        grammarTitle: { en: 'Months, Seasons & Birthday Expressions', fr: 'Mois, saisons et expressions d\'anniversaire' },
        grammar: {
          en: 'Like days of the week, months in English always start with a capital letter: January, February, March, April, May, June, July, August, September, October, November, December. The four seasons are: spring, summer, autumn (or fall), winter. To talk about months and seasons, use the preposition "in": "My birthday is in July", "It is hot in summer". To ask about birthdays: "When is your birthday?" Answer: "My birthday is in [month]" or more specifically "My birthday is on [ordinal] [month]": "My birthday is on the 5th of March."',
          fr: 'Comme les jours de la semaine, les mois en anglais commencent toujours par une majuscule : January, February, March... Les quatre saisons sont : spring (printemps), summer (été), autumn/fall (automne), winter (hiver). Pour parler des mois et des saisons, utilisez la préposition "in" : "My birthday is in July". Pour demander l\'anniversaire : "When is your birthday?" Réponse : "My birthday is in [mois]".'
        },
        examples: [
          { en: 'When is your birthday? My birthday is in June.', fr: 'Quand est votre anniversaire ? Mon anniversaire est en juin.', speak: 'When is your birthday? My birthday is in June.' },
          { en: 'I love winter because of the snow!', fr: 'J\'adore l\'hiver à cause de la neige !', speak: 'I love winter because of the snow!' },
          { en: 'Spring begins in March in France.', fr: 'Le printemps commence en mars en France.', speak: 'Spring begins in March in France.' },
          { en: 'My birthday is on the 14th of July.', fr: 'Mon anniversaire est le 14 juillet.', speak: 'My birthday is on the fourteenth of July.' },
          { en: 'Christmas is in December.', fr: 'Noël est en décembre.', speak: 'Christmas is in December.' }
        ],
        vocabulary: [
          {
            en: 'January / February / March',
            fr: 'janvier / février / mars',
            pronunciation: '/ˈdʒænjueri/ /ˈfebrueri/ /mɑːrtʃ/',
            example: { en: 'January is the first month.', fr: 'Janvier est le premier mois.' }
          },
          {
            en: 'April / May / June',
            fr: 'avril / mai / juin',
            pronunciation: '/ˈeɪprəl/ /meɪ/ /dʒuːn/',
            example: { en: 'Flowers bloom in April and May.', fr: 'Les fleurs s\'épanouissent en avril et mai.' }
          },
          {
            en: 'July / August / September',
            fr: 'juillet / août / septembre',
            pronunciation: '/dʒuˈlaɪ/ /ˈɔːɡəst/ /sepˈtembər/',
            example: { en: 'Summer holidays are in July and August.', fr: 'Les vacances d\'été sont en juillet et août.' }
          },
          {
            en: 'October / November / December',
            fr: 'octobre / novembre / décembre',
            pronunciation: '/ɒkˈtoʊbər/ /noʊˈvembər/ /dɪˈsembər/',
            example: { en: 'Christmas is in December.', fr: 'Noël est en décembre.' }
          },
          {
            en: 'spring',
            fr: 'printemps',
            pronunciation: '/sprɪŋ/',
            example: { en: 'Flowers grow in spring.', fr: 'Les fleurs poussent au printemps.' }
          },
          {
            en: 'summer',
            fr: 'été',
            pronunciation: '/ˈsʌmər/',
            example: { en: 'We go to the beach in summer.', fr: 'Nous allons à la plage en été.' }
          },
          {
            en: 'autumn / fall',
            fr: 'automne',
            pronunciation: '/ˈɔːtəm/ /fɔːl/',
            example: { en: 'Leaves fall in autumn.', fr: 'Les feuilles tombent en automne.' }
          },
          {
            en: 'winter',
            fr: 'hiver',
            pronunciation: '/ˈwɪntər/',
            example: { en: 'It snows in winter.', fr: 'Il neige en hiver.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d3ex1',
          question: { en: 'Which preposition do you use with months? "My birthday is ___ July."', fr: 'Quelle préposition utilisez-vous avec les mois ? "My birthday is ___ July."' },
          options: ['at', 'on', 'in', 'by'],
          correct: 2,
          explanation: { en: 'We use "in" with months and seasons: "in July", "in summer". We use "on" with specific dates: "on the 5th of July". We use "at" with holidays: "at Christmas".', fr: 'On utilise "in" avec les mois et les saisons : "in July", "in summer". On utilise "on" avec des dates précises : "on the 5th of July". On utilise "at" avec les fêtes : "at Christmas".' }
        },
        {
          type: 'match',
          id: 'w2d3ex2',
          instruction: { en: 'Match the months with their seasons (in France)', fr: 'Associez les mois à leurs saisons (en France)' },
          pairs: [
            { left: 'December', right: 'winter' },
            { left: 'April', right: 'spring' },
            { left: 'July', right: 'summer' },
            { left: 'October', right: 'autumn' }
          ]
        },
        {
          type: 'fill',
          id: 'w2d3ex3',
          instruction: { en: 'Complete the question about birthdays', fr: 'Complétez la question sur les anniversaires' },
          template: '___ is your birthday?',
          answer: 'When',
          hint: { en: 'You are asking about the time/moment', fr: 'Vous posez une question sur le moment' }
        },
        {
          type: 'flashcard',
          id: 'w2d3ex4',
          instruction: { en: 'Click to flip each card and learn the months', fr: 'Cliquez pour retourner chaque carte et apprendre les mois' },
          cards: [
            { front: 'January', back: 'Janvier', example: { en: 'January is cold.', fr: 'Janvier est froid.' } },
            { front: 'March', back: 'Mars', example: { en: 'Spring starts in March.', fr: 'Le printemps commence en mars.' } },
            { front: 'June', back: 'Juin', example: { en: 'School ends in June.', fr: 'L\'école se termine en juin.' } },
            { front: 'August', back: 'Août', example: { en: 'August is very hot.', fr: 'Août est très chaud.' } },
            { front: 'October', back: 'Octobre', example: { en: 'Leaves fall in October.', fr: 'Les feuilles tombent en octobre.' } },
            { front: 'December', back: 'Décembre', example: { en: 'Christmas is in December.', fr: 'Noël est en décembre.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d3q1',
          question: { en: 'How many months are in a year?', fr: 'Combien de mois y a-t-il dans une année ?' },
          options: ['10', '11', '12', '13'],
          correct: 2,
          explanation: { en: 'There are 12 months in a year: January, February, March, April, May, June, July, August, September, October, November, December.', fr: 'Il y a 12 mois dans une année : January, February, March, April, May, June, July, August, September, October, November, December.' }
        },
        {
          type: 'mcq',
          id: 'w2d3q2',
          question: { en: 'What season comes after summer?', fr: 'Quelle saison vient après l\'été ?' },
          options: ['winter', 'spring', 'autumn', 'July'],
          correct: 2,
          explanation: { en: 'The seasons in order are: spring → summer → autumn (or fall) → winter → spring again. Autumn comes after summer.', fr: 'Les saisons dans l\'ordre sont : spring (printemps) → summer (été) → autumn (automne) → winter (hiver) → spring à nouveau.' }
        },
        {
          type: 'mcq',
          id: 'w2d3q3',
          question: { en: 'How do you say "Mon anniversaire est en mai" in English?', fr: 'Comment dit-on "Mon anniversaire est en mai" en anglais ?' },
          options: ['My birthday is on May.', 'My birthday is at May.', 'My birthday is in May.', 'My birthday is May.'],
          correct: 2,
          explanation: { en: '"My birthday is in May" is correct. Use "in" before months. Use "on" only for specific dates: "My birthday is on the 10th of May."', fr: '"My birthday is in May" est correct. Utilisez "in" avant les mois. Utilisez "on" seulement pour des dates précises : "My birthday is on the 10th of May."' }
        }
      ]
    },
    {
      day: 4,
      dayName: { en: 'Thursday', fr: 'Jeudi' },
      title: { en: 'The House — Rooms & Furniture', fr: 'La maison — pièces et meubles' },
      icon: '🏠',
      theory: {
        intro: {
          en: 'Today we\'re going home — in English! We learn the names of rooms in a house and important furniture. This vocabulary is perfect for describing where you live and what your home looks like.',
          fr: 'Aujourd\'hui, nous rentrons à la maison — en anglais ! Nous apprenons les noms des pièces d\'une maison et les meubles importants. Ce vocabulaire est parfait pour décrire où vous habitez et à quoi ressemble votre maison.'
        },
        grammarTitle: { en: 'Describing Your Home — "There is / There are"', fr: 'Décrire sa maison — "There is / There are"' },
        grammar: {
          en: 'To describe what is in a house, we use "there is" (il y a — for one thing) and "there are" (il y a — for multiple things). "There is a kitchen in my house." "There are three bedrooms." To ask: "Is there a garden?" (Yes, there is. / No, there isn\'t.) "Are there two bathrooms?" (Yes, there are. / No, there aren\'t.) We also use prepositions of place: "on" (sur), "in" (dans), "under" (sous), "next to" (à côté de), "between" (entre).',
          fr: 'Pour décrire ce qui se trouve dans une maison, on utilise "there is" (il y a — pour une chose) et "there are" (il y a — pour plusieurs choses). "There is a kitchen in my house." "There are three bedrooms." Pour demander : "Is there a garden?" (Yes, there is. / No, there isn\'t.) On utilise aussi des prépositions de lieu : "on" (sur), "in" (dans), "under" (sous), "next to" (à côté de).'
        },
        examples: [
          { en: 'There are three bedrooms in my house.', fr: 'Il y a trois chambres dans ma maison.', speak: 'There are three bedrooms in my house.' },
          { en: 'The sofa is in the living room.', fr: 'Le canapé est dans le salon.', speak: 'The sofa is in the living room.' },
          { en: 'Is there a garden? Yes, there is!', fr: 'Y a-t-il un jardin ? Oui, il y en a un !', speak: 'Is there a garden? Yes there is!' },
          { en: 'The book is on the table.', fr: 'Le livre est sur la table.', speak: 'The book is on the table.' },
          { en: 'My bedroom is next to the bathroom.', fr: 'Ma chambre est à côté de la salle de bain.', speak: 'My bedroom is next to the bathroom.' }
        ],
        vocabulary: [
          {
            en: 'living room',
            fr: 'salon / salle de séjour',
            pronunciation: '/ˈlɪvɪŋ ruːm/',
            example: { en: 'We watch TV in the living room.', fr: 'Nous regardons la télé dans le salon.' }
          },
          {
            en: 'bedroom',
            fr: 'chambre (à coucher)',
            pronunciation: '/ˈbɛdruːm/',
            example: { en: 'I sleep in my bedroom.', fr: 'Je dors dans ma chambre.' }
          },
          {
            en: 'kitchen',
            fr: 'cuisine',
            pronunciation: '/ˈkɪtʃɪn/',
            example: { en: 'We cook in the kitchen.', fr: 'Nous cuisinons dans la cuisine.' }
          },
          {
            en: 'bathroom',
            fr: 'salle de bain',
            pronunciation: '/ˈbɑːθruːm/',
            example: { en: 'The bathroom has a shower.', fr: 'La salle de bain a une douche.' }
          },
          {
            en: 'table',
            fr: 'table',
            pronunciation: '/ˈteɪbəl/',
            example: { en: 'The food is on the table.', fr: 'La nourriture est sur la table.' }
          },
          {
            en: 'chair',
            fr: 'chaise',
            pronunciation: '/tʃɛər/',
            example: { en: 'Please sit on the chair.', fr: 'Veuillez vous asseoir sur la chaise.' }
          },
          {
            en: 'sofa / couch',
            fr: 'canapé',
            pronunciation: '/ˈsoʊfə/ /kaʊtʃ/',
            example: { en: 'The cat is sleeping on the sofa.', fr: 'Le chat dort sur le canapé.' }
          },
          {
            en: 'bed',
            fr: 'lit',
            pronunciation: '/bɛd/',
            example: { en: 'I sleep in a big bed.', fr: 'Je dors dans un grand lit.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d4ex1',
          question: { en: 'You are talking about TWO rooms. Which is correct?', fr: 'Vous parlez de DEUX pièces. Laquelle est correcte ?' },
          options: ['There is two bedrooms.', 'There are two bedrooms.', 'There is two bedroom.', 'They are two bedrooms.'],
          correct: 1,
          explanation: { en: '"There are two bedrooms" is correct because we use "there are" for plural (more than one). "There is" is for singular (one thing): "There is one bedroom."', fr: '"There are two bedrooms" est correct car on utilise "there are" pour le pluriel (plus d\'un). "There is" est pour le singulier (une chose) : "There is one bedroom."' }
        },
        {
          type: 'match',
          id: 'w2d4ex2',
          instruction: { en: 'Match the rooms with their French translations', fr: 'Associez les pièces à leurs traductions françaises' },
          pairs: [
            { left: 'kitchen', right: 'cuisine' },
            { left: 'bedroom', right: 'chambre' },
            { left: 'bathroom', right: 'salle de bain' },
            { left: 'living room', right: 'salon' }
          ]
        },
        {
          type: 'fill',
          id: 'w2d4ex3',
          instruction: { en: 'Complete the sentence with "is" or "are"', fr: 'Complétez la phrase avec "is" ou "are"' },
          template: 'There ___ a big garden behind the house.',
          answer: 'is',
          hint: { en: 'One garden = singular → use "is"', fr: 'Un jardin = singulier → utilisez "is"' }
        },
        {
          type: 'order',
          id: 'w2d4ex4',
          instruction: { en: 'Put the words in the right order', fr: 'Remettez les mots dans le bon ordre' },
          words: ['is', 'The', 'living', 'sofa', 'the', 'in', 'room'],
          answer: 'The sofa is in the living room'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d4q1',
          question: { en: 'Where do you cook food?', fr: 'Où faites-vous cuire les aliments ?' },
          options: ['In the bedroom', 'In the bathroom', 'In the kitchen', 'In the living room'],
          correct: 2,
          explanation: { en: 'You cook food in the kitchen! The kitchen (cuisine) is where you prepare and cook meals. Other rooms: bedroom for sleeping, bathroom for washing, living room for relaxing.', fr: 'Vous faites cuire les aliments dans la cuisine ! La kitchen est l\'endroit où vous préparez et cuisinez les repas.' }
        },
        {
          type: 'mcq',
          id: 'w2d4q2',
          question: { en: 'How do you say "Il y a une table" in English?', fr: 'Comment dit-on "Il y a une table" en anglais ?' },
          options: ['It is a table.', 'There are a table.', 'There is a table.', 'This is table.'],
          correct: 2,
          explanation: { en: '"There is a table" is the correct translation of "il y a une table". Use "there is" for singular (one item) and "there are" for plural.', fr: '"There is a table" est la traduction correcte de "il y a une table". Utilisez "there is" pour le singulier et "there are" pour le pluriel.' }
        },
        {
          type: 'mcq',
          id: 'w2d4q3',
          question: { en: 'Which preposition means "sur" in English?', fr: 'Quelle préposition signifie "sur" en anglais ?' },
          options: ['under', 'in', 'on', 'next to'],
          correct: 2,
          explanation: { en: '"On" means "sur" in French. "The book is on the table" = "Le livre est sur la table." Other prepositions: "in" = dans, "under" = sous, "next to" = à côté de.', fr: '"On" signifie "sur" en français. "The book is on the table" = "Le livre est sur la table." Autres prépositions : "in" = dans, "under" = sous, "next to" = à côté de.' }
        }
      ]
    },
    {
      day: 5,
      dayName: { en: 'Friday', fr: 'Vendredi' },
      title: { en: 'Possessive Adjectives', fr: 'Les adjectifs possessifs' },
      icon: '👤',
      theory: {
        intro: {
          en: 'How do you say "mon", "ton", "son", "sa" in English? Today we discover possessive adjectives — words that show who something belongs to. They are short and simple, and you\'ll use them in almost every sentence!',
          fr: 'Comment dit-on "mon", "ton", "son", "sa" en anglais ? Aujourd\'hui, nous découvrons les adjectifs possessifs — des mots qui montrent à qui appartient quelque chose. Ils sont courts et simples, et vous les utiliserez dans presque toutes les phrases !'
        },
        grammarTitle: { en: 'Possessive Adjectives: my, your, his, her, our, their', fr: 'Adjectifs possessifs : my, your, his, her, our, their' },
        grammar: {
          en: 'Possessive adjectives in English replace the French "mon/ma/mes", "ton/ta/tes" etc. The key ones are: my (mon/ma/mes), your (ton/ta/votre), his (son/sa — for a male owner), her (son/sa — for a female owner), its (son/sa — for things/animals), our (notre/nos), their (leur/leurs). An important difference from French: English possessive adjectives do NOT change based on the gender of the object — only based on the gender of the owner. We say "his car" and "his bag" and "his sister" — it never changes based on the word "car", "bag" or "sister".',
          fr: 'Les adjectifs possessifs en anglais remplacent le français "mon/ma/mes", "ton/ta/tes" etc. Les principaux sont : my (mon/ma/mes), your (ton/ta/votre), his (son/sa — pour un propriétaire masculin), her (son/sa — pour un propriétaire féminin), our (notre/nos), their (leur/leurs). Différence importante : les adjectifs possessifs anglais ne changent PAS selon le genre de l\'objet — seulement selon le genre du propriétaire.'
        },
        examples: [
          { en: 'This is my book. What is your name?', fr: 'C\'est mon livre. Quel est votre nom ?', speak: 'This is my book. What is your name?' },
          { en: 'Paul loves his dog. (Paul = male → his)', fr: 'Paul aime son chien. (Paul = masculin → his)', speak: 'Paul loves his dog.' },
          { en: 'Marie loves her cat. (Marie = female → her)', fr: 'Marie aime son chat. (Marie = féminin → her)', speak: 'Marie loves her cat.' },
          { en: 'We live in our house.', fr: 'Nous vivons dans notre maison.', speak: 'We live in our house.' },
          { en: 'The children love their grandmother.', fr: 'Les enfants aiment leur grand-mère.', speak: 'The children love their grandmother.' }
        ],
        vocabulary: [
          {
            en: 'my',
            fr: 'mon / ma / mes',
            pronunciation: '/maɪ/',
            example: { en: 'This is my house.', fr: 'C\'est ma maison.' }
          },
          {
            en: 'your',
            fr: 'ton / ta / votre',
            pronunciation: '/jʊər/',
            example: { en: 'What is your name?', fr: 'Quel est votre nom ?' }
          },
          {
            en: 'his',
            fr: 'son / sa (pour un homme)',
            pronunciation: '/hɪz/',
            example: { en: 'His name is Tom.', fr: 'Son nom est Tom.' }
          },
          {
            en: 'her',
            fr: 'son / sa (pour une femme)',
            pronunciation: '/hɜːr/',
            example: { en: 'Her name is Anna.', fr: 'Son nom est Anna.' }
          },
          {
            en: 'its',
            fr: 'son / sa (pour une chose/animal)',
            pronunciation: '/ɪts/',
            example: { en: 'The dog wags its tail.', fr: 'Le chien remue la queue.' }
          },
          {
            en: 'our',
            fr: 'notre / nos',
            pronunciation: '/aʊər/',
            example: { en: 'Our house is big.', fr: 'Notre maison est grande.' }
          },
          {
            en: 'their',
            fr: 'leur / leurs',
            pronunciation: '/ðɛər/',
            example: { en: 'Their children are nice.', fr: 'Leurs enfants sont gentils.' }
          },
          {
            en: 'belong to',
            fr: 'appartenir à',
            pronunciation: '/bɪˈlɒŋ tuː/',
            example: { en: 'This bag belongs to me.', fr: 'Ce sac m\'appartient.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d5ex1',
          question: { en: 'Sophie loves ___ cat. (Sophie = female)', fr: 'Sophie loves ___ cat. (Sophie = féminin)' },
          options: ['his', 'my', 'her', 'their'],
          correct: 2,
          explanation: { en: 'Sophie is a woman, so we use "her": "Sophie loves her cat." We use "his" for male owners and "her" for female owners — regardless of what the object is!', fr: 'Sophie est une femme, donc on utilise "her" : "Sophie loves her cat." On utilise "his" pour les propriétaires masculins et "her" pour les propriétaires féminins — peu importe ce qu\'est l\'objet !' }
        },
        {
          type: 'fill',
          id: 'w2d5ex2',
          instruction: { en: 'Complete with the correct possessive adjective', fr: 'Complétez avec le bon adjectif possessif' },
          template: 'We love ___ parents.',
          answer: 'our',
          hint: { en: 'The owner is "we" → use "our"', fr: 'Le propriétaire est "we" (nous) → utilisez "our"' }
        },
        {
          type: 'match',
          id: 'w2d5ex3',
          instruction: { en: 'Match the subject with the correct possessive adjective', fr: 'Associez le sujet au bon adjectif possessif' },
          pairs: [
            { left: 'I', right: 'my' },
            { left: 'he', right: 'his' },
            { left: 'she', right: 'her' },
            { left: 'they', right: 'their' }
          ]
        },
        {
          type: 'order',
          id: 'w2d5ex4',
          instruction: { en: 'Put the words in the right order', fr: 'Remettez les mots dans le bon ordre' },
          words: ['name', 'His', 'Thomas', 'is', 'and', 'tall', 'he', 'is'],
          answer: 'His name is Thomas and he is tall'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d5q1',
          question: { en: 'Marc has a car. ___ car is blue.', fr: 'Marc has a car. ___ car is blue.' },
          options: ['Her', 'Their', 'My', 'His'],
          correct: 3,
          explanation: { en: 'Marc is a man, so we use "his": "His car is blue." In English, the possessive adjective reflects the OWNER\'s gender, not the object\'s gender.', fr: 'Marc est un homme, donc on utilise "his" : "His car is blue." En anglais, l\'adjectif possessif reflète le genre du PROPRIÉTAIRE, pas celui de l\'objet.' }
        },
        {
          type: 'mcq',
          id: 'w2d5q2',
          question: { en: 'Which sentence is correct?', fr: 'Quelle phrase est correcte ?' },
          options: ['This is my book\'s.', 'This is my book.', 'This is mine book.', 'This is me book.'],
          correct: 1,
          explanation: { en: '"This is my book" is correct. "My" is a possessive adjective and goes directly before the noun. Never say "mine book" — "mine" is a pronoun used alone: "This book is mine."', fr: '"This is my book" est correct. "My" est un adjectif possessif et va directement avant le nom. Ne dites jamais "mine book" — "mine" est un pronom utilisé seul : "This book is mine."' }
        },
        {
          type: 'mcq',
          id: 'w2d5q3',
          question: { en: 'The children forgot ___ homework.', fr: 'The children forgot ___ homework.' },
          options: ['his', 'her', 'their', 'our'],
          correct: 2,
          explanation: { en: '"Their" is correct because "the children" is plural (they). We use "their" for plural owners. "His" and "her" are for singular male/female owners.', fr: '"Their" est correct car "the children" (les enfants) est au pluriel (they). On utilise "their" pour les propriétaires au pluriel. "His" et "her" sont pour les propriétaires singuliers masculin/féminin.' }
        }
      ]
    },
    {
      day: 6,
      dayName: { en: 'Saturday', fr: 'Samedi' },
      title: { en: 'Articles & Plural Nouns', fr: 'Les articles et les noms au pluriel' },
      icon: '📚',
      theory: {
        intro: {
          en: 'Today we tackle two essential grammar topics: articles (a, an, the) and plural nouns. These are used in almost every sentence you will ever speak or write in English!',
          fr: 'Aujourd\'hui, nous abordons deux sujets de grammaire essentiels : les articles (a, an, the) et les noms au pluriel. Ils sont utilisés dans presque chaque phrase que vous parlerez ou écrirez en anglais !'
        },
        grammarTitle: { en: 'Articles: A, An, The — and Plural Nouns', fr: 'Articles : A, An, The — et les noms au pluriel' },
        grammar: {
          en: 'English has three articles: "a", "an", and "the". Use "a" before consonant sounds: "a book", "a cat", "a university". Use "an" before vowel sounds: "an apple", "an egg", "an hour" (note: "hour" starts with a vowel SOUND). Use "the" when you are talking about a specific thing that both the speaker and listener know: "Pass me the book" (we both know which book). To make nouns plural, usually add "-s": book → books. Add "-es" for nouns ending in -s, -sh, -ch, -x, -z: box → boxes. Some nouns are irregular: child → children, person → people, man → men, woman → women.',
          fr: 'L\'anglais a trois articles : "a", "an" et "the". Utilisez "a" devant les sons consonantiques : "a book", "a cat". Utilisez "an" devant les sons vocaliques : "an apple", "an egg". Utilisez "the" quand vous parlez d\'une chose spécifique connue des deux interlocuteurs. Pour mettre les noms au pluriel, ajoutez généralement "-s" : book → books. Ajoutez "-es" pour les noms terminant en -s, -sh, -ch, -x : box → boxes. Certains noms sont irréguliers : child → children, person → people, man → men, woman → women.'
        },
        examples: [
          { en: 'I have a dog and the dog is black.', fr: 'J\'ai un chien et le chien est noir.', speak: 'I have a dog and the dog is black.' },
          { en: 'She is eating an apple.', fr: 'Elle mange une pomme.', speak: 'She is eating an apple.' },
          { en: 'There are three children in the park.', fr: 'Il y a trois enfants dans le parc.', speak: 'There are three children in the park.' },
          { en: 'The women are talking in the kitchen.', fr: 'Les femmes parlent dans la cuisine.', speak: 'The women are talking in the kitchen.' },
          { en: 'I need an umbrella — it is raining!', fr: 'J\'ai besoin d\'un parapluie — il pleut !', speak: 'I need an umbrella it is raining!' }
        ],
        vocabulary: [
          {
            en: 'a / an',
            fr: 'un / une',
            pronunciation: '/ə/ /æn/',
            example: { en: 'A cat and an elephant.', fr: 'Un chat et un éléphant.' }
          },
          {
            en: 'the',
            fr: 'le / la / les',
            pronunciation: '/ðə/ /ðiː/',
            example: { en: 'The cat is sleeping.', fr: 'Le chat dort.' }
          },
          {
            en: 'child / children',
            fr: 'enfant / enfants',
            pronunciation: '/tʃaɪld/ /ˈtʃɪldrən/',
            example: { en: 'The children are playing.', fr: 'Les enfants jouent.' }
          },
          {
            en: 'man / men',
            fr: 'homme / hommes',
            pronunciation: '/mæn/ /mɛn/',
            example: { en: 'Two men are at the door.', fr: 'Deux hommes sont à la porte.' }
          },
          {
            en: 'woman / women',
            fr: 'femme / femmes',
            pronunciation: '/ˈwʊmən/ /ˈwɪmɪn/',
            example: { en: 'The women are in the office.', fr: 'Les femmes sont au bureau.' }
          },
          {
            en: 'person / people',
            fr: 'personne / personnes/gens',
            pronunciation: '/ˈpɜːrsən/ /ˈpiːpəl/',
            example: { en: 'There are many people here.', fr: 'Il y a beaucoup de gens ici.' }
          },
          {
            en: 'box / boxes',
            fr: 'boîte / boîtes',
            pronunciation: '/bɒks/ /ˈbɒksɪz/',
            example: { en: 'I have three boxes.', fr: 'J\'ai trois boîtes.' }
          },
          {
            en: 'book / books',
            fr: 'livre / livres',
            pronunciation: '/bʊk/ /bʊks/',
            example: { en: 'She has many books.', fr: 'Elle a beaucoup de livres.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d6ex1',
          question: { en: 'Which article is correct? "___ apple a day keeps the doctor away."', fr: 'Quel article est correct ? "___ apple a day keeps the doctor away."' },
          options: ['A', 'An', 'The', 'No article'],
          correct: 1,
          explanation: { en: '"An apple" is correct because "apple" starts with a vowel sound /æ/. Use "an" before words starting with vowel sounds: an apple, an egg, an hour, an umbrella.', fr: '"An apple" est correct car "apple" commence par un son vocalique /æ/. Utilisez "an" avant les mots commençant par des sons vocaliques : an apple, an egg, an hour, an umbrella.' }
        },
        {
          type: 'fill',
          id: 'w2d6ex2',
          instruction: { en: 'Write the plural of "child"', fr: 'Écrivez le pluriel de "child"' },
          template: 'There are many ___ in the park.',
          answer: 'children',
          hint: { en: 'This is an irregular plural — not "childs"!', fr: 'C\'est un pluriel irrégulier — pas "childs" !' }
        },
        {
          type: 'match',
          id: 'w2d6ex3',
          instruction: { en: 'Match each noun with its correct plural form', fr: 'Associez chaque nom à sa forme plurielle correcte' },
          pairs: [
            { left: 'man', right: 'men' },
            { left: 'woman', right: 'women' },
            { left: 'box', right: 'boxes' },
            { left: 'person', right: 'people' }
          ]
        },
        {
          type: 'order',
          id: 'w2d6ex4',
          instruction: { en: 'Put the words in the right order', fr: 'Remettez les mots dans le bon ordre' },
          words: ['dog', 'black', 'a', 'I', 'and', 'cat', 'have', 'a', 'white'],
          answer: 'I have a black dog and a white cat'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d6q1',
          question: { en: 'When do you use "the"?', fr: 'Quand utilise-t-on "the" ?' },
          options: ['Before all nouns', 'When talking about something specific that both people know', 'Before plural nouns only', 'Before vowel sounds only'],
          correct: 1,
          explanation: { en: '"The" is used when referring to a specific thing that both the speaker and listener know about. "I saw a dog. The dog was huge!" — first mention = "a dog", second mention = "the dog" (now we both know which dog).', fr: '"The" s\'utilise pour désigner une chose spécifique que les deux interlocuteurs connaissent. "I saw a dog. The dog was huge!" — première mention = "a dog", deuxième mention = "the dog".' }
        },
        {
          type: 'mcq',
          id: 'w2d6q2',
          question: { en: 'What is the plural of "woman"?', fr: 'Quel est le pluriel de "woman" ?' },
          options: ['womans', 'womens', 'weman', 'women'],
          correct: 3,
          explanation: { en: '"Women" is the irregular plural of "woman". Similarly: man → men, child → children, person → people. These are common words with irregular plurals that you must memorize!', fr: '"Women" est le pluriel irrégulier de "woman". De même : man → men, child → children, person → people. Ce sont des mots courants aux pluriels irréguliers qu\'il faut mémoriser !' }
        },
        {
          type: 'mcq',
          id: 'w2d6q3',
          question: { en: 'Choose the correct article: "She is ___ engineer."', fr: 'Choisissez le bon article : "She is ___ engineer."' },
          options: ['a', 'an', 'the', 'no article needed'],
          correct: 1,
          explanation: { en: '"An engineer" is correct. Although "engineer" starts with the letter E (a vowel), the key rule is the SOUND. "Engineer" starts with the vowel sound /ɛ/, so we use "an".', fr: '"An engineer" est correct. Bien que "engineer" commence par la lettre E (une voyelle), la règle clé est le SON. "Engineer" commence par le son vocalique /ɛ/, donc on utilise "an".' }
        }
      ]
    }
  ],
  sunday: {
    title: { en: 'Week 2 Review', fr: 'Révision — Semaine 2' },
    summary: {
      en: 'This week you explored family vocabulary and the verb "to have", learned all the days of the week and months of the year, talked about seasons and birthdays, discovered the rooms and furniture in a house, mastered possessive adjectives (my, your, his, her...), and learned to use articles (a, an, the) and irregular plural nouns. You can now talk about your family, your home, and important dates in English!',
      fr: 'Cette semaine, vous avez exploré le vocabulaire de la famille et le verbe "to have", appris tous les jours de la semaine et les mois de l\'année, parlé des saisons et des anniversaires, découvert les pièces et les meubles d\'une maison, maîtrisé les adjectifs possessifs (my, your, his, her...) et appris à utiliser les articles (a, an, the) et les pluriels irréguliers. Vous pouvez maintenant parler de votre famille, de votre maison et des dates importantes en anglais !'
    },
    vocabulary: [
      { en: 'mother / father', fr: 'mère / père', pronunciation: '/ˈmʌðər/ /ˈfɑːðər/' },
      { en: 'brother / sister', fr: 'frère / sœur', pronunciation: '/ˈbrʌðər/ /ˈsɪstər/' },
      { en: 'Monday / Friday', fr: 'lundi / vendredi', pronunciation: '/ˈmʌndeɪ/ /ˈfraɪdeɪ/' },
      { en: 'January / July', fr: 'janvier / juillet', pronunciation: '/ˈdʒænjueri/ /dʒuˈlaɪ/' },
      { en: 'summer / winter', fr: 'été / hiver', pronunciation: '/ˈsʌmər/ /ˈwɪntər/' },
      { en: 'bedroom / kitchen', fr: 'chambre / cuisine', pronunciation: '/ˈbɛdruːm/ /ˈkɪtʃɪn/' },
      { en: 'my / his / her', fr: 'mon / son (masc.) / son (fém.)', pronunciation: '/maɪ/ /hɪz/ /hɜːr/' },
      { en: 'a / an / the', fr: 'un(e) / un(e) / le/la/les', pronunciation: '/ə/ /æn/ /ðə/' },
      { en: 'children', fr: 'enfants', pronunciation: '/ˈtʃɪldrən/' },
      { en: 'there is / there are', fr: 'il y a', pronunciation: '/ðɛr ɪz/ /ðɛr ɑːr/' }
    ],
    grammarPoints: [
      {
        title: { en: 'Verb "To Have" — have vs. has', fr: 'Le verbe "avoir" — have vs. has' },
        rule: { en: 'Use "have" with I, you, we, they. Use "has" with he, she, it. Never say "she have" or "he have"!', fr: 'Utilisez "have" avec I, you, we, they. Utilisez "has" avec he, she, it. Ne dites jamais "she have" ou "he have" !' },
        example: { en: 'I have two sisters. She has a big house.', fr: 'J\'ai deux sœurs. Elle a une grande maison.' }
      },
      {
        title: { en: 'Possessive Adjectives', fr: 'Adjectifs possessifs' },
        rule: { en: 'The possessive adjective changes based on the OWNER\'s gender, not the object\'s. His = for male owner. Her = for female owner. Their = for plural owners.', fr: 'L\'adjectif possessif change selon le genre du PROPRIÉTAIRE, pas de l\'objet. His = propriétaire masculin. Her = propriétaire féminin. Their = propriétaires pluriels.' },
        example: { en: 'Tom loves his car. Anna loves her car. They love their car.', fr: 'Tom aime sa voiture. Anna aime sa voiture. Ils aiment leur voiture.' }
      },
      {
        title: { en: 'Articles: A vs. An', fr: 'Articles : A vs. An' },
        rule: { en: 'Use "a" before consonant SOUNDS and "an" before vowel SOUNDS. The rule is about the sound, not the spelling! "An hour" (h is silent), "a university" (sounds like "you").', fr: 'Utilisez "a" devant les SONS consonantiques et "an" devant les SONS vocaliques. La règle concerne le son, pas l\'orthographe ! "An hour" (le h est muet), "a university" (sonne comme "you").' },
        example: { en: 'I have a cat, an apple, and an umbrella.', fr: 'J\'ai un chat, une pomme et un parapluie.' }
      }
    ],
    conversationTopics: [
      {
        title: { en: 'Talking About Your Family', fr: 'Parler de votre famille' },
        prompts: [
          { en: 'Do you have any brothers or sisters?', fr: 'Avez-vous des frères ou des sœurs ?' },
          { en: 'I have one brother. His name is Lucas and he is 20 years old.', fr: 'J\'ai un frère. Il s\'appelle Lucas et il a 20 ans.' },
          { en: 'My mother is a teacher and my father is a doctor.', fr: 'Ma mère est professeure et mon père est médecin.' },
          { en: 'When is your grandmother\'s birthday?', fr: 'Quand est l\'anniversaire de votre grand-mère ?' }
        ]
      },
      {
        title: { en: 'Describing Your Home', fr: 'Décrire votre maison' },
        prompts: [
          { en: 'There are four rooms in my apartment.', fr: 'Il y a quatre pièces dans mon appartement.' },
          { en: 'My bedroom is small but comfortable.', fr: 'Ma chambre est petite mais confortable.' },
          { en: 'Is there a garden? Yes, there is a small garden.', fr: 'Y a-t-il un jardin ? Oui, il y a un petit jardin.' },
          { en: 'The sofa is in the living room, next to the window.', fr: 'Le canapé est dans le salon, à côté de la fenêtre.' }
        ]
      },
      {
        title: { en: 'Talking About Dates', fr: 'Parler des dates' },
        prompts: [
          { en: 'What day is it today? Today is Thursday.', fr: 'Quel jour sommes-nous ? Aujourd\'hui c\'est jeudi.' },
          { en: 'When is your birthday? My birthday is in October.', fr: 'Quand est votre anniversaire ? Mon anniversaire est en octobre.' },
          { en: 'I have an English class on Monday and Wednesday.', fr: 'J\'ai un cours d\'anglais le lundi et le mercredi.' },
          { en: 'Summer is my favourite season!', fr: 'L\'été est ma saison préférée !' }
        ]
      }
    ]
  }
};
