var w = 300;
var z = 300;
var nivel = 1;
var pontos = 0;
var vidas = 3;
var x = 100;
var y = 100;

var tamBloco = 40;
var imgParede;

function preload(){
  imgParede = loadImage("image/tijolo.png");
}
cenario = [
  ['$','$','$','$','$','$','$','$','$','$','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','%','%','%','%','%','%','%','%','%','$'],
  ['$','$','$','$','$','$','$','$','$','$','$']
  
  ];

function setup() {
  createCanvas(640, 640);
  background('#222222');
  frameRate(30); 
}

function draw() {
	  clear();
  background('#222222');
  
	image(imgParede,0,0);
  
  for(i = 0; i < cenario.length; i++){
    for(j = 0; j < cenario[0].length; j++){
      if(cenario[i][j] == '$'){
        image(imgParede,j*tamBloco,i*tamBloco);
  }
 }
}

 
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
  

    noStroke();
  fill( 250, 250, 5);
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
text("Vidas: "+ vidas , 480, 120);
  fill(250, 0, 0 );
  textSize(35)
text("Pontos: \n" + pontos, 480, 180);
  fill(250, 0, 0 );
  textSize(35) 
text("Nivel: " + nivel, 480, 280);

}

