class Bob{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':1,
            'friction':1.2,
            'density':0.5
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
      
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        circle(0, 0, 2*this.radius);
        pop();
      }
    }