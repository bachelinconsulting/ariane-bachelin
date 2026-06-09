const LESSONS_BEGINNER_WEEK4 = {
  week: 4,
  level: 'beginner',
  theme: { en: 'Getting Around & Shopping', fr: 'Se déplacer et faire des courses' },
  days: [
    {
      day: 1,
      dayName: { en: 'Monday', fr: 'Lundi' },
      title: { en: 'Places in Town', fr: 'Les lieux en ville' },
      icon: '🏙️',
      theory: {
        intro: {
          en: 'Welcome to our final week! This week we\'ll explore the city in English — from shops and services to transport and shopping. Today we start with the essential places you\'ll find in any town or city.',
          fr: 'Bienvenue dans notre dernière semaine ! Cette semaine, nous allons explorer la ville en anglais — des magasins et services aux transports et aux achats. Aujourd\'hui, nous commençons avec les lieux essentiels que vous trouverez dans n\'importe quelle ville.'
        },
        grammarTitle: { en: 'Places in Town & Prepositions of Location', fr: 'Les lieux en ville et les prépositions de lieu' },
        grammar: {
          en: 'When talking about places in town, we use "at" or "in" before the location. Use "at" for a specific address or landmark: "at the bank", "at the station", "at school". Use "in" for areas or cities: "in Paris", "in the city centre". When asking where something is, use "Where is...?" or "Is there a... near here?" Answer: "It\'s on [street name]", "It\'s next to the [place]", "It\'s between [A] and [B]", "It\'s opposite the [place]". You can also use "There is a [place] + location": "There is a supermarket on the main street."',
          fr: 'Quand on parle des lieux en ville, on utilise "at" ou "in" avant la localisation. Utilisez "at" pour une adresse ou un lieu spécifique : "at the bank", "at the station". Utilisez "in" pour des zones ou des villes : "in Paris", "in the city centre". Pour demander où quelque chose se trouve : "Where is...?" ou "Is there a... near here?" Réponse : "It\'s on [rue]", "It\'s next to the [lieu]".'
        },
        examples: [
          { en: 'Is there a bank near here?', fr: 'Y a-t-il une banque près d\'ici ?', speak: 'Is there a bank near here?' },
          { en: 'The supermarket is on the main street.', fr: 'Le supermarché est sur la rue principale.', speak: 'The supermarket is on the main street.' },
          { en: 'The school is next to the post office.', fr: 'L\'école est à côté de la poste.', speak: 'The school is next to the post office.' },
          { en: 'The hospital is opposite the park.', fr: 'L\'hôpital est en face du parc.', speak: 'The hospital is opposite the park.' },
          { en: 'Where is the nearest restaurant?', fr: 'Où est le restaurant le plus proche ?', speak: 'Where is the nearest restaurant?' }
        ],
        vocabulary: [
          {
            en: 'supermarket',
            fr: 'supermarché',
            pronunciation: '/ˈsuːpərˌmɑːrkɪt/',
            example: { en: 'I buy food at the supermarket.', fr: 'J\'achète de la nourriture au supermarché.' }
          },
          {
            en: 'bank',
            fr: 'banque',
            pronunciation: '/bæŋk/',
            example: { en: 'I need to go to the bank.', fr: 'J\'ai besoin d\'aller à la banque.' }
          },
          {
            en: 'hospital',
            fr: 'hôpital',
            pronunciation: '/ˈhɒspɪtəl/',
            example: { en: 'The hospital is open 24 hours.', fr: 'L\'hôpital est ouvert 24 heures sur 24.' }
          },
          {
            en: 'school',
            fr: 'école',
            pronunciation: '/skuːl/',
            example: { en: 'My children go to school at 8am.', fr: 'Mes enfants vont à l\'école à 8h.' }
          },
          {
            en: 'restaurant',
            fr: 'restaurant',
            pronunciation: '/ˈrɛstərɒnt/',
            example: { en: 'Let\'s have dinner at the restaurant!', fr: 'Allons dîner au restaurant !' }
          },
          {
            en: 'post office',
            fr: 'bureau de poste / La Poste',
            pronunciation: '/poʊst ˈɒfɪs/',
            example: { en: 'I send letters from the post office.', fr: 'J\'envoie des lettres depuis la poste.' }
          },
          {
            en: 'pharmacy',
            fr: 'pharmacie',
            pronunciation: '/ˈfɑːrməsi/',
            example: { en: 'I need to go to the pharmacy.', fr: 'J\'ai besoin d\'aller à la pharmacie.' }
          },
          {
            en: 'train station',
            fr: 'gare',
            pronunciation: '/treɪn ˈsteɪʃən/',
            example: { en: 'The train station is in the city centre.', fr: 'La gare est au centre-ville.' }
          }
        ]
      },
      exercises: [
        {
          type: 'match',
          id: 'w4d1ex1',
          instruction: { en: 'Match the places with their French translations', fr: 'Associez les lieux à leurs traductions françaises' },
          pairs: [
            { left: 'supermarket', right: 'supermarché' },
            { left: 'hospital', right: 'hôpital' },
            { left: 'post office', right: 'bureau de poste' },
            { left: 'pharmacy', right: 'pharmacie' }
          ]
        },
        {
          type: 'mcq',
          id: 'w4d1ex2',
          question: { en: 'Which preposition is used with a specific place? "I am ___ the bank."', fr: 'Quelle préposition s\'utilise avec un lieu spécifique ? "I am ___ the bank."' },
          options: ['in', 'on', 'at', 'by'],
          correct: 2,
          explanation: { en: 'We use "at" for specific places: "I am at the bank", "at the station", "at school", "at the restaurant". Use "in" for cities and areas: "in Paris", "in the city centre".', fr: 'On utilise "at" pour des lieux spécifiques : "I am at the bank", "at the station", "at school". Utilisez "in" pour les villes et zones : "in Paris", "in the city centre".' }
        },
        {
          type: 'fill',
          id: 'w4d1ex3',
          instruction: { en: 'Complete the question to ask about a nearby place', fr: 'Complétez la question pour demander un lieu à proximité' },
          template: 'Is there a supermarket ___ here?',
          answer: 'near',
          hint: { en: 'You want to know if it is close to you', fr: 'Vous voulez savoir si c\'est proche de vous' }
        },
        {
          type: 'order',
          id: 'w4d1ex4',
          instruction: { en: 'Put the words in the right order to describe a location', fr: 'Remettez les mots dans le bon ordre pour décrire un emplacement' },
          words: ['is', 'The', 'next', 'pharmacy', 'the', 'to', 'hospital'],
          answer: 'The pharmacy is next to the hospital'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d1q1',
          question: { en: 'Where do you go when you are sick?', fr: 'Où allez-vous quand vous êtes malade ?' },
          options: ['supermarket', 'post office', 'hospital', 'school'],
          correct: 2,
          explanation: { en: 'You go to the hospital when you are sick. You can also go to the pharmacy (pharmacie) for medicines. The doctor\'s surgery (cabinet médical) is another option for less serious illnesses.', fr: 'Vous allez à l\'hôpital quand vous êtes malade. Vous pouvez aussi aller à la pharmacie pour les médicaments. Le cabinet médical est une autre option pour les maladies moins graves.' }
        },
        {
          type: 'mcq',
          id: 'w4d1q2',
          question: { en: 'How do you ask if there is a bank close by?', fr: 'Comment demandez-vous s\'il y a une banque à proximité ?' },
          options: ['Is there a bank near here?', 'There is a bank?', 'Where bank near here?', 'Has there a bank here?'],
          correct: 0,
          explanation: { en: '"Is there a bank near here?" is correct. Structure: Is there + a/an + [place] + near here? You can also ask "Where is the nearest bank?" (Où est la banque la plus proche ?)', fr: '"Is there a bank near here?" est correct. Structure : Is there + a/an + [lieu] + near here? Vous pouvez aussi demander "Where is the nearest bank?" (Où est la banque la plus proche ?)' }
        },
        {
          type: 'mcq',
          id: 'w4d1q3',
          question: { en: 'What does "opposite" mean?', fr: 'Que signifie "opposite" ?' },
          options: ['à côté de', 'entre', 'en face de', 'derrière'],
          correct: 2,
          explanation: { en: '"Opposite" means "en face de" (facing). "The bank is opposite the school" = the bank and school face each other. Other useful prepositions: next to (à côté de), between (entre), behind (derrière), in front of (devant).', fr: '"Opposite" signifie "en face de". "The bank is opposite the school" = la banque et l\'école se font face. Autres prépositions utiles : next to (à côté de), between (entre), behind (derrière), in front of (devant).' }
        }
      ]
    },
    {
      day: 2,
      dayName: { en: 'Tuesday', fr: 'Mardi' },
      title: { en: 'Asking for Directions', fr: 'Demander son chemin' },
      icon: '🗺️',
      theory: {
        intro: {
          en: 'Knowing how to ask for and understand directions is an essential skill when you\'re in an English-speaking country. Today we learn the key phrases for asking directions and the words used to describe routes.',
          fr: 'Savoir demander et comprendre les indications est une compétence essentielle quand vous êtes dans un pays anglophone. Aujourd\'hui, nous apprenons les phrases clés pour demander son chemin et les mots utilisés pour décrire les itinéraires.'
        },
        grammarTitle: { en: 'Asking & Giving Directions', fr: 'Demander et donner des indications' },
        grammar: {
          en: 'To ask for directions, use these polite phrases: "Excuse me, how do I get to [place]?" or "Excuse me, can you tell me the way to [place]?" To give directions, use the imperative form (the base verb without a subject): "Turn left" (tournez à gauche), "Turn right" (tournez à droite), "Go straight ahead" (allez tout droit), "Take the first/second street on the left/right" (prenez la première/deuxième rue à gauche/droite), "Cross the road/bridge" (traversez la route/le pont), "It\'s on your left/right" (c\'est sur votre gauche/droite). Distance: "It\'s about 200 metres away", "It\'s a 5-minute walk".',
          fr: 'Pour demander son chemin, utilisez ces phrases polies : "Excuse me, how do I get to [lieu]?" ou "Can you tell me the way to [lieu]?" Pour donner des indications, utilisez l\'impératif : "Turn left" (tournez à gauche), "Turn right" (tournez à droite), "Go straight ahead" (allez tout droit). Distance : "It\'s about 200 metres away", "It\'s a 5-minute walk".'
        },
        examples: [
          { en: 'Excuse me, how do I get to the train station?', fr: 'Excusez-moi, comment aller à la gare ?', speak: 'Excuse me how do I get to the train station?' },
          { en: 'Go straight ahead for 200 metres.', fr: 'Allez tout droit pendant 200 mètres.', speak: 'Go straight ahead for 200 metres.' },
          { en: 'Turn left at the traffic lights.', fr: 'Tournez à gauche aux feux.', speak: 'Turn left at the traffic lights.' },
          { en: 'Take the second street on the right.', fr: 'Prenez la deuxième rue à droite.', speak: 'Take the second street on the right.' },
          { en: 'It\'s next to the supermarket. You can\'t miss it!', fr: 'C\'est à côté du supermarché. Vous ne pouvez pas le manquer !', speak: 'It\'s next to the supermarket. You can\'t miss it!' }
        ],
        vocabulary: [
          {
            en: 'turn left',
            fr: 'tournez à gauche',
            pronunciation: '/tɜːrn lɛft/',
            example: { en: 'Turn left at the corner.', fr: 'Tournez à gauche au coin.' }
          },
          {
            en: 'turn right',
            fr: 'tournez à droite',
            pronunciation: '/tɜːrn raɪt/',
            example: { en: 'Turn right after the bank.', fr: 'Tournez à droite après la banque.' }
          },
          {
            en: 'go straight ahead',
            fr: 'allez tout droit',
            pronunciation: '/ɡoʊ streɪt əˈhɛd/',
            example: { en: 'Go straight ahead for one kilometre.', fr: 'Allez tout droit pendant un kilomètre.' }
          },
          {
            en: 'it\'s on the left / right',
            fr: 'c\'est sur la gauche / droite',
            pronunciation: '/ɪts ɒn ðə lɛft/ /raɪt/',
            example: { en: 'The bakery is on the left.', fr: 'La boulangerie est sur la gauche.' }
          },
          {
            en: 'traffic lights',
            fr: 'feux de circulation',
            pronunciation: '/ˈtræfɪk laɪts/',
            example: { en: 'Stop at the traffic lights.', fr: 'Arrêtez-vous aux feux de circulation.' }
          },
          {
            en: 'crossroads / junction',
            fr: 'carrefour',
            pronunciation: '/ˈkrɒsroʊdz/ /ˈdʒʌŋkʃən/',
            example: { en: 'Turn right at the crossroads.', fr: 'Tournez à droite au carrefour.' }
          },
          {
            en: 'it\'s about... away',
            fr: 'c\'est à environ...',
            pronunciation: '/ɪts əˈbaʊt ... əˈweɪ/',
            example: { en: 'It\'s about 500 metres away.', fr: 'C\'est à environ 500 mètres.' }
          },
          {
            en: 'you can\'t miss it',
            fr: 'vous ne pouvez pas le manquer',
            pronunciation: '/juː kɑːnt mɪs ɪt/',
            example: { en: 'It\'s a big red building — you can\'t miss it!', fr: 'C\'est un grand bâtiment rouge — vous ne pouvez pas le manquer !' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w4d2ex1',
          question: { en: 'How do you politely ask for directions?', fr: 'Comment demandez-vous poliment son chemin ?' },
          options: ['Where is the station?', 'Excuse me, how do I get to the station?', 'Tell me where station is!', 'Station? Where?'],
          correct: 1,
          explanation: { en: '"Excuse me, how do I get to the station?" is the polite and natural way to ask for directions. Always start with "Excuse me" to be polite. You can also say "Can you tell me the way to the station?"', fr: '"Excuse me, how do I get to the station?" est la façon polie et naturelle de demander son chemin. Commencez toujours par "Excuse me" pour être poli. Vous pouvez aussi dire "Can you tell me the way to the station?"' }
        },
        {
          type: 'match',
          id: 'w4d2ex2',
          instruction: { en: 'Match the English directions with their French translations', fr: 'Associez les indications anglaises à leurs traductions françaises' },
          pairs: [
            { left: 'Turn left', right: 'Tournez à gauche' },
            { left: 'Go straight ahead', right: 'Allez tout droit' },
            { left: 'Turn right', right: 'Tournez à droite' },
            { left: 'It\'s on your left', right: 'C\'est sur votre gauche' }
          ]
        },
        {
          type: 'fill',
          id: 'w4d2ex3',
          instruction: { en: 'Complete the direction instruction', fr: 'Complétez l\'instruction d\'itinéraire' },
          template: 'Go ___ ahead, then turn right.',
          answer: 'straight',
          hint: { en: 'This means going directly forward without turning', fr: 'Cela signifie aller directement en avant sans tourner' }
        },
        {
          type: 'order',
          id: 'w4d2ex4',
          instruction: { en: 'Put the direction instructions in the correct order', fr: 'Mettez les instructions d\'itinéraire dans le bon ordre' },
          words: ['the', 'at', 'right', 'ahead,', 'lights', 'turn', 'traffic', 'Go', 'straight', 'then'],
          answer: 'Go straight ahead then turn right at the traffic lights'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d2q1',
          question: { en: 'What does "turn right" mean in French?', fr: 'Que signifie "turn right" en français ?' },
          options: ['allez tout droit', 'tournez à gauche', 'revenez en arrière', 'tournez à droite'],
          correct: 3,
          explanation: { en: '"Turn right" = tournez à droite. "Turn left" = tournez à gauche. A helpful tip: in English, the "R" in "Right" and the "D" in "Droit" (straight) can be confusing — remember Right = à droite, Straight = tout droit.', fr: '"Turn right" = tournez à droite. "Turn left" = tournez à gauche. Astuce : rappelez-vous Right = à droite, Straight (ahead) = tout droit.' }
        },
        {
          type: 'mcq',
          id: 'w4d2q2',
          question: { en: 'Someone says "Take the second street on the left." What do you do?', fr: 'Quelqu\'un dit "Take the second street on the left." Que faites-vous ?' },
          options: ['Turn left at the first street', 'Turn left at the second street', 'Turn right at the second street', 'Go straight for two streets'],
          correct: 1,
          explanation: { en: '"Take the second street on the left" means you count two streets and turn left at the second one. "First" = première, "second" = deuxième. So you pass the first street and turn left at the second.', fr: '"Take the second street on the left" signifie que vous comptez deux rues et tournez à gauche à la deuxième. "First" = première, "second" = deuxième. Donc vous passez la première rue et tournez à gauche à la deuxième.' }
        },
        {
          type: 'mcq',
          id: 'w4d2q3',
          question: { en: 'How do you say "C\'est à 5 minutes à pied" in English?', fr: 'Comment dit-on "C\'est à 5 minutes à pied" en anglais ?' },
          options: ['It\'s 5 minutes on foot.', 'It\'s a 5-minute walk.', 'It\'s walking 5 minutes.', 'It is 5 minutes foot.'],
          correct: 1,
          explanation: { en: '"It\'s a 5-minute walk" is the natural English expression. Note the hyphen in "5-minute" — it becomes a compound adjective. You can also say "It\'s 5 minutes on foot" or "It\'s 5 minutes away on foot."', fr: '"It\'s a 5-minute walk" est l\'expression anglaise naturelle. Notez le trait d\'union dans "5-minute" — cela devient un adjectif composé. Vous pouvez aussi dire "It\'s 5 minutes on foot".' }
        }
      ]
    },
    {
      day: 3,
      dayName: { en: 'Wednesday', fr: 'Mercredi' },
      title: { en: 'Transport', fr: 'Les transports' },
      icon: '🚌',
      theory: {
        intro: {
          en: 'How do you get around? Today we learn the different ways to travel in a city or country, and the key vocabulary for public transport and private transport. This vocabulary is essential when visiting or living in an English-speaking country.',
          fr: 'Comment vous déplacez-vous ? Aujourd\'hui, nous apprenons les différentes façons de se déplacer dans une ville ou un pays, et le vocabulaire clé pour les transports en commun et les transports privés. Ce vocabulaire est essentiel lors de la visite ou du séjour dans un pays anglophone.'
        },
        grammarTitle: { en: 'Transport Vocabulary — "by" + transport', fr: 'Vocabulaire des transports — "by" + transport' },
        grammar: {
          en: 'To say how you travel, use "by" + transport: "by bus" (en bus), "by train" (en train), "by car" (en voiture), "by taxi" (en taxi), "by metro/subway" (en métro), "by bike/bicycle" (à vélo), "by plane" (en avion). Exception: "on foot" (à pied) — NOT "by foot". Also: "I take the bus" (je prends le bus), "I drive a car" (je conduis une voiture), "I ride a bike" (je fais du vélo). To ask how someone travels: "How do you get to work?" or "How do you travel?" Answer: "I go by bus" or "I take the metro."',
          fr: 'Pour dire comment vous voyagez, utilisez "by" + transport : "by bus" (en bus), "by train" (en train), "by car" (en voiture), "by taxi" (en taxi). Exception : "on foot" (à pied) — PAS "by foot". Aussi : "I take the bus" (je prends le bus), "I drive a car" (je conduis), "I ride a bike" (je fais du vélo). Pour demander : "How do you get to work?"'
        },
        examples: [
          { en: 'How do you get to work?', fr: 'Comment allez-vous au travail ?', speak: 'How do you get to work?' },
          { en: 'I go to work by bus every day.', fr: 'Je vais au travail en bus tous les jours.', speak: 'I go to work by bus every day.' },
          { en: 'She takes the train to London.', fr: 'Elle prend le train pour Londres.', speak: 'She takes the train to London.' },
          { en: 'I walk to school — it\'s very close!', fr: 'Je vais à l\'école à pied — c\'est très proche !', speak: 'I walk to school it\'s very close!' },
          { en: 'Can I take a taxi to the airport?', fr: 'Puis-je prendre un taxi pour l\'aéroport ?', speak: 'Can I take a taxi to the airport?' }
        ],
        vocabulary: [
          {
            en: 'bus',
            fr: 'bus',
            pronunciation: '/bʌs/',
            example: { en: 'I take the bus to work.', fr: 'Je prends le bus pour aller au travail.' }
          },
          {
            en: 'train',
            fr: 'train',
            pronunciation: '/treɪn/',
            example: { en: 'The train to Paris leaves at 8am.', fr: 'Le train pour Paris part à 8h.' }
          },
          {
            en: 'taxi',
            fr: 'taxi',
            pronunciation: '/ˈtæksi/',
            example: { en: 'I take a taxi when I\'m late.', fr: 'Je prends un taxi quand je suis en retard.' }
          },
          {
            en: 'metro / subway',
            fr: 'métro',
            pronunciation: '/ˈmɛtroʊ/ /ˈsʌbweɪ/',
            example: { en: 'The metro is fast in Paris.', fr: 'Le métro est rapide à Paris.' }
          },
          {
            en: 'bike / bicycle',
            fr: 'vélo',
            pronunciation: '/baɪk/ /ˈbaɪsɪkəl/',
            example: { en: 'I ride my bike to the park.', fr: 'Je fais du vélo jusqu\'au parc.' }
          },
          {
            en: 'car',
            fr: 'voiture',
            pronunciation: '/kɑːr/',
            example: { en: 'My father drives a red car.', fr: 'Mon père conduit une voiture rouge.' }
          },
          {
            en: 'on foot',
            fr: 'à pied',
            pronunciation: '/ɒn fʊt/',
            example: { en: 'I go to school on foot.', fr: 'Je vais à l\'école à pied.' }
          },
          {
            en: 'ticket',
            fr: 'billet / ticket',
            pronunciation: '/ˈtɪkɪt/',
            example: { en: 'I need to buy a ticket.', fr: 'J\'ai besoin d\'acheter un billet.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w4d3ex1',
          question: { en: 'How do you say "Je vais au travail à pied" in English?', fr: 'Comment dit-on "Je vais au travail à pied" en anglais ?' },
          options: ['I go to work by foot.', 'I go to work on foot.', 'I go to work with foot.', 'I go to work foot.'],
          correct: 1,
          explanation: { en: '"On foot" is the correct expression for à pied. Remember: we say "on foot", NOT "by foot". This is an exception to the "by + transport" rule. All other transports use "by": by bus, by train, by car.', fr: '"On foot" est l\'expression correcte pour "à pied". Rappel : on dit "on foot", PAS "by foot". C\'est une exception à la règle "by + transport". Tous les autres transports utilisent "by" : by bus, by train, by car.' }
        },
        {
          type: 'match',
          id: 'w4d3ex2',
          instruction: { en: 'Match the transport with the correct verb to use with it', fr: 'Associez le transport au bon verbe à utiliser avec lui' },
          pairs: [
            { left: 'bus / train / taxi', right: 'take' },
            { left: 'car', right: 'drive' },
            { left: 'bike', right: 'ride' },
            { left: 'walking', right: 'walk / go on foot' }
          ]
        },
        {
          type: 'fill',
          id: 'w4d3ex3',
          instruction: { en: 'Complete the sentence with the correct preposition', fr: 'Complétez la phrase avec la bonne préposition' },
          template: 'I go to school ___ bus every morning.',
          answer: 'by',
          hint: { en: 'Use this preposition before all transport names (except "on foot")', fr: 'Utilisez cette préposition avant tous les noms de transport (sauf "on foot")' }
        },
        {
          type: 'flashcard',
          id: 'w4d3ex4',
          instruction: { en: 'Click to flip each card and learn transport vocabulary', fr: 'Cliquez pour retourner chaque carte et apprendre le vocabulaire des transports' },
          cards: [
            { front: 'by bus', back: 'en bus', example: { en: 'I go to work by bus.', fr: 'Je vais au travail en bus.' } },
            { front: 'by train', back: 'en train', example: { en: 'She travels by train.', fr: 'Elle voyage en train.' } },
            { front: 'by car', back: 'en voiture', example: { en: 'He goes by car.', fr: 'Il y va en voiture.' } },
            { front: 'by bike', back: 'à vélo', example: { en: 'I love going by bike.', fr: 'J\'adore aller à vélo.' } },
            { front: 'on foot', back: 'à pied', example: { en: 'We walk to school on foot.', fr: 'Nous allons à l\'école à pied.' } },
            { front: 'by metro', back: 'en métro', example: { en: 'The metro is fast!', fr: 'Le métro est rapide !' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d3q1',
          question: { en: 'Which sentence is correct?', fr: 'Quelle phrase est correcte ?' },
          options: ['She goes by the bus.', 'She goes by bus.', 'She goes on bus.', 'She goes in bus.'],
          correct: 1,
          explanation: { en: '"She goes by bus" is correct. When using "by" + transport, do NOT use "the" after "by": by bus (not by the bus), by train (not by the train), by car (not by the car).', fr: '"She goes by bus" est correct. Quand on utilise "by" + transport, n\'utilisez PAS "the" après "by" : by bus (pas "by the bus"), by train (pas "by the train").' }
        },
        {
          type: 'mcq',
          id: 'w4d3q2',
          question: { en: 'How do you ask someone how they travel to work?', fr: 'Comment demandez-vous à quelqu\'un comment il/elle va au travail ?' },
          options: ['What transport you use?', 'How do you get to work?', 'By what do you go to work?', 'What do you go to work?'],
          correct: 1,
          explanation: { en: '"How do you get to work?" is the natural question. "Get to" means "arriver à / aller à". You can also ask "How do you travel to work?" or "What transport do you use?"', fr: '"How do you get to work?" est la question naturelle. "Get to" signifie "arriver à / aller à". Vous pouvez aussi demander "How do you travel to work?" ou "What transport do you use?"' }
        },
        {
          type: 'mcq',
          id: 'w4d3q3',
          question: { en: 'Which verb do you use with "bike"?', fr: 'Quel verbe utilisez-vous avec "bike" ?' },
          options: ['take', 'drive', 'ride', 'walk'],
          correct: 2,
          explanation: { en: 'We "ride" a bike: "I ride my bike to school." We also "ride" a horse. We "drive" a car. We "take" public transport (bus, train, taxi, metro). We "walk" or "go on foot".', fr: 'On "ride" (faire) un vélo : "I ride my bike to school." On "ride" aussi un cheval. On "drive" (conduire) une voiture. On "take" (prendre) les transports en commun (bus, train, taxi, métro).' }
        }
      ]
    },
    {
      day: 4,
      dayName: { en: 'Thursday', fr: 'Jeudi' },
      title: { en: 'Shopping', fr: 'Les achats' },
      icon: '🛍️',
      theory: {
        intro: {
          en: 'Shopping in English! Today we learn all the vocabulary and phrases you need to buy things in a shop. From asking for a price to saying whether you\'ll buy something — you\'ll be ready to shop anywhere in the English-speaking world!',
          fr: 'Faire des courses en anglais ! Aujourd\'hui, nous apprenons tout le vocabulaire et toutes les phrases dont vous avez besoin pour acheter des choses dans un magasin. De la demande de prix à dire si vous allez acheter quelque chose — vous serez prêt(e) à faire des courses partout dans le monde anglophone !'
        },
        grammarTitle: { en: 'Shopping Phrases — Requests and Prices', fr: 'Phrases pour les achats — demandes et prix' },
        grammar: {
          en: 'In a shop, use these key phrases: To ask for something: "Can I have...?" or "I\'d like..." (= I would like — polite form of "I want"). To ask the price: "How much is it?" or "How much does it cost?" To react to a price: "That\'s expensive!" or "That\'s cheap!" or "That\'s too expensive." To buy: "I\'ll take it!" (= I will take it). To refuse: "No thank you, I\'ll leave it." The seller might say: "Can I help you?" (Puis-je vous aider ?), "Here you are" (voilà), "Will that be all?" (ce sera tout ?). Payment: "Do you accept credit cards?" "I\'ll pay in cash."',
          fr: 'Dans un magasin, utilisez ces phrases clés : Pour demander quelque chose : "Can I have...?" ou "I\'d like..." (= I would like — forme polie de "I want"). Pour demander le prix : "How much is it?" ou "How much does it cost?" Pour réagir au prix : "That\'s expensive!" ou "That\'s too expensive." Pour acheter : "I\'ll take it!" Le vendeur peut dire : "Can I help you?" (Puis-je vous aider ?)'
        },
        examples: [
          { en: 'How much is this jacket?', fr: 'Combien coûte cette veste ?', speak: 'How much is this jacket?' },
          { en: 'It\'s thirty-five pounds. — That\'s too expensive!', fr: 'C\'est trente-cinq livres. — C\'est trop cher !', speak: 'It\'s thirty-five pounds. That\'s too expensive!' },
          { en: 'I\'d like a coffee and a croissant, please.', fr: 'Je voudrais un café et un croissant, s\'il vous plaît.', speak: 'I\'d like a coffee and a croissant please.' },
          { en: 'Can I have the blue shirt in a medium, please?', fr: 'Puis-je avoir la chemise bleue en taille moyenne, s\'il vous plaît ?', speak: 'Can I have the blue shirt in a medium please?' },
          { en: 'It\'s great! I\'ll take it!', fr: 'C\'est super ! Je le prends !', speak: 'It\'s great! I\'ll take it!' }
        ],
        vocabulary: [
          {
            en: 'How much is it?',
            fr: 'Combien ça coûte ?',
            pronunciation: '/haʊ mʌtʃ ɪz ɪt/',
            example: { en: 'Excuse me, how much is this bag?', fr: 'Excusez-moi, combien coûte ce sac ?' }
          },
          {
            en: 'I\'d like...',
            fr: 'Je voudrais...',
            pronunciation: '/aɪd laɪk/',
            example: { en: 'I\'d like a kilo of apples, please.', fr: 'Je voudrais un kilo de pommes, s\'il vous plaît.' }
          },
          {
            en: 'Can I have...?',
            fr: 'Puis-je avoir... ?',
            pronunciation: '/kæn aɪ hæv/',
            example: { en: 'Can I have the menu, please?', fr: 'Puis-je avoir le menu, s\'il vous plaît ?' }
          },
          {
            en: 'expensive',
            fr: 'cher / coûteux',
            pronunciation: '/ɪkˈspɛnsɪv/',
            example: { en: 'This coat is very expensive!', fr: 'Ce manteau est très cher !' }
          },
          {
            en: 'cheap',
            fr: 'bon marché / pas cher',
            pronunciation: '/tʃiːp/',
            example: { en: 'That\'s a great price — it\'s really cheap!', fr: 'C\'est un super prix — c\'est vraiment pas cher !' }
          },
          {
            en: 'I\'ll take it!',
            fr: 'Je le prends !',
            pronunciation: '/aɪl teɪk ɪt/',
            example: { en: 'I love it! I\'ll take it!', fr: 'Je l\'adore ! Je le prends !' }
          },
          {
            en: 'receipt',
            fr: 'reçu / ticket de caisse',
            pronunciation: '/rɪˈsiːt/',
            example: { en: 'Can I have a receipt, please?', fr: 'Puis-je avoir un reçu, s\'il vous plaît ?' }
          },
          {
            en: 'size',
            fr: 'taille / pointure',
            pronunciation: '/saɪz/',
            example: { en: 'What size do you need?', fr: 'Quelle taille vous faut-il ?' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w4d4ex1',
          question: { en: 'How do you ask the price of something in a shop?', fr: 'Comment demandez-vous le prix de quelque chose dans un magasin ?' },
          options: ['What costs this?', 'How much is it?', 'What is the price of this?', 'How money is it?'],
          correct: 1,
          explanation: { en: '"How much is it?" is the most common and natural way to ask for a price. You can also say "How much does it cost?" Both are correct. "What costs this?" and "How money is it?" are incorrect structures.', fr: '"How much is it?" est la façon la plus courante et naturelle de demander un prix. Vous pouvez aussi dire "How much does it cost?" Les deux sont corrects.' }
        },
        {
          type: 'fill',
          id: 'w4d4ex2',
          instruction: { en: 'Complete the polite shopping request', fr: 'Complétez la demande polie pour faire des achats' },
          template: 'I\'d ___ a large coffee, please.',
          answer: 'like',
          hint: { en: 'I\'d like = I would like (je voudrais)', fr: 'I\'d like = I would like (je voudrais)' }
        },
        {
          type: 'match',
          id: 'w4d4ex3',
          instruction: { en: 'Match the shopping phrase with its French translation', fr: 'Associez la phrase de shopping à sa traduction française' },
          pairs: [
            { left: 'How much is it?', right: 'Combien ça coûte ?' },
            { left: 'That\'s too expensive.', right: 'C\'est trop cher.' },
            { left: 'I\'ll take it!', right: 'Je le prends !' },
            { left: 'Can I have a receipt?', right: 'Puis-je avoir un reçu ?' }
          ]
        },
        {
          type: 'order',
          id: 'w4d4ex4',
          instruction: { en: 'Put the shopping dialogue in the correct order', fr: 'Mettez le dialogue de shopping dans le bon ordre' },
          words: ['blue', 'like', 'I\'d', 'please', 'the', 'bag,'],
          answer: 'I\'d like the blue bag please'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d4q1',
          question: { en: 'What does "I\'d like" mean?', fr: 'Que signifie "I\'d like" ?' },
          options: ['I like (present)', 'I would like (polite request)', 'I don\'t like', 'I liked (past)'],
          correct: 1,
          explanation: { en: '"I\'d like" is the contraction of "I would like" — a polite way to make a request or order. It is more polite than "I want". Always use "I\'d like" in shops and restaurants!', fr: '"I\'d like" est la contraction de "I would like" — une façon polie de faire une demande ou de commander. C\'est plus poli que "I want". Utilisez toujours "I\'d like" dans les magasins et les restaurants !' }
        },
        {
          type: 'mcq',
          id: 'w4d4q2',
          question: { en: 'A shirt costs £150. You think it\'s too expensive. What do you say?', fr: 'Une chemise coûte 150 £. Vous pensez que c\'est trop cher. Que dites-vous ?' },
          options: ['That\'s cheap!', 'I\'ll take it!', 'That\'s too expensive!', 'I\'d like it.'],
          correct: 2,
          explanation: { en: '"That\'s too expensive!" (C\'est trop cher !) is the natural reaction to a high price. You could add "Do you have anything cheaper?" (Avez-vous quelque chose de moins cher ?) to look for an alternative.', fr: '"That\'s too expensive!" (C\'est trop cher !) est la réaction naturelle à un prix élevé. Vous pourriez ajouter "Do you have anything cheaper?" pour chercher une alternative.' }
        },
        {
          type: 'mcq',
          id: 'w4d4q3',
          question: { en: 'The shopkeeper says "Can I help you?" What does this mean?', fr: 'Le vendeur dit "Can I help you?" Qu\'est-ce que cela signifie ?' },
          options: ['Goodbye!', 'Puis-je vous aider ?', 'How much is it?', 'Where is the exit?'],
          correct: 1,
          explanation: { en: '"Can I help you?" (Puis-je vous aider ?) is the standard greeting from a shopkeeper or salesperson. Answer: "Yes, please, I\'m looking for..." or "No thank you, I\'m just looking" (Non merci, je regarde juste).', fr: '"Can I help you?" (Puis-je vous aider ?) est la salutation standard d\'un vendeur. Réponse : "Yes, please, I\'m looking for..." ou "No thank you, I\'m just looking" (Non merci, je regarde juste).' }
        }
      ]
    },
    {
      day: 5,
      dayName: { en: 'Friday', fr: 'Vendredi' },
      title: { en: 'Question Words', fr: 'Les mots interrogatifs' },
      icon: '❓',
      theory: {
        intro: {
          en: 'Question words are the building blocks of all questions! Today we review and consolidate the most important question words in English. Master these and you can ask (almost) anything you want to know!',
          fr: 'Les mots interrogatifs sont les éléments de base de toutes les questions ! Aujourd\'hui, nous révisons et consolidons les mots interrogatifs les plus importants en anglais. Maîtrisez-les et vous pourrez demander (presque) tout ce que vous voulez savoir !'
        },
        grammarTitle: { en: 'WH-Question Words — Who, What, Where, When, Why, How', fr: 'Mots interrogatifs — Who, What, Where, When, Why, How' },
        grammar: {
          en: 'English question words are often called "WH-words" because most start with WH. The main ones are: Who (qui) — asking about a person, What (quoi/quel) — asking about a thing, Where (où) — asking about a place, When (quand) — asking about a time, Why (pourquoi) — asking about a reason, How (comment) — asking about manner. Also very common: How much (combien — uncountable: money, water), How many (combien de — countable: books, people), Which (lequel/quelle — choice between options), Whose (à qui — possession). Question structure: Question word + auxiliary (do/does/is/are) + subject + verb.',
          fr: 'Les mots interrogatifs anglais sont souvent appelés "WH-words" car la plupart commencent par WH. Les principaux sont : Who (qui), What (quoi/quel), Where (où), When (quand), Why (pourquoi), How (comment). Aussi très courants : How much (combien — pour l\'indénombrable), How many (combien de — pour le dénombrable), Which (lequel), Whose (à qui).'
        },
        examples: [
          { en: 'Who is your English teacher?', fr: 'Qui est votre professeur d\'anglais ?', speak: 'Who is your English teacher?' },
          { en: 'What time does the bus leave?', fr: 'À quelle heure part le bus ?', speak: 'What time does the bus leave?' },
          { en: 'Where is the nearest pharmacy?', fr: 'Où est la pharmacie la plus proche ?', speak: 'Where is the nearest pharmacy?' },
          { en: 'Why are you learning English?', fr: 'Pourquoi apprenez-vous l\'anglais ?', speak: 'Why are you learning English?' },
          { en: 'How much does this cost? How many apples do you want?', fr: 'Combien ça coûte ? Combien de pommes voulez-vous ?', speak: 'How much does this cost? How many apples do you want?' }
        ],
        vocabulary: [
          {
            en: 'Who',
            fr: 'Qui',
            pronunciation: '/huː/',
            example: { en: 'Who is calling?', fr: 'Qui appelle ?' }
          },
          {
            en: 'What',
            fr: 'Quoi / Quel(le)',
            pronunciation: '/wɒt/',
            example: { en: 'What is your name?', fr: 'Quel est votre nom ?' }
          },
          {
            en: 'Where',
            fr: 'Où',
            pronunciation: '/wɛər/',
            example: { en: 'Where do you live?', fr: 'Où habitez-vous ?' }
          },
          {
            en: 'When',
            fr: 'Quand',
            pronunciation: '/wɛn/',
            example: { en: 'When is your birthday?', fr: 'Quand est votre anniversaire ?' }
          },
          {
            en: 'Why',
            fr: 'Pourquoi',
            pronunciation: '/waɪ/',
            example: { en: 'Why are you tired?', fr: 'Pourquoi êtes-vous fatigué(e) ?' }
          },
          {
            en: 'How',
            fr: 'Comment',
            pronunciation: '/haʊ/',
            example: { en: 'How are you?', fr: 'Comment allez-vous ?' }
          },
          {
            en: 'How much',
            fr: 'Combien (indénombrable)',
            pronunciation: '/haʊ mʌtʃ/',
            example: { en: 'How much does it cost?', fr: 'Combien ça coûte ?' }
          },
          {
            en: 'How many',
            fr: 'Combien de (dénombrable)',
            pronunciation: '/haʊ ˈmɛni/',
            example: { en: 'How many people are there?', fr: 'Combien de personnes y a-t-il ?' }
          }
        ]
      },
      exercises: [
        {
          type: 'match',
          id: 'w4d5ex1',
          instruction: { en: 'Match the question word with what it asks about', fr: 'Associez le mot interrogatif à ce sur quoi il porte' },
          pairs: [
            { left: 'Where', right: 'a place' },
            { left: 'When', right: 'a time' },
            { left: 'Who', right: 'a person' },
            { left: 'Why', right: 'a reason' }
          ]
        },
        {
          type: 'mcq',
          id: 'w4d5ex2',
          question: { en: 'Which question word do you use to ask about a price?', fr: 'Quel mot interrogatif utilisez-vous pour demander un prix ?' },
          options: ['How many', 'How much', 'What', 'How'],
          correct: 1,
          explanation: { en: '"How much" is used to ask about prices and uncountable quantities (money, water, time). "How many" is for countable items: "How many books do you have?" Remember: money is uncountable!', fr: '"How much" s\'utilise pour demander les prix et les quantités indénombrables (argent, eau, temps). "How many" est pour les éléments dénombrables : "How many books do you have?" L\'argent est indénombrable !' }
        },
        {
          type: 'fill',
          id: 'w4d5ex3',
          instruction: { en: 'Complete the question with the correct question word', fr: 'Complétez la question avec le bon mot interrogatif' },
          template: '___ do you go to work? — By bus.',
          answer: 'How',
          hint: { en: 'You are asking about the method / manner of doing something', fr: 'Vous demandez la méthode / la façon de faire quelque chose' }
        },
        {
          type: 'order',
          id: 'w4d5ex4',
          instruction: { en: 'Put the words in the right order to make a question', fr: 'Remettez les mots dans le bon ordre pour faire une question' },
          words: ['does', 'bus', 'the', 'When', 'leave'],
          answer: 'When does the bus leave'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d5q1',
          question: { en: 'Which question asks about a reason?', fr: 'Quelle question demande une raison ?' },
          options: ['Where do you live?', 'What is your job?', 'Why do you study English?', 'When do you start?'],
          correct: 2,
          explanation: { en: '"Why" asks for a reason or explanation. "Why do you study English?" expects an answer starting with "Because..." (parce que). For example: "Because I want to travel!"', fr: '"Why" demande une raison ou une explication. "Why do you study English?" attend une réponse commençant par "Because..." (parce que). Par exemple : "Because I want to travel!"' }
        },
        {
          type: 'mcq',
          id: 'w4d5q2',
          question: { en: 'How many or How much? "___ students are in your class?"', fr: 'How many ou How much ? "___ students are in your class?"' },
          options: ['How much', 'How many', 'How', 'What'],
          correct: 1,
          explanation: { en: '"How many" is correct because "students" is countable (you can say one student, two students). Use "how many" for countable nouns. Use "how much" for uncountable nouns (water, money, time, information).', fr: '"How many" est correct car "students" est dénombrable (on peut dire un étudiant, deux étudiants). Utilisez "how many" pour les noms dénombrables. Utilisez "how much" pour les noms indénombrables (eau, argent, temps).' }
        },
        {
          type: 'mcq',
          id: 'w4d5q3',
          question: { en: 'What is the correct question structure in English?', fr: 'Quelle est la structure correcte d\'une question en anglais ?' },
          options: ['Subject + question word + verb?', 'Question word + auxiliary + subject + verb?', 'Verb + question word + subject?', 'Question word + subject + verb?'],
          correct: 1,
          explanation: { en: 'The correct structure is: Question word + auxiliary (do/does/is/are) + subject + verb. Example: "Where + do + you + live?" "When + does + she + work?" "What + is + your + name?"', fr: 'La structure correcte est : Mot interrogatif + auxiliaire (do/does/is/are) + sujet + verbe. Exemple : "Where + do + you + live?" "When + does + she + work?" "What + is + your + name?"' }
        }
      ]
    },
    {
      day: 6,
      dayName: { en: 'Saturday', fr: 'Samedi' },
      title: { en: 'Final Review Dialogue', fr: 'Dialogue de révision finale' },
      icon: '🎓',
      theory: {
        intro: {
          en: 'Congratulations — this is your final lesson of the beginner course! Today we put ALL the vocabulary and grammar from Week 4 together in a practical dialogue. You\'ll also have a comprehensive review of the whole course. Bravo on your progress!',
          fr: 'Félicitations — c\'est votre dernière leçon du cours débutant ! Aujourd\'hui, nous mettons TOUT le vocabulaire et la grammaire de la semaine 4 ensemble dans un dialogue pratique. Vous aurez aussi une révision complète de tout le cours. Bravo pour vos progrès !'
        },
        grammarTitle: { en: 'A Complete Conversation — In Town & At the Shop', fr: 'Une conversation complète — En ville et au magasin' },
        grammar: {
          en: 'A real-life English conversation about getting around and shopping combines: greetings and politeness ("Excuse me", "please", "thank you"), places in town and directions ("Go straight ahead", "turn right"), transport vocabulary ("by bus", "on foot"), shopping phrases ("How much is it?", "I\'d like..."), and question words ("Where", "How much", "What"). Notice that English speakers are generally very polite and often use phrases like "Could you...?", "Would you mind...?", "I\'d like..." rather than direct commands or simple "I want". This politeness is an important part of English culture.',
          fr: 'Une vraie conversation en anglais sur les déplacements et les achats combine : les salutations et la politesse ("Excuse me", "please", "thank you"), les lieux en ville et les indications ("Go straight ahead", "turn right"), le vocabulaire des transports, les phrases de shopping ("How much is it?", "I\'d like...") et les mots interrogatifs ("Where", "How much", "What"). En anglais, la politesse est très importante : utilisez "I\'d like..." plutôt que "I want...".'
        },
        examples: [
          { en: 'Excuse me, where is the nearest bank?', fr: 'Excusez-moi, où est la banque la plus proche ?', speak: 'Excuse me where is the nearest bank?' },
          { en: 'Go straight ahead, then turn left. You can\'t miss it.', fr: 'Allez tout droit, puis tournez à gauche. Vous ne pouvez pas la manquer.', speak: 'Go straight ahead then turn left. You can\'t miss it.' },
          { en: 'How much is the blue shirt? — It\'s £25.', fr: 'Combien coûte la chemise bleue ? — C\'est 25 £.', speak: 'How much is the blue shirt? It\'s 25 pounds.' },
          { en: 'That\'s a great price! I\'ll take it, please.', fr: 'C\'est un super prix ! Je la prends, s\'il vous plaît.', speak: 'That\'s a great price! I\'ll take it please.' },
          { en: 'How do I get to the train station from here?', fr: 'Comment aller à la gare depuis ici ?', speak: 'How do I get to the train station from here?' }
        ],
        vocabulary: [
          {
            en: 'near / far',
            fr: 'près / loin',
            pronunciation: '/nɪər/ /fɑːr/',
            example: { en: 'Is the station near or far?', fr: 'La gare est-elle proche ou loin ?' }
          },
          {
            en: 'on the corner',
            fr: 'au coin de la rue',
            pronunciation: '/ɒn ðə ˈkɔːrnər/',
            example: { en: 'The café is on the corner.', fr: 'Le café est au coin de la rue.' }
          },
          {
            en: 'just around the corner',
            fr: 'juste au coin / tout près',
            pronunciation: '/dʒʌst əˈraʊnd ðə ˈkɔːrnər/',
            example: { en: 'Don\'t worry — it\'s just around the corner!', fr: 'Ne vous inquiétez pas — c\'est tout près !' }
          },
          {
            en: 'I\'m looking for...',
            fr: 'Je cherche...',
            pronunciation: '/aɪm ˈlʊkɪŋ fɔːr/',
            example: { en: 'I\'m looking for a pharmacy.', fr: 'Je cherche une pharmacie.' }
          },
          {
            en: 'return ticket',
            fr: 'billet aller-retour',
            pronunciation: '/rɪˈtɜːrn ˈtɪkɪt/',
            example: { en: 'Two return tickets to London, please.', fr: 'Deux billets aller-retour pour Londres, s\'il vous plaît.' }
          },
          {
            en: 'change (money)',
            fr: 'monnaie',
            pronunciation: '/tʃeɪndʒ/',
            example: { en: 'Do you have change for £20?', fr: 'Avez-vous la monnaie pour 20 £ ?' }
          },
          {
            en: 'sale / discount',
            fr: 'soldes / réduction',
            pronunciation: '/seɪl/ /ˈdɪskaʊnt/',
            example: { en: 'Everything is 50% off in the sale!', fr: 'Tout est à 50% de réduction pendant les soldes !' }
          },
          {
            en: 'just looking',
            fr: 'je regarde juste',
            pronunciation: '/dʒʌst ˈlʊkɪŋ/',
            example: { en: 'No thanks, I\'m just looking.', fr: 'Non merci, je regarde juste.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w4d6ex1',
          question: { en: 'A shopkeeper asks "Can I help you?" You are just browsing. What do you say?', fr: 'Un vendeur demande "Can I help you?" Vous regardez juste. Que dites-vous ?' },
          options: ['Yes, how much?', 'No thanks, I\'m just looking.', 'I\'d like everything.', 'Go straight ahead.'],
          correct: 1,
          explanation: { en: '"No thanks, I\'m just looking" is the perfect response when you don\'t need help yet. It is polite and tells the shopkeeper you are browsing. If you DO need help, say "Yes, please! I\'m looking for..."', fr: '"No thanks, I\'m just looking" est la réponse parfaite quand vous n\'avez pas encore besoin d\'aide. C\'est poli et indique au vendeur que vous regardez. Si vous avez BESOIN d\'aide, dites "Yes, please! I\'m looking for..."' }
        },
        {
          type: 'fill',
          id: 'w4d6ex2',
          instruction: { en: 'Complete the sentence to say you are looking for a place', fr: 'Complétez la phrase pour dire que vous cherchez un endroit' },
          template: 'I\'m ___ for the post office.',
          answer: 'looking',
          hint: { en: 'I\'m looking for = Je cherche', fr: 'I\'m looking for = Je cherche' }
        },
        {
          type: 'match',
          id: 'w4d6ex3',
          instruction: { en: 'Match the situations with the correct English phrase to use', fr: 'Associez les situations à la phrase anglaise correcte à utiliser' },
          pairs: [
            { left: 'You want to know the price', right: 'How much is it?' },
            { left: 'You want to buy something', right: 'I\'ll take it!' },
            { left: 'You want to ask for directions', right: 'Excuse me, how do I get to...?' },
            { left: 'You want to order politely', right: 'I\'d like...' }
          ]
        },
        {
          type: 'order',
          id: 'w4d6ex4',
          instruction: { en: 'Put the shopping dialogue in the correct order', fr: 'Mettez le dialogue de shopping dans le bon ordre' },
          words: ['it?', 'much', 'How', 'is', 'pounds.', 'It\'s', 'take', 'I\'ll', 'twenty', 'it!'],
          answer: 'How much is it? It\'s twenty pounds. I\'ll take it!'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d6q1',
          question: { en: 'Which phrase is used to ask for something politely in a shop?', fr: 'Quelle phrase s\'utilise pour demander quelque chose poliment dans un magasin ?' },
          options: ['Give me a coffee!', 'I want a coffee.', 'I\'d like a coffee, please.', 'Coffee, now please!'],
          correct: 2,
          explanation: { en: '"I\'d like a coffee, please" is the most polite and natural way to order. "I\'d like" (= I would like) is much more polite than "I want". Always add "please" for extra politeness!', fr: '"I\'d like a coffee, please" est la façon la plus polie et naturelle de commander. "I\'d like" (= I would like) est bien plus poli que "I want". Ajoutez toujours "please" pour plus de politesse !' }
        },
        {
          type: 'mcq',
          id: 'w4d6q2',
          question: { en: 'You need to get from the hotel to the museum. You\'re not sure how to get there. What do you say?', fr: 'Vous devez aller de l\'hôtel au musée. Vous ne savez pas comment y aller. Que dites-vous ?' },
          options: ['Where is the museum!', 'Excuse me, how do I get to the museum?', 'Museum, please!', 'How much is the museum?'],
          correct: 1,
          explanation: { en: '"Excuse me, how do I get to the museum?" is the correct way to ask for directions. Start with "Excuse me" for politeness, then use "how do I get to + place?" This is the most natural direction question in English.', fr: '"Excuse me, how do I get to the museum?" est la bonne façon de demander son chemin. Commencez par "Excuse me" pour la politesse, puis utilisez "how do I get to + lieu?" C\'est la question d\'itinéraire la plus naturelle en anglais.' }
        },
        {
          type: 'mcq',
          id: 'w4d6q3',
          question: { en: 'What is the correct response to "How do you get to work?"', fr: 'Quelle est la réponse correcte à "How do you get to work?"' },
          options: ['I get to work at 9am.', 'I go by bus.', 'I go work.', 'Work is my place.'],
          correct: 1,
          explanation: { en: '"I go by bus" correctly answers "how" you travel — by using "by + transport". Other possible answers: "I walk" / "I go on foot", "I take the train", "I drive". These all describe the method of transport.', fr: '"I go by bus" répond correctement à "comment" vous voyagez — en utilisant "by + transport". Autres réponses possibles : "I walk" / "I go on foot", "I take the train", "I drive".' }
        }
      ]
    }
  ],
  sunday: {
    title: { en: 'Week 4 Review — Course Complete!', fr: 'Révision — Semaine 4 — Cours terminé !' },
    summary: {
      en: 'Congratulations on completing the beginner course! This week you learned places in town and how to describe locations, how to ask for and give directions, vocabulary for all major types of transport, essential shopping phrases for buying things and asking prices, and the key question words (who, what, where, when, why, how, how much, how many). You are now ready to navigate a city, take public transport, and shop in English!',
      fr: 'Félicitations pour avoir terminé le cours débutant ! Cette semaine, vous avez appris les lieux en ville et comment décrire les emplacements, comment demander et donner des itinéraires, le vocabulaire de tous les principaux moyens de transport, les phrases essentielles pour faire des achats et demander les prix, et les mots interrogatifs clés (who, what, where, when, why, how, how much, how many). Vous êtes maintenant prêt(e) à vous orienter dans une ville, prendre les transports en commun et faire des achats en anglais !'
    },
    vocabulary: [
      { en: 'supermarket / bank / hospital', fr: 'supermarché / banque / hôpital', pronunciation: '/ˈsuːpərˌmɑːrkɪt/ /bæŋk/ /ˈhɒspɪtəl/' },
      { en: 'turn left / turn right', fr: 'tournez à gauche / tournez à droite', pronunciation: '/tɜːrn lɛft/ /tɜːrn raɪt/' },
      { en: 'go straight ahead', fr: 'allez tout droit', pronunciation: '/ɡoʊ streɪt əˈhɛd/' },
      { en: 'by bus / by train / on foot', fr: 'en bus / en train / à pied', pronunciation: '/baɪ bʌs/ /baɪ treɪn/ /ɒn fʊt/' },
      { en: 'How much is it?', fr: 'Combien ça coûte ?', pronunciation: '/haʊ mʌtʃ ɪz ɪt/' },
      { en: 'I\'d like...', fr: 'Je voudrais...', pronunciation: '/aɪd laɪk/' },
      { en: 'expensive / cheap', fr: 'cher / pas cher', pronunciation: '/ɪkˈspɛnsɪv/ /tʃiːp/' },
      { en: 'I\'ll take it!', fr: 'Je le prends !', pronunciation: '/aɪl teɪk ɪt/' },
      { en: 'Where / When / Why / How', fr: 'Où / Quand / Pourquoi / Comment', pronunciation: '/wɛər/ /wɛn/ /waɪ/ /haʊ/' },
      { en: 'Excuse me, how do I get to...?', fr: 'Excusez-moi, comment aller à... ?', pronunciation: '/ɪkˈskjuːz miː haʊ duː aɪ ɡɛt tuː/' }
    ],
    grammarPoints: [
      {
        title: { en: 'Prepositions of Location', fr: 'Prépositions de lieu' },
        rule: { en: '"At" for specific places: at the bank, at school. "In" for areas/cities: in Paris, in the city centre. "On" for streets: on Baker Street. "Next to" = à côté de. "Opposite" = en face de. "Between" = entre.', fr: '"At" pour les lieux spécifiques : at the bank, at school. "In" pour les zones/villes : in Paris. "On" pour les rues : on Baker Street. "Next to" = à côté de. "Opposite" = en face de.' },
        example: { en: 'The pharmacy is at the corner, next to the bank, on Main Street.', fr: 'La pharmacie est au coin, à côté de la banque, sur la rue principale.' }
      },
      {
        title: { en: '"By" + Transport (except "on foot")', fr: '"By" + transport (sauf "on foot")' },
        rule: { en: 'Use "by" before transport nouns: by bus, by train, by car, by bike. Important exception: "on foot" (not "by foot"). Also: "I take" the bus/train/taxi, "I drive" a car, "I ride" a bike.', fr: 'Utilisez "by" avant les noms de transport : by bus, by train, by car, by bike. Exception importante : "on foot" (pas "by foot"). Aussi : "I take" le bus/train/taxi, "I drive" une voiture, "I ride" un vélo.' },
        example: { en: 'I go to work by bus. She walks to school on foot. He rides his bike.', fr: 'Je vais au travail en bus. Elle va à l\'école à pied. Il fait du vélo.' }
      },
      {
        title: { en: 'Question Words — How much vs. How many', fr: 'Mots interrogatifs — How much vs. How many' },
        rule: { en: '"How much" = for uncountable nouns and prices: money, water, time. "How many" = for countable nouns: students, books, cars. Test: Can you say "one [noun], two [nouns]"? If yes → How many. If no → How much.', fr: '"How much" = pour les noms indénombrables et les prix : money, water, time. "How many" = pour les noms dénombrables : students, books, cars. Test : Peut-on dire "one [nom], two [noms]" ? Si oui → How many. Sinon → How much.' },
        example: { en: 'How much is it? How many students are there? How much water do you drink?', fr: 'Combien ça coûte ? Combien d\'étudiants y a-t-il ? Combien d\'eau buvez-vous ?' }
      }
    ],
    conversationTopics: [
      {
        title: { en: 'Getting Around Town', fr: 'Se déplacer en ville' },
        prompts: [
          { en: 'Excuse me, is there a supermarket near here?', fr: 'Excusez-moi, y a-t-il un supermarché près d\'ici ?' },
          { en: 'Yes, go straight ahead and turn left at the traffic lights.', fr: 'Oui, allez tout droit et tournez à gauche aux feux.' },
          { en: 'How far is it? It\'s about a 5-minute walk.', fr: 'C\'est loin ? C\'est à environ 5 minutes à pied.' },
          { en: 'Thank you so much! — You\'re welcome!', fr: 'Merci beaucoup ! — De rien !' },
          { en: 'How do you get to work? I go by metro.', fr: 'Comment allez-vous au travail ? J\'y vais en métro.' }
        ]
      },
      {
        title: { en: 'Shopping in a Store', fr: 'Faire des achats dans un magasin' },
        prompts: [
          { en: 'Can I help you? — No thanks, I\'m just looking.', fr: 'Puis-je vous aider ? — Non merci, je regarde juste.' },
          { en: 'Excuse me, how much is this jacket?', fr: 'Excusez-moi, combien coûte cette veste ?' },
          { en: 'It\'s £40. — That\'s a good price! I\'ll take it!', fr: 'C\'est 40 £. — C\'est un bon prix ! Je la prends !' },
          { en: 'Can I have a receipt, please?', fr: 'Puis-je avoir un reçu, s\'il vous plaît ?' }
        ]
      },
      {
        title: { en: 'Asking Questions About Everything!', fr: 'Poser des questions sur tout !' },
        prompts: [
          { en: 'Where do you live? I live in Lyon.', fr: 'Où habitez-vous ? J\'habite à Lyon.' },
          { en: 'When does the next train leave?', fr: 'Quand part le prochain train ?' },
          { en: 'Why are you learning English? Because I love travelling!', fr: 'Pourquoi apprenez-vous l\'anglais ? Parce que j\'adore voyager !' },
          { en: 'How many languages do you speak?', fr: 'Combien de langues parlez-vous ?' },
          { en: 'Who is your favourite English teacher?', fr: 'Qui est votre professeur d\'anglais préféré ?' }
        ]
      }
    ]
  }
};
