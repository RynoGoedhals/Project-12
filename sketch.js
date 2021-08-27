var boy, boy_running;
var path, pathImage;
var boundry1
var boundry2

function preload(){
  //pre-load images
  pathImage = loadImage("path.png");

  boy_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200,400,400);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(200,300,50,20);
  boy.addAnimation("running",boy_running);

  boundry1 = createSprite(10,200,20,400);
  boundry1.visible = false;
  boundry2 = createSprite(390,200,20,400);
  boundry2.visible = false;

}

function draw() {
  background(0);

  if(path.y > 400){

    path.y = height/2;

  }

  boy.collide(boundry1);
  boy.collide(boundry2);

  if(keyDown("RIGHT_ARROW")){

    boy.x = boy.x+4;

  }
  if(keyDown("LEFT_ARROW")){

    boy.x = boy.x-4;

  }

  drawSprites();
}
