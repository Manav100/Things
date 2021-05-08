const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,iron,stone1,stone2,stone3


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(400,200,50)
    iron = new Iron(800,400)
    stone1 = new Stone(700,550,80,70)
    stone2 = new Stone(1000,150,50,80)
    stone3 = new Stone(500,50,80,70)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display()
    stone1.display()
    stone2.display()
    stone3.display()


    
 
}