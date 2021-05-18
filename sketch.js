var boy, bg, pond;
var boyImg, bgImg, pondImg, groud;
var vaccine, vaccineImage,corona ,coronaImage;
var vaccinesGroup, coronasGroup;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var life=0;

function preload(){

  boyImg=loadImage ("sprites/boy.png");
  bgImg= loadImage ("sprites/BG.jpg ");
  vaccineImage=loadImage ("sprites/vaccine.png");
  coronaImage=loadImage ("sprites/corona.png");
  vaccines2Img=loadImage ("sprites/vaccine 2.png");
  restartImg=loadImage ("sprites/restart.png");
}


function setup() {
  createCanvas(1000,700);
  bg= createSprite(700, 350, 50, 50);
  bg.addImage(bgImg);
  bg.scale=2.0;

  boy= createSprite(50,630, 25,25)
  boy.addImage(boyImg)
  boy.scale=0.7;

  ground=createSprite(500,690,1000,20);
  ground.visible = false;

  vaccines2 = createSprite(450,300,10,10);
  vaccines2.addImage(vaccines2Img);

  restart=createSprite(450,400,10,10);
  restart.addImage(restartImg);

  vaccines2.visible=false;
  restart.visible=false;

  vaccinesGroup=new Group();
  coronasGroup=new Group();
}


function draw() {
  background(20,255,20);  

  text("LIFE: "+life,950,60);

 if (gameState=== PLAY){
  bg.velocityX=-10 ;

  if(bg.x<0 ){
      bg.x=bg.width /2 
  }
console. log(boy.y )
  if(keyDown ("space")&& boy.y>=510){
      boy.velocityY=-5;
  }

  boy.velocityY = boy.velocityY + 1

  spawnVaccine()

  spawnCorona()

  if (vaccinesGroup.isTouching(boy)){
    boy.scale=1.0;
    life=life+5 ;
  }

if (coronasGroup.isTouching(boy)){
   gameState=END;
   bg.velocityX=0;
   boy.velocity=0;
   boy.scale=0.5;

}

 }

 if(gameState===END){
  vaccines2.visible=true;
  restart.visible=true;

  if(mousePressedOver){
      reset ();
  }

 }

 boy.bounceOff(ground);

  drawSprites();
}

function spawnVaccine () {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var vaccine = createSprite(1000,650,40,10);
    //vaccine.y = Math.round(random(80,120));
    vaccine.addImage(vaccineImage);
    vaccine.scale = 0.3;
    vaccine.velocityX = -6;
    
     //assign lifetime to the variable
    vaccine.lifetime = 170;
    
    //adjust the depth
    vaccine.depth = boy.depth;
    boy.depth = boy.depth + 1;
    
    //add each vaccine to the group
    vaccinesGroup.add(vaccine);
  }
}


function spawnCorona () {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var corona = createSprite(1000,650,40,10);
    //corona.y = Math.round(random(80,120));
    corona.addImage(coronaImage);
    corona.scale = 0.3;
    corona.velocityX = -8;
    
     //assign lifetime to the variable
    corona.lifetime = 130;
    
    //adjust the depth
    corona.depth = boy.depth;
    boy.depth = boy.depth + 1;
    
    //add each corona to the group
    coronasGroup.add(corona);
  }
}

function reset (){

  gameState= PLAY;
  
}







