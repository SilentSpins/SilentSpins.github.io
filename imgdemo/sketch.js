// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let doge;
let scaler = 0.5;

function preload(){
  doge = loadImage("assets/doge.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function mouseWheel(event){
  print(event.delta);
  if (event.delta > 0){
    scaler*=1.1;
  }
  else {
    scaler *= 0.9;
  }
}

function draw() {
  background(220);
  fill("blue");
  // rect(mouseX,mouseY,75,75);
  image(doge, mouseX-150, mouseY-70,doge.width*scaler,doge.length*scaler)

}
