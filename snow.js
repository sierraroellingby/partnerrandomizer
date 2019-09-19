console.log("snow time")


class Snow {
  constructor(_xPos, _yPos, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.size = _size;
  }
  display() {

    fill(255);
    scale(this.size);
    ellipse(this.xPos, this.yPos, 80, 80);

  }
  move() {
    if (this.yPos <= height * 1.8) {
      this.yPos += 2;
    } else {
      this.yPos = - height * 0.2;
    }
  }
}