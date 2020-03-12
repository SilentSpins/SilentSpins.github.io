// setinterval demo

let ballArray = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  // shows infintely
  window.setInterval(addBall,0.0000000000000000000000000000001);
  // shows once
  window.setTimeout(addBall,1000);
}

function draw(){
  noStroke();
  background("white");
  moveBalls();
  displayBalls();
}
function moveBalls(){
  for(let i=0; i <ballArray.length;i++){
    let dx = random(-500,500);
    let dy = random(-500,500);
    ballArray[i].x += dx;
    ballArray[i].y += dy;
  }
}

function displayBalls(){
  for (let i = 0; i <ballArray.length; i++){
    fill(ballArray[i].color);
    circle(ballArray[i].x,ballArray[i].y,ballArray[i].radius);
  }
}

function addBall(){
  let thisBall = {
    x: random(width),
    y: random(height),
    radius: random(25,50),
    color: color(random(255),random(255),random(255),random(255)),
  };
  ballArray.push(thisBall);
}