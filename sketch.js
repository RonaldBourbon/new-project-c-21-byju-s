
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,leftWall,rightWall;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options = {
       restitution:0.45,
	   density:1.2
	}

    ball = Bodies.circle(100,150,25,ball_options);
    World.add(world,ball);

	  ground = new Ground(400,690,1000,30);

    leftWall = new Ground(500,615,20,120);

    rightWall = new Ground(700,615,20,120);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  fill("yellow");
  
  ellipse(ball.position.x,ball.position.y,25);

  leftWall.display();
  rightWall.display();
  ground.display();
  
  Engine.update(engine);
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW) {
    Matter.Body.applyForce(ball,ball.position,{x:100,y:-100})
  }
}