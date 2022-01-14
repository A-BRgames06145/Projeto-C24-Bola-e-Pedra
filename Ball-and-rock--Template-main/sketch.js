
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
var ball,rock;

var btn1;
var btn2;

function setup() {
  createCanvas(1363,653);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  var ball_options = {
    restitution: 1,
  }

  var rock_options = {
    restitution: -0.8,
  }
   
  btn2 = createImg('up.png');
  btn2.position(1253,30);
  btn2.size(100,100);
  btn2.mouseClicked(vForce);
  
  ball = Bodies.circle(500,10,20,ball_options);
  World.add(world,ball);
  
  rock = Bodies.circle(750,10,20,rock_options);
  World.add(world,rock);

  ground= Bodies.rectangle(680,643,1370,20,ground_options);

  World.add(world, ground);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  background("lightblue");
  Engine.update(engine);

fill("black");
rect(ground.position.x,ground.position.y,1363,20);
fill("cyan");
ellipse(ball.position.x,ball.position.y,20);
push();
fill("brown");
ellipse(rock.position.x,rock.position.y,20);
pop();
}

function vForce() {
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}


  


