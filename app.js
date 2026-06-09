/**
 * ARIANE · ENGLISH LEARNING APP
 * Main Application — SPA Engine
 * Version 1.0
 */

'use strict';

// =============================================
// CONSTANTS
// =============================================
const TEACHER_PASSWORD = 'BachelinAriane259';
const STORAGE_KEY = 'ariane_app_state';
const DAYS_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const DAYS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const TOTAL_WEEKS = 4;
const CONFETTI_COLORS = ['#10b981', '#6366f1', '#f59e0b', '#ef4444', '#3b82f6', '#a855f7', '#ec4899'];

// =============================================
// STATE MANAGEMENT
// =============================================
const State = {
  data: null,

  defaults() {
    return {
      studentName: '',
      level: '',
      duration: 30,
      startDate: null,
      currentWeek: 1,
      progress: {},
      streak: 0,
      lastActiveDate: null,
      teacherNotes: {}
    };
  },

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      this.data = raw ? { ...this.defaults(), ...JSON.parse(raw) } : null;
    } catch (e) {
      this.data = null;
    }
    return this.data;
  },

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  },

  reset() {
    localStorage.removeItem(STORAGE_KEY);
    this.data = null;
  },

  isSetup() {
    return this.data && this.data.studentName && this.data.level && this.data.duration;
  },

  getLessonKey(week, day) {
    return `${week}-${day}`;
  },

  getLessonProgress(week, day) {
    const key = this.getLessonKey(week, day);
    return this.data.progress[key] || null;
  },

  completeLesson(week, day, score) {
    const key = this.getLessonKey(week, day);
    this.data.progress[key] = {
      completed: true,
      score,
      completedAt: new Date().toISOString()
    };
    this.updateStreak();
    this.save();
  },

  isLessonComplete(week, day) {
    const p = this.getLessonProgress(week, day);
    return p && p.completed;
  },

  isLessonAvailable(week, day) {
    if (week === 1 && day === 1) return true;
    if (day === 7) return true; // Sunday always available
    // Previous lesson must be completed
    if (day === 1) {
      return week > 1 && this.isLessonComplete(week - 1, 6);
    }
    return this.isLessonComplete(week, day - 1);
  },

  getTotalCompleted() {
    return Object.values(this.data.progress).filter(p => p && p.completed).length;
  },

  getAverageScore() {
    const scores = Object.values(this.data.progress)
      .filter(p => p && p.completed && typeof p.score === 'number')
      .map(p => p.score);
    if (!scores.length) return 0;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  },

  updateStreak() {
    const today = new Date().toDateString();
    if (this.data.lastActiveDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (this.data.lastActiveDate === yesterday) {
      this.data.streak++;
    } else if (this.data.lastActiveDate !== today) {
      this.data.streak = 1;
    }
    this.data.lastActiveDate = today;
  },

  saveTeacherNotes(week, notes) {
    this.data.teacherNotes[week] = notes;
    this.save();
  }
};

// =============================================
// LESSON DATA ACCESS
// =============================================
const LessonData = {
  getWeek(level, week) {
    const varName = `LESSONS_${level.toUpperCase()}_WEEK${week}`;
    try {
      return eval(varName);
    } catch (e) {
      return null;
    }
  },

  getDay(level, week, day) {
    const weekData = this.getWeek(level, week);
    if (!weekData) return null;
    return weekData.days.find(d => d.day === day) || null;
  },

  getSunday(level, week) {
    const weekData = this.getWeek(level, week);
    return weekData ? weekData.sunday : null;
  },

  getExercisesForDuration(day, duration) {
    if (!day || !day.exercises) return [];
    const count = duration === 15 ? 3 : duration === 30 ? 4 : day.exercises.length;
    return day.exercises.slice(0, Math.min(count, day.exercises.length));
  },

  getQuizForDuration(day, duration) {
    if (!day || !day.quiz) return [];
    const count = duration === 15 ? 2 : 3;
    return day.quiz.slice(0, Math.min(count, day.quiz.length));
  }
};

// =============================================
// SPEECH SYNTHESIS
// =============================================
const Speech = {
  synth: window.speechSynthesis,
  voices: [],

  init() {
    if (!this.synth) return;
    const loadVoices = () => {
      this.voices = this.synth.getVoices();
    };
    loadVoices();
    this.synth.addEventListener('voiceschanged', loadVoices);
  },

  getEnglishVoice() {
    const prefs = ['Google US English', 'Ava', 'Samantha', 'Allison', 'Susan', 'Victoria'];
    for (const name of prefs) {
      const voice = this.voices.find(v => v.lang.startsWith('en') && v.name.includes(name));
      if (voice) return voice;
    }
    return this.voices.find(v => v.lang.startsWith('en-US') && v.name.toLowerCase().includes('female')) ||
           this.voices.find(v => v.lang.startsWith('en-US')) ||
           this.voices.find(v => v.lang.startsWith('en')) || null;
  },

  speak(text, lang = 'en') {
    if (!this.synth) return;
    this.synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.80; // Slower for clarity
    utterance.pitch = 1.35; // Higher pitch for a more feminine tone
    
    if (lang === 'en') {
      const voice = this.getEnglishVoice();
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang; // Match the native voice language
      } else {
        utterance.lang = 'en-US'; // Fallback to American English
      }
    } else {
      utterance.lang = 'fr-FR';
    }
    this.synth.speak(utterance);
  }
};

// =============================================
// ROUTER
// =============================================
const Router = {
  currentView: null,
  currentParams: {},

  navigate(view, params = {}) {
    this.currentView = view;
    this.currentParams = params;
    this.render();
  },

  render() {
    const app = document.getElementById('app');
    switch (this.currentView) {
      case 'onboarding': Views.renderOnboarding(app); break;
      case 'dashboard': Views.renderDashboard(app); break;
      case 'lesson': Views.renderLesson(app, this.currentParams); break;
      case 'sunday': Views.renderSunday(app, this.currentParams); break;
      case 'teacher': Views.renderTeacher(app); break;
      default: Views.renderDashboard(app);
    }
  }
};

// =============================================
// UI UTILITIES
// =============================================
const UI = {
  renderLayout(contentHtml, showNav = true) {
    const { level, studentName, streak } = State.data;
    const levelLabel = level === 'beginner' ? 'Débutant A1-A2' : 'Intermédiaire B1-B2';
    return `
      <div class="app-layout">
        ${showNav ? `
        <header class="app-header">
          <div class="app-logo" onclick="Router.navigate('dashboard')">
            <img src="logo-5.png" alt="BC Logo" class="app-logo-image" style="height: 32px; width: auto; mix-blend-mode: darken;">
            <span class="app-logo-text">English with <span>Bachelin</span></span>
          </div>
          <nav class="app-nav">
            <div class="nav-streak" title="Série de jours">🔥 ${streak}</div>
            <div class="nav-level-badge">${levelLabel}</div>
            <button class="btn btn-ghost btn-sm" onclick="Router.navigate('teacher')" title="Accès professeur">👨‍🏫</button>
          </nav>
        </header>` : ''}
        <main class="app-main">
          ${contentHtml}
        </main>
      </div>
    `;
  },

  showToast(message, type = 'success', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(30px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  launchConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      const color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
      const size = Math.random() * 8 + 6;
      const left = Math.random() * 100;
      const duration = Math.random() * 2 + 2;
      const delay = Math.random() * 1;
      const isCircle = Math.random() > 0.5;
      piece.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: ${isCircle ? '50%' : '2px'};
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
      `;
      container.appendChild(piece);
    }
    setTimeout(() => container.remove(), 5000);
  },

  speakBtn(text, lang = 'en') {
    return `<button class="speak-btn" onclick="Speech.speak('${text.replace(/'/g, "\\'")}', '${lang}')" title="Écouter la prononciation">🔊</button>`;
  }
};

