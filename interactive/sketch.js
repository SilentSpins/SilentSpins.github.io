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
let tryOne;

// sets up the initial visual and begins timer
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  state = "red";
  fill(state);
  background("grey");
  textSize(16);
  rectMode(CENTER);
}

function draw() {
  //  variables representing the initial size of the button and shapes
  width = windowWidth/3*scaleSize;
  height = windowHeight/3*scaleSize; 
  rect(windowWidth/2, windowHeight/2, width, height);
  
  startTimer();
  highScore();
}

function mouseClicked() {
// if clicked on the button and is green, it cues redSetup and changes tryOne to display text
  if (mouseX < windowWidth/2+width/2 && mouseX > windowWidth/2-width/2 && mouseY < windowHeight/2+height/2 && mouseY > windowHeight/2-height/2 && state === "green"){
    tryOne = 1;
    redSetup();
  }
}

// mouseWheel changes button size to +/- difficulty, clears the canvas and displays the screen prior to shape change
function mouseWheel(event){
  if (event.delta > 0 && width < windowWidth/2){
    clear();
    scaleSize*=1.1;
  } 
  
  if(event.delta < 0 && width > windowWidth/10){
    clear();
    scaleSize*=0.9;
  }
  background("grey");
  //   only displays when the player as attempted at least once
  if (tryOne > 0){
    fill("grey");
    rect(windowWidth/1.2,0,300,300);
    rect(windowWidth/2,0,450,500);
    fill("black");
    text("Your Highest score is " + highscore[0] + " ms",windowWidth/1.35,15);
    text("You got " + results + " ms",windowWidth/2.2,15 );
    state = "red";
    fill(state);
  }
}

// between 1-3 seconds begin timer and once timer reaches 0, it changes the shape to green which cues the player to react
function startTimer(){
  timer = round(random(1,3));
  if (frameCount % 60 === 0 && timer > 0) { 
    timer --;
  }
  if (timer === 0) {
    state = "green";
    fill(state);
    initialMilisecond = millis();
  }
}

// displays the highscore from when the program started
function highScore(){
//   this checks if your new score was less than your highscore, if it was it will change the highscore, if it didn't it will remain the same
  if (results < highscore[0]){
    highscore.unshift(results);
    fill("grey");
    rect(windowWidth/1.2,0,300,300);
    fill("black");
    text("Your Highest score is " + results + " ms",windowWidth/1.35,15);
    fill("red");
  }
}

// changes square to red and displays your results
function redSetup(){
  state = "red";
  fill(state);
  endMilisecond = millis();
  results = round(initialMilisecond-endMilisecond)*-1;
  fill("grey");
  rect(windowWidth/2,0,400,500);
  fill("black");
  text("You got " + results + " ms",windowWidth/2.2,15 );
  fill(state);
}

