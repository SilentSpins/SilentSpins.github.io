// Reaction Time Game
// Minh Chau
// February 28th, 2020
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let x, y;
let rectSize;
let speed;
let initialMilisecond;
let endMilisecond;
let waitTime = 1500;
let results;
let state;
let timer;
let highscore = [5000000000000];
let scaleSize = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  noStroke();
  state = "red";
  fill(state);
  background("grey");
  textSize(16);
  rectMode(CENTER);
}

function mouseWheel(event){
  print(event.delta);
  if (event.delta > 0 && width < windowWidth/2){
    clear();
    scaleSize*=1.1;
  } 
  
  if(event.delta < 0 && width > windowWidth/10){
    clear();
    scaleSize*=0.9;
  }
  fill("grey");
  rect(windowWidth/1.2,0,windowWidth,windowHeight);
  rect(windowWidth/2,0,500,500);
  fill("black");
  text("You got " + results + " ms",windowWidth/2.2,15 );
  text("Your Highest score is " + results + " ms",windowWidth/1.2,15);
  fill("red");
  background("grey");
}

function draw() {

  rectMaker();

  startTimer();

  highScore();
}

function rectMaker(){
  width = windowWidth/3*scaleSize;
  height = windowHeight/3*scaleSize; 

  rect(windowWidth/2, windowHeight/2, width, height);
}

function startTimer(){
  timer = round(random(1,3));
  if (frameCount % 60 === 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer === 0) {
    state = "green";
    fill(state);
    initialMilisecond = millis();
  }
}

function highScore(){
  if (results < highscore[0]){
    highscore.unshift(results);
    fill("grey");
    rect(windowWidth/1.2,0,100,300);
    fill("black");
    text("Your Highest score is " + results + " ms",windowWidth/1.2,15);
    fill("red");
  }
}

function redSetup(){
  state = "red";
  fill(state);
  endMilisecond = millis();
  results = round(initialMilisecond-endMilisecond)*-1;
  fill("grey");
  rect(windowWidth/2,0,500,500);
  fill("black");
  text("You got " + results + " ms",windowWidth/2.2,15 );
  fill(state);
}

function mouseClicked() {
  width = windowWidth/3*scaleSize;

  height = windowHeight/3*scaleSize; 

  if (mouseX < windowWidth/3+width && mouseX > windowWidth/3 && mouseY < windowHeight/4+height && mouseY > windowHeight/4 && state === "green"){
    redSetup();
  }
}
