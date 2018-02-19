// canvas_circle_constructor.js

function Circle(x, y, dx, dy, radius, context) {
	let linGrad;
	let that = this;

	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

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
		linGrad.addColorStop(1, `hsl(210, 7%, ${that.color - 5}%)`);
	};

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

	this.init = function() {
		buildGradient();
	};

	this.update = function() {
		// Create circle and fill with linGrad
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		buildGradient();
		context.fillStyle = linGrad;
		context.fill();
		context.closePath();

		// Detect edges of canvas and bounce upon colliding with edges
		if (this.x + this.radius > w || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.radius > h || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		// Movement
		this.x += this.dx;
		this.y += this.dy;
	};
}
