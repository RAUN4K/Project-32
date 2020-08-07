const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;
var polygon;
var engine, world;
var stand1,ground;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,380,1200,10);
  stand1 = new Ground(410,300,240,10);

  block1 = new Block(320,275,30,40);
  block2 = new Block(350,275,30,40);
  block3 = new Block(380,275,30,40);
  block4 = new Block(410,275,30,40);
  block5 = new Block(440,275,30,40);
  block6 = new Block(470,275,30,40);
  block7 = new Block(500,275,30,40);

  block8 = new Block(350,235,30,40);
  block9 = new Block(380,235,30,40);
  block10 = new Block(410,235,30,40);
  block11 = new Block(440,235,30,40);
  block12 = new Block(470,235,30,40);

  block13 = new Block(380,195,30,40);
  block14 = new Block(410,195,30,40);
  block15 = new Block(440,195,30,40);

  block16 = new Block(410,155,30,40);

  

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new Slingshot(polygon,{x:100,y:200});


  
}

function draw() {
  background(255,255,255);  

  textSize(35);
  fill("white");
  text("SCORE:" + score,750,40);

  stand1.display();
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}

function mouseReleased(){
  slingShot.fly();
}