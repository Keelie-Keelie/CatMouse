var backImg;
var cat1, cat2, cat4;
var mouse1, mouse2, mouse4;
var cat;
var mouse;


function preload() {
    //load the images here
    backImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png", "images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");

    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(850,600);
  cat.addAnimation("catSitting", cat1);
  cat.scale = 0.2

  mouse = createSprite(200,600);
  mouse.addAnimation("holdingCheese", mouse1);
  mouse.scale = 0.15

}

function draw() {

    background(backImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2 ){
        cat.velocityX = 0;
        cat.x = 300;
        cat.addAnimation("catHappy", cat4);
        cat.changeAnimation("catHappy");
        cat.scale = 0.2;
         
        mouse.addAnimation("mouseHappy", mouse4);
        mouse.changeAnimation("mouseHappy");
        mouse.scale = 0.15;
    }
   
    
    drawSprites();
}


function keyPressed(){

    if(keyDown(LEFT_ARROW)){
        cat.velocityX = -3;
        cat.addAnimation("catRunning", cat2)
        cat.changeAnimation("catRunning")

        mouse.addAnimation("mouseTeasing", mouse2)
        mouse.changeAnimation("mouseTeasing")
    }

  //For moving and changing animation write code here


}
