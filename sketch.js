const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var engine, world;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

 
   


    plank1=new Ground(310,235,100,20);
block1=new Bloock(330,235,40,40);



    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
}


function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  polygon.display;
block1.display;
plank1.display;



}