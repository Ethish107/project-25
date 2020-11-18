
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj;
var groundObj;
var dustbinObj;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperObj = new paper(200,450,70);
	groundObj = new Ground(800,670,1600);
	dustbinObj = new dustbin(1200,650);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
	
  console.log(paperObj.x);

	paperObj.display();
	dustbinObj.display();
	groundObj.display();



fill("red");
text(mouseX+" "+mouseY,mouseX,mouseY);
keyPressed();

}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:20,y:-35});
	}
}

