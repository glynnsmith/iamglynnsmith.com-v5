// nav.js

// Custom nav menu show/hide toggler
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navigation__menu');

hamburger.addEventListener(
	'click',
	function(event) {
		event.preventDefault();
		navMenu.classList.toggle('open');
		hamburger.classList.toggle('open');
	},
	false
);
