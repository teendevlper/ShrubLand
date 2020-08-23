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

}