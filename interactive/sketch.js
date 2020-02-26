
let x, y;
let rectSize;
let speed;
let initialMilisecond;
let endMilisecond;
let results;
let state;
let timer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  rectSize = 300;
  speed = 5;
  state = 0;
  strokeWeight(2);
  stroke(0);
  state = "blue";
  fill("blue");
  background("grey");
}

function draw() {    
  rect(x, y, rectSize, rectSize);
  timer = round(random(1,3));
  if (frameCount % 60 === 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer === 0) {
    state = "green";
    fill(state);
    initialMilisecond = millis();
    return initialMilisecond;
  }
}

function mouseClicked() {
  if (mouseX < 300 && mouseX > 0 && mouseY < 300 && mouseY > 0 && state === "green" || state === "blue"){
    fill("red");
    endMilisecond = millis();
    results = round(initialMilisecond-endMilisecond)*-1;
    state = "red";
  }
  // eslint-disable-next-line use-isnan
  if (results !== NaN){
    print(results);
  }
  
}