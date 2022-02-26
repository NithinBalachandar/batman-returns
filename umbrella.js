class Umbrella{
    constructor(x,y){
        
        var options = {
           isStatic:true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,70,options);
        this.radius = 300;
        World.add(world,this.umbrella);

    }
    display(){
        fill("blue");
        imageMode(CENTER);
        image(this.image,this.umbrella.position.x,this.umbrella.position.y,this.radius,this.radius);
    }
    }

