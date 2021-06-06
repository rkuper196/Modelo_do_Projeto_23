const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Inicializando Motor
  engine = Engine.create();
  world = engine.world;
	
   //Criar Objetos de Base de Jogador e Base de Computador


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Exibir base de jogadores e base de computador 


   //exibir jogador e jogador-computador


}
