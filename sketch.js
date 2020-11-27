var car
var wall
var speed
var weight
var deformation
function setup() {
  createCanvas(800,400);
 speed = random(55,90);
weight = random(400,1500);
   car = createSprite(-50, 200, 50, 50);
   car.velocityX=speed;
  wall = createSprite(600, 200, 50, 200);
deformation =0.5*speed*speed*weight/22500

}

function draw() {
  background(255,255,255);  
  text("deformation =          =",20,75)
  text("speed = ",250,50)
  text("weight = ",250,100)
  text((Math.round(deformation)),100,75)
  text((Math.round(speed)),300,50)
  text((Math.round(weight)),300,100)
  text(car.shapeColor,140,75)


  if(car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2
    &&deformation<100){
    car.shapeColor="green"
    car.velocityX=0;

  }
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2
    &&deformation>100&&deformation<180){
    car.shapeColor="yellow"
    car.velocityX=0;

  }
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2
    &&deformation>180){
    car.shapeColor="red"
    car.velocityX=0;

  }
  drawSprites();
}