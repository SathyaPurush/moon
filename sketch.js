//python -m SimpleHTTPServer
let RGB = 255

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  ellipseMode(CENTER);
  fill(RGB,RGB,RGB);
  ellipse(width/2,height/2,200,200);
  RGB = map(mouseX,0,windowWidth,0,255);

  
}