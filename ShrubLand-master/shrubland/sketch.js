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

var a = 0;
var setStaticFlag = 0;

var germ;
// Menu
var menu; 
var vol; //volume
var volslider;
var color1,color2,color3;


// Selection
var select1;
var buttons;

// Images
var logo, backgroundIMG, EnemyGroundIMG, GroundIMG, shterbseimg, shterimg, factboxIMG, potIMG, backgroundIMG, ig;
var Spotify;
var Youtube;
var germination;
var cursor;

// Fonts
var orangekd, bitpap, pixelated,PixelVille;
var font;

// Sounds


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
PixelVille        = loadFont("Assets/Fonts/PixelvilleLowRes.ttf");


cursor            = loadImage("Assets/images/cursor.png");
Youtube           = loadImage("Assets/Images/YouTube.png");
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

germination       = loadAnimation("Assets/images/Germination/1.png","Assets/images/Germination/2.png","Assets/images/Germination/3.png", "Assets/images/Germination/4.png", "Assets/images/Germination/5.png", "Assets/images/Germination/6.png","Assets/images/Germination/7.png","Assets/images/Germination/8.png","Assets/images/Germination/9.png","Assets/images/Germination/10.png","Assets/images/Germination/11.png","Assets/images/Germination/12.png","Assets/images/Germination/13.png","Assets/images/Germination/14.png","Assets/images/Germination/15.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png","Assets/images/Germination/16.png");


}

function setup(){

// Canvas
var canvas = createCanvas(displayWidth,displayHeight);
// Setup
engine   = Engine.create();
world    = engine.world;
database = firebase.database();

var VolumeREF = database.ref('Volume');
VolumeREF.on("value", function(data){

}); 


//                    G A M E   S E T U P
game              = new Game();
game.getGameState();
game.startGame();


germ              = createSprite(200,200,40,40);
platform          = new Ground(displayWidth - 170, displayHeight - 200, 340, 400);
platform2         = new EGround(displayWidth - 1290, displayHeight - 300,299,749);
playerBase        = new Body(displayWidth - 170, displayHeight - 456, .0001,.0001);
PlayerShooter     = new Shooter(displayWidth - 210, displayHeight - 460, .0001,.0001);
factbox           = new Fact(displayWidth - 1270, displayHeight - 120,300,200);
seed              = new Seed(1185, 440, 1);
plantpotbase      = new Pot(displayWidth - 1350, displayHeight - 676, 50,4);
plantpotwalleft   = new Pot(displayWidth - 1372, displayHeight - 700, 4, 50);
plantpotwallright = new Pot(displayWidth - 1325, displayHeight - 700, 4, 50);

buttons           = new Menu();
select1           = new Selection(200,200,30,30);
aboutbox          = new About(displayWidth - 500, displayHeight - 500, 500,10);
germ.addAnimation("animation", germination);
germ.scale = 2;


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
       menu.selectButtonHide();

   }
  
  //    A B O U T
  if(gameState === "about"){

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
    image(Youtube, displayWidth - 388, displayHeight - 139, 130, 130);
    text(":   DebugAble", displayWidth - 280, displayHeight - 65);
   
    menu.selectButtonHide();

  }
  

   if(gameState === "Selection"){

    background(backgroundIMG);
     menu.playButtonHide();
     menu.quitButtonShow();
     menu.aboutButtonHide();
     menu.backButtonHide();
     
     if(frameCount % 20 === 0){
       color1 = 0;
      }
      if(frameCount % 20 === 0){
       color2 = random(0,100);
      }
      if(frameCount % 20 === 0){
       color3 = random(0,50);
      }
     
  
  
      fill(color1,color2,color3);
      textSize(40);
      textFont(orangekd);
      text("Choose Your Seed",displayWidth - 840, displayHeight - 800);
  
  
     
     select1.display();
    menu.selectButtonShow();
     
   }

   
  
  
   if(gameState === "Level1"){

    clear();
    menu.playButtonHide();
    menu.quitButtonShow();
    menu.aboutButtonHide();
    menu.backButtonHide();
    game.playGame();
    menu.selectButtonHide();
    textSize(21);
    text("Click and Drag the cursor sideaways to aim", displayWidth - 310, displayHeight - 350);
    textSize(50);
    text("<------------->", displayWidth - 280, displayHeight - 300);
    image(cursor, displayWidth - 175 , displayHeight - 309,50,50);
    textSize(25);
    text('Press "Space" To Shoot', displayWidth - 270, displayHeight - 250);
    drawSprites();

   }  

}




function mouseDragged(){
  
 
}

function mouseReleased(){
  PlayerShooter.stay();
 
 
}


function keyPressed(){
  if(keyCode === 32){
    console.log("working");

    if(setStaticFlag === 0){
    Matter.Body.setStatic(seed.body, false);
    setStaticFlag = 1;
    }
    Matter.Body.applyForce(seed.body, seed.body.position,{x : -3 , y : -3});
    /*
      if(PlayerShooter.angle > -22 ){
   
            seed.shootStraight();
   
        }
        if(PlayerShooter.angle < -22){
            
                seed.shootDiagonalDown();
           
       
        }*/
      
  }else if(keyCode === 37){
    a = a + 10;
    PlayerShooter.turn(a);
    
  }else if(KeyCode === 39){
    a = a - 10;
    PlayerShooter.turn(a);
  }
   
}