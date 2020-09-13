var helicopterIMG, helicopterSprite, packagesprite,packageIMG;
var packageBody,ground
var box1, box2, box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	packagesprite= createSprite(width/2, 80, 10,10);
	packagesprite.addImage(packageIMG)
	packagesprite.scale=0.2

	helicopterSprite= createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , { isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1=createSprite(800, 350, 10,100);
	 box2=createSprite(800,7 ,10,100);
	 box3=createSprite(800,7 ,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packagesprite.x= packageBody.position.x 
  packagesprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packagesprite.x = -2;
  }
}
