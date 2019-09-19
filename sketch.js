let Nosesniffle;
let mic;
let snowy = [];


function setup() {

  createCanvas(400, 400);
  angleMode(DEGREES)

  for (let i = 0; i <= 10; i++) {
    snowy[i] = new Snow(random(1, 10) / 10 * 50 * i, 5 + i * 10, .6 + i * .3);
  }

  //snowy[0] = new Snow(270, 60, 0.8);
  //snowy[1] = new Snow(20, 300, 1.2);
  //snowy[2] = new Snow(230, 80, 0.5);
  //snowy[3] = new Snow(60, 275, 1);
  //snowy[4] = new Snow(350, 100, 1.5);



  mic = new p5.AudioIn()
  mic.start();
}

function draw() {

  background(250, 170, 80);

  Nosesniffle = map(mic.getLevel(), 0, .5, 169, 210);



  if (mouseIsPressed && mouseX <= width * 0.6 && mouseX >= width * 0.4 && mouseY <= height * 0.85 && mouseY >= height * 0.7) {

    background(0)
    console.log("hi")
  }

  if (mouseX > width * 0.55 && mouseX < width * 0.42 && mouseY < height * 0.8 && mouseY > height * 0.7) {
    background(250, 170, 80);

  }



  drawHead();

  drawEyes();

  drawRightpupil();

  drawLeftpupil();

  drawNose();

  drawNosedot();


  for (i = 0; i < snowy.length - 1; i++) {
    snowy[i].display();
    snowy[i].move();
  }
  //snowy[0].display();
  //snowy[1].display();
  // snowy[2].display();
  //snowy[3].display();
  //snowy[4].display();

  //snowy[0].move();
  //snowy[1].move();
  //snowy[2].move();
  //snowy[3].move();
  //snowy[4].move();

  console.log(snowy)
}

//Functions


function drawLeftpupil() {
  stroke(color(145, 100, 80))
  strokeWeight(4)
  fill(170, 100, 80)
  circle(width * .37, height * .35, 17);
}

function drawEyes() {
  fill(250);
  beginShape();
  vertex(width * .3, height * .32);
  vertex(width * .38, height * .31);
  vertex(width * .45, height * .39);
  vertex(width * .36, height * .42);
  vertex(width * .3, height * .32);
  endShape();

  beginShape();
  curveVertex(width * .7, height * .32);
  curveVertex(width * .62, height * .31);
  curveVertex(width * .55, height * .39);
  curveVertex(width * .64, height * .42);
  curveVertex(width * .7, height * .32);
  endShape(CLOSE);
}

function drawHead() {

  fill(50);
  beginShape();
  vertex(width * .05, height * .4);
  vertex(width * .15, height * .2);
  vertex(width * .3, height * .2);
  vertex(width * .45, height * .15);
  vertex(width * .55, height * .15);
  vertex(width * .7, height * .2);
  vertex(width * .85, height * .2);
  vertex(width * .95, height * .35);
  vertex(width * .75, height * .3);
  vertex(width * .72, height * .4);
  vertex(width * .55, height * .8);
  vertex(width * .45, height * .8);
  vertex(width * .28, height * .4);
  vertex(width * .25, height * .3);
  endShape();

}

function drawRightpupil() {

  stroke(color(75, 230, 240))
  strokeWeight(4)
  fill(120, 230, 240)
  circle(width * .63, height * .35, 17);


}

function drawNosedot() {
  rectMode(CENTER)
  noStroke();
  push();
  translate(width * .5, height * .79);
  rotate(Nosesniffle);
  fill(40)
  rect(width * 0, height * 0, 15, 20)
  pop();
}

function drawNose() {
  noStroke();
  beginShape();
  fill(80)
  vertex(width * .41, height * .72);
  vertex(width * .59, height * .72);
  vertex(width * .55, height * .8);
  vertex(width * .45, height * .8);
  endShape();
}