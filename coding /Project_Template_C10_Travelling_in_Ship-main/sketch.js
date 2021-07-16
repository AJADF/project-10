var sea,ship
var seaimage,shipimage 
function preload(){
seaimage=loadImage("sea.png")
shipimage= loadAnimation("ship-1.png","ship-1.png", "ship-2.png","ship-1.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200)
  sea.addImage(seaimage)
  sea.velocityX = -5
  sea.scale=0.3
  ship=createSprite(130,200,20,20)
  ship.addAnimation("moving ship",shipimage)
  ship.scale = 0.25
}

function draw() {
  background("blue");
 if(sea.x<0){
   sea.x=sea.width/8
 }
 drawSprites();
}