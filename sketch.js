var sword
var swordImage

var fruit
var fruit1 
var fruit2
var fruit3
var fruit4

var fruit1Image
var fruit2Image
var fruit3Image
var fruit4Image

var alien1
var alien2

var alien

var alien1Image
var alien2Image

var gameOver

var score = 0

var fruitGroup
var enemyGroup


var PLAY = 1
var END = 0
var gameState = 1

function preload(){

 swordImage = loadImage("sword.png")
 
 fruit1Image = loadImage("fruit1.png")
 fruit2Image = loadImage("fruit2.png")
 fruit3Image = loadImage("fruit3.png")
 fruit4Image = loadImage("fruit4.png")
  
 alien1Image = loadAnimation("alien1.png")
 alien2Image = loadAnimation("alien2.png")

  
gameOverImage = loadImage("gameover.png")
  
  knifeSwooshSound = loadSound("knifeSwooshSound.mp3")
  gameOverSound = loadSound("gameover.mp3")
  
}

function setup(){
   createCanvas(600, 600);
  
  
  sword = createSprite(40,200,20,20); 
  sword.addImage(swordImage);
  sword.scale = 0.7
  
  
  fruitGroup = new Group()
  enemyGroup = new Group()
  
  
  
}

function draw(){
  
background("cyan")
 
  if(gameState===PLAY)
{
  
  

  fruits();
  Enemy()
  
  
 
  if (enemyGroup.isTouching(sword)){
    gameState = "END"
    
    sword.addImage(gameOverImage)
    sword.x= 200
    sword.y = 200
  }
  
  if (fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    
    
    
    
    knifeSwooshSound.play();
    score = score + 2
  }}
  if (gameState==="END"){
  
    
    fruitGroup.destroyEach()
    enemyGroup.destroyEach();
    
     enemyGroup.setVelocityXEach(0)
     fruitGroup.setVelocityXEach(0)
      
     // gameOverSound.play();
    }

  
  sword.x=World.mouseX
  sword.y=World.mouseY

  drawSprites();
  
  text ("score="+score,400,400)
}

function fruits(){
  
  if(World.frameCount%80===0){
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2
     //fruit.debug = true
    
    r=Math.round(random(1,4));
    if (r===1){
      fruit.addImage(fruit1Image);
    }
    else if (r===2){
      fruit.addImage(fruit2Image)
    }
    else if (r===3){
      fruit.addImage(fruit3Image)
    }
    else if (r===4){
      fruit.addImage(fruit4Image)
    }
    
    fruit.y=Math.round(random(100,500));
    
    fruit.velocityX = -7;
    fruit.selfLifetime = 100;
    
    fruitGroup.add(fruit);
      
  }
}

function Enemy(){
  if(World.frameCount%200===0){
    alien = createSprite(400,200,20,20)
    alien.addAnimation("moving",alien1Image)
    alien.y=Math.round(random(200,400));
    alien.velocityX = -8
    alien.selffLifetime = 50
    
    enemyGroup.add(alien)
  }
}