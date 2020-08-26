class Game{
    constructor(){

    }
   
    getGameState(){
        var gameStateREf = database.ref('GameState');
             gameStateREf.on("value", function(data){
             gameState = data.val();
         });
    }
    
    updateGameState(state){
        var gameStateREF = database.ref('/');
             gameStateREF.update({
             GameState : state
         });
    }

    startGame(){
        if(gameState === 0){
            menu = new Menu();
            menu.display();
            menu.quitButtonHide();
            menu.playButtonShow();
        }
    }

    playGame(){
        

// Background
background("#ff6961");   // PASTEL RED COLOR
Engine.update(engine);

    // Display
 
    platform.display();
    platform2.display();
    playerBase.display();
    factbox.display();
    plantpotbase.display();
    plantpotwalleft.display();
    plantpotwallright.display();
    PlayerShooter.display();
    seed.display();


// Texts

if(frameCount % 20 === 0){
    color1 = 0;
    }
    if(frameCount % 20 === 0){
    color2 = random(0,128);
    }
    if(frameCount % 20 === 0){
    color3 = random(1,192);
    }
    fill(color1,color2,color3);
    textSize(40);
    textFont(orangekd);
    text("FACTS",160,720);


fill("Black");

textFont(bitpap);
textSize(30);
text("_____________",80,745);

fill("Black");

textFont(bitpap);
textSize(30);
text("_____________",80,865);

if(frameCount % 50 === 0){
PlantFact = random(PlantFacts);
}

fill("Black");

textFont(bitpap);
textSize(24);
text(PlantFact,42,805);

fill("Black");
textSize(20);
textFont(orangekd);
text("Project by : Ekansh Sharma", displayWidth - 190, displayHeight - 10);





}


}