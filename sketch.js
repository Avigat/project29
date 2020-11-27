const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform1,platform2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(570, 350, 250, 10);
    platform2 = new Ground(1000, 300, 250, 10);

    box1 = new Box(500,300,50,50);
    box2 = new Box(550,300,50,50);
    box3 = new Box(600,300,50,50);
    box4 = new Box(650,300,50,50);

    box5 = new Box(525,200,50,50);
    box6 = new Box(575,200,50,50);
    box7 = new Box(625,200,50,50);

    box8 = new Box(550,100,50,50);
    box9 = new Box(600,100,50,50);

    box10 = new Box(575,0,50,50);

    box11 = new Box(950,250,50,50);
    box12 = new Box(1000,250,50,50);
    box13 = new Box(1050,250,50,50);

    box14 = new Box(975,200,50,50);
    box15 = new Box(1025,200,50,50);

    box16 = new Box(1000,150,50,50);

    bird = new Bird(100,100);

    slingshot = new SlingShot(bird.body,{x:200,y:200});
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();

    box10.display();

    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();

    box16.display();

    bird.display();
    platform1.display();
    platform2.display();

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}