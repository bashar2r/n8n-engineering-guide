
document.addEventListener('DOMContentLoaded', function() {
  initSidebarNav();
  initQuiz();
  initSmoothScroll();
});

function initSidebarNav() {
  const sections = document.querySelectorAll('.section');
  const navDots = document.querySelectorAll('.nav-dot');
  if (!navDots.length) return;
  const observerOptions = { root: null, rootMargin: '-20% 0px -70% 0px', threshold: 0 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navDots.forEach(dot => {
          dot.classList.toggle('active', dot.getAttribute('href') === '#' + id);
        });
      }
    });
  }, observerOptions);
  sections.forEach(section => observer.observe(section));
  navDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(dot.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function initQuiz() {
  const quizContainers = document.querySelectorAll('.quiz-container');
  quizContainers.forEach(container => {
    const options = container.querySelectorAll('.quiz-option');
    let answered = false;
    options.forEach(option => {
      option.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        const isCorrect = this.dataset.correct === 'true';
        options.forEach(opt => {
          if (opt.dataset.correct === 'true') opt.classList.add('correct');
          else if (opt === this && !isCorrect) opt.classList.add('wrong');
          opt.style.cursor = 'default';
        });
        const feedback = document.createElement('div');
        feedback.style.marginTop = '16px'; feedback.style.padding = '12px 16px';
        feedback.style.borderRadius = '8px'; feedback.style.fontSize = '0.9rem'; feedback.style.fontWeight = '600';
        if (isCorrect) {
          feedback.style.background = 'rgba(16,185,129,0.1)'; feedback.style.color = 'var(--accent-green)';
          feedback.style.border = '1px solid rgba(16,185,129,0.3)'; feedback.innerHTML = '✅ Correct! Well done.';
        } else {
          feedback.style.background = 'rgba(239,68,68,0.1)'; feedback.style.color = 'var(--accent-red)';
          feedback.style.border = '1px solid rgba(239,68,68,0.3)'; feedback.innerHTML = '❌ Not quite. The correct answer is highlighted in green.';
        }
        container.appendChild(feedback);
        updateTotalScore();
      });
    });
  });
}

function updateTotalScore() {
  const quizSections = document.querySelectorAll('.quiz-section');
  quizSections.forEach(section => {
    const questions = section.querySelectorAll('.quiz-container');
    const totalQuestions = questions.length;
    let correctCount = 0; let allAnswered = true;
    questions.forEach(q => {
      const correctOption = q.querySelector('.quiz-option.correct');
      if (correctOption) {
        const userSelected = q.querySelector('.quiz-option.wrong');
        if (!userSelected) correctCount++;
      } else { allAnswered = false; }
    });
    if (allAnswered && totalQuestions > 0) {
      let resultDiv = section.querySelector('.quiz-result');
      if (!resultDiv) { resultDiv = document.createElement('div'); resultDiv.className = 'quiz-result'; section.appendChild(resultDiv); }
      const percentage = Math.round((correctCount / totalQuestions) * 100);
      resultDiv.innerHTML = `<div class="score">${correctCount}/${totalQuestions}</div><p>${percentage === 100 ? 'Perfect! You fully understood the lecture.' : 'Keep practicing! Review the sections above.'}</p>`;
      resultDiv.style.display = 'block';
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
