


//Create namespace for Engine
const Engine = Matter.Engine
//Create namespace for World
const World = Matter.World
//Create namespace for Bodies
const Bodies = Matter.Bodies
//Create namespace for Body
const Body = Matter.Body

var engine,world,box,ground

function setup() {
  createCanvas(400,400);
//create the engine
engine= Engine.create();
  //Add world to the engine
  world=engine.world;

  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world
rectMode(CENTER);
  ellipseMode(RADIUS);
  
  ball=Bodies.circle(100,10,30,ball_options)
  World.add(world,ball);

  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,30,30)

  
  //write a rectangle function to display ground.
 


  
  
}

