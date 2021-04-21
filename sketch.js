var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, score2;
var gamestate = "play";
function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(400, 400);

  monkey = createSprite(70, 320);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(400, 390, 900, 20);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log(ground.y);
  score = 0;
score2 = 0
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  if (gamestate ==="play"){
    
  if (keyDown("space") && monkey.y > 318) {
    monkey.velocityY = -17;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  monkey.collide(ground)
  food();
  problem();
  score = score + Math.round(getFrameRate()/60)
  
  if (monkey.isTouching(FoodGroup))
    {
     score2 = score2+1;
     FoodGroup.destroyEach();
    }
  }
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  if(monkey.isTouching(obstacleGroup)){
    gamestate = "end"
    obstacleGroup.destroyEach()
    monkey.velocityY = 8;
  }
  //console.log(monkey.y)
  drawSprites();
  fill("black")
  textSize(15)
  text("Survival Time : "+score,250,30)
  text("Banana : "+score2,100,30);
}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400, 120);
    banana.addImage("vjbdjv", bananaImage)
    banana.y = Math.round(random(50, 150));
    banana.velocityX = -6;
    banana.scale = 0.15;
    FoodGroup.add(banana);
  }
}

function problem() {
  if (frameCount % 150 === 0) {
    obstacle = createSprite(400, 345);
    obstacle.addImage("vjbfbjbd", obstaceImage)
    obstacle.velocityX = -(6+score/500);
    obstacle.scale = 0.2;
obstacleGroup.add(obstacle);
  }
}