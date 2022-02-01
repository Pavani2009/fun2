var backroung, backroungImage;
var octo, octoImage;
var shark, sharkImage, sharkGroup;;

function preload(){

  backroundImage = loadImage("Sea.jpg");
  octoImage = loadImage("octo.png")
  sharkImage = loadImage("shark.png");
}

function setup(){
  createCanvas(600,600);
  backround = createSprite(300,300);
  backround.addImage("Backround",backroundImage);
  backround.velocityY = -1;


  sharkGroup = new Group();

  octo = createSprite(200,200,50,50);
  octo.addImage("octo",octoImage);
  octo.scale = 0.3;
}


function draw() {
// background(200);

if(backround.y > 400){
  backround.y = 300
}

if(keyDown("right_arrow")){
  octo.x = octo.x + 3;
}

if(keyDown("left_arrow")){
  octo.x = octo.x - 3;
}

if(keyDown("space")){
  octo.velocityY = -3;
}

octo.velocityY = octo.velocityY + 0.8;

spawnshark();

if(sharkGroup.isTouching(octo)){
    octo.velocityY = 0;

}




drawSprite()

}

function spawnshark(){

  if (frameCount % 240 === 0){

shark = createSprite(200,-50);
shark.addImage("Shark", sharkImage);


shark.x = Math.round(random(120,400));

shark.velocityY = 1;
shark.lifetime = 800;

sharkGroup.add(shark);

    }

}