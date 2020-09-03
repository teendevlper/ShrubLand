class Selection{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.seed = loadImage("Assets/images/appleseed.png");
    this.mango = loadImage("Assets/images/mangoseed.png")
    this.image = loadImage("Assets/images/Selection/Box.png");
    this.img = loadImage("Assets/images/Selection/Box2.png");
  
    }

    display(){
       var pos = this.body.position;

        var x = 270;
        var y = 600;
       
       var i = 0;

      
      for(var i = 0; i < 1; i++ ){
            x = x + 300;
         
            fill("black");
            text("Malus Domestica", displayWidth - 625, displayHeight - 660);
            text("(Apple Seed)", displayWidth - 600, displayHeight - 620);
            image(this.image, displayWidth - x, displayHeight - y, 100, 100);
            image(this.seed, displayWidth - x + 19, displayHeight - y + 20, 75, 75 );
        }
        
       
        for(var i = 0; i < 1; i++){
            x = x + 400;
            text("Mangifera indica", displayWidth - 1023, displayHeight - 660);
            text("(Mango Seed)", displayWidth - 1010, displayHeight - 620);
            image(this.img, displayWidth - x, displayHeight - y, 100, 100);
             image(this.mango, displayWidth - x + 25,  displayHeight - y + 20, 50,60)
        }
     
    }
}