var cat,mouse,bg;
var catImage1, catImage2,mouseImage1,mouseImage2,bgImage;
function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png");
    catImage1=loadAnimation("images/cat1.png","images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImage1=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage2=loadAnimation("images/mouse4.png","images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,500,500);
    bg.addImage(bgImage);
    cat=createSprite(800,600,20,30);
    cat.addAnimation("sitting",catImage1);
    
    cat.scale=0.19;
    cat.setCollider("rectangle",0,0,cat.width,cat.height);
   
    mouse=createSprite(100,600,20,30);
    mouse.addAnimation("mouseTeasing",mouseImage1);
    
    mouse.scale=0.15;
    mouse.setCollider("rectangle",0,0,mouse.width,mouse.height);
    cat.depth=mouse.depth;
    cat.depth=cat.depth+1;
   
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX=0;
       mouse.addAnimation("standing",mouseImage2)
       mouse.changeAnimation("standing");
   }
    

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-10;
        cat.addAnimation("running",catImage2)
        cat.changeAnimation("running");

        mouse.addAnimation("mouseTeasing",mouseImage1)
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay=25;
       
    }
    
    
  //For moving and changing animation write code here

}
