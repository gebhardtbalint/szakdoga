let halmaz;
let halmazX = 200;
let halmazY = 200;
let offsetX = 0;
let offsetY = 0;
let radius = 100;
let overHalmaz = false;

function setup() {
  createCanvas(600, 500);
}

function draw() {
  clear();
  background(0, 100, 133);

  if(Math.abs(halmazX - mouseX) < radius && Math.abs(halmazY - mouseY) < radius)
    overHalmaz = true;
  else
    overHalmaz = false;

  if(overHalmaz)
    fill('rgba(0, 0, 0, 0.5)');
  else
    fill('green');

  halmaz = ellipse(halmazX, halmazY, radius, radius);
}

function mousePressed() {
  offsetX = mouseX - halmazX;
  offsetY = mouseY - halmazY;
}

function mouseDragged() {
  if(overHalmaz){
    halmazX = mouseX - offsetX;
    halmazY = mouseY - offsetY;
  }
}
