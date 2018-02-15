// canvas_spark_constructor.js

function Spark(x, y, dx, dy, radius, context) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.update = function() {
		const colorPrimary = 'hsl(350, 100%, 58%)';

		// Create circle and fill with linGrad
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		context.fillStyle = colorPrimary;
		context.fill();
		context.closePath();

		// Detect edges of canvas
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
