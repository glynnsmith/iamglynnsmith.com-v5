// to_top.js

var docTop = document.documentElement.scrollTop;
var button = document.getElementById('button-top');
var trigger = 220;
var pauseDuration = 250;

var runOnScroll = function() {
	docTop = document.documentElement.scrollTop;
	if (docTop > trigger) {
		button.classList.add('show');
	}

	if (docTop <= 0) {
		button.classList.remove('show');
	}
};

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this,
			args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
}

// Wait for <time> after scrolling stops to check scroll position
var myEfficientFn = debounce(function() {
	runOnScroll();
}, pauseDuration);

window.addEventListener('scroll', myEfficientFn);

// Element to move, time in ms to animate
function scrollTo(element, duration) {
	var e = document.documentElement;
	if (e.scrollTop === 0) {
		var t = e.scrollTop;
		++e.scrollTop;
		e = t + 1 === e.scrollTop-- ? e : document.body;
	}
	scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
	if (duration <= 0) return;
	if (typeof from === 'object') from = from.offsetTop;
	if (typeof to === 'object') to = to.offsetTop;

	scrollToX(element, from, to, 0, 1 / duration, 10, easeInOutQuart);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
	if (t01 < 0 || t01 > 1 || speed <= 0) {
		element.scrollTop = xTo;
		return;
	}
	element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
	t01 += speed * step;

	setTimeout(function() {
		scrollToX(element, xFrom, xTo, t01, speed, step, motion);
	}, step);
}

function easeInOutQuart(t) {
	t /= 0.5;
	if (t < 1) return 0.5 * t * t * t * t;
	t -= 2;
	return -(t * t * t * t - 2) / 2;
}

button.onclick = function(event) {
	scrollTo(0, 800);
	event.preventDefault();
};
