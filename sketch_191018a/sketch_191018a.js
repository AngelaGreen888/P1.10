let capture;
let pg;
let plus;
var plusButton;
var lightButton;

function setup() {
  createCanvas(1280, 720);
  background(0,100,120);
  
  capture = createCapture(VIDEO);
  capture.size(1280, 720);
  capture.hide();
  
  pg = createGraphics(1280, 720);
  pg.background(0, 0, 0, 0);
  pg.noStroke();
  
  plus = loadImage('Assets/Plus.png');
  lightbulb = loadImage('Assets/Light_Bulb.png');
  healthAppLogo = loadImage('Assets/Apple_Health.png');
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
  
}

function changeBG() {
  val1 = random(255);
  val2 = random(255);
  val3 = random(255);
  background(val1, val2, val3);
}

function addApps() {
  pg.clear();
  
  pg.circle(80, 30, 20);
}

function draw() {
  
  
  pg.image(healthAppLogo, 0, pg.height-550, 85, 85);
  
  c = color(255, 255, 255);
  pg.fill(c);
  pg.square(13, pg.height-470, 60, 0, 15);
  pg.image(youtubeAppLogo, 13, pg.height-469, 60, 60);
  
  image(capture, 20, 20, 1240, 680);
  image(pg, 20, 20, 1240, 680);
  
}
