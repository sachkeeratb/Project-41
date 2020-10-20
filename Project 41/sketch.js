const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var umbrella;
var drops = [];
var maxDrops = 100;
var thunder, thunderIMG, thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame = 0;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    createCanvas(400,700);

    engine = Engine.create();
    world = engine.world;
   
    umbrella = new Umbrella(200,500);

    if(frameCount % 150 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
}

function draw(){
    Engine.update(engine);
    randThunder();

    background(0);

    umbrella.display();

    for(var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}   

function randThunder(){
    if(frameCount % 80 === 0){
        thunderCreatedFrame = frameCount;
        thunderIMG = createSprite(random(10,370),random(10,30),10,10);
        rand = Math.round(random(1,4));
        switch(rand){
            case 1: thunderIMG.addImage(thunder1);
            break;
            case 2: thunderIMG.addImage(thunder2);
            break;
            case 3: thunderIMG.addImage(thunder3);
            break;
            case 4: thunderIMG.addImage(thunder4);
            default:break;
        }
        thunderIMG.scale = random(0.2,0.7);
    }
    if(thunderCreatedFrame + 10 === frameCount && thunderIMG){
        thunderIMG.destroy();
    }
}