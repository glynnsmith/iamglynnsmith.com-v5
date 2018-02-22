// canvas_spark_constructor.js

function Spark(x, y, radius, context) {
	this.x = x;
	this.y = y;
	this.radius = radius;

	this.update = function() {
		const colorPrimary = 'hsl(350, 100%, 58%)';

		// Create circle and fill with linGrad
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		context.fillStyle = colorPrimary;
		context.fill();
		context.closePath();
	};
}
