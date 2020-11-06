
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var rect1 , rect2 , rect3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600,height,1200,20);
  ground = color(255)

	//Create the Bodies Here.
	ball = new Paper(50,200,40);
  rect1 = new Dustbin(1000,350,200,20);
	rect2 = new Dustbin(910,310,20,100);
	rect3 = new Dustbin(1090,310,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
  keypressed();
}

function keypressed(){
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:25,y:-25})
  }
}


