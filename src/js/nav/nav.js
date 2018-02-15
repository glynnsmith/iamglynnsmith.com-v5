// nav.js

// Custom nav menu show/hide toggler
var openButton = document.getElementById('navMenuOpen');
var closeButton = document.getElementById('navMenuClose');
var navMenu = document.getElementById('navMenu');

openButton.addEventListener(
  'click',
  function(event) {
    event.preventDefault();
    if (navMenu.classList.contains('navigation__menu--open')) {
      navMenu.classList.remove('navigation__menu--open');
    } else {
      navMenu.classList.add('navigation__menu--open');
    }
  },
  false
);

closeButton.addEventListener(
  'click',
  function(event) {
    event.preventDefault();
    if (!navMenu.classList.contains('navigation__menu--open')) {
      navMenu.classList.add('navigation__menu--open');
    } else {
      navMenu.classList.remove('navigation__menu--open');
    }
  },
  false
);