// =============================================
// VIEWS
// =============================================
const Views = {
  // ---- ONBOARDING ----
  renderOnboarding(app) {
    document.body.className = '';
    app.innerHTML = `
      <div class="onboarding">
        <div class="onboarding-header">
          <img src="logo-5.png" alt="Bachelin Consulting" class="onboarding-logo" style="height: 70px; width: auto; margin-bottom: var(--space-md); mix-blend-mode: darken;">
          <h1 class="onboarding-title">English with Bachelin</h1>
          <p class="onboarding-subtitle">Votre parcours personnalisé · Your personalised journey</p>
        </div>

        <div class="onboarding-card">
          <div class="step-indicator">
            <div class="step-dot active" id="dot-0"></div>
            <div class="step-dot" id="dot-1"></div>
            <div class="step-dot" id="dot-2"></div>
          </div>

          <!-- Step 1: Name -->
          <div class="onboarding-step active" id="step-0">
            <div class="step-label">Étape 1 / Step 1</div>
            <div class="step-question">Comment vous appelez-vous ? / What is your name?</div>
            <div class="step-hint">Ce prénom apparaîtra dans l'application · This name will appear in the app</div>
            <input type="text" class="name-input" id="student-name" placeholder="Votre prénom / Your first name" autocomplete="given-name" />
            <button class="btn btn-primary btn-full" id="step0-next" onclick="Onboarding.nextStep(0)" disabled>
              Continuer · Continue →
            </button>
          </div>

          <!-- Step 2: Level -->
          <div class="onboarding-step" id="step-1">
            <div class="step-label">Étape 2 / Step 2</div>
            <div class="step-question">Quel est votre niveau d'anglais ? / What is your English level?</div>
            <div class="step-hint">Vous pourrez changer de niveau plus tard · You can change level later</div>
            <div class="level-cards">
              <div class="level-card" id="level-beginner" onclick="Onboarding.selectLevel('beginner')">
                <div class="level-card-icon">🌱</div>
                <div class="level-card-info">
                  <div class="level-card-title">Débutant · Beginner</div>
                  <div class="level-card-desc">A1–A2 · Je connais peu d'anglais · I know little English</div>
                </div>
                <div class="level-card-check" id="check-beginner"></div>
              </div>
              <div class="level-card" id="level-intermediate" onclick="Onboarding.selectLevel('intermediate')">
                <div class="level-card-icon">🚀</div>
                <div class="level-card-info">
                  <div class="level-card-title">Intermédiaire · Intermediate</div>
                  <div class="level-card-desc">B1–B2 · J'ai des bases en anglais · I have some English</div>
                </div>
                <div class="level-card-check" id="check-intermediate"></div>
              </div>
            </div>
            <div style="display:flex;gap:0.5rem;">
              <button class="btn btn-secondary" onclick="Onboarding.prevStep(1)">← Retour</button>
              <button class="btn btn-primary" style="flex:1" id="step1-next" onclick="Onboarding.nextStep(1)" disabled>Continuer · Continue →</button>
            </div>
          </div>

          <!-- Step 3: Duration -->
          <div class="onboarding-step" id="step-2">
            <div class="step-label">Étape 3 / Step 3</div>
            <div class="step-question">Combien de temps par jour ? / How much time per day?</div>
            <div class="step-hint">Les exercices s'adaptent automatiquement · Exercises adapt automatically</div>
            <div class="duration-cards">
              <div class="duration-card" id="dur-15" onclick="Onboarding.selectDuration(15)">
                <div class="duration-card-time">15</div>
                <div class="duration-card-label">min / jour</div>
                <div class="duration-card-exercises">3 exercices</div>
              </div>
              <div class="duration-card" id="dur-30" onclick="Onboarding.selectDuration(30)">
                <div class="duration-card-time">30</div>
                <div class="duration-card-label">min / jour</div>
                <div class="duration-card-exercises">4 exercices</div>
              </div>
              <div class="duration-card" id="dur-60" onclick="Onboarding.selectDuration(60)">
                <div class="duration-card-time">60</div>
                <div class="duration-card-label">min / jour</div>
                <div class="duration-card-exercises">Tous les exercices</div>
              </div>
            </div>
            <div style="display:flex;gap:0.5rem;">
              <button class="btn btn-secondary" onclick="Onboarding.prevStep(2)">← Retour</button>
              <button class="btn btn-primary" style="flex:1" id="step2-next" onclick="Onboarding.finishOnboarding()" disabled>
                🚀 Commencer · Start!
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Name input live validation
    const nameInput = document.getElementById('student-name');
    if (nameInput) {
      nameInput.addEventListener('input', () => {
        const btn = document.getElementById('step0-next');
        if (btn) btn.disabled = nameInput.value.trim().length < 2;
      });
      nameInput.addEventListener('keydown', e => {
        if (e.key === 'Enter' && nameInput.value.trim().length >= 2) Onboarding.nextStep(0);
      });
    }
  },

  // ---- DASHBOARD ----
  renderDashboard(app) {
    const { studentName, level, currentWeek } = State.data;
    document.body.className = `level-${level}`;

    const totalLessons = TOTAL_WEEKS * 6;
    const completed = State.getTotalCompleted();
    const avgScore = State.getAverageScore();
    const progressPct = Math.round((completed / totalLessons) * 100);

    // Week theme
    const weekData = LessonData.getWeek(level, currentWeek);
    const theme = weekData ? weekData.theme : { en: '', fr: '' };

    // Greetings
    const hour = new Date().getHours();
    const greetEn = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    const greetFr = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir';

    let html = `
      <div class="dashboard">
        <div class="dashboard-greeting">
          <h1 class="greeting-text">${greetEn}, <span>${studentName}</span>! 👋</h1>
          <p class="greeting-sub">${greetFr} ! Prêt(e) pour votre leçon du jour ? · Ready for today's lesson?</p>
        </div>

        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-icon">📚</div>
            <div class="stat-value">${completed}</div>
            <div class="stat-label">Leçons<br>terminées</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">🔥</div>
            <div class="stat-value">${State.data.streak}</div>
            <div class="stat-label">Jours<br>de suite</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">⭐</div>
            <div class="stat-value">${avgScore}%</div>
            <div class="stat-label">Score<br>moyen</div>
          </div>
        </div>

        <div class="progress-section">
          <div class="progress-header">
            <span class="progress-title">Progression globale · Overall Progress</span>
            <span class="progress-value">${progressPct}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" id="main-progress-fill" style="width: 0%"></div>
          </div>
        </div>

        <div class="week-selector" id="week-selector">
          ${Array.from({ length: TOTAL_WEEKS }, (_, i) => i + 1).map(w => `
            <button class="week-tab ${w === currentWeek ? 'active' : ''}" onclick="Dashboard.selectWeek(${w})">
              Semaine ${w}
            </button>
          `).join('')}
        </div>

        <div id="week-content">
          ${this.renderWeekGrid(currentWeek)}
        </div>
      </div>
    `;

    app.innerHTML = UI.renderLayout(html);

    // Animate progress bar
    requestAnimationFrame(() => {
      const fill = document.getElementById('main-progress-fill');
      if (fill) fill.style.width = progressPct + '%';
    });
  },

  renderWeekGrid(week) {
    const { level } = State.data;
    const weekData = LessonData.getWeek(level, week);
    const theme = weekData ? weekData.theme : { en: `Week ${week}`, fr: `Semaine ${week}` };

    let html = `
      <div>
        <div class="week-section-title">
          Semaine ${week} · Week ${week}
          <span class="week-theme-badge">${theme.fr} · ${theme.en}</span>
        </div>
        <div class="days-grid">
    `;

    // Days 1-6 (Mon-Sat)
    for (let day = 1; day <= 6; day++) {
      const isComplete = State.isLessonComplete(week, day);
      const isAvail = State.isLessonAvailable(week, day);
      const progress = State.getLessonProgress(week, day);
      const dayData = LessonData.getDay(level, week, day);

      const dayNameFr = DAYS_FR[day - 1];
      const dayNameEn = DAYS_EN[day - 1];
      const icon = dayData ? dayData.icon : '📖';
      const title = dayData ? dayData.title.fr : '';

      let cardClass = 'day-card';
      if (!isAvail) cardClass += ' locked';
      else if (isComplete) cardClass += ' completed';

      // Check if today
      const todayName = DAYS_EN[new Date().getDay() === 0 ? 6 : new Date().getDay() - 1];
      if (isAvail && !isComplete && dayNameEn === todayName) cardClass += ' today';

      const statusIcon = isComplete ? '✅' : !isAvail ? '🔒' : '';
      const scoreStr = progress && progress.score !== undefined ? `${progress.score}%` : '';

      const clickAction = isAvail
        ? `onclick="Router.navigate('lesson', {week: ${week}, day: ${day}})"`
        : '';

      html += `
        <div class="${cardClass}" ${clickAction} title="${dayNameEn} - ${title}">
          <div class="day-card-status">${statusIcon}</div>
          <div class="day-card-name">${dayNameFr}</div>
          <div class="day-card-icon">${icon}</div>
          <div class="day-card-title">${title}</div>
          ${scoreStr ? `<div class="day-card-score">${scoreStr}</div>` : ''}
        </div>
      `;
    }

    // Sunday (day 7)
    const sunProgress = State.getLessonProgress(week, 7);
    html += `
      <div class="day-card sunday" onclick="Router.navigate('sunday', {week: ${week}})">
        <div class="day-card-name" style="color:var(--gold)">Dimanche</div>
        <div class="day-card-icon">☀️</div>
        <div class="day-card-title" style="color:var(--gold)">Session<br>Bachelin</div>
      </div>
    `;

    html += '</div></div>';
    return html;
  },

  // ---- LESSON VIEW ----
  renderLesson(app, { week, day }) {
    const { level, duration } = State.data;
    const dayData = LessonData.getDay(level, week, day);

    if (!dayData) {
      app.innerHTML = UI.renderLayout(`
        <div class="text-center" style="padding:3rem">
          <p style="font-size:2rem">⚠️</p>
          <p>Leçon non disponible · Lesson not available</p>
          <button class="btn btn-primary mt-lg" onclick="Router.navigate('dashboard')">← Retour</button>
        </div>
      `);
      return;
    }

    // Store lesson state
    app._lessonState = {
      week, day, level, duration,
      phase: 'theory', // theory | exercises | quiz | complete
      exerciseIndex: 0,
      quizIndex: 0,
      score: 0,
      totalQuiz: 0,
      correctQuiz: 0,
      answered: false
    };

    this._renderLessonPhase(app);
  },

  _renderLessonPhase(app) {
    const ls = app._lessonState;
    const { week, day, level, duration, phase } = ls;
    const dayData = LessonData.getDay(level, week, day);
    const exercises = LessonData.getExercisesForDuration(dayData, duration);
    const quiz = LessonData.getQuizForDuration(dayData, duration);

    const stepFills = ['theory', 'exercises', 'quiz'].map((p, i) => {
      const isDone = phase === 'exercises' && i === 0 ||
                     phase === 'quiz' && i <= 1 ||
                     phase === 'complete' && i <= 2;
      const isActive = p === phase;
      return `<div class="lesson-step ${isDone ? 'done' : isActive ? 'active' : ''}">
        <div class="lesson-step-fill" style="width:${isDone ? '100' : isActive ? '50' : '0'}%"></div>
      </div>`;
    }).join('');

    let phaseContent = '';
    if (phase === 'theory') {
      phaseContent = this.renderTheory(dayData);
    } else if (phase === 'exercises') {
      phaseContent = this.renderExercise(exercises[ls.exerciseIndex], ls.exerciseIndex, exercises.length, ls);
    } else if (phase === 'quiz') {
      phaseContent = this.renderQuizQuestion(quiz[ls.quizIndex], ls.quizIndex, quiz.length, ls);
    } else if (phase === 'complete') {
      phaseContent = this.renderCompletion(ls);
    }

    const title = dayData.title;
    const weekData = LessonData.getWeek(level, week);

    app.innerHTML = UI.renderLayout(`
      <div class="lesson-view">
        <div class="lesson-header">
          <div class="lesson-breadcrumb">
            <a onclick="Router.navigate('dashboard')">🏠 Accueil</a>
            <span>›</span>
            <span>Semaine ${week}</span>
            <span>›</span>
            <span>${DAYS_FR[day - 1]}</span>
          </div>
          <div class="lesson-progress-steps">${stepFills}</div>
          <h2 class="lesson-title">${dayData.icon} ${title.fr}</h2>
          <p class="lesson-subtitle">${title.en}</p>
        </div>
        ${phaseContent}
      </div>
    `);

    // Re-attach lesson state since innerHTML replaced the DOM
    document.getElementById('app')._lessonState = ls;
    // Re-init exercises that need JS state
    if (phase === 'exercises' || phase === 'quiz') {
      ExerciseEngines.init(app, ls, phase);
    }
  },

  renderTheory(dayData) {
    const { theory } = dayData;
    const vocabCards = theory.vocabulary.map(v => `
      <div class="vocab-card">
        <div class="vocab-card-front">
          <div class="vocab-en">${v.en}</div>
          <div class="vocab-pronunciation">${v.pronunciation || ''}</div>
          <div class="vocab-fr">${v.fr}</div>
        </div>
        <div class="vocab-card-back">
          <div class="vocab-fr" style="font-size:1rem;margin-bottom:4px">${v.fr}</div>
          <div class="vocab-example">${v.example ? `"${v.example.en}" · "${v.example.fr}"` : ''}</div>
        </div>
        <button class="vocab-speak-btn" onclick="event.stopPropagation();Speech.speak('${v.en.replace(/'/g, "\\'")}')">🔊</button>
      </div>
    `).join('');

    const examplesHtml = theory.examples.map(ex => `
      <div class="example-item">
        <div class="example-en">${ex.en}</div>
        <div class="example-fr">${ex.fr}</div>
        ${UI.speakBtn(ex.speak || ex.en)}
      </div>
    `).join('');

    return `
      <div class="theory-section">
        <div class="theory-intro">
          <p>${theory.intro.fr}</p>
          <p style="color:var(--text-muted);font-size:0.875rem;margin-top:0.5rem"><em>${theory.intro.en}</em></p>
        </div>

        <div class="grammar-box">
          <div class="grammar-title">📐 ${theory.grammarTitle.fr} · ${theory.grammarTitle.en}</div>
          <div class="grammar-rule">
            ${theory.grammar.fr}
          </div>
          <div style="color:var(--text-muted);font-size:0.8125rem;line-height:1.6;margin-bottom:var(--space-md)">
            <em>${theory.grammar.en}</em>
          </div>
          <div class="section-title">💡 Exemples · Examples</div>
          <div class="grammar-examples">${examplesHtml}</div>
        </div>

        <div class="section-title">📝 Vocabulaire · Vocabulary</div>
        <p style="font-size:0.8125rem;color:var(--text-muted);margin-bottom:var(--space-md)">Passez la souris sur chaque carte pour voir l'exemple · Hover each card for an example</p>
        <div class="vocab-grid">${vocabCards}</div>

        <div style="display:flex;justify-content:flex-end;margin-top:var(--space-lg)">
          <button class="btn btn-primary btn-lg" onclick="LessonController.startExercises()">
            Passer aux exercices · Start exercises 🎯
          </button>
        </div>
      </div>
    `;
  },

  renderExercise(exercise, index, total, ls) {
    if (!exercise) return '<p>Aucun exercice disponible.</p>';
    const engine = ExerciseEngines[exercise.type];
    if (!engine) return `<p>Type d'exercice inconnu: ${exercise.type}</p>`;

    return `
      <div class="exercises-section">
        <div class="exercise-card" id="exercise-card-${index}">
          <div class="exercise-number">Exercice ${index + 1} / ${total}</div>
          <div id="exercise-content">
            ${engine.render(exercise, ls)}
          </div>
          ${exercise.type === 'match' ? '' : `
          <div class="check-btn-wrapper">
            <button class="btn btn-primary w-full mt-lg" id="check-btn" onclick="ExerciseEngines.check('${exercise.type}', '${exercise.id}')" disabled>
              Vérifier · Check ✓
            </button>
          </div>
          `}
          <div id="exercise-feedback"></div>
          <button class="btn btn-primary mt-lg w-full" onclick="LessonController.nextExercise()" id="next-exercise-btn" style="display:none">
            Exercice suivant · Next exercise →
          </button>
        </div>
      </div>
    `;
  },

  renderQuizQuestion(question, index, total, ls) {
    if (!question) return '';
    const engine = ExerciseEngines[question.type] || ExerciseEngines.mcq;

    return `
      <div class="quiz-section">
        <div class="quiz-header">
          <div class="quiz-icon">🧠</div>
          <div class="quiz-info">
            <h3>Quiz final · Final quiz</h3>
            <p>Testez vos connaissances · Test your knowledge</p>
          </div>
          <div class="quiz-counter">${index + 1}/${total}</div>
        </div>

        <div id="quiz-question-content">
          ${engine.render(question, ls)}
        </div>

        <div class="check-btn-wrapper">
          <button class="btn btn-primary" id="check-btn" onclick="ExerciseEngines.check('${question.type}', '${question.id}', true)" disabled>
            Valider · Submit ✓
          </button>
        </div>
        <div id="exercise-feedback"></div>

        <div class="quiz-navigation">
          <button class="btn btn-primary" id="next-quiz-btn" onclick="LessonController.nextQuiz()" style="display:none">
            ${index + 1 < total ? 'Question suivante · Next →' : 'Terminer · Finish 🎉'}
          </button>
        </div>
      </div>
    `;
  },

  renderCompletion(ls) {
    const { correctQuiz, totalQuiz, week, day } = ls;
    const score = totalQuiz > 0 ? Math.round((correctQuiz / totalQuiz) * 100) : 100;
    const perfect = score === 100;
    const good = score >= 70;

    const emoji = perfect ? '🏆' : good ? '🌟' : '💪';
    const msgFr = perfect ? 'Parfait ! Vous maîtrisez cette leçon !'
      : good ? 'Très bien ! Continuez comme ça !'
      : 'Courage ! Révisez et réessayez demain.';
    const msgEn = perfect ? 'Perfect! You have mastered this lesson!'
      : good ? 'Well done! Keep it up!'
      : 'Keep going! Review and try again tomorrow.';

    return `
      <div class="completion-screen">
        <div class="completion-emoji">${emoji}</div>
        <h2 class="completion-title">${msgFr}</h2>
        <p style="color:var(--text-secondary);margin-bottom:var(--space-lg)">${msgEn}</p>
        <div class="completion-score-ring">
          <div class="completion-score-number">${score}%</div>
        </div>
        <p class="completion-message">
          ${correctQuiz} / ${totalQuiz} bonnes réponses au quiz · ${correctQuiz} / ${totalQuiz} correct in quiz
        </p>
        <div class="completion-actions">
          <button class="btn btn-primary btn-lg" onclick="Router.navigate('dashboard')">
            🏠 Tableau de bord · Dashboard
          </button>
          ${!State.isLessonComplete(week, day + 1) && day < 6 ? `
            <button class="btn btn-secondary" onclick="Router.navigate('lesson', {week: ${week}, day: ${day + 1}})">
              Leçon suivante · Next lesson →
            </button>
          ` : ''}
        </div>
      </div>
    `;
  },

  // ---- SUNDAY VIEW ----
  renderSunday(app, { week }) {
    const { level } = State.data;
    const sunday = LessonData.getSunday(level, week);
    const notes = State.data.teacherNotes[week] || '';

    if (!sunday) {
      app.innerHTML = UI.renderLayout(`
        <div class="text-center" style="padding:3rem">
          <p>Fiche de révision non disponible.</p>
          <button class="btn btn-primary mt-lg" onclick="Router.navigate('dashboard')">← Retour</button>
        </div>
      `);
      return;
    }

    const vocabItems = sunday.vocabulary.map(v => `
      <div class="sunday-vocab-item">
        <span class="sunday-vocab-en">${v.en} ${UI.speakBtn(v.en)}</span>
        <span class="sunday-vocab-fr">${v.fr}</span>
      </div>
    `).join('');

    const grammarItems = sunday.grammarPoints.map(g => `
      <div class="sunday-grammar-item">
        <div class="sunday-grammar-title">${g.title.fr} · ${g.title.en}</div>
        <div class="sunday-grammar-rule">${g.rule.fr}</div>
        <div class="sunday-grammar-rule" style="color:var(--text-muted);font-size:0.8125rem"><em>${g.rule.en}</em></div>
        <div style="margin-top:0.5rem;padding:0.5rem;background:var(--bg-base);border-radius:0.5rem;font-size:0.875rem">
          💬 ${g.example.en} · <em>${g.example.fr}</em>
        </div>
      </div>
    `).join('');

    const topicsHtml = sunday.conversationTopics.map(topic => `
      <div class="sunday-topic">
        <div class="sunday-topic-title">💬 ${topic.title.fr} · ${topic.title.en}</div>
        <ul class="sunday-topic-prompts">
          ${topic.prompts.map(p => `
            <li class="sunday-topic-prompt">
              ${p.en} · <em style="color:var(--text-secondary)">${p.fr}</em>
              ${UI.speakBtn(p.en)}
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');

    // Stats for the week
    let weekScore = 0, weekCompleted = 0;
    for (let d = 1; d <= 6; d++) {
      const p = State.getLessonProgress(week, d);
      if (p && p.completed) {
        weekCompleted++;
        weekScore += (p.score || 0);
      }
    }
    const avgWeekScore = weekCompleted > 0 ? Math.round(weekScore / weekCompleted) : 0;

    app.innerHTML = UI.renderLayout(`
      <div class="sunday-view">
        <div class="sunday-header">
          <div class="sunday-icon">☀️</div>
          <h1 class="sunday-title">${sunday.title.fr}</h1>
          <p class="sunday-subtitle">${sunday.title.en}</p>
          <div style="display:flex;gap:1rem;justify-content:center;margin-top:1rem">
            <div style="text-align:center">
              <div style="font-family:var(--font-display);font-size:1.5rem;font-weight:800;color:var(--gold)">${weekCompleted}/6</div>
              <div style="font-size:0.75rem;color:var(--text-muted)">Leçons terminées</div>
            </div>
            <div style="text-align:center">
              <div style="font-family:var(--font-display);font-size:1.5rem;font-weight:800;color:var(--gold)">${avgWeekScore}%</div>
              <div style="font-size:0.75rem;color:var(--text-muted)">Score moyen</div>
            </div>
          </div>
        </div>

        <div style="background:var(--warning-bg);border:1px solid var(--gold);border-radius:var(--radius-xl);padding:var(--space-md) var(--space-lg);margin-bottom:var(--space-lg)">
          <p style="font-size:0.875rem;color:var(--gold)">${sunday.summary.fr}</p>
          <p style="font-size:0.8125rem;color:var(--text-muted);margin-top:0.25rem"><em>${sunday.summary.en}</em></p>
        </div>

        <div class="sunday-section">
          <div class="section-title">📝 Vocabulaire clé · Key Vocabulary</div>
          <p style="font-size:0.8125rem;color:var(--text-muted);margin-bottom:var(--space-md)">
            Révisez ces mots avec votre professeur · Review these words with your teacher
          </p>
          <div class="sunday-vocab-grid">${vocabItems}</div>
        </div>

        <div class="sunday-section">
          <div class="section-title">📐 Points de grammaire · Grammar Points</div>
          ${grammarItems}
        </div>

        <div class="sunday-section">
          <div class="section-title">💬 Sujets de conversation · Conversation Topics</div>
          <p style="font-size:0.8125rem;color:var(--text-muted);margin-bottom:var(--space-md)">
            Questions pour pratiquer à l'oral · Questions to practise speaking
          </p>
          ${topicsHtml}
        </div>

        <div class="sunday-section">
          <div class="section-title">✍️ Notes du professeur · Teacher Notes</div>
          <p style="font-size:0.8125rem;color:var(--text-muted);margin-bottom:var(--space-sm)">
            Notes réservées à Bachelin · Notes reserved for Bachelin
          </p>
          <textarea
            class="teacher-notes-textarea"
            id="teacher-notes-input"
            placeholder="Ajouter des notes après la session... · Add notes after the session..."
            onchange="State.saveTeacherNotes(${week}, this.value)"
          >${notes}</textarea>
        </div>

        <div style="display:flex;justify-content:center;margin-top:var(--space-xl)">
          <button class="btn btn-secondary" onclick="Router.navigate('dashboard')">
            ← Retour au tableau de bord · Back to dashboard
          </button>
        </div>
      </div>
    `);
  },

  // ---- TEACHER DASHBOARD ----
  renderTeacher(app) {
    const isAuth = sessionStorage.getItem('teacher_auth') === '1';

    if (!isAuth) {
      app.innerHTML = UI.renderLayout(`
        <div class="teacher-login">
          <div class="teacher-login-card">
            <div style="font-size:2.5rem;margin-bottom:1rem">👨‍🏫</div>
            <h2 class="font-display" style="font-size:1.5rem;font-weight:800;margin-bottom:0.5rem">Espace Professeur</h2>
            <p class="text-secondary" style="margin-bottom:1.5rem;font-size:0.875rem">Teacher Dashboard · Accès protégé</p>
            <div style="margin-bottom:1rem">
              <input type="password" id="teacher-pwd" class="name-input" placeholder="Mot de passe · Password"
                onkeydown="if(event.key==='Enter') Teacher.login()" />
            </div>
            <div id="login-error" style="color:var(--error);font-size:0.875rem;margin-bottom:1rem;display:none">
              ❌ Mot de passe incorrect · Wrong password
            </div>
            <button class="btn btn-primary btn-full" onclick="Teacher.login()">Se connecter · Login</button>
            <button class="btn btn-ghost btn-sm" style="margin-top:1rem;width:100%" onclick="Router.navigate('dashboard')">
              ← Retour · Back
            </button>
          </div>
        </div>
      `);
      return;
    }

    // Authenticated
    const { studentName, level, duration } = State.data;
    const levelLabel = level === 'beginner' ? 'Débutant A1-A2' : 'Intermédiaire B1-B2';

    // Build progress table
    let tableRows = '';
    for (let w = 1; w <= TOTAL_WEEKS; w++) {
      for (let d = 1; d <= 6; d++) {
        const p = State.getLessonProgress(w, d);
        const weekData = LessonData.getWeek(level, w);
        const dayData = LessonData.getDay(level, w, d);
        const dayName = `${DAYS_FR[d-1]} S${w}`;
        const lesson = dayData ? dayData.title.fr : `Jour ${d}`;
        const date = p && p.completedAt ? new Date(p.completedAt).toLocaleDateString('fr-FR') : '—';
        const score = p && typeof p.score === 'number' ? p.score : null;

        let scoreClass = 'none';
        let scoreLabel = '—';
        if (score !== null) {
          scoreLabel = `${score}%`;
          scoreClass = score >= 80 ? 'good' : score >= 60 ? 'medium' : 'poor';
        }

        tableRows += `
          <tr>
            <td>${dayName}</td>
            <td>${lesson}</td>
            <td>${p ? '✅' : '⬜'}</td>
            <td><span class="score-pill ${scoreClass}">${scoreLabel}</span></td>
            <td>${date}</td>
          </tr>
        `;
      }
    }

    // Notes
    let notesHtml = '';
    for (let w = 1; w <= TOTAL_WEEKS; w++) {
      const note = State.data.teacherNotes[w];
      if (note) {
        notesHtml += `
          <div style="margin-bottom:var(--space-md)">
            <div style="font-size:0.875rem;font-weight:700;color:var(--gold);margin-bottom:4px">Semaine ${w}</div>
            <div style="font-size:0.875rem;color:var(--text-secondary);white-space:pre-wrap">${note}</div>
          </div>
        `;
      }
    }

    app.innerHTML = UI.renderLayout(`
      <div class="teacher-dashboard">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-xl)">
          <h1 class="font-display" style="font-size:1.75rem;font-weight:800">👨‍🏫 Espace Professeur</h1>
          <div style="display:flex;gap:0.5rem">
            <button class="btn btn-secondary btn-sm" onclick="Router.navigate('dashboard')">← Tableau de bord</button>
            <button class="btn btn-ghost btn-sm" onclick="Teacher.logout()">Déconnexion</button>
          </div>
        </div>

        <div class="teacher-card">
          <div class="teacher-card-title">👤 Profil de l'élève</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">Prénom</div>
              <div style="font-weight:700;margin-top:4px">${studentName}</div>
            </div>
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">Niveau</div>
              <div style="font-weight:700;margin-top:4px">${levelLabel}</div>
            </div>
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">Durée/jour</div>
              <div style="font-weight:700;margin-top:4px">${duration} min</div>
            </div>
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">Score moyen</div>
              <div style="font-weight:700;margin-top:4px;color:var(--accent-light)">${State.getAverageScore()}%</div>
            </div>
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">Leçons complètes</div>
              <div style="font-weight:700;margin-top:4px">${State.getTotalCompleted()} / ${TOTAL_WEEKS * 6}</div>
            </div>
            <div>
              <div style="font-size:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">Série actuelle</div>
              <div style="font-weight:700;margin-top:4px">🔥 ${State.data.streak} jours</div>
            </div>
          </div>
        </div>

        <div class="teacher-card">
          <div class="teacher-card-title">📊 Progression détaillée</div>
          <div style="overflow-x:auto">
            <table class="progress-table">
              <thead>
                <tr>
                  <th>Jour</th>
                  <th>Leçon</th>
                  <th>Statut</th>
                  <th>Score</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>${tableRows}</tbody>
            </table>
          </div>
        </div>

        ${notesHtml ? `
        <div class="teacher-card">
          <div class="teacher-card-title">✍️ Notes de session</div>
          ${notesHtml}
        </div>
        ` : ''}

        <div class="teacher-card">
          <div class="teacher-card-title" style="color:var(--error)">⚠️ Zone de danger</div>
          <p style="font-size:0.875rem;color:var(--text-secondary);margin-bottom:1rem">
            Réinitialiser toute la progression de l'élève. Cette action est irréversible.
          </p>
          <button class="btn btn-sm" style="background:var(--error-bg);border:1px solid var(--error);color:var(--error)"
            onclick="Teacher.resetProgress()">
            🗑️ Réinitialiser la progression
          </button>
        </div>
      </div>
    `);
  }
};

