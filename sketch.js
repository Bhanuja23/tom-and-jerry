
function preload() {
    //load the images here
    bImg= loadImage("images/garden.png")
    c1Img= loadAnimation("images/tomOne.png")
    c2Img= loadAnimation("images/tomTwo.png","images/tomThree.png")
    j1Img=loadImage("images/jerryTwo.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom =createSprite(900,400,10,10)
    tom.addAnimation("sit",c1Img)
    tom.scale=0.1
    jerry=createSprite(300,700,10,10)
    jerry.addImage(j1Img)
    jerry.scale=0.1

}

function draw() {

    background(bImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode === DOWN_ARROW){
    tom.velocityY=5
    tom.addAnimation("run",c2Img)
    tom.changeAnimation("run")
}
  //For moving and changing animation write code here
}
