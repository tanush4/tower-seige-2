
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200,600);
 

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  ground = new Ground(600,580,1200,20);

  ground2 = new Ground(390,300,260,10);
  ground3 = new Ground(900,400,200,10);

  polygon = new Polygon(150,200,30,30);

  launcher = new Slingshot(polygon.body,{x:150, y:110})
  
  
  block1 = new Block2(480,275,30,40);
  block2 = new Block2(450,275,30,40);
  block3 = new Block2(420,275,30,40);
  block4 = new Block2(390,275,30,40);
  block5 = new Block2(360,275,30,40);
  block6 = new Block2(330,275,30,40);
  block7 = new Block2(300,275,30,40);
  block8 = new Block4(330,235,30,40);
  block9 = new Block4(360,235,30,40);
  block10 = new Block4(390,235,30,40);
  block11 = new Block4(420,235,30,40);
  block12 = new Block4(450,235,30,40);
  block13 = new Block3(360,195,30,40);
  block14 = new Block3(390,195,30,40);
  block15 = new Block3(420,195,30,40);
  block16 = new Block(390,155,30,40);

  b1 = new Block(900,275,30,40);
  b2 = new Block4(900,315,30,40);
  b3 = new Block4(870,315,30,40);
  b4 = new Block4(930,315,30,40);
  b5 = new Block2(900,355,30,40);
  b6 = new Block2(870,355,30,40);
  b7 = new Block2(840,355,30,40);
  b8 = new Block2(930,355,30,40);
  b9 = new Block2(960,355,30,40);
  


}

function draw() {
  background("lightgrey");
textSize(30)
  text("Press Space For Another Try",350,100)
  ground.display();
  ground2.display();
  ground3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display(); 

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  polygon.display();

  launcher.display();
  drawSprites();
}

function mouseDragged()  {
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY})
}

function mouseReleased()  {
  launcher.fly()
  

}

function keyPressed()  {
  if(keyCode===32)  {
    Matter.Body.setPosition(polygon.body,{x:150, y:200})
    launcher.attach(polygon.body);

  }

}