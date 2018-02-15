// canvas_controller.js

const BGcanvas01 = document.getElementById('hero__canvas--bg-01'),
	BGcanvas02 = document.getElementById('hero__canvas--bg-02'),
	BGcanvas03 = document.getElementById('hero__canvas--bg-03'),
	MGcanvas = document.getElementById('hero__canvas--mg'),
	FGcanvas01 = document.getElementById('hero__canvas--fg-01'),
	FGcanvas02 = document.getElementById('hero__canvas--fg-02'),
	FGcanvas03 = document.getElementById('hero__canvas--fg-03');

const d = document;

let w = window.innerWidth || d.documentElement.clientWidth || d.getElementsByTagName('body')[0].clientWidth;

let h = window.innerHeight || d.documentElement.clientHeight || d.getElementsByTagName('body')[0].clientHeight;

let wCached = w; // Used to check if window = resized
let hCached = h; // Used to check if window = resized

// Values for generating BG spheres (size range, quantity, color ranges)
let BGsizeMin;
let BGsizeMax;
let BGamount;
const BGcolorStart = 86,
	BGcolorAmount = 4,
	BGcolorStep = 1;

// Values for generating FG spheres (size range, quantity, color ranges)
let FGsizeMin;
let FGsizeMax;
let FGamount;
const FGcolorStart = 90,
	FGcolorAmount = 5,
	FGcolorStep = 1;

// TEMP VALUES FOR DEBUGGING
let MGsizeMin;
let MGsizeMax;
let MGamount;

// Initial speeds
let speedHandler = {
	speedBase: 1,
	speedMultiplier: 1
};

const BGc1 = BGcanvas01.getContext('2d');
const BGc2 = BGcanvas02.getContext('2d');
const BGc3 = BGcanvas03.getContext('2d');
const MGc = MGcanvas.getContext('2d');
const FGc1 = FGcanvas01.getContext('2d');
const FGc2 = FGcanvas02.getContext('2d');
const FGc3 = FGcanvas03.getContext('2d');

BGcanvas01.width = w;
BGcanvas01.height = h;
BGcanvas02.width = w;
BGcanvas02.height = h;
BGcanvas03.width = w;
BGcanvas03.height = h;
MGcanvas.width = w;
MGcanvas.height = h;
FGcanvas01.width = w;
FGcanvas01.height = h;
FGcanvas02.width = w;
FGcanvas02.height = h;
FGcanvas03.width = w;
FGcanvas03.height = h;

// ================
// HELPER FUNCTIONS
// ================

// Generates a random integer between two values
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

// Makes sure getRandomInt isn't '0'
function getRandomIntExclude(min, max) {
	let generatedValue = getRandomInt(min, max);

	if (generatedValue === 0) {
		let y = getRandomInt(1, 2);

		if (y === 1) {
			generatedValue = generatedValue - getRandomInt(1, max);
		} else if (y === 2) {
			generatedValue = generatedValue + getRandomInt(1, max);
		}
	}
	return generatedValue;
}

// Waits for something to stop updating before applying values
function debounce(func, wait, immediate) {
	let timeout;
	return function() {
		let context = this,
			args = arguments;
		let later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

// Watches browser dimensions and does some kung fu to keep appropriate amount of spheres on screen and/or moving
const amountCounter = function() {
	// Figures out which dimension is largest, and uses that (landscape or portrait)
	const orientation = function() {
		if (w < h) {
			return w;
		} else {
			return h;
		}
	};

	if (orientation() < 560) {
		speedHandler.speedBase = 0;

		BGsizeMin = orientation() / 9;
		BGsizeMax = orientation() / 5;
		BGamount = orientation() / 50;

		MGsizeMin = 0.5;
		MGsizeMax = 2;
		MGamount = 48;

		FGsizeMin = 1;
		FGsizeMax = 25;
		FGamount = orientation() / 12;
	} else if (orientation() < 1000) {
		speedHandler.speedBase = 1 * speedHandler.speedMultiplier;

		BGsizeMin = orientation() / 12;
		BGsizeMax = orientation() / 6;
		BGamount = orientation() / 70;

		MGsizeMin = 1;
		MGsizeMax = 2;
		MGamount = 22;

		FGsizeMin = 2;
		FGsizeMax = 32;
		FGamount = orientation() / 16;
	} else if (orientation() > 1000) {
		speedHandler.speedBase = 1 * speedHandler.speedMultiplier;

		BGsizeMin = orientation() / 16;
		BGsizeMax = orientation() / 5;
		BGamount = orientation() / 70;

		MGsizeMin = 1;
		MGsizeMax = 3;
		MGamount = 26;

		FGsizeMin = 2;
		FGsizeMax = 44;
		FGamount = orientation() / 13;
	} else {
		speedHandler.speedBase = 1 * speedHandler.speedMultiplier;

		BGsizeMin = orientation() / 12;
		BGsizeMax = orientation() / 5;
		BGamount = orientation() / 40;

		MGsizeMin = 1;
		MGsizeMax = 3;
		MGamount = 28;

		FGsizeMin = 2;
		FGsizeMax = 44;
		FGamount = orientation() / 20;
	}
};

// Let's generate some colours!
const BGcolors = [];
const FGcolors = [];

let generateCircle = function(setName) {
	let x, y, dx, dy, radius;

	if (setName === 'BG') {
		for (let i = 0; i < BGcolorAmount; i++) {
			BGcolors.push(BGcolorStart - i * BGcolorStep);
		}
		for (let j = 0; j < BGamount; j++) {
			radius = getRandomInt(BGsizeMin, BGsizeMax);
			x = getRandomInt(0 + radius * 1.1, w - radius * 1.1);
			y = getRandomInt(0 + radius * 1.1, h - radius * 1.1);
			dx = getRandomIntExclude(-25, 25) * (speedHandler.speedBase / radius) * speedHandler.speedMultiplier;
			dy = getRandomIntExclude(-25, 25) * (speedHandler.speedBase / radius) * speedHandler.speedMultiplier;

			if (j < BGamount / 3) {
				BGcirclesArray.push(new Circle(x, y, dx, dy, radius, BGc1));
			} else if (j < BGamount / 3 * 2) {
				BGcirclesArray.push(new Circle(x, y, dx, dy, radius, BGc2));
			} else {
				BGcirclesArray.push(new Circle(x, y, dx, dy, radius, BGc3));
			}
		}
	} else if (setName === 'MG') {
		for (let l = 0; l < MGamount; l++) {
			radius = getRandomInt(MGsizeMin, MGsizeMax);
			x = getRandomInt(0 + radius * 1.1, w - radius * 1.1);
			y = getRandomInt(0 + radius * 1.1, h - radius * 1.1);
			dx = getRandomIntExclude(-6.5, 6.5) * (speedHandler.speedBase / radius) * speedHandler.speedMultiplier;
			dy = getRandomIntExclude(-6.5, 6.5) * (speedHandler.speedBase / radius) * speedHandler.speedMultiplier;

			MGcirclesArray.push(new Spark(x, y, dx, dy, radius, MGc));
		}
	} else if (setName === 'FG') {
		for (let m = 0; m < FGcolorAmount; m++) {
			FGcolors.push(FGcolorStart - m * FGcolorStep);
		}
		for (let n = 0; n < FGamount; n++) {
			radius = getRandomInt(FGsizeMin, FGsizeMax);
			x = getRandomInt(0 + radius * 1.1, w - radius * 1.1);
			y = getRandomInt(0 + radius * 1.1, h - radius * 1.1);
			dx = getRandomIntExclude(-10, 10) * (speedHandler.speedBase / radius) * speedHandler.speedMultiplier;
			dy = getRandomIntExclude(-10, 10) * (speedHandler.speedBase / radius) * speedHandler.speedMultiplier;

			if (n < FGamount / 3) {
				FGcirclesArray.push(new Circle(x, y, dx, dy, radius, FGc1));
			} else if (n < FGamount / 3 * 2) {
				FGcirclesArray.push(new Circle(x, y, dx, dy, radius, FGc2));
			} else {
				FGcirclesArray.push(new Circle(x, y, dx, dy, radius, FGc3));
			}
		}
	}
};

// Let's build some circles!!!
let BGcirclesArray = [];
let MGcirclesArray = [];
let FGcirclesArray = [];

const init = function() {
	BGcanvas01.width = w;
	BGcanvas01.height = h;
	BGcanvas02.width = w;
	BGcanvas02.height = h;
	BGcanvas03.width = w;
	BGcanvas03.height = h;

	MGcanvas.width = w;
	MGcanvas.height = h;

	FGcanvas01.width = w;
	FGcanvas01.height = h;
	FGcanvas02.width = w;
	FGcanvas02.height = h;
	FGcanvas03.width = w;
	FGcanvas03.height = h;

	amountCounter();
	BGcirclesArray = [];
	generateCircle('BG');

	MGcirclesArray = [];
	generateCircle('MG');

	FGcirclesArray = [];
	generateCircle('FG');

	let initCompleted = true;
};

// ANIMATION LOOP
const animate = function() {
	requestAnimationFrame(animate);

	BGc1.clearRect(0, 0, w, h);
	BGc2.clearRect(0, 0, w, h);
	BGc3.clearRect(0, 0, w, h);
	MGc.clearRect(0, 0, w, h);
	FGc1.clearRect(0, 0, w, h);
	FGc2.clearRect(0, 0, w, h);
	FGc3.clearRect(0, 0, w, h);

	for (let i = 0, iMax = BGcirclesArray.length; i < iMax; i++) {
		BGcirclesArray[i].update();
	}

	for (let j = 0, jMax = MGcirclesArray.length; j < jMax; j++) {
		MGcirclesArray[j].update();
	}

	for (let k = 0, kMax = FGcirclesArray.length; k < kMax; k++) {
		FGcirclesArray[k].update();
	}
};

// Resize canvas on browser resize
const resizeResetOut = function() {
	w = window.innerWidth;
	h = window.innerHeight;

	BGcanvas01.width = w;
	BGcanvas01.height = h;
	BGcanvas02.width = w;
	BGcanvas02.height = h;
	BGcanvas03.width = w;
	BGcanvas03.height = h;
	MGcanvas.width = w;
	MGcanvas.height = h;
	FGcanvas01.width = w;
	FGcanvas01.height = h;
	FGcanvas02.width = w;
	FGcanvas02.height = h;
	FGcanvas03.width = w;
	FGcanvas03.height = h;
};

// Respawn circles on browser resize
const resizeResetIn = debounce(function() {
	if (w !== wCached || h !== hCached) {
		init();
	}
}, 1000);

init();
animate();

window.addEventListener('resize', resizeResetIn);
window.addEventListener('resize', resizeResetOut);
