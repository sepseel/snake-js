	
function setup() {
  // runs once on startup
  createCanvas(600, 400);
  s = new Snake(20);
  a = new Apple(70, 70);
  frameRate(10);
}

function draw() {
  // repeats every frame
  background(51);
  
  a.draw();
  s.update();
  s.draw();
  s.death();
  
  if (s.x == a.x-10 && s.y == a.y-10) {
  	s.grow();
  	a.update();
  }
}

function keyPressed() {
	if (keyCode === UP_ARROW && s.xvel != 1) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW && s.xvel != -1) {
		s.dir(0, 1);
	} else if (keyCode === LEFT_ARROW && s.yvel != 1) {
		s.dir(-1, 0);
	} else if (keyCode === RIGHT_ARROW && s.yvel != -1) {
		s.dir(1, 0);
	}
}
