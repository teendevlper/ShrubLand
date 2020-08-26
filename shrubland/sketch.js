//                          S E T U P
const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 
var database;


//                     G A M E   S E T U P
// Game
var gameState = 0, game;

// Menu
var menu;

// Images
var logo, backgroundIMG, EnemyGroundIMG, GroundIMG, shterbseimg, shterimg, factboxIMG, potIMG, backgroundIMG, ig;
var Spotify;

// Fonts
var orangekd, bitpap, pixelated,PixelVille;
var font;

// Texts
var color1, color2, color3;

// Facts
var PlantFacts = ["Does anyone even read these?", `Trees gives us oxygen Of Course,\nStart planting now.`, `Trees offer many environmental \n benefits.`, `Trees can be placed to screen unwanted \n views or noise from busy highways.`, `patients recover from surgery \nmore quickly when their \nroom offered a view of trees.`, `Tree lined streets have a \ntraffic calming effect,\ntraffic moves more slowly and safely`, "Trees Cool the Streets and the City,\n Because Trees are cool B)", "Trees clean the air, \n Whoa i didn't know that.","Trees marks the Seasons.", "Trees increase Business Traffic, yeah.", "Trees increase Propety value.", "Trees add unity!", "Trees conserve Energy.", "Trees help prevent soil erosion.", "Trees save water.", "Trees fight climate change B)", `For every 10,000 miles you drive,\n it takes 15-20 trees \nto remove the harmful carbon dioxide released.`];
var PlantFact;
var factext;

// Player
var playerBase, PlayerShooter;
var shterbseimg, shterimg;

// Ground
var platform, platform2;

// Seed
var seed;

// Pot
var plantpotbase, plantpotwalleft, plantpotwallright;

// Facts 
var factbox;

// About Box
var aboutbox;
var randomSymbol  = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var rand;


function preload(){

orangekd          = loadFont("Assets/Fonts/orange.ttf");
bitpap            = loadFont("Assets/Fonts/BitPap.ttf");
pixelated         = loadFont("Assets/Fonts/PixelFlag.ttf");
PixelVille        = loadFont("Assets/Fonts/PixelvilleLowRes.ttf")

Spotify           = loadImage("Assets/Images/spotify.png");
ig                = loadImage("Assets/Images/instagram.png");
GroundIMG         = loadImage("Assets/images/Platform.png");
EnemyGroundIMG    = loadImage("Assets/images/Platform2.png");
logo              = loadImage("Assets/images/Menu/Shrubland.png")
shterbseimg       = loadImage("Assets/images/Shooterbody1.png");
shterimg          = loadImage("Assets/images/Shooter2.png");
factboxIMG        = loadImage("Assets/images/facts.png");
seedIMG           = loadImage("Assets/images/Seed.png");
potIMG            = loadImage("Assets/images/pot.png");
backgroundIMG     = loadImage("Assets/images/grass.png");
}

function setup(){
// Canvas
var canvas = createCanvas(displayWidth,displayHeight);
// Setup
engine   = Engine.create();
world    = engine.world;
database = firebase.database();



//                    G A M E   S E T U P
game              = new Game();
game.getGameState();
game.startGame();





platform          = new Ground(displayWidth - 170, displayHeight - 200, 340, 399);
platform2         = new EGround(displayWidth - 1290, displayHeight - 300,299,749);
playerBase        = new Body(displayWidth - 170, displayHeight - 456, 100,100);
PlayerShooter     = new Shooter(displayWidth - 210, displayHeight - 460, 10,20);
seed              = new Seed(PlayerShooter.rect.position.x-20, 308, .003);
factbox           = new Fact(displayWidth - 1270, displayHeight - 120,300,200);
plantpotbase      = new Pot(displayWidth - 1290, displayHeight - 676, 50,4);
plantpotwalleft   = new Pot(displayWidth - 1314, displayHeight - 700, 4, 50);
plantpotwallright = new Pot(displayWidth - 1267, displayHeight - 700, 4, 50);

aboutbox          = new About(displayWidth - 500, displayHeight - 500, 500,500);

chain = new Chain(PlayerShooter.rect,{x:displayWidth - 210, y: displayHeight - 460})
chain2 = new Chain(seed.body,{x:displayWidth - 210, y: displayHeight - 460})
}



function draw(){


//                       G A M E  S T A T E S

  if(gameState === 0){
     clear();
     background(backgroundIMG); 
     image(logo, displayWidth - 910 ,displayHeight - 700 , 422, 102);
  
  
       menu.quitButtonHide();
       menu.playButtonShow();
       menu.aboutButtonShow();
       menu.backButtonHide();
   }
  
  if(gameState === 1){
    clear();
    menu.playButtonHide();
    menu.quitButtonShow();
    menu.aboutButtonHide();
    menu.backButtonHide();
    game.playGame();
   }
   
   if(gameState === 2){
    aboutbox.display();
    menu.backButtonShow();
    if(frameCount % 50 === 0){
    rand = random(randomSymbol)
    }

   fill("black");
    textFont(PixelVille);
   textSize(40);
    text(rand , displayWidth - 250, displayHeight - 400);
    textFont(pixelated);
    text("-------", displayWidth - 280, displayHeight - 350);
    textFont(orangekd);
    text("Hey There!!", displayWidth - 300, displayHeight - 300);
    textSize(25);
    text("My name is Ekansh Sharma and i am from India, Odisha.", displayWidth - 465, displayHeight - 270);
    text("I'm really into making games lol",displayWidth - 345, displayHeight - 245 );
    text("support me by following my social Medias :P  - ",displayWidth - 405, displayHeight - 220 );
    tint(2)
    image(ig, displayWidth - 345, displayHeight - 205 , 40,40);
    textSize(30);
    text(":   xkxnsh", displayWidth - 280, displayHeight - 180);
    image(Spotify, displayWidth - 348, displayHeight - 155, 50,45);
    text(":   ekora", displayWidth - 280, displayHeight - 125);

}
 
}

function mouseDragged(){
  
  PlayerShooter.turn();
}

function mouseReleased(){
  PlayerShooter.stay();
}


function keyPressed(){
  if(keyCode===32){
    console.log("working")
    chain2.launch();
  }
}