// =============================================
// EXERCISE ENGINES
// =============================================
const ExerciseEngines = {
  // Shared state for current exercise
  _state: {},

  init(app, ls, phase) {
    this._state = {
      app, ls, phase,
      matchSelected: null,
      matchPairs: {},
      orderSentence: []
    };
  },

  // ---- MCQ ----
  mcq: {
    render(ex, ls) {
      const optionsHtml = ex.options.map((opt, i) => {
        const letters = ['A', 'B', 'C', 'D'];
        return `
          <div class="mcq-option" id="mcq-opt-${i}" onclick="ExerciseEngines.mcq.select(${i}, ${ex.correct})">
            <div class="mcq-letter">${letters[i]}</div>
            <span>${opt}</span>
          </div>
        `;
      }).join('');

      return `
        <div class="exercise-question">${ex.question.en}</div>
        <div class="exercise-question-fr">${ex.question.fr}</div>
        <div class="mcq-options" id="mcq-opts">${optionsHtml}</div>
      `;
    },

    select(index, correct) {
      const opts = document.querySelectorAll('.mcq-option');
      opts.forEach(o => o.classList.add('disabled'));
      const selected = document.getElementById(`mcq-opt-${index}`);
      const isCorrect = index === correct;

      if (isCorrect) {
        selected.classList.add('correct');
        ExerciseEngines._state.lastCorrect = true;
      } else {
        selected.classList.add('wrong');
        document.getElementById(`mcq-opt-${correct}`).classList.add('correct');
        ExerciseEngines._state.lastCorrect = false;
      }

      const checkBtn = document.getElementById('check-btn');
      if (checkBtn) {
        checkBtn.disabled = true;
        checkBtn.style.display = 'none';
      }

      ExerciseEngines._showResult(isCorrect, null);
      ExerciseEngines._showNextButton();
    }
  },

  // ---- FILL ----
  fill: {
    render(ex, ls) {
      const parts = ex.template.split('___');
      return `
        <div class="exercise-question">${ex.instruction.en}</div>
        <div class="exercise-question-fr">${ex.instruction.fr}</div>
        <div class="fill-sentence">
          ${parts[0]}<span style="color:var(--accent)">___</span>${parts[1] || ''}
        </div>
        <div class="fill-input-wrapper">
          <input type="text" class="fill-input" id="fill-answer" placeholder="Your answer..." autocomplete="off"
            oninput="document.getElementById('check-btn').disabled = this.value.trim().length === 0"
            onkeydown="if(event.key==='Enter' && this.value.trim()) ExerciseEngines.fill.check('${ex.answer.replace(/'/g, "\\'")}')" />
        </div>
        <div class="fill-hint">💡 ${ex.hint.fr} · ${ex.hint.en}</div>
      `;
    },

    check(answer) {
      const input = document.getElementById('fill-answer');
      if (!input) return;
      const userAnswer = input.value.trim().toLowerCase();
      const isCorrect = userAnswer === answer.toLowerCase();
      input.classList.add(isCorrect ? 'correct' : 'wrong');
      input.disabled = true;
      ExerciseEngines._state.lastCorrect = isCorrect;
      ExerciseEngines._showResult(isCorrect, isCorrect ? null : `Réponse correcte · Correct answer: "${answer}"`);
      ExerciseEngines._showNextButton();
      const checkBtn = document.getElementById('check-btn');
      if (checkBtn) { checkBtn.disabled = true; checkBtn.style.display = 'none'; }
    }
  },

  // ---- MATCH ----
  match: {
    render(ex, ls) {
      const lefts = ex.pairs.map((p, i) => `
        <div class="match-chip" id="match-left-${i}" onclick="ExerciseEngines.match.selectLeft(${i})">${p.left}</div>
      `).join('');
      const rightIndices = ex.pairs.map((_, i) => i).sort(() => Math.random() - 0.5);
      const rights = rightIndices.map(i => `
        <div class="match-chip" id="match-right-${i}" data-idx="${i}" onclick="ExerciseEngines.match.selectRight(${i})">${ex.pairs[i].right}</div>
      `).join('');

      ExerciseEngines._state.matchLeft = null;
      ExerciseEngines._state.matchMatched = {};
      ExerciseEngines._state.matchTotal = ex.pairs.length;
      ExerciseEngines._state.matchCorrect = 0;
      ExerciseEngines._state.matchPairs = ex.pairs;

      return `
        <div class="exercise-question">${ex.instruction.en}</div>
        <div class="exercise-question-fr">${ex.instruction.fr}</div>
        <div class="match-container">
          <div class="match-column">
            <div class="match-column-title">🇬🇧 English</div>
            ${lefts}
          </div>
          <div class="match-column">
            <div class="match-column-title">🇫🇷 Français</div>
            ${rights}
          </div>
        </div>
      `;
    },

    selectLeft(idx) {
      if (ExerciseEngines._state.matchMatched && ExerciseEngines._state.matchMatched[idx]) return;
      // Clear previous left selection
      document.querySelectorAll('.match-chip[id^="match-left-"]').forEach(c => c.classList.remove('selected'));
      ExerciseEngines._state.matchLeft = idx;
      const chip = document.getElementById(`match-left-${idx}`);
      if (chip) chip.classList.add('selected');
    },

    selectRight(idx) {
      const leftIdx = ExerciseEngines._state.matchLeft;
      if (leftIdx === null || leftIdx === undefined) return;
      if (ExerciseEngines._state.matchMatched && ExerciseEngines._state.matchMatched[leftIdx]) return;

      const isCorrect = leftIdx === idx;
      const leftChip = document.getElementById(`match-left-${leftIdx}`);
      const rightChip = document.getElementById(`match-right-${idx}`);

      if (isCorrect) {
        if (leftChip) { leftChip.classList.remove('selected'); leftChip.classList.add('matched'); }
        if (rightChip) rightChip.classList.add('matched');
        if (!ExerciseEngines._state.matchMatched) ExerciseEngines._state.matchMatched = {};
        ExerciseEngines._state.matchMatched[leftIdx] = true;
        ExerciseEngines._state.matchCorrect = (ExerciseEngines._state.matchCorrect || 0) + 1;

        // Check if all matched
        if (ExerciseEngines._state.matchCorrect === ExerciseEngines._state.matchTotal) {
          ExerciseEngines._state.lastCorrect = true;
          ExerciseEngines._showResult(true, null);
          ExerciseEngines._showNextButton();
          const checkBtn = document.getElementById('check-btn');
          if (checkBtn) { checkBtn.disabled = true; checkBtn.style.display = 'none'; }
        }
      } else {
        if (rightChip) {
          rightChip.classList.add('wrong-match');
          setTimeout(() => rightChip.classList.remove('wrong-match'), 500);
        }
        if (leftChip) leftChip.classList.remove('selected');
      }
      ExerciseEngines._state.matchLeft = null;
    }
  },

  // ---- ORDER ----
  order: {
    render(ex, ls) {
      ExerciseEngines._state.orderUsed = [];
      ExerciseEngines._state.orderWords = ex.words;
      ExerciseEngines._state.orderAnswer = ex.answer;

      const chips = ex.words.map((w, i) => `
        <div class="word-chip" id="word-${i}" onclick="ExerciseEngines.order.addWord(${i}, '${w.replace(/'/g, "\\'")}')">${w}</div>
      `).join('');

      return `
        <div class="exercise-question">${ex.instruction.en}</div>
        <div class="exercise-question-fr">${ex.instruction.fr}</div>
        <div class="order-word-bank" id="word-bank">${chips}</div>
        <div class="order-sentence-area" id="sentence-area">
          <span class="placeholder-text" id="sentence-placeholder">Cliquez sur les mots pour former la phrase · Click words to build the sentence</span>
        </div>
        <div style="display:flex;gap:0.5rem;margin-bottom:0.5rem">
          <button class="btn btn-ghost btn-sm" onclick="ExerciseEngines.order.clearSentence()">🔄 Effacer · Clear</button>
        </div>
      `;
    },

    addWord(idx, word) {
      if (ExerciseEngines._state.orderUsed.includes(idx)) return;
      ExerciseEngines._state.orderUsed.push(idx);

      const chip = document.getElementById(`word-${idx}`);
      if (chip) chip.classList.add('used');

      const area = document.getElementById('sentence-area');
      const placeholder = document.getElementById('sentence-placeholder');
      if (placeholder) placeholder.remove();

      const sentChip = document.createElement('div');
      sentChip.className = 'word-chip in-sentence';
      sentChip.textContent = word;
      sentChip.dataset.idx = idx;
      sentChip.onclick = () => ExerciseEngines.order.removeWord(idx, sentChip);
      if (area) area.appendChild(sentChip);

      // Enable check if all words used
      const checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.disabled = false;
    },

    removeWord(idx, chip) {
      ExerciseEngines._state.orderUsed = ExerciseEngines._state.orderUsed.filter(i => i !== idx);
      const bankChip = document.getElementById(`word-${idx}`);
      if (bankChip) bankChip.classList.remove('used');
      chip.remove();

      const area = document.getElementById('sentence-area');
      if (area && !area.children.length) {
        const ph = document.createElement('span');
        ph.className = 'placeholder-text';
        ph.id = 'sentence-placeholder';
        ph.textContent = 'Cliquez sur les mots pour former la phrase · Click words to build the sentence';
        area.appendChild(ph);
      }

      const checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.disabled = ExerciseEngines._state.orderUsed.length === 0;
    },

    clearSentence() {
      const area = document.getElementById('sentence-area');
      if (!area) return;
      area.innerHTML = '<span class="placeholder-text" id="sentence-placeholder">Cliquez sur les mots pour former la phrase · Click words to build the sentence</span>';
      ExerciseEngines._state.orderUsed = [];
      document.querySelectorAll('.word-chip').forEach(c => c.classList.remove('used'));
      const checkBtn = document.getElementById('check-btn');
      if (checkBtn) checkBtn.disabled = true;
    },

    check() {
      const area = document.getElementById('sentence-area');
      if (!area) return;
      const chips = area.querySelectorAll('.word-chip');
      const sentence = Array.from(chips).map(c => c.textContent).join(' ');
      const isCorrect = sentence.toLowerCase() === ExerciseEngines._state.orderAnswer.toLowerCase();

      area.classList.add(isCorrect ? 'correct-order' : 'wrong-order');
      if (!isCorrect) {
        setTimeout(() => area.classList.remove('wrong-order'), 600);
      }

      ExerciseEngines._state.lastCorrect = isCorrect;
      ExerciseEngines._showResult(isCorrect, isCorrect ? null : `Réponse correcte : "${ExerciseEngines._state.orderAnswer}"`);
      ExerciseEngines._showNextButton();
      const checkBtn = document.getElementById('check-btn');
      if (checkBtn) { checkBtn.disabled = true; checkBtn.style.display = 'none'; }
    }
  },

  // ---- FLASHCARD ----
  flashcard: {
    render(ex, ls) {
      ExerciseEngines._state.flashcardViewed = new Set();
      ExerciseEngines._state.flashcardTotal = ex.cards.length;

      const cards = ex.cards.map((card, i) => `
        <div class="flashcard" id="flash-${i}" onclick="ExerciseEngines.flashcard.flip(${i})">
          <div class="flashcard-inner">
            <div class="flashcard-front">
              <div class="flashcard-word">${card.front}</div>
              <div class="flashcard-hint">Cliquez pour voir · Click to reveal</div>
            </div>
            <div class="flashcard-back">
              <div class="flashcard-translation">${card.back}</div>
              ${card.example ? `<div class="flashcard-example">"${card.example.en}"</div>` : ''}
            </div>
          </div>
        </div>
      `).join('');

      return `
        <div class="exercise-question">${ex.instruction ? ex.instruction.en : 'Click each card to reveal the translation'}</div>
        <div class="exercise-question-fr">${ex.instruction ? ex.instruction.fr : 'Cliquez sur chaque carte pour voir la traduction'}</div>
        <div class="flashcard-grid">${cards}</div>
        <p style="font-size:0.8125rem;color:var(--text-muted);margin-top:1rem;text-align:center">
          Retournez toutes les cartes pour continuer · Flip all cards to continue
        </p>
      `;
    },

    flip(idx) {
      const card = document.getElementById(`flash-${idx}`);
      if (!card) return;
      card.classList.toggle('flipped');

      if (card.classList.contains('flipped')) {
        ExerciseEngines._state.flashcardViewed.add(idx);
        // Speak the English word
        const wordEl = card.querySelector('.flashcard-word');
        if (wordEl) Speech.speak(wordEl.textContent);

        // If all flipped, enable check
        if (ExerciseEngines._state.flashcardViewed.size === ExerciseEngines._state.flashcardTotal) {
          const checkBtn = document.getElementById('check-btn');
          if (checkBtn) checkBtn.disabled = false;
        }
      }
    },

    check() {
      ExerciseEngines._state.lastCorrect = true;
      ExerciseEngines._showResult(true, null);
      ExerciseEngines._showNextButton();
      const checkBtn = document.getElementById('check-btn');
      if (checkBtn) { checkBtn.disabled = true; checkBtn.style.display = 'none'; }
    }
  },

  // ---- CHECK DISPATCHER ----
  check(type, id, isQuiz = false) {
    const engine = this[type];
    if (!engine || !engine.check) return;

    // Type-specific check
    switch (type) {
      case 'fill':
        const input = document.getElementById('fill-answer');
        if (input) {
          const ls = this._state.ls;
          const phase = this._state.phase;
          const dayData = LessonData.getDay(ls.level, ls.week, ls.day);
          const allEx = isQuiz ? dayData.quiz : dayData.exercises;
          const ex = allEx.find(e => e.id === id);
          if (ex) engine.check(ex.answer);
        }
        break;
      case 'order':
        engine.check();
        break;
      case 'flashcard':
        engine.check();
        break;
      case 'mcq':
        // MCQ handles its own click, check is a no-op here
        break;
    }

    if (isQuiz) this._updateQuizScore();
  },

  _updateQuizScore() {
    const ls = this._state.ls;
    if (ls) {
      ls.totalQuiz = (ls.totalQuiz || 0) + 1;
      if (this._state.lastCorrect) ls.correctQuiz = (ls.correctQuiz || 0) + 1;
    }
  },

  _showResult(isCorrect, customMessage) {
    const feedback = document.getElementById('exercise-feedback');
    if (!feedback) return;
    const msg = customMessage || (isCorrect
      ? 'Excellent ! Bonne réponse ! · Excellent! Correct answer!'
      : 'Pas tout à fait. · Not quite right.');
    feedback.innerHTML = `
      <div class="explanation-box ${isCorrect ? 'correct' : 'wrong'}">
        <span class="explanation-icon">${isCorrect ? '✅' : '❌'}</span>
        ${msg}
      </div>
    `;
    if (isCorrect) UI.showToast('✅ Bien joué ! · Well done!', 'success', 1500);
  },

  _showNextButton() {
    const nextBtn = document.getElementById('next-exercise-btn') || document.getElementById('next-quiz-btn');
    if (nextBtn) nextBtn.style.display = 'inline-flex';
  }
};

