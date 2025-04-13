const themeButton = document.getElementById('theme-toggle');

// Kolla om dark mode finns sparat sedan tidigare
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  themeButton.textContent = 'Byt till light mode';
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');

  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  themeButton.textContent = isDark
    ? 'Byt till light mode'
    : 'Byt till dark mode';
});