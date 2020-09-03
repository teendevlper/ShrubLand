class Seed{
    constructor(x,y,radius){
     
        var options={
            isStatic    : true,
            restitution : 0.6,
            friction    : 0,
            density     : 7
        }
    
        this.body   = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image  = loadImage("Assets/images/Seed.png");
        World.add(world,this.body);
    }

 display(){
      var pos = this.body.position;
 circle(pos.x,pos.y,this.radius);
      imageMode(CENTER);
     image(this.image, pos.x, pos.y, 20,20);
    
   
   

    }   

 shootStraight(){
   
    Matter.Body.applyForce(this.body, this.body.position,{x : -100 , y : 0});
 
   //this.body.velocity.x = -100;
}
 shootDiagonalDown(){
    Matter.Body.applyForce(this.body, this.body.position,{x : -1 , y : 1});
}
  seedShoot(){
    //  Matter.Body.applyForce(this.body,)
  }
} 