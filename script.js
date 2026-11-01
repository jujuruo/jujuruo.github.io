const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const theme = localStorage.getItem('theme') || 'light';

function setTheme(value) {
  root.dataset.theme = value;
  toggle.setAttribute('aria-label', value === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  localStorage.setItem('theme', value);
}

setTheme(theme);
document.getElementById('year').textContent = new Date().getFullYear();
toggle.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));
