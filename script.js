// script.js

// Theme toggle button
const themeButton = document.getElementById('theme-button');
const body = document.body;

// Check for saved user preference on load
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    body.classList.add(currentTheme);
}

// Toggle theme and save user preference
themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    let theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
