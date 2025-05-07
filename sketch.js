let bounceball1,bounceball2;

function setup() {
  createCanvas(400, 400);
  bounceball1 = new
  bouncingball(random(0,width),random(0,height));
  bounceball2 = new
  bouncingball(random(0,width),random(0,height));
}

function draw() {
  background('black');
  bounceball1.display(224,105,36,20);
  bounceball2.display(105,224,36,20);
  bounceball1.update(3);
  bounceball2.update(0.5);
  bounceball1.keepInCanvas();
  bounceball2.keepInCanvas();
}