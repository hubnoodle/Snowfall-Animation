const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var snow = [];


function preload() {
  snowb = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(1000,1000);
  engine = Engine.create();
  world = engine.world;
  Engine.update(engine)

}

function draw() {
  background(snowb);

  if(frameCount%60===0){
    snow.push(new snow(random(width/2-30, width/2+30), 10,10));
  }

 for (var j = 0; j < snow.length; j++) {
  
    snow[j].display();
  }

  drawSprites();
  }
