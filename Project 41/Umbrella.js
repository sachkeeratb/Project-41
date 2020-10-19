class Umbrella{
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,this.radius);
        this.image = loadImage("images/WalkingFrame/walking_1.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}