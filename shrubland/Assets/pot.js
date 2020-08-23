class Pot{
    constructor(x, y, width, height){
        var options={
            isStatic : true
        }
  
    this.rect   = Bodies.rectangle(x,y,width,height,options);
    this.width  = width;
    this.height = height;
    this.image  = loadImage("Assets/images/pot.png");
    World.add(world, this.rect);

}

display(){
    var pos = this.rect.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 150, 200, 53, 53);
 }

}