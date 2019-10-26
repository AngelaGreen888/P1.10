let capture;
let pg;

let plus;
var plusButton;
var lightButton;
var healthButton;
var youtubeButton;
var weather;
var bigWeather;

var drawApps = false;
var removeCalendar = false;
var removeTime = false;

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h, xx, yy;          // Location and size
var offsetX, offsetY, offsetXX, offsetYY;    // Mouseclick offset
var a, b;

function setup() {
  createCanvas(1280, 720);
  background(0,100,120);

  //testing draggable
  // Starting location
  x = 30;
  y = 30;
  // Dimensions
  w = 150;
  h = 200;
  //end test
  //variables for calendar text
  xx = 35;
  yy = 40;

  capture = createCapture(VIDEO);
  capture.size(1280, 720);
  capture.hide();
  
  pg = createGraphics(1280, 720);
  pg.background(0, 0, 0, 0);
  pg.noStroke();
  
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
  healthButton.mousePressed(drawHealth);
  
  c = color(255, 255, 255);
  pg.fill(c);
  pg.square(9, pg.height-425, 55, 0, 16);
  youtubeButton = createImg('Assets/Youtube.png');
  youtubeButton.position(30, pg.height-420);
  youtubeButton.size(50, 50);

  select('#spotify', HTMLElement).position(30, 400);
  select('#twitter', HTMLElement).position(pg.width-280, pg.height-280);
  weather = select('#m-booked-bl-simple-10717', HTMLElement).position(pg.width/2-80, 75);
  weather.mousePressed(expandWeather);
  bigWeather = select('#m-booked-weather-bl250-84348', HTMLElement).position(pg.width/2-125, 75);
  bigWeather.hide();
  bigWeather.mousePressed(minimizeWeather);

  calendar();
  time();
}

function expandWeather() {
  weather.hide();
  bigWeather.show();
}

function minimizeWeather() {
  bigWeather.hide();
  weather.show();
}

function changeBG() {
  val1 = random(255);
  val2 = random(255);
  val3 = random(255);
  background(val1, val2, val3);
}

function addApps() {
  hideAllApps();
  drawApps = true;
  
}

function hideAllApps() {
  plusButton.hide();
  lightButton.hide();
  healthButton.hide();
  youtubeButton.hide();
  select('#twitter', HTMLElement).hide();
  select('#spotify', HTMLElement).hide();
  select('#m-booked-bl-simple-10717', HTMLElement).hide();
  pg.clear();
  removeTime = true;
  removeCalendar = true;

}

function hideHalfApp() {
  plusButton.hide();
  lightButton.hide();
  healthButton.hide();
  youtubeButton.hide();
  select('#spotify', HTMLElement).hide();
  pg.clear();
  removeCalendar = true;
}

function drawHealth() {
  hideHalfApp();

}

function calendar() {
  textSize(20);
  textAlign(LEFT, CENTER);
  //rect(30, 30, 150, 50);
  rect(x, y, w, h);
  //text('test', 50, 41);
  text(month() + '/' + day() + '/' + year(), xx, yy + 7);
  text('Get groceries', xx, yy + 38);
  text('HW4 due', xx, yy + 62);
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
    offsetXX = xx-mouseX;
    offsetYY = yy-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

function draw() {
  image(capture, 20, 20, 1240, 680);
  image(pg, 20, 20, 1240, 680);
  if( removeCalendar == false){
    calendar();
  }
  if( removeTime == false){
    time();
  }

  if(drawApps == true) {
    c = color(0,0,0,2);
    pg.fill(c);
    pg.rect(0, 0, pg.width, pg.height);
  }

  //testing draggable
  // Is mouse over object
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    rollover = true;
    if (dragging) {
      x = mouseX + offsetX;
      y = mouseY + offsetY;
      xx = mouseX + offsetXX;
      yy = mouseY + offsetYY;
    }
  }
  else {
    rollover = false;
  }
  stroke(0);
  // Adjust location if being dragged
  /*if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }*/

  /*stroke(0);
  // Different fill based on state
  if (dragging) {
    fill (50);
  } else if (rollover) {
    fill(100);
  } else {
    fill(175, 200);
  }
  rect(x, y, w, h);*/

  //end test
  
  
}
