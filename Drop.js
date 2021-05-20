class Drop{
    constructor(x,y,){
      var options={
        restitution:0.2,
        friction:0.1
      }
         
      this.drop = Bodies.circle(x,y,5,options)
      this.radius = 5
      World.add(world,this.drop)
      
    }

    update(){     
        if(this.drop.position.y > height){
         Matter.Body.setPosition(this.drop, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
      
     var pos = this.drop.position;
      
       push();
       fill("blue")
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.radius)
       pop();
    
        }
      
    }
