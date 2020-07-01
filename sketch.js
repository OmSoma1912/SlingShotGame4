const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var gameState = "start";
var score = 0;

var backgroundImg;

var a;
var b;
var c;
var ground;
var bg;

function preload() {
     getBackgroundImg();
}
function setup(){
  var canvas = createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  a = new Hitter(200,250,30,30);
  b = new Holder(200,250,0,0);

  c = new Spring(a.body, b.body);

  d = new Ground(600,200,100,3);
  e = new Ground(600,400,100,3);
  z = new Ground(400,500,800,3);

  //1 platfrom, 1 row
  f = new BoxR(580,180,20,30);
  g = new BoxB(600,180,20,30);
  h = new BoxY(620,180,20,30);

  //1 platfrom, 2 row
  i = new BoxY(590,150,20,30);
  j = new BoxR(610,150,20,30);

  //1 platfrom, 3 row
  k = new BoxB(600,120,20,30);

  //2 platfrom, 1 row
  l = new BoxR(580,380,20,30);
  m = new BoxB(600,380,20,30);
  n = new BoxY(620,380,20,30);

  //2 platfrom, 2 row
  o = new BoxY(590,350,20,30);
  p = new BoxR(610,350,20,30);

  //2 platfrom, 3 row
  q = new BoxB(600,320,20,30);
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    noStroke();
    textSize(25);
    fill("white");
    text("Score : "+ score,20,50)
    Engine.update(engine);
    //if(gameState === start){
    a.display();
    b.display();
    c.display();
    d.display();
    e.display();
    f.display();
    f.score();
    g.display();
    g.score();
    h.display();
    h.score();
    i.display();
    i.score();
    j.display();
    j.score();
    k.display();
    k.score();
    l.display();
    l.score();
    m.display();
    m.score();
    n.display();
    n.score();
    o.display();
    o.score();
    p.display();
    p.score();
    q.display();
    q.score();
    z.display();

   

}

function mouseDragged(){
  //if(gameState != "gone"){
  Matter.Body.setPosition(a.body, {x: mouseX , y: mouseY});
  //}
}

function mouseReleased(){
  c.fly(); 
  gameState = "gone";
}

function keyPressed(){
  if(keyCode === 32){
    //Matter.Body.setPostition(a.body, {x : 200, y : 50});
    c.attach(a.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if (hour >= 6 && hour <= 18){
      bg = "Images/day.jpg";
  }
  
  else{
      bg = "Images/night.jpg";
  }

  backgroundImg = loadImage(bg);
}






