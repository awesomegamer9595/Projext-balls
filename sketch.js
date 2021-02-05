
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper1;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    paper1=new paper(200,20,35)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
if(keyIsDown(UP_ARROW)){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-25})}
	if(keyIsDown(DOWN_ARROW)){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-15,y:-25})}
		paper1.display();
		groundObject.display();
  dustbinObj.display();
 
 
}
