
var ball

function setup() {
  
  createCanvas(400,400);
ball = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
ball.position.x = ball.position.x+1
}

if(keyIsDown(LEFT_ARROW)){
  ball.position.x = ball.position.x-1
  }
  if(keyIsDown(UP_ARROW)){
    ball.position.y = ball.position.y-1
    }
drawSprites();
}




