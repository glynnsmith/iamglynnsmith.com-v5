// canvas_controller.js

// =================
// BUILDING CANVASES
// =================
const canvasAmount = 7;

function getElemID(id) {
	return document.getElementById(id);
}

function clearCanvas() {
	for (let a = 0; a < canvasAmount; a++) {
		canvasContextArray[a].clearRect(0, 0, w, h);
	}
}

function buildCanvases() {
	for (let i = 1; i <= canvasAmount; i++) {
		let j = getElemID(`hero__canvas-layer--0${i}`);
		canvasIDArray.push(j);

		let k = j.getContext('2d');
		canvasContextArray.push(k);
	}
}

function setCanvasSize() {
	w = window.innerWidth;
	h = window.innerHeight;

	canvasIDArray.map(obj => {
		obj.width = w;
		obj.height = h;
		return obj;
	});
}

// ==============
// UTIL FUNCTIONS
// ==============

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
		let testValue = getRandomInt(1, 2);
		if (testValue === 1) {
			generatedValue = generatedValue - getRandomInt(1, max);
		} else if (testValue === 2) {
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

// Finds which window dimension is largest, and uses that
function orientation() {
	if (w < h) {
		return w;
	} else {
		return h;
	}
}

// Watches browser dimensions and keeps appropriate amount of spheres on screen and/or moving
function amountCounter() {
	if (orientation() < 560) {
		speedHandler.speedBase = 0;

		bg.bgSizeMin = orientation() / 9;
		bg.bgSizeMax = orientation() / 5;
		bg.bgAmount = orientation() / 40;
		mg.mgAmount = 32;

		fg.fgSizeMin = 3;
		fg.fgSizeMax = 35;
		fg.fgAmount = orientation() / 12;
	} else if (orientation() < 1000) {
		speedHandler.speedBase = 1 * speedHandler.speedMultiplier;

		bg.bgSizeMin = orientation() / 12;
		bg.bgSizeMax = orientation() / 6;
		bg.bgAmount = orientation() / 70;
		mg.mgAmount = 50;

		fg.fgSizeMin = 2;
		fg.fgSizeMax = 60;
		fg.fgAmount = orientation() / 24;
	} else {
		speedHandler.speedBase = 1 * speedHandler.speedMultiplier;

		bg.bgSizeMin = 65;
		bg.bgSizeMax = 200;
		bg.bgAmount = 20;
		mg.mgAmount = 100;

		fg.fgSizeMin = 2;
		fg.fgSizeMax = 64;
		fg.fgAmount = 45;
	}
}

function generateCircle(setName) {
	let x, y, radius;

	if (setName === 'BG') {
		for (let i = 0; i < bg.bgColorAmount; i++) {
			bg.bgColors.push(bg.bgColorStart - i * bg.bgColorStep);
		}
		for (let j = 0; j < bg.bgAmount; j++) {
			radius = getRandomInt(bg.bgSizeMin, bg.bgSizeMax);
			x = getRandomInt(0 + radius * 1.1, w - radius * 1.1);
			y = getRandomInt(0, h);

			if (j < bg.bgAmount / 3) {
				bg.bgCirclesArray.push(new Circle(x, y, radius, canvasContextArray[0]));
			} else if (j < bg.bgAmount / 3 * 2) {
				bg.bgCirclesArray.push(new Circle(x, y, radius, canvasContextArray[1]));
			} else {
				bg.bgCirclesArray.push(new Circle(x, y, radius, canvasContextArray[2]));
			}
		}
	} else if (setName === 'MG') {
		for (let l = 0; l < mg.mgAmount; l++) {
			radius = getRandomInt(mg.mgSizeMin, mg.mgSizeMax);
			x = getRandomInt(0 + radius * 1.1, w - radius * 1.1);
			y = getRandomInt(0 + radius * 1.1, h - radius * 1.1);

			mg.mgCirclesArray.push(new Spark(x, y, radius, canvasContextArray[3]));
		}
	} else if (setName === 'FG') {
		for (let m = 0; m < fg.fgColorAmount; m++) {
			fg.fgColors.push(fg.fgColorStart - m * fg.fgColorStep);
		}
		for (let n = 0; n < fg.fgAmount; n++) {
			radius = getRandomInt(fg.fgSizeMin, fg.fgSizeMax);
			x = getRandomInt(0 + radius * 1.1, w - radius * 1.1);
			y = getRandomInt(0, h);

			if (n < fg.fgAmount / 2) {
				fg.fgCirclesArray.push(new Circle(x, y, radius, canvasContextArray[4]));
			} else if (n < fg.fgAmount / 2 * 2) {
				fg.fgCirclesArray.push(new Circle(x, y, radius, canvasContextArray[5]));
			} else {
				fg.fgCirclesArray.push(new Circle(x, y, radius, canvasContextArray[6]));
			}
		}
	}
}

let w =
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.getElementsByTagName('body')[0].clientWidth;

let h =
	window.innerHeight ||
	document.documentElement.clientHeight ||
	document.getElementsByTagName('body')[0].clientHeight;

let wCached = w; // Used to check if window = resized
let hCached = h; // Used to check if window = resized

// Values for generating BG spheres (size range, quantity, color ranges)
let bg = {
	bgSizeMin: 1,
	bgSizeMax: 1,
	bgAmount: 1,
	bgColorStart: 82,
	bgColorAmount: 7,
	bgColorStep: 2,
	bgColors: [],
	bgCirclesArray: []
};

let mg = {
	mgSizeMin: 1,
	mgSizeMax: 3,
	mgAmount: 30
};

// Values for generating FG spheres (size range, quantity, color ranges)
let fg = {
	fgSizeMin: 1,
	fgSizeMax: 1,
	fgAmount: 1,
	fgColorStart: 90,
	fgColorAmount: 7,
	fgColorStep: 3,
	fgColors: [],
	fgCirclesArray: []
};

// Initial speeds
let speedHandler = {
	speedBase: 1,
	speedMultiplier: 1
};

let canvasIDArray = [];
let canvasContextArray = [];

function draw() {
	clearCanvas();

	for (let i = 0, iMax = bg.bgCirclesArray.length; i < iMax; i++) {
		bg.bgCirclesArray[i].update();
	}
	for (let j = 0, jMax = mg.mgCirclesArray.length; j < jMax; j++) {
		mg.mgCirclesArray[j].update();
	}
	for (let k = 0, kMax = fg.fgCirclesArray.length; k < kMax; k++) {
		fg.fgCirclesArray[k].update();
	}
}

function init() {
	bg.bgCirclesArray = [];
	mg.mgCirclesArray = [];
	fg.fgCirclesArray = [];

	setCanvasSize();

	// Clear all canvases
	clearCanvas();

	// Figure out orientation + circle amount
	amountCounter();

	generateCircle('BG');
	generateCircle('MG');
	generateCircle('FG');

	draw();
}

// Resize canvas on browser resize
function resizeResetOut() {
	setCanvasSize();
}

// Respawn circles on browser resize
const resizeResetIn = debounce(function() {
	if (w !== wCached || h !== hCached) {
		init();
	}
}, 1000);

buildCanvases();
init();

window.addEventListener('resize', resizeResetIn);
window.addEventListener('resize', resizeResetOut);
