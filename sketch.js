const Engine =Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies;

var myEngine,myWorld;
var object;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  options={
    isStatic:true
  }

  object = Bodies.rectangle(200,200,50,50,options);
  World.add(myWorld,object);
  //console.log(object.position.x)



}

function draw() {
  background("red");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  
}