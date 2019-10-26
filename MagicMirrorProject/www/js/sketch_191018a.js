let capture;
let pg;

let plus;
var plusButton;
var lightButton;
var healthButton;
var youtubeButton;

var drawApps = false;

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h;          // Location and size
var offsetX, offsetY;    // Mouseclick offset

function setup() {
  createCanvas(1280, 720);
  background(0,100,120);

  //testing draggable
  // Starting location
  x = 100;
  y = 100;
  // Dimensions
  w = 75;
  h = 50;
  //end test

  capture = createCapture(VIDEO);
  capture.size(1280, 720);
  capture.hide();
  
  pg = createGraphics(1280, 720);
  pg.background(0, 0, 0, 0);
  pg.noStroke();

  youtubeAppLogo = loadImage('Assets/Youtube.png');
  
  let c = color(255, 204, 0);
  pg.fill(c);
  pg.circle(30, pg.height-30, 20);
  plusButton = createImg('Assets/Plus.png');
  plusButton.position(34, pg.height-64);
  plusButton.size(31, 31);
  plusButton.mousePressed(addApps);
  
  c = color(255, 204, 0);
  pg.fill(c);
  pg.circle(80, pg.height-30, 20);
  lightButton = createImg('Assets/Light_Bulb.png');
  lightButton.position(82, pg.height-64);
  lightButton.size(31, 31);
  lightButton.mousePressed(changeBG);
  
  healthButton = createImg('Assets/Apple_Health.png');
  healthButton.position(15, pg.height-500);
  healthButton.size(80, 80);
  
  c = color(255, 255, 255);
  pg.fill(c);
  pg.square(9, pg.height-425, 55, 0, 16);
  youtubeButton = createImg('Assets/Youtube.png');
  youtubeButton.position(30, pg.height-420);
  youtubeButton.size(50, 50);
  
  //Code to push html button over the camera
  select('#spotify', HTMLElement).position(30, 400);
  select('#twitter', HTMLElement).position(pg.width-280, pg.height-280);
  select('#m-booked-bl-simple-10717', HTMLElement).position(pg.width/2-80, 100);
}

function changeBG() {
  val1 = random(255);
  val2 = random(255);
  val3 = random(255);
  background(val1, val2, val3);
}

function addApps() {
  plusButton.hide();
  lightButton.hide();
  healthButton.hide();
  youtubeButton.hide();
  pg.clear();
  drawApps = true;
  
}

function calendar() {
  textSize(20);
  textAlign(LEFT, CENTER);
  rect(30, 30, 150, 50);
  rect(30, 60, 150, 150);
  //text('test', 50, 41);
  text(month() + '/' + day() + '/' +year(), 35, 47);
  text('Get groceries', 35, 78);
  text('HW4 due', 35, 102);
}

function time() {
  let h = hour();
  let m = minute();

  textSize(40);
  textAlign(CENTER, CENTER);

  if (h > 12) {
    if (m < 10) {
      text((hour() - 12) + ':0' + minute(), 650, 50);
    }
    else {
      text((hour() - 12) + ':' + minute(), 650, 50);
    }
  }
  else {
    if (m < 10) {
      text(hour() + ':0' + minute(), 650, 50);
    }
    else {
      text(hour() + ':' + minute(), 650, 50);
    }
  }
}

function date() {
  textSize(40);
  textAlign(CENTER, CENTER);
  text(month() + '/' + day() + '/' + year(), 650, 90);
}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

function draw() {
  image(capture, 20, 20, 1240, 680);
  image(pg, 20, 20, 1240, 680);
  calendar();
  time();
  if(drawApps == true) {
    c = color(0,0,0,2);
    pg.fill(c);
    pg.rect(0, 0, pg.width, pg.height);
  }

  //testing draggable
  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
  }
  else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

  stroke(0);
  // Different fill based on state
  if (dragging) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
  rect(x, y, w, h);

  //end test
  
  
}
