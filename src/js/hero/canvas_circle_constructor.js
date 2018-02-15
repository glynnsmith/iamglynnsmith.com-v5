// canvas_circle_constructor.js

function Circle(x, y, dx, dy, radius, context) {
	let linGrad;

	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	// Decide context
	if (context === BGc1 || context === BGc2 || context === BGc3) {
		this.color = BGcolors[getRandomInt(0, BGcolors.length)];
	} else if (context == MGc) {
		this.color = MGcolors[getRandomInt(0, MGcolors.length)];
	} else if (context == FGc1 || context == FGc2 || context == FGc3) {
		this.color = FGcolors[getRandomInt(0, FGcolors.length)];
	}

	this.update = function() {
		// Create gradient
		linGrad = context.createLinearGradient(
			this.x - this.radius,
			this.y - this.radius,
			this.x - this.radius,
			this.y + this.radius
		);

		// Add colour stops to gradient
		linGrad.addColorStop(0, 'hsl(210, 7%, ' + (this.color + 5) + '%)');
		linGrad.addColorStop(0.5, 'hsl(210, 7%, ' + this.color + '%)');
		linGrad.addColorStop(1, 'hsl(210, 7%, ' + (this.color - 4) + '%)');

		// Create circle and fill with linGrad
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
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
		Math.floor((this.x += this.dx));
		Math.floor((this.y += this.dy));
	};
}
