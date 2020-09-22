let points = [];

let inside = 0;
let total = 0;

let htmlDiv;
let recordDiv;
let inputElement;
let resetButton;

let record = 0;
let updateRate = 1000;

let WIDTH = 300;
let HEIGHT = 300;


function setup() {
	createCanvas(WIDTH, HEIGHT);
	background(153);
	circle(WIDTH / 2, HEIGHT / 2, WIDTH);
	htmlDiv = createDiv();
	recordDiv = createDiv();
	inputElement = createInput(100);
	inputElement.input(() => {
		updateRate = int(inputElement.value());
	});
	resetButton = createButton("Reset");
	resetButton.mousePressed(() => {
		createCanvas(WIDTH, HEIGHT);
		background(153);
		circle(WIDTH / 2, HEIGHT / 2, WIDTH);

		updateRate = 1000;
		record = 0;
		inside = 0;
		total = 0;

		inputElement.value(updateRate);
	})

	frameRate(24);
}


function draw() {
	for (var i = 0; i < updateRate; i++) {
		var x = random(WIDTH);
		var y = random(HEIGHT);

		stroke(255, 255, 255);
		strokeWeight(1);

		total++;
		if (intersects(x, y)) {
			stroke(100, 255, 50);
			inside++;
		} else {
			stroke(255, 100, 50);
		}

		point(x, y);
	}

	var pie = Math.abs(4.0 * inside / total);
	htmlDiv.html("PI: " + pie);
	

    let recordDiff = Math.abs(Math.PI - record);
    let diff = Math.abs(Math.PI - pie);
    if (diff < recordDiff) {
		recordDiff = diff;
		record = pie;
		recordDiv.html("Record: " + record);
    }
} 

function intersects(x, y) {
	var dx = x - WIDTH / 2;
	var dy = y - HEIGHT / 2;
	var radius = WIDTH /2;
	if ((dx * dx) + (dy * dy) < (radius * radius)) return true;
	return false;
}