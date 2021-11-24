var runner, runner_running, edges;
var chao, chaoMassa;

function preload(){

runner_running = loadAnimation("reddok.png", "reddo.png", "reddokk.png", "reddo.png");
chao = loadImage("chao.png");
}

function setup() 
{
  createCanvas(600,200);

  runner = createSprite(50,160,20,50);
  runner.addAnimation("running", runner_running);
  edges = createEdgeSprites

    //adicione dimensão e posição ao trex
    runner.scale = 5;
    runner.x = 50
  
    chaoMassa = createSprite(200, 180, 400, 20);
    chaoMassa.addImage("solo", groundImage);
}

function draw() 
{
background("cyan");

 //registrando a posição y do trex
  console.log(runner.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    runner.velocityY = -10;
  }
  
  runner.velocityY = runner.velocityY + 1;
  
 //impedir que o trex caia
  runner.collide(chaoMassa);
  if (chaoMassa < 0){
    chaoMassa.x = chaoMassa.width / 2;
  }

  drawSprites();
}



