var umbrella;

var drops = [];

var maxDrops = 100;

var thunder;

function preload(){
    
}

function setup(){
    createCanvas(231,360);
   
    umbrella = new Umbrella(116,180,10);
}

function draw(){
    randThunder();

    background(thunderIMG);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drops(random(0,400), random(0,400)));
        drops[i].display();
        drops.update();
    }

    umbrella.display();
}   

function randThunder(){
    if(World.frameCount % 120 === 0){
        rand = randomNumber(1,4);
        switch(rand){
            case 1: thunderIMG = loadImage("images/thunderbolt/1.png");
            break;
            case 2: thunderIMG = loadImage("images/thunderbolt/2.png");
            break;
            case 3: thunderIMG = loadImage("images/thunderbolt/3.png");
            break;
            case 4: thunderIMG = loadImage("images/thunderbolt/4.png");
            default:break;
        }
    }
}