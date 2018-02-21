// canvas_controller.js

// =================
// BUILDING CANVASES
// =================
const canvasAmount = 7;

function getElemID(id) {
	return document.getElementById(id);
}

function clearCanvas() {
	for (let a = 0; a < canvasIDArray.length; a++) {
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

// Watches browser dimensions and keeps appropriate amount of spheres on screen and/or moving
function amountCounter() {
	// Finds which window dimension is largest, and uses that
	function orientation() {
		if (w < h) {
			return w;
		} else {
			return h;
		}
	}

	orientation();

	switch (orientation) {
		case 'orientation() < 560':
			speedHandler.speedBase = 0;

			BGsizeMin = orientation() / 9;
			BGsizeMax = orientation() / 5;
			BGamount = orientation() / 50;

			MGsizeMin = 0.5;
			MGsizeMax = 2;
			MGamount = 16;

			FGsizeMin = 1;
			FGsizeMax = 25;
			FGamount = orientation() / 12;
			break;
		case 'orientation() < 1000':
			speedHandler.speedBase = 1 * speedHandler.speedMultiplier;

			BGsizeMin = orientation() / 12;
			BGsizeMax = orientation() / 6;
			BGamount = orientation() / 70;

			MGsizeMin = 1;
			MGsizeMax = 2;
			MGamount = 50;

			FGsizeMin = 2;
			FGsizeMax = 40;
			FGamount = orientation() / 16;
			break;
		default:
			speedHandler.speedBase = 1 * speedHandler.speedMultiplier;
			BGsizeMin = 65;
			BGsizeMax = 200;
			BGamount = 20;

			MGsizeMin = 1;
			MGsizeMax = 3;
			MGamount = 60;

			FGsizeMin = 2;
			FGsizeMax = 90;
			FGamount = 27;
			break;
	}
}

function generateCircle(setName) {
	let x, y, dx, dy, radius;

	if (setName === 'BG') {
		for (let i = 0; i < BGcolorAmount; i++) {
			BGcolors.push(BGcolorStart - i * BGcolorStep);
		}
		for (let j = 0; j < BGamount; j++) {
			radius = getRandomInt(BGsizeMin, BGsizeMax);
			x = getRandomInt(0 + radius, w - radius);
			y = getRandomInt(0 + radius, h - radius);
			dx =
				getRandomIntExclude(-25, 25) *
				(speedHandler.speedBase / radius) *
				speedHandler.speedMultiplier;
			dy =
				getRandomIntExclude(-25, 25) *
				(speedHandler.speedBase / radius) *
				speedHandler.speedMultiplier;

			if (j < BGamount / 3) {
				BGcirclesArray.push(
					new Circle(x, y, dx, dy, radius, canvasContextArray[0])
				);
			} else if (j < BGamount / 3 * 2) {
				BGcirclesArray.push(
					new Circle(x, y, dx, dy, radius, canvasContextArray[1])
				);
			} else {
				BGcirclesArray.push(
					new Circle(x, y, dx, dy, radius, canvasContextArray[2])
				);
			}
		}
	} else if (setName === 'MG') {
		for (let l = 0; l < MGamount; l++) {
			radius = getRandomInt(MGsizeMin, MGsizeMax);
			x = getRandomInt(0 + radius * 1.1, w - radius * 1.1);
			y = getRandomInt(0 + radius * 1.1, h - radius * 1.1);
			dx = Math.floor(
				getRandomIntExclude(-6.5, 6.5) *
					(speedHandler.speedBase / radius) *
					speedHandler.speedMultiplier
			);
			dy = Math.floor(
				getRandomIntExclude(-6.5, 6.5) *
					(speedHandler.speedBase / radius) *
					speedHandler.speedMultiplier
			);

			MGcirclesArray.push(
				new Spark(x, y, dx, dy, radius, canvasContextArray[3])
			);
		}
	} else if (setName === 'FG') {
		for (let m = 0; m < FGcolorAmount; m++) {
			FGcolors.push(FGcolorStart - m * FGcolorStep);
		}
		for (let n = 0; n < FGamount; n++) {
			radius = getRandomInt(FGsizeMin, FGsizeMax);
			x = getRandomInt(0, w);
			y = getRandomInt(0, h);
			dx =
				getRandomIntExclude(-20, 20) *
				(speedHandler.speedBase / radius) *
				speedHandler.speedMultiplier;
			dy =
				getRandomIntExclude(-20, 20) *
				(speedHandler.speedBase / radius) *
				speedHandler.speedMultiplier;

			if (n < FGamount / 2) {
				FGcirclesArray.push(
					new Circle(x, y, dx, dy, radius, canvasContextArray[4])
				);
			} else if (n < FGamount / 2 * 2) {
				FGcirclesArray.push(
					new Circle(x, y, dx, dy, radius, canvasContextArray[5])
				);
			} else {
				FGcirclesArray.push(
					new Circle(x, y, dx, dy, radius, canvasContextArray[6])
				);
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
let BGsizeMin;
let BGsizeMax;
let BGamount;
let BGcolorStart = 86;
let BGcolorAmount = 8;
let BGcolorStep = 1;

let MGsizeMin;
let MGsizeMax;
let MGamount;

// Values for generating FG spheres (size range, quantity, color ranges)
let FGsizeMin;
let FGsizeMax;
let FGamount;
let FGcolorStart = 92;
let FGcolorAmount = 5;
let FGcolorStep = 3;

// Initial speeds
let speedHandler = {
	speedBase: 1,
	speedMultiplier: 1
};

let canvasIDArray = [];
let canvasContextArray = [];

let BGcolors = [];
let MGcolors = [];
let FGcolors = [];

let BGcirclesArray = [];
let MGcirclesArray = [];
let FGcirclesArray = [];

// Draws all content to all canvases
function draw() {
	// requestAnimationFrame(draw);

	// Clear all canvases
	clearCanvas();

	// Redraw next frame on all canvases
	for (let i = 0, iMax = BGcirclesArray.length; i < iMax; i++) {
		BGcirclesArray[i].update();
	}

	for (let j = 0, jMax = MGcirclesArray.length; j < jMax; j++) {
		MGcirclesArray[j].update();
	}

	for (let k = 0, kMax = FGcirclesArray.length; k < kMax; k++) {
		FGcirclesArray[k].update();
	}
}

function init() {
	BGcirclesArray = [];
	MGcirclesArray = [];
	FGcirclesArray = [];

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