// =============================================
// LESSON CONTROLLER
// =============================================
const LessonController = {
  startExercises() {
    const app = document.getElementById('app');
    const ls = app._lessonState;
    if (!ls) return;
    ls.phase = 'exercises';
    ls.exerciseIndex = 0;
    ls.answered = false;
    Views._renderLessonPhase(app);
  },

  nextExercise() {
    const app = document.getElementById('app');
    const ls = app._lessonState;
    if (!ls) return;

    const { level, week, day, duration } = ls;
    const dayData = LessonData.getDay(level, week, day);
    const exercises = LessonData.getExercisesForDuration(dayData, duration);

    ls.exerciseIndex++;
    if (ls.exerciseIndex >= exercises.length) {
      // Move to quiz
      ls.phase = 'quiz';
      ls.quizIndex = 0;
      ls.totalQuiz = 0;
      ls.correctQuiz = 0;
    }
    Views._renderLessonPhase(app);
  },

  nextQuiz() {
    const app = document.getElementById('app');
    const ls = app._lessonState;
    if (!ls) return;

    // Update quiz score from last answer
    const wasCorrect = ExerciseEngines._state.lastCorrect;
    ls.totalQuiz = (ls.totalQuiz || 0) + 1;
    if (wasCorrect) ls.correctQuiz = (ls.correctQuiz || 0) + 1;

    const { level, week, day, duration } = ls;
    const dayData = LessonData.getDay(level, week, day);
    const quiz = LessonData.getQuizForDuration(dayData, duration);

    ls.quizIndex++;
    if (ls.quizIndex >= quiz.length) {
      // Complete lesson
      const score = ls.totalQuiz > 0 ? Math.round((ls.correctQuiz / ls.totalQuiz) * 100) : 100;
      State.completeLesson(week, day, score);
      ls.phase = 'complete';
      if (score >= 70) UI.launchConfetti();
    }
    Views._renderLessonPhase(app);
  }
};

