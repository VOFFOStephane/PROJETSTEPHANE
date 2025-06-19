// Sélection des éléments
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

// Toggle menu mobile
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // affiche ou masque les liens
  burger.classList.toggle('active');   // change l’icône hamburger/croix
});