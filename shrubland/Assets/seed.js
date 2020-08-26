class Seed{
    constructor(x,y,radius){
     
        var options={
            isStatic    : true,
            restitution : 0.6,
            friction    : 0,
            density     : 1.0
        }
    
        this.body   = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image  = loadImage("Assets/images/Seed.png");
        World.add(world,this.body);
    }

 display(){
     var pos = this.body.position;
     imageMode(CENTER);
     image(this.image, pos.x, pos.y, 15,15);
    
    }   

}