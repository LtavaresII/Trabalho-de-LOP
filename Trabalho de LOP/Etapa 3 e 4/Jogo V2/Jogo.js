var w = 300;
var z = 300;
var nivel = 1;
var pontos = 0;
var vidas = 3;
var x = 100;
var y = 100;
function setup() {
  createCanvas(600, 600);
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
  ellipse( x, y, 40, 40);
  
   noStroke();
  fill( 250, 0, 0);
  rect( w, z, 40, 40);
  w = w - 2
  z = z - 2
  if(w < 0 || z < 0){
     w = 300
     z = 300
  }
  
    noStroke();
  fill(250,0,0);
  textSize(35)
text("Vidas: "+ vidas , 420, 120);
  fill(250, 0, 0 );
  textSize(35)
text("Pontos: " + pontos, 420, 180);
  fill(250, 0, 0 );
  textSize(35) 
text("Nivel: " + nivel, 420, 240);

 
}

