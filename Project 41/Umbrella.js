class Umbrella{
    constructor(x, y) {
        var options = ({
            isStatic: true
        })
        this.image = loadImage("images/WalkingFrame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,10,options);
        this.radius = 50;
        World.add(world, this.umbrella);
    }
    display(){
        imageMode(CENTER);
        image(this.image, this.umbrella.position.x, this.umbrella.position.y + 70, 300, 300);
    }
}