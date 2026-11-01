const root = document.documentElement;
const languageButton = document.getElementById('language-button');
const themeButton = document.getElementById('theme-button');
const savedLanguage = localStorage.getItem('language') || 'en';
const savedTheme = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function setLanguage(language) {
  root.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en][data-zh]').forEach(el => { el.textContent = el.dataset[language]; });
  languageButton.textContent = language === 'en' ? '中文' : 'EN';
  languageButton.setAttribute('aria-label', language === 'en' ? 'Switch to Chinese' : 'Switch to English');
  localStorage.setItem('language', language);
}

function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
  localStorage.setItem('theme', theme);
}

setLanguage(savedLanguage);
setTheme(savedTheme);
document.getElementById('year').textContent = new Date().getFullYear();
languageButton.addEventListener('click', () => setLanguage(root.lang === 'en' ? 'zh' : 'en'));
themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));
