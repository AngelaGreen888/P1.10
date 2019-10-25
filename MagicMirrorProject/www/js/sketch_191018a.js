let capture;
let pg;

let plus;
var plusButton;
var lightButton;
var healthButton;
var youtubeButton;

var drawApps = false;

function setup() {
  createCanvas(1280, 720);
  background(0,100,120);
  
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
  select('#test', HTMLElement).position(100,100);
  select('#twitter', HTMLElement).position(pg.width-280, pg.height-280);
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

function draw() {
  image(capture, 20, 20, 1240, 680);
  image(pg, 20, 20, 1240, 680);
  
  if(drawApps == true) {
    c = color(0,0,0,2);
    pg.fill(c);
    pg.rect(0, 0, pg.width, pg.height);
  }
  
  
}
