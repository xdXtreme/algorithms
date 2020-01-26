var fixedrect,movingrect;
function setup() {
  createCanvas(1920,1080);
  fixedrect=createSprite(400, 1, 50, 50);
  movingrect=createSprite(400,700,60,50);

fixedrect.velocityY=4;
movingrect.velocityY=-4;

  fixedrect.shapeColor="red";
  movingrect.shapeColor="red";

  fixedrect.debug=true;
  movingrect.debug=true;
}

function draw() {
  background(0);
  if(movingrect.y-fixedrect.y < fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y < fixedrect.height/2+movingrect.height/2){
fixedrect.velocityY=fixedrect.velocityY*(-1);
movingrect.velocityY=movingrect.velocityY*(-1);
  }

  if(movingrect.x-fixedrect.x < fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x < fixedrect.width/2+movingrect.width/2){
fixedrect.velocityX=fixedrect.velocityX*(-1);
movingrect.velocityX=movingrect.velocityX*(-1);
  }

  drawSprites();
}