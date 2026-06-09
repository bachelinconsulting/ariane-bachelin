const LESSONS_INTERMEDIATE_WEEK3 = {
  week: 3,
  level: 'intermediate',
  theme: { en: 'Health & Wellbeing', fr: 'Santé et bien-être' },
  days: [
    {
      day: 1,
      dayName: { en: 'Monday', fr: 'Lundi' },
      title: { en: 'Body Parts & Health Vocabulary', fr: 'Parties du corps et vocabulaire de la santé' },
      icon: '🩺',
      theory: {
        intro: {
          en: 'Health vocabulary is essential for everyday life — whether you need to describe a symptom to a doctor, buy medicine at a pharmacy, or simply talk about how you feel. This week we build a comprehensive health vocabulary and explore the grammar structures needed to talk about illness, plans for the future, and hypothetical situations related to wellbeing.',
          fr: 'Le vocabulaire de la santé est essentiel au quotidien — que vous ayez besoin de décrire un symptôme à un médecin, d\'acheter des médicaments à la pharmacie ou simplement de parler de comment vous vous sentez. Cette semaine, nous construisons un vocabulaire de la santé complet et explorons les structures grammaticales nécessaires pour parler de maladie, de projets pour l\'avenir et de situations hypothétiques liées au bien-être.'
        },
        grammarTitle: { en: 'Describing Symptoms and Medical Conditions', fr: 'Décrire des symptômes et des conditions médicales' },
        grammar: {
          en: 'In English, there are several patterns for describing health problems. For pain and discomfort: "I have a headache / a temperature / a rash" (use "a" with singular countable conditions); "I have a sore throat / sore muscles" (adjective before noun); "My back hurts" / "My knee is sore". For vomiting and nausea: "I feel sick / I feel nauseous". Note that "I am sick" in British English usually means vomiting, while in American English it more broadly means ill. "I don\'t feel well" is the safest, most universal expression. For duration: "I\'ve had this cough for three days" (Present Perfect with "for").',
          fr: 'En anglais, il existe plusieurs schémas pour décrire les problèmes de santé. Pour la douleur et l\'inconfort : "I have a headache / a temperature / a rash" (utilisez "a" avec des conditions dénombrables singulières) ; "I have a sore throat / sore muscles" (adjectif avant le nom) ; "My back hurts" / "My knee is sore". Pour les vomissements et la nausée : "I feel sick / I feel nauseous". Notez que "I am sick" en anglais britannique signifie généralement vomir, tandis qu\'en anglais américain cela signifie plus largement être malade. "I don\'t feel well" est l\'expression la plus sûre et la plus universelle. Pour la durée : "I\'ve had this cough for three days" (Present Perfect avec "for").'
        },
        examples: [
          { en: 'I\'ve had a terrible headache since this morning.', fr: 'J\'ai un terrible mal de tête depuis ce matin.', speak: 'I\'ve had a terrible headache since this morning.' },
          { en: 'She has a high temperature and a sore throat.', fr: 'Elle a une forte température et un mal de gorge.', speak: 'She has a high temperature and a sore throat.' },
          { en: 'I think I\'m coming down with a cold — I feel really run down.', fr: 'Je pense que je commence à avoir un rhume — je me sens vraiment épuisé(e).', speak: 'I think I\'m coming down with a cold — I feel really run down.' },
          { en: 'He\'s been feeling dizzy and has had a stomachache all day.', fr: 'Il se sent étourdi et a mal au ventre depuis toute la journée.', speak: 'He\'s been feeling dizzy and has had a stomachache all day.' },
          { en: 'I broke out in a rash after taking the new medication.', fr: 'J\'ai développé une éruption cutanée après avoir pris le nouveau médicament.', speak: 'I broke out in a rash after taking the new medication.' },
          { en: 'The doctor said I have a sprained ankle and need to rest for two weeks.', fr: 'Le médecin a dit que j\'ai une cheville foulée et que je dois me reposer pendant deux semaines.', speak: 'The doctor said I have a sprained ankle and need to rest for two weeks.' }
        ],
        vocabulary: [
          { en: 'headache', fr: 'mal de tête', pronunciation: '/ˈhɛdeɪk/', example: { en: 'I have a splitting headache.', fr: 'J\'ai un terrible mal de tête.' } },
          { en: 'fever / temperature', fr: 'fièvre / température', pronunciation: '/ˈfiːvər/', example: { en: 'He has a fever of 39 degrees.', fr: 'Il a une fièvre de 39 degrés.' } },
          { en: 'sore throat', fr: 'mal de gorge', pronunciation: '/sɔːr θroʊt/', example: { en: 'A sore throat is often the first sign of a cold.', fr: 'Un mal de gorge est souvent le premier signe d\'un rhume.' } },
          { en: 'symptom', fr: 'symptôme', pronunciation: '/ˈsɪmptəm/', example: { en: 'What are your main symptoms?', fr: 'Quels sont vos principaux symptômes ?' } },
          { en: 'prescription', fr: 'ordonnance', pronunciation: '/prɪˈskrɪpʃən/', example: { en: 'You need a prescription for this medication.', fr: 'Vous avez besoin d\'une ordonnance pour ce médicament.' } },
          { en: 'allergy', fr: 'allergie', pronunciation: '/ˈælərdʒi/', example: { en: 'I have a severe allergy to penicillin.', fr: 'J\'ai une allergie sévère à la pénicilline.' } },
          { en: 'to feel run down', fr: 'se sentir épuisé(e)', pronunciation: '/rʌn daʊn/', example: { en: 'I\'ve been feeling run down lately.', fr: 'Je me suis senti(e) épuisé(e) dernièrement.' } },
          { en: 'dizzy', fr: 'étourdi(e)', pronunciation: '/ˈdɪzi/', example: { en: 'I feel dizzy when I stand up too quickly.', fr: 'Je me sens étourdi(e) quand je me lève trop vite.' } }
        ]
      },
      exercises: [
        {
          type: 'match',
          id: 'w3d1ex1',
          instruction: { en: 'Match each health condition with its French equivalent', fr: 'Associez chaque problème de santé à son équivalent français' },
          pairs: [
            { left: 'headache', right: 'mal de tête' },
            { left: 'sore throat', right: 'mal de gorge' },
            { left: 'fever', right: 'fièvre' },
            { left: 'allergy', right: 'allergie' }
          ]
        },
        {
          type: 'mcq',
          id: 'w3d1ex2',
          question: { en: 'Which sentence correctly describes a symptom that has lasted for some time?', fr: 'Quelle phrase décrit correctement un symptôme qui dure depuis un certain temps ?' },
          options: ['I have a cough since three days.', 'I\'ve had this cough for three days.', 'I have this cough since three days.', 'I had a cough for three days.'],
          correct: 1,
          explanation: { en: 'Use Present Perfect + "for" to describe a condition that started in the past and continues now: "I\'ve had this cough for three days." Using "since" requires a specific point in time (since Monday, since yesterday morning).', fr: 'Utilisez le Present Perfect + "for" pour décrire une condition qui a commencé dans le passé et se poursuit maintenant : "I\'ve had this cough for three days." L\'utilisation de "since" nécessite un moment précis dans le temps (since Monday, since yesterday morning).' }
        },
        {
          type: 'fill',
          id: 'w3d1ex3',
          instruction: { en: 'Complete the sentence with the correct health vocabulary word', fr: 'Complétez la phrase avec le bon mot du vocabulaire de la santé' },
          template: 'The doctor gave me a ___ for antibiotics, which I can take to the pharmacy.',
          answer: 'prescription',
          hint: { en: 'An official document from a doctor authorising medication', fr: 'Un document officiel d\'un médecin autorisant des médicaments' }
        },
        {
          type: 'order',
          id: 'w3d1ex4',
          instruction: { en: 'Put the words in the right order to describe a symptom', fr: 'Mettez les mots dans le bon ordre pour décrire un symptôme' },
          words: ['had', 'I\'ve', 'a', 'throat', 'sore', 'two', 'for', 'days'],
          answer: 'I\'ve had a sore throat for two days'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d1q1',
          question: { en: 'What does "to feel run down" mean?', fr: 'Que signifie "to feel run down" ?' },
          options: ['To feel physically hit by a car', 'To feel exhausted and not at full health', 'To feel very fast and energetic', 'To feel angry about something'],
          correct: 1,
          explanation: { en: '"To feel run down" is an idiomatic expression meaning to feel tired, low in energy and generally unwell — as if your body\'s battery is running low.', fr: '"To feel run down" est une expression idiomatique signifiant se sentir fatigué(e), manquer d\'énergie et se sentir généralement mal — comme si la batterie de votre corps était presque à plat.' }
        },
        {
          type: 'mcq',
          id: 'w3d1q2',
          question: { en: 'What is the correct English structure for "J\'ai mal à la gorge"?', fr: 'Quelle est la structure anglaise correcte pour "J\'ai mal à la gorge" ?' },
          options: ['I have pain in the throat.', 'I have a sore throat.', 'My throat makes me pain.', 'I am throat-sick.'],
          correct: 1,
          explanation: { en: 'In English, we say "I have a sore throat" — using "sore" as an adjective before the body part. We don\'t say "I have pain in the throat" for this common condition.', fr: 'En anglais, on dit "I have a sore throat" — en utilisant "sore" comme adjectif avant la partie du corps. On ne dit pas "I have pain in the throat" pour ce problème courant.' }
        },
        {
          type: 'mcq',
          id: 'w3d1q3',
          question: { en: 'A doctor asks "Do you have any allergies?" — which answer is correct?', fr: 'Un médecin demande "Do you have any allergies?" — quelle réponse est correcte ?' },
          options: ['Yes, I am allergic in penicillin.', 'Yes, I have an allergy at penicillin.', 'Yes, I am allergic to penicillin.', 'Yes, I allergic with penicillin.'],
          correct: 2,
          explanation: { en: 'The correct structure is "allergic TO" something: "I am allergic to penicillin / to nuts / to cats." The preposition is always "to".', fr: 'La structure correcte est "allergic TO" quelque chose : "I am allergic to penicillin / to nuts / to cats." La préposition est toujours "to".' }
        }
      ]
    },
    {
      day: 2,
      dayName: { en: 'Tuesday', fr: 'Mardi' },
      title: { en: 'At the Doctor\'s', fr: 'Chez le médecin' },
      icon: '👨‍⚕️',
      theory: {
        intro: {
          en: 'Visiting a doctor in an English-speaking country requires specific language. You need to be able to describe where it hurts, how long you\'ve had the problem, and what makes it better or worse. Equally important is understanding what the doctor tells you. Today we master both sides of the medical consultation.',
          fr: 'Consulter un médecin dans un pays anglophone nécessite un vocabulaire spécifique. Vous devez être capable de décrire où vous avez mal, depuis combien de temps vous avez ce problème, et ce qui l\'améliore ou l\'aggrave. Il est tout aussi important de comprendre ce que le médecin vous dit. Aujourd\'hui, nous maîtrisons les deux côtés de la consultation médicale.'
        },
        grammarTitle: { en: 'Describing Pain and Medical Consultations', fr: 'Décrire la douleur et les consultations médicales' },
        grammar: {
          en: 'To describe the location of pain: "I have a pain in my chest / lower back / right shoulder." For when pain occurs: "It hurts when I breathe deeply / when I walk / when I touch it." To describe the nature of the pain: a sharp pain, a dull ache, a throbbing pain, a burning sensation, a stabbing pain. When asking for help: "Could you prescribe something for...?" / "Would it be possible to get a referral to a specialist?" / "Should I take this with food?" When understanding a diagnosis: doctors often use phrases like "It appears to be...", "I\'d like to run some tests", "I\'m going to prescribe you..." Note: in British English you "go to the doctor\'s" (implying the surgery/practice); you "see a doctor".',
          fr: 'Pour décrire l\'emplacement de la douleur : "I have a pain in my chest / lower back / right shoulder." Pour décrire quand la douleur survient : "It hurts when I breathe deeply / when I walk / when I touch it." Pour décrire la nature de la douleur : a sharp pain (une douleur aiguë), a dull ache (une douleur sourde), a throbbing pain (une douleur lancinante), a burning sensation (une sensation de brûlure), a stabbing pain (une douleur poignardante). Pour demander de l\'aide : "Could you prescribe something for...?" / "Would it be possible to get a referral to a specialist?" / "Should I take this with food?" Pour comprendre un diagnostic : les médecins utilisent souvent des expressions comme "It appears to be...", "I\'d like to run some tests", "I\'m going to prescribe you..."'
        },
        examples: [
          { en: 'I have a sharp pain in my lower back that started three days ago.', fr: 'J\'ai une douleur aiguë dans le bas du dos qui a commencé il y a trois jours.', speak: 'I have a sharp pain in my lower back that started three days ago.' },
          { en: 'It hurts when I try to lift anything heavy or bend down.', fr: 'Ça fait mal quand j\'essaie de soulever quelque chose de lourd ou de me pencher.', speak: 'It hurts when I try to lift anything heavy or bend down.' },
          { en: 'Could you prescribe something stronger? The over-the-counter tablets aren\'t helping.', fr: 'Pourriez-vous me prescrire quelque chose de plus fort ? Les comprimés vendus sans ordonnance ne m\'aident pas.', speak: 'Could you prescribe something stronger? The over-the-counter tablets aren\'t helping.' },
          { en: 'I\'m allergic to aspirin — is there an alternative you could recommend?', fr: 'Je suis allergique à l\'aspirine — y a-t-il une alternative que vous pourriez recommander ?', speak: 'I\'m allergic to aspirin — is there an alternative you could recommend?' },
          { en: 'Doctor: I\'d like to run a few blood tests to rule out anything serious.', fr: 'Médecin : Je voudrais faire quelques analyses de sang pour exclure tout problème grave.', speak: 'I\'d like to run a few blood tests to rule out anything serious.' },
          { en: 'How many times a day should I take this medication, and should I take it with food?', fr: 'Combien de fois par jour dois-je prendre ce médicament, et dois-je le prendre avec de la nourriture ?', speak: 'How many times a day should I take this medication, and should I take it with food?' }
        ],
        vocabulary: [
          { en: 'sharp pain', fr: 'douleur aiguë', pronunciation: '/ʃɑːrp peɪn/', example: { en: 'I feel a sharp pain when I breathe.', fr: 'Je ressens une douleur aiguë quand je respire.' } },
          { en: 'dull ache', fr: 'douleur sourde', pronunciation: '/dʌl eɪk/', example: { en: 'There\'s a dull ache in my left shoulder.', fr: 'J\'ai une douleur sourde dans l\'épaule gauche.' } },
          { en: 'to prescribe', fr: 'prescrire', pronunciation: '/prɪˈskraɪb/', example: { en: 'The doctor prescribed antibiotics.', fr: 'Le médecin a prescrit des antibiotiques.' } },
          { en: 'to run tests', fr: 'faire des examens', pronunciation: '/rʌn tɛsts/', example: { en: 'They need to run some blood tests.', fr: 'Ils doivent faire des analyses de sang.' } },
          { en: 'referral', fr: 'orientation / aiguillage', pronunciation: '/rɪˈfɜːrəl/', example: { en: 'I got a referral to a cardiologist.', fr: 'J\'ai été orienté(e) vers un cardiologue.' } },
          { en: 'over-the-counter', fr: 'sans ordonnance', pronunciation: '/ˌoʊvər ðə ˈkaʊntər/', example: { en: 'Ibuprofen is available over-the-counter.', fr: 'L\'ibuprofène est disponible sans ordonnance.' } },
          { en: 'to rule out', fr: 'exclure / écarter', pronunciation: '/ruːl aʊt/', example: { en: 'The tests ruled out anything serious.', fr: 'Les examens ont exclu tout problème grave.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w3d2ex1',
          question: { en: 'How would you politely ask a doctor to prescribe stronger medication?', fr: 'Comment demanderiez-vous poliment à un médecin de prescrire des médicaments plus forts ?' },
          options: ['Give me something stronger!', 'I want better medicine.', 'Could you prescribe something a little stronger, please?', 'This medicine is bad.'],
          correct: 2,
          explanation: { en: '"Could you prescribe something a little stronger, please?" is polite, respectful and uses the appropriate modal verb for a request in a formal medical context.', fr: '"Could you prescribe something a little stronger, please?" est poli, respectueux et utilise le verbe modal approprié pour une demande dans un contexte médical formel.' }
        },
        {
          type: 'fill',
          id: 'w3d2ex2',
          instruction: { en: 'Complete the patient\'s description of their pain', fr: 'Complétez la description de la douleur du patient' },
          template: 'It really ___ when I try to turn my head to the right.',
          answer: 'hurts',
          hint: { en: 'A verb meaning "to cause pain": It ___ when I...', fr: 'Un verbe signifiant "faire mal" : It ___ when I...' }
        },
        {
          type: 'match',
          id: 'w3d2ex3',
          instruction: { en: 'Match each type of pain to its description', fr: 'Associez chaque type de douleur à sa description' },
          pairs: [
            { left: 'sharp pain', right: 'douleur aiguë et intense' },
            { left: 'dull ache', right: 'douleur sourde et persistante' },
            { left: 'throbbing pain', right: 'douleur lancinante, qui bat' },
            { left: 'burning sensation', right: 'sensation de brûlure' }
          ]
        },
        {
          type: 'order',
          id: 'w3d2ex4',
          instruction: { en: 'Arrange the words to describe a medical symptom clearly', fr: 'Arrangez les mots pour décrire clairement un symptôme médical' },
          words: ['pain', 'have', 'in', 'my', 'a', 'I', 'chest', 'sharp'],
          answer: 'I have a sharp pain in my chest'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d2q1',
          question: { en: 'What does "over-the-counter medication" mean?', fr: 'Que signifie "over-the-counter medication" ?' },
          options: ['Medication that is very expensive', 'Medication you can buy without a doctor\'s prescription', 'Medication kept on a high shelf', 'Medication prescribed by a specialist only'],
          correct: 1,
          explanation: { en: '"Over-the-counter" (OTC) refers to medicines you can buy directly at a pharmacy without needing a doctor\'s prescription. The opposite is "prescription-only medication".', fr: '"Over-the-counter" (OTC) désigne les médicaments que vous pouvez acheter directement en pharmacie sans avoir besoin d\'une ordonnance. L\'opposé est "prescription-only medication".' }
        },
        {
          type: 'mcq',
          id: 'w3d2q2',
          question: { en: 'A doctor says "I\'d like to run some tests to rule out anything serious." What does this mean?', fr: 'Un médecin dit "I\'d like to run some tests to rule out anything serious." Qu\'est-ce que cela signifie ?' },
          options: ['The doctor thinks the situation is very serious.', 'The doctor wants to do tests to confirm it is serious.', 'The doctor wants to do tests to make sure it is not serious.', 'The doctor is unable to diagnose you.'],
          correct: 2,
          explanation: { en: '"To rule out" means to eliminate something as a possibility. "Running tests to rule out anything serious" means doing tests to confirm there is nothing serious to worry about.', fr: '"To rule out" signifie éliminer quelque chose comme possibilité. "Running tests to rule out anything serious" signifie faire des examens pour confirmer qu\'il n\'y a rien de grave à craindre.' }
        },
        {
          type: 'mcq',
          id: 'w3d2q3',
          question: { en: 'Which sentence correctly asks about the dosage of a medication?', fr: 'Quelle phrase demande correctement la posologie d\'un médicament ?' },
          options: ['How many I take this?', 'How much I take?', 'How many times a day should I take this?', 'When I take the medicine?'],
          correct: 2,
          explanation: { en: '"How many times a day should I take this?" is the grammatically correct and natural way to ask about dosage frequency. "Should I" is the appropriate modal for seeking advice/instructions.', fr: '"How many times a day should I take this?" est la façon grammaticalement correcte et naturelle de demander la fréquence de la posologie. "Should I" est le modal approprié pour chercher des conseils/instructions.' }
        }
      ]
    },
    {
      day: 3,
      dayName: { en: 'Wednesday', fr: 'Mercredi' },
      title: { en: 'Future with "will" — Predictions & Spontaneous Decisions', fr: 'Le futur avec "will" — Prédictions et décisions spontanées' },
      icon: '🔮',
      theory: {
        intro: {
          en: 'English has two main ways to talk about the future: "will" and "going to". They are not interchangeable! Today we focus on "will", which has two specific and distinct uses: making predictions about the future (often based on opinion or belief) and expressing spontaneous decisions made at the moment of speaking.',
          fr: 'L\'anglais a deux façons principales de parler du futur : "will" et "going to". Ils ne sont pas interchangeables ! Aujourd\'hui, nous nous concentrons sur "will", qui a deux utilisations spécifiques et distinctes : faire des prédictions sur l\'avenir (souvent basées sur une opinion ou une croyance) et exprimer des décisions spontanées prises au moment de parler.'
        },
        grammarTitle: { en: '"Will" — Two Key Uses', fr: '"Will" — Deux utilisations clés' },
        grammar: {
          en: 'Structure: Subject + will + base verb (positive); Subject + won\'t + base verb (negative); Will + subject + base verb? (question). Use 1 — Predictions based on belief or evidence: "I think it will rain later", "Doctors believe the patient will recover fully", "This medication won\'t work overnight". Signal phrases: "I think...", "I believe...", "I\'m sure...", "probably". Use 2 — Spontaneous decisions (decided at the moment of speaking, not planned before): "I have a headache." — "Don\'t worry, I\'ll get you some paracetamol." / "She looks pale." — "I\'ll call the doctor right away." This is the key difference from "going to": "going to" is for pre-planned intentions, while "will" is for in-the-moment decisions.',
          fr: 'Structure : Sujet + will + verbe de base (positif) ; Sujet + won\'t + verbe de base (négatif) ; Will + sujet + verbe de base ? (question). Utilisation 1 — Prédictions basées sur des croyances ou des preuves : "I think it will rain later", "Doctors believe the patient will recover fully", "This medication won\'t work overnight". Expressions marqueurs : "I think...", "I believe...", "I\'m sure...", "probably". Utilisation 2 — Décisions spontanées (décidées au moment de parler, non planifiées auparavant) : "I have a headache." — "Don\'t worry, I\'ll get you some paracetamol." / "She looks pale." — "I\'ll call the doctor right away." C\'est la différence clé avec "going to" : "going to" est pour les intentions pré-planifiées, tandis que "will" est pour les décisions prises sur le moment.'
        },
        examples: [
          { en: 'I think this cold will clear up in a few days if you rest properly.', fr: 'Je pense que ce rhume disparaîtra en quelques jours si vous vous reposez correctement.', speak: 'I think this cold will clear up in a few days if you rest properly.' },
          { en: 'It won\'t be easy to change your diet overnight, but it will be worth it.', speak: 'It won\'t be easy to change your diet overnight, but it will be worth it.', fr: 'Il ne sera pas facile de changer votre alimentation du jour au lendemain, mais ça en vaudra la peine.' },
          { en: '"I feel dizzy." — "Sit down! I\'ll get you a glass of water."', fr: '"Je me sens étourdi(e)." — "Asseyez-vous ! Je vais vous chercher un verre d\'eau."', speak: 'Sit down! I\'ll get you a glass of water.' },
          { en: 'Experts predict that the flu season will be particularly severe this year.', fr: 'Les experts prédisent que la saison grippale sera particulièrement sévère cette année.', speak: 'Experts predict that the flu season will be particularly severe this year.' },
          { en: '"This injection will hurt a little, but it will protect you for the whole year."', fr: '"Cette injection fera un peu mal, mais elle vous protégera pour toute l\'année."', speak: 'This injection will hurt a little, but it will protect you for the whole year.' },
          { en: 'I\'m sure you\'ll feel much better once the antibiotics start working.', fr: 'Je suis sûr(e) que vous vous sentirez beaucoup mieux une fois que les antibiotiques commenceront à agir.', speak: 'I\'m sure you\'ll feel much better once the antibiotics start working.' }
        ],
        vocabulary: [
          { en: 'to recover', fr: 'se remettre / guérir', pronunciation: '/rɪˈkʌvər/', example: { en: 'She will recover fully within six weeks.', fr: 'Elle se remettra complètement en six semaines.' } },
          { en: 'to clear up', fr: 'se dissiper / guérir (une infection)', pronunciation: '/klɪər ʌp/', example: { en: 'The infection should clear up with antibiotics.', fr: 'L\'infection devrait guérir avec des antibiotiques.' } },
          { en: 'overnight', fr: 'du jour au lendemain', pronunciation: '/ˌoʊvərˈnaɪt/', example: { en: 'Change doesn\'t happen overnight.', fr: 'Le changement ne se fait pas du jour au lendemain.' } },
          { en: 'prediction', fr: 'prédiction', pronunciation: '/prɪˈdɪkʃən/', example: { en: 'His prediction was completely wrong.', fr: 'Sa prédiction était complètement erronée.' } },
          { en: 'spontaneous', fr: 'spontané(e)', pronunciation: '/spɒnˈteɪniəs/', example: { en: 'It was a spontaneous decision to go to the gym.', fr: 'C\'était une décision spontanée d\'aller à la gym.' } },
          { en: 'side effect', fr: 'effet secondaire', pronunciation: '/saɪd ɪˈfɛkt/', example: { en: 'Some medications have unpleasant side effects.', fr: 'Certains médicaments ont des effets secondaires désagréables.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w3d3ex1',
          question: { en: 'Your friend says "I have a headache." You spontaneously decide to help. Which response uses "will" correctly?', fr: 'Votre ami dit "I have a headache." Vous décidez spontanément de l\'aider. Quelle réponse utilise "will" correctement ?' },
          options: ['I\'m going to get you some paracetamol later.', 'I\'ll get you some paracetamol right now.', 'I get you some paracetamol.', 'I am getting you paracetamol.'],
          correct: 1,
          explanation: { en: '"I\'ll get you some paracetamol right now" uses "will" for a spontaneous decision made in the moment. "I\'m going to get" implies a pre-planned action, which doesn\'t fit this context.', fr: '"I\'ll get you some paracetamol right now" utilise "will" pour une décision spontanée prise sur le moment. "I\'m going to get" implique une action planifiée à l\'avance, ce qui ne convient pas à ce contexte.' }
        },
        {
          type: 'fill',
          id: 'w3d3ex2',
          instruction: { en: 'Complete with "will" or "won\'t" to make a logical prediction', fr: 'Complétez avec "will" ou "won\'t" pour faire une prédiction logique' },
          template: 'I think your headache ___ get better once you drink some water and rest.',
          answer: 'will',
          hint: { en: 'A positive prediction about what you expect to happen', fr: 'Une prédiction positive sur ce que vous attendez qu\'il se passe' }
        },
        {
          type: 'order',
          id: 'w3d3ex3',
          instruction: { en: 'Rearrange to form a correct prediction sentence', fr: 'Réarrangez pour former une phrase de prédiction correcte' },
          words: ['feel', 'You\'ll', 'after', 'better', 'much', 'you', 'rest'],
          answer: 'You\'ll feel much better after you rest'
        },
        {
          type: 'flashcard',
          id: 'w3d3ex4',
          instruction: { en: 'Review the two uses of "will" with health examples', fr: 'Révisez les deux utilisations de "will" avec des exemples de santé' },
          cards: [
            { front: 'Prediction', back: 'I think it will rain — take an umbrella.', example: { en: 'I believe the patient will recover.', fr: 'Je crois que le patient va guérir.' } },
            { front: 'Spontaneous decision', back: 'I\'ll call the ambulance!', example: { en: 'She\'s fainted — I\'ll call for help.', fr: 'Elle s\'est évanouie — je vais appeler à l\'aide.' } },
            { front: 'Negative prediction: won\'t', back: 'It won\'t be easy.', example: { en: 'The pain won\'t go away on its own.', fr: 'La douleur ne disparaîtra pas d\'elle-même.' } },
            { front: 'Prediction marker: "I think..."', back: '"I think" + will + base verb', example: { en: 'I think you\'ll be fine.', fr: 'Je pense que vous irez bien.' } },
            { front: 'Prediction marker: "probably"', back: 'Subject + will + probably', example: { en: 'You\'ll probably feel tired after the anaesthetic.', fr: 'Vous vous sentirez probablement fatigué(e) après l\'anesthésie.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d3q1',
          question: { en: 'Which sentence shows a SPONTANEOUS decision with "will"?', fr: 'Quelle phrase montre une décision SPONTANÉE avec "will" ?' },
          options: ['I\'m going to start exercising next month.', 'I will probably recover in a week.', 'Oh, you need a tissue? I\'ll get one.', 'She will visit the doctor tomorrow morning.'],
          correct: 2,
          explanation: { en: '"I\'ll get one" is spontaneous — the decision is made at the exact moment of speaking, in response to what\'s happening right now. The other options are either pre-planned (going to) or predictions.', fr: '"I\'ll get one" est spontané — la décision est prise exactement au moment de parler, en réponse à ce qui se passe maintenant. Les autres options sont soit pré-planifiées (going to) soit des prédictions.' }
        },
        {
          type: 'mcq',
          id: 'w3d3q2',
          question: { en: 'How do you form the negative of "will"?', fr: 'Comment forme-t-on le négatif de "will" ?' },
          options: ['will not / won\'t + base verb', 'don\'t will + base verb', 'will + not + verb-ing', 'didn\'t will + base verb'],
          correct: 0,
          explanation: { en: 'The negative of "will" is "will not" or its contraction "won\'t" followed by the base form of the verb: "She won\'t be able to come to the appointment."', fr: 'Le négatif de "will" est "will not" ou sa contraction "won\'t" suivi de la forme de base du verbe : "She won\'t be able to come to the appointment."' }
        },
        {
          type: 'mcq',
          id: 'w3d3q3',
          question: { en: 'Which phrase is a typical signal that "will" is being used for a prediction?', fr: 'Quelle expression est un signal typique que "will" est utilisé pour une prédiction ?' },
          options: ['Last year', 'I\'ve decided to', 'I think / I\'m sure / probably', 'Right now'],
          correct: 2,
          explanation: { en: '"I think", "I\'m sure", "I believe", "probably", "I expect" — these are all opinion markers that signal a prediction and are typically used with "will".', fr: '"I think", "I\'m sure", "I believe", "probably", "I expect" — ce sont tous des marqueurs d\'opinion qui signalent une prédiction et sont généralement utilisés avec "will".' }
        }
      ]
    },
    {
      day: 4,
      dayName: { en: 'Thursday', fr: 'Jeudi' },
      title: { en: 'Future with "going to" — Plans & Intentions', fr: 'Le futur avec "going to" — Projets et intentions' },
      icon: '📋',
      theory: {
        intro: {
          en: 'Yesterday you learned "will" for predictions and spontaneous decisions. Today we look at "going to", which is used for pre-planned intentions and for predictions based on visible, present evidence. Understanding the difference between "will" and "going to" is a crucial step in sounding natural in English.',
          fr: 'Hier, vous avez appris "will" pour les prédictions et les décisions spontanées. Aujourd\'hui, nous étudions "going to", qui est utilisé pour les intentions pré-planifiées et pour les prédictions basées sur des preuves visibles et présentes. Comprendre la différence entre "will" et "going to" est une étape cruciale pour paraître naturel en anglais.'
        },
        grammarTitle: { en: '"Going to" — Two Key Uses', fr: '"Going to" — Deux utilisations clés' },
        grammar: {
          en: 'Structure: Subject + am/is/are + going to + base verb. Use 1 — Pre-planned intentions (decided BEFORE the moment of speaking): "I\'m going to see a doctor tomorrow" (appointment already made/decision already taken); "She\'s going to start a healthy eating plan next week." Use 2 — Predictions based on present evidence (something you can see/hear/feel NOW): "Look at those clouds — it\'s going to rain." / "He\'s very pale — I think he\'s going to faint." The evidence is visible in the present. Contrast: "I\'ll help you" (spontaneous — just decided) vs "I\'m going to help you" (planned — already decided before this moment). In health: "I\'m going to quit smoking" (firm decision, plan) vs "I think this will help" (prediction/opinion).',
          fr: 'Structure : Sujet + am/is/are + going to + verbe de base. Utilisation 1 — Intentions pré-planifiées (décidées AVANT le moment de parler) : "I\'m going to see a doctor tomorrow" (rendez-vous déjà pris/décision déjà prise) ; "She\'s going to start a healthy eating plan next week." Utilisation 2 — Prédictions basées sur des preuves présentes (quelque chose que vous pouvez voir/entendre/ressentir MAINTENANT) : "Look at those clouds — it\'s going to rain." / "He\'s very pale — I think he\'s going to faint." Les preuves sont visibles dans le présent. Contraste : "I\'ll help you" (spontané — vient de décider) vs "I\'m going to help you" (planifié — déjà décidé avant ce moment). En santé : "I\'m going to quit smoking" (décision ferme, plan) vs "I think this will help" (prédiction/opinion).'
        },
        examples: [
          { en: 'I\'m going to exercise more regularly — I\'ve already signed up for a gym.', fr: 'Je vais faire de l\'exercice plus régulièrement — je me suis déjà inscrit(e) dans une salle de sport.', speak: 'I\'m going to exercise more regularly — I\'ve already signed up for a gym.' },
          { en: 'She\'s going to see a nutritionist next Tuesday to discuss her diet.', fr: 'Elle va voir un nutritionniste mardi prochain pour parler de son alimentation.', speak: 'She\'s going to see a nutritionist next Tuesday to discuss her diet.' },
          { en: 'Look out — he\'s going to trip on that step! (evidence: I can see it\'s going to happen)', fr: 'Attention — il va trébucher sur cette marche ! (preuve : je peux voir que ça va arriver)', speak: 'Look out — he\'s going to trip on that step!' },
          { en: 'I\'m going to cut down on sugar and stop eating processed food.', fr: 'Je vais réduire ma consommation de sucre et arrêter de manger des aliments transformés.', speak: 'I\'m going to cut down on sugar and stop eating processed food.' },
          { en: 'Are you going to take the medication the doctor prescribed?', fr: 'Allez-vous prendre les médicaments prescrits par le médecin ?', speak: 'Are you going to take the medication the doctor prescribed?' },
          { en: 'He\'s not going to recover quickly if he doesn\'t follow the doctor\'s advice.', fr: 'Il ne va pas guérir rapidement s\'il ne suit pas les conseils du médecin.', speak: 'He\'s not going to recover quickly if he doesn\'t follow the doctor\'s advice.' }
        ],
        vocabulary: [
          { en: 'to cut down on', fr: 'réduire / diminuer', pronunciation: '/kʌt daʊn ɒn/', example: { en: 'I need to cut down on caffeine.', fr: 'Je dois réduire ma consommation de caféine.' } },
          { en: 'to quit', fr: 'arrêter / cesser', pronunciation: '/kwɪt/', example: { en: 'He\'s going to quit smoking.', fr: 'Il va arrêter de fumer.' } },
          { en: 'nutritionist', fr: 'nutritionniste', pronunciation: '/njuːˈtrɪʃənɪst/', example: { en: 'She consulted a nutritionist about her diet.', fr: 'Elle a consulté un nutritionniste au sujet de son alimentation.' } },
          { en: 'lifestyle change', fr: 'changement de mode de vie', pronunciation: '/ˈlaɪfstaɪl tʃeɪndʒ/', example: { en: 'A lifestyle change is needed for better health.', fr: 'Un changement de mode de vie est nécessaire pour une meilleure santé.' } },
          { en: 'to be in good shape', fr: 'être en bonne forme', pronunciation: '/ɡʊd ʃeɪp/', example: { en: 'I want to be in better shape by summer.', fr: 'Je veux être en meilleure forme pour l\'été.' } },
          { en: 'evidence', fr: 'preuve / signe', pronunciation: '/ˈɛvɪdəns/', example: { en: 'There is evidence that diet affects mood.', fr: 'Il y a des preuves que l\'alimentation affecte l\'humeur.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w3d4ex1',
          question: { en: 'Which sentence uses "going to" correctly for a pre-planned intention?', fr: 'Quelle phrase utilise correctement "going to" pour une intention pré-planifiée ?' },
          options: ['I\'m going to help you! (said at the moment someone asks for help)', 'I think it\'s going to rain today.', 'I\'m going to start therapy next month — I\'ve already booked my first session.', 'Oh, you\'re tired? I\'m going to get you a coffee.'],
          correct: 2,
          explanation: { en: '"I\'m going to start therapy next month — I\'ve already booked my first session" shows a pre-planned decision (evidence: the session is already booked). The other options are either spontaneous decisions (will) or evidence-based predictions.', fr: '"I\'m going to start therapy next month — I\'ve already booked my first session" montre une décision pré-planifiée (preuve : la session est déjà réservée). Les autres options sont soit des décisions spontanées (will) soit des prédictions basées sur des preuves.' }
        },
        {
          type: 'fill',
          id: 'w3d4ex2',
          instruction: { en: 'Complete the sentence with the correct form of "going to"', fr: 'Complétez la phrase avec la forme correcte de "going to"' },
          template: 'She ___ (see) a physiotherapist twice a week for her back injury.',
          answer: 'is going to see',
          hint: { en: 'Pre-planned appointment: is/am/are + going to + base verb', fr: 'Rendez-vous planifié à l\'avance : is/am/are + going to + verbe de base' }
        },
        {
          type: 'match',
          id: 'w3d4ex3',
          instruction: { en: 'Match each situation to the correct use of "will" or "going to"', fr: 'Associez chaque situation à l\'utilisation correcte de "will" ou "going to"' },
          pairs: [
            { left: 'Pre-planned intention', right: 'going to' },
            { left: 'Spontaneous decision', right: 'will' },
            { left: 'Prediction with present evidence', right: 'going to' },
            { left: 'Prediction based on opinion', right: 'will' }
          ]
        },
        {
          type: 'order',
          id: 'w3d4ex4',
          instruction: { en: 'Arrange the words to form a correct "going to" sentence', fr: 'Arrangez les mots pour former une phrase correcte avec "going to"' },
          words: ['cut', 'going', 'I\'m', 'down', 'on', 'to', 'sugar', 'refined'],
          answer: 'I\'m going to cut down on refined sugar'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d4q1',
          question: { en: 'What is the main difference between "I\'ll help you" and "I\'m going to help you"?', fr: 'Quelle est la principale différence entre "I\'ll help you" et "I\'m going to help you" ?' },
          options: ['There is no difference.', '"I\'ll help you" = spontaneous decision; "I\'m going to help you" = pre-planned.', '"I\'m going to help you" = spontaneous; "I\'ll help you" = pre-planned.', '"Will" is more formal; "going to" is informal.'],
          correct: 1,
          explanation: { en: 'This is a crucial distinction: "will" for spontaneous decisions (just decided right now) and "going to" for pre-planned intentions (decided before this moment).', fr: 'C\'est une distinction cruciale : "will" pour les décisions spontanées (décidées juste maintenant) et "going to" pour les intentions pré-planifiées (décidées avant ce moment).' }
        },
        {
          type: 'mcq',
          id: 'w3d4q2',
          question: { en: 'Look at this context: You see someone suddenly turn pale and start to fall. What do you say?', fr: 'Regardez ce contexte : vous voyez quelqu\'un pâlir soudainement et commencer à tomber. Que dites-vous ?' },
          options: ['I think he will faint.', 'He\'s going to faint!', 'He will probably faint tomorrow.', 'He fainted.'],
          correct: 1,
          explanation: { en: '"He\'s going to faint!" uses "going to" for a prediction based on present, visible evidence (you can see it\'s about to happen right now). "Will" would be used for an opinion-based prediction without clear evidence.', fr: '"He\'s going to faint!" utilise "going to" pour une prédiction basée sur des preuves visibles présentes (vous pouvez voir que ça va se produire maintenant). "Will" serait utilisé pour une prédiction basée sur une opinion sans preuve claire.' }
        },
        {
          type: 'mcq',
          id: 'w3d4q3',
          question: { en: 'What does "to cut down on" mean?', fr: 'Que signifie "to cut down on" ?' },
          options: ['To completely stop doing something', 'To reduce the amount or frequency of something', 'To cut something with scissors', 'To write something down quickly'],
          correct: 1,
          explanation: { en: '"To cut down on" means to reduce the amount or frequency of something, but not necessarily stop completely. "I\'m going to cut down on sugar" means eating less sugar, but not eliminating it entirely.', fr: '"To cut down on" signifie réduire la quantité ou la fréquence de quelque chose, mais pas nécessairement s\'arrêter complètement. "I\'m going to cut down on sugar" signifie manger moins de sucre, mais pas l\'éliminer complètement.' }
        }
      ]
    },
    {
      day: 5,
      dayName: { en: 'Friday', fr: 'Vendredi' },
      title: { en: 'First Conditional — If + Present, Will + Infinitive', fr: 'Le premier conditionnel — If + présent, will + infinitif' },
      icon: '🔁',
      theory: {
        intro: {
          en: 'The First Conditional is used to talk about real, possible future situations and their likely results. It\'s extremely common in everyday conversations about health, plans, and decisions. Unlike the Second Conditional (which we\'ll cover next week for hypothetical situations), the First Conditional describes situations that are genuinely likely to happen.',
          fr: 'Le Premier Conditionnel est utilisé pour parler de situations futures réelles et possibles et de leurs résultats probables. Il est extrêmement courant dans les conversations quotidiennes sur la santé, les projets et les décisions. Contrairement au Deuxième Conditionnel (que nous verrons la semaine prochaine pour les situations hypothétiques), le Premier Conditionnel décrit des situations qui sont véritablement susceptibles de se produire.'
        },
        grammarTitle: { en: 'First Conditional: Structure and Nuances', fr: 'Premier Conditionnel : Structure et nuances' },
        grammar: {
          en: 'Structure: If + Present Simple, will + base verb. Example: "If you rest today, you will feel better tomorrow." Important notes: (1) The IF clause always uses Present Simple (never "will" after "if"): "If you WILL take..." is WRONG — say "If you TAKE..."; (2) The two clauses can swap positions: "You will feel better if you rest" — same meaning; (3) Use "unless" as a negative conditional: "Unless you take the medication, you won\'t recover" (= "If you don\'t take the medication..."); (4) Variations: "might" instead of "will" for less certain results: "If you exercise, you might lose some weight." "Should" for advice: "If you have a fever, you should see a doctor." "Can" for ability: "If the test is negative, you can go home."',
          fr: 'Structure : If + Present Simple, will + verbe de base. Exemple : "If you rest today, you will feel better tomorrow." Notes importantes : (1) La proposition IF utilise toujours le Present Simple (jamais "will" après "if") : "If you WILL take..." est FAUX — dites "If you TAKE..." ; (2) Les deux propositions peuvent changer de place : "You will feel better if you rest" — même signification ; (3) Utilisez "unless" comme conditionnel négatif : "Unless you take the medication, you won\'t recover" (= "If you don\'t take the medication...") ; (4) Variations : "might" au lieu de "will" pour des résultats moins certains : "If you exercise, you might lose some weight." "Should" pour les conseils : "If you have a fever, you should see a doctor." "Can" pour la capacité : "If the test is negative, you can go home."'
        },
        examples: [
          { en: 'If you eat more fruit and vegetables, you will have more energy.', fr: 'Si vous mangez plus de fruits et de légumes, vous aurez plus d\'énergie.', speak: 'If you eat more fruit and vegetables, you will have more energy.' },
          { en: 'You won\'t recover properly unless you get enough sleep.', fr: 'Vous ne vous remettrez pas correctement à moins de dormir suffisamment.', speak: 'You won\'t recover properly unless you get enough sleep.' },
          { en: 'If you feel worse tomorrow, you should go back to the doctor.', fr: 'Si vous vous sentez plus mal demain, vous devriez retourner chez le médecin.', speak: 'If you feel worse tomorrow, you should go back to the doctor.' },
          { en: 'If the test results are clear, you can leave the hospital this evening.', fr: 'Si les résultats des tests sont clairs, vous pouvez quitter l\'hôpital ce soir.', speak: 'If the test results are clear, you can leave the hospital this evening.' },
          { en: 'If you take too much of this medication, it might cause side effects.', fr: 'Si vous prenez trop de ce médicament, cela pourrait provoquer des effets secondaires.', speak: 'If you take too much of this medication, it might cause side effects.' },
          { en: 'Will you exercise regularly if your doctor recommends it?', fr: 'Ferez-vous de l\'exercice régulièrement si votre médecin le recommande ?', speak: 'Will you exercise regularly if your doctor recommends it?' }
        ],
        vocabulary: [
          { en: 'unless', fr: 'à moins que / sauf si', pronunciation: '/ənˈlɛs/', example: { en: 'Unless you rest, you won\'t recover.', fr: 'À moins que vous vous reposiez, vous ne guérirez pas.' } },
          { en: 'condition', fr: 'condition', pronunciation: '/kənˈdɪʃən/', example: { en: 'On one condition: you must take your tablets.', fr: 'À une condition : vous devez prendre vos comprimés.' } },
          { en: 'consequence', fr: 'conséquence', pronunciation: '/ˈkɒnsɪkwəns/', example: { en: 'The consequences of not sleeping are serious.', fr: 'Les conséquences du manque de sommeil sont graves.' } },
          { en: 'immune system', fr: 'système immunitaire', pronunciation: '/ɪˈmjuːn ˈsɪstəm/', example: { en: 'Exercise strengthens the immune system.', fr: 'L\'exercice renforce le système immunitaire.' } },
          { en: 'wellbeing', fr: 'bien-être', pronunciation: '/ˈwɛlbiːɪŋ/', example: { en: 'Mental wellbeing is just as important as physical health.', fr: 'Le bien-être mental est tout aussi important que la santé physique.' } },
          { en: 'to strengthen', fr: 'renforcer', pronunciation: '/ˈstrɛŋθən/', example: { en: 'Good nutrition will strengthen your immune system.', fr: 'Une bonne nutrition renforcera votre système immunitaire.' } }
        ]
      },
      exercises: [
        {
          type: 'fill',
          id: 'w3d5ex1',
          instruction: { en: 'Complete the first conditional sentence correctly', fr: 'Complétez correctement la phrase au premier conditionnel' },
          template: 'If you ___ (not sleep) enough, your immune system will weaken.',
          answer: 'don\'t sleep',
          hint: { en: 'If + Present Simple (negative): If you don\'t / If you aren\'t...', fr: 'If + Present Simple (négatif) : If you don\'t / If you aren\'t...' }
        },
        {
          type: 'mcq',
          id: 'w3d5ex2',
          question: { en: 'Which sentence correctly uses the First Conditional?', fr: 'Quelle phrase utilise correctement le Premier Conditionnel ?' },
          options: ['If you will exercise, you feel better.', 'If you exercise, you will feel better.', 'If you exercised, you would feel better.', 'If you exercise, you will felt better.'],
          correct: 1,
          explanation: { en: '"If you exercise, you will feel better." — IF clause uses Present Simple (exercise), result clause uses will + base verb (feel). The others contain common errors: will after if, second conditional, and wrong verb form.', fr: '"If you exercise, you will feel better." — La proposition IF utilise le Present Simple (exercise), la proposition résultat utilise will + verbe de base (feel). Les autres contiennent des erreurs courantes : will après if, deuxième conditionnel, et mauvaise forme verbale.' }
        },
        {
          type: 'match',
          id: 'w3d5ex3',
          instruction: { en: 'Match each IF clause to its correct result', fr: 'Associez chaque proposition IF à son résultat correct' },
          pairs: [
            { left: 'If you rest today,', right: 'you will feel better tomorrow.' },
            { left: 'Unless you take the medicine,', right: 'you won\'t recover quickly.' },
            { left: 'If the test is negative,', right: 'you can go home tonight.' },
            { left: 'If you eat too much sugar,', right: 'you might develop diabetes.' }
          ]
        },
        {
          type: 'order',
          id: 'w3d5ex4',
          instruction: { en: 'Rearrange to form a first conditional health sentence', fr: 'Réarrangez pour former une phrase de santé au premier conditionnel' },
          words: ['you', 'smoke,', 'cancer', 'risk', 'your', 'increase', 'will', 'If', 'of', 'lung'],
          answer: 'If you smoke, your risk of lung cancer will increase'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d5q1',
          question: { en: 'What is the most common mistake learners make with the First Conditional?', fr: 'Quelle est l\'erreur la plus courante que font les apprenants avec le Premier Conditionnel ?' },
          options: ['Using "if" instead of "when"', 'Using "will" in the IF clause: "If you will come..."', 'Using Present Simple in the result clause', 'Using "unless" as a synonym for "if"'],
          correct: 1,
          explanation: { en: 'The most common error is putting "will" in the IF clause: "If you WILL take this..." is WRONG. The if-clause always uses Present Simple: "If you TAKE this..."', fr: 'L\'erreur la plus courante est de mettre "will" dans la proposition IF : "If you WILL take this..." est FAUX. La proposition if utilise toujours le Present Simple : "If you TAKE this..."' }
        },
        {
          type: 'mcq',
          id: 'w3d5q2',
          question: { en: 'What does "unless" mean in a conditional sentence?', fr: 'Que signifie "unless" dans une phrase conditionnelle ?' },
          options: ['If... and also', 'If... not / except if', 'As long as', 'Even though'],
          correct: 1,
          explanation: { en: '"Unless" = "if... not". "Unless you take the tablets" = "If you don\'t take the tablets". It is used to express a negative condition.', fr: '"Unless" = "if... not". "Unless you take the tablets" = "If you don\'t take the tablets". Il est utilisé pour exprimer une condition négative.' }
        },
        {
          type: 'mcq',
          id: 'w3d5q3',
          question: { en: 'Which version expresses a LESS certain result in a first conditional?', fr: 'Quelle version exprime un résultat MOINS certain dans un premier conditionnel ?' },
          options: ['If you exercise, you will lose weight.', 'If you exercise, you might lose some weight.', 'If you exercise, you lose weight.', 'If you exercise, you would lose weight.'],
          correct: 1,
          explanation: { en: '"Might" expresses possibility/less certainty than "will". "If you exercise, you might lose weight" = possible but not guaranteed. "Will" is more certain. "Would" belongs to the Second Conditional.', fr: '"Might" exprime la possibilité/une moins grande certitude que "will". "If you exercise, you might lose weight" = possible mais non garanti. "Will" est plus certain. "Would" appartient au Deuxième Conditionnel.' }
        }
      ]
    },
    {
      day: 6,
      dayName: { en: 'Saturday', fr: 'Samedi' },
      title: { en: 'Health Roleplay & Week Review', fr: 'Jeu de rôle santé et révision de la semaine' },
      icon: '💪',
      theory: {
        intro: {
          en: 'Today we bring together all of this week\'s health vocabulary and grammar in a realistic medical roleplay scenario. You will see how symptom descriptions, future forms, and conditional sentences combine naturally in a doctor-patient conversation. Then you will work through consolidation exercises covering all the week\'s key learning points.',
          fr: 'Aujourd\'hui, nous réunissons tout le vocabulaire et la grammaire de santé de cette semaine dans un scénario de jeu de rôle médical réaliste. Vous verrez comment les descriptions de symptômes, les formes futures et les phrases conditionnelles se combinent naturellement dans une conversation médecin-patient. Ensuite, vous travaillerez sur des exercices de consolidation couvrant tous les points d\'apprentissage clés de la semaine.'
        },
        grammarTitle: { en: 'A Doctor\'s Consultation: Full Dialogue', fr: 'Une consultation médicale : Dialogue complet' },
        grammar: {
          en: 'Notice in the dialogue below how the patient uses "I\'ve had" (Present Perfect for duration), "I feel" (Present Simple for current state), and "it hurts when..." (pattern for describing pain). The doctor uses "I\'m going to" (planned action — pre-decided in the consultation), "will" (predictions about recovery), and conditionals: "If you take the tablets, you will feel better." This rich mix of tenses is what makes professional medical communication in English sound natural and fluent.',
          fr: 'Remarquez dans le dialogue ci-dessous comment le patient utilise "I\'ve had" (Present Perfect pour la durée), "I feel" (Present Simple pour l\'état actuel), et "it hurts when..." (schéma pour décrire la douleur). Le médecin utilise "I\'m going to" (action planifiée — pré-décidée lors de la consultation), "will" (prédictions sur la guérison), et des conditionnelles : "If you take the tablets, you will feel better." Ce riche mélange de temps est ce qui rend la communication médicale professionnelle en anglais naturelle et fluide.'
        },
        examples: [
          { en: 'Doctor: Good morning. What brings you in today?', fr: 'Médecin : Bonjour. Qu\'est-ce qui vous amène aujourd\'hui ?', speak: 'Good morning. What brings you in today?' },
          { en: 'Patient: I\'ve had a terrible sore throat and a high fever for the last three days. I also feel really run down.', fr: 'Patient : J\'ai un terrible mal de gorge et une forte fièvre depuis trois jours. Je me sens aussi vraiment épuisé(e).', speak: 'I\'ve had a terrible sore throat and a high fever for the last three days. I also feel really run down.' },
          { en: 'Doctor: I see. Does it hurt when you swallow?', fr: 'Médecin : Je vois. Est-ce que ça fait mal quand vous avalez ?', speak: 'Does it hurt when you swallow?' },
          { en: 'Patient: Yes, a lot. It\'s a very sharp pain. I\'m also allergic to penicillin, so I wanted to mention that.', fr: 'Patient : Oui, beaucoup. C\'est une douleur très aiguë. Je suis aussi allergique à la pénicilline, je voulais le mentionner.', speak: 'Yes, a lot. It\'s a very sharp pain. I\'m also allergic to penicillin, so I wanted to mention that.' },
          { en: 'Doctor: I\'m going to prescribe an alternative antibiotic. If you take the full course, you will feel much better within 48 hours.', fr: 'Médecin : Je vais vous prescrire un antibiotique alternatif. Si vous suivez le traitement complet, vous vous sentirez beaucoup mieux dans les 48 heures.', speak: 'I\'m going to prescribe an alternative antibiotic. If you take the full course, you will feel much better within 48 hours.' },
          { en: 'Patient: Should I take it with food? And will the fever go down quickly?', fr: 'Patient : Dois-je le prendre avec de la nourriture ? Et la fièvre va-t-elle baisser rapidement ?', speak: 'Should I take it with food? And will the fever go down quickly?' }
        ],
        vocabulary: [
          { en: 'to swallow', fr: 'avaler', pronunciation: '/ˈswɒloʊ/', example: { en: 'It\'s painful to swallow.', fr: 'C\'est douloureux d\'avaler.' } },
          { en: 'antibiotic', fr: 'antibiotique', pronunciation: '/ˌæntɪbaɪˈɒtɪk/', example: { en: 'Always complete the full course of antibiotics.', fr: 'Terminez toujours le traitement complet aux antibiotiques.' } },
          { en: 'course (of medication)', fr: 'traitement / cure', pronunciation: '/kɔːrs/', example: { en: 'Take the full course — don\'t stop early.', fr: 'Faites le traitement complet — n\'arrêtez pas tôt.' } },
          { en: 'to go down (fever)', fr: 'baisser (fièvre)', pronunciation: '/ɡoʊ daʊn/', example: { en: 'The fever will go down with this medication.', fr: 'La fièvre va baisser avec ce médicament.' } },
          { en: 'consultation', fr: 'consultation', pronunciation: '/ˌkɒnsəlˈteɪʃən/', example: { en: 'The consultation lasted twenty minutes.', fr: 'La consultation a duré vingt minutes.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w3d6ex1',
          question: { en: 'In the dialogue, the doctor says "I\'m going to prescribe an alternative antibiotic." Why "going to" and not "will"?', fr: 'Dans le dialogue, le médecin dit "I\'m going to prescribe an alternative antibiotic." Pourquoi "going to" et non "will" ?' },
          options: ['Because the doctor is guessing.', 'Because it\'s a pre-planned, decided action during the consultation.', 'Because it\'s a spontaneous decision made at that moment.', 'Both would be correct here.'],
          correct: 1,
          explanation: { en: 'The doctor has assessed the patient and made a clinical decision during the consultation — it\'s a pre-planned action at this point. "Will" would suggest a spontaneous, in-the-moment choice without prior assessment.', fr: 'Le médecin a évalué le patient et pris une décision clinique pendant la consultation — c\'est une action pré-planifiée à ce stade. "Will" suggérerait un choix spontané et impulsif sans évaluation préalable.' }
        },
        {
          type: 'fill',
          id: 'w3d6ex2',
          instruction: { en: 'Complete the conditional sentence from the consultation', fr: 'Complétez la phrase conditionnelle de la consultation' },
          template: 'If you ___ (take) the full course of antibiotics, the infection will clear up completely.',
          answer: 'take',
          hint: { en: 'First conditional: IF + Present Simple', fr: 'Premier conditionnel : IF + Present Simple' }
        },
        {
          type: 'order',
          id: 'w3d6ex3',
          instruction: { en: 'Rearrange to form a correct conditional health advice sentence', fr: 'Réarrangez pour former une phrase correcte de conseil de santé au conditionnel' },
          words: ['sleep', 'better', 'enough,', 'your', 'you', 'immune', 'will', 'system', 'get', 'If', 'stronger'],
          answer: 'If you get enough sleep, your immune system will get stronger'
        },
        {
          type: 'flashcard',
          id: 'w3d6ex4',
          instruction: { en: 'Review the key grammar distinctions from this week', fr: 'Révisez les distinctions grammaticales clés de cette semaine' },
          cards: [
            { front: '\'will\' — spontaneous decision', back: '"I\'ll call the ambulance!"', example: { en: 'Immediate response to a situation.', fr: 'Réponse immédiate à une situation.' } },
            { front: '\'will\' — prediction (opinion)', back: '"I think you\'ll recover soon."', example: { en: 'Based on belief, not visible evidence.', fr: 'Basé sur une croyance, pas des preuves visibles.' } },
            { front: '\'going to\' — pre-planned', back: '"I\'m going to see a specialist."', example: { en: 'Appointment or decision already made.', fr: 'Rendez-vous ou décision déjà pris.' } },
            { front: '\'going to\' — evidence-based prediction', back: '"He\'s going to faint!"', example: { en: 'You can see the evidence right now.', fr: 'Vous voyez les preuves maintenant.' } },
            { front: 'First Conditional structure', back: 'If + Present Simple, will + base verb', example: { en: 'If you rest, you will recover.', fr: 'Si vous vous reposez, vous guérirez.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w3d6q1',
          question: { en: 'Which sentence correctly combines two grammar points from this week?', fr: 'Quelle phrase combine correctement deux points grammaticaux de cette semaine ?' },
          options: ['If you will exercise, you\'re going to feel better.', 'If you exercise regularly, you will feel more energetic.', 'If you are exercising, you will to feel better.', 'If you going to exercise, you feel better.'],
          correct: 1,
          explanation: { en: '"If you exercise regularly (Present Simple), you will feel more energetic (will + base verb)" — this is a perfect First Conditional sentence.', fr: '"If you exercise regularly (Present Simple), you will feel more energetic (will + verbe de base)" — c\'est une parfaite phrase au Premier Conditionnel.' }
        },
        {
          type: 'mcq',
          id: 'w3d6q2',
          question: { en: 'You are a doctor and your patient is clearly about to vomit. What do you say using "going to"?', fr: 'Vous êtes médecin et votre patient est clairement sur le point de vomir. Que dites-vous en utilisant "going to" ?' },
          options: ['I think he will vomit.', 'He\'s going to be sick — get him a bowl!', 'He will probably be sick soon.', 'He is being sick.'],
          correct: 1,
          explanation: { en: '"He\'s going to be sick" uses "going to" for a prediction based on visible, present evidence — you can clearly see the signs right now. "I think he will..." would be opinion-based, less immediate.', fr: '"He\'s going to be sick" utilise "going to" pour une prédiction basée sur des preuves visibles et présentes — vous voyez clairement les signes maintenant. "I think he will..." serait basé sur une opinion, moins immédiat.' }
        },
        {
          type: 'mcq',
          id: 'w3d6q3',
          question: { en: 'A patient says "I have a terrible headache — I can\'t concentrate." You spontaneously decide to help. What do you say?', fr: 'Un patient dit "I have a terrible headache — I can\'t concentrate." Vous décidez spontanément d\'aider. Que dites-vous ?' },
          options: ['I\'m going to get you some paracetamol (I planned this).', 'I\'ll get you some paracetamol right now.', 'I was getting you paracetamol.', 'I get you paracetamol.'],
          correct: 1,
          explanation: { en: '"I\'ll get you some paracetamol right now" — "will" for a spontaneous decision made at the moment of speaking in response to what the patient just said.', fr: '"I\'ll get you some paracetamol right now" — "will" pour une décision spontanée prise au moment de parler en réponse à ce que le patient vient de dire.' }
        }
      ]
    }
  ],
  sunday: {
    title: { en: 'Week 3 Review', fr: 'Révision — Semaine 3' },
    summary: {
      en: 'This week you built essential health and medical vocabulary and mastered three important grammar structures. You learned to describe symptoms, navigate a doctor\'s appointment, and use the three future structures: "will" for predictions and spontaneous decisions, "going to" for pre-planned intentions and evidence-based predictions, and the First Conditional for real future possibilities and their results.',
      fr: 'Cette semaine, vous avez construit un vocabulaire médical et de santé essentiel et maîtrisé trois structures grammaticales importantes. Vous avez appris à décrire des symptômes, à naviguer dans un rendez-vous médical, et à utiliser les trois structures futures : "will" pour les prédictions et les décisions spontanées, "going to" pour les intentions pré-planifiées et les prédictions basées sur des preuves, et le Premier Conditionnel pour les possibilités futures réelles et leurs résultats.'
    },
    vocabulary: [
      { en: 'symptom', fr: 'symptôme', pronunciation: '/ˈsɪmptəm/' },
      { en: 'prescription', fr: 'ordonnance', pronunciation: '/prɪˈskrɪpʃən/' },
      { en: 'allergy', fr: 'allergie', pronunciation: '/ˈælərdʒi/' },
      { en: 'sharp pain', fr: 'douleur aiguë', pronunciation: '/ʃɑːrp peɪn/' },
      { en: 'over-the-counter', fr: 'sans ordonnance', pronunciation: '/ˌoʊvər ðə ˈkaʊntər/' },
      { en: 'to run tests', fr: 'faire des examens', pronunciation: '/rʌn tɛsts/' },
      { en: 'to feel run down', fr: 'se sentir épuisé(e)', pronunciation: '/rʌn daʊn/' },
      { en: 'to cut down on', fr: 'réduire la consommation de', pronunciation: '/kʌt daʊn ɒn/' },
      { en: 'immune system', fr: 'système immunitaire', pronunciation: '/ɪˈmjuːn ˈsɪstəm/' },
      { en: 'unless', fr: 'à moins que', pronunciation: '/ənˈlɛs/' }
    ],
    grammarPoints: [
      {
        title: { en: '"Will" vs "Going to"', fr: '"Will" contre "Going to"' },
        rule: { en: '"Will": (1) spontaneous decisions ("I\'ll help!"), (2) predictions based on opinion ("I think it will..."). "Going to": (1) pre-planned intentions ("I\'m going to see a doctor — I\'ve booked"), (2) evidence-based predictions ("He\'s going to faint — look at him!").', fr: '"Will" : (1) décisions spontanées ("I\'ll help!"), (2) prédictions basées sur une opinion ("I think it will..."). "Going to" : (1) intentions pré-planifiées ("I\'m going to see a doctor — I\'ve booked"), (2) prédictions basées sur des preuves ("He\'s going to faint — look at him!").' },
        example: { en: '"I\'ll call an ambulance!" (spontaneous) vs "I\'m going to start therapy next week." (planned)', fr: '"I\'ll call an ambulance!" (spontané) vs "I\'m going to start therapy next week." (planifié)' }
      },
      {
        title: { en: 'First Conditional', fr: 'Premier Conditionnel' },
        rule: { en: 'If + Present Simple, will/might/can/should + base verb. The if-clause NEVER uses "will". The clauses can be reversed. "Unless" = "if...not". Use "might" for less certain results.', fr: 'If + Present Simple, will/might/can/should + verbe de base. La proposition if n\'utilise JAMAIS "will". Les propositions peuvent être inversées. "Unless" = "if...not". Utilisez "might" pour des résultats moins certains.' },
        example: { en: 'If you take the tablets, you will feel better. / Unless you rest, you won\'t recover.', fr: 'Si vous prenez les comprimés, vous vous sentirez mieux. / À moins que vous vous reposiez, vous ne guérirez pas.' }
      },
      {
        title: { en: 'Describing Symptoms', fr: 'Décrire des symptômes' },
        rule: { en: '"I have a + [condition]" (headache, fever, rash, cough). "I have a sore + [body part]" (throat, knee). "My + [body part] + hurts/aches." "It hurts when I + [action]." "I\'ve had [symptom] for [duration]" (Present Perfect + for).', fr: '"I have a + [condition]" (headache, fever, rash, cough). "I have a sore + [partie du corps]" (throat, knee). "My + [partie du corps] + hurts/aches." "It hurts when I + [action]." "I\'ve had [symptôme] for [durée]" (Present Perfect + for).' },
        example: { en: 'I have a sore throat. / My back aches. / It hurts when I breathe. / I\'ve had this cough for a week.', fr: 'J\'ai mal à la gorge. / J\'ai mal au dos. / Ça fait mal quand je respire. / J\'ai cette toux depuis une semaine.' }
      }
    ],
    conversationTopics: [
      {
        title: { en: 'Health and Lifestyle', fr: 'Santé et mode de vie' },
        prompts: [
          { en: 'What do you do to stay healthy? Do you exercise, watch your diet, sleep enough?', fr: 'Que faites-vous pour rester en bonne santé ? Faites-vous de l\'exercice, faites-vous attention à votre alimentation, dormez-vous suffisamment ?' },
          { en: 'Have you ever had a serious illness or injury? How did it affect your life?', fr: 'Avez-vous déjà eu une maladie ou une blessure grave ? Comment cela a-t-il affecté votre vie ?' },
          { en: 'If you could change one lifestyle habit to improve your health, what would it be?', fr: 'Si vous pouviez changer une habitude de vie pour améliorer votre santé, laquelle serait-ce ?' },
          { en: 'Do you think people in your country are generally healthy? Why or why not?', fr: 'Pensez-vous que les gens dans votre pays sont généralement en bonne santé ? Pourquoi ?' }
        ]
      },
      {
        title: { en: 'Health Systems and Attitudes', fr: 'Systèmes de santé et attitudes' },
        prompts: [
          { en: 'How does the healthcare system work in your country? Is it public, private or both?', fr: 'Comment fonctionne le système de santé dans votre pays ? Est-il public, privé ou les deux ?' },
          { en: 'Do you prefer to see a doctor quickly or try to recover at home first? Why?', fr: 'Préférez-vous voir un médecin rapidement ou essayer de guérir à la maison d\'abord ? Pourquoi ?' },
          { en: 'What do you think is more important: physical health or mental health? Can you separate them?', fr: 'Qu\'est-ce qui est le plus important selon vous : la santé physique ou la santé mentale ? Peut-on les séparer ?' },
          { en: 'If governments invested more in preventive health (sport facilities, nutrition education), do you think people would be healthier?', fr: 'Si les gouvernements investissaient davantage dans la santé préventive (installations sportives, éducation nutritionnelle), pensez-vous que les gens seraient en meilleure santé ?' }
        ]
      }
    ]
  }
};
