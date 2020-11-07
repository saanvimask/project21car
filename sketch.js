var bullet,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed=random(30,65)
  weight=random(223,321)

thickness=random(23,83)

 bullet = createSprite(100, 200,50, 5);
 bullet.velocityX=speed;
bullet.shapeColor=color(225)

 wall=createSprite(1200,200,thickness,height/2)
 wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10){
    wall.shapeColor=color(255,0,0)
    
    }
    if(damage<10){
    wall.shapeColor=color(0,255,0)
    }
    }

    function hasCollided(lbullet,lwall){
      bulletRightEdge=lbullet.x+lbullet.width
      wallLeftEdge=lwall.x
      if(bulletRightEdge>=wallLeftEdge){
      return true
      
      }
      return false
      }

  drawSprites();
}


