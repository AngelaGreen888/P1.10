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
var a, b, d, e;

function setup() {
  createCanvas(1280, 720);
  background(0,100,120);

  //testing draggable
  // Starting location
  //calendar
  x = 30;
  y = 30;
  //weather
  a = 15;
  b = 500;
  // Dimensions
  w = 150;
  h = 200;
  //weather
  d = 80;
  e = 80;
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

  health2Button = createImg('Assets/Apple_Health.png');
  health2Button.position(45, pg.height-675);
  health2Button.size(50, 50);

  youtube2Button = createImg('Assets/Youtube.png');
  youtube2Button.position(45, pg.height-610);
  youtube2Button.size(50, 50);

  emailButton = createImg('Assets/E_Mail.png');
  emailButton.position(45, pg.height-545);
  emailButton.size(50, 50);

  facebookButton = createImg('Assets/Facebook.png');
  facebookButton.position(45, pg.height-480);
  facebookButton.size(50, 50);

  instagramButton = createImg('Assets/Instagram.png');
  instagramButton.position(45, pg.height-415);
  instagramButton.size(50, 50);

  linkedInButton = createImg('Assets/Linkedin.png');
  linkedInButton.position(45, pg.height-350);
  linkedInButton.size(50, 50);

  snapchatButton = createImg('Assets/Snapchat.png');
  snapchatButton.position(45, pg.height-285);
  snapchatButton.size(50, 50);

  spotifyButton = createImg('Assets/Spotify.png');
  spotifyButton.position(45, pg.height-220);
  spotifyButton.size(50, 50);

  telegramButton = createImg('Assets/Telegram.png');
  telegramButton.position(45, pg.height-155);
  telegramButton.size(50, 50);

  twitterButton = createImg('Assets/Twitter.png');
  twitterButton.position(45, pg.height-90);
  twitterButton.size(50, 50);

  backButton = createButton('back');
  backButton.position(1200, pg.height-50);
  backButton.size(50, 10);
  backButton.mousePressed(backToMirror);

}

function backToMirror(){
  setup();
  health2Button.hide();
  youtube2Button.hide();
  emailButton.hide();
  facebookButton.hide();
  instagramButton.hide();
  linkedInButton.hide();
  snapchatButton.hide();
  spotifyButton.hide();
  telegramButton.hide();
  twitterButton.hide();
  backButton.hide();

  plusButton.show();
  lightButton.show();
  healthButton.show();
  youtubeButton.show();
  select('#twitter', HTMLElement).show();
  select('#spotify', HTMLElement).show();
  select('#m-booked-bl-simple-10717', HTMLElement).show();
  removeTime = false;
  removeCalendar = false;
}

function backToBlank(){
  setup();
  plusButton.show();
  lightButton.show();
  healthButton.show();
  youtubeButton.show();
  backButton.hide();
  select('#twitter', HTMLElement).show();
  select('#spotify', HTMLElement).show();
  select('#m-booked-bl-simple-10717', HTMLElement).show();
  removeTime = false;
  removeCalendar = false;
}

function hideAllApps() {
  plusButton.hide();
  lightButton.hide();
  healthButton.hide();
  youtubeButton.hide();
  select('#twitter', HTMLElement).hide();
  select('#spotify', HTMLElement).hide();
  select('#m-booked-bl-simple-10717', HTMLElement).hide();
  select('#m-booked-weather-bl250-84348', HTMLElement).position(pg.width/2-125, 75).hide();
  pg.clear();
  pg.background(0, 0, 0, 150);
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
  drawHealthApp = true;

  strokeWeight(0);
  pg.fill('rgba(31,31,31,0.75)' );
  pg.circle(105, 110, 90);
  pg.circle(310, 210, 90);
  pg.circle(305, 475, 90);
  pg.circle(105, 375, 90);

  backButton = createButton('back');
  backButton.position(30, pg.height-50);
  backButton.size(50, 10);
  backButton.mousePressed(backToBlank);

  strokeWeight(1);
  pg.fill(255);
  pg.textSize(20);
  pg.textFont('Helvetica Neue');
  pg.text('Sleep', 80, 65);
  pg.text('Weight', 280, 165);
  pg.text('Mirror Time', 255, 425);
  pg.textSize(16);
  pg.text('Calories Burned', 48, 330);
  pg.textSize(40);
  pg.text('8:32 hrs', 35, 125);
  pg.text('248 lbs', 245, 225);
  pg.text('680 cal', 40, 390);
  pg.textSize(30);
  pg.text("2:" +minute() + ":" + second() + " hrs", 235, 480);
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
  if (mouseX > a && mouseX < a + d && mouseY > b && mouseY < b + e) {
    dragging = true;
    offsetX = a-mouseX;
    offsetY = b-mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
}

function draw() {
  translate(width, 0);
  scale(-1, 1);
  image(capture, 20, 20, 1240, 680);
  translate(width, 0);
  scale(-1, 1);
  image(pg, 20, 20, 1240, 680);
  if( removeCalendar == false){
    calendar();
  }
  if( removeTime == false){
    time();
  }

  //testing draggable
  //calendar draggable
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
  else if (mouseX > a && mouseX < a + d && mouseY > b && mouseY < b + e) {
    rollover = true;
    if (dragging) {
      a = mouseX + offsetX;
      b = mouseY + offsetY;
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
