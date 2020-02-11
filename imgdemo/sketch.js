// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let doge;

function preload(){
  doge = loadImage("assets/doge.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("blue");
  // rect(mouseX,mouseY,75,75);
  image(doge, mouseX-150, mouseY-70)
}
