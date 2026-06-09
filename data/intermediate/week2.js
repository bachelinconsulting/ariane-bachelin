const LESSONS_INTERMEDIATE_WEEK2 = {
  week: 2,
  level: 'intermediate',
  theme: { en: 'Work & Career', fr: 'Travail et carrière' },
  days: [
    {
      day: 1,
      dayName: { en: 'Monday', fr: 'Lundi' },
      title: { en: 'Work Vocabulary', fr: 'Le vocabulaire du travail' },
      icon: '💼',
      theory: {
        intro: {
          en: 'The workplace has its own specific language. Whether you work in an office, from home or in the field, knowing professional vocabulary allows you to communicate clearly with colleagues, managers and clients. Today we build the vocabulary foundation you will need for the rest of this work-focused week.',
          fr: 'Le lieu de travail a son propre langage spécifique. Que vous travailliez dans un bureau, à domicile ou sur le terrain, connaître le vocabulaire professionnel vous permet de communiquer clairement avec vos collègues, managers et clients. Aujourd\'hui, nous construisons les bases du vocabulaire dont vous aurez besoin pour le reste de cette semaine axée sur le travail.'
        },
        grammarTitle: { en: 'Professional Vocabulary in Context', fr: 'Vocabulaire professionnel en contexte' },
        grammar: {
          en: 'Many workplace words in English come in pairs: "employ" (verb) → "employer" (the company/person who hires) → "employee" (the person hired) → "employment" (noun). Similarly: "manage" → "manager" → "management". Understanding these word families helps you learn vocabulary more efficiently. Note that "feedback" and "deadline" are uncountable or singular nouns in some contexts: "I received some feedback" (not "a feedback"), "The deadline is Friday" (not "the deadlines are Fridays" unless there are multiple separate ones).',
          fr: 'Beaucoup de mots du lieu de travail en anglais viennent par paires : "employ" (verbe) → "employer" (l\'entreprise/la personne qui embauche) → "employee" (la personne embauchée) → "employment" (nom). De même : "manage" → "manager" → "management". Comprendre ces familles de mots vous aide à apprendre le vocabulaire plus efficacement. Notez que "feedback" et "deadline" sont des noms indénombrables ou singuliers dans certains contextes : "I received some feedback" (pas "a feedback"), "The deadline is Friday" (pas "the deadlines are Fridays" sauf s\'il y a plusieurs délais séparés).'
        },
        examples: [
          { en: 'I have a team meeting every Monday morning at 9 o\'clock.', fr: 'J\'ai une réunion d\'équipe tous les lundis matin à 9 heures.', speak: 'I have a team meeting every Monday morning at 9 o\'clock.' },
          { en: 'The deadline for this project is the end of the month.', fr: 'Le délai pour ce projet est la fin du mois.', speak: 'The deadline for this project is the end of the month.' },
          { en: 'My manager gave me some really useful feedback on my presentation.', fr: 'Mon responsable m\'a donné des retours vraiment utiles sur ma présentation.', speak: 'My manager gave me some really useful feedback on my presentation.' },
          { en: 'She was offered a promotion after only two years with the company.', fr: 'Elle s\'est vu offrir une promotion après seulement deux ans dans l\'entreprise.', speak: 'She was offered a promotion after only two years with the company.' },
          { en: 'Working remotely has changed the way we collaborate with our colleagues.', fr: 'Le télétravail a changé la façon dont nous collaborons avec nos collègues.', speak: 'Working remotely has changed the way we collaborate with our colleagues.' },
          { en: 'The company values employees who show initiative and take responsibility.', fr: 'L\'entreprise valorise les employés qui font preuve d\'initiative et prennent leurs responsabilités.', speak: 'The company values employees who show initiative and take responsibility.' }
        ],
        vocabulary: [
          { en: 'colleague', fr: 'collègue', pronunciation: '/ˈkɒliːɡ/', example: { en: 'My colleagues are very supportive.', fr: 'Mes collègues sont très solidaires.' } },
          { en: 'deadline', fr: 'délai / date limite', pronunciation: '/ˈdɛdlaɪn/', example: { en: 'We need to meet the deadline.', fr: 'Nous devons respecter le délai.' } },
          { en: 'promotion', fr: 'promotion / avancement', pronunciation: '/prəˈmoʊʃən/', example: { en: 'He deserved the promotion.', fr: 'Il méritait la promotion.' } },
          { en: 'feedback', fr: 'retour / avis', pronunciation: '/ˈfiːdbæk/', example: { en: 'Constructive feedback is valuable.', fr: 'Un retour constructif est précieux.' } },
          { en: 'salary', fr: 'salaire', pronunciation: '/ˈsæləri/', example: { en: 'She negotiated a higher salary.', fr: 'Elle a négocié un salaire plus élevé.' } },
          { en: 'remote work / telework', fr: 'télétravail', pronunciation: '/rɪˈmoʊt wɜːrk/', example: { en: 'Remote work is now common worldwide.', fr: 'Le télétravail est maintenant courant dans le monde entier.' } },
          { en: 'initiative', fr: 'initiative', pronunciation: '/ɪˈnɪʃətɪv/', example: { en: 'She always takes initiative at work.', fr: 'Elle prend toujours des initiatives au travail.' } },
          { en: 'workload', fr: 'charge de travail', pronunciation: '/ˈwɜːrkloʊd/', example: { en: 'My workload has increased this quarter.', fr: 'Ma charge de travail a augmenté ce trimestre.' } }
        ]
      },
      exercises: [
        {
          type: 'match',
          id: 'w2d1ex1',
          instruction: { en: 'Match each work term with its French equivalent', fr: 'Associez chaque terme de travail à son équivalent français' },
          pairs: [
            { left: 'deadline', right: 'date limite' },
            { left: 'feedback', right: 'retour / avis' },
            { left: 'promotion', right: 'avancement' },
            { left: 'workload', right: 'charge de travail' }
          ]
        },
        {
          type: 'mcq',
          id: 'w2d1ex2',
          question: { en: 'Which sentence uses "feedback" correctly?', fr: 'Quelle phrase utilise "feedback" correctement ?' },
          options: ['She gave me a very useful feedback.', 'She gave me some very useful feedback.', 'She gave me many useful feedbacks.', 'She gave me the feedback usefuls.'],
          correct: 1,
          explanation: { en: '"Feedback" is an uncountable noun in English. We use "some feedback", "a lot of feedback", or "constructive feedback" — never "a feedback" or "feedbacks".', fr: '"Feedback" est un nom indénombrable en anglais. On utilise "some feedback", "a lot of feedback" ou "constructive feedback" — jamais "a feedback" ou "feedbacks".' }
        },
        {
          type: 'fill',
          id: 'w2d1ex3',
          instruction: { en: 'Complete the sentence with the correct word', fr: 'Complétez la phrase avec le bon mot' },
          template: 'If you want to succeed in this company, you need to show more ___ instead of waiting to be told what to do.',
          answer: 'initiative',
          hint: { en: 'The ability to act independently without being asked', fr: 'La capacité à agir de manière indépendante sans qu\'on vous le demande' }
        },
        {
          type: 'order',
          id: 'w2d1ex4',
          instruction: { en: 'Put the words in the right order', fr: 'Remettez les mots dans le bon ordre' },
          words: ['increased', 'significantly', 'has', 'My', 'workload', 'this', 'year'],
          answer: 'My workload has increased significantly this year'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d1q1',
          question: { en: 'What is the difference between "employer" and "employee"?', fr: 'Quelle est la différence entre "employer" et "employee" ?' },
          options: ['They mean the same thing.', 'An employer hires people; an employee is hired.', 'An employee hires people; an employer is hired.', 'Employer is American English; employee is British English.'],
          correct: 1,
          explanation: { en: 'The employer is the company or person who offers a job. The employee is the person who works for the employer. This is a crucial distinction.', fr: 'L\'employer (employeur) est l\'entreprise ou la personne qui offre un emploi. L\'employee (employé) est la personne qui travaille pour l\'employeur. C\'est une distinction cruciale.' }
        },
        {
          type: 'mcq',
          id: 'w2d1q2',
          question: { en: 'What does "to meet a deadline" mean?', fr: 'Que signifie "to meet a deadline" ?' },
          options: ['To have a meeting about deadlines', 'To finish work on time before the deadline', 'To miss the deadline', 'To move the deadline to a later date'],
          correct: 1,
          explanation: { en: '"To meet a deadline" means to successfully finish the work by the required date. The opposite is "to miss a deadline".', fr: '"To meet a deadline" signifie terminer le travail avec succès avant la date requise. L\'opposé est "to miss a deadline".' }
        },
        {
          type: 'mcq',
          id: 'w2d1q3',
          question: { en: 'Which phrase is most appropriate in a professional email?', fr: 'Quelle expression est la plus appropriée dans un email professionnel ?' },
          options: ['Hey! What\'s up with the project?', 'Could you please send me an update on the project?', 'Send me the project info ASAP!!!', 'Yo, where\'s the project stuff?'],
          correct: 1,
          explanation: { en: '"Could you please send me an update?" is polite, professional, and appropriate for workplace communication. The other options are too informal or aggressive.', fr: '"Could you please send me an update?" est poli, professionnel et approprié pour la communication au travail. Les autres options sont trop informelles ou agressives.' }
        }
      ]
    },
    {
      day: 2,
      dayName: { en: 'Tuesday', fr: 'Mardi' },
      title: { en: 'Present Perfect — Introduction', fr: 'Le Present Perfect — Introduction' },
      icon: '🔗',
      theory: {
        intro: {
          en: 'The Present Perfect is one of the most important and often confusing tenses in English. It connects the past to the present — it describes actions that happened at an unspecified time in the past but are still relevant now, or actions that started in the past and continue into the present. It is formed with "have/has + past participle".',
          fr: 'Le Present Perfect est l\'un des temps les plus importants et souvent les plus confus en anglais. Il relie le passé au présent — il décrit des actions qui se sont passées à un moment non précisé dans le passé mais qui sont toujours pertinentes maintenant, ou des actions qui ont commencé dans le passé et se poursuivent dans le présent. Il se forme avec "have/has + participe passé".'
        },
        grammarTitle: { en: 'Present Perfect: Structure and Key Uses', fr: 'Present Perfect : Structure et utilisations principales' },
        grammar: {
          en: 'Structure: Subject + have/has + past participle (e.g., "I have worked", "She has finished"). The main uses are: (1) Life experiences without a specific time: "I have been to Japan" (at some point in my life); (2) Recent actions with present relevance: "She has just left the office" (so she\'s not here now); (3) Duration with "for" and "since": "I have worked here for five years / since 2019". Key signal words include: already, yet, just, ever, never, for, since, recently, so far. Note: "yet" is used in negatives and questions ("Have you finished yet?"), while "already" is used in positives ("I\'ve already sent the email").',
          fr: 'Structure : Sujet + have/has + participe passé (ex. : "I have worked", "She has finished"). Les principales utilisations sont : (1) Expériences de vie sans moment précis : "I have been to Japan" (à un moment de ma vie) ; (2) Actions récentes avec pertinence présente : "She has just left the office" (elle n\'est donc pas là maintenant) ; (3) Durée avec "for" et "since" : "I have worked here for five years / since 2019". Les marqueurs temporels clés incluent : already, yet, just, ever, never, for, since, recently, so far. Note : "yet" s\'utilise dans les négatifs et les questions ("Have you finished yet?"), tandis que "already" s\'utilise dans les positifs ("I\'ve already sent the email").'
        },
        examples: [
          { en: 'I have worked at this company for three years.', fr: 'Je travaille dans cette entreprise depuis trois ans.', speak: 'I have worked at this company for three years.' },
          { en: 'She has just finished the report — you can read it now.', fr: 'Elle vient de terminer le rapport — vous pouvez le lire maintenant.', speak: 'She has just finished the report — you can read it now.' },
          { en: 'Have you ever managed a team before?', fr: 'Avez-vous déjà géré une équipe auparavant ?', speak: 'Have you ever managed a team before?' },
          { en: 'We haven\'t received any feedback from the client yet.', fr: 'Nous n\'avons pas encore reçu de retour du client.', speak: 'We haven\'t received any feedback from the client yet.' },
          { en: 'The company has grown significantly since it was founded.', fr: 'L\'entreprise a considérablement grandi depuis sa fondation.', speak: 'The company has grown significantly since it was founded.' },
          { en: 'I\'ve already sent my CV to three different companies this week.', fr: 'J\'ai déjà envoyé mon CV à trois entreprises différentes cette semaine.', speak: 'I\'ve already sent my CV to three different companies this week.' }
        ],
        vocabulary: [
          { en: 'past participle', fr: 'participe passé', pronunciation: '/pɑːst pɑːˈtɪsɪpəl/', example: { en: '"Worked" is the past participle of "work".', fr: '"Worked" est le participe passé de "work".' } },
          { en: 'recently', fr: 'récemment', pronunciation: '/ˈriːsəntli/', example: { en: 'Have you spoken to her recently?', fr: 'Lui avez-vous parlé récemment ?' } },
          { en: 'so far', fr: 'jusqu\'ici / jusqu\'à présent', pronunciation: '/soʊ fɑːr/', example: { en: 'So far, the project is going well.', fr: 'Jusqu\'ici, le projet se déroule bien.' } },
          { en: 'yet', fr: 'encore (négatif) / déjà (question)', pronunciation: '/jɛt/', example: { en: 'Have you submitted your report yet?', fr: 'Avez-vous déjà soumis votre rapport ?' } },
          { en: 'already', fr: 'déjà (affirmatif)', pronunciation: '/ɔːlˈrɛdi/', example: { en: 'I\'ve already prepared the presentation.', fr: 'J\'ai déjà préparé la présentation.' } },
          { en: 'ever', fr: 'jamais (dans une question)', pronunciation: '/ˈɛvər/', example: { en: 'Have you ever been promoted?', fr: 'Avez-vous déjà été promu ?' } },
          { en: 'to achieve', fr: 'accomplir / atteindre', pronunciation: '/əˈtʃiːv/', example: { en: 'She has achieved so much in just one year.', fr: 'Elle a accompli tellement en seulement un an.' } }
        ]
      },
      exercises: [
        {
          type: 'fill',
          id: 'w2d2ex1',
          instruction: { en: 'Complete the sentence using the Present Perfect', fr: 'Complétez la phrase en utilisant le Present Perfect' },
          template: 'He ___ (work) at the bank since 2018.',
          answer: 'has worked',
          hint: { en: 'has + past participle — use "since" with a specific point in time', fr: 'has + participe passé — utilisez "since" avec un moment précis' }
        },
        {
          type: 'mcq',
          id: 'w2d2ex2',
          question: { en: 'Choose the sentence that correctly uses the Present Perfect:', fr: 'Choisissez la phrase qui utilise correctement le Present Perfect :' },
          options: ['I have worked here yesterday.', 'Have you ever been to a conference?', 'She has went to the meeting.', 'They have finish the project.'],
          correct: 1,
          explanation: { en: '"Have you ever been to...?" is a correct Present Perfect question using "ever" to ask about life experience. The others contain errors: no specific past time with PP, wrong past participle, and missing past participle.', fr: '"Have you ever been to...?" est une question correcte au Present Perfect utilisant "ever" pour poser une question sur une expérience de vie. Les autres contiennent des erreurs : pas de moment passé spécifique avec le PP, mauvais participe passé, et participe passé manquant.' }
        },
        {
          type: 'match',
          id: 'w2d2ex3',
          instruction: { en: 'Match each signal word to its correct use', fr: 'Associez chaque marqueur à son utilisation correcte' },
          pairs: [
            { left: 'yet', right: 'in negative sentences and questions' },
            { left: 'already', right: 'in positive sentences (sooner than expected)' },
            { left: 'just', right: 'a very short time ago' },
            { left: 'ever', right: 'in questions about life experience' }
          ]
        },
        {
          type: 'order',
          id: 'w2d2ex4',
          instruction: { en: 'Rearrange the words to form a correct Present Perfect sentence', fr: 'Réarrangez les mots pour former une phrase correcte au Present Perfect' },
          words: ['already', 'She', 'the', 'has', 'sent', 'email'],
          answer: 'She has already sent the email'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d2q1',
          question: { en: 'What is the Present Perfect of "to write"?', fr: 'Quel est le Present Perfect de "to write" ?' },
          options: ['I have wrote', 'I have writed', 'I have written', 'I have write'],
          correct: 2,
          explanation: { en: '"Write" is an irregular verb. Its past participle is "written". The Present Perfect form is "I have written".', fr: '"Write" est un verbe irrégulier. Son participe passé est "written". La forme au Present Perfect est "I have written".' }
        },
        {
          type: 'mcq',
          id: 'w2d2q2',
          question: { en: 'Which sentence uses "for" and "since" correctly?', fr: 'Quelle phrase utilise correctement "for" et "since" ?' },
          options: ['I\'ve worked here since five years.', 'I\'ve worked here for 2019.', 'I\'ve worked here for five years / since 2019.', 'I\'ve worked here since five years ago.'],
          correct: 2,
          explanation: { en: '"For" is used with a duration (five years, three months), and "since" is used with a specific point in time (2019, January, I was a student). The correct usage is "for five years" OR "since 2019".', fr: '"For" s\'utilise avec une durée (five years, three months), et "since" s\'utilise avec un moment précis (2019, January, I was a student). L\'utilisation correcte est "for five years" OU "since 2019".' }
        },
        {
          type: 'mcq',
          id: 'w2d2q3',
          question: { en: 'Why do we use the Present Perfect in this sentence: "I\'ve just received a job offer"?', fr: 'Pourquoi utilise-t-on le Present Perfect dans cette phrase : "I\'ve just received a job offer" ?' },
          options: ['Because the action happened at a specific time in the past.', 'Because the action is still happening right now.', 'Because the recent action is relevant to the present situation.', 'Because we don\'t know if it happened.'],
          correct: 2,
          explanation: { en: '"Just" signals a very recent action whose result is still relevant now (you now have a job offer to consider). This is a key use of the Present Perfect.', fr: '"Just" signale une action très récente dont le résultat est toujours pertinent maintenant (vous avez maintenant une offre d\'emploi à considérer). C\'est une utilisation clé du Present Perfect.' }
        }
      ]
    },
    {
      day: 3,
      dayName: { en: 'Wednesday', fr: 'Mercredi' },
      title: { en: 'Present Perfect vs Past Simple', fr: 'Present Perfect contre Passé Simple' },
      icon: '⚖️',
      theory: {
        intro: {
          en: 'Choosing between the Present Perfect and Past Simple is one of the most important — and most challenging — grammar decisions in English. French speakers often find this particularly difficult because French uses one tense (le passé composé) where English uses two with different meanings. Today we master the key distinctions.',
          fr: 'Choisir entre le Present Perfect et le Past Simple est l\'une des décisions grammaticales les plus importantes — et les plus difficiles — en anglais. Les francophones trouvent souvent cela particulièrement difficile parce que le français utilise un seul temps (le passé composé) là où l\'anglais en utilise deux avec des significations différentes. Aujourd\'hui, nous maîtrisons les distinctions clés.'
        },
        grammarTitle: { en: 'The Key Distinction: Time Specified vs. Time Unspecified', fr: 'La distinction clé : moment précisé vs moment non précisé' },
        grammar: {
          en: 'The fundamental rule: use Past Simple when you specify WHEN something happened, and Present Perfect when you do not. Compare: "I saw the CEO this morning" (Past Simple — specific time: this morning) vs "I have seen the CEO before" (Present Perfect — no specific time stated). A second key difference is connection to the present: Past Simple is for finished, closed situations ("I lived in London in 2015" — I no longer do), while Present Perfect implies ongoing relevance ("I have lived in London" — this is part of my current experience). The words "ago", "yesterday", "last week", "in 2020" always trigger Past Simple. The words "ever", "never", "already", "yet", "recently", "so far" typically trigger Present Perfect.',
          fr: 'La règle fondamentale : utilisez le Past Simple quand vous précisez QUAND quelque chose s\'est passé, et le Present Perfect quand vous ne le précisez pas. Comparez : "I saw the CEO this morning" (Past Simple — moment précis : this morning) vs "I have seen the CEO before" (Present Perfect — aucun moment précis indiqué). Une deuxième différence clé est le lien avec le présent : le Past Simple est pour des situations terminées et fermées ("I lived in London in 2015" — je n\'y vis plus), tandis que le Present Perfect implique une pertinence continue ("I have lived in London" — c\'est une partie de mon expérience actuelle). Les mots "ago", "yesterday", "last week", "in 2020" déclenchent toujours le Past Simple. Les mots "ever", "never", "already", "yet", "recently", "so far" déclenchent généralement le Present Perfect.'
        },
        examples: [
          { en: 'I worked at Google. (Past Simple — I no longer work there.)', fr: 'J\'ai travaillé chez Google. (Passé Simple — je n\'y travaille plus.)', speak: 'I worked at Google.' },
          { en: 'I have worked at three different companies. (Present Perfect — life experience, no specific time.)', fr: 'J\'ai travaillé dans trois entreprises différentes. (Present Perfect — expérience de vie, sans moment précis.)', speak: 'I have worked at three different companies.' },
          { en: 'Did you call the client this afternoon? (Past Simple — specific time: this afternoon.)', fr: 'As-tu appelé le client cet après-midi ? (Past Simple — moment précis : cet après-midi.)', speak: 'Did you call the client this afternoon?' },
          { en: 'Have you called the client yet? (Present Perfect — no specific time, asking about the current situation.)', fr: 'As-tu déjà appelé le client ? (Present Perfect — pas de moment précis, question sur la situation actuelle.)', speak: 'Have you called the client yet?' },
          { en: 'She left the company two years ago. (Past Simple — "ago" signals finished past.)', fr: 'Elle a quitté l\'entreprise il y a deux ans. (Past Simple — "ago" signale un passé révolu.)', speak: 'She left the company two years ago.' },
          { en: 'She has recently left the company. (Present Perfect — "recently" with no specific date.)', fr: 'Elle a récemment quitté l\'entreprise. (Present Perfect — "recently" sans date précise.)', speak: 'She has recently left the company.' }
        ],
        vocabulary: [
          { en: 'specific time marker', fr: 'marqueur de temps précis', pronunciation: '/spɪˈsɪfɪk taɪm ˈmɑːrkər/', example: { en: '"Yesterday" and "in 2019" are specific time markers.', fr: '"Yesterday" et "in 2019" sont des marqueurs de temps précis.' } },
          { en: 'relevant to the present', fr: 'pertinent pour le présent', pronunciation: '/ˈrɛlɪvənt/', example: { en: 'Her experience is still relevant to the present position.', fr: 'Son expérience est toujours pertinente pour le poste actuel.' } },
          { en: 'career path', fr: 'parcours professionnel', pronunciation: '/kəˈrɪər pæθ/', example: { en: 'He has followed an unconventional career path.', fr: 'Il a suivi un parcours professionnel peu conventionnel.' } },
          { en: 'achievement', fr: 'accomplissement / réalisation', pronunciation: '/əˈtʃiːvmənt/', example: { en: 'List your key achievements on your CV.', fr: 'Listez vos principales réalisations sur votre CV.' } },
          { en: 'to resign', fr: 'démissionner', pronunciation: '/rɪˈzaɪn/', example: { en: 'She resigned last month.', fr: 'Elle a démissionné le mois dernier.' } },
          { en: 'to be laid off', fr: 'être licencié', pronunciation: '/leɪd ɒf/', example: { en: 'He was laid off when the company restructured.', fr: 'Il a été licencié lors de la restructuration de l\'entreprise.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d3ex1',
          question: { en: 'Which sentence is correct?', fr: 'Quelle phrase est correcte ?' },
          options: ['I have sent the email yesterday.', 'I sent the email yesterday.', 'I have sended the email yesterday.', 'I did send the email yesterday.'],
          correct: 1,
          explanation: { en: '"Yesterday" is a specific past time marker, so we must use Past Simple: "I sent the email yesterday." The Present Perfect cannot be used with specific past times.', fr: '"Yesterday" est un marqueur de temps passé précis, donc nous devons utiliser le Past Simple : "I sent the email yesterday." Le Present Perfect ne peut pas être utilisé avec des moments passés précis.' }
        },
        {
          type: 'fill',
          id: 'w2d3ex2',
          instruction: { en: 'Choose the correct tense to complete the sentence', fr: 'Choisissez le bon temps pour compléter la phrase' },
          template: 'She ___ (work) at the UN for ten years — she\'s very experienced.',
          answer: 'has worked',
          hint: { en: 'No specific past time given; the experience is relevant to her current level', fr: 'Aucun moment passé précis donné ; l\'expérience est pertinente pour son niveau actuel' }
        },
        {
          type: 'match',
          id: 'w2d3ex3',
          instruction: { en: 'Match each time expression to the tense it triggers', fr: 'Associez chaque expression de temps au temps qu\'elle déclenche' },
          pairs: [
            { left: 'last year', right: 'Past Simple' },
            { left: 'so far', right: 'Present Perfect' },
            { left: 'in 2018', right: 'Past Simple' },
            { left: 'recently', right: 'Present Perfect' }
          ]
        },
        {
          type: 'order',
          id: 'w2d3ex4',
          instruction: { en: 'Put the words in order to make a correct sentence', fr: 'Mettez les mots dans le bon ordre pour faire une phrase correcte' },
          words: ['ever', 'Have', 'you', 'a', 'managed', 'large', 'team'],
          answer: 'Have you ever managed a large team'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d3q1',
          question: { en: 'What is the main difference between "I lived in Paris" and "I have lived in Paris"?', fr: 'Quelle est la principale différence entre "I lived in Paris" et "I have lived in Paris" ?' },
          options: ['There is no difference.', '"I lived in Paris" means I no longer live there; "I have lived in Paris" is an experience that connects to who I am now.', '"I have lived in Paris" means I currently live there.', '"I lived in Paris" is British English; "I have lived" is American English.'],
          correct: 1,
          explanation: { en: '"I lived in Paris" (Past Simple) is a closed, finished fact — I don\'t live there anymore. "I have lived in Paris" (Present Perfect) presents it as a life experience that is part of my current identity or CV.', fr: '"I lived in Paris" (Past Simple) est un fait fermé et terminé — je n\'y vis plus. "I have lived in Paris" (Present Perfect) le présente comme une expérience de vie qui fait partie de mon identité actuelle ou de mon CV.' }
        },
        {
          type: 'mcq',
          id: 'w2d3q2',
          question: { en: 'A recruiter asks: "Have you ever led a project?" What tense should your answer use?', fr: 'Un recruteur demande : "Have you ever led a project?" Quel temps devez-vous utiliser dans votre réponse ?' },
          options: ['Present Perfect if you don\'t mention when; Past Simple if you add a specific date.', 'Always Past Simple.', 'Always Present Perfect.', 'Either tense, it doesn\'t matter.'],
          correct: 0,
          explanation: { en: 'You can say "Yes, I have led several projects" (Present Perfect — general experience) then follow with "In my last role, I led a team of 8 people in 2022" (Past Simple — specific detail).', fr: 'Vous pouvez dire "Yes, I have led several projects" (Present Perfect — expérience générale) puis enchaîner avec "In my last role, I led a team of 8 people in 2022" (Past Simple — détail précis).' }
        },
        {
          type: 'mcq',
          id: 'w2d3q3',
          question: { en: 'Which word signals that Past Simple should be used?', fr: 'Quel mot indique que le Past Simple doit être utilisé ?' },
          options: ['yet', 'already', 'ago', 'ever'],
          correct: 2,
          explanation: { en: '"Ago" always refers to a specific, finished point in the past (e.g., "three years ago") and always requires Past Simple. The other words (yet, already, ever) are associated with Present Perfect.', fr: '"Ago" fait toujours référence à un moment précis et révolu dans le passé (ex. : "three years ago") et nécessite toujours le Past Simple. Les autres mots (yet, already, ever) sont associés au Present Perfect.' }
        }
      ]
    },
    {
      day: 4,
      dayName: { en: 'Thursday', fr: 'Jeudi' },
      title: { en: 'Job Interview Phrases', fr: 'Expressions pour l\'entretien d\'embauche' },
      icon: '🤝',
      theory: {
        intro: {
          en: 'A job interview is one of the most high-stakes uses of English in a professional context. The language you use needs to be confident, articulate and professional. Today we learn the key phrases for talking about your strengths, experience, goals and motivation — the core elements of any successful job interview.',
          fr: 'Un entretien d\'embauche est l\'une des utilisations les plus importantes de l\'anglais dans un contexte professionnel. Le langage que vous utilisez doit être confiant, articulé et professionnel. Aujourd\'hui, nous apprenons les expressions clés pour parler de vos points forts, de votre expérience, de vos objectifs et de votre motivation — les éléments centraux de tout entretien d\'embauche réussi.'
        },
        grammarTitle: { en: 'Confident and Professional Interview Language', fr: 'Un langage d\'entretien confiant et professionnel' },
        grammar: {
          en: 'In job interviews, you should use a mix of tenses: Present Simple for general truths and current skills ("I am skilled in...", "I work well under pressure"), Present Perfect for experience ("I have managed teams of up to 20 people", "I have developed expertise in..."), and Past Simple for specific achievements ("In my previous role, I increased sales by 30%"). Avoid vague language — instead of "I\'m good at things", say "I excel at project management and stakeholder communication". Use the structure "My greatest strength is... because..." to give complete, convincing answers. For weaknesses, use "One area I am working on is...", turning it into a positive.',
          fr: 'Dans les entretiens d\'embauche, vous devez utiliser un mélange de temps : le Present Simple pour des vérités générales et des compétences actuelles ("I am skilled in...", "I work well under pressure"), le Present Perfect pour l\'expérience ("I have managed teams of up to 20 people", "I have developed expertise in..."), et le Past Simple pour des réalisations précises ("In my previous role, I increased sales by 30%"). Évitez les formulations vagues — au lieu de "I\'m good at things", dites "I excel at project management and stakeholder communication". Utilisez la structure "My greatest strength is... because..." pour donner des réponses complètes et convaincantes. Pour les faiblesses, utilisez "One area I am working on is...", en transformant cela en positif.'
        },
        examples: [
          { en: 'My greatest strength is my ability to remain calm under pressure and prioritise effectively.', fr: 'Mon plus grand atout est ma capacité à rester calme sous pression et à prioriser efficacement.', speak: 'My greatest strength is my ability to remain calm under pressure and prioritise effectively.' },
          { en: 'I have five years of experience in project management within the tech sector.', fr: 'J\'ai cinq ans d\'expérience en gestion de projet dans le secteur technologique.', speak: 'I have five years of experience in project management within the tech sector.' },
          { en: 'I am looking for a role where I can grow professionally and take on greater responsibility.', fr: 'Je cherche un poste où je peux évoluer professionnellement et assumer de plus grandes responsabilités.', speak: 'I am looking for a role where I can grow professionally and take on greater responsibility.' },
          { en: 'My long-term goal is to move into a leadership position within the next three to five years.', fr: 'Mon objectif à long terme est d\'accéder à un poste de direction dans les trois à cinq prochaines années.', speak: 'My long-term goal is to move into a leadership position within the next three to five years.' },
          { en: 'One area I am actively working on is public speaking — I have recently joined a Toastmasters group.', fr: 'Un domaine sur lequel je travaille activement est la prise de parole en public — j\'ai récemment rejoint un groupe Toastmasters.', speak: 'One area I am actively working on is public speaking — I have recently joined a Toastmasters group.' },
          { en: 'I am particularly drawn to this role because of the company\'s commitment to innovation.', fr: 'Ce poste m\'attire particulièrement en raison de l\'engagement de l\'entreprise envers l\'innovation.', speak: 'I am particularly drawn to this role because of the company\'s commitment to innovation.' }
        ],
        vocabulary: [
          { en: 'strength', fr: 'point fort / atout', pronunciation: '/strɛŋθ/', example: { en: 'What is your greatest strength?', fr: 'Quel est votre plus grand atout ?' } },
          { en: 'weakness', fr: 'point faible', pronunciation: '/ˈwiːknɪs/', example: { en: 'She turned her weakness into a learning opportunity.', fr: 'Elle a transformé son point faible en opportunité d\'apprentissage.' } },
          { en: 'motivated', fr: 'motivé(e)', pronunciation: '/ˈmoʊtɪveɪtɪd/', example: { en: 'I am highly motivated by challenging projects.', fr: 'Je suis très motivé(e) par les projets challengeants.' } },
          { en: 'stakeholder', fr: 'partie prenante', pronunciation: '/ˈsteɪkhoʊldər/', example: { en: 'Managing stakeholder expectations is key.', fr: 'Gérer les attentes des parties prenantes est essentiel.' } },
          { en: 'to excel at', fr: 'exceller dans', pronunciation: '/ɪkˈsɛl/', example: { en: 'I excel at data analysis.', fr: 'J\'excelle dans l\'analyse de données.' } },
          { en: 'track record', fr: 'bilan / antécédents professionnels', pronunciation: '/træk ˈrɛkərd/', example: { en: 'She has a strong track record in sales.', fr: 'Elle a un excellent bilan en ventes.' } },
          { en: 'proactive', fr: 'proactif/proactive', pronunciation: '/proʊˈæktɪv/', example: { en: 'We need someone proactive who anticipates problems.', fr: 'Nous avons besoin de quelqu\'un de proactif qui anticipe les problèmes.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d4ex1',
          question: { en: 'How should you ideally answer a question about your weakness in an interview?', fr: 'Comment devriez-vous idéalement répondre à une question sur votre point faible en entretien ?' },
          options: ['Say you have no weaknesses.', 'Name a real weakness and show you are actively working on it.', 'Say "I work too hard" as it sounds positive.', 'Refuse to answer the question.'],
          correct: 1,
          explanation: { en: 'Interviewers see through clichés like "I work too hard." The best approach is to name a genuine weakness and immediately show self-awareness by explaining the steps you are taking to improve.', fr: 'Les recruteurs voient à travers les clichés comme "I work too hard." La meilleure approche est de nommer un vrai point faible et de montrer immédiatement une conscience de soi en expliquant les mesures que vous prenez pour vous améliorer.' }
        },
        {
          type: 'fill',
          id: 'w2d4ex2',
          instruction: { en: 'Complete the interview sentence with the most appropriate word', fr: 'Complétez la phrase d\'entretien avec le mot le plus approprié' },
          template: 'I am particularly ___ to this role because of the company\'s reputation for innovation.',
          answer: 'drawn',
          hint: { en: 'A phrase meaning "attracted to something": particularly ___ to', fr: 'Une expression signifiant "attiré par quelque chose" : particularly ___ to' }
        },
        {
          type: 'order',
          id: 'w2d4ex3',
          instruction: { en: 'Arrange the words to form a strong interview answer', fr: 'Arrangez les mots pour former une bonne réponse d\'entretien' },
          words: ['strength', 'greatest', 'My', 'is', 'under', 'well', 'ability', 'to', 'work', 'pressure', 'my'],
          answer: 'My greatest strength is my ability to work well under pressure'
        },
        {
          type: 'flashcard',
          id: 'w2d4ex4',
          instruction: { en: 'Practise these key interview expressions', fr: 'Entraînez-vous avec ces expressions clés d\'entretien' },
          cards: [
            { front: 'I am experienced in...', back: 'J\'ai de l\'expérience dans...', example: { en: 'I am experienced in leading cross-functional teams.', fr: 'J\'ai de l\'expérience dans la direction d\'équipes pluridisciplinaires.' } },
            { front: 'My long-term goal is to...', back: 'Mon objectif à long terme est de...', example: { en: 'My long-term goal is to lead a department.', fr: 'Mon objectif à long terme est de diriger un département.' } },
            { front: 'I excel at...', back: 'J\'excelle dans...', example: { en: 'I excel at problem-solving under pressure.', fr: 'J\'excelle dans la résolution de problèmes sous pression.' } },
            { front: 'I am looking for...', back: 'Je cherche...', example: { en: 'I am looking for a challenging new role.', fr: 'Je cherche un nouveau rôle challengeant.' } },
            { front: 'track record', back: 'bilan professionnel', example: { en: 'I have a proven track record in sales.', fr: 'J\'ai un bilan professionnel éprouvé en ventes.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d4q1',
          question: { en: 'Which sentence best demonstrates a professional strength using strong language?', fr: 'Quelle phrase illustre le mieux un point fort professionnel avec un langage fort ?' },
          options: ['I\'m okay with projects.', 'I\'ve done management before.', 'I excel at managing complex projects and delivering results on time.', 'I like managing things.'],
          correct: 2,
          explanation: { en: '"I excel at... and delivering results" is specific, confident and action-oriented. The other phrases are vague, weak and unconvincing.', fr: '"I excel at... and delivering results" est spécifique, confiant et orienté vers l\'action. Les autres phrases sont vagues, faibles et peu convaincantes.' }
        },
        {
          type: 'mcq',
          id: 'w2d4q2',
          question: { en: 'In which part of an interview answer should you use Past Simple?', fr: 'Dans quelle partie d\'une réponse d\'entretien devez-vous utiliser le Past Simple ?' },
          options: ['When talking about your current skills', 'When mentioning specific achievements in a previous role', 'When talking about future goals', 'When describing your personality'],
          correct: 1,
          explanation: { en: 'Use Past Simple for specific, measurable achievements in a past job: "In 2022, I increased our team\'s efficiency by 25%." For general experience, use Present Perfect.', fr: 'Utilisez le Past Simple pour des réalisations précises et mesurables dans un emploi passé : "In 2022, I increased our team\'s efficiency by 25%." Pour l\'expérience générale, utilisez le Present Perfect.' }
        },
        {
          type: 'mcq',
          id: 'w2d4q3',
          question: { en: 'What does "proactive" mean in a work context?', fr: 'Que signifie "proactif" dans un contexte de travail ?' },
          options: ['Reacting quickly to problems after they occur', 'Anticipating problems and taking action before they occur', 'Being very productive and fast', 'Being professional and polite at all times'],
          correct: 1,
          explanation: { en: 'A proactive employee anticipates challenges and takes initiative without waiting to be told. It is the opposite of reactive.', fr: 'Un employé proactif anticipe les défis et prend des initiatives sans attendre qu\'on lui dise. C\'est le contraire de réactif.' }
        }
      ]
    },
    {
      day: 5,
      dayName: { en: 'Friday', fr: 'Vendredi' },
      title: { en: 'Writing Professional Emails', fr: 'Rédiger des emails professionnels' },
      icon: '📧',
      theory: {
        intro: {
          en: 'Professional email writing is a critical skill in the modern workplace. A well-written email is clear, polite and purposeful — it gets to the point without being rude and closes with a clear next step. Today you learn the key formulas and phrases for opening, developing and closing professional emails in English.',
          fr: 'La rédaction d\'emails professionnels est une compétence essentielle dans le milieu de travail moderne. Un email bien rédigé est clair, poli et ciblé — il va droit au but sans être impoli et se termine par une prochaine étape claire. Aujourd\'hui, vous apprenez les formules et expressions clés pour ouvrir, développer et conclure des emails professionnels en anglais.'
        },
        grammarTitle: { en: 'Professional Email Structure and Conventions', fr: 'Structure et conventions de l\'email professionnel' },
        grammar: {
          en: 'A professional email in English follows a clear structure: (1) Salutation: "Dear Mr Smith," / "Dear Ms Johnson," / "Dear Sir or Madam," (when the name is unknown); (2) Opening line stating the purpose: "I am writing to enquire about..." / "I am writing in response to..." / "I am writing to inform you that..."; (3) The body, developed in short, clear paragraphs; (4) A call to action or next step: "Please do not hesitate to contact me if you have any questions." / "I look forward to hearing from you."; (5) Closing: "Yours sincerely," (when you know the name) or "Yours faithfully," (when you don\'t). Avoid contractions in formal emails ("I am" not "I\'m"). Note the difference: British English uses "enquire/enquiry" while American English uses "inquire/inquiry".',
          fr: 'Un email professionnel en anglais suit une structure claire : (1) Formule d\'appel : "Dear Mr Smith," / "Dear Ms Johnson," / "Dear Sir or Madam," (quand le nom est inconnu) ; (2) Phrase d\'ouverture indiquant l\'objet : "I am writing to enquire about..." / "I am writing in response to..." / "I am writing to inform you that..." ; (3) Le corps, développé en paragraphes courts et clairs ; (4) Un appel à l\'action ou une prochaine étape : "Please do not hesitate to contact me if you have any questions." / "I look forward to hearing from you." ; (5) Conclusion : "Yours sincerely," (quand vous connaissez le nom) ou "Yours faithfully," (quand vous ne le connaissez pas). Évitez les contractions dans les emails formels ("I am" et non "I\'m"). Notez la différence : l\'anglais britannique utilise "enquire/enquiry" tandis que l\'anglais américain utilise "inquire/inquiry".'
        },
        examples: [
          { en: 'Dear Ms Williams, I am writing to enquire about the marketing manager position advertised on your website.', fr: 'Chère Mme Williams, Je me permets de vous contacter au sujet du poste de responsable marketing annoncé sur votre site web.', speak: 'Dear Ms Williams, I am writing to enquire about the marketing manager position advertised on your website.' },
          { en: 'Please find attached my CV and cover letter for your consideration.', fr: 'Veuillez trouver ci-joint mon CV et ma lettre de motivation pour votre examen.', speak: 'Please find attached my CV and cover letter for your consideration.' },
          { en: 'I would be grateful if you could confirm receipt of this email.', fr: 'Je vous serais reconnaissant(e) de bien vouloir confirmer la réception de cet email.', speak: 'I would be grateful if you could confirm receipt of this email.' },
          { en: 'Should you require any further information, please do not hesitate to contact me.', fr: 'Si vous avez besoin d\'informations supplémentaires, n\'hésitez pas à me contacter.', speak: 'Should you require any further information, please do not hesitate to contact me.' },
          { en: 'I look forward to hearing from you at your earliest convenience.', fr: 'J\'attends votre réponse dans les meilleurs délais.', speak: 'I look forward to hearing from you at your earliest convenience.' },
          { en: 'Yours sincerely, Thomas Dupont.', fr: 'Cordialement, Thomas Dupont.', speak: 'Yours sincerely, Thomas Dupont.' }
        ],
        vocabulary: [
          { en: 'to enquire / to inquire', fr: 'se renseigner / demander', pronunciation: '/ɪnˈkwaɪər/', example: { en: 'I am writing to enquire about your services.', fr: 'Je vous écris pour me renseigner sur vos services.' } },
          { en: 'attached', fr: 'en pièce jointe', pronunciation: '/əˈtætʃt/', example: { en: 'Please find my CV attached.', fr: 'Veuillez trouver mon CV en pièce jointe.' } },
          { en: 'at your earliest convenience', fr: 'dans les meilleurs délais', pronunciation: '/ˈiːrliɪst kənˈviːniəns/', example: { en: 'Please reply at your earliest convenience.', fr: 'Veuillez répondre dans les meilleurs délais.' } },
          { en: 'receipt', fr: 'réception / accusé de réception', pronunciation: '/rɪˈsiːt/', example: { en: 'Please confirm receipt of this document.', fr: 'Veuillez confirmer la réception de ce document.' } },
          { en: 'cover letter', fr: 'lettre de motivation', pronunciation: '/ˈkʌvər ˈlɛtər/', example: { en: 'A strong cover letter is essential for a job application.', fr: 'Une bonne lettre de motivation est essentielle pour une candidature.' } },
          { en: 'to look forward to', fr: 'être impatient(e) de', pronunciation: '/lʊk ˈfɔːrwərd tuː/', example: { en: 'I look forward to meeting you.', fr: 'J\'ai hâte de vous rencontrer.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d5ex1',
          question: { en: 'You are writing to someone whose name you don\'t know. Which closing should you use?', fr: 'Vous écrivez à quelqu\'un dont vous ne connaissez pas le nom. Quelle formule de clôture devez-vous utiliser ?' },
          options: ['Yours sincerely,', 'Yours faithfully,', 'Best wishes,', 'Kind regards,'],
          correct: 1,
          explanation: { en: 'In British English, "Yours faithfully" is used when you open with "Dear Sir or Madam" (unknown name). "Yours sincerely" is used when you know the name and open with "Dear Mr/Ms [Name]".', fr: 'En anglais britannique, "Yours faithfully" est utilisé quand vous commencez par "Dear Sir or Madam" (nom inconnu). "Yours sincerely" est utilisé quand vous connaissez le nom et commencez par "Dear Mr/Ms [Nom]".' }
        },
        {
          type: 'fill',
          id: 'w2d5ex2',
          instruction: { en: 'Complete the email opening with the correct phrase', fr: 'Complétez l\'ouverture de l\'email avec la phrase correcte' },
          template: 'I am writing ___ enquire about the availability of your conference room on 15th March.',
          answer: 'to',
          hint: { en: 'The structure is "I am writing to + infinitive"', fr: 'La structure est "I am writing to + infinitif"' }
        },
        {
          type: 'match',
          id: 'w2d5ex3',
          instruction: { en: 'Match each email phrase to its function', fr: 'Associez chaque expression d\'email à sa fonction' },
          pairs: [
            { left: 'I am writing to enquire...', right: 'opening / stating purpose' },
            { left: 'Please find attached...', right: 'referring to an attachment' },
            { left: 'I look forward to hearing from you.', right: 'professional closing' },
            { left: 'Yours sincerely,', right: 'sign-off (name known)' }
          ]
        },
        {
          type: 'order',
          id: 'w2d5ex4',
          instruction: { en: 'Arrange the words to form a professional email sentence', fr: 'Arrangez les mots pour former une phrase professionnelle d\'email' },
          words: ['hesitate', 'not', 'do', 'Please', 'to', 'me', 'contact', 'if', 'need', 'you', 'information', 'further'],
          answer: 'Please do not hesitate to contact me if you need further information'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d5q1',
          question: { en: 'Why should you avoid contractions in formal emails?', fr: 'Pourquoi devriez-vous éviter les contractions dans les emails formels ?' },
          options: ['Because contractions are grammatically incorrect.', 'Because contractions make emails too informal and less professional.', 'Because native speakers never use contractions.', 'Because email software doesn\'t support contractions.'],
          correct: 1,
          explanation: { en: 'Contractions (I\'m, don\'t, we\'ve) are associated with informal, spoken English. In formal professional writing, full forms (I am, do not, we have) convey professionalism and respect.', fr: 'Les contractions (I\'m, don\'t, we\'ve) sont associées à l\'anglais informel et parlé. Dans la correspondance professionnelle formelle, les formes complètes (I am, do not, we have) transmettent professionnalisme et respect.' }
        },
        {
          type: 'mcq',
          id: 'w2d5q2',
          question: { en: 'What does "I look forward to hearing from you" express?', fr: 'Qu\'exprime "I look forward to hearing from you" ?' },
          options: ['A polite request for the recipient to reply soon.', 'A complaint that you haven\'t received a reply.', 'A way of saying goodbye permanently.', 'An instruction to call instead of email.'],
          correct: 0,
          explanation: { en: '"I look forward to hearing from you" is a standard professional closing phrase that politely signals you expect a reply. Note that "look forward to" is followed by a gerund (-ing), not an infinitive.', fr: '"I look forward to hearing from you" est une formule de clôture professionnelle standard qui indique poliment que vous attendez une réponse. Notez que "look forward to" est suivi d\'un gérondif (-ing), pas d\'un infinitif.' }
        },
        {
          type: 'mcq',
          id: 'w2d5q3',
          question: { en: 'What is the correct way to refer to a file you have included in an email?', fr: 'Quelle est la façon correcte de faire référence à un fichier inclus dans un email ?' },
          options: ['I have put a file here.', 'Please find attached the requested document.', 'Look at the thing I attached.', 'I added a document to this email.'],
          correct: 1,
          explanation: { en: '"Please find attached..." is the standard professional formula in English for referring to an email attachment. It is formal, clear and universally understood.', fr: '"Please find attached..." est la formule professionnelle standard en anglais pour faire référence à une pièce jointe. Elle est formelle, claire et universellement comprise.' }
        }
      ]
    },
    {
      day: 6,
      dayName: { en: 'Saturday', fr: 'Samedi' },
      title: { en: 'Job Interview Roleplay & Email Review', fr: 'Jeu de rôle d\'entretien et révision des emails' },
      icon: '🎭',
      theory: {
        intro: {
          en: 'Today we consolidate the entire week by combining interview language, Present Perfect grammar, and professional email writing in realistic contexts. You will practise reading a sample interview dialogue and email, then complete integrated exercises that test everything you have learned this week.',
          fr: 'Aujourd\'hui, nous consolidons toute la semaine en combinant le langage des entretiens, la grammaire du Present Perfect et la rédaction d\'emails professionnels dans des contextes réalistes. Vous pratiquerez la lecture d\'un exemple de dialogue d\'entretien et d\'un email, puis compléterez des exercices intégrés testant tout ce que vous avez appris cette semaine.'
        },
        grammarTitle: { en: 'A Complete Interview Exchange', fr: 'Un échange d\'entretien complet' },
        grammar: {
          en: 'Notice how a skilled interviewee combines three tenses fluidly: Present Perfect for general experience ("I have worked in marketing for seven years"), Past Simple for specific achievements ("Last year, I launched a campaign that increased engagement by 40%"), and Present Simple for current skills and motivation ("I am particularly skilled in digital strategy and I am very motivated by this role"). This tense variety makes answers sound more professional and credible than using only one tense throughout.',
          fr: 'Remarquez comment un candidat habile combine trois temps de manière fluide : le Present Perfect pour l\'expérience générale ("I have worked in marketing for seven years"), le Past Simple pour des réalisations précises ("Last year, I launched a campaign that increased engagement by 40%"), et le Present Simple pour les compétences actuelles et la motivation ("I am particularly skilled in digital strategy and I am very motivated by this role"). Cette variété de temps rend les réponses plus professionnelles et crédibles que l\'utilisation d\'un seul temps.'
        },
        examples: [
          { en: 'Interviewer: Tell me about your professional experience.', fr: 'Recruteur : Parlez-moi de votre expérience professionnelle.', speak: 'Tell me about your professional experience.' },
          { en: 'Candidate: I have worked in digital marketing for seven years. I started my career at a small agency, and last year, I managed a team of twelve at a major tech firm.', fr: 'Candidat : J\'ai travaillé dans le marketing digital pendant sept ans. J\'ai commencé ma carrière dans une petite agence, et l\'année dernière, j\'ai géré une équipe de douze personnes dans une grande entreprise technologique.', speak: 'I have worked in digital marketing for seven years. I started my career at a small agency, and last year, I managed a team of twelve at a major tech firm.' },
          { en: 'Interviewer: What is your greatest achievement so far?', fr: 'Recruteur : Quelle est votre plus grande réalisation jusqu\'à présent ?', speak: 'What is your greatest achievement so far?' },
          { en: 'Candidate: In my last role, I launched a social media campaign that increased our brand engagement by 45% in three months.', fr: 'Candidat : Dans mon dernier poste, j\'ai lancé une campagne sur les réseaux sociaux qui a augmenté l\'engagement de notre marque de 45% en trois mois.', speak: 'In my last role, I launched a social media campaign that increased our brand engagement by 45% in three months.' },
          { en: 'Interviewer: Where do you see yourself in five years?', fr: 'Recruteur : Où vous voyez-vous dans cinq ans ?', speak: 'Where do you see yourself in five years?' },
          { en: 'Candidate: My goal is to lead a marketing department and contribute to building a strong brand on an international scale.', fr: 'Candidat : Mon objectif est de diriger un département marketing et de contribuer à construire une marque forte à l\'échelle internationale.', speak: 'My goal is to lead a marketing department and contribute to building a strong brand on an international scale.' }
        ],
        vocabulary: [
          { en: 'candidate', fr: 'candidat(e)', pronunciation: '/ˈkændɪdɪt/', example: { en: 'The candidate impressed the panel.', fr: 'Le candidat a impressionné le jury.' } },
          { en: 'panel', fr: 'jury / commission', pronunciation: '/ˈpænəl/', example: { en: 'There were three people on the interview panel.', fr: 'Il y avait trois personnes dans le jury d\'entretien.' } },
          { en: 'to tailor', fr: 'adapter / personnaliser', pronunciation: '/ˈteɪlər/', example: { en: 'Tailor your answers to each company.', fr: 'Adaptez vos réponses à chaque entreprise.' } },
          { en: 'engagement', fr: 'engagement / implication', pronunciation: '/ɪnˈɡeɪdʒmənt/', example: { en: 'Customer engagement increased after the campaign.', fr: 'L\'engagement des clients a augmenté après la campagne.' } },
          { en: 'to contribute to', fr: 'contribuer à', pronunciation: '/kənˈtrɪbjuːt/', example: { en: 'I want to contribute to the company\'s growth.', fr: 'Je veux contribuer à la croissance de l\'entreprise.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w2d6ex1',
          question: { en: 'In the sample interview, which tense does the candidate use for a specific past achievement?', fr: 'Dans l\'exemple d\'entretien, quel temps le candidat utilise-t-il pour une réalisation précise dans le passé ?' },
          options: ['Present Perfect', 'Past Simple', 'Present Continuous', 'Past Perfect'],
          correct: 1,
          explanation: { en: '"I launched a social media campaign that increased our engagement by 45%" uses Past Simple because it refers to a specific, completed action in the past.', fr: '"I launched a social media campaign that increased our engagement by 45%" utilise le Past Simple car il fait référence à une action précise et accomplie dans le passé.' }
        },
        {
          type: 'fill',
          id: 'w2d6ex2',
          instruction: { en: 'Complete the interview answer using the correct tense', fr: 'Complétez la réponse d\'entretien en utilisant le bon temps' },
          template: 'I ___ (work) in finance for ten years, and in my last role, I ___ (reduce) costs by 20%.',
          answer: 'have worked',
          hint: { en: 'First blank = general experience (Present Perfect); Second blank = specific past action (Past Simple: reduced)', fr: 'Premier blanc = expérience générale (Present Perfect) ; Deuxième blanc = action passée précise (Past Simple : reduced)' }
        },
        {
          type: 'order',
          id: 'w2d6ex3',
          instruction: { en: 'Rearrange to form a correct professional email closing', fr: 'Réarrangez pour former une conclusion correcte d\'email professionnel' },
          words: ['forward', 'I', 'look', 'to', 'from', 'hearing', 'you'],
          answer: 'I look forward to hearing from you'
        },
        {
          type: 'flashcard',
          id: 'w2d6ex4',
          instruction: { en: 'Review key phrases from the full week', fr: 'Révisez les expressions clés de toute la semaine' },
          cards: [
            { front: 'I have worked in... for...', back: 'J\'ai travaillé dans... depuis/pendant...', example: { en: 'I have worked in finance for five years.', fr: 'J\'ai travaillé dans la finance depuis cinq ans.' } },
            { front: 'My greatest strength is...', back: 'Mon plus grand atout est...', example: { en: 'My greatest strength is leadership.', fr: 'Mon plus grand atout est le leadership.' } },
            { front: 'Please find attached...', back: 'Veuillez trouver en pièce jointe...', example: { en: 'Please find attached my CV.', fr: 'Veuillez trouver en pièce jointe mon CV.' } },
            { front: 'I look forward to hearing from you.', back: 'J\'attends votre réponse.', example: { en: 'I look forward to hearing from you soon.', fr: 'J\'attends votre réponse prochainement.' } },
            { front: 'Yours sincerely,', back: 'Cordialement,', example: { en: 'Used when you know the recipient\'s name.', fr: 'Utilisé quand vous connaissez le nom du destinataire.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w2d6q1',
          question: { en: 'Which combination of tenses is most effective in an interview answer about your career?', fr: 'Quelle combinaison de temps est la plus efficace dans une réponse d\'entretien sur votre carrière ?' },
          options: ['Only Present Simple', 'Only Past Simple', 'Present Perfect for experience + Past Simple for specific examples', 'Only Present Perfect'],
          correct: 2,
          explanation: { en: 'The most effective interview answers combine Present Perfect ("I have managed teams") for general experience with Past Simple ("In 2021, I increased sales by 30%") for specific, quantified achievements.', fr: 'Les réponses d\'entretien les plus efficaces combinent le Present Perfect ("I have managed teams") pour l\'expérience générale avec le Past Simple ("In 2021, I increased sales by 30%") pour des réalisations précises et quantifiées.' }
        },
        {
          type: 'mcq',
          id: 'w2d6q2',
          question: { en: 'You are writing a formal email to someone called Dr Chen. How should you open?', fr: 'Vous rédigez un email formel à quelqu\'un qui s\'appelle Dr Chen. Comment devez-vous commencer ?' },
          options: ['Hey Dr Chen!', 'Hello Dr Chen,', 'Dear Dr Chen,', 'Hi Chen,'],
          correct: 2,
          explanation: { en: '"Dear Dr Chen," is the correct formal salutation when writing to a named individual. Use the full title (Dr, Mr, Ms, Prof.) and a comma after the name.', fr: '"Dear Dr Chen," est la formule d\'appel formelle correcte quand on écrit à une personne nommée. Utilisez le titre complet (Dr, Mr, Ms, Prof.) et une virgule après le nom.' }
        },
        {
          type: 'mcq',
          id: 'w2d6q3',
          question: { en: 'What is wrong with this sentence: "I look forward to hear from you"?', fr: 'Qu\'est-ce qui ne va pas dans cette phrase : "I look forward to hear from you" ?' },
          options: ['Nothing — it is correct.', '"Forward" should be "forwards".', '"To" here is a preposition, so it must be followed by a gerund: "hearing", not "hear".', '"Hear" should be "hears".'],
          correct: 2,
          explanation: { en: 'In the phrase "look forward to", "to" is a PREPOSITION (not part of the infinitive), so it must be followed by a gerund (-ing form): "I look forward to hearing from you."', fr: 'Dans l\'expression "look forward to", "to" est une PRÉPOSITION (pas une partie de l\'infinitif), donc elle doit être suivie d\'un gérondif (forme en -ing) : "I look forward to hearing from you."' }
        }
      ]
    }
  ],
  sunday: {
    title: { en: 'Week 2 Review', fr: 'Révision — Semaine 2' },
    summary: {
      en: 'This week you built a solid professional vocabulary and mastered two key grammar points. You learned essential workplace words (deadline, feedback, promotion, workload) and how to use Present Perfect for experiences and duration, contrasting it with Past Simple for specific past events. You also practised high-stakes professional communication: job interview phrases and formal email structures.',
      fr: 'Cette semaine, vous avez construit un solide vocabulaire professionnel et maîtrisé deux points de grammaire essentiels. Vous avez appris des mots professionnels essentiels (deadline, feedback, promotion, workload) et comment utiliser le Present Perfect pour les expériences et la durée, en le contrastant avec le Past Simple pour des événements passés précis. Vous avez également pratiqué une communication professionnelle à enjeux élevés : les expressions d\'entretien d\'embauche et les structures d\'emails formels.'
    },
    vocabulary: [
      { en: 'deadline', fr: 'date limite', pronunciation: '/ˈdɛdlaɪn/' },
      { en: 'feedback', fr: 'retour / avis', pronunciation: '/ˈfiːdbæk/' },
      { en: 'promotion', fr: 'promotion', pronunciation: '/prəˈmoʊʃən/' },
      { en: 'workload', fr: 'charge de travail', pronunciation: '/ˈwɜːrkloʊd/' },
      { en: 'track record', fr: 'bilan professionnel', pronunciation: '/træk ˈrɛkərd/' },
      { en: 'proactive', fr: 'proactif', pronunciation: '/proʊˈæktɪv/' },
      { en: 'at your earliest convenience', fr: 'dans les meilleurs délais', pronunciation: '/ˈiːrliɪst kənˈviːniəns/' },
      { en: 'to excel at', fr: 'exceller dans', pronunciation: '/ɪkˈsɛl/' },
      { en: 'achievement', fr: 'réalisation / accomplissement', pronunciation: '/əˈtʃiːvmənt/' },
      { en: 'to contribute to', fr: 'contribuer à', pronunciation: '/kənˈtrɪbjuːt/' }
    ],
    grammarPoints: [
      {
        title: { en: 'Present Perfect — Key Uses', fr: 'Present Perfect — Utilisations clés' },
        rule: { en: 'have/has + past participle. Used for: (1) life experiences with no specific time (ever/never); (2) recent actions with present relevance (just); (3) ongoing situations (for/since). Signal words: already, yet, just, ever, never, recently, so far.', fr: 'have/has + participe passé. Utilisé pour : (1) expériences de vie sans moment précis (ever/never) ; (2) actions récentes avec pertinence présente (just) ; (3) situations en cours (for/since). Marqueurs : already, yet, just, ever, never, recently, so far.' },
        example: { en: 'I have worked here for five years. / She has just sent the report. / Have you ever managed a team?', fr: 'Je travaille ici depuis cinq ans. / Elle vient d\'envoyer le rapport. / Avez-vous déjà géré une équipe ?' }
      },
      {
        title: { en: 'Present Perfect vs Past Simple', fr: 'Present Perfect contre Past Simple' },
        rule: { en: 'Use Past Simple when you specify WHEN (yesterday, last year, in 2020, ago). Use Present Perfect when time is unspecified or the connection to the present matters. In interviews: PP for general experience, PS for specific achievements.', fr: 'Utilisez le Past Simple quand vous précisez QUAND (yesterday, last year, in 2020, ago). Utilisez le Present Perfect quand le moment n\'est pas précisé ou quand la connexion avec le présent compte. En entretien : PP pour l\'expérience générale, PS pour les réalisations précises.' },
        example: { en: 'I have worked in marketing for 7 years. / Last year, I increased sales by 30%.', fr: 'J\'ai travaillé dans le marketing pendant 7 ans. / L\'année dernière, j\'ai augmenté les ventes de 30%.' }
      },
      {
        title: { en: 'Professional Email Conventions', fr: 'Conventions des emails professionnels' },
        rule: { en: 'Open with "Dear [Name/Sir/Madam],". State purpose: "I am writing to...". Close with "I look forward to hearing from you." Sign off: "Yours sincerely" (name known) or "Yours faithfully" (name unknown). No contractions in formal emails.', fr: 'Commencez par "Dear [Nom/Sir/Madam],". Indiquez l\'objet : "I am writing to...". Concluez avec "I look forward to hearing from you." Formule finale : "Yours sincerely" (nom connu) ou "Yours faithfully" (nom inconnu). Pas de contractions dans les emails formels.' },
        example: { en: 'Dear Ms Smith, I am writing to enquire about the position... Yours sincerely, Paul Blanc.', fr: 'Chère Mme Smith, Je vous écris pour me renseigner sur le poste... Cordialement, Paul Blanc.' }
      }
    ],
    conversationTopics: [
      {
        title: { en: 'Your Career and Work Life', fr: 'Votre carrière et vie professionnelle' },
        prompts: [
          { en: 'What job do you do? How long have you worked in this field?', fr: 'Quel emploi exercez-vous ? Depuis combien de temps travaillez-vous dans ce domaine ?' },
          { en: 'What has been your greatest professional achievement so far?', fr: 'Quelle a été votre plus grande réalisation professionnelle jusqu\'à présent ?' },
          { en: 'Have you ever had a difficult manager or colleague? How did you deal with it?', fr: 'Avez-vous déjà eu un manager ou un collègue difficile ? Comment avez-vous géré cela ?' },
          { en: 'What are your professional strengths? Give a specific example.', fr: 'Quels sont vos points forts professionnels ? Donnez un exemple concret.' },
          { en: 'Where do you see yourself in five years\' time?', fr: 'Où vous voyez-vous dans cinq ans ?' }
        ]
      },
      {
        title: { en: 'The Future of Work', fr: 'L\'avenir du travail' },
        prompts: [
          { en: 'Do you prefer working remotely or in an office? What are the advantages of each?', fr: 'Préférez-vous le télétravail ou le bureau ? Quels sont les avantages de chacun ?' },
          { en: 'How has technology changed the way people work in the last ten years?', fr: 'Comment la technologie a-t-elle changé la façon dont les gens travaillent au cours des dix dernières années ?' },
          { en: 'Do you think a four-day working week is a good idea? Why or why not?', fr: 'Pensez-vous qu\'une semaine de travail de quatre jours est une bonne idée ? Pourquoi ?' },
          { en: 'What skills do you think will be most important in the workplace in twenty years?', fr: 'Quelles compétences pensez-vous seront les plus importantes au travail dans vingt ans ?' }
        ]
      }
    ]
  }
};
