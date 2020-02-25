/* eslint-disable no-empty */
// Reaction Time Game
// Minh Chau
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let x, y;
let rectSize;
let initialMilisecond = 0;
let endMilisecond;
let stateColour;
let timeToWait;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  rectSize = 300;
  stateColour = "blue";
  strokeWeight(2);
  stroke(0);
  fill("stateColour");
  background("grey");
}

function draw() {    
  text(round(millis()) + " ms has elapsed.", windowWidth-150,y+25);
  rect(x, y, rectSize, rectSize);
  function stateFinder();

  if (stateColour === "red" && frameCount % 60 === 0 && timeToWait > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timeToWait --;
  }
  if (timeToWait === 0) {
    stateColour = green;
    fill(stateColour);
    initialMilisecond = millis();
    return initialMilisecond;
  }
}

function mouseClicked() {
  if (mouseX < 300 && mouseX > 0 && mouseY < 300 && mouseY > 0){
    fill("red");
    endMilisecond = millis();
    print(round(initialMilisecond-endMilisecond)*-1);
  }
  
  function stateFinder(){
    if (stateColour === "blue" && mouseIsPressed && mouseX < 300 && mouseX > 0 && mouseY < 300 && mouseY > 0){
      stateColour = "red";
      fill(stateColour);
      timeToWait = random(1000,3000);
    }
    else if(stateColour === "red" && mouseIsPressed && mouseX < 300 && mouseX > 0 && mouseY < 300 && mouseY > 0){

    }  
  }

}