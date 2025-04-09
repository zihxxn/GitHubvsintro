function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Set background to black
  background(0);

  // Map the mouse position to RGB values for dynamic color changes
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = map(mouseX + mouseY, 0, width + height, 0, 255);

  // Set the fill color of the circle
  fill(r, g, b);
  noStroke();

  // Draw a circle in the center of the canvas
  ellipse(width / 2, height / 2, 200, 200);
}
