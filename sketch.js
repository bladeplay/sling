const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball;
var platform;
var catapult;
var box,box2,box3,box4,box5,box6,box7,box7,box8;
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  ball=new Ball(200,200);
  var options={
  isStasic:true
  }
  platform = new Ground(700, 799, 10000, 170);
  box = new Box(900,780, 20, 170);
  box2 = new Box(900,790, 20, 170);
  box3 = new Box(900,780, 20, 170);
  box4 = new Box(900,790, 20, 170);

  box5 = new Box(910,780, 20, 170);
  box6 = new Box(910,790, 20, 170);
  box7 = new Box(910,780, 20, 170);
  box8 = new Box(910,790, 20, 170);
  catapult = new SlingShot(ball.body,{x:200, y:650});
}
function draw() {
  background("black");
  Engine.update(engine);
  platform.display();
  ball.display(); 
  catapult.display();
  box.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display(); 
  box8.display(); 
  drawSprites();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}

function mouseReleased(){
  catapult.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32&& ball.body.speed<1){
      Matter.Body.setPosition(ball.body, {x: 200 , y: 50});
     catapult.attach(ball.body);
     ball.trajectory=[];
  }
}