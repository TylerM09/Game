var Walk, walk_animation
var edges
var Idle, Idle_animation

  



function preload() {
  walk_animation = loadAnimation("WAlk1.png", "Walk2.png", "Walk3.png")

 
  Idle_animation = loadAnimation("WAlk1.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  
  



Walk = createSprite(width / 2, height / 2)
Walk.addAnimation("TylerWalk", walk_animation)
Walk.addAnimation("Idle", Idle_animation)
Walk.scale = .25




edges = createEdgeSprites()

}

function draw() {
  background(255,135,134); 
  
  if(keyWentDown("S")){

    Walk.velocityY = 2
Walk.changeAnimation("TylerWalk", walk_animation)
    

    
  }

  //Walk.addImage("WAlk1.png")

  if(keyWentUp("S")){

    Walk.velocityY = 0 

    Walk.changeAnimation("Idle", Idle_animation)

    
  }
  drawSprites();
}