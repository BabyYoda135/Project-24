var Ball;
var Ground1;
var Log1, Log2, Log3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball = new Paper(200, 450, 80)
  Ground1 = new ground(width/2, 670, width, 10)
  Log1 = new ground(1200, 660, 200, 10)
  Log2 = new ground(1300, 610, 10, 100)
  Log3 = new ground(1100, 610, 10, 100)

  Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230, 230, 0);
  Engine.update(engine)

  console.log(Ball.body.position)
  
  Ball.display()
  Ground1.display()
  Log1.display()
  Log2.display()
  Log3.display()
}

function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(Ball.body, Ball.body.position, {x:0.9, y:-0.8})
  }
}
