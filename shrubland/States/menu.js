class Menu{
    constructor(){
        this.image = loadImage("Assets/images/Menu/Shrubland.png");
        this.playButton       = createButton("Play");
        this.quitButton       = createButton("Quit");
        this.aboutButton      = createButton("About");
        this.backButton       = createButton("Back");
        this.seedone          = createButton("Select");
        this.seedtwo          = createButton("Select");
    }

  display(){
    image(this.image,500,500);
    
    this.playButton.position(displayWidth - 750, displayHeight - 500);
    this.playButton.size(100,50);
    this.playButton.style("background-color","#77dd00");
    this.playButton.style("color","#fff");
    this.playButton.style("font-family", 'Do Hyeon', 'sans-serif' );
    this.playButton.style("font-size", '35px' );
    this.playButton.mouseOver( () =>{
         this.playButton.style("background-color","#77dd77");
    });
    this.playButton.mouseOut( () =>{
        this.playButton.style("background-color","#77dd00");
   });
    this.playButton.mousePressed( () =>{
        game.updateGameState(1);
    });
    
    
    this.quitButton.position(displayWidth - 100, displayHeight - 897);
    this.quitButton.size(100,50);
    this.quitButton.style("background-color","#77dd00");
    this.quitButton.style("color","#fff");
    this.quitButton.style("font-family", 'Do Hyeon', 'sans-serif' );
    this.quitButton.style("font-size", '35px' );
    this.quitButton.mouseOver( () =>{
         this.quitButton.style("background-color","#77dd77");
    });
    this.quitButton.mouseOut( () =>{
        this.quitButton.style("background-color","#77dd00");
   });
    this.quitButton.mousePressed( () =>{
        game.updateGameState(0);
    });

  
    this.aboutButton.position(displayWidth - 200, displayHeight - 50);
    this.aboutButton.size(200,50);
    this.aboutButton.style("background-color","#77dd00");
    this.aboutButton.style("color","#fff");
    this.aboutButton.style("font-family", 'Do Hyeon', 'sans-serif' );
    this.aboutButton.style("font-size", '35px' );
    this.aboutButton.mouseOver( () =>{
         this.aboutButton.style("background-color","#77dd77");
    });
    this.aboutButton.mouseOut( () =>{
        this.aboutButton.style("background-color","#77dd00");
   });
    this.aboutButton.mousePressed( () =>{
        game.updateGameState("about");
       
    });


    this.backButton.position(displayWidth - 200, displayHeight - 50);
    this.backButton.size(200,50);
    this.backButton.style("background-color","#77dd00");
    this.backButton.style("color","#fff");
    this.backButton.style("font-family", 'Do Hyeon', 'sans-serif' );
    this.backButton.style("font-size", '35px' );
    this.backButton.mouseOver( () =>{
         this.aboutButton.style("background-color","#77dd77");
    });
    this.backButton.mouseOut( () =>{
        this.aboutButton.style("background-color","#77dd00");
   });
    this.backButton.mousePressed( () =>{
        game.updateGameState(0);
       
    });

    this.seedone.position(displayWidth - 1020, displayHeight - 495);
    this.seedone.size(203,50);
    this.seedone.style("background-color","#77dd00");
    this.seedone.style("color","#fff");
    this.seedone.style("font-family", 'Do Hyeon', 'sans-serif' );
    this.seedone.style("font-size","20px");
    this.seedone.mouseOver( () =>{
      this.aboutButton.style("background-color","#77dd77");
    });
 this.seedone.mouseOut( () =>{
     this.aboutButton.style("background-color","#77dd00");
    });
 this.seedone.mousePressed( () =>{
     game.updateGameState(3);
    
    });

    this.seedtwo.position(displayWidth - 620, displayHeight - 495);
    this.seedtwo.size(203,50);
    this.seedtwo.style("background-color","#77dd00");
    this.seedtwo.style("color","#fff");
    this.seedtwo.style("font-family", 'Do Hyeon', 'sans-serif' );
    this.seedtwo.style("font-size","20px");
    this.seedone.mouseOver( () =>{
      this.aboutButton.style("background-color","#77dd77");
    });
 this.seedtwo.mouseOut( () =>{
     this.aboutButton.style("background-color","#77dd00");
  });
 this.seedtwo.mousePressed( () =>{
     game.updateGameState(3);
    
  });

  }
  
  quitButtonHide(){
    this.quitButton.hide();  
  }
 
  playButtonHide(){
    this.playButton.hide();
  }
  
  aboutButtonHide(){
    this.aboutButton.hide();
  }

  backButtonHide(){
    this.backButton.hide();
  }

  selectButtonHide(){
     this.seedone.hide();
     this.seedtwo.hide();
  }
  
  selectButtonShow(){
    this.seedone.show();
    this.seedtwo.show();
 }

  playButtonShow(){
    this.playButton.show();
  }

  quitButtonShow(){
    this.quitButton.show();  
  }
  
  aboutButtonShow(){
    this.aboutButton.show();
  }

  backButtonShow(){
    this.backButton.show();
  }


}