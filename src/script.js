const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
hamburgerMenu.addEventListener('click', (e) => {
  navLinks.classList.toggle('show');
  e.stopPropagation(); 
});

document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navLinks.classList.remove('show');
  }
});

const button = document.querySelector('.say-hi');
  button.addEventListener('click', () => {
    window.location.href = './contact.html'; 
  });
