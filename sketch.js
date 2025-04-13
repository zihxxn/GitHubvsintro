let stars = [];
let angle = 0;
let numStars = 100;

let shootingStar;
let shootingTimer = 0;
let shootingActive = false;
let tail = [];

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  createStars(numStars);
  initShootingStar();

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

  background(10, 10, 30, 100);
  drawStars();
  updateStars();
  handleShootingStar();
}
function createStars(num) {
  for (let i = 0; i < num; i++) {
    let star = {
      x: random(width),
      y: random(height),
      size: random(1, 3),
      baseBrightness: random(150, 255),
      twinkleSpeed: random(0.02, 0.05),
      twinkleAngle: random(TWO_PI)
    };
    stars.push(star);
  }
}

function drawStars() {
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    let alpha = map(sin(s.twinkleAngle), -1, 1, 100, s.baseBrightness);
    fill(255, 255, 255, alpha);
    noStroke();
    circle(s.x, s.y, s.size);
  }
}

function updateStars() {
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    s.twinkleAngle += s.twinkleSpeed;
    if (s.twinkleAngle > TWO_PI) {
      s.twinkleAngle = 0;
    }
  }
  angle += 0.01;
}

function initShootingStar() {
  shootingStar = {
    x: random(width / 2),
    y: random(height / 3),
    speedX: random(6, 10),
    speedY: random(3, 5),
    size: random(3, 5),
    active: false
  };
  tail = [];
}

function handleShootingStar() {
  if (shootingActive) {
    tail.push({ x: shootingStar.x, y: shootingStar.y });

    fill(255);
    noStroke();
    circle(shootingStar.x, shootingStar.y, shootingStar.size);

    for (let i = 0; i < tail.length; i++) {
      let alpha = map(i, 0, tail.length, 0, 150);
      fill(255, 255, 255, 150 - alpha);
      circle(tail[i].x, tail[i].y, shootingStar.size * 0.8);
    }

    shootingStar.x += shootingStar.speedX;
    shootingStar.y += shootingStar.speedY;

    if (tail.length > 15) {
      tail.shift();
    }

    if (shootingStar.x > width || shootingStar.y > height) {
      shootingActive = false;
      shootingTimer = 0;
      tail = [];
    }
  } else {
    shootingTimer++;
    if (shootingTimer > 300 && random(1) < 0.02) {
      initShootingStar();
      shootingActive = true;
    }
  }
}