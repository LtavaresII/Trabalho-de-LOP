var x = 100;
var y = 100;
function setup() {
  createCanvas(480, 480);
  background('#222222');
  frameRate(30); 
}

function draw() {
  
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
  
  clear();
  background('#222222');
    noStroke();
  fill( 250, 210, 0);
  ellipse( x, y, 30, 25);
  fill( 250, 0, 0);
  rect( 350, 300, 70, 70);
  stroke(0, 0, 250);
  strokeWeight(5.6);
  line(55, 440, 420, 440);
  strokeWeight(10);
  line(0, 480, 480, 480);
  strokeWeight(10);
  line(480, 0, 480, 480);
  strokeWeight(10);
  line(0, 480, 0, 0);
  strokeWeight(10);
  line(0, 0, 480, 0);
  strokeWeight(5.6);
  line(55, 40, 420, 40);
  strokeWeight(5.6);
  line(55, 40, 55, 400);
}
