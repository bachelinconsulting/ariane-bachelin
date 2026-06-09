const LESSONS_INTERMEDIATE_WEEK1 = {
  week: 1,
  level: 'intermediate',
  theme: { en: 'Travel & Adventure', fr: 'Voyages et aventures' },
  days: [
    {
      day: 1,
      dayName: { en: 'Monday', fr: 'Lundi' },
      title: { en: 'Travel Vocabulary', fr: 'Le vocabulaire du voyage' },
      icon: '✈️',
      theory: {
        intro: {
          en: 'Travelling opens your mind to new cultures and experiences. Whether you travel by plane, train or car, you need to know the right vocabulary to navigate airports, hotels and new destinations. Today we explore the essential words and phrases every traveller needs.',
          fr: 'Voyager ouvre l\'esprit à de nouvelles cultures et expériences. Que vous voyagiez en avion, en train ou en voiture, vous avez besoin du bon vocabulaire pour naviguer dans les aéroports, les hôtels et les nouvelles destinations. Aujourd\'hui, nous explorons les mots et expressions essentiels pour tout voyageur.'
        },
        grammarTitle: { en: 'Key Travel Nouns & Phrases', fr: 'Noms et expressions clés du voyage' },
        grammar: {
          en: 'Travel vocabulary in English includes many compound nouns — words made of two parts, such as "boarding pass", "departure gate" and "duty-free shop". These are always used as fixed expressions. Remember: in British English you "go on holiday", while Americans say "go on vacation". At airports, "check in" (verb) means to register for your flight, while the "check-in" (noun/adjective) refers to the desk or process itself.',
          fr: 'Le vocabulaire du voyage en anglais comprend de nombreux noms composés — des mots formés de deux parties, comme "boarding pass", "departure gate" et "duty-free shop". Ces expressions s\'utilisent toujours comme des unités fixes. Rappel : en anglais britannique on dit "go on holiday", tandis que les Américains disent "go on vacation". À l\'aéroport, "check in" (verbe) signifie s\'enregistrer pour son vol, tandis que "check-in" (nom/adjectif) désigne le guichet ou le processus.'
        },
        examples: [
          { en: 'Could you show me your boarding pass and passport, please?', fr: 'Pourriez-vous me montrer votre carte d\'embarquement et votre passeport, s\'il vous plaît ?', speak: 'Could you show me your boarding pass and passport, please?' },
          { en: 'The departure gate for your flight is B12.', fr: 'La porte d\'embarquement de votre vol est la B12.', speak: 'The departure gate for your flight is B12.' },
          { en: 'Make sure your luggage does not exceed 23 kilograms.', fr: 'Assurez-vous que vos bagages ne dépassent pas 23 kilogrammes.', speak: 'Make sure your luggage does not exceed 23 kilograms.' },
          { en: 'You have to go through customs before collecting your baggage.', fr: 'Vous devez passer la douane avant de récupérer vos bagages.', speak: 'You have to go through customs before collecting your baggage.' },
          { en: 'The security check at this airport is very thorough.', fr: 'Le contrôle de sécurité dans cet aéroport est très rigoureux.', speak: 'The security check at this airport is very thorough.' },
          { en: 'Our flight was delayed by two hours because of bad weather.', fr: 'Notre vol a été retardé de deux heures à cause du mauvais temps.', speak: 'Our flight was delayed by two hours because of bad weather.' }
        ],
        vocabulary: [
          { en: 'passport', fr: 'passeport', pronunciation: '/ˈpɑːspɔːrt/', example: { en: 'Don\'t forget your passport!', fr: 'N\'oubliez pas votre passeport !' } },
          { en: 'boarding pass', fr: 'carte d\'embarquement', pronunciation: '/ˈbɔːrdɪŋ pæs/', example: { en: 'You can download your boarding pass on your phone.', fr: 'Vous pouvez télécharger votre carte d\'embarquement sur votre téléphone.' } },
          { en: 'departure', fr: 'départ', pronunciation: '/dɪˈpɑːrtʃər/', example: { en: 'The departure is scheduled for 6am.', fr: 'Le départ est prévu à 6h.' } },
          { en: 'arrival', fr: 'arrivée', pronunciation: '/əˈraɪvəl/', example: { en: 'The arrival time is 10pm local time.', fr: 'L\'heure d\'arrivée est 22h heure locale.' } },
          { en: 'customs', fr: 'douane', pronunciation: '/ˈkʌstəmz/', example: { en: 'We waited an hour at customs.', fr: 'Nous avons attendu une heure à la douane.' } },
          { en: 'luggage / baggage', fr: 'bagages', pronunciation: '/ˈlʌɡɪdʒ/ /ˈbæɡɪdʒ/', example: { en: 'My luggage got lost at the airport.', fr: 'Mes bagages ont été perdus à l\'aéroport.' } },
          { en: 'itinerary', fr: 'itinéraire', pronunciation: '/aɪˈtɪnəreri/', example: { en: 'I planned a detailed itinerary for the trip.', fr: 'J\'ai planifié un itinéraire détaillé pour le voyage.' } },
          { en: 'layover / stopover', fr: 'escale', pronunciation: '/ˈleɪoʊvər/', example: { en: 'We have a four-hour layover in Dubai.', fr: 'Nous avons une escale de quatre heures à Dubaï.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w1d1ex1',
          question: { en: 'What do you show at the gate before boarding the plane?', fr: 'Que montrez-vous à la porte avant d\'embarquer dans l\'avion ?' },
          options: ['Your itinerary', 'Your boarding pass', 'Your luggage tag', 'Your hotel booking'],
          correct: 1,
          explanation: { en: 'You show your boarding pass (and sometimes your passport) at the gate to board the plane.', fr: 'Vous montrez votre carte d\'embarquement (et parfois votre passeport) à la porte pour embarquer.' }
        },
        {
          type: 'match',
          id: 'w1d1ex2',
          instruction: { en: 'Match the English travel words with their French translations', fr: 'Associez les mots de voyage anglais à leurs traductions françaises' },
          pairs: [
            { left: 'departure', right: 'départ' },
            { left: 'arrival', right: 'arrivée' },
            { left: 'customs', right: 'douane' },
            { left: 'layover', right: 'escale' }
          ]
        },
        {
          type: 'fill',
          id: 'w1d1ex3',
          instruction: { en: 'Complete the sentence with the correct word', fr: 'Complétez la phrase avec le bon mot' },
          template: 'Please proceed to ___ gate C4 for your flight to New York.',
          answer: 'departure',
          hint: { en: 'the area where you wait before boarding', fr: 'la zone où vous attendez avant d\'embarquer' }
        },
        {
          type: 'order',
          id: 'w1d1ex4',
          instruction: { en: 'Put the words in the right order to form a correct sentence', fr: 'Remettez les mots dans le bon ordre pour former une phrase correcte' },
          words: ['your', 'passport', 'forget', 'Don\'t', 'and', 'pass', 'boarding'],
          answer: 'Don\'t forget your passport and boarding pass'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d1q1',
          question: { en: 'What is a "layover"?', fr: 'Qu\'est-ce qu\'un "layover" ?' },
          options: ['A type of hotel room', 'A stop between two flights', 'A luggage storage service', 'A type of ticket'],
          correct: 1,
          explanation: { en: 'A layover (or stopover) is a stop you make between two flights before reaching your final destination.', fr: 'Un layover (ou stopover) est une escale que vous faites entre deux vols avant d\'atteindre votre destination finale.' }
        },
        {
          type: 'mcq',
          id: 'w1d1q2',
          question: { en: 'Which sentence is grammatically correct?', fr: 'Quelle phrase est grammaticalement correcte ?' },
          options: ['I go on vacation next week.', 'I\'m going on holiday next week.', 'I go on holiday next weeks.', 'I going holiday next week.'],
          correct: 1,
          explanation: { en: '"I\'m going on holiday" uses the present continuous for a planned future action, which is correct here.', fr: '"I\'m going on holiday" utilise le présent continu pour une action future planifiée, ce qui est correct ici.' }
        },
        {
          type: 'mcq',
          id: 'w1d1q3',
          question: { en: 'What is the difference between "luggage" and "baggage"?', fr: 'Quelle est la différence entre "luggage" et "baggage" ?' },
          options: ['Luggage is for planes only, baggage is for trains', 'They mean the same thing — your bags and suitcases', 'Baggage is heavier than luggage', 'Luggage is British English, baggage is American English only'],
          correct: 1,
          explanation: { en: 'Both "luggage" and "baggage" refer to your bags and suitcases when travelling. They are interchangeable, though "baggage" is slightly more common in American English.', fr: '"Luggage" et "baggage" désignent tous deux vos sacs et valises lorsque vous voyagez. Ils sont interchangeables, bien que "baggage" soit légèrement plus courant en anglais américain.' }
        }
      ]
    },
    {
      day: 2,
      dayName: { en: 'Tuesday', fr: 'Mardi' },
      title: { en: 'Past Simple — Regular Verbs', fr: 'Passé simple — Verbes réguliers' },
      icon: '📅',
      theory: {
        intro: {
          en: 'When we talk about completed actions in the past, we use the Past Simple tense. Regular verbs follow a predictable pattern — you simply add "-ed" to the base form. This tense is essential for telling stories, recounting experiences, and describing what happened during a trip.',
          fr: 'Lorsque nous parlons d\'actions passées et terminées, nous utilisons le Past Simple. Les verbes réguliers suivent un schéma prévisible — on ajoute simplement "-ed" à la forme de base. Ce temps est essentiel pour raconter des histoires, relater des expériences et décrire ce qui s\'est passé pendant un voyage.'
        },
        grammarTitle: { en: 'Past Simple: Regular Verbs — Formation', fr: 'Past Simple : Verbes réguliers — Formation' },
        grammar: {
          en: 'To form the past simple of a regular verb, add "-ed" to the base form: "visit → visited", "travel → travelled", "book → booked". However, there are important spelling rules: if the verb ends in "-e", just add "-d" (arrive → arrived); if it ends in a consonant + "y", change "y" to "i" and add "-ed" (study → studied); if it ends in consonant-vowel-consonant and the last syllable is stressed, double the final consonant (travel → travelled in British English). In negative sentences use "didn\'t + base form", and in questions use "Did + subject + base form?"',
          fr: 'Pour former le past simple d\'un verbe régulier, ajoutez "-ed" à la forme de base : "visit → visited", "travel → travelled", "book → booked". Il existe cependant des règles orthographiques importantes : si le verbe se termine par "-e", ajoutez simplement "-d" (arrive → arrived) ; s\'il se termine par consonne + "y", changez "y" en "i" et ajoutez "-ed" (study → studied) ; s\'il se termine par consonne-voyelle-consonne et que la dernière syllabe est accentuée, doublez la consonne finale (travel → travelled en anglais britannique). Dans les phrases négatives, utilisez "didn\'t + forme de base", et dans les questions, utilisez "Did + sujet + forme de base ?"'
        },
        examples: [
          { en: 'We booked our flights three months in advance.', fr: 'Nous avons réservé nos vols trois mois à l\'avance.', speak: 'We booked our flights three months in advance.' },
          { en: 'She arrived at the hotel late in the evening.', fr: 'Elle est arrivée à l\'hôtel tard le soir.', speak: 'She arrived at the hotel late in the evening.' },
          { en: 'They enjoyed every single day of their holiday.', fr: 'Ils ont apprécié chaque journée de leurs vacances.', speak: 'They enjoyed every single day of their holiday.' },
          { en: 'Did you visit the Eiffel Tower when you were in Paris?', fr: 'As-tu visité la Tour Eiffel quand tu étais à Paris ?', speak: 'Did you visit the Eiffel Tower when you were in Paris?' },
          { en: 'We didn\'t stay in a hotel — we rented an apartment.', fr: 'Nous ne sommes pas restés à l\'hôtel — nous avons loué un appartement.', speak: 'We didn\'t stay in a hotel — we rented an apartment.' },
          { en: 'He walked for hours along the beach and photographed the sunset.', fr: 'Il a marché pendant des heures le long de la plage et a photographié le coucher de soleil.', speak: 'He walked for hours along the beach and photographed the sunset.' }
        ],
        vocabulary: [
          { en: 'to visit', fr: 'visiter', pronunciation: '/ˈvɪzɪt/', example: { en: 'We visited five cities in ten days.', fr: 'Nous avons visité cinq villes en dix jours.' } },
          { en: 'to book / to reserve', fr: 'réserver', pronunciation: '/bʊk/', example: { en: 'I booked the tickets online.', fr: 'J\'ai réservé les billets en ligne.' } },
          { en: 'to travel', fr: 'voyager', pronunciation: '/ˈtræv.əl/', example: { en: 'She travelled alone for six months.', fr: 'Elle a voyagé seule pendant six mois.' } },
          { en: 'to explore', fr: 'explorer', pronunciation: '/ɪkˈsplɔːr/', example: { en: 'We explored the old town on foot.', fr: 'Nous avons exploré la vieille ville à pied.' } },
          { en: 'to enjoy', fr: 'apprécier / profiter de', pronunciation: '/ɪnˈdʒɔɪ/', example: { en: 'They enjoyed the local cuisine.', fr: 'Ils ont apprécié la cuisine locale.' } },
          { en: 'to arrive', fr: 'arriver', pronunciation: '/əˈraɪv/', example: { en: 'We arrived early and waited at the café.', fr: 'Nous sommes arrivés tôt et avons attendu au café.' } },
          { en: 'to pack', fr: 'faire ses bagages', pronunciation: '/pæk/', example: { en: 'I always pack my bag the night before.', fr: 'Je fais toujours mes bagages la veille.' } }
        ]
      },
      exercises: [
        {
          type: 'fill',
          id: 'w1d2ex1',
          instruction: { en: 'Complete the sentence using the past simple', fr: 'Complétez la phrase en utilisant le passé simple' },
          template: 'Last summer, they ___ (travel) around Southeast Asia for two months.',
          answer: 'travelled',
          hint: { en: 'Add -ed, double the -l in British English', fr: 'Ajoutez -ed, doublez le -l en anglais britannique' }
        },
        {
          type: 'mcq',
          id: 'w1d2ex2',
          question: { en: 'Which sentence is in the correct past simple form?', fr: 'Quelle phrase est correctement formulée au passé simple ?' },
          options: ['She didn\'t visited the museum.', 'She didn\'t visit the museum.', 'She not visited the museum.', 'She visited not the museum.'],
          correct: 1,
          explanation: { en: 'In the negative past simple, use "didn\'t" + the BASE form of the verb (not the -ed form). "She didn\'t visit" is correct.', fr: 'Au négatif du passé simple, utilisez "didn\'t" + la forme de BASE du verbe (pas la forme en -ed). "She didn\'t visit" est correct.' }
        },
        {
          type: 'order',
          id: 'w1d2ex3',
          instruction: { en: 'Put the words in the right order', fr: 'Remettez les mots dans le bon ordre' },
          words: ['she', 'Did', 'the', 'enjoy', 'trip'],
          answer: 'Did she enjoy the trip'
        },
        {
          type: 'match',
          id: 'w1d2ex4',
          instruction: { en: 'Match each verb to its past simple form', fr: 'Associez chaque verbe à sa forme au passé simple' },
          pairs: [
            { left: 'arrive', right: 'arrived' },
            { left: 'study', right: 'studied' },
            { left: 'book', right: 'booked' },
            { left: 'explore', right: 'explored' }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d2q1',
          question: { en: 'What is the past simple of "to enjoy"?', fr: 'Quel est le passé simple de "to enjoy" ?' },
          options: ['enjoied', 'enjoyed', 'enjoyd', 'enjoyes'],
          correct: 1,
          explanation: { en: '"Enjoy" ends in a vowel + y, so we simply add -ed: enjoyed.', fr: '"Enjoy" se termine par une voyelle + y, donc on ajoute simplement -ed : enjoyed.' }
        },
        {
          type: 'mcq',
          id: 'w1d2q2',
          question: { en: 'How do you form a past simple question?', fr: 'Comment forme-t-on une question au passé simple ?' },
          options: ['Subject + verb-ed + ?', 'Did + subject + base verb + ?', 'Was/Were + subject + verb-ing + ?', 'Have + subject + past participle + ?'],
          correct: 1,
          explanation: { en: 'Past simple questions are formed with: Did + subject + BASE form of verb + ? For example: "Did you enjoy the trip?"', fr: 'Les questions au passé simple se forment ainsi : Did + sujet + forme de BASE du verbe + ? Par exemple : "Did you enjoy the trip?"' }
        },
        {
          type: 'mcq',
          id: 'w1d2q3',
          question: { en: 'Choose the correct sentence:', fr: 'Choisissez la phrase correcte :' },
          options: ['I studyed French at school.', 'I studied French at school.', 'I study French at school yesterday.', 'I have studied French at school last year.'],
          correct: 1,
          explanation: { en: 'When a verb ends in consonant + y, change y to i and add -ed: study → studied. The sentence also correctly uses past simple for a finished period.', fr: 'Quand un verbe se termine par consonne + y, changez y en i et ajoutez -ed : study → studied. La phrase utilise aussi correctement le passé simple pour une période révolue.' }
        }
      ]
    },
    {
      day: 3,
      dayName: { en: 'Wednesday', fr: 'Mercredi' },
      title: { en: 'Past Simple — Irregular Verbs', fr: 'Passé simple — Verbes irréguliers' },
      icon: '🔀',
      theory: {
        intro: {
          en: 'Many of the most commonly used English verbs are irregular — their past simple form does not follow the "-ed" rule. These must be memorised individually. The good news is that the most important irregular verbs are the ones you will use most often when talking about travel and past experiences.',
          fr: 'Beaucoup des verbes anglais les plus courants sont irréguliers — leur forme au passé simple ne suit pas la règle du "-ed". Ces formes doivent être mémorisées individuellement. La bonne nouvelle est que les verbes irréguliers les plus importants sont ceux que vous utiliserez le plus souvent pour parler de voyages et d\'expériences passées.'
        },
        grammarTitle: { en: 'Common Irregular Verbs in Travel Contexts', fr: 'Verbes irréguliers courants dans un contexte de voyage' },
        grammar: {
          en: 'Irregular verbs do not add "-ed" to form the past simple. Each verb has its own unique past form that must be learned: go → went, see → saw, eat → ate, buy → bought, meet → met, take → took, fly → flew, drive → drove, speak → spoke, get → got. Importantly, in negative sentences and questions, the base form is always used (not the irregular form): "I didn\'t go" (not "I didn\'t went"), "Did you see?" (not "Did you saw?"). This is a very common mistake to avoid.',
          fr: 'Les verbes irréguliers n\'ajoutent pas "-ed" pour former le passé simple. Chaque verbe a sa propre forme passée unique qui doit être apprise : go → went, see → saw, eat → ate, buy → bought, meet → met, take → took, fly → flew, drive → drove, speak → spoke, get → got. Important : dans les phrases négatives et les questions, on utilise toujours la forme de base (et non la forme irrégulière) : "I didn\'t go" (pas "I didn\'t went"), "Did you see?" (pas "Did you saw?"). C\'est une erreur très courante à éviter.'
        },
        examples: [
          { en: 'We flew from London to Tokyo — it took eleven hours.', fr: 'Nous avons volé de Londres à Tokyo — cela a pris onze heures.', speak: 'We flew from London to Tokyo — it took eleven hours.' },
          { en: 'I met some amazing people at the hostel in Barcelona.', fr: 'J\'ai rencontré des personnes formidables dans l\'auberge de jeunesse à Barcelone.', speak: 'I met some amazing people at the hostel in Barcelona.' },
          { en: 'She bought a beautiful handmade rug at the market.', fr: 'Elle a acheté un magnifique tapis fait main au marché.', speak: 'She bought a beautiful handmade rug at the market.' },
          { en: 'We drove along the coast and stopped at every viewpoint.', fr: 'Nous avons conduit le long de la côte et nous sommes arrêtés à chaque belvédère.', speak: 'We drove along the coast and stopped at every viewpoint.' },
          { en: 'Did you eat any street food when you were in Thailand?', fr: 'As-tu mangé de la street food quand tu étais en Thaïlande ?', speak: 'Did you eat any street food when you were in Thailand?' },
          { en: 'I didn\'t speak any Spanish, but people were very helpful.', fr: 'Je ne parlais pas espagnol, mais les gens étaient très serviables.', speak: 'I didn\'t speak any Spanish, but people were very helpful.' }
        ],
        vocabulary: [
          { en: 'go → went', fr: 'aller → allé', pronunciation: '/ɡoʊ/ → /wɛnt/', example: { en: 'We went to Rome for the weekend.', fr: 'Nous sommes allés à Rome pour le week-end.' } },
          { en: 'see → saw', fr: 'voir → vu', pronunciation: '/siː/ → /sɔː/', example: { en: 'I saw the northern lights for the first time.', fr: 'J\'ai vu les aurores boréales pour la première fois.' } },
          { en: 'eat → ate', fr: 'manger → mangé', pronunciation: '/iːt/ → /eɪt/', example: { en: 'We ate fresh seafood every day.', fr: 'Nous avons mangé des fruits de mer frais tous les jours.' } },
          { en: 'buy → bought', fr: 'acheter → acheté', pronunciation: '/baɪ/ → /bɔːt/', example: { en: 'He bought souvenirs for everyone.', fr: 'Il a acheté des souvenirs pour tout le monde.' } },
          { en: 'take → took', fr: 'prendre → pris', pronunciation: '/teɪk/ → /tʊk/', example: { en: 'She took hundreds of photos.', fr: 'Elle a pris des centaines de photos.' } },
          { en: 'fly → flew', fr: 'voler → volé', pronunciation: '/flaɪ/ → /fluː/', example: { en: 'We flew business class.', fr: 'Nous avons volé en classe affaires.' } },
          { en: 'speak → spoke', fr: 'parler → parlé', pronunciation: '/spiːk/ → /spoʊk/', example: { en: 'He spoke to the locals in Italian.', fr: 'Il a parlé aux habitants en italien.' } },
          { en: 'get → got', fr: 'obtenir/arriver → obtenu/arrivé', pronunciation: '/ɡɛt/ → /ɡɒt/', example: { en: 'We got lost in the old city.', fr: 'Nous nous sommes perdus dans la vieille ville.' } }
        ]
      },
      exercises: [
        {
          type: 'flashcard',
          id: 'w1d3ex1',
          instruction: { en: 'Click to flip each card and learn the irregular past forms', fr: 'Cliquez pour retourner chaque carte et apprendre les formes passées irrégulières' },
          cards: [
            { front: 'go', back: 'went', example: { en: 'We went to the market.', fr: 'Nous sommes allés au marché.' } },
            { front: 'see', back: 'saw', example: { en: 'I saw the Colosseum.', fr: 'J\'ai vu le Colisée.' } },
            { front: 'eat', back: 'ate', example: { en: 'We ate local food.', fr: 'Nous avons mangé local.' } },
            { front: 'buy', back: 'bought', example: { en: 'She bought a painting.', fr: 'Elle a acheté un tableau.' } },
            { front: 'fly', back: 'flew', example: { en: 'They flew overnight.', fr: 'Ils ont volé de nuit.' } },
            { front: 'take', back: 'took', example: { en: 'He took the train.', fr: 'Il a pris le train.' } }
          ]
        },
        {
          type: 'fill',
          id: 'w1d3ex2',
          instruction: { en: 'Complete the sentence with the correct irregular past simple form', fr: 'Complétez la phrase avec la forme passée simple irrégulière correcte' },
          template: 'We ___ (speak) to a local guide who showed us hidden spots in the city.',
          answer: 'spoke',
          hint: { en: 'Irregular past of "speak"', fr: 'Passé irrégulier de "speak"' }
        },
        {
          type: 'mcq',
          id: 'w1d3ex3',
          question: { en: 'Choose the CORRECT negative sentence:', fr: 'Choisissez la phrase négative CORRECTE :' },
          options: ['I didn\'t went to the museum.', 'I didn\'t go to the museum.', 'I went not to the museum.', 'I not went to the museum.'],
          correct: 1,
          explanation: { en: 'In negative sentences, always use "didn\'t" + BASE form. The irregular form (went) is never used after "didn\'t".', fr: 'Dans les phrases négatives, utilisez toujours "didn\'t" + forme de BASE. La forme irrégulière (went) n\'est jamais utilisée après "didn\'t".' }
        },
        {
          type: 'order',
          id: 'w1d3ex4',
          instruction: { en: 'Rearrange the words to form a correct past simple question', fr: 'Réarrangez les mots pour former une question correcte au passé simple' },
          words: ['she', 'meet', 'Did', 'anyone', 'interesting'],
          answer: 'Did she meet anyone interesting'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d3q1',
          question: { en: 'What is the past simple of "buy"?', fr: 'Quel est le passé simple de "buy" ?' },
          options: ['buyed', 'boughted', 'bought', 'buyd'],
          correct: 2,
          explanation: { en: '"Buy" is an irregular verb. Its past simple form is "bought". There is no pattern — it must be memorised.', fr: '"Buy" est un verbe irrégulier. Sa forme au passé simple est "bought". Il n\'y a pas de règle — il faut le mémoriser.' }
        },
        {
          type: 'mcq',
          id: 'w1d3q2',
          question: { en: 'Which sentence contains an error?', fr: 'Quelle phrase contient une erreur ?' },
          options: ['We flew to Madrid last Friday.', 'Did you see the sunset?', 'She didn\'t took any photos.', 'He got lost in the city.'],
          correct: 2,
          explanation: { en: '"She didn\'t took" is wrong. After "didn\'t", always use the base form: "She didn\'t take any photos."', fr: '"She didn\'t took" est incorrect. Après "didn\'t", utilisez toujours la forme de base : "She didn\'t take any photos."' }
        },
        {
          type: 'mcq',
          id: 'w1d3q3',
          question: { en: 'How do you say "Nous avons mangé de la nourriture locale" in English?', fr: 'Comment dit-on "Nous avons mangé de la nourriture locale" en anglais ?' },
          options: ['We have ate local food.', 'We eated local food.', 'We ate local food.', 'We did eat local food yesterday.'],
          correct: 2,
          explanation: { en: 'The past simple of "eat" is "ate". "We ate local food" is the correct and natural way to say this.', fr: 'Le passé simple de "eat" est "ate". "We ate local food" est la façon correcte et naturelle de le dire.' }
        }
      ]
    },
    {
      day: 4,
      dayName: { en: 'Thursday', fr: 'Jeudi' },
      title: { en: 'At the Hotel', fr: 'À l\'hôtel' },
      icon: '🏨',
      theory: {
        intro: {
          en: 'Knowing how to communicate effectively at a hotel is a crucial travel skill. From booking a room to making a complaint, you need specific language to get what you need politely and clearly. In English-speaking countries, being direct but polite is key — use "Could I...?", "I\'d like to..." and "I\'m afraid that..." for professional hotel interactions.',
          fr: 'Savoir communiquer efficacement dans un hôtel est une compétence de voyage essentielle. De la réservation d\'une chambre au dépôt d\'une réclamation, vous avez besoin d\'un vocabulaire spécifique pour obtenir ce dont vous avez besoin de manière polie et claire. Dans les pays anglophones, être direct mais poli est la clé — utilisez "Could I...?", "I\'d like to..." et "I\'m afraid that..." pour des interactions hôtelières professionnelles.'
        },
        grammarTitle: { en: 'Polite Requests and Complaints', fr: 'Demandes polies et réclamations' },
        grammar: {
          en: 'In formal settings like hotels, politeness is expressed through modal verbs and specific structures. "Could I..." and "I\'d like to..." are softer alternatives to "I want...". For complaints, use "I\'m afraid that..." to introduce a problem diplomatically. "Would it be possible to...?" is ideal for special requests. Note the difference between "check in" (verb: to register on arrival) and "check out" (verb: to leave and pay). The noun forms are "check-in" and "check-out" used as adjectives, e.g. "check-out time".',
          fr: 'Dans des environnements formels comme les hôtels, la politesse s\'exprime à travers des verbes modaux et des structures spécifiques. "Could I..." et "I\'d like to..." sont des alternatives plus douces à "I want...". Pour les réclamations, utilisez "I\'m afraid that..." pour introduire un problème de manière diplomatique. "Would it be possible to...?" est idéal pour les demandes spéciales. Notez la différence entre "check in" (verbe : s\'enregistrer à l\'arrivée) et "check out" (verbe : partir et payer). Les formes nominales sont "check-in" et "check-out" utilisées comme adjectifs, par exemple "check-out time".'
        },
        examples: [
          { en: 'I\'d like to check in, please. I have a reservation under the name Dupont.', fr: 'Je voudrais m\'enregistrer, s\'il vous plaît. J\'ai une réservation au nom de Dupont.', speak: 'I\'d like to check in, please. I have a reservation under the name Dupont.' },
          { en: 'Could I have a room with a sea view, if possible?', fr: 'Pourrais-je avoir une chambre avec vue sur la mer, si possible ?', speak: 'Could I have a room with a sea view, if possible?' },
          { en: 'I\'m afraid the air conditioning in my room isn\'t working.', fr: 'J\'ai bien peur que la climatisation dans ma chambre ne fonctionne pas.', speak: 'I\'m afraid the air conditioning in my room isn\'t working.' },
          { en: 'Would it be possible to get an extra pillow and some more towels?', fr: 'Serait-il possible d\'avoir un oreiller supplémentaire et quelques serviettes de plus ?', speak: 'Would it be possible to get an extra pillow and some more towels?' },
          { en: 'What time is check-out tomorrow morning?', fr: 'À quelle heure est le départ demain matin ?', speak: 'What time is check-out tomorrow morning?' },
          { en: 'I\'d like to extend my stay by one night, please.', fr: 'Je voudrais prolonger mon séjour d\'une nuit, s\'il vous plaît.', speak: 'I\'d like to extend my stay by one night, please.' }
        ],
        vocabulary: [
          { en: 'reservation / booking', fr: 'réservation', pronunciation: '/ˌrɛzərˈveɪʃən/', example: { en: 'I made a reservation for two nights.', fr: 'J\'ai fait une réservation pour deux nuits.' } },
          { en: 'receptionist', fr: 'réceptionniste', pronunciation: '/rɪˈsɛpʃənɪst/', example: { en: 'The receptionist was very helpful.', fr: 'La réceptionniste était très serviable.' } },
          { en: 'suite', fr: 'suite (chambre de luxe)', pronunciation: '/swiːt/', example: { en: 'We upgraded to a suite for our anniversary.', fr: 'Nous avons évolué en suite pour notre anniversaire.' } },
          { en: 'housekeeping', fr: 'service de ménage', pronunciation: '/ˈhaʊskiːpɪŋ/', example: { en: 'Please call housekeeping for extra towels.', fr: 'Appelez le service de ménage pour des serviettes supplémentaires.' } },
          { en: 'complimentary', fr: 'gratuit / offert', pronunciation: '/ˌkɒmplɪˈmɛntəri/', example: { en: 'Breakfast is complimentary at this hotel.', fr: 'Le petit-déjeuner est offert dans cet hôtel.' } },
          { en: 'amenities', fr: 'équipements / commodités', pronunciation: '/əˈmiːnɪtiz/', example: { en: 'The hotel has excellent amenities including a spa and gym.', fr: 'L\'hôtel dispose d\'excellents équipements dont un spa et une salle de gym.' } },
          { en: 'to extend one\'s stay', fr: 'prolonger son séjour', pronunciation: '/ɪkˈstɛnd/', example: { en: 'We decided to extend our stay by two days.', fr: 'Nous avons décidé de prolonger notre séjour de deux jours.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w1d4ex1',
          question: { en: 'Which phrase is the most polite way to ask for extra towels?', fr: 'Quelle phrase est la façon la plus polie de demander des serviettes supplémentaires ?' },
          options: ['Give me more towels.', 'I want more towels.', 'Could I please have some extra towels?', 'More towels, now.'],
          correct: 2,
          explanation: { en: '"Could I please have..." is the most polite and natural phrasing in a hotel setting. It uses a modal verb and "please" to show respect.', fr: '"Could I please have..." est la formulation la plus polie et naturelle dans un hôtel. Elle utilise un verbe modal et "please" pour montrer du respect.' }
        },
        {
          type: 'fill',
          id: 'w1d4ex2',
          instruction: { en: 'Complete the hotel dialogue with the correct phrase', fr: 'Complétez le dialogue hôtelier avec la phrase correcte' },
          template: 'Guest: I\'m ___ the Wi-Fi in my room doesn\'t seem to be working.',
          answer: 'afraid',
          hint: { en: 'A polite way to introduce a complaint: I\'m ___ that...', fr: 'Une façon polie d\'introduire une plainte : I\'m ___ that...' }
        },
        {
          type: 'match',
          id: 'w1d4ex3',
          instruction: { en: 'Match each hotel phrase with its meaning', fr: 'Associez chaque expression hôtelière à sa signification' },
          pairs: [
            { left: 'check in', right: 'arriver et s\'enregistrer' },
            { left: 'check out', right: 'partir et régler la note' },
            { left: 'complimentary', right: 'offert gratuitement' },
            { left: 'amenities', right: 'équipements de l\'hôtel' }
          ]
        },
        {
          type: 'order',
          id: 'w1d4ex4',
          instruction: { en: 'Rearrange the words to form a polite hotel request', fr: 'Réarrangez les mots pour former une demande hôtelière polie' },
          words: ['possible', 'be', 'Would', 'it', 'to', 'an', 'get', 'early', 'check-in'],
          answer: 'Would it be possible to get an early check-in'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d4q1',
          question: { en: 'What does "complimentary breakfast" mean?', fr: 'Que signifie "complimentary breakfast" ?' },
          options: ['A very good breakfast', 'A free breakfast included in the price', 'A breakfast with many compliments from the chef', 'A breakfast you must pay for separately'],
          correct: 1,
          explanation: { en: '"Complimentary" in a hotel context means free of charge, included as part of the service.', fr: '"Complimentary" dans un contexte hôtelier signifie gratuit, inclus dans le service.' }
        },
        {
          type: 'mcq',
          id: 'w1d4q2',
          question: { en: 'How would you politely ask to change your room?', fr: 'Comment demanderiez-vous poliment à changer de chambre ?' },
          options: ['Change my room!', 'I want a different room.', 'Would it be possible to switch to a different room?', 'My room is bad. Give me another one.'],
          correct: 2,
          explanation: { en: '"Would it be possible to...?" is a very polite structure for making requests, especially in formal settings like hotels.', fr: '"Would it be possible to...?" est une structure très polie pour faire des demandes, surtout dans des contextes formels comme les hôtels.' }
        },
        {
          type: 'mcq',
          id: 'w1d4q3',
          question: { en: 'A guest says "I\'m afraid there\'s a problem with my bill." What does this mean?', fr: 'Un client dit "I\'m afraid there\'s a problem with my bill." Qu\'est-ce que cela signifie ?' },
          options: ['The guest is scared of the bill.', 'The guest is politely saying there is an issue with the bill.', 'The guest refuses to pay the bill.', 'The guest doesn\'t understand the bill.'],
          correct: 1,
          explanation: { en: '"I\'m afraid" is a polite expression used to introduce bad news or a complaint. It doesn\'t actually express fear — it\'s a softener.', fr: '"I\'m afraid" est une expression polie utilisée pour introduire une mauvaise nouvelle ou une réclamation. Cela n\'exprime pas vraiment la peur — c\'est un adoucisseur.' }
        }
      ]
    },
    {
      day: 5,
      dayName: { en: 'Friday', fr: 'Vendredi' },
      title: { en: 'Describing Past Travel Experiences', fr: 'Décrire des expériences de voyage passées' },
      icon: '🗺️',
      theory: {
        intro: {
          en: 'Being able to share your travel experiences in an engaging way is one of the most satisfying uses of English. Today you will learn specific phrases and structures for describing what you did, what impressed you, and what you would recommend to others. This combines all the travel vocabulary and past simple grammar from earlier this week.',
          fr: 'Être capable de partager ses expériences de voyage de manière engageante est l\'une des utilisations les plus satisfaisantes de l\'anglais. Aujourd\'hui, vous apprendrez des expressions et des structures spécifiques pour décrire ce que vous avez fait, ce qui vous a impressionné et ce que vous recommanderiez à d\'autres. Cela combine tout le vocabulaire du voyage et la grammaire du passé simple vus cette semaine.'
        },
        grammarTitle: { en: 'Storytelling Phrases and Opinion Structures', fr: 'Expressions narratives et structures d\'opinion' },
        grammar: {
          en: 'When describing past experiences, use a variety of structures to make your account more vivid. Set the scene first: "I was in... when...", "It was a... day." Then describe the highlight: "The most memorable moment was...", "The highlight of the trip was...". Express emotion: "I was amazed by...", "I was surprised to find...", "I couldn\'t believe how...". Give a recommendation: "I highly recommend...", "If you ever get the chance, you should definitely...". Use sequence words to connect events: first, then, after that, finally, suddenly.',
          fr: 'Lorsque vous décrivez des expériences passées, utilisez une variété de structures pour rendre votre récit plus vivant. Posez d\'abord le décor : "I was in... when...", "It was a... day." Décrivez ensuite le moment fort : "The most memorable moment was...", "The highlight of the trip was...". Exprimez une émotion : "I was amazed by...", "I was surprised to find...", "I couldn\'t believe how...". Donnez une recommandation : "I highly recommend...", "If you ever get the chance, you should definitely...". Utilisez des mots de séquence pour relier les événements : first, then, after that, finally, suddenly.'
        },
        examples: [
          { en: 'The highlight of the trip was definitely the sunset over the Sahara.', fr: 'Le point fort du voyage était sans aucun doute le coucher de soleil sur le Sahara.', speak: 'The highlight of the trip was definitely the sunset over the Sahara.' },
          { en: 'I was absolutely amazed by the sheer size of the Grand Canyon.', fr: 'J\'ai été absolument stupéfait par l\'immensité du Grand Canyon.', speak: 'I was absolutely amazed by the sheer size of the Grand Canyon.' },
          { en: 'First, we explored the old town, then we took a boat trip along the coast.', fr: 'D\'abord, nous avons exploré la vieille ville, puis nous avons fait une balade en bateau le long de la côte.', speak: 'First, we explored the old town, then we took a boat trip along the coast.' },
          { en: 'I couldn\'t believe how friendly and welcoming the locals were.', fr: 'Je n\'en revenais pas de la convivialité et de l\'accueil des habitants.', speak: 'I couldn\'t believe how friendly and welcoming the locals were.' },
          { en: 'I highly recommend visiting Kyoto in autumn — the colours are breathtaking.', fr: 'Je recommande vivement de visiter Kyoto en automne — les couleurs sont à couper le souffle.', speak: 'I highly recommend visiting Kyoto in autumn — the colours are breathtaking.' },
          { en: 'Suddenly, it started raining and we had to run back to the hotel.', fr: 'Soudain, il a commencé à pleuvoir et nous avons dû courir jusqu\'à l\'hôtel.', speak: 'Suddenly, it started raining and we had to run back to the hotel.' }
        ],
        vocabulary: [
          { en: 'highlight', fr: 'point fort / moment phare', pronunciation: '/ˈhaɪlaɪt/', example: { en: 'The highlight of the trip was the boat ride.', fr: 'Le point fort du voyage était la promenade en bateau.' } },
          { en: 'breathtaking', fr: 'à couper le souffle', pronunciation: '/ˈbrɛθteɪkɪŋ/', example: { en: 'The view from the top was breathtaking.', fr: 'La vue depuis le sommet était à couper le souffle.' } },
          { en: 'memorable', fr: 'mémorable / inoubliable', pronunciation: '/ˈmɛmərəbəl/', example: { en: 'It was the most memorable trip of my life.', fr: 'C\'était le voyage le plus mémorable de ma vie.' } },
          { en: 'overwhelming', fr: 'accablant / époustouflant', pronunciation: '/ˌoʊvərˈwɛlmɪŋ/', example: { en: 'The beauty of the landscape was overwhelming.', fr: 'La beauté du paysage était époustouflante.' } },
          { en: 'to recommend', fr: 'recommander', pronunciation: '/ˌrɛkəˈmɛnd/', example: { en: 'I recommend the fish restaurant near the port.', fr: 'Je recommande le restaurant de poisson près du port.' } },
          { en: 'off the beaten track', fr: 'hors des sentiers battus', pronunciation: '/ɒf ðə ˈbiːtən træk/', example: { en: 'We found a café off the beaten track that was wonderful.', fr: 'Nous avons trouvé un café hors des sentiers battus qui était merveilleux.' } },
          { en: 'culture shock', fr: 'choc culturel', pronunciation: '/ˈkʌltʃər ʃɒk/', example: { en: 'Moving to Japan was a huge culture shock at first.', fr: 'S\'installer au Japon a d\'abord été un énorme choc culturel.' } }
        ]
      },
      exercises: [
        {
          type: 'fill',
          id: 'w1d5ex1',
          instruction: { en: 'Complete the travel story with the correct phrase', fr: 'Complétez le récit de voyage avec l\'expression correcte' },
          template: 'The ___ of the whole trip was watching the sunrise from the top of a volcano.',
          answer: 'highlight',
          hint: { en: 'The best or most exciting part of an experience', fr: 'La meilleure ou la plus excitante partie d\'une expérience' }
        },
        {
          type: 'mcq',
          id: 'w1d5ex2',
          question: { en: 'Which phrase best introduces a recommendation?', fr: 'Quelle expression introduit le mieux une recommandation ?' },
          options: ['You must go there!', 'I highly recommend visiting the old quarter.', 'Go there, it\'s good.', 'It was nice.'],
          correct: 1,
          explanation: { en: '"I highly recommend + -ing" is the most natural and complete way to make a strong recommendation in English.', fr: '"I highly recommend + -ing" est la façon la plus naturelle et complète de faire une forte recommandation en anglais.' }
        },
        {
          type: 'order',
          id: 'w1d5ex3',
          instruction: { en: 'Rearrange the words to form a correct travel experience sentence', fr: 'Réarrangez les mots pour former une phrase correcte sur une expérience de voyage' },
          words: ['amazed', 'was', 'the', 'I', 'absolutely', 'by', 'architecture', 'local'],
          answer: 'I was absolutely amazed by the local architecture'
        },
        {
          type: 'flashcard',
          id: 'w1d5ex4',
          instruction: { en: 'Review these key travel storytelling phrases', fr: 'Révisez ces expressions clés pour raconter un voyage' },
          cards: [
            { front: 'The highlight was...', back: 'Le point fort était...', example: { en: 'The highlight was the local food.', fr: 'Le point fort était la nourriture locale.' } },
            { front: 'I was amazed by...', back: 'J\'étais stupéfait(e) par...', example: { en: 'I was amazed by the history.', fr: 'J\'étais stupéfait(e) par l\'histoire.' } },
            { front: 'I highly recommend...', back: 'Je recommande vivement...', example: { en: 'I highly recommend the tour.', fr: 'Je recommande vivement la visite guidée.' } },
            { front: 'off the beaten track', back: 'hors des sentiers battus', example: { en: 'We found a gem off the beaten track.', fr: 'Nous avons trouvé une pépite hors des sentiers battus.' } },
            { front: 'culture shock', back: 'choc culturel', example: { en: 'It was quite a culture shock.', fr: 'C\'était tout un choc culturel.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d5q1',
          question: { en: 'What does "off the beaten track" mean?', fr: 'Que signifie "off the beaten track" ?' },
          options: ['On a walking trail', 'In a remote or unusual place, away from tourist crowds', 'A long distance away', 'On a broken road'],
          correct: 1,
          explanation: { en: '"Off the beaten track" is an idiom meaning a place that is not well-known or visited by many tourists — somewhere unique and authentic.', fr: '"Off the beaten track" est une expression idiomatique désignant un endroit peu connu ou peu visité par les touristes — un endroit unique et authentique.' }
        },
        {
          type: 'mcq',
          id: 'w1d5q2',
          question: { en: 'How do you correctly use "I was amazed"?', fr: 'Comment utilise-t-on correctement "I was amazed" ?' },
          options: ['I was amazed the view.', 'I was amazed by the view.', 'I was amazed to the view.', 'I was amazed for the view.'],
          correct: 1,
          explanation: { en: '"Amazed" is followed by "by" when describing what caused the feeling: "I was amazed by the view / by how beautiful it was."', fr: '"Amazed" est suivi de "by" pour décrire ce qui a provoqué le sentiment : "I was amazed by the view / by how beautiful it was."' }
        },
        {
          type: 'mcq',
          id: 'w1d5q3',
          question: { en: 'What is the correct word order for describing a sequence of events?', fr: 'Quel est le bon ordre des mots pour décrire une séquence d\'événements ?' },
          options: ['We explored after that first the town then the market.', 'First, we explored the town, then the market, and finally we had dinner.', 'Finally, first we explored the town then.', 'We the town explored first, the market then.'],
          correct: 1,
          explanation: { en: 'Sequence words (first, then, after that, finally) should come at the beginning of each new event, separated by commas, to make your storytelling clear and natural.', fr: 'Les mots de séquence (first, then, after that, finally) doivent venir au début de chaque nouvel événement, séparés par des virgules, pour rendre votre narration claire et naturelle.' }
        }
      ]
    },
    {
      day: 6,
      dayName: { en: 'Saturday', fr: 'Samedi' },
      title: { en: 'Travel Story Dialogue & Week Review', fr: 'Dialogue de voyage et révision de la semaine' },
      icon: '🎤',
      theory: {
        intro: {
          en: 'Today we bring everything together. You will read a travel dialogue that uses all the vocabulary and grammar from this week, then work through consolidation exercises. Pay attention to how past simple, hotel language, and storytelling phrases combine naturally in real conversation.',
          fr: 'Aujourd\'hui, nous réunissons tout. Vous lirez un dialogue de voyage qui utilise tout le vocabulaire et la grammaire de cette semaine, puis travaillerez sur des exercices de consolidation. Faites attention à la façon dont le passé simple, le langage hôtelier et les expressions narratives se combinent naturellement dans une vraie conversation.'
        },
        grammarTitle: { en: 'Putting It All Together: A Travel Story', fr: 'Tout mettre ensemble : un récit de voyage' },
        grammar: {
          en: 'When telling a travel story, a good narrative structure moves through three phases: the beginning (when and where you went, how you got there), the middle (what you saw, did and experienced — using regular and irregular past simple), and the end (a highlight, a recommendation, or a reflection). Connecting these with sequence adverbs (first, then, after that, finally) and contrast phrases (however, although, despite) makes your story sound fluent and engaging rather than a simple list of facts.',
          fr: 'Lorsqu\'on raconte une histoire de voyage, une bonne structure narrative passe par trois phases : le début (quand et où vous êtes allé, comment vous y êtes arrivé), le milieu (ce que vous avez vu, fait et vécu — en utilisant le passé simple régulier et irrégulier) et la fin (un moment fort, une recommandation ou une réflexion). Relier ces phases avec des adverbes de séquence (first, then, after that, finally) et des expressions de contraste (however, although, despite) rend votre récit fluide et engageant plutôt qu\'une simple liste de faits.'
        },
        examples: [
          { en: 'Alex: So, how was your trip to Morocco? Did you enjoy it?', fr: 'Alex : Alors, comment était ton voyage au Maroc ? Tu l\'as aimé ?', speak: 'So, how was your trip to Morocco? Did you enjoy it?' },
          { en: 'Sam: It was incredible! We flew into Marrakech and stayed there for five days.', fr: 'Sam : C\'était incroyable ! Nous avons volé jusqu\'à Marrakech et y sommes restés cinq jours.', speak: 'It was incredible! We flew into Marrakech and stayed there for five days.' },
          { en: 'Alex: What was the highlight? Did you visit the souks?', fr: 'Alex : Quel était le point fort ? Avez-vous visité les souks ?', speak: 'What was the highlight? Did you visit the souks?' },
          { en: 'Sam: Yes, we went every day! I bought some amazing spices and a beautiful lamp. The food was breathtaking.', fr: 'Sam : Oui, nous y sommes allés chaque jour ! J\'ai acheté des épices incroyables et une belle lampe. La nourriture était à couper le souffle.', speak: 'Yes, we went every day! I bought some amazing spices and a beautiful lamp. The food was breathtaking.' },
          { en: 'Alex: Any problems? Was the hotel okay?', fr: 'Alex : Des problèmes ? L\'hôtel était correct ?', speak: 'Any problems? Was the hotel okay?' },
          { en: 'Sam: We had a small issue — the air conditioning didn\'t work. I told the receptionist, and they moved us to a better room.', fr: 'Sam : Nous avons eu un petit problème — la climatisation ne fonctionnait pas. J\'ai prévenu la réceptionniste, et elle nous a déplacés dans une meilleure chambre.', speak: 'We had a small issue — the air conditioning didn\'t work. I told the receptionist, and they moved us to a better room.' }
        ],
        vocabulary: [
          { en: 'souk', fr: 'souk (marché traditionnel)', pronunciation: '/suːk/', example: { en: 'The souk was full of colour and noise.', fr: 'Le souk était plein de couleurs et de bruit.' } },
          { en: 'despite', fr: 'malgré', pronunciation: '/dɪˈspaɪt/', example: { en: 'Despite the rain, we enjoyed the trip.', fr: 'Malgré la pluie, nous avons apprécié le voyage.' } },
          { en: 'although', fr: 'bien que / même si', pronunciation: '/ɔːlˈðoʊ/', example: { en: 'Although it was expensive, it was worth it.', fr: 'Bien que ce soit cher, ça en valait la peine.' } },
          { en: 'however', fr: 'cependant / néanmoins', pronunciation: '/haʊˈɛvər/', example: { en: 'The weather was terrible. However, we had a great time.', fr: 'Le temps était terrible. Cependant, nous avons passé un bon moment.' } },
          { en: 'overall', fr: 'dans l\'ensemble', pronunciation: '/ˌoʊvərˈɔːl/', example: { en: 'Overall, it was an amazing experience.', fr: 'Dans l\'ensemble, c\'était une expérience incroyable.' } },
          { en: 'to be worth it', fr: 'valoir la peine', pronunciation: '/wɜːrθ ɪt/', example: { en: 'The long journey was definitely worth it.', fr: 'Le long voyage en valait définitivement la peine.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w1d6ex1',
          question: { en: 'In the dialogue, how did Sam introduce the hotel problem?', fr: 'Dans le dialogue, comment Sam a-t-il introduit le problème de l\'hôtel ?' },
          options: ['He said "The hotel was terrible."', 'He said "We had a small issue."', 'He said "I am afraid the hotel failed."', 'He complained loudly at the reception.'],
          correct: 1,
          explanation: { en: '"We had a small issue" is a polite and natural way to introduce a complaint, softening the problem before explaining it.', fr: '"We had a small issue" est une façon polie et naturelle d\'introduire une réclamation, en adoucissant le problème avant de l\'expliquer.' }
        },
        {
          type: 'fill',
          id: 'w1d6ex2',
          instruction: { en: 'Complete the sentence using a contrast word', fr: 'Complétez la phrase avec un mot de contraste' },
          template: '___ the flight was delayed, we still managed to see everything on our itinerary.',
          answer: 'Although',
          hint: { en: 'A word meaning "even though" — starts with A', fr: 'Un mot signifiant "même si" — commence par A' }
        },
        {
          type: 'order',
          id: 'w1d6ex3',
          instruction: { en: 'Put the travel story events in the correct order', fr: 'Mettez les événements du récit de voyage dans le bon ordre' },
          words: ['the', 'souks.', 'visited', 'then', 'First,', 'we', 'the', 'palace,', 'we'],
          answer: 'First, we visited the palace, then we the souks.'
        },
        {
          type: 'flashcard',
          id: 'w1d6ex4',
          instruction: { en: 'Review the key contrast and linking phrases from this week', fr: 'Révisez les expressions de contraste et de liaison clés de cette semaine' },
          cards: [
            { front: 'although', back: 'bien que / même si', example: { en: 'Although it rained, we had fun.', fr: 'Bien qu\'il pleuve, nous nous sommes amusés.' } },
            { front: 'despite', back: 'malgré', example: { en: 'Despite the cold, we swam.', fr: 'Malgré le froid, nous avons nagé.' } },
            { front: 'however', back: 'cependant', example: { en: 'It was hard. However, I don\'t regret it.', fr: 'C\'était difficile. Cependant, je ne le regrette pas.' } },
            { front: 'overall', back: 'dans l\'ensemble', example: { en: 'Overall, it was perfect.', fr: 'Dans l\'ensemble, c\'était parfait.' } },
            { front: 'worth it', back: 'qui vaut la peine', example: { en: 'Every penny was worth it.', fr: 'Chaque centime en valait la peine.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d6q1',
          question: { en: 'What are the three phases of a good travel narrative?', fr: 'Quelles sont les trois phases d\'un bon récit de voyage ?' },
          options: ['Problem, solution, conclusion', 'Beginning (where/how), middle (experiences), end (highlight/recommendation)', 'Vocabulary, grammar, exercises', 'Departure, arrival, hotel'],
          correct: 1,
          explanation: { en: 'A strong narrative structure covers: where you went and how (beginning), what you did and experienced (middle), and a highlight or recommendation (end).', fr: 'Une bonne structure narrative couvre : où vous êtes allé et comment (début), ce que vous avez fait et vécu (milieu), et un moment fort ou une recommandation (fin).' }
        },
        {
          type: 'mcq',
          id: 'w1d6q2',
          question: { en: 'Which sentence uses contrast correctly?', fr: 'Quelle phrase utilise correctement le contraste ?' },
          options: ['Despite we were tired, but we continued.', 'Although the weather was bad, we enjoyed ourselves.', 'However we had fun, despite.', 'Although, the trip was great.'],
          correct: 1,
          explanation: { en: '"Although + clause, + clause" is the correct structure. "Despite" is followed by a noun or gerund (-ing), not a full clause. "However" connects two separate sentences.', fr: '"Although + proposition, + proposition" est la structure correcte. "Despite" est suivi d\'un nom ou d\'un gérondif (-ing), pas d\'une proposition complète. "However" relie deux phrases distinctes.' }
        },
        {
          type: 'mcq',
          id: 'w1d6q3',
          question: { en: 'What is the most natural way to end a travel recommendation?', fr: 'Quelle est la façon la plus naturelle de terminer une recommandation de voyage ?' },
          options: ['It was good. Go there.', 'Overall, I highly recommend it — it was truly an unforgettable experience.', 'The end. It was nice.', 'I recommend. Go. It\'s good.'],
          correct: 1,
          explanation: { en: '"Overall" signals a conclusion. "I highly recommend it" is a strong endorsement. "Truly unforgettable" adds emotional depth. This sentence structure sounds natural and fluent.', fr: '"Overall" signale une conclusion. "I highly recommend it" est une forte recommandation. "Truly unforgettable" ajoute une profondeur émotionnelle. Cette structure de phrase semble naturelle et fluide.' }
        }
      ]
    }
  ],
  sunday: {
    title: { en: 'Week 1 Review', fr: 'Révision — Semaine 1' },
    summary: {
      en: 'This week you covered the essential vocabulary and language skills for travel. You learned key travel nouns such as boarding pass, customs and luggage. You practised the past simple tense with both regular verbs (visited, booked, enjoyed) and irregular verbs (went, saw, bought, flew). You also discovered how to interact at a hotel using polite requests and how to tell a travel story using sequence and contrast language.',
      fr: 'Cette semaine, vous avez couvert le vocabulaire essentiel et les compétences linguistiques liées au voyage. Vous avez appris des noms clés du voyage tels que boarding pass, customs et luggage. Vous avez pratiqué le passé simple avec des verbes réguliers (visited, booked, enjoyed) et des verbes irréguliers (went, saw, bought, flew). Vous avez également appris à interagir dans un hôtel en utilisant des demandes polies et à raconter une histoire de voyage à l\'aide d\'un langage séquentiel et de contraste.'
    },
    vocabulary: [
      { en: 'boarding pass', fr: 'carte d\'embarquement', pronunciation: '/ˈbɔːrdɪŋ pæs/' },
      { en: 'customs', fr: 'douane', pronunciation: '/ˈkʌstəmz/' },
      { en: 'itinerary', fr: 'itinéraire', pronunciation: '/aɪˈtɪnəreri/' },
      { en: 'layover', fr: 'escale', pronunciation: '/ˈleɪoʊvər/' },
      { en: 'highlight', fr: 'point fort', pronunciation: '/ˈhaɪlaɪt/' },
      { en: 'breathtaking', fr: 'à couper le souffle', pronunciation: '/ˈbrɛθteɪkɪŋ/' },
      { en: 'complimentary', fr: 'gratuit / offert', pronunciation: '/ˌkɒmplɪˈmɛntəri/' },
      { en: 'amenities', fr: 'équipements', pronunciation: '/əˈmiːnɪtiz/' },
      { en: 'off the beaten track', fr: 'hors des sentiers battus', pronunciation: '/ɒf ðə ˈbiːtən træk/' },
      { en: 'culture shock', fr: 'choc culturel', pronunciation: '/ˈkʌltʃər ʃɒk/' }
    ],
    grammarPoints: [
      {
        title: { en: 'Past Simple — Regular Verbs', fr: 'Passé Simple — Verbes Réguliers' },
        rule: { en: 'Base verb + -ed (with spelling rules: e → +d; consonant+y → -ied; CVC stressed → double consonant). Negative: didn\'t + base. Question: Did + subject + base?', fr: 'Verbe de base + -ed (avec règles ortho : e → +d ; consonne+y → -ied ; CVC accentué → doublement). Négatif : didn\'t + base. Question : Did + sujet + base ?' },
        example: { en: 'We visited Rome. / She didn\'t enjoy the food. / Did you book the hotel?', fr: 'Nous avons visité Rome. / Elle n\'a pas aimé la nourriture. / As-tu réservé l\'hôtel ?' }
      },
      {
        title: { en: 'Past Simple — Irregular Verbs', fr: 'Passé Simple — Verbes Irréguliers' },
        rule: { en: 'Each irregular verb has a unique past form: go→went, see→saw, eat→ate, buy→bought, fly→flew. IMPORTANT: in negatives and questions, always use the BASE form, not the irregular form.', fr: 'Chaque verbe irrégulier a sa propre forme passée : go→went, see→saw, eat→ate, buy→bought, fly→flew. IMPORTANT : dans les négatifs et les questions, utilisez toujours la forme de BASE, pas la forme irrégulière.' },
        example: { en: 'We went to Paris. / I didn\'t see the museum. / Did you eat street food?', fr: 'Nous sommes allés à Paris. / Je n\'ai pas vu le musée. / As-tu mangé de la street food ?' }
      },
      {
        title: { en: 'Polite Hotel Language', fr: 'Langage hôtelier poli' },
        rule: { en: 'Use modal verbs for polite requests and complaints: "Could I have...?", "I\'d like to...", "Would it be possible to...?", "I\'m afraid that..." (to introduce a problem diplomatically).', fr: 'Utilisez des verbes modaux pour des demandes et des réclamations polies : "Could I have...?", "I\'d like to...", "Would it be possible to...?", "I\'m afraid that..." (pour introduire un problème diplomatiquement).' },
        example: { en: 'Could I have a wake-up call at 7am? / I\'m afraid the shower isn\'t working.', fr: 'Pourrais-je avoir un réveil téléphonique à 7h ? / Je crains que la douche ne fonctionne pas.' }
      }
    ],
    conversationTopics: [
      {
        title: { en: 'Your Best Travel Experience', fr: 'Votre meilleure expérience de voyage' },
        prompts: [
          { en: 'Where is the best place you have ever visited, and why?', fr: 'Quel est le meilleur endroit que vous ayez jamais visité, et pourquoi ?' },
          { en: 'What was the highlight of that trip?', fr: 'Quel était le point fort de ce voyage ?' },
          { en: 'Did anything go wrong? How did you deal with it?', fr: 'Quelque chose s\'est-il mal passé ? Comment avez-vous géré cela ?' },
          { en: 'Would you recommend that destination to a friend? What would you tell them?', fr: 'Recommanderiez-vous cette destination à un ami ? Que lui diriez-vous ?' },
          { en: 'Did you experience any culture shock?', fr: 'Avez-vous vécu un choc culturel ?' }
        ]
      },
      {
        title: { en: 'Travel Planning', fr: 'Planification d\'un voyage' },
        prompts: [
          { en: 'If you could travel anywhere in the world tomorrow, where would you go?', fr: 'Si vous pouviez voyager n\'importe où dans le monde demain, où iriez-vous ?' },
          { en: 'Do you prefer to plan every detail or travel spontaneously? Why?', fr: 'Préférez-vous planifier chaque détail ou voyager spontanément ? Pourquoi ?' },
          { en: 'What do you always pack in your bag when you travel?', fr: 'Que mettez-vous toujours dans votre sac quand vous voyagez ?' },
          { en: 'Have you ever lost your luggage at an airport? What happened?', fr: 'Avez-vous déjà perdu vos bagages dans un aéroport ? Que s\'est-il passé ?' }
        ]
      }
    ]
  }
};
