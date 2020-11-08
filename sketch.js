
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var rect1 , rect2 , rect3,dustbin,dustbinI;
var ground;

function preload()
{
	dustbinI = loadImage("images/dustbin.png")
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
  world = engine.world;
  
  ground  = new Ground(600,height,1200,20);
  ground.shapeColor = "red"

  dustbin = createSprite(1000,310,180,100);
  dustbin.addImage(dustbinI);
  dustbin.scale = 0.5
  dustbin.debug = false;

  

	//Create the Bodies Here.
  ball = new Paper(50,200,35);
  rect1 = new Dustbin(1000,380,115,20);
	rect2 = new Dustbin(950,310,20,160);
	rect3 = new Dustbin(1050,310,20,160);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ball.display();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
  keypressed();
}

function keypressed(){
  if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-185})
  }
}


