var player;
var pirate;
var asteroid;
var earth;
var mars





function preload(){
  asteroid = loadImage("Asteroid.png");
  player = loadImage("Player.png");
  pirate = loadImage("Pirate.png");
  earth = loadImage("Earth.png");
}










function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}