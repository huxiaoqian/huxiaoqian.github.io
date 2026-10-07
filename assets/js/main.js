const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');

themeButton?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});

const year = document.querySelector('#current-year');
if (year) year.textContent = new Date().getFullYear();

const navigationLinks = document.querySelectorAll('a[href^="#"]');
navigationLinks.forEach((link) => {
  link.addEventListener('click', () => link.blur());
});
