class Shooter{
    constructor(x, y, width, height){
        var options={
           // isStatic : true
        }
  
    this.rect   = Bodies.rectangle(x,y,width,height,options);
    this.width  = width;
    this.height = height;
    this.image  = loadImage("Assets/images/Shooter2.png");
    World.add(world, this.rect);
        this.angle=0;
}

display(){
    push();
    var pos = this.rect.position;
    imageMode(CENTER);
    translate(pos.x,pos.y);
   rotate(this.rect.angle);
    image(this.image,0,0,90,20);
  
    pop();
 }

 turn(){
      var pos = this.rect.position;
     
  angleMode(DEGREES); 
  imageMode(CENTER);
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  this.angle=a;
  translate(pos.x, pos.y);
  push();
  rotate(a);
 
  image(this.image,0,0, 90, 20); 
  pop();
 }

    stay()
    {
       Matter.Body.setAngle(this.rect,this.angle)
    
    }



}