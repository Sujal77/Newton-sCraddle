
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var bob1,bob2,bob3,bob4,bob5;
var bobDiameter;

var roof,canvas;
var  rope1,rope2,rope3,rope4,rope5;
var mConstraint;
function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth/2, windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt)
	canvasmouse.pixelRatio= pixelDensity();
	let options={
		mouse: canvasmouse
	}
	mConstraint = MouseConstraint.create(engine,options)
	World.add(world,mConstraint)


	
	bobDiameter=40;

	//Create the Bodies Here.
	bob1=new Bob(280,400,"blue")
	bob2=new Bob(310,400,"red")
	bob3=new Bob(340,400,"yelow")
	bob4=new Bob(370,400,"green")
	bob5=new Bob(400,400,"pink")

	roof = new Roof(350,190,250,21)
	

	rope1= new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2= new Rope(bob2.body,roof.body,-bobDiameter*2+30,0)
	rope3= new Rope(bob3.body,roof.body,-bobDiameter*2+60,0)
	rope4= new Rope(bob4.body,roof.body,-bobDiameter*2+90,0)
	rope5= new Rope(bob5.body,roof.body,-bobDiameter*2+120,0)
	
	


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

 

  roof.display();


  
  
 
}
function mouseDragged(){
	
    Matter.Body.setPosition(rope1.body, { x: mouseX, y: mouseY });
	  

}


