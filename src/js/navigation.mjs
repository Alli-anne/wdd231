const toggleButton = document.querySelector('.global-nav__toggle');
const menu = document.querySelector('.global-nav');
let isMenuOpen = false;

toggleButton.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  menu.style.maxHeight = isMenuOpen ? '500px' : '0'; // Set max-height high enough to fit content
  toggleButton.setAttribute('aria-expanded', isMenuOpen);

  // Toggle icons
  document.querySelector('.global-nav__toggle--closed').style.display = isMenuOpen ? 'none' : 'flex';
  document.querySelector('.global-nav__toggle--open').style.display = isMenuOpen ? 'flex' : 'none';
});