const LESSONS_INTERMEDIATE_WEEK4 = {
  week: 4,
  level: 'intermediate',
  theme: { en: 'Opinions, Media & Society', fr: 'Opinions, médias et société' },
  days: [
    {
      day: 1,
      dayName: { en: 'Monday', fr: 'Lundi' },
      title: { en: 'Media Vocabulary', fr: 'Le vocabulaire des médias' },
      icon: '📱',
      theory: {
        intro: {
          en: 'Media is everywhere in the modern world — from traditional news to podcasts, social media and streaming platforms. Having the vocabulary to talk about media, discuss information sources, and evaluate the reliability of what we read and watch is an essential skill for any B1-B2 English speaker. This week we also tackle some of the most important grammar for expressing nuanced opinions.',
          fr: 'Les médias sont partout dans le monde moderne — des nouvelles traditionnelles aux podcasts, aux réseaux sociaux et aux plateformes de streaming. Avoir le vocabulaire pour parler des médias, discuter des sources d\'information et évaluer la fiabilité de ce que nous lisons et regardons est une compétence essentielle pour tout locuteur d\'anglais B1-B2. Cette semaine, nous abordons également certaines des grammaires les plus importantes pour exprimer des opinions nuancées.'
        },
        grammarTitle: { en: 'Modern Media: Vocabulary and Word Families', fr: 'Médias modernes : Vocabulaire et familles de mots' },
        grammar: {
          en: 'Modern media vocabulary in English has evolved rapidly. Note how nouns have been "verbed" (used as verbs): "to stream" (from "streaming"), "to podcast", "to tweet/post". Many media terms are borrowed from technology: "algorithm", "feed", "viral", "trending". An important distinction: "news" is ALWAYS uncountable in English — "a news" is WRONG. Say "a piece of news", "some news", "the news". Similarly, "media" is technically the plural of "medium", but in everyday English it is often used with a singular verb: "The media is reporting..." (common) vs "The media are reporting..." (formally correct). "Social media" follows the same pattern.',
          fr: 'Le vocabulaire des médias modernes en anglais a évolué rapidement. Notez comment les noms ont été "verbifiés" (utilisés comme verbes) : "to stream" (de "streaming"), "to podcast", "to tweet/post". De nombreux termes médiatiques sont empruntés à la technologie : "algorithm", "feed", "viral", "trending". Une distinction importante : "news" est TOUJOURS indénombrable en anglais — "a news" est FAUX. Dites "a piece of news", "some news", "the news". De même, "media" est techniquement le pluriel de "medium", mais en anglais courant, il est souvent utilisé avec un verbe singulier : "The media is reporting..." (courant) vs "The media are reporting..." (formellement correct). "Social media" suit le même schéma.'
        },
        examples: [
          { en: 'The algorithm only shows you content that matches what you already believe.', fr: 'L\'algorithme ne vous montre que le contenu qui correspond à ce que vous croyez déjà.', speak: 'The algorithm only shows you content that matches what you already believe.' },
          { en: 'Did you hear? That video went viral — it has over 50 million views.', fr: 'Tu as entendu ? Cette vidéo est devenue virale — elle a plus de 50 millions de vues.', speak: 'Did you hear? That video went viral — it has over 50 million views.' },
          { en: 'Journalists have a responsibility to verify their sources before publishing a story.', fr: 'Les journalistes ont la responsabilité de vérifier leurs sources avant de publier un article.', speak: 'Journalists have a responsibility to verify their sources before publishing a story.' },
          { en: 'I cancelled my cable subscription — I only watch streaming services now.', fr: 'J\'ai annulé mon abonnement câble — je ne regarde maintenant que les services de streaming.', speak: 'I cancelled my cable subscription — I only watch streaming services now.' },
          { en: 'The headline was misleading — the actual article told a very different story.', fr: 'Le titre était trompeur — l\'article réel racontait une histoire très différente.', speak: 'The headline was misleading — the actual article told a very different story.' },
          { en: 'Social media influencers now have more reach than traditional TV presenters.', fr: 'Les influenceurs des réseaux sociaux ont maintenant plus de portée que les présentateurs de télévision traditionnels.', speak: 'Social media influencers now have more reach than traditional TV presenters.' }
        ],
        vocabulary: [
          { en: 'headline', fr: 'titre (d\'article)', pronunciation: '/ˈhɛdlaɪn/', example: { en: 'Don\'t judge a story by its headline alone.', fr: 'Ne jugez pas un article par son seul titre.' } },
          { en: 'algorithm', fr: 'algorithme', pronunciation: '/ˈælɡərɪðəm/', example: { en: 'Social media algorithms shape what we see.', fr: 'Les algorithmes des réseaux sociaux façonnent ce que nous voyons.' } },
          { en: 'viral', fr: 'viral(e)', pronunciation: '/ˈvaɪrəl/', example: { en: 'The video went viral overnight.', fr: 'La vidéo est devenue virale du jour au lendemain.' } },
          { en: 'influencer', fr: 'influenceur/influenceuse', pronunciation: '/ˈɪnfluənsər/', example: { en: 'Many influencers promote products to their followers.', fr: 'De nombreux influenceurs font la promotion de produits auprès de leurs abonnés.' } },
          { en: 'misinformation', fr: 'désinformation', pronunciation: '/ˌmɪsɪnfəˈmeɪʃən/', example: { en: 'Misinformation spreads faster than verified facts.', fr: 'La désinformation se propage plus vite que les faits vérifiés.' } },
          { en: 'podcast', fr: 'podcast', pronunciation: '/ˈpɒdkɑːst/', example: { en: 'I listen to a daily news podcast on my commute.', fr: 'J\'écoute un podcast d\'actualités quotidien pendant mes trajets.' } },
          { en: 'streaming', fr: 'streaming', pronunciation: '/ˈstriːmɪŋ/', example: { en: 'Streaming has replaced physical media for most people.', fr: 'Le streaming a remplacé les supports physiques pour la plupart des gens.' } },
          { en: 'bias', fr: 'biais / parti pris', pronunciation: '/ˈbaɪəs/', example: { en: 'Every news outlet has some degree of bias.', fr: 'Chaque organe de presse a un certain degré de parti pris.' } }
        ]
      },
      exercises: [
        {
          type: 'match',
          id: 'w4d1ex1',
          instruction: { en: 'Match each media term to its French equivalent', fr: 'Associez chaque terme médiatique à son équivalent français' },
          pairs: [
            { left: 'headline', right: 'titre d\'article' },
            { left: 'misinformation', right: 'désinformation' },
            { left: 'bias', right: 'parti pris' },
            { left: 'influencer', right: 'influenceur' }
          ]
        },
        {
          type: 'mcq',
          id: 'w4d1ex2',
          question: { en: 'Which sentence uses "news" correctly?', fr: 'Quelle phrase utilise "news" correctement ?' },
          options: ['I heard a news this morning.', 'I heard an interesting news today.', 'I heard some interesting news this morning.', 'I heard many news today.'],
          correct: 2,
          explanation: { en: '"News" is an uncountable noun in English. We cannot say "a news" or "many news". Instead, use "some news", "a piece of news", "interesting news".', fr: '"News" est un nom indénombrable en anglais. On ne peut pas dire "a news" ou "many news". À la place, utilisez "some news", "a piece of news", "interesting news".' }
        },
        {
          type: 'fill',
          id: 'w4d1ex3',
          instruction: { en: 'Complete the sentence with the correct media vocabulary word', fr: 'Complétez la phrase avec le bon mot du vocabulaire médiatique' },
          template: 'The social media ___ decides what content appears in your feed based on your past activity.',
          answer: 'algorithm',
          hint: { en: 'A set of rules or code that determines what content you see online', fr: 'Un ensemble de règles ou de code qui détermine quel contenu vous voyez en ligne' }
        },
        {
          type: 'order',
          id: 'w4d1ex4',
          instruction: { en: 'Rearrange the words to form a correct sentence about media', fr: 'Réarrangez les mots pour former une phrase correcte sur les médias' },
          words: ['faster', 'verified', 'Misinformation', 'than', 'often', 'spreads', 'facts'],
          answer: 'Misinformation often spreads faster than verified facts'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d1q1',
          question: { en: 'What does it mean when a video "goes viral"?', fr: 'Que signifie quand une vidéo "goes viral" ?' },
          options: ['The video contains a computer virus.', 'The video becomes extremely popular and is shared by millions.', 'The video is deleted from the internet.', 'The video is posted by a verified journalist.'],
          correct: 1,
          explanation: { en: 'When something "goes viral" online, it spreads rapidly and is shared by an enormous number of people in a very short time — like a biological virus spreading.', fr: 'Quand quelque chose "goes viral" en ligne, cela se propage rapidement et est partagé par un nombre énorme de personnes en très peu de temps — comme un virus biologique qui se propage.' }
        },
        {
          type: 'mcq',
          id: 'w4d1q2',
          question: { en: 'What is "media bias"?', fr: 'Qu\'est-ce que le "media bias" ?' },
          options: ['When journalists are paid more than average', 'When a news outlet favours a particular political or ideological perspective', 'When the media covers too many stories at once', 'When a newspaper is more popular than a TV channel'],
          correct: 1,
          explanation: { en: 'Media bias refers to the tendency of a news outlet to present stories in a way that favours a particular political, social or commercial perspective, rather than being fully neutral.', fr: 'Le biais médiatique fait référence à la tendance d\'un organe de presse à présenter des articles d\'une manière qui favorise une perspective politique, sociale ou commerciale particulière, plutôt que d\'être totalement neutre.' }
        },
        {
          type: 'mcq',
          id: 'w4d1q3',
          question: { en: 'Why might a misleading headline be dangerous?', fr: 'Pourquoi un titre trompeur pourrait-il être dangereux ?' },
          options: ['Because headlines use too many complex words.', 'Because many people share articles based on the headline alone, without reading the full story.', 'Because journalists write headlines too quickly.', 'Because headlines are usually very long.'],
          correct: 1,
          explanation: { en: 'Research shows that most people share articles on social media after reading only the headline. A misleading headline can therefore spread false impressions even if the article itself is accurate.', fr: 'Des recherches montrent que la plupart des gens partagent des articles sur les réseaux sociaux après n\'avoir lu que le titre. Un titre trompeur peut donc répandre de fausses impressions même si l\'article lui-même est exact.' }
        }
      ]
    },
    {
      day: 2,
      dayName: { en: 'Tuesday', fr: 'Mardi' },
      title: { en: 'Expressing Opinions', fr: 'Exprimer des opinions' },
      icon: '💬',
      theory: {
        intro: {
          en: 'Expressing opinions confidently and politely is one of the most valuable communication skills in English. Whether in a conversation, a debate, or a presentation, you need a range of expressions to share your view, agree, disagree, and soften your position when necessary. Today we build a complete toolkit for expressing opinions at B1-B2 level.',
          fr: 'Exprimer des opinions avec confiance et politesse est l\'une des compétences de communication les plus précieuses en anglais. Que ce soit dans une conversation, un débat ou une présentation, vous avez besoin d\'une gamme d\'expressions pour partager votre point de vue, accepter, refuser et adoucir votre position si nécessaire. Aujourd\'hui, nous construisons une boîte à outils complète pour exprimer des opinions au niveau B1-B2.'
        },
        grammarTitle: { en: 'Opinion Phrases: Strength and Register', fr: 'Expressions d\'opinion : Force et registre' },
        grammar: {
          en: 'Opinion expressions vary in strength and formality. Strongest / most direct: "I strongly believe that...", "I am absolutely convinced that...". Standard / neutral: "I think...", "In my opinion...", "I feel that...". Softer / more tentative: "It seems to me that...", "I tend to think that...", "From where I stand...". Distancing from personal view: "As far as I\'m concerned...", "Personally speaking...". For agreement: "I completely agree with...", "That\'s a really valid point." / "Absolutely." For partial agreement: "I see your point, but...", "That\'s true up to a point, however...". For polite disagreement: "I\'m not sure I agree with that...", "I respectfully disagree..." / "I take a different view on that." A key B2 skill: hedging — softening opinions to sound more thoughtful: "It could be argued that...", "There is a case to be made for...".',
          fr: 'Les expressions d\'opinion varient en force et en registre. Les plus fortes / les plus directes : "I strongly believe that...", "I am absolutely convinced that...". Standard / neutre : "I think...", "In my opinion...", "I feel that...". Plus douces / plus hésitantes : "It seems to me that...", "I tend to think that...", "From where I stand...". Pour se distancier d\'un point de vue personnel : "As far as I\'m concerned...", "Personally speaking...". Pour l\'accord : "I completely agree with...", "That\'s a really valid point." / "Absolutely." Pour l\'accord partiel : "I see your point, but...", "That\'s true up to a point, however...". Pour le désaccord poli : "I\'m not sure I agree with that...", "I respectfully disagree..." / "I take a different view on that." Une compétence clé B2 : l\'atténuation — adoucir les opinions pour paraître plus réfléchi : "It could be argued that...", "There is a case to be made for...".'
        },
        examples: [
          { en: 'In my opinion, social media does more harm than good for young people.', fr: 'À mon avis, les réseaux sociaux font plus de mal que de bien aux jeunes.', speak: 'In my opinion, social media does more harm than good for young people.' },
          { en: 'I strongly believe that governments should regulate online misinformation more strictly.', fr: 'Je crois fermement que les gouvernements devraient réguler plus strictement la désinformation en ligne.', speak: 'I strongly believe that governments should regulate online misinformation more strictly.' },
          { en: 'I see your point, but I think the situation is more nuanced than that.', fr: 'Je vois votre point de vue, mais je pense que la situation est plus nuancée que ça.', speak: 'I see your point, but I think the situation is more nuanced than that.' },
          { en: 'As far as I\'m concerned, traditional newspapers still have an important role to play.', fr: 'En ce qui me concerne, les journaux traditionnels ont encore un rôle important à jouer.', speak: 'As far as I\'m concerned, traditional newspapers still have an important role to play.' },
          { en: 'It could be argued that streaming services have democratised access to culture.', fr: 'On pourrait soutenir que les services de streaming ont démocratisé l\'accès à la culture.', speak: 'It could be argued that streaming services have democratised access to culture.' },
          { en: 'I respectfully disagree — I think the evidence actually points in the opposite direction.', fr: 'Je suis respectueusement en désaccord — je pense que les preuves pointent en réalité dans la direction opposée.', speak: 'I respectfully disagree — I think the evidence actually points in the opposite direction.' }
        ],
        vocabulary: [
          { en: 'to argue', fr: 'soutenir / argumenter', pronunciation: '/ˈɑːrɡjuː/', example: { en: 'She argues that technology is changing society.', fr: 'Elle soutient que la technologie change la société.' } },
          { en: 'nuanced', fr: 'nuancé(e)', pronunciation: '/ˈnjuːɑːnst/', example: { en: 'His view on the subject is very nuanced.', fr: 'Son point de vue sur le sujet est très nuancé.' } },
          { en: 'valid', fr: 'valide / recevable', pronunciation: '/ˈvælɪd/', example: { en: 'That\'s a very valid concern.', fr: 'C\'est une préoccupation tout à fait valide.' } },
          { en: 'perspective', fr: 'perspective / point de vue', pronunciation: '/pərˈspɛktɪv/', example: { en: 'You need to consider different perspectives.', fr: 'Vous devez considérer différentes perspectives.' } },
          { en: 'to hedge', fr: 'atténuer / modérer', pronunciation: '/hɛdʒ/', example: { en: 'He hedged his opinion with "it seems to me".', fr: 'Il a atténué son opinion avec "it seems to me".' } },
          { en: 'controversial', fr: 'controversé(e)', pronunciation: '/ˌkɒntrəˈvɜːrʃəl/', example: { en: 'Censorship is a controversial topic.', fr: 'La censure est un sujet controversé.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w4d2ex1',
          question: { en: 'Which expression is the most tentative (least certain) way to express an opinion?', fr: 'Quelle expression est la façon la plus hésitante (la moins certaine) d\'exprimer une opinion ?' },
          options: ['I am absolutely convinced that...', 'I strongly believe that...', 'It seems to me that...', 'I think that...'],
          correct: 2,
          explanation: { en: '"It seems to me that..." is the most tentative — it implies the speaker is not fully certain and is open to other views. "I am absolutely convinced" and "I strongly believe" are the most confident.', fr: '"It seems to me that..." est le plus hésitant — cela implique que le locuteur n\'est pas tout à fait certain et est ouvert à d\'autres points de vue. "I am absolutely convinced" et "I strongly believe" sont les plus confiants.' }
        },
        {
          type: 'fill',
          id: 'w4d2ex2',
          instruction: { en: 'Complete the response to show partial agreement followed by disagreement', fr: 'Complétez la réponse pour montrer un accord partiel suivi d\'un désaccord' },
          template: 'I see ___ point, but I think the situation is more complicated than that.',
          answer: 'your',
          hint: { en: 'A possessive adjective: "I see ___ point"', fr: 'Un adjectif possessif : "I see ___ point"' }
        },
        {
          type: 'match',
          id: 'w4d2ex3',
          instruction: { en: 'Match each expression to its function', fr: 'Associez chaque expression à sa fonction' },
          pairs: [
            { left: 'I strongly believe that...', right: 'strong, direct opinion' },
            { left: 'It could be argued that...', right: 'hedged / distanced opinion' },
            { left: 'I respectfully disagree.', right: 'polite disagreement' },
            { left: 'That\'s a valid point.', right: 'agreeing with someone' }
          ]
        },
        {
          type: 'order',
          id: 'w4d2ex4',
          instruction: { en: 'Arrange the words to express a hedged opinion', fr: 'Arrangez les mots pour exprimer une opinion atténuée' },
          words: ['argued', 'could', 'that', 'be', 'It', 'media', 'social', 'is', 'addictive'],
          answer: 'It could be argued that social media is addictive'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d2q1',
          question: { en: 'What is "hedging" in English communication?', fr: 'Qu\'est-ce que "hedging" en communication anglaise ?' },
          options: ['Cutting a hedge in the garden', 'Softening your language to appear more tentative or open-minded', 'Using very strong, direct language', 'Avoiding speaking altogether'],
          correct: 1,
          explanation: { en: '"Hedging" means using language that softens your claim, shows uncertainty, or signals that you\'re open to other views. Phrases like "it seems to me", "it could be argued", and "I tend to think" are examples of hedging.', fr: '"Hedging" signifie utiliser un langage qui adoucit votre affirmation, montre de l\'incertitude, ou signale que vous êtes ouvert à d\'autres points de vue. Des expressions comme "it seems to me", "it could be argued" et "I tend to think" sont des exemples d\'atténuation.' }
        },
        {
          type: 'mcq',
          id: 'w4d2q2',
          question: { en: 'Someone says "Social media should be banned for under-18s." You partly agree but have reservations. What do you say?', fr: 'Quelqu\'un dit "Social media should be banned for under-18s." Vous êtes partiellement d\'accord mais avez des réserves. Que dites-vous ?' },
          options: ['Yes! Absolutely!', 'No, that\'s completely wrong.', 'I see your point, but perhaps a complete ban is too extreme — regulation might be more realistic.', 'I don\'t have an opinion.'],
          correct: 2,
          explanation: { en: '"I see your point, but..." acknowledges the other person\'s view before offering a nuanced counter-argument. This shows mature, B2-level discussion skills.', fr: '"I see your point, but..." reconnaît le point de vue de l\'autre personne avant d\'offrir un contre-argument nuancé. Cela montre des compétences de discussion matures au niveau B2.' }
        },
        {
          type: 'mcq',
          id: 'w4d2q3',
          question: { en: 'What is the difference between "I think" and "In my opinion"?', fr: 'Quelle est la différence entre "I think" et "In my opinion" ?' },
          options: ['They have completely different meanings.', '"In my opinion" is more formal and emphatic; "I think" is more casual.', '"I think" is never used in discussions.', '"In my opinion" is only for written English.'],
          correct: 1,
          explanation: { en: 'Both express personal views, but "In my opinion" is more formal and places stronger emphasis on the personal nature of the view. "I think" is more casual and widely used in both speech and writing.', fr: 'Les deux expriment des points de vue personnels, mais "In my opinion" est plus formel et met davantage l\'accent sur le caractère personnel du point de vue. "I think" est plus décontracté et largement utilisé tant à l\'oral qu\'à l\'écrit.' }
        }
      ]
    },
    {
      day: 3,
      dayName: { en: 'Wednesday', fr: 'Mercredi' },
      title: { en: 'English Idioms — Common Expressions', fr: 'Expressions idiomatiques anglaises — Expressions courantes' },
      icon: '🎭',
      theory: {
        intro: {
          en: 'Idiomatic expressions are a hallmark of natural, fluent English. Native speakers use idioms constantly in conversation, and understanding them is crucial for anyone aiming at B2 level. Idioms cannot be translated word for word — their meaning is figurative, not literal. Today we learn 8 of the most useful and widely used English idioms.',
          fr: 'Les expressions idiomatiques sont la marque d\'un anglais naturel et fluide. Les locuteurs natifs utilisent constamment des idiomes dans la conversation, et les comprendre est crucial pour quiconque vise le niveau B2. Les idiomes ne peuvent pas être traduits mot à mot — leur signification est figurée, pas littérale. Aujourd\'hui, nous apprenons 8 des idiomes anglais les plus utiles et les plus utilisés.'
        },
        grammarTitle: { en: 'Understanding and Using English Idioms', fr: 'Comprendre et utiliser les idiomes anglais' },
        grammar: {
          en: 'Idioms are fixed expressions where the total meaning is different from the individual words. They can be used as verbs ("to break the ice"), adjectives ("under the weather"), adverbs ("once in a blue moon"), or full phrases ("hit the nail on the head"). Importantly, most idioms are fixed — you cannot change the words or the grammar structure. You cannot say "hit the screw on the head" or "break the cold". Some idioms are formal, some informal. "Break the ice" and "bite the bullet" are appropriate in most contexts. However, "barking up the wrong tree" might be slightly informal in very formal settings. At B2 level, the goal is not just to understand idioms, but to use them naturally and appropriately.',
          fr: 'Les idiomes sont des expressions figées dont le sens total est différent des mots individuels. Ils peuvent être utilisés comme verbes ("to break the ice"), adjectifs ("under the weather"), adverbes ("once in a blue moon"), ou expressions complètes ("hit the nail on the head"). Importantly, la plupart des idiomes sont figés — vous ne pouvez pas changer les mots ni la structure grammaticale. Vous ne pouvez pas dire "hit the screw on the head" ou "break the cold". Certains idiomes sont formels, d\'autres informels. "Break the ice" et "bite the bullet" sont appropriés dans la plupart des contextes. Cependant, "barking up the wrong tree" peut être légèrement informel dans des environnements très formels. Au niveau B2, l\'objectif n\'est pas seulement de comprendre les idiomes, mais de les utiliser de manière naturelle et appropriée.'
        },
        examples: [
          { en: 'You really hit the nail on the head — that\'s exactly what the problem is.', fr: 'Tu as mis le doigt sur le problème — c\'est exactement ça.', speak: 'You really hit the nail on the head — that\'s exactly what the problem is.' },
          { en: 'I know you\'re nervous, but just bite the bullet and send that email.', fr: 'Je sais que tu es nerveux, mais mords la balle et envoie cet email.', speak: 'I know you\'re nervous, but just bite the bullet and send that email.' },
          { en: 'I\'m afraid I can\'t come tonight — I\'m a bit under the weather.', fr: 'J\'ai bien peur de ne pas pouvoir venir ce soir — je ne me sens pas très bien.', speak: 'I\'m afraid I can\'t come tonight — I\'m a bit under the weather.' },
          { en: 'We only see each other once in a blue moon — it\'s a shame we live so far apart.', fr: 'On ne se voit que très rarement — c\'est dommage qu\'on vive si loin l\'un de l\'autre.', speak: 'We only see each other once in a blue moon — it\'s a shame we live so far apart.' },
          { en: 'I think you\'re barking up the wrong tree — the problem isn\'t the budget, it\'s the planning.', fr: 'Je pense que tu fais fausse route — le problème n\'est pas le budget, c\'est la planification.', speak: 'I think you\'re barking up the wrong tree — the problem isn\'t the budget, it\'s the planning.' },
          { en: 'A new phone these days costs an arm and a leg — have you seen the prices?', fr: 'Un nouveau téléphone de nos jours coûte les yeux de la tête — vous avez vu les prix ?', speak: 'A new phone these days costs an arm and a leg — have you seen the prices?' }
        ],
        vocabulary: [
          { en: 'hit the nail on the head', fr: 'mettre le doigt sur le problème / avoir tout à fait raison', pronunciation: '/hɪt ðə neɪl ɒn ðə hɛd/', example: { en: 'She hit the nail on the head with her analysis.', fr: 'Elle a mis le doigt sur le problème avec son analyse.' } },
          { en: 'bite the bullet', fr: 'prendre son courage à deux mains', pronunciation: '/baɪt ðə ˈbʊlɪt/', example: { en: 'I hate dentists, but I had to bite the bullet.', fr: 'Je déteste les dentistes, mais j\'ai dû prendre mon courage à deux mains.' } },
          { en: 'under the weather', fr: 'ne pas se sentir bien / patraque', pronunciation: '/ˈʌndər ðə ˈwɛðər/', example: { en: 'He\'s feeling a bit under the weather today.', fr: 'Il ne se sent pas très bien aujourd\'hui.' } },
          { en: 'once in a blue moon', fr: 'une fois tous les trente-six du mois / très rarement', pronunciation: '/wʌns ɪn ə bluː muːn/', example: { en: 'I eat fast food once in a blue moon.', fr: 'Je mange de la fast food très rarement.' } },
          { en: 'cost an arm and a leg', fr: 'coûter les yeux de la tête', pronunciation: '/kɒst ən ɑːrm ænd ə lɛɡ/', example: { en: 'That handbag costs an arm and a leg!', fr: 'Ce sac à main coûte les yeux de la tête !' } },
          { en: 'barking up the wrong tree', fr: 'faire fausse route', pronunciation: '/ˈbɑːrkɪŋ ʌp ðə rɒŋ triː/', example: { en: 'You\'re barking up the wrong tree if you think I did it.', fr: 'Tu fais fausse route si tu penses que c\'est moi qui l\'ai fait.' } },
          { en: 'break the ice', fr: 'briser la glace', pronunciation: '/breɪk ðə aɪs/', example: { en: 'He told a joke to break the ice.', fr: 'Il a raconté une blague pour briser la glace.' } },
          { en: 'the tip of the iceberg', fr: 'la partie visible de l\'iceberg', pronunciation: '/ðə tɪp ɒv ðə ˈaɪsbɜːrɡ/', example: { en: 'The scandal was just the tip of the iceberg.', fr: 'Le scandale n\'était que la partie visible de l\'iceberg.' } }
        ]
      },
      exercises: [
        {
          type: 'flashcard',
          id: 'w4d3ex1',
          instruction: { en: 'Click each card to learn the idiom meaning', fr: 'Cliquez sur chaque carte pour apprendre la signification de l\'idiome' },
          cards: [
            { front: 'hit the nail on the head', back: 'to identify a problem or solution exactly correctly', example: { en: 'Your diagnosis hit the nail on the head.', fr: 'Ton diagnostic était parfaitement juste.' } },
            { front: 'bite the bullet', back: 'to do something unpleasant but necessary bravely', example: { en: 'I bit the bullet and asked for a pay rise.', fr: 'J\'ai pris mon courage à deux mains et demandé une augmentation.' } },
            { front: 'once in a blue moon', back: 'very rarely; almost never', example: { en: 'We meet once in a blue moon.', fr: 'Nous nous voyons très rarement.' } },
            { front: 'cost an arm and a leg', back: 'to be extremely expensive', example: { en: 'Electric cars cost an arm and a leg.', fr: 'Les voitures électriques coûtent les yeux de la tête.' } },
            { front: 'under the weather', back: 'feeling slightly ill or not well', example: { en: 'I\'m a bit under the weather — I have a cold.', fr: 'Je ne suis pas au mieux — j\'ai un rhume.' } },
            { front: 'break the ice', back: 'to do or say something to relieve tension in a new social situation', example: { en: 'A game can help break the ice at a party.', fr: 'Un jeu peut aider à briser la glace à une fête.' } }
          ]
        },
        {
          type: 'mcq',
          id: 'w4d3ex2',
          question: { en: 'Your colleague says: "I think we\'re barking up the wrong tree with this marketing strategy." What do they mean?', fr: 'Votre collègue dit : "I think we\'re barking up the wrong tree with this marketing strategy." Que veulent-ils dire ?' },
          options: ['The marketing strategy involves trees.', 'They think the strategy is completely wrong and will not work.', 'They think the strategy is very expensive.', 'They think a dog should be involved in the marketing.'],
          correct: 1,
          explanation: { en: '"Barking up the wrong tree" means pursuing the wrong course of action or focusing on the wrong thing. Your colleague is saying the marketing strategy is the wrong approach.', fr: '"Barking up the wrong tree" signifie poursuivre la mauvaise voie ou se concentrer sur la mauvaise chose. Votre collègue dit que la stratégie marketing est la mauvaise approche.' }
        },
        {
          type: 'fill',
          id: 'w4d3ex3',
          instruction: { en: 'Complete the sentence with the correct idiom', fr: 'Complétez la phrase avec l\'idiome correct' },
          template: 'The financial crisis was just the ___ of the iceberg — the real problems were much deeper.',
          answer: 'tip',
          hint: { en: 'The visible part of an iceberg that sticks out above water', fr: 'La partie visible d\'un iceberg qui dépasse au-dessus de l\'eau' }
        },
        {
          type: 'match',
          id: 'w4d3ex4',
          instruction: { en: 'Match each idiom to its meaning', fr: 'Associez chaque idiome à sa signification' },
          pairs: [
            { left: 'break the ice', right: 'réduire la tension sociale' },
            { left: 'bite the bullet', right: 'faire quelque chose de difficile avec courage' },
            { left: 'once in a blue moon', right: 'très rarement' },
            { left: 'cost an arm and a leg', right: 'être très cher' }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d3q1',
          question: { en: 'You want to say that a new car is extremely expensive. Which idiom would you use?', fr: 'Vous voulez dire qu\'une nouvelle voiture est extrêmement chère. Quel idiome utiliseriez-vous ?' },
          options: ['It breaks the ice.', 'It costs an arm and a leg.', 'It\'s once in a blue moon.', 'It hits the nail on the head.'],
          correct: 1,
          explanation: { en: '"It costs an arm and a leg" means something is very expensive — as if you would have to give up a limb to pay for it. This is the natural idiom for talking about high prices.', fr: '"It costs an arm and a leg" signifie que quelque chose est très cher — comme si vous deviez donner un membre pour payer. C\'est l\'idiome naturel pour parler de prix élevés.' }
        },
        {
          type: 'mcq',
          id: 'w4d3q2',
          question: { en: 'Why can\'t you translate idioms word by word?', fr: 'Pourquoi ne peut-on pas traduire les idiomes mot à mot ?' },
          options: ['Because idioms are too long.', 'Because their meaning is figurative and cannot be deduced from the individual words.', 'Because they are only used in poetry.', 'Because they change meaning every year.'],
          correct: 1,
          explanation: { en: 'Idioms have a figurative (not literal) meaning. "Bite the bullet" does not mean literally biting a bullet — it means facing a difficult situation bravely. Translating word by word produces nonsense.', fr: 'Les idiomes ont un sens figuré (pas littéral). "Bite the bullet" ne signifie pas littéralement mordre une balle — cela signifie faire face à une situation difficile avec courage. Traduire mot à mot produit un non-sens.' }
        },
        {
          type: 'mcq',
          id: 'w4d3q3',
          question: { en: 'Which idiom means "to say or do something to make a social situation more relaxed"?', fr: 'Quel idiome signifie "dire ou faire quelque chose pour rendre une situation sociale plus détendue" ?' },
          options: ['Bite the bullet', 'Hit the nail on the head', 'Break the ice', 'Bark up the wrong tree'],
          correct: 2,
          explanation: { en: '"Break the ice" means to do something to relieve tension or awkwardness in a new social situation — for example, telling a joke, playing a game, or asking an interesting question when meeting strangers.', fr: '"Break the ice" signifie faire quelque chose pour soulager la tension ou le malaise dans une nouvelle situation sociale — par exemple, raconter une blague, jouer à un jeu ou poser une question intéressante lors de la rencontre de nouveaux venus.' }
        }
      ]
    },
    {
      day: 4,
      dayName: { en: 'Thursday', fr: 'Jeudi' },
      title: { en: 'Second Conditional — Hypothetical Situations', fr: 'Le deuxième conditionnel — Situations hypothétiques' },
      icon: '💭',
      theory: {
        intro: {
          en: 'The Second Conditional is one of the most important grammar structures for discussing opinions, debates, and hypothetical ideas. Unlike the First Conditional (real future possibilities), the Second Conditional deals with imaginary or unlikely situations — things you are dreaming about, things that are not currently true, or things you consider very unlikely. It is essential for nuanced, sophisticated discussions about society, media, and opinions.',
          fr: 'Le Deuxième Conditionnel est l\'une des structures grammaticales les plus importantes pour discuter d\'opinions, de débats et d\'idées hypothétiques. Contrairement au Premier Conditionnel (possibilités futures réelles), le Deuxième Conditionnel traite de situations imaginaires ou peu probables — des choses dont vous rêvez, des choses qui ne sont pas actuellement vraies, ou des choses que vous considérez très peu probables. Il est essentiel pour des discussions nuancées et sophistiquées sur la société, les médias et les opinions.'
        },
        grammarTitle: { en: 'Second Conditional: Structure and Uses', fr: 'Deuxième Conditionnel : Structure et utilisations' },
        grammar: {
          en: 'Structure: If + Past Simple, would + base verb. Note: "were" is often used instead of "was" in the if-clause for all subjects in formal English: "If I were rich..." (not "If I was rich..." in formal writing). Main uses: (1) Imaginary / hypothetical present or future: "If I had more time, I would read more books"; (2) Advice with "If I were you...": "If I were you, I would delete that social media account"; (3) Unlikely or impossible conditions: "If every person on Earth turned off their TV, air pollution would decrease." Key distinction from First Conditional: First = real possibility ("If it rains, I\'ll take an umbrella"); Second = hypothetical/unlikely ("If it rained every day, I would move to a drier country"). Common mistakes: DO NOT use "would" in the if-clause ("If I would have..." is WRONG — say "If I had...").',
          fr: 'Structure : If + Past Simple, would + verbe de base. Note : "were" est souvent utilisé à la place de "was" dans la proposition if pour tous les sujets en anglais formel : "If I were rich..." (pas "If I was rich..." à l\'écrit formel). Utilisations principales : (1) Présent ou futur imaginaire/hypothétique : "If I had more time, I would read more books" ; (2) Conseil avec "If I were you..." : "If I were you, I would delete that social media account" ; (3) Conditions peu probables ou impossibles : "If every person on Earth turned off their TV, air pollution would decrease." Distinction clé avec le Premier Conditionnel : Premier = possibilité réelle ("If it rains, I\'ll take an umbrella") ; Deuxième = hypothétique/peu probable ("If it rained every day, I would move to a drier country"). Erreurs courantes : N\'UTILISEZ PAS "would" dans la proposition if ("If I would have..." est FAUX — dites "If I had...").'
        },
        examples: [
          { en: 'If I were a journalist, I would investigate political corruption.', fr: 'Si j\'étais journaliste, j\'enquêterais sur la corruption politique.', speak: 'If I were a journalist, I would investigate political corruption.' },
          { en: 'If social media didn\'t exist, people would communicate very differently.', fr: 'Si les réseaux sociaux n\'existaient pas, les gens communiqueraient très différemment.', speak: 'If social media didn\'t exist, people would communicate very differently.' },
          { en: 'If I were you, I would think twice before posting that online.', fr: 'À ta place, je réfléchirais à deux fois avant de poster ça en ligne.', speak: 'If I were you, I would think twice before posting that online.' },
          { en: 'The world would be a very different place if governments controlled the internet.', fr: 'Le monde serait très différent si les gouvernements contrôlaient Internet.', speak: 'The world would be a very different place if governments controlled the internet.' },
          { en: 'If everyone fact-checked the news they read, misinformation would spread far less quickly.', fr: 'Si tout le monde vérifiait les faits des informations qu\'il lit, la désinformation se répandrait bien moins vite.', speak: 'If everyone fact-checked the news they read, misinformation would spread far less quickly.' },
          { en: 'I would spend more time outdoors if I didn\'t have such a demanding job.', fr: 'Je passerais plus de temps à l\'extérieur si je n\'avais pas un travail aussi exigeant.', speak: 'I would spend more time outdoors if I didn\'t have such a demanding job.' }
        ],
        vocabulary: [
          { en: 'hypothetical', fr: 'hypothétique', pronunciation: '/ˌhaɪpəˈθɛtɪkəl/', example: { en: 'This is a purely hypothetical scenario.', fr: 'C\'est un scénario purement hypothétique.' } },
          { en: 'to investigate', fr: 'enquêter / investiguer', pronunciation: '/ɪnˈvɛstɪɡeɪt/', example: { en: 'The journalist investigated the corruption case.', fr: 'La journaliste a enquêté sur le cas de corruption.' } },
          { en: 'to fact-check', fr: 'vérifier les faits', pronunciation: '/ˈfækt tʃɛk/', example: { en: 'Always fact-check before sharing news online.', fr: 'Vérifiez toujours les faits avant de partager des nouvelles en ligne.' } },
          { en: 'censorship', fr: 'censure', pronunciation: '/ˈsɛnsərʃɪp/', example: { en: 'Many people oppose internet censorship.', fr: 'Beaucoup de gens s\'opposent à la censure d\'Internet.' } },
          { en: 'to regulate', fr: 'réguler / réglémenter', pronunciation: '/ˈrɛɡjʊleɪt/', example: { en: 'Should governments regulate social media?', fr: 'Les gouvernements devraient-ils réguler les réseaux sociaux ?' } },
          { en: 'to demand', fr: 'exiger / demander', pronunciation: '/dɪˈmɑːnd/', example: { en: 'Citizens are demanding more transparency.', fr: 'Les citoyens exigent plus de transparence.' } }
        ]
      },
      exercises: [
        {
          type: 'fill',
          id: 'w4d4ex1',
          instruction: { en: 'Complete the Second Conditional sentence correctly', fr: 'Complétez correctement la phrase au Deuxième Conditionnel' },
          template: 'If I ___ (be) the president, I would regulate social media platforms very strictly.',
          answer: 'were',
          hint: { en: 'In Second Conditional, use "were" (not "was") for all subjects in formal English', fr: 'Au Deuxième Conditionnel, utilisez "were" (pas "was") pour tous les sujets en anglais formel' }
        },
        {
          type: 'mcq',
          id: 'w4d4ex2',
          question: { en: 'Which sentence is a correct Second Conditional?', fr: 'Quelle phrase est un Deuxième Conditionnel correct ?' },
          options: ['If I will have more time, I would read more.', 'If I had more time, I would read more.', 'If I have more time, I will read more.', 'If I would have more time, I read more.'],
          correct: 1,
          explanation: { en: '"If I had more time, I would read more" — If + Past Simple (had), would + base verb (read). The others contain errors: will in if-clause, First Conditional structure, and would in if-clause.', fr: '"If I had more time, I would read more" — If + Past Simple (had), would + verbe de base (read). Les autres contiennent des erreurs : will dans la proposition if, structure du Premier Conditionnel, et would dans la proposition if.' }
        },
        {
          type: 'order',
          id: 'w4d4ex3',
          instruction: { en: 'Rearrange to form a correct Second Conditional sentence for a debate', fr: 'Réarrangez pour former une phrase correcte au Deuxième Conditionnel pour un débat' },
          words: ['exist,', 'didn\'t', 'people', 'If', 'social', 'media', 'less', 'be', 'would', 'isolated'],
          answer: 'If social media didn\'t exist, people would be less isolated'
        },
        {
          type: 'flashcard',
          id: 'w4d4ex4',
          instruction: { en: 'Compare the two conditionals using media and society topics', fr: 'Comparez les deux conditionnels en utilisant des sujets liés aux médias et à la société' },
          cards: [
            { front: '1st Conditional (real)', back: 'If you fact-check, you will avoid sharing misinformation.', example: { en: 'This is a real, likely situation.', fr: 'C\'est une situation réelle et probable.' } },
            { front: '2nd Conditional (hypothetical)', back: 'If everyone fact-checked, misinformation would disappear.', example: { en: 'Unlikely in reality, but useful for debate.', fr: 'Peu probable en réalité, mais utile pour le débat.' } },
            { front: 'Advice with 2nd Conditional', back: 'If I were you, I would delete that post.', example: { en: 'Always use "were" (not "was") for advice.', fr: 'Utilisez toujours "were" (pas "was") pour les conseils.' } },
            { front: 'Common error to avoid', back: 'WRONG: If I would have... / RIGHT: If I had...', example: { en: 'Never use "would" in the if-clause.', fr: 'N\'utilisez jamais "would" dans la proposition if.' } },
            { front: 'would + base verb', back: 'I would write / She would stop / They would regulate', example: { en: '"Would" is invariable — same for all subjects.', fr: '"Would" est invariable — identique pour tous les sujets.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d4q1',
          question: { en: 'What is the main difference between the 1st and 2nd Conditional?', fr: 'Quelle est la principale différence entre le 1er et le 2ème Conditionnel ?' },
          options: ['The 1st uses "will", the 2nd uses "would" — they mean the same thing.', '1st = real/possible future; 2nd = hypothetical/imaginary or unlikely.', '1st is for the past; 2nd is for the future.', '1st is formal; 2nd is informal.'],
          correct: 1,
          explanation: { en: 'The key distinction: 1st Conditional describes real, possible future events ("If it rains, I\'ll cancel the picnic"); 2nd Conditional describes hypothetical, imaginary, or very unlikely situations ("If I were a bird, I would fly to Paris").', fr: 'La distinction clé : le 1er Conditionnel décrit des événements futurs réels et possibles ("If it rains, I\'ll cancel the picnic") ; le 2ème Conditionnel décrit des situations hypothétiques, imaginaires ou très peu probables ("If I were a bird, I would fly to Paris").' }
        },
        {
          type: 'mcq',
          id: 'w4d4q2',
          question: { en: 'You want to give your friend advice about their social media habits. Which sentence is correct?', fr: 'Vous voulez donner un conseil à votre ami sur ses habitudes sur les réseaux sociaux. Quelle phrase est correcte ?' },
          options: ['If I was you, I would take a break from social media.', 'If I were you, I would take a break from social media.', 'If I am you, I will take a break from social media.', 'If I would be you, I would take a break from social media.'],
          correct: 1,
          explanation: { en: '"If I were you, I would..." is the standard and formally correct structure for giving advice using the Second Conditional. "Were" is used for all subjects in formal English.', fr: '"If I were you, I would..." est la structure standard et formellement correcte pour donner des conseils avec le Deuxième Conditionnel. "Were" est utilisé pour tous les sujets en anglais formel.' }
        },
        {
          type: 'mcq',
          id: 'w4d4q3',
          question: { en: 'Which sentence discusses an opinion about society using the Second Conditional correctly?', fr: 'Quelle phrase discute d\'une opinion sur la société en utilisant correctement le Deuxième Conditionnel ?' },
          options: ['If governments will regulate AI, everything will improve.', 'If governments regulate AI, everything will improve.', 'If governments regulated AI more carefully, society would benefit greatly.', 'If governments regulated AI, everything will improve.'],
          correct: 2,
          explanation: { en: '"If governments regulated AI more carefully (Past Simple), society would benefit greatly (would + base verb)" — a perfect hypothetical opinion statement using the Second Conditional.', fr: '"If governments regulated AI more carefully (Past Simple), society would benefit greatly (would + verbe de base)" — un parfait énoncé d\'opinion hypothétique utilisant le Deuxième Conditionnel.' }
        }
      ]
    },
    {
      day: 5,
      dayName: { en: 'Friday', fr: 'Vendredi' },
      title: { en: 'Formal vs Informal Register', fr: 'Registre formel vs informel' },
      icon: '🎩',
      theory: {
        intro: {
          en: 'One of the most important aspects of language competence at B2 level is the ability to adapt your language to the situation — choosing the right register. Register is the level of formality in language. Using informal language in a formal context (or vice versa) can create misunderstandings or come across as disrespectful. Today we explore the key differences between formal and informal English.',
          fr: 'L\'un des aspects les plus importants de la compétence linguistique au niveau B2 est la capacité à adapter son langage à la situation — en choisissant le bon registre. Le registre est le niveau de formalité dans le langage. L\'utilisation d\'un langage informel dans un contexte formel (ou vice versa) peut créer des malentendus ou être perçue comme irrespectueuse. Aujourd\'hui, nous explorons les principales différences entre l\'anglais formel et informel.'
        },
        grammarTitle: { en: 'Key Differences: Formal vs Informal English', fr: 'Différences clés : Anglais formel vs informel' },
        grammar: {
          en: 'Register differences appear at every level of language: (1) Vocabulary: Formal uses Latin/French-origin words (commence, terminate, request, assist), while informal uses simpler Germanic words (start, end, ask, help). (2) Contractions: Formal avoids them (I am, do not, we have), informal uses them freely (I\'m, don\'t, we\'ve). (3) Sentence structure: Formal uses complete, complex sentences and passive voice ("It has been decided that..."); informal uses short, direct sentences and active voice. (4) Idioms and slang: Mostly informal; formal writing avoids them. (5) Openings/closings in messages: Formal ("Dear Ms Martin, ... Yours sincerely"); informal ("Hey Sarah, ... Talk soon!"). (6) Hedging and politeness markers: Formal ("I would be grateful if you could...", "Would it be possible to..."); informal ("Could you...?", "Can you...?"). Understanding these distinctions is a core B2 skill.',
          fr: 'Les différences de registre apparaissent à tous les niveaux du langage : (1) Vocabulaire : Le formel utilise des mots d\'origine latine/française (commence, terminate, request, assist), tandis que l\'informel utilise des mots germaniques plus simples (start, end, ask, help). (2) Contractions : Le formel les évite (I am, do not, we have), l\'informel les utilise librement (I\'m, don\'t, we\'ve). (3) Structure des phrases : Le formel utilise des phrases complètes et complexes et la voix passive ("It has been decided that...") ; l\'informel utilise des phrases courtes et directes et la voix active. (4) Idiomes et argot : Principalement informels ; la rédaction formelle les évite. (5) Ouvertures/fermetures dans les messages : Formel ("Dear Ms Martin, ... Yours sincerely") ; informel ("Hey Sarah, ... Talk soon!"). (6) Atténuation et marqueurs de politesse : Formel ("I would be grateful if you could...", "Would it be possible to...") ; informel ("Could you...?", "Can you...?"). Comprendre ces distinctions est une compétence clé au niveau B2.'
        },
        examples: [
          { en: 'Formal: I am writing to enquire whether it would be possible to reschedule our appointment.', fr: 'Formel : Je vous écris pour savoir s\'il serait possible de reporter notre rendez-vous.', speak: 'I am writing to enquire whether it would be possible to reschedule our appointment.' },
          { en: 'Informal: Hey! Any chance we could move our meeting to next week?', fr: 'Informel : Salut ! On pourrait décaler notre réunion à la semaine prochaine ?', speak: 'Hey! Any chance we could move our meeting to next week?' },
          { en: 'Formal: The management has decided to terminate the current contract with immediate effect.', fr: 'Formel : La direction a décidé de mettre fin au contrat actuel avec effet immédiat.', speak: 'The management has decided to terminate the current contract with immediate effect.' },
          { en: 'Informal: They\'ve decided to end the contract straight away.', fr: 'Informel : Ils ont décidé de mettre fin au contrat tout de suite.', speak: 'They\'ve decided to end the contract straight away.' },
          { en: 'Formal: I would be grateful if you could provide further clarification on this matter.', fr: 'Formel : Je vous serais reconnaissant(e) de bien vouloir m\'apporter des précisions supplémentaires sur cette question.', speak: 'I would be grateful if you could provide further clarification on this matter.' },
          { en: 'Informal: Could you explain that a bit more? I\'m not quite sure what you mean.', fr: 'Informel : Tu peux expliquer un peu plus ? Je ne suis pas tout à fait sûr(e) de ce que tu veux dire.', speak: 'Could you explain that a bit more? I\'m not quite sure what you mean.' }
        ],
        vocabulary: [
          { en: 'register', fr: 'registre (de langue)', pronunciation: '/ˈrɛdʒɪstər/', example: { en: 'Choosing the right register is essential.', fr: 'Choisir le bon registre est essentiel.' } },
          { en: 'to commence', fr: 'commencer (formel)', pronunciation: '/kəˈmɛns/', example: { en: 'The meeting will commence at 9am.', fr: 'La réunion commencera à 9h.' } },
          { en: 'to terminate', fr: 'mettre fin à (formel)', pronunciation: '/ˈtɜːrmɪneɪt/', example: { en: 'They terminated the agreement.', fr: 'Ils ont mis fin à l\'accord.' } },
          { en: 'to assist', fr: 'aider (formel)', pronunciation: '/əˈsɪst/', example: { en: 'I am happy to assist you.', fr: 'Je suis heureux de vous aider.' } },
          { en: 'to enquire / to request', fr: 'se renseigner / demander (formel)', pronunciation: '/ɪnˈkwaɪər/', example: { en: 'I am writing to request further information.', fr: 'Je vous écris pour demander des informations supplémentaires.' } },
          { en: 'appropriate', fr: 'approprié(e)', pronunciation: '/əˈproʊpriɪt/', example: { en: 'Formal language is appropriate in this context.', fr: 'Un langage formel est approprié dans ce contexte.' } }
        ]
      },
      exercises: [
        {
          type: 'match',
          id: 'w4d5ex1',
          instruction: { en: 'Match each informal word to its formal equivalent', fr: 'Associez chaque mot informel à son équivalent formel' },
          pairs: [
            { left: 'start', right: 'commence' },
            { left: 'end / stop', right: 'terminate' },
            { left: 'help', right: 'assist' },
            { left: 'ask', right: 'enquire / request' }
          ]
        },
        {
          type: 'mcq',
          id: 'w4d5ex2',
          question: { en: 'You need to email your bank to close your account. Which opening is appropriate?', fr: 'Vous devez envoyer un email à votre banque pour clôturer votre compte. Quelle ouverture est appropriée ?' },
          options: ['Hey guys!', 'Hi there, I need to close my account.', 'Dear Sir or Madam, I am writing to request the closure of my account.', 'To whoever reads this, close my account.'],
          correct: 2,
          explanation: { en: 'A formal business email to a bank requires "Dear Sir or Madam" (or a named person), followed by a formal purpose statement. The other options are all too informal or rude for a professional context.', fr: 'Un email professionnel formel à une banque nécessite "Dear Sir or Madam" (ou une personne nommée), suivi d\'une déclaration d\'objectif formelle. Les autres options sont toutes trop informelles ou impolies pour un contexte professionnel.' }
        },
        {
          type: 'fill',
          id: 'w4d5ex3',
          instruction: { en: 'Rewrite this informal sentence in formal English', fr: 'Réécrivez cette phrase informelle en anglais formel' },
          template: 'I would be grateful if you could ___ me with my application.',
          answer: 'assist',
          hint: { en: 'The formal equivalent of "help"', fr: 'L\'équivalent formel de "help"' }
        },
        {
          type: 'order',
          id: 'w4d5ex4',
          instruction: { en: 'Arrange the words to form a formal request sentence', fr: 'Arrangez les mots pour former une phrase de demande formelle' },
          words: ['be', 'it', 'possible', 'Would', 'meeting', 'to', 'the', 'reschedule'],
          answer: 'Would it be possible to reschedule the meeting'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d5q1',
          question: { en: 'Which of these is a feature of INFORMAL English?', fr: 'Laquelle de ces caractéristiques est propre à l\'anglais INFORMEL ?' },
          options: ['Use of passive voice', 'Use of contractions (I\'m, don\'t, we\'ve)', 'Long, complex sentence structures', 'Vocabulary of Latin or French origin'],
          correct: 1,
          explanation: { en: 'Contractions are a key feature of informal English. Formal English avoids contractions: "I am" not "I\'m", "do not" not "don\'t", "we have" not "we\'ve".', fr: 'Les contractions sont une caractéristique clé de l\'anglais informel. L\'anglais formel évite les contractions : "I am" pas "I\'m", "do not" pas "don\'t", "we have" pas "we\'ve".' }
        },
        {
          type: 'mcq',
          id: 'w4d5q2',
          question: { en: 'Why is register so important in English?', fr: 'Pourquoi le registre est-il si important en anglais ?' },
          options: ['Because it affects how quickly you speak.', 'Because using the wrong register can seem rude, unprofessional or disrespectful in certain contexts.', 'Because formal English is always more correct than informal English.', 'Because all English speakers always use the same register.'],
          correct: 1,
          explanation: { en: 'Using informal language in a formal context (e.g., emailing a CEO with "Hey mate!") can seem disrespectful. Using overly formal language with friends can seem cold and strange. Matching your register to the context is a sign of true language competence.', fr: 'Utiliser un langage informel dans un contexte formel (ex. : envoyer un email à un PDG avec "Hey mate!") peut sembler irrespectueux. Utiliser un langage trop formel avec des amis peut sembler froid et étrange. Adapter votre registre au contexte est un signe de vraie compétence linguistique.' }
        },
        {
          type: 'mcq',
          id: 'w4d5q3',
          question: { en: 'Which phrase is FORMAL?', fr: 'Quelle phrase est FORMELLE ?' },
          options: ['Can you send me the file?', 'Any chance you could send over that file?', 'I would be grateful if you could forward the relevant document at your earliest convenience.', 'Chuck the file over when you get a chance.'],
          correct: 2,
          explanation: { en: '"I would be grateful if you could forward the relevant document at your earliest convenience" uses formal vocabulary (forward, relevant, document, at your earliest convenience) and a formal structure (I would be grateful if you could...).', fr: '"I would be grateful if you could forward the relevant document at your earliest convenience" utilise un vocabulaire formel (forward, relevant, document, at your earliest convenience) et une structure formelle (I would be grateful if you could...).' }
        }
      ]
    },
    {
      day: 6,
      dayName: { en: 'Saturday', fr: 'Samedi' },
      title: { en: 'Final Debate, Month Review & Celebration', fr: 'Débat final, révision du mois et célébration' },
      icon: '🏆',
      theory: {
        intro: {
          en: 'Congratulations — you have reached the final day of your four-week intermediate course! Today we bring together EVERYTHING from the entire month: travel vocabulary, past tenses, professional language, health vocabulary, future forms, conditionals, idioms, opinion phrases, media vocabulary, and formal/informal register. This is your opportunity to demonstrate the full range of your language skills in a discussion and debate context.',
          fr: 'Félicitations — vous avez atteint le dernier jour de votre cours intermédiaire de quatre semaines ! Aujourd\'hui, nous réunissons TOUT du mois entier : vocabulaire du voyage, temps du passé, langue professionnelle, vocabulaire de la santé, formes futures, conditionnels, idiomes, expressions d\'opinion, vocabulaire médiatique et registre formel/informel. C\'est votre opportunité de démontrer toute l\'étendue de vos compétences linguistiques dans un contexte de discussion et de débat.'
        },
        grammarTitle: { en: 'A Month of Progress — Debate and Review', fr: 'Un mois de progrès — Débat et révision' },
        grammar: {
          en: 'At B1-B2 level, the hallmark of genuine competence is the ability to switch naturally between tenses, registers, and functions. In the debate below, notice how the speakers: use idioms ("cost an arm and a leg", "the tip of the iceberg"), express nuanced opinions ("It could be argued that...", "I respectfully disagree"), use conditionals for hypothetical arguments ("If social media were better regulated, we would have fewer problems"), use Present Perfect for experience ("I\'ve lived in two countries and..."), and adjust register appropriately. This integration of all skills is what transforms a language learner into a confident English communicator.',
          fr: 'Au niveau B1-B2, la marque d\'une vraie compétence est la capacité à passer naturellement d\'un temps à l\'autre, d\'un registre à l\'autre et d\'une fonction à l\'autre. Dans le débat ci-dessous, remarquez comment les locuteurs : utilisent des idiomes ("cost an arm and a leg", "the tip of the iceberg"), expriment des opinions nuancées ("It could be argued that...", "I respectfully disagree"), utilisent des conditionnels pour des arguments hypothétiques ("If social media were better regulated, we would have fewer problems"), utilisent le Present Perfect pour l\'expérience ("I\'ve lived in two countries and..."), et ajustent le registre de manière appropriée. Cette intégration de toutes les compétences est ce qui transforme un apprenant en langue en un communicateur confiant en anglais.'
        },
        examples: [
          { en: 'Moderator: The question today is: Does social media do more harm than good?', fr: 'Modérateur : La question d\'aujourd\'hui est : Les réseaux sociaux font-ils plus de mal que de bien ?', speak: 'The question today is: Does social media do more harm than good?' },
          { en: 'Speaker A: In my opinion, the harm is just the tip of the iceberg. If we regulated these platforms, we would protect millions of young people from misinformation and online bullying.', fr: 'Orateur A : À mon avis, le mal n\'est que la partie visible de l\'iceberg. Si nous régulions ces plateformes, nous protégerions des millions de jeunes contre la désinformation et le cyberharcèlement.', speak: 'In my opinion, the harm is just the tip of the iceberg.' },
          { en: 'Speaker B: I respectfully disagree. It could be argued that social media has democratised information. I\'ve spoken to people in different countries who say it has transformed their access to education.', fr: 'Orateur B : Je suis respectueusement en désaccord. On pourrait soutenir que les réseaux sociaux ont démocratisé l\'information. J\'ai parlé à des personnes dans différents pays qui disent que cela a transformé leur accès à l\'éducation.', speak: 'I respectfully disagree. It could be argued that social media has democratised information.' },
          { en: 'Speaker A: I see your point, but the algorithms cost society an arm and a leg in terms of mental health crises. If I were a policymaker, I would invest heavily in digital literacy education instead.', fr: 'Orateur A : Je vois votre point de vue, mais les algorithmes coûtent à la société très cher en termes de crises de santé mentale. Si j\'étais décideur politique, j\'investirais massivement dans l\'éducation à la littératie numérique à la place.', speak: 'I see your point, but the algorithms cost society an arm and a leg in terms of mental health crises.' },
          { en: 'Speaker B: That\'s a valid point, and I partially agree. Perhaps the problem isn\'t social media itself — perhaps we\'re barking up the wrong tree by blaming the platform rather than the lack of education.', fr: 'Orateur B : C\'est un point valide, et je suis partiellement d\'accord. Peut-être que le problème n\'est pas les réseaux sociaux en eux-mêmes — peut-être que nous faisons fausse route en blâmant la plateforme plutôt que le manque d\'éducation.', speak: 'That\'s a valid point, and I partially agree.' },
          { en: 'Moderator: Excellent discussion! As far as I\'m concerned, this debate shows that the issue is deeply nuanced and requires careful thought.', fr: 'Modérateur : Excellente discussion ! En ce qui me concerne, ce débat montre que la question est profondément nuancée et nécessite une réflexion approfondie.', speak: 'Excellent discussion! As far as I\'m concerned, this debate shows that the issue is deeply nuanced.' }
        ],
        vocabulary: [
          { en: 'to democratise', fr: 'démocratiser', pronunciation: '/dɪˈmɒkrətaɪz/', example: { en: 'The internet has democratised access to information.', fr: 'Internet a démocratisé l\'accès à l\'information.' } },
          { en: 'digital literacy', fr: 'littératie numérique', pronunciation: '/ˈdɪdʒɪtəl ˈlɪtərəsi/', example: { en: 'Digital literacy should be taught in all schools.', fr: 'La littératie numérique devrait être enseignée dans toutes les écoles.' } },
          { en: 'policymaker', fr: 'décideur politique', pronunciation: '/ˈpɒlɪsiˌmeɪkər/', example: { en: 'Policymakers need to act on misinformation.', fr: 'Les décideurs politiques doivent agir sur la désinformation.' } },
          { en: 'online bullying / cyberbullying', fr: 'cyberharcèlement', pronunciation: '/ˈsaɪbərbʊliɪŋ/', example: { en: 'Cyberbullying is a serious issue for teenagers.', fr: 'Le cyberharcèlement est un problème grave pour les adolescents.' } },
          { en: 'competence', fr: 'compétence', pronunciation: '/ˈkɒmpɪtəns/', example: { en: 'Language competence includes cultural understanding.', fr: 'La compétence linguistique inclut la compréhension culturelle.' } }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w4d6ex1',
          question: { en: 'In the debate, Speaker B says "perhaps we\'re barking up the wrong tree." What does this mean in context?', fr: 'Dans le débat, l\'Orateur B dit "perhaps we\'re barking up the wrong tree." Qu\'est-ce que cela signifie dans ce contexte ?' },
          options: ['They are using the wrong language.', 'The focus on blaming social media is misplaced — the real problem is education.', 'Social media companies are hiding in trees.', 'The debate is going in the wrong direction.'],
          correct: 1,
          explanation: { en: 'Speaker B uses "barking up the wrong tree" to suggest that blaming social media is the wrong target — the real problem may be the lack of digital literacy education.', fr: 'L\'Orateur B utilise "barking up the wrong tree" pour suggérer que blâmer les réseaux sociaux est la mauvaise cible — le vrai problème pourrait être le manque d\'éducation à la littératie numérique.' }
        },
        {
          type: 'fill',
          id: 'w4d6ex2',
          instruction: { en: 'Complete the debate sentence with the correct conditional form', fr: 'Complétez la phrase du débat avec la forme conditionnelle correcte' },
          template: 'If I ___ (be) a policymaker, I would invest in digital literacy programmes in schools.',
          answer: 'were',
          hint: { en: 'Second Conditional: If + Past Simple — use "were" for all subjects in formal English', fr: 'Deuxième Conditionnel : If + Past Simple — utilisez "were" pour tous les sujets en anglais formel' }
        },
        {
          type: 'order',
          id: 'w4d6ex3',
          instruction: { en: 'Arrange the words to form a nuanced opinion statement', fr: 'Arrangez les mots pour former un énoncé d\'opinion nuancé' },
          words: ['argued', 'that', 'could', 'be', 'It', 'media', 'social', 'is', 'both', 'harmful', 'and', 'beneficial'],
          answer: 'It could be argued that social media is both harmful and beneficial'
        },
        {
          type: 'flashcard',
          id: 'w4d6ex4',
          instruction: { en: 'Review the essential skills from all four weeks', fr: 'Révisez les compétences essentielles des quatre semaines' },
          cards: [
            { front: 'Expressing a nuanced opinion', back: '"It could be argued that... / I tend to think..."', example: { en: 'Use for balanced, thoughtful discussion.', fr: 'Utilisez pour une discussion équilibrée et réfléchie.' } },
            { front: 'Polite disagreement', back: '"I respectfully disagree / I take a different view."', example: { en: 'Disagree without being rude.', fr: 'Être en désaccord sans être impoli.' } },
            { front: 'Using an idiom naturally', back: '"We\'re barking up the wrong tree here."', example: { en: 'Idioms add colour and fluency to speech.', fr: 'Les idiomes ajoutent de la couleur et de la fluidité au discours.' } },
            { front: 'Second Conditional in debate', back: '"If we regulated AI, society would benefit."', example: { en: 'Great for hypothetical policy arguments.', fr: 'Idéal pour des arguments politiques hypothétiques.' } },
            { front: 'Formal register — request', back: '"I would be grateful if you could..."', example: { en: 'Use in emails and professional writing.', fr: 'Utilisez dans les emails et la rédaction professionnelle.' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w4d6q1',
          question: { en: 'Which sentence demonstrates the most sophisticated B2-level language?', fr: 'Quelle phrase démontre le langage B2 le plus sophistiqué ?' },
          options: ['Social media is bad.', 'I think social media has good and bad parts.', 'It could be argued that while social media has democratised information, its algorithmic bias poses a significant risk to public discourse.', 'Social media is sometimes good and sometimes not good.'],
          correct: 2,
          explanation: { en: 'The third sentence uses hedging ("it could be argued that"), complex vocabulary (democratised, algorithmic bias, public discourse), and a concessive structure ("while..."). This is characteristic of B2-level English.', fr: 'La troisième phrase utilise l\'atténuation ("it could be argued that"), un vocabulaire complexe (democratised, algorithmic bias, public discourse) et une structure concessive ("while..."). C\'est caractéristique de l\'anglais au niveau B2.' }
        },
        {
          type: 'mcq',
          id: 'w4d6q2',
          question: { en: 'You\'ve completed four weeks of intermediate English. What have you achieved?', fr: 'Vous avez terminé quatre semaines d\'anglais intermédiaire. Qu\'avez-vous accompli ?' },
          options: ['Nothing — language learning takes years.', 'A solid B1-B2 foundation covering grammar, vocabulary, idioms, and communication skills across four real-life themes.', 'You are now a native English speaker.', 'Only travel vocabulary.'],
          correct: 1,
          explanation: { en: 'Over four weeks, you have covered: travel & past tenses, work & professional communication (Present Perfect), health & future forms (will, going to, 1st conditional), and opinions/media (idioms, 2nd conditional, register). This is a strong B1-B2 foundation!', fr: 'En quatre semaines, vous avez couvert : voyage & temps du passé, travail & communication professionnelle (Present Perfect), santé & formes futures (will, going to, 1er conditionnel), et opinions/médias (idiomes, 2ème conditionnel, registre). C\'est une solide base B1-B2 !' }
        },
        {
          type: 'mcq',
          id: 'w4d6q3',
          question: { en: 'What is the best way to continue improving your English after this course?', fr: 'Quelle est la meilleure façon de continuer à améliorer votre anglais après ce cours ?' },
          options: ['Stop learning — you know enough now.', 'Only read English grammar books.', 'Practise regularly: read authentic content, listen to podcasts, speak with others, and write in English every day.', 'Wait until you feel confident to practise.'],
          correct: 2,
          explanation: { en: 'Language learning is a continuous process. The most effective learners combine regular input (reading, listening to podcasts, watching media) with active output (speaking, writing) and deliberate study of new vocabulary and grammar. Keep going!', fr: 'L\'apprentissage des langues est un processus continu. Les apprenants les plus efficaces combinent des entrées régulières (lecture, écoute de podcasts, visionnage de médias) avec une production active (parler, écrire) et une étude délibérée de nouveau vocabulaire et de grammaire. Continuez !' }
        }
      ]
    }
  ],
  sunday: {
    title: { en: 'Week 4 Review & Month Celebration', fr: 'Révision — Semaine 4 et célébration du mois' },
    summary: {
      en: 'This week you explored the language of opinions and media at B2 level. You built a rich media vocabulary (headline, algorithm, viral, bias), mastered expressing opinions with nuance and politeness, learned 8 essential English idioms, studied the Second Conditional for hypothetical discussions, and understood the critical distinction between formal and informal registers. Combined with weeks 1 to 3, you now have a comprehensive B1-B2 English toolkit spanning travel, work, health, and society.',
      fr: 'Cette semaine, vous avez exploré le langage des opinions et des médias au niveau B2. Vous avez construit un riche vocabulaire médiatique (headline, algorithm, viral, bias), maîtrisé l\'expression d\'opinions avec nuance et politesse, appris 8 idiomes anglais essentiels, étudié le Deuxième Conditionnel pour les discussions hypothétiques, et compris la distinction cruciale entre les registres formel et informel. Combiné aux semaines 1 à 3, vous disposez maintenant d\'une boîte à outils complète en anglais B1-B2 couvrant les voyages, le travail, la santé et la société.'
    },
    vocabulary: [
      { en: 'headline', fr: 'titre d\'article', pronunciation: '/ˈhɛdlaɪn/' },
      { en: 'algorithm', fr: 'algorithme', pronunciation: '/ˈælɡərɪðəm/' },
      { en: 'misinformation', fr: 'désinformation', pronunciation: '/ˌmɪsɪnfəˈmeɪʃən/' },
      { en: 'bias', fr: 'parti pris / biais', pronunciation: '/ˈbaɪəs/' },
      { en: 'to fact-check', fr: 'vérifier les faits', pronunciation: '/ˈfækt tʃɛk/' },
      { en: 'nuanced', fr: 'nuancé(e)', pronunciation: '/ˈnjuːɑːnst/' },
      { en: 'controversial', fr: 'controversé(e)', pronunciation: '/ˌkɒntrəˈvɜːrʃəl/' },
      { en: 'register', fr: 'registre de langue', pronunciation: '/ˈrɛdʒɪstər/' },
      { en: 'to regulate', fr: 'réguler', pronunciation: '/ˈrɛɡjʊleɪt/' },
      { en: 'digital literacy', fr: 'littératie numérique', pronunciation: '/ˈdɪdʒɪtəl ˈlɪtərəsi/' }
    ],
    grammarPoints: [
      {
        title: { en: 'Second Conditional', fr: 'Deuxième Conditionnel' },
        rule: { en: 'If + Past Simple, would + base verb. Used for hypothetical/imaginary situations. Use "were" (not "was") in formal English for all subjects. NEVER use "would" in the if-clause. Key uses: dreams, advice ("If I were you..."), and debate/opinion ("If governments regulated AI, society would benefit").', fr: 'If + Past Simple, would + verbe de base. Utilisé pour des situations hypothétiques/imaginaires. Utilisez "were" (pas "was") en anglais formel pour tous les sujets. N\'utilisez JAMAIS "would" dans la proposition if. Utilisations clés : rêves, conseils ("If I were you..."), et débat/opinion ("If governments regulated AI, society would benefit").' },
        example: { en: 'If I were a journalist, I would investigate political corruption. / If social media didn\'t exist, society would communicate differently.', fr: 'Si j\'étais journaliste, j\'enquêterais sur la corruption politique. / Si les réseaux sociaux n\'existaient pas, la société communiquerait différemment.' }
      },
      {
        title: { en: 'Expressing Opinions — Register and Strength', fr: 'Exprimer des opinions — Registre et force' },
        rule: { en: 'Strong: "I strongly believe / I am convinced that". Neutral: "In my opinion / I think". Hedged: "It could be argued / It seems to me". Agree: "That\'s a valid point / Absolutely." Partial agreement: "I see your point, but...". Disagree: "I respectfully disagree / I take a different view."', fr: 'Fort : "I strongly believe / I am convinced that". Neutre : "In my opinion / I think". Atténué : "It could be argued / It seems to me". Accord : "That\'s a valid point / Absolutely." Accord partiel : "I see your point, but...". Désaccord : "I respectfully disagree / I take a different view."' },
        example: { en: 'It could be argued that regulation is necessary. / I see your point, but I think the issue is more complex.', fr: 'On pourrait soutenir que la régulation est nécessaire. / Je vois votre point, mais je pense que la question est plus complexe.' }
      },
      {
        title: { en: 'Formal vs Informal Register', fr: 'Registre formel vs informel' },
        rule: { en: 'Formal: no contractions, Latin/French vocabulary (commence, terminate, request, assist), complex sentences, passive voice, polite structures ("I would be grateful if..."). Informal: contractions, simple vocabulary (start, end, ask, help), short direct sentences, idioms.', fr: 'Formel : pas de contractions, vocabulaire latin/français (commence, terminate, request, assist), phrases complexes, voix passive, structures polies ("I would be grateful if..."). Informel : contractions, vocabulaire simple (start, end, ask, help), phrases courtes et directes, idiomes.' },
        example: { en: 'Formal: "I am writing to request further information." / Informal: "Could you tell me more about it?"', fr: 'Formel : "I am writing to request further information." / Informel : "Could you tell me more about it?"' }
      }
    ],
    conversationTopics: [
      {
        title: { en: 'Media and Society Debate', fr: 'Débat sur les médias et la société' },
        prompts: [
          { en: 'Do you think social media does more harm than good? Give specific examples to support your view.', fr: 'Pensez-vous que les réseaux sociaux font plus de mal que de bien ? Donnez des exemples précis pour soutenir votre point de vue.' },
          { en: 'If you could change one thing about how the media operates, what would it be and why?', fr: 'Si vous pouviez changer une chose dans le fonctionnement des médias, quelle serait-elle et pourquoi ?' },
          { en: 'How do you personally decide whether a news story is trustworthy? What sources do you trust?', fr: 'Comment décidez-vous personnellement si une nouvelle est digne de confiance ? Quelles sources faites-vous confiance ?' },
          { en: 'Do you think influencers have too much power in today\'s society? Should they be regulated?', fr: 'Pensez-vous que les influenceurs ont trop de pouvoir dans la société d\'aujourd\'hui ? Devraient-ils être réglementés ?' },
          { en: 'In your opinion, has technology made people more or less connected to each other?', fr: 'À votre avis, la technologie a-t-elle rendu les gens plus ou moins connectés les uns aux autres ?' }
        ]
      },
      {
        title: { en: 'Month Reflection: Your English Journey', fr: 'Réflexion du mois : Votre parcours en anglais' },
        prompts: [
          { en: 'What was the most useful thing you learned this month? How will you use it in real life?', fr: 'Quelle a été la chose la plus utile que vous ayez apprise ce mois-ci ? Comment allez-vous l\'utiliser dans la vraie vie ?' },
          { en: 'Which grammar point did you find the most challenging? Can you now explain it in your own words?', fr: 'Quel point de grammaire avez-vous trouvé le plus difficile ? Pouvez-vous maintenant l\'expliquer avec vos propres mots ?' },
          { en: 'If you could travel to an English-speaking country for a month, where would you go and why?', fr: 'Si vous pouviez voyager dans un pays anglophone pendant un mois, où iriez-vous et pourquoi ?' },
          { en: 'What are your English learning goals for the next three months? Be specific!', fr: 'Quels sont vos objectifs d\'apprentissage de l\'anglais pour les trois prochains mois ? Soyez précis !' },
          { en: 'Which idiom from this week do you think you will use most often in your daily life?', fr: 'Quel idiome de cette semaine pensez-vous utiliser le plus souvent dans votre vie quotidienne ?' }
        ]
      },
      {
        title: { en: 'Society and the Future', fr: 'La société et l\'avenir' },
        prompts: [
          { en: 'If you were a policymaker, what one law would you change to improve society?', fr: 'Si vous étiez un décideur politique, quelle loi changeriez-vous pour améliorer la société ?' },
          { en: 'Do you believe that artificial intelligence will create more jobs than it destroys? Why?', fr: 'Croyez-vous que l\'intelligence artificielle créera plus d\'emplois qu\'elle n\'en détruira ? Pourquoi ?' },
          { en: 'How important is it to be media literate (able to critically evaluate information) in the modern world?', fr: 'Quelle est l\'importance d\'être médiatiquement alphabétisé (capable d\'évaluer de manière critique l\'information) dans le monde moderne ?' }
        ]
      }
    ]
  }
};
