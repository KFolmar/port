(() => {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('mode-toggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(document.querySelectorAll('section'));
  const THEME_KEY = 'kf-portfolio-theme';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    localStorage.setItem(THEME_KEY, theme);
  };

  const initTheme = () => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  };

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const target = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', target === id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, { rootMargin: '-30% 0px -55% 0px', threshold: 0.3 });

  sections.forEach((section) => observer.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href').replace('#', '');
      setActiveLink(targetId);
    });
  });

  initTheme();
})();
