class Shooter{
    constructor(x, y, width, height){
        var options={
            isStatic : true
        }
  
    this.rect   = Bodies.rectangle(x,y,width,height,options);
    this.width  = width;
    this.height = height;
    this.image  = loadImage("Assets/images/Shooter2.png");
    World.add(world, this.rect);

}

display(){
    push();
    var pos = this.rect.position;
    rectMode(CENTER);

    image(this.image,pos.x,pos.y,90,20);
   
    pop();
 }
 /*turn(){
     var pos = this.rect.position; 
     angleMode(DEGREES); 
     imageMode(CENTER); 
     let a = atan2(mouseY - height / 2, mouseX - width / 2); 
     translate(pos.x, pos.y); 
     push();
      rotate(a);
       image(this.image,0,0, 90, 20); // Larger rectangle is rotating in degrees pop(); }
 }*/
    }