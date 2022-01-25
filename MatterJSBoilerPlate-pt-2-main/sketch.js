
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
	    

	} 
    bloco1 =Bodies.rectangle(250,200,150,20,block1_options);
    World.add(world,bloco1);



	Engine.run(Engine);


    var block2_options={
		isIstatic:true
	    

	} 
	bloco2 =Bodies.rectangle(250,200,150,20,block2_options);
    World.add(world,bloco2);



	Engine.run(Engine);
}


function draw() {
  background(200);
  rectMode(CENTER);
 Engine.update(Engine);
  fill();
  ellipseMode();
  drawSprites();
}



