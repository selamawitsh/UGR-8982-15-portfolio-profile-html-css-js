const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const button = document.querySelector('.say-hi');
  button.addEventListener('click', () => {
    window.location.href = './contact.html'; 
  });
