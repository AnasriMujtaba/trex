var trex, trex_running, edges;
var groundImage;
var ground;
var invisibleground;
var cloudImage;
var cloud;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

  groundImage = loadImage("ground2.png");

  cloudImage=loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  ground=createSprite(130,180,400,10);
  ground.addAnimation("ground", groundImage)
  ground.velocityX=-3;

  invisibleground=createSprite(200,190,400,5);
  invisibleground.visible=false;
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>150){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  if(ground.x<0){
ground.x=ground.width/2
  }
  //stop trex from falling down
  trex.collide(invisibleground);
  drawSprites();
  spawncloud();
}

function spawncloud(){
  if(frameCount%120==0){
    cloud=createSprite(550,100,20,20);
    cloud.velocityX=-2;
    cloud.addImage("cloud",cloudImage);
    cloud.scale=0.7;
    cloud.y=Math.round(random(50,100));
    cloud.depth=trex.depth
    trex.depth=trex.depth+1
  }
  
 
}