var bananaImage, obstacleImage, ground, player, player_running;
var obstacleGroup, background, BananaGroup;
var score;

function preload ()  {
  backImage = loadImage ("jungle.png");
  player_running = loadAnimation ("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage ("banana.png");
  obstacleImage = loadImage ("stone.png");
}


function setup() {
  createCanvas(400, 400);
  player = createSprite (350, 100, 10, 10)
  player.addAnimation ("running", player_running);
  player.scale = 0.2;
  backg = createSprite (200, 200, 400, 0);
  backg.addImage ("backgroun",backImage);
  backg.velocityX = -5;
  backg.x = backg.width /2;

  ground = createSprite(200,190,400,10);
  ground.visible = false;
  
  
}

function draw() {
  background(220);
  
  if (backg.x < 0){
    backg.x = backg.width/2;
  }
  
  if (BananaGroup.isTouching (player)) {
   score = score+ 2;
   BananaGroup.destroyEach ();
  
  }
  
  
  
  
  switch (score) {
  
    case 10: player.scale = 0.12;
      break;
    case 20: player.scale = 0.14;
      break;
    case 30: player.scale = 0.16;
      break;
    case 40: player.scale = 0.18;
      break;
    case 50: player.scale = 0.2;
      break;
    case 60: player.scale = 0.22;
      break;
    case 70: player.scale = 0.24;
      break;
    case 80: player.scale = 0.26;
      break;
    case 90: player.scale = 0.28;
      break;
    case 100: player.scale = 0.3;
      break;
    default: break;
  }
  
  if (obstacleGroup.isTouching (player)) {
    player.scale = 0.2;
  }
  
  food ();
  
  drawSprites ();
  
stroke("white");
textSize(20);
fill("white");
text ("SCORE:"+ score, 500, 50);

}















function food () {
  if (World.frameRate % 80 === 0) {
    var banana = createSprite(200, 200, 10, 20);
    banana.scale= 0.1;
    banana.y = Math.round(random(120, 190));
    banana.velocityX= -3;
    banana.setLifetime = 130;
    
    bananaGroup.add(banana);
    
  }
}