class Drops {
    constructor(x,y,options){
        var options = ({
            friction: 0.1
        });
        this.x = x;
        this.y = y;
        this.body = Matter.Bodies.circle(x,y,this.radius);
        World.add(world, this.body);
    }

    update(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain, {x:random(0,400)}, {y:random(0,400)})
        }
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        pop();
    }
}