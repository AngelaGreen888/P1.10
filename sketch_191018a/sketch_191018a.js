let capture;
let pg;
let plus;

function setup() {
  createCanvas(1280, 720);
  capture = createCapture(VIDEO);
  pg = createGraphics(1280, 720);
  
  plus = loadImage('Assets/Plus.png');
  lightbulb = loadImage('Assets/Light_Bulb.png');
  healthAppLogo = loadImage('Assets/Apple_Health.png');
  youtubeAppLogo = loadImage('Assets/Youtube.png');
  
  capture.size(1280, 720);
  capture.hide();
}

function draw() {
  background(0,100,120);
  pg.background(0, 0, 0, 0);
  pg.noStroke();
  let c = color(255, 204, 0);
  pg.fill(c);
  pg.circle(40, pg.height-40, 30);
  pg.image(plus, 15, pg.height-65, 50, 50);
  
  c = color(255, 204, 0);
  pg.fill(c);
  pg.circle(110, pg.height-40, 30);
  pg.image(lightbulb, 85, pg.height-65, 50, 50);
  
  pg.image(healthAppLogo, 0, pg.height-550, 85, 85);
  
  c = color(255, 255, 255);
  pg.fill(c);
  pg.square(13, pg.height-470, 60, 0, 15);
  pg.image(youtubeAppLogo, 13, pg.height-469, 60, 60);
  
  image(capture, 20, 20, 1240, 680);
  image(pg, 20, 20, 1240, 680);
  
}
