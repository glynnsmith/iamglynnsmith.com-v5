// canvas_circle_constructor.js

function Circle(x, y, radius, context) {
	let linGrad;
	let that = this;

	function drawACircle() {
		// Create circle and fill with linGrad
		context.beginPath();
		context.arc(that.x, that.y, that.radius, 0, Math.PI * 2);
		buildGradient();
		context.fillStyle = linGrad;
		context.fill();
		context.closePath();
	}

WOOOOO!!!!!!

	this.x = x;
	this.y = y;
	this.radius = radius;

	// Decide context
	if (
		context === canvasContextArray[0] ||
		context === canvasContextArray[1] ||
		context === canvasContextArray[2]
	) {
		this.color = BGcolors[getRandomInt(0, BGcolors.length)];
	} else if (context === canvasContextArray[3]) {
		this.color = MGcolors[getRandomInt(0, MGcolors.length)];
	} else if (
		context === canvasContextArray[4] ||
		context === canvasContextArray[5] ||
		context === canvasContextArray[6]
	) {
		this.color = FGcolors[getRandomInt(0, FGcolors.length)];
	}

	let buildGradient = function() {
		// Create gradient
		linGrad = context.createLinearGradient(
			that.x - that.radius,
			that.y - that.radius,
			that.x - that.radius,
			that.y + that.radius
		);

		// Add colour stops to gradient
		linGrad.addColorStop(0, `hsl(210, 7%, ${that.color + 8}%)`);
		linGrad.addColorStop(0.5, `hsl(210, 7%, ${that.color}%)`);
		linGrad.addColorStop(1, `hsl(210, 7%, ${that.color - 5}%)`);
	};

	this.init = function() {
		buildGradient();
	};

	this.update = function() {
		drawACircle();
	};
}
