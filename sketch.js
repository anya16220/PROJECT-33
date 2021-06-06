var bgImg, girl, mountain;
var bg;

function preload(){
bgImg = loadImage("starry winter night.jpg")

}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
}