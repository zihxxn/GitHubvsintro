class bouncingball {
  
  constructor(posX, posY) 
  {
    this.x = posX;
    this.y = posY;
    
    this.xDir = random(-2, 2);
    this.yDir = random(-2, 2);
  }

  display(r,g,b,radius) 
  {
    fill(r,g,b);
    noStroke();
    circle(this.x, this.y,radius);
    circle(this.x,this.y-10,radius/2);
  }

  update(speed) 
  {
    this.x += this.xDir*speed;
    this.y += this.yDir*speed;
  }

  keepInCanvas() {
   
    if((this.x < 0)||(this.x > width))
{
this.xDir = -this.xDir;
// this.xDir *= -1;
}
if((this.y < 0)||(this.y > height))
{
this.yDir = -this.yDir;
//this.xDir *= -1;
}
  
  }
}