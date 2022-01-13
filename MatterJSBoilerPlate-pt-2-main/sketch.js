
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
    var plane_options={
		isIstatic:true
	}
    plane = Bodies.rectangle(100,400,150,20,plane_options);
    World.add(world,plane);



    var block1_options={
		isIstatic:true
	    fill();
		ellipseMode();

	} 
    bloco1 =Bodies.rectangle(250,200,150,20,block1_options);
    World.add(world,bloco1)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