// =============================================
// ONBOARDING CONTROLLER
// =============================================
const Onboarding = {
  selectedLevel: '',
  selectedDuration: 0,
  currentStep: 0,

  nextStep(step) {
    const dots = document.querySelectorAll('.step-dot');
    const steps = document.querySelectorAll('.onboarding-step');

    if (step === 0) {
      const name = document.getElementById('student-name').value.trim();
      if (!name || name.length < 2) return;
    }

    steps[step].classList.remove('active');
    dots[step].classList.remove('active');
    dots[step].classList.add('done');

    const next = step + 1;
    if (steps[next]) {
      steps[next].classList.add('active');
      dots[next].classList.add('active');
    }
    this.currentStep = next;
  },

  prevStep(step) {
    const dots = document.querySelectorAll('.step-dot');
    const steps = document.querySelectorAll('.onboarding-step');

    steps[step].classList.remove('active');
    dots[step - 1].classList.remove('done');
    dots[step - 1].classList.add('active');
    steps[step - 1].classList.add('active');
    this.currentStep = step - 1;
  },

  selectLevel(level) {
    this.selectedLevel = level;
    document.querySelectorAll('.level-card').forEach(c => c.classList.remove('selected'));
    const card = document.getElementById(`level-${level}`);
    if (card) {
      card.classList.add('selected');
      const check = card.querySelector('.level-card-check');
      if (check) check.textContent = '✓';
    }
    const btn = document.getElementById('step1-next');
    if (btn) btn.disabled = false;
  },

  selectDuration(min) {
    this.selectedDuration = min;
    document.querySelectorAll('.duration-card').forEach(c => c.classList.remove('selected'));
    const card = document.getElementById(`dur-${min}`);
    if (card) card.classList.add('selected');
    const btn = document.getElementById('step2-next');
    if (btn) btn.disabled = false;
  },

  finishOnboarding() {
    const name = document.getElementById('student-name');
    if (!name || !this.selectedLevel || !this.selectedDuration) return;

    State.data = State.defaults();
    State.data.studentName = name.value.trim();
    State.data.level = this.selectedLevel;
    State.data.duration = this.selectedDuration;
    State.data.startDate = new Date().toISOString();
    State.data.streak = 0;
    State.save();

    Router.navigate('dashboard');
  }
};

// =============================================
// DASHBOARD CONTROLLER
// =============================================
const Dashboard = {
  selectWeek(week) {
    State.data.currentWeek = week;
    State.save();

    document.querySelectorAll('.week-tab').forEach((t, i) => {
      t.classList.toggle('active', i + 1 === week);
    });

    const content = document.getElementById('week-content');
    if (content) content.innerHTML = Views.renderWeekGrid(week);
  }
};

// =============================================
// TEACHER CONTROLLER
// =============================================
const Teacher = {
  login() {
    const input = document.getElementById('teacher-pwd');
    if (!input) return;
    if (input.value === TEACHER_PASSWORD) {
      sessionStorage.setItem('teacher_auth', '1');
      Router.navigate('teacher');
    } else {
      const err = document.getElementById('login-error');
      if (err) err.style.display = 'block';
      input.value = '';
      input.style.borderColor = 'var(--error)';
      setTimeout(() => { if (input) input.style.borderColor = ''; }, 2000);
    }
  },

  logout() {
    sessionStorage.removeItem('teacher_auth');
    Router.navigate('dashboard');
  },

  resetProgress() {
    if (confirm('⚠️ Êtes-vous sûr de vouloir réinitialiser toute la progression ?\nThis action cannot be undone.')) {
      const name = State.data.studentName;
      const level = State.data.level;
      const duration = State.data.duration;
      State.reset();
      State.data = State.defaults();
      State.data.studentName = name;
      State.data.level = level;
      State.data.duration = duration;
      State.data.startDate = new Date().toISOString();
      State.save();
      UI.showToast('✅ Progression réinitialisée', 'success');
      Router.navigate('teacher');
    }
  }
};

// =============================================
// APP INIT
// =============================================
function init() {
  Speech.init();

  const state = State.load();

  // Wait 1.5s to display the splash screen before rendering the app
  setTimeout(() => {
    if (!State.isSetup()) {
      State.data = State.defaults();
      Router.navigate('onboarding');
    } else {
      Router.navigate('dashboard');
    }
  }, 1500);
}

// Start the app
window.addEventListener('DOMContentLoaded', init);
