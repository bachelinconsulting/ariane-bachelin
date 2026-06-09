const LESSONS_BEGINNER_WEEK1 = {
  week: 1,
  level: 'beginner',
  theme: { en: 'Greetings & Introductions', fr: 'Salutations et présentations' },
  days: [
    {
      day: 1,
      dayName: { en: 'Monday', fr: 'Lundi' },
      title: { en: 'Basic Greetings', fr: 'Salutations de base' },
      icon: '👋',
      theory: {
        intro: {
          en: 'Greetings are the first words we use when we meet someone. In English, there are formal and informal ways to say hello and goodbye. Learning greetings is the first step to having a real conversation!',
          fr: 'Les salutations sont les premiers mots que nous utilisons quand nous rencontrons quelqu\'un. En anglais, il existe des façons formelles et informelles de dire bonjour et au revoir. Apprendre les salutations est la première étape pour avoir une vraie conversation !'
        },
        grammarTitle: { en: 'The Verb "To Be" — I am', fr: 'Le verbe "être" — I am (Je suis)' },
        grammar: {
          en: 'In English, "to be" is one of the most important verbs. For the subject "I", we always use "am". We use it to describe ourselves: I am happy, I am a student, I am from France. Notice that in English, you must always use a subject pronoun — you cannot just say "am happy" like in some other languages. The verb "to be" changes depending on the subject: I am, You are, He/She is.',
          fr: 'En anglais, "to be" (être) est l\'un des verbes les plus importants. Pour le sujet "I" (je), on utilise toujours "am". On l\'utilise pour se décrire : I am happy (je suis heureux), I am a student (je suis étudiant). Notez qu\'en anglais, vous devez toujours utiliser un pronom sujet — vous ne pouvez pas simplement dire "am happy" comme dans d\'autres langues. Le verbe "to be" change selon le sujet : I am, You are, He/She is.'
        },
        examples: [
          { en: 'Hello! I am Maria.', fr: 'Bonjour ! Je suis Maria.', speak: 'Hello! I am Maria.' },
          { en: 'Good morning! How are you?', fr: 'Bonjour (le matin) ! Comment allez-vous ?', speak: 'Good morning! How are you?' },
          { en: 'I am fine, thank you.', fr: 'Je vais bien, merci.', speak: 'I am fine, thank you.' },
          { en: 'Goodbye! See you tomorrow.', fr: 'Au revoir ! À demain.', speak: 'Goodbye! See you tomorrow.' },
          { en: 'Good evening! Nice to meet you.', fr: 'Bonsoir ! Enchanté(e).', speak: 'Good evening! Nice to meet you.' }
        ],
        vocabulary: [
          {
            en: 'Hello',
            fr: 'Bonjour / Allô',
            pronunciation: '/həˈloʊ/',
            example: { en: 'Hello! How are you?', fr: 'Bonjour ! Comment allez-vous ?' }
          },
          {
            en: 'Hi',
            fr: 'Salut',
            pronunciation: '/haɪ/',
            example: { en: 'Hi! Come in!', fr: 'Salut ! Entre !' }
          },
          {
            en: 'Good morning',
            fr: 'Bonjour (le matin)',
            pronunciation: '/ɡʊd ˈmɔːrnɪŋ/',
            example: { en: 'Good morning! Did you sleep well?', fr: 'Bonjour ! Avez-vous bien dormi ?' }
          },
          {
            en: 'Good afternoon',
            fr: 'Bonjour (l\'après-midi)',
            pronunciation: '/ɡʊd ˌæftərˈnuːn/',
            example: { en: 'Good afternoon, everyone!', fr: 'Bonjour à tous !' }
          },
          {
            en: 'Good evening',
            fr: 'Bonsoir',
            pronunciation: '/ɡʊd ˈiːvnɪŋ/',
            example: { en: 'Good evening! Welcome to our home.', fr: 'Bonsoir ! Bienvenue chez nous.' }
          },
          {
            en: 'Goodbye',
            fr: 'Au revoir',
            pronunciation: '/ɡʊdˈbaɪ/',
            example: { en: 'Goodbye! Have a nice day!', fr: 'Au revoir ! Bonne journée !' }
          },
          {
            en: 'See you later',
            fr: 'À plus tard',
            pronunciation: '/siː juː ˈleɪtər/',
            example: { en: 'See you later, Tom!', fr: 'À plus tard, Tom !' }
          },
          {
            en: 'Good night',
            fr: 'Bonne nuit',
            pronunciation: '/ɡʊd naɪt/',
            example: { en: 'Good night! Sleep well!', fr: 'Bonne nuit ! Dormez bien !' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w1d1ex1',
          question: { en: 'Which greeting do you use in the morning?', fr: 'Quelle salutation utilisez-vous le matin ?' },
          options: ['Good evening', 'Good morning', 'Good night', 'Goodbye'],
          correct: 1,
          explanation: { en: '"Good morning" is used from sunrise until noon. "Good evening" is for the evening, and "Good night" is said before sleeping.', fr: '"Good morning" s\'utilise du lever du soleil jusqu\'à midi. "Good evening" est pour la soirée, et "Good night" se dit avant de dormir.' }
        },
        {
          type: 'match',
          id: 'w1d1ex2',
          instruction: { en: 'Match the English greetings with their French translations', fr: 'Associez les salutations anglaises à leurs traductions françaises' },
          pairs: [
            { left: 'Hello', right: 'Bonjour' },
            { left: 'Goodbye', right: 'Au revoir' },
            { left: 'Good night', right: 'Bonne nuit' },
            { left: 'See you later', right: 'À plus tard' }
          ]
        },
        {
          type: 'fill',
          id: 'w1d1ex3',
          instruction: { en: 'Complete the sentence with the correct form of "to be"', fr: 'Complétez la phrase avec la forme correcte du verbe "être"' },
          template: 'I ___ very happy to meet you!',
          answer: 'am',
          hint: { en: 'Use the verb "to be" for the subject "I"', fr: 'Utilisez le verbe "être" pour le sujet "I" (je)' }
        },
        {
          type: 'order',
          id: 'w1d1ex4',
          instruction: { en: 'Put the words in the right order to make a greeting', fr: 'Remettez les mots dans le bon ordre pour faire une salutation' },
          words: ['you', 'morning', 'Good', 'to', 'meet'],
          answer: 'Good morning nice to meet you'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d1q1',
          question: { en: 'How do you say "Bonsoir" in English?', fr: 'Comment dit-on "Bonsoir" en anglais ?' },
          options: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
          correct: 2,
          explanation: { en: '"Good evening" is the greeting used in the evening, from around 6pm. "Good night" is said when going to sleep.', fr: '"Good evening" est la salutation utilisée le soir, à partir de 18h environ. "Good night" se dit quand on va dormir.' }
        },
        {
          type: 'mcq',
          id: 'w1d1q2',
          question: { en: 'Which sentence is correct?', fr: 'Quelle phrase est correcte ?' },
          options: ['I are happy.', 'I am happy.', 'I is happy.', 'Am I happy.'],
          correct: 1,
          explanation: { en: 'With the subject "I", we always use "am". "I am" is the correct form of the verb "to be" in the first person singular.', fr: 'Avec le sujet "I" (je), on utilise toujours "am". "I am" est la forme correcte du verbe "être" à la première personne du singulier.' }
        },
        {
          type: 'mcq',
          id: 'w1d1q3',
          question: { en: 'What is the informal way to say "Hello"?', fr: 'Quelle est la façon informelle de dire "Hello" ?' },
          options: ['Good morning', 'Good afternoon', 'Goodbye', 'Hi'],
          correct: 3,
          explanation: { en: '"Hi" is the informal, friendly version of "Hello". Use it with friends and people you know well. Use "Hello" in more formal situations.', fr: '"Hi" est la version informelle et amicale de "Hello". Utilisez-le avec des amis et des personnes que vous connaissez bien. Utilisez "Hello" dans des situations plus formelles.' }
        }
      ]
    },
    {
      day: 2,
      dayName: { en: 'Tuesday', fr: 'Mardi' },
      title: { en: 'Introducing Yourself', fr: 'Se présenter' },
      icon: '🙋',
      theory: {
        intro: {
          en: 'Now that you know how to greet people, it\'s time to introduce yourself! In English, you share your name, where you\'re from, and how old you are. These are the most basic pieces of information in any conversation.',
          fr: 'Maintenant que vous savez comment saluer les gens, il est temps de vous présenter ! En anglais, vous partagez votre nom, d\'où vous venez et votre âge. Ce sont les informations les plus basiques dans toute conversation.'
        },
        grammarTitle: { en: 'Key Phrases for Introductions', fr: 'Phrases clés pour les présentations' },
        grammar: {
          en: 'To introduce yourself in English, use these three key structures: "My name is [name]" to say your name, "I am from [place]" or "I come from [place]" to say where you are from, and "I am [number] years old" to say your age. Notice the structure "years old" — in English you must say "old" after the number when talking about age. You can also ask others: "What is your name?", "Where are you from?", "How old are you?"',
          fr: 'Pour vous présenter en anglais, utilisez ces trois structures clés : "My name is [nom]" pour dire votre nom, "I am from [lieu]" ou "I come from [lieu]" pour dire d\'où vous venez, et "I am [nombre] years old" pour dire votre âge. Notez la structure "years old" — en anglais, vous devez dire "old" après le nombre quand vous parlez de l\'âge. Vous pouvez aussi demander aux autres : "What is your name?", "Where are you from?", "How old are you?"'
        },
        examples: [
          { en: 'My name is Sophie.', fr: 'Je m\'appelle Sophie.', speak: 'My name is Sophie.' },
          { en: 'I am from France.', fr: 'Je viens de France.', speak: 'I am from France.' },
          { en: 'I am 25 years old.', fr: 'J\'ai 25 ans.', speak: 'I am 25 years old.' },
          { en: 'What is your name?', fr: 'Quel est votre nom ? / Comment vous appelez-vous ?', speak: 'What is your name?' },
          { en: 'Where are you from?', fr: 'D\'où venez-vous ?', speak: 'Where are you from?' },
          { en: 'Nice to meet you, my name is James and I am from London.', fr: 'Enchanté, je m\'appelle James et je viens de Londres.', speak: 'Nice to meet you, my name is James and I am from London.' }
        ],
        vocabulary: [
          {
            en: 'name',
            fr: 'nom / prénom',
            pronunciation: '/neɪm/',
            example: { en: 'My name is Clara.', fr: 'Je m\'appelle Clara.' }
          },
          {
            en: 'nationality',
            fr: 'nationalité',
            pronunciation: '/ˌnæʃəˈnælɪti/',
            example: { en: 'My nationality is French.', fr: 'Ma nationalité est française.' }
          },
          {
            en: 'country',
            fr: 'pays',
            pronunciation: '/ˈkʌntri/',
            example: { en: 'I am from a beautiful country.', fr: 'Je viens d\'un beau pays.' }
          },
          {
            en: 'city',
            fr: 'ville',
            pronunciation: '/ˈsɪti/',
            example: { en: 'I live in a big city.', fr: 'Je vis dans une grande ville.' }
          },
          {
            en: 'age',
            fr: 'âge',
            pronunciation: '/eɪdʒ/',
            example: { en: 'My age is 30.', fr: 'Mon âge est 30 ans.' }
          },
          {
            en: 'student',
            fr: 'étudiant(e)',
            pronunciation: '/ˈstjuːdənt/',
            example: { en: 'I am a student at university.', fr: 'Je suis étudiant(e) à l\'université.' }
          },
          {
            en: 'teacher',
            fr: 'professeur',
            pronunciation: '/ˈtiːtʃər/',
            example: { en: 'She is a teacher.', fr: 'Elle est professeure.' }
          },
          {
            en: 'pleased / nice',
            fr: 'ravi(e) / sympa',
            pronunciation: '/pliːzd/ /naɪs/',
            example: { en: 'Nice to meet you!', fr: 'Enchanté(e) !' }
          }
        ]
      },
      exercises: [
        {
          type: 'fill',
          id: 'w1d2ex1',
          instruction: { en: 'Complete the sentence to introduce yourself', fr: 'Complétez la phrase pour vous présenter' },
          template: 'My ___ is Thomas.',
          answer: 'name',
          hint: { en: 'The word that tells who you are', fr: 'Le mot qui dit qui vous êtes' }
        },
        {
          type: 'order',
          id: 'w1d2ex2',
          instruction: { en: 'Put the words in the right order to make an introduction sentence', fr: 'Remettez les mots dans le bon ordre pour faire une phrase de présentation' },
          words: ['years', 'am', 'old', 'I', '22'],
          answer: 'I am 22 years old'
        },
        {
          type: 'mcq',
          id: 'w1d2ex3',
          question: { en: 'How do you ask someone\'s name in English?', fr: 'Comment demandez-vous le nom de quelqu\'un en anglais ?' },
          options: ['Where are you from?', 'How old are you?', 'What is your name?', 'How are you?'],
          correct: 2,
          explanation: { en: '"What is your name?" is the standard question to ask someone\'s name. You can also say "What\'s your name?" using the contraction.', fr: '"What is your name?" est la question standard pour demander le nom de quelqu\'un. Vous pouvez aussi dire "What\'s your name?" en utilisant la contraction.' }
        },
        {
          type: 'flashcard',
          id: 'w1d2ex4',
          instruction: { en: 'Click to flip each card and learn introduction phrases', fr: 'Cliquez pour retourner chaque carte et apprendre les phrases de présentation' },
          cards: [
            { front: 'My name is...', back: 'Je m\'appelle...', example: { en: 'My name is Anna.', fr: 'Je m\'appelle Anna.' } },
            { front: 'I am from...', back: 'Je viens de...', example: { en: 'I am from Brazil.', fr: 'Je viens du Brésil.' } },
            { front: 'I am ... years old', back: 'J\'ai ... ans', example: { en: 'I am 18 years old.', fr: 'J\'ai 18 ans.' } },
            { front: 'Nice to meet you!', back: 'Enchanté(e) !', example: { en: 'Nice to meet you, Maria!', fr: 'Enchanté, Maria !' } },
            { front: 'Where are you from?', back: 'D\'où venez-vous ?', example: { en: 'Where are you from, Leo?', fr: 'D\'où venez-vous, Léo ?' } },
            { front: 'How old are you?', back: 'Quel âge avez-vous ?', example: { en: 'How old are you, Tom?', fr: 'Quel âge avez-vous, Tom ?' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d2q1',
          question: { en: 'Which sentence correctly introduces your age?', fr: 'Quelle phrase présente correctement votre âge ?' },
          options: ['I have 20 years.', 'I am 20 years old.', 'I am old 20 years.', 'My age is old 20.'],
          correct: 1,
          explanation: { en: 'In English, we say "I am [number] years old". Notice: "years old" always comes after the number. Never say "I have ... years" — that is a French structure.', fr: 'En anglais, on dit "I am [nombre] years old". Notez : "years old" vient toujours après le nombre. Ne dites jamais "I have ... years" — c\'est une structure française.' }
        },
        {
          type: 'mcq',
          id: 'w1d2q2',
          question: { en: 'Someone says "Nice to meet you!" What is the best response?', fr: 'Quelqu\'un dit "Nice to meet you!" Quelle est la meilleure réponse ?' },
          options: ['Thank you!', 'Yes, please.', 'Nice to meet you too!', 'Goodbye!'],
          correct: 2,
          explanation: { en: 'The polite and natural response to "Nice to meet you!" is "Nice to meet you too!" The word "too" means "aussi" in French and returns the compliment.', fr: 'La réponse polie et naturelle à "Nice to meet you!" est "Nice to meet you too!" Le mot "too" signifie "aussi" en français et renvoie le compliment.' }
        },
        {
          type: 'mcq',
          id: 'w1d2q3',
          question: { en: 'How do you say "Je viens d\'Espagne" in English?', fr: 'Comment dit-on "Je viens d\'Espagne" en anglais ?' },
          options: ['I am Spain.', 'I come from Spain.', 'I from Spain.', 'Spain is my.'],
          correct: 1,
          explanation: { en: '"I come from Spain" or "I am from Spain" — both are correct. Never say "I from Spain" without a verb!', fr: '"I come from Spain" ou "I am from Spain" — les deux sont corrects. Ne dites jamais "I from Spain" sans verbe !' }
        }
      ]
    },
    {
      day: 3,
      dayName: { en: 'Wednesday', fr: 'Mercredi' },
      title: { en: 'The Alphabet & Spelling', fr: 'L\'alphabet et l\'épellation' },
      icon: '🔤',
      theory: {
        intro: {
          en: 'The English alphabet has 26 letters. Knowing how to spell words is essential — you\'ll need it to give your name, your email address, and so much more! Today we learn the alphabet and how to spell words aloud.',
          fr: 'L\'alphabet anglais a 26 lettres. Savoir épeler les mots est essentiel — vous en aurez besoin pour donner votre nom, votre adresse e-mail, et bien plus encore ! Aujourd\'hui, nous apprenons l\'alphabet et comment épeler des mots à voix haute.'
        },
        grammarTitle: { en: 'Spelling in English — "How do you spell...?"', fr: 'L\'épellation en anglais — "How do you spell...?"' },
        grammar: {
          en: 'To ask how to spell a word, say: "How do you spell [word]?" The answer is to say each letter out loud: "B-O-O-K". When giving your name, it is polite to spell it out if it is unusual. Say: "My name is Clara — C, L, A, R, A." Notice that letters in English have their own specific sounds: the letter "A" is pronounced "ay", "B" is "bee", "C" is "see", etc. Vowels are: A, E, I, O, U. All other letters are consonants.',
          fr: 'Pour demander comment épeler un mot, dites : "How do you spell [mot] ?" La réponse consiste à dire chaque lettre à voix haute : "B-O-O-K". En donnant votre nom, il est poli de l\'épeler s\'il est inhabituel. Dites : "My name is Clara — C, L, A, R, A." Notez que les lettres en anglais ont leurs propres sons spécifiques : la lettre "A" se prononce "ay", "B" se prononce "bee", "C" se prononce "see", etc. Les voyelles sont : A, E, I, O, U. Toutes les autres lettres sont des consonnes.'
        },
        examples: [
          { en: 'How do you spell "book"?', fr: 'Comment épelez-vous "book" ?', speak: 'How do you spell book?' },
          { en: 'B — O — O — K', fr: 'B — O — O — K', speak: 'B O O K' },
          { en: 'My name is Anna: A — N — N — A', fr: 'Je m\'appelle Anna : A — N — N — A', speak: 'My name is Anna: A N N A' },
          { en: 'Can you spell your last name, please?', fr: 'Pouvez-vous épeler votre nom de famille, s\'il vous plaît ?', speak: 'Can you spell your last name please?' },
          { en: 'The English alphabet has 26 letters.', fr: 'L\'alphabet anglais a 26 lettres.', speak: 'The English alphabet has 26 letters.' }
        ],
        vocabulary: [
          {
            en: 'alphabet',
            fr: 'alphabet',
            pronunciation: '/ˈælfəbɛt/',
            example: { en: 'The English alphabet has 26 letters.', fr: 'L\'alphabet anglais a 26 lettres.' }
          },
          {
            en: 'letter',
            fr: 'lettre',
            pronunciation: '/ˈlɛtər/',
            example: { en: 'The letter A is a vowel.', fr: 'La lettre A est une voyelle.' }
          },
          {
            en: 'vowel',
            fr: 'voyelle',
            pronunciation: '/ˈvaʊəl/',
            example: { en: 'A, E, I, O, U are vowels.', fr: 'A, E, I, O, U sont des voyelles.' }
          },
          {
            en: 'consonant',
            fr: 'consonne',
            pronunciation: '/ˈkɒnsənənt/',
            example: { en: 'B is a consonant.', fr: 'B est une consonne.' }
          },
          {
            en: 'spell',
            fr: 'épeler',
            pronunciation: '/spɛl/',
            example: { en: 'Can you spell your name?', fr: 'Pouvez-vous épeler votre nom ?' }
          },
          {
            en: 'capital letter',
            fr: 'lettre majuscule',
            pronunciation: '/ˈkæpɪtəl ˈlɛtər/',
            example: { en: 'Always start a name with a capital letter.', fr: 'Commencez toujours un nom avec une lettre majuscule.' }
          },
          {
            en: 'first name',
            fr: 'prénom',
            pronunciation: '/fɜːrst neɪm/',
            example: { en: 'My first name is Paul.', fr: 'Mon prénom est Paul.' }
          },
          {
            en: 'last name',
            fr: 'nom de famille',
            pronunciation: '/læst neɪm/',
            example: { en: 'My last name is Martin.', fr: 'Mon nom de famille est Martin.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w1d3ex1',
          question: { en: 'Which of the following is a vowel?', fr: 'Lequel des éléments suivants est une voyelle ?' },
          options: ['B', 'C', 'E', 'G'],
          correct: 2,
          explanation: { en: 'The vowels in English are A, E, I, O, U. The letter E is a vowel. B, C, and G are consonants.', fr: 'Les voyelles en anglais sont A, E, I, O, U. La lettre E est une voyelle. B, C et G sont des consonnes.' }
        },
        {
          type: 'fill',
          id: 'w1d3ex2',
          instruction: { en: 'Complete the question to ask how to spell a word', fr: 'Complétez la question pour demander comment épeler un mot' },
          template: 'How do you ___ "school"?',
          answer: 'spell',
          hint: { en: 'The verb that means to say each letter of a word', fr: 'Le verbe qui signifie dire chaque lettre d\'un mot' }
        },
        {
          type: 'match',
          id: 'w1d3ex3',
          instruction: { en: 'Match the letter with its spoken name in English', fr: 'Associez la lettre à son nom prononcé en anglais' },
          pairs: [
            { left: 'A', right: 'ay' },
            { left: 'B', right: 'bee' },
            { left: 'G', right: 'jee' },
            { left: 'W', right: 'double-you' }
          ]
        },
        {
          type: 'flashcard',
          id: 'w1d3ex4',
          instruction: { en: 'Click to flip each card and practice letter sounds', fr: 'Cliquez pour retourner chaque carte et pratiquer les sons des lettres' },
          cards: [
            { front: 'A', back: 'ay', example: { en: 'A as in Apple', fr: 'A comme dans Apple (pomme)' } },
            { front: 'E', back: 'ee', example: { en: 'E as in Elephant', fr: 'E comme dans Elephant (éléphant)' } },
            { front: 'I', back: 'eye', example: { en: 'I as in Ice cream', fr: 'I comme dans Ice cream (glace)' } },
            { front: 'O', back: 'oh', example: { en: 'O as in Orange', fr: 'O comme dans Orange' } },
            { front: 'U', back: 'you', example: { en: 'U as in Umbrella', fr: 'U comme dans Umbrella (parapluie)' } },
            { front: 'Y', back: 'why', example: { en: 'Y as in Yellow', fr: 'Y comme dans Yellow (jaune)' } }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d3q1',
          question: { en: 'How many letters are in the English alphabet?', fr: 'Combien de lettres y a-t-il dans l\'alphabet anglais ?' },
          options: ['24', '25', '26', '27'],
          correct: 2,
          explanation: { en: 'The English alphabet has exactly 26 letters: from A to Z. It has 5 vowels (A, E, I, O, U) and 21 consonants.', fr: 'L\'alphabet anglais a exactement 26 lettres : de A à Z. Il a 5 voyelles (A, E, I, O, U) et 21 consonnes.' }
        },
        {
          type: 'mcq',
          id: 'w1d3q2',
          question: { en: 'How do you ask someone to spell their name?', fr: 'Comment demandez-vous à quelqu\'un d\'épeler son nom ?' },
          options: ['How do you write your name?', 'Can you spell your name, please?', 'What is your name spell?', 'Say your name letters!'],
          correct: 1,
          explanation: { en: '"Can you spell your name, please?" is the natural and polite way to ask. You can also say "How do you spell your name?"', fr: '"Can you spell your name, please?" est la façon naturelle et polie de demander. Vous pouvez aussi dire "How do you spell your name?"' }
        },
        {
          type: 'mcq',
          id: 'w1d3q3',
          question: { en: 'The word "CAT" — how many vowels does it have?', fr: 'Le mot "CAT" — combien de voyelles a-t-il ?' },
          options: ['0', '1', '2', '3'],
          correct: 1,
          explanation: { en: '"CAT" has one vowel: A. C and T are consonants. Remember: vowels are A, E, I, O, U.', fr: '"CAT" a une voyelle : A. C et T sont des consonnes. Rappel : les voyelles sont A, E, I, O, U.' }
        }
      ]
    },
    {
      day: 4,
      dayName: { en: 'Thursday', fr: 'Jeudi' },
      title: { en: 'Numbers 0–20', fr: 'Les chiffres 0–20' },
      icon: '🔢',
      theory: {
        intro: {
          en: 'Numbers are everywhere in daily life — prices, ages, addresses, phone numbers! Today we learn to count from 0 to 20 and use numbers in real sentences. You already know one sentence with numbers: "I am ... years old!"',
          fr: 'Les chiffres sont partout dans la vie quotidienne — les prix, les âges, les adresses, les numéros de téléphone ! Aujourd\'hui, nous apprenons à compter de 0 à 20 et à utiliser les chiffres dans de vraies phrases. Vous connaissez déjà une phrase avec des chiffres : "I am ... years old !"'
        },
        grammarTitle: { en: 'Numbers 0–20 and Asking About Age', fr: 'Les chiffres 0–20 et demander l\'âge' },
        grammar: {
          en: 'Numbers from 0 to 12 each have a unique name: zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve. From 13 to 19, most end in "-teen": thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Notice that 13 (thirteen) and 15 (fifteen) are slightly irregular. The number 20 is "twenty". To ask about age, use: "How old are you?" and answer "I am [number] years old." You can also use numbers to give a phone number: "My number is zero-six..."',
          fr: 'Les chiffres de 0 à 12 ont chacun un nom unique : zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve. De 13 à 19, la plupart se terminent par "-teen" : thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen. Notez que 13 (thirteen) et 15 (fifteen) sont légèrement irréguliers. Le chiffre 20 est "twenty". Pour demander l\'âge, utilisez : "How old are you?" et répondez "I am [nombre] years old."'
        },
        examples: [
          { en: 'I have two brothers and one sister.', fr: 'J\'ai deux frères et une sœur.', speak: 'I have two brothers and one sister.' },
          { en: 'How old are you? I am fifteen years old.', fr: 'Quel âge as-tu ? J\'ai quinze ans.', speak: 'How old are you? I am fifteen years old.' },
          { en: 'There are twenty students in my class.', fr: 'Il y a vingt étudiants dans ma classe.', speak: 'There are twenty students in my class.' },
          { en: 'I live at number twelve, Baker Street.', fr: 'Je vis au numéro douze, Baker Street.', speak: 'I live at number twelve Baker Street.' },
          { en: 'She is eight years old.', fr: 'Elle a huit ans.', speak: 'She is eight years old.' }
        ],
        vocabulary: [
          {
            en: 'zero / one / two',
            fr: 'zéro / un / deux',
            pronunciation: '/ˈzɪərəʊ/ /wʌn/ /tuː/',
            example: { en: 'Zero, one, two — let\'s go!', fr: 'Zéro, un, deux — c\'est parti !' }
          },
          {
            en: 'three / four / five',
            fr: 'trois / quatre / cinq',
            pronunciation: '/θriː/ /fɔːr/ /faɪv/',
            example: { en: 'I have three cats and four dogs.', fr: 'J\'ai trois chats et quatre chiens.' }
          },
          {
            en: 'six / seven / eight',
            fr: 'six / sept / huit',
            pronunciation: '/sɪks/ /ˈsɛvən/ /eɪt/',
            example: { en: 'Six plus seven is thirteen... no, wait — eight!', fr: 'Six plus sept... hmm, huit !' }
          },
          {
            en: 'nine / ten',
            fr: 'neuf / dix',
            pronunciation: '/naɪn/ /tɛn/',
            example: { en: 'I have nine books and ten pens.', fr: 'J\'ai neuf livres et dix stylos.' }
          },
          {
            en: 'eleven / twelve',
            fr: 'onze / douze',
            pronunciation: '/ɪˈlɛvən/ /twɛlv/',
            example: { en: 'There are twelve months in a year.', fr: 'Il y a douze mois dans une année.' }
          },
          {
            en: 'thirteen / fourteen / fifteen',
            fr: 'treize / quatorze / quinze',
            pronunciation: '/ˈθɜːrˈtiːn/ /ˌfɔːrˈtiːn/ /ˌfɪfˈtiːn/',
            example: { en: 'She is fifteen years old.', fr: 'Elle a quinze ans.' }
          },
          {
            en: 'sixteen / seventeen / eighteen / nineteen',
            fr: 'seize / dix-sept / dix-huit / dix-neuf',
            pronunciation: '/ˌsɪkˈstiːn/ /ˌsɛvənˈtiːn/ /ˌeɪˈtiːn/ /ˌnaɪnˈtiːn/',
            example: { en: 'He is nineteen years old.', fr: 'Il a dix-neuf ans.' }
          },
          {
            en: 'twenty',
            fr: 'vingt',
            pronunciation: '/ˈtwɛnti/',
            example: { en: 'There are twenty students in the class.', fr: 'Il y a vingt étudiants dans la classe.' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w1d4ex1',
          question: { en: 'How do you say the number 15 in English?', fr: 'Comment dit-on le chiffre 15 en anglais ?' },
          options: ['Fiveteen', 'Fiften', 'Fifteen', 'Fiftteen'],
          correct: 2,
          explanation: { en: '"Fifteen" is the correct spelling for 15. Be careful — the base is "five" but it changes to "fif" in "fifteen". Similarly, "nine" becomes "nine" in "nineteen".', fr: '"Fifteen" est l\'orthographe correcte pour 15. Attention — la base est "five" mais elle change en "fif" dans "fifteen".' }
        },
        {
          type: 'fill',
          id: 'w1d4ex2',
          instruction: { en: 'Complete the sentence with the correct number word', fr: 'Complétez la phrase avec le mot-chiffre correct' },
          template: 'There are ___ days in a week.',
          answer: 'seven',
          hint: { en: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday', fr: 'Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche' }
        },
        {
          type: 'order',
          id: 'w1d4ex3',
          instruction: { en: 'Put the words in the right order to ask about age', fr: 'Remettez les mots dans le bon ordre pour demander l\'âge' },
          words: ['you', 'How', 'old', 'are'],
          answer: 'How old are you'
        },
        {
          type: 'match',
          id: 'w1d4ex4',
          instruction: { en: 'Match the numbers with their English words', fr: 'Associez les chiffres à leurs mots anglais' },
          pairs: [
            { left: '8', right: 'eight' },
            { left: '13', right: 'thirteen' },
            { left: '17', right: 'seventeen' },
            { left: '20', right: 'twenty' }
          ]
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d4q1',
          question: { en: 'Which answer correctly responds to "How old are you?"', fr: 'Quelle réponse répond correctement à "How old are you?"' },
          options: ['I have 16 years.', 'I am 16 years old.', 'My age is old 16.', 'I am old 16 years.'],
          correct: 1,
          explanation: { en: '"I am 16 years old" is the correct structure. The number always goes between "am" and "years old".', fr: '"I am 16 years old" est la structure correcte. Le chiffre va toujours entre "am" et "years old".' }
        },
        {
          type: 'mcq',
          id: 'w1d4q2',
          question: { en: 'What is 11 in English?', fr: 'Qu\'est-ce que 11 en anglais ?' },
          options: ['Onety-one', 'Eleven', 'Oneteen', 'Tenone'],
          correct: 1,
          explanation: { en: '"Eleven" is the word for 11. It does not follow a regular pattern — it is a unique word, just like "twelve" for 12.', fr: '"Eleven" est le mot pour 11. Il ne suit pas un schéma régulier — c\'est un mot unique, tout comme "twelve" pour 12.' }
        },
        {
          type: 'mcq',
          id: 'w1d4q3',
          question: { en: 'How do you say "J\'ai dix-huit ans" in English?', fr: 'Comment dit-on "J\'ai dix-huit ans" en anglais ?' },
          options: ['I am eighteen years old.', 'I have eighteen years.', 'I am eighteens years old.', 'My years are eighteen.'],
          correct: 0,
          explanation: { en: '"I am eighteen years old" is correct. In English, we use "to be" (am) for age, not "to have". This is different from French where you say "J\'ai ... ans" (I have ... years).', fr: '"I am eighteen years old" est correct. En anglais, on utilise "to be" (am) pour l\'âge, pas "to have". C\'est différent du français où on dit "J\'ai ... ans".' }
        }
      ]
    },
    {
      day: 5,
      dayName: { en: 'Friday', fr: 'Vendredi' },
      title: { en: 'Colors & Adjectives', fr: 'Les couleurs et les adjectifs' },
      icon: '🎨',
      theory: {
        intro: {
          en: 'Colors are some of the first words children learn in any language, and they are incredibly useful! Today we learn colors and some basic adjectives like big/small and hot/cold. You will be able to describe the world around you.',
          fr: 'Les couleurs sont parmi les premiers mots que les enfants apprennent dans n\'importe quelle langue, et elles sont incroyablement utiles ! Aujourd\'hui, nous apprenons les couleurs et quelques adjectifs de base comme grand/petit et chaud/froid. Vous pourrez décrire le monde qui vous entoure.'
        },
        grammarTitle: { en: 'Adjectives in English — Position & Usage', fr: 'Les adjectifs en anglais — position et utilisation' },
        grammar: {
          en: 'In English, adjectives come BEFORE the noun, unlike French where they often come after. For example: "a red car" (not "a car red"). Adjectives do NOT change for gender or number in English — we say "a big cat", "big cats", "a big dog" (no change!). To ask about color, say: "What color is...?" and answer with "[noun] is [color]" or "It is [color]". For opposites like big/small and hot/cold, English uses these pairs very commonly in everyday speech.',
          fr: 'En anglais, les adjectifs viennent AVANT le nom, contrairement au français où ils viennent souvent après. Par exemple : "a red car" (une voiture rouge), pas "a car red". Les adjectifs ne changent PAS de genre ou de nombre en anglais — on dit "a big cat", "big cats", "a big dog" (pas de changement !). Pour demander la couleur, dites : "What color is...?" et répondez avec "[nom] is [couleur]" ou "It is [couleur]".'
        },
        examples: [
          { en: 'What color is the sky? It is blue.', fr: 'De quelle couleur est le ciel ? Il est bleu.', speak: 'What color is the sky? It is blue.' },
          { en: 'I have a red bag and a white shirt.', fr: 'J\'ai un sac rouge et une chemise blanche.', speak: 'I have a red bag and a white shirt.' },
          { en: 'The sun is big and hot.', fr: 'Le soleil est grand et chaud.', speak: 'The sun is big and hot.' },
          { en: 'This coffee is very hot!', fr: 'Ce café est très chaud !', speak: 'This coffee is very hot!' },
          { en: 'She has a small, cute, black cat.', fr: 'Elle a un petit chat noir mignon.', speak: 'She has a small cute black cat.' }
        ],
        vocabulary: [
          {
            en: 'red',
            fr: 'rouge',
            pronunciation: '/rɛd/',
            example: { en: 'The apple is red.', fr: 'La pomme est rouge.' }
          },
          {
            en: 'blue',
            fr: 'bleu(e)',
            pronunciation: '/bluː/',
            example: { en: 'The sky is blue.', fr: 'Le ciel est bleu.' }
          },
          {
            en: 'green',
            fr: 'vert(e)',
            pronunciation: '/ɡriːn/',
            example: { en: 'The grass is green.', fr: 'L\'herbe est verte.' }
          },
          {
            en: 'yellow',
            fr: 'jaune',
            pronunciation: '/ˈjɛloʊ/',
            example: { en: 'The sun is yellow.', fr: 'Le soleil est jaune.' }
          },
          {
            en: 'white / black',
            fr: 'blanc / noir',
            pronunciation: '/waɪt/ /blæk/',
            example: { en: 'The cat is black and white.', fr: 'Le chat est noir et blanc.' }
          },
          {
            en: 'big / small',
            fr: 'grand / petit',
            pronunciation: '/bɪɡ/ /smɔːl/',
            example: { en: 'I have a big house and a small garden.', fr: 'J\'ai une grande maison et un petit jardin.' }
          },
          {
            en: 'hot / cold',
            fr: 'chaud / froid',
            pronunciation: '/hɒt/ /koʊld/',
            example: { en: 'The tea is hot. The water is cold.', fr: 'Le thé est chaud. L\'eau est froide.' }
          },
          {
            en: 'beautiful / ugly',
            fr: 'beau/belle / laid(e)',
            pronunciation: '/ˈbjuːtɪfəl/ /ˈʌɡli/',
            example: { en: 'What a beautiful painting!', fr: 'Quelle belle peinture !' }
          }
        ]
      },
      exercises: [
        {
          type: 'mcq',
          id: 'w1d5ex1',
          question: { en: 'Where does the adjective go in an English sentence?', fr: 'Où va l\'adjectif dans une phrase anglaise ?' },
          options: ['After the noun (a car red)', 'Before the noun (a red car)', 'After the verb only', 'At the end of the sentence'],
          correct: 1,
          explanation: { en: 'In English, adjectives come BEFORE the noun. We say "a red car", "a big house", "a cold day". This is different from French where adjectives often come after the noun.', fr: 'En anglais, les adjectifs viennent AVANT le nom. On dit "a red car" (une voiture rouge), "a big house" (une grande maison). C\'est différent du français où les adjectifs viennent souvent après le nom.' }
        },
        {
          type: 'match',
          id: 'w1d5ex2',
          instruction: { en: 'Match the colors with their French translations', fr: 'Associez les couleurs à leurs traductions françaises' },
          pairs: [
            { left: 'red', right: 'rouge' },
            { left: 'green', right: 'vert' },
            { left: 'yellow', right: 'jaune' },
            { left: 'white', right: 'blanc' }
          ]
        },
        {
          type: 'fill',
          id: 'w1d5ex3',
          instruction: { en: 'Complete the sentence with the correct color', fr: 'Complétez la phrase avec la bonne couleur' },
          template: 'Bananas are ___.',
          answer: 'yellow',
          hint: { en: 'Think of the color of the sun!', fr: 'Pensez à la couleur du soleil !' }
        },
        {
          type: 'order',
          id: 'w1d5ex4',
          instruction: { en: 'Put the words in the right order', fr: 'Remettez les mots dans le bon ordre' },
          words: ['a', 'She', 'has', 'big', 'dog', 'black'],
          answer: 'She has a big black dog'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d5q1',
          question: { en: 'Which sentence is correct?', fr: 'Quelle phrase est correcte ?' },
          options: ['I have a car red.', 'I have a red car.', 'I have red a car.', 'Red I have a car.'],
          correct: 1,
          explanation: { en: '"I have a red car" is correct because in English, adjectives always go before the noun. "A red car" = the adjective "red" comes before the noun "car".', fr: '"I have a red car" est correct car en anglais, les adjectifs vont toujours avant le nom. "A red car" = l\'adjectif "red" vient avant le nom "car".' }
        },
        {
          type: 'mcq',
          id: 'w1d5q2',
          question: { en: 'How do you say "De quelle couleur est...?" in English?', fr: 'Comment dit-on "De quelle couleur est...?" en anglais ?' },
          options: ['What is the color?', 'What color is...?', 'Which color is...?', 'How color is...?'],
          correct: 1,
          explanation: { en: '"What color is...?" is the correct question to ask about color. For example: "What color is your car?" — "It is blue."', fr: '"What color is...?" est la question correcte pour demander la couleur. Par exemple : "What color is your car?" — "It is blue."' }
        },
        {
          type: 'mcq',
          id: 'w1d5q3',
          question: { en: 'What is the opposite of "hot"?', fr: 'Quel est le contraire de "hot" ?' },
          options: ['big', 'cold', 'small', 'blue'],
          correct: 1,
          explanation: { en: '"Cold" is the opposite of "hot". Other common opposite pairs: big/small, old/young, fast/slow, happy/sad.', fr: '"Cold" est le contraire de "hot". D\'autres paires opposées courantes : big/small (grand/petit), old/young (vieux/jeune), fast/slow (rapide/lent).' }
        }
      ]
    },
    {
      day: 6,
      dayName: { en: 'Saturday', fr: 'Samedi' },
      title: { en: 'Polite Expressions', fr: 'Expressions polies' },
      icon: '🤝',
      theory: {
        intro: {
          en: 'Being polite is very important in English-speaking cultures! Today we practice the essential polite expressions and review the week through a real conversation. These phrases will make you sound natural and respectful.',
          fr: 'Être poli(e) est très important dans les cultures anglophones ! Aujourd\'hui, nous pratiquons les expressions polies essentielles et révisons la semaine à travers une vraie conversation. Ces phrases vous feront sonner naturel(le) et respectueux(se).'
        },
        grammarTitle: { en: 'Polite Phrases & Social English', fr: 'Phrases polies et anglais social' },
        grammar: {
          en: 'English has many polite phrases that are essential in daily life. "Please" (s\'il vous plaît) is added to requests — usually at the end: "A coffee, please." "Thank you" (merci) shows gratitude; the reply is "You\'re welcome" (de rien). "Excuse me" is used to get someone\'s attention or to pass by someone. "Sorry" is used to apologize. "Pardon?" or "Could you repeat that, please?" are used when you don\'t understand. In English-speaking cultures, saying "please" and "thank you" is considered very important and polite.',
          fr: 'L\'anglais a de nombreuses phrases polies essentielles dans la vie quotidienne. "Please" (s\'il vous plaît) s\'ajoute aux demandes — généralement à la fin : "A coffee, please." "Thank you" (merci) montre la gratitude ; la réponse est "You\'re welcome" (de rien). "Excuse me" s\'utilise pour attirer l\'attention de quelqu\'un ou pour passer. "Sorry" s\'utilise pour s\'excuser. En anglais, dire "please" et "thank you" est considéré comme très important et poli.'
        },
        examples: [
          { en: 'Excuse me, where is the bathroom?', fr: 'Excusez-moi, où sont les toilettes ?', speak: 'Excuse me where is the bathroom?' },
          { en: 'Could you help me, please?', fr: 'Pourriez-vous m\'aider, s\'il vous plaît ?', speak: 'Could you help me please?' },
          { en: 'Thank you very much! — You\'re welcome!', fr: 'Merci beaucoup ! — De rien !', speak: 'Thank you very much! You\'re welcome!' },
          { en: 'Sorry, I don\'t understand. Could you repeat that?', fr: 'Désolé(e), je ne comprends pas. Pouvez-vous répéter ?', speak: 'Sorry I don\'t understand. Could you repeat that?' },
          { en: 'Pardon? I didn\'t hear you.', fr: 'Pardon ? Je ne vous ai pas entendu.', speak: 'Pardon? I didn\'t hear you.' }
        ],
        vocabulary: [
          {
            en: 'please',
            fr: 's\'il vous plaît',
            pronunciation: '/pliːz/',
            example: { en: 'A glass of water, please.', fr: 'Un verre d\'eau, s\'il vous plaît.' }
          },
          {
            en: 'thank you',
            fr: 'merci',
            pronunciation: '/θæŋk juː/',
            example: { en: 'Thank you for your help!', fr: 'Merci pour votre aide !' }
          },
          {
            en: 'you\'re welcome',
            fr: 'de rien / je vous en prie',
            pronunciation: '/jʊər ˈwɛlkəm/',
            example: { en: '"Thank you!" — "You\'re welcome!"', fr: '"Merci !" — "De rien !"' }
          },
          {
            en: 'excuse me',
            fr: 'excusez-moi',
            pronunciation: '/ɪkˈskjuːz miː/',
            example: { en: 'Excuse me, is this seat taken?', fr: 'Excusez-moi, cette place est-elle prise ?' }
          },
          {
            en: 'sorry',
            fr: 'désolé(e) / pardon',
            pronunciation: '/ˈsɒri/',
            example: { en: 'Sorry, I am late!', fr: 'Désolé(e), je suis en retard !' }
          },
          {
            en: 'pardon?',
            fr: 'pardon ? / comment ?',
            pronunciation: '/ˈpɑːrdən/',
            example: { en: 'Pardon? Could you speak more slowly?', fr: 'Pardon ? Pourriez-vous parler plus lentement ?' }
          },
          {
            en: 'of course',
            fr: 'bien sûr',
            pronunciation: '/əv kɔːrs/',
            example: { en: 'Of course, I can help you!', fr: 'Bien sûr, je peux vous aider !' }
          },
          {
            en: 'no problem',
            fr: 'pas de problème',
            pronunciation: '/noʊ ˈprɒbləm/',
            example: { en: '"Can you help me?" — "No problem!"', fr: '"Pouvez-vous m\'aider ?" — "Pas de problème !"' }
          }
        ]
      },
      exercises: [
        {
          type: 'match',
          id: 'w1d6ex1',
          instruction: { en: 'Match the polite expression with its French equivalent', fr: 'Associez l\'expression polie à son équivalent français' },
          pairs: [
            { left: 'Please', right: 'S\'il vous plaît' },
            { left: 'Sorry', right: 'Désolé(e)' },
            { left: 'You\'re welcome', right: 'De rien' },
            { left: 'Excuse me', right: 'Excusez-moi' }
          ]
        },
        {
          type: 'mcq',
          id: 'w1d6ex2',
          question: { en: 'Someone says "Thank you!" What do you reply?', fr: 'Quelqu\'un dit "Thank you !" Que répondez-vous ?' },
          options: ['Sorry!', 'Please!', 'You\'re welcome!', 'Excuse me!'],
          correct: 2,
          explanation: { en: '"You\'re welcome!" is the standard reply to "Thank you!" It means "de rien" in French. You can also say "No problem!" or "My pleasure!"', fr: '"You\'re welcome!" est la réponse standard à "Thank you!". Cela signifie "de rien" en français. Vous pouvez aussi dire "No problem!" ou "My pleasure!"' }
        },
        {
          type: 'fill',
          id: 'w1d6ex3',
          instruction: { en: 'Complete the sentence with the correct polite expression', fr: 'Complétez la phrase avec la bonne expression polie' },
          template: '___ me, where is the nearest bank?',
          answer: 'Excuse',
          hint: { en: 'This expression is used to get someone\'s attention politely', fr: 'Cette expression s\'utilise pour attirer poliment l\'attention de quelqu\'un' }
        },
        {
          type: 'order',
          id: 'w1d6ex4',
          instruction: { en: 'Put the words in the right order to make a polite request', fr: 'Remettez les mots dans le bon ordre pour faire une demande polie' },
          words: ['help', 'Could', 'please', 'you', 'me'],
          answer: 'Could you help me please'
        }
      ],
      quiz: [
        {
          type: 'mcq',
          id: 'w1d6q1',
          question: { en: 'You didn\'t hear what someone said. What do you say?', fr: 'Vous n\'avez pas entendu ce que quelqu\'un a dit. Que dites-vous ?' },
          options: ['Thank you!', 'Goodbye!', 'Pardon?', 'Please!'],
          correct: 2,
          explanation: { en: '"Pardon?" is used when you didn\'t hear or understand. You can also say "Sorry?" or "Could you repeat that, please?" All are polite ways to ask someone to say something again.', fr: '"Pardon?" s\'utilise quand vous n\'avez pas entendu ou compris. Vous pouvez aussi dire "Sorry?" ou "Could you repeat that, please?" Ce sont toutes des façons polies de demander à quelqu\'un de répéter.' }
        },
        {
          type: 'mcq',
          id: 'w1d6q2',
          question: { en: 'Which sentence is the most polite way to make a request?', fr: 'Quelle phrase est la façon la plus polie de faire une demande ?' },
          options: ['Give me water!', 'I want water.', 'Water, now!', 'A glass of water, please.'],
          correct: 3,
          explanation: { en: '"A glass of water, please" is the most polite. Adding "please" at the end of a request is the key to sounding polite in English!', fr: '"A glass of water, please" est le plus poli. Ajouter "please" à la fin d\'une demande est la clé pour sonner poli en anglais !' }
        },
        {
          type: 'mcq',
          id: 'w1d6q3',
          question: { en: 'How do you say "Pas de problème" in English?', fr: 'Comment dit-on "Pas de problème" en anglais ?' },
          options: ['Not a problem, yes.', 'No problem!', 'Problem no!', 'Zero problem!'],
          correct: 1,
          explanation: { en: '"No problem!" is the natural English expression for "Pas de problème". It is informal and friendly. In formal situations, you might say "Of course" or "Certainly."', fr: '"No problem!" est l\'expression anglaise naturelle pour "Pas de problème". C\'est informel et amical. Dans des situations formelles, vous pourriez dire "Of course" ou "Certainly."' }
        }
      ]
    }
  ],
  sunday: {
    title: { en: 'Week 1 Review', fr: 'Révision — Semaine 1' },
    summary: {
      en: 'This week you learned the foundations of English communication: how to greet people at different times of day, introduce yourself with your name, nationality and age, spell words using the alphabet, count from 0 to 20, describe things using colors and adjectives, and use essential polite expressions. You now have everything you need to have a basic introductory conversation in English!',
      fr: 'Cette semaine, vous avez appris les bases de la communication en anglais : comment saluer les gens à différents moments de la journée, vous présenter avec votre nom, nationalité et âge, épeler des mots en utilisant l\'alphabet, compter de 0 à 20, décrire des choses avec des couleurs et des adjectifs, et utiliser des expressions polies essentielles. Vous avez maintenant tout ce qu\'il faut pour avoir une conversation de présentation basique en anglais !'
    },
    vocabulary: [
      { en: 'Hello', fr: 'Bonjour', pronunciation: '/həˈloʊ/' },
      { en: 'Goodbye', fr: 'Au revoir', pronunciation: '/ɡʊdˈbaɪ/' },
      { en: 'My name is...', fr: 'Je m\'appelle...', pronunciation: '/maɪ neɪm ɪz/' },
      { en: 'I am from...', fr: 'Je viens de...', pronunciation: '/aɪ æm frɒm/' },
      { en: 'years old', fr: 'ans', pronunciation: '/jɪərz oʊld/' },
      { en: 'please', fr: 's\'il vous plaît', pronunciation: '/pliːz/' },
      { en: 'thank you', fr: 'merci', pronunciation: '/θæŋk juː/' },
      { en: 'excuse me', fr: 'excusez-moi', pronunciation: '/ɪkˈskjuːz miː/' },
      { en: 'spell', fr: 'épeler', pronunciation: '/spɛl/' },
      { en: 'red / blue / green', fr: 'rouge / bleu / vert', pronunciation: '/rɛd/ /bluː/ /ɡriːn/' }
    ],
    grammarPoints: [
      {
        title: { en: 'The Verb "To Be" — I am', fr: 'Le verbe "être" — I am' },
        rule: { en: 'Use "I am" to describe yourself. Never say "I is" or "I are". Example: I am happy. I am a student. I am from Paris.', fr: 'Utilisez "I am" pour vous décrire. Ne dites jamais "I is" ou "I are". Exemple : I am happy (je suis heureux). I am a student (je suis étudiant).' },
        example: { en: 'I am 20 years old and I am from France.', fr: 'J\'ai 20 ans et je viens de France.' }
      },
      {
        title: { en: 'Adjectives Come BEFORE the Noun', fr: 'Les adjectifs viennent AVANT le nom' },
        rule: { en: 'In English, adjectives always go before the noun they describe. Say "a red car", not "a car red". Adjectives do not change for gender or number.', fr: 'En anglais, les adjectifs vont toujours avant le nom qu\'ils décrivent. Dites "a red car" (une voiture rouge), pas "a car red". Les adjectifs ne changent pas selon le genre ou le nombre.' },
        example: { en: 'She has a big, beautiful, blue car.', fr: 'Elle a une grande et belle voiture bleue.' }
      },
      {
        title: { en: 'Age: "I am ... years old"', fr: 'L\'âge : "I am ... years old"' },
        rule: { en: 'To say your age, always use: I am + [number] + years old. Do NOT say "I have ... years" — this is a French structure that does not exist in English.', fr: 'Pour dire votre âge, utilisez toujours : I am + [nombre] + years old. Ne dites PAS "I have ... years" — c\'est une structure française qui n\'existe pas en anglais.' },
        example: { en: 'I am fifteen years old. She is twenty years old.', fr: 'J\'ai quinze ans. Elle a vingt ans.' }
      }
    ],
    conversationTopics: [
      {
        title: { en: 'Meeting Someone New', fr: 'Rencontrer quelqu\'un de nouveau' },
        prompts: [
          { en: 'Hello! What is your name?', fr: 'Bonjour ! Quel est votre nom ?' },
          { en: 'Where are you from?', fr: 'D\'où venez-vous ?' },
          { en: 'How old are you?', fr: 'Quel âge avez-vous ?' },
          { en: 'Nice to meet you! I am a student.', fr: 'Enchanté(e) ! Je suis étudiant(e).' },
          { en: 'Can you spell your last name, please?', fr: 'Pouvez-vous épeler votre nom de famille, s\'il vous plaît ?' }
        ]
      },
      {
        title: { en: 'Describing Things', fr: 'Décrire des choses' },
        prompts: [
          { en: 'What color is your bag?', fr: 'De quelle couleur est votre sac ?' },
          { en: 'My phone is black and small.', fr: 'Mon téléphone est noir et petit.' },
          { en: 'Is it hot or cold today?', fr: 'Fait-il chaud ou froid aujourd\'hui ?' },
          { en: 'I have a big, white house.', fr: 'J\'ai une grande maison blanche.' }
        ]
      },
      {
        title: { en: 'Being Polite', fr: 'Être poli(e)' },
        prompts: [
          { en: 'Excuse me, could you help me, please?', fr: 'Excusez-moi, pourriez-vous m\'aider, s\'il vous plaît ?' },
          { en: 'Thank you very much! — You\'re welcome!', fr: 'Merci beaucoup ! — De rien !' },
          { en: 'Sorry, I don\'t understand. Could you repeat that?', fr: 'Désolé(e), je ne comprends pas. Pouvez-vous répéter ?' },
          { en: 'No problem! Of course I can help.', fr: 'Pas de problème ! Bien sûr que je peux aider.' }
        ]
      }
    ]
  }
};
