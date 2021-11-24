var trex, trex_running, edges;
var groundImage, chaoCretaceo;


function preload(){
  trex_running = loadAnimation("banguela.png","banguela2.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 5;
  trex.x = 50
  trex.y = 100

  chaoCretaceo = createSprite(200, 180, 400, 20);
  chaoCretaceo.addImage("solo", groundImage);
  
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 1;
  
 //impedir que o trex caia
  trex.collide(chaoCretaceo);
  chaoCretaceo.velocityX = -15;
  if(chaoCretaceo.x < 0){
    chaoCretaceo.x = chaoCretaceo.width / 2;
  }

  drawSprites();
}