
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var particle1,particle2,particle3,particle4,particle5;
var particle6,particle7,particle8,particle9,particle10;

var rotator1,rotator2,rotator3;
 
var angle1=60;
var angle2=60;
var angle3=60;
function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = Engine.world;

	//Crie os Corpos aqui.
    var plane_options={
		isIstatic:true
	}
    plane = Bodies.rectangle(100,400,150,20,plane_options);
    World.add(world,plane);
    bloco1 =Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,bloco1);
	bloco2 =Bodies.rectangle(250,200,150,20,plane_options);
    World.add(world,bloco2);

    var particle_options={
		restitution:0.4,
		friction:0.2
	}
    particle1 = Bodies.ellipse(220,10,10,particle_options)
    World.add(world,particle1);
	particle2 = Bodies.ellipse(220,10,10,particle_options)
    World.add(world,particle2);
	particle3 = Bodies.ellipse(220,10,10,particle_options)
    World.add(world,particle3);
	particle4 = Bodies.ellipse(220,10,10,particle_options)
    World.add(world,particle4);
	particle5 = Bodies.ellipse(220,10,10,particle_options)
    World.add(world,particle5);

	var rotator_options={
      isIstatic: true

	}
    rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator1);
	rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator2);
	rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator3);



	
    fill("brown");
	rectMode(CENTER);
    ellipseMode(RADIUS);
}


function draw() {
  background("lightgreen");
 
 Engine.update(engine);
 
 rect(plane.position.x,plane.position.y,150,20);
 rect(bloco1.position.x,plane.position.y,150,20);
 rect(bloco2.position.x,plane.position.y,150,20);

 ellipse(particle1.position.x,particle1.position.y,10);
 ellipse(particle2.position.x,particle2.position.y,10);
 ellipse(particle3.position.x,particle3.position.y,10);
 ellipse(particle4.position.x,particle4.position.y,10);
 ellipse(particle5.position.x,particle5.position.y,10);

Matter.Body.rotate(rotator1,angle1)
push();
traslate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1+=0.4;


Matter.Body.rotate(rotator2,angle2)
push();
traslate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2+=0.4;

Matter.Body.rotate(rotator3,angle3)
push();
traslate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop();
angle3+=0.4;

Matter.Body.rotate(rotator4,angle4)
push();
traslate(rotator4.position.x,rotator4.position.y);
rotate(angle4);
rect(0,0,150,20);
pop();
angle4+=0.4;

Matter.Body.rotate(rotator5,angle5)
push();
traslate(rotator5.position.x,rotator5.position.y);
rotate(angle5);
rect(0,0,150,20);
pop();
angle5+=0.4;
}



