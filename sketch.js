
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var roof, bob;
var rope1, rope2, rope3, rope4, rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	bobObj1= new Bob(240,450,40)
	bobObj2= new Bob(320,450,40)
	bobObj3= new Bob(400,450,40)
	bobObj4= new Bob(480,450,40)
	bobObj5= new Bob(560,450,40);
	roof= new Roof(400,100,600,20);
	rope1= new Rope(bobObj1.body, roof.body,-2*80,0);
	rope2= new Rope(bobObj2.body, roof.body,-1*80,0);
	rope3= new Rope(bobObj3.body, roof.body,0,0);
	rope4= new Rope(bobObj4.body, roof.body,80,0);
	rope5 = new Rope(bobObj5.body, roof.body,2*80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
	roof.display();
	bobObj1.display();
	bobObj2.display();
	bobObj3.display();
	bobObj4.display();
	bobObj5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


Engine.update(engine);

  drawSprites();
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		console.log("hello");
	  Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-80,y:-80});
	}
  }