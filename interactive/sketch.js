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
  fill("red");
  background("grey");
}

function mouseWheel(event){
  print(event.delta);
  if (event.delta < 0){
    scaleSize*=1.1;
  }
}

function draw() {   
  width = windowWidth/3*scaleSize;
  height = windowHeight*scaleSize; 
  rect(0, 0, width, height);
  timer = round(random(1,3));
  if (frameCount % 60 === 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer === 0) {
    state = "green";
    fill(state);
    initialMilisecond = millis();
  }
  if (results < highscore[0]){
    highscore.unshift(results);
    fill("grey");
    rect(windowWidth-200,0,width,windowHeight);
    fill("red");
    text("Your Highest score is " + results + " ms",windowWidth-200,30);
  }
}

function mouseClicked() {
  width = windowWidth/2*scaleSize;
  height = windowHeight*scaleSize; 
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0 && state === "green"){
    fill("red");
    endMilisecond = millis();
    results = round(initialMilisecond-endMilisecond)*-1;
    state = "red";
    fill("grey");
    rect(width,0,300,300);
    fill("red");
    text("You got " + results + " ms", width, 30 );
  }
}
