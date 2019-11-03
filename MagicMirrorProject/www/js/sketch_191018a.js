let capture;
let pg;

let plus;
var plusButton;
var healthButton;
var weather;
var bigWeather;

var removeCalendar = false;
var removeTime = false;

var displayHealth = false;
var sleepHealth = true;
var weightHealth = true;
var caloriesHealth = true;
var workOutHealth = false;

var onHomePage = true;
var health = false;
var youtube = false;
var mail = false;
var facebook = false;
var instagram = false;
var linkdin = false;
var snapchat = false;
var spotify = false;
var messaging = false;
var twitter = false;

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

var x, y, w, h, xx, yy;          // Location and size
var offsetX, offsetY, offsetXX, offsetYY;    // Mouseclick offset
var a, b, d, e;

var colorBack = 'violet';
function $(selector) { return document.querySelector(selector); }
const parentCustom = $('#custom'),
    popupCustom = new Picker({
      parent: parentCustom,
      popup: 'top',
      color: 'violet',
      //alpha: false,
      //editor: false,
      editorFormat: 'rgb',
      onDone: function(color) {
        colorBack = color.rgbaString;
        changeBG();
      },
    });

function setup() {
  createCanvas(1280, 720);
  background(colorBack);
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
  select('#custom', HTMLElement).position(82, pg.height-64);
  
  healthButton = createImg('Assets/Apple_Health.png');
  healthButton.position(15, pg.height-500);
  healthButton.size(80, 80);
  healthButton.mousePressed(setUpHealth);
  
  select('#spotify', HTMLElement).position(30, pg.height-240);
  select('#twitter', HTMLElement).position(pg.width-280, pg.height-230);
  select('#fgid_c594f4542f3268d5003c41ac8', HTMLElement).position(pg.width-280, pg.height-460)
  weather = select('#m-booked-bl-simple-10717', HTMLElement).position(pg.width/2-80, 75);
  weather.mousePressed(expandWeather);
  bigWeather = select('#m-booked-weather-bl250-84348', HTMLElement).position(pg.width/2-125, 75);
  bigWeather.hide();
  bigWeather.mousePressed(minimizeWeather);

  calendar();
  time();
  onHomePage = true;

    drawNotification();

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
  background(colorBack);
}

function addApps() {
  hideAllApps();
  onHomePage = false;

  health2Button = createImg('Assets/Apple_Health.png');
  health2Button.position(45, pg.height-675);
  health2Button.size(50, 50);
  health2Button.mousePressed(function () {addAppsToHomePage("Health");});

  youtube2Button = createImg('Assets/Youtube.png');
  youtube2Button.position(45, pg.height-610);
  youtube2Button.size(50, 50);
  youtube2Button.mousePressed(function () {addAppsToHomePage("Youtube");});

  emailButton = createImg('Assets/E_Mail.png');
  emailButton.position(45, pg.height-545);
  emailButton.size(50, 50);
  emailButton.mousePressed(function () {addAppsToHomePage("Email");});

  facebookButton = createImg('Assets/Facebook.png');
  facebookButton.position(45, pg.height-480);
  facebookButton.size(50, 50);
  facebookButton.mousePressed(function () {addAppsToHomePage("Facebook");});

  instagramButton = createImg('Assets/Instagram.png');
  instagramButton.position(45, pg.height-415);
  instagramButton.size(50, 50);
  instagramButton.mousePressed(function () {addAppsToHomePage("Instagram");});

  linkedInButton = createImg('Assets/Linkedin.png');
  linkedInButton.position(45, pg.height-350);
  linkedInButton.size(50, 50);
  linkedInButton.mousePressed(function () {addAppsToHomePage("LinkedIn");});

  snapchatButton = createImg('Assets/Snapchat.png');
  snapchatButton.position(45, pg.height-285);
  snapchatButton.size(50, 50);
  snapchatButton.mousePressed(function () {addAppsToHomePage("Snapchat");});

  spotifyButton = createImg('Assets/Spotify.png');
  spotifyButton.position(45, pg.height-220);
  spotifyButton.size(50, 50);
  spotifyButton.mousePressed(function () {addAppsToHomePage("Spotify");});

  telegramButton = createImg('Assets/Telegram.png');
  telegramButton.position(45, pg.height-155);
  telegramButton.size(50, 50);
  telegramButton.mousePressed(function () {addAppsToHomePage("Messaging");});

  twitterButton = createImg('Assets/Twitter.png');
  twitterButton.position(45, pg.height-90);
  twitterButton.size(50, 50);
  twitterButton.mousePressed(function () {addAppsToHomePage("Twitter");});

  backButton = createButton('back');
  backButton.position(1200, pg.height-50);
  backButton.size(50, 10);
  backButton.mousePressed(backToMirror);

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
  if(displayHealth == true){
    let d = dist(mouseX, mouseY, 105, 110);
    if (d < 90) {
      sleepHealth = !sleepHealth;
      drawHealth();
    }
    let a = dist(mouseX, mouseY, 310, 210);
    if (a < 90) {
      weightHealth = !weightHealth;
      drawHealth();
    }
    let b = dist(mouseX, mouseY, 105, 375);
    if (b < 90) {
      if( caloriesHealth == false){
        workOutHealth = !workOutHealth;
      }
      caloriesHealth = !caloriesHealth;
      drawHealth();
    }
  }
  else{
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
    }}
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

// ---------------------------------------------------------------
// D R A W   H E A L T H   I N F O
// ---------------------------------------------------------------

function drawCircles(){
  strokeWeight(0);
  pg.fill('rgba(31,31,31,0.75)' );
  pg.circle(105, 110, 90);
  pg.circle(310, 210, 90);
  pg.circle(305, 475, 90);
  pg.circle(105, 375, 90);
}

function setUpHealth() {
  hideHalfApp();
  displayHealth = true;

  backButton = createButton('back');
  backButton.position(30, pg.height-50);
  backButton.size(50, 10);
  backButton.mousePressed(backToBlank);

  drawHealth();
}

function drawHealth() {
  hideHalfApp();
  drawCircles();

  strokeWeight(1);
  pg.fill(255);
  pg.textSize(20);
  pg.textFont('Helvetica Neue');
  pg.text('Mirror Time', 255, 425);
  pg.textSize(30);
  pg.text("2:" +minute() + ":" + second() + " hrs", 235, 480);

  if(sleepHealth == true){
    pg.textSize(20);
    pg.text('Sleep', 80, 60);
    pg.textSize(40);
    pg.text('8:32 hrs', 35, 125);
  }
  else{
    pg.textSize(20);
    pg.text('Last Week\'s\n   Average', 55, 60);
    pg.textSize(40);
    pg.text('5:32 hrs', 35, 125);
  }
  if(weightHealth == true){
    pg.textSize(20);
    pg.text('Weight', 280, 160);
    pg.textSize(40);
    pg.text('248 lbs', 245, 225);
  }
  else{
    pg.textSize(20);
    pg.text('Last Week\'s\n   Average', 255, 160);
    pg.textSize(40);
    pg.text('255 lbs', 245, 225);
  }
  if(caloriesHealth == true && workOutHealth==false){
    pg.textSize(20);
    pg.text('Steps', 80, 325);
    pg.textSize(40);
    pg.text('4503', 60, 390);
  }
  else if (caloriesHealth == false && workOutHealth==false ){
    pg.textSize(20);
    pg.text('Stood', 80, 325);
    pg.textSize(40);
    pg.text('9:43 hrs', 35, 390);
  }
  else if (caloriesHealth == true && workOutHealth==true) {
    pg.textSize(20);
    pg.text('Workout Time', 45, 325);
    pg.textSize(40);
    pg.text('9:43 hrs', 35, 390);
  }
  else {
    pg.textSize(20);
    pg.text('Graph', 80, 325);
  }
}

function backToBlank(){
  setup();
  if(health == true){
    health2Button.show();
  }
  if(youtube == true){
    youtube2Button.show();
  }
  if(mail == true){
    emailButton.show();
  }
  if(facebook == true){
    facebookButton.show();
  }
  if(instagram == true){
    instagramButton.show();
  }
  if(linkdin == true){
    linkedInButton.show();
  }
  if(snapchat == true){
    snapchatButton.show();
  }
  if(spotify == true){
    spotifyButton.show();
  }
  if(messaging == true){
    telegramButton.show();
  }
  if(twitter == true){
    twitterButton.show();
  }
  plusButton.show();
  select('#custom', HTMLElement).show();
  healthButton.show();
  backButton.hide();
  select('#twitter', HTMLElement).show();
  select('#spotify', HTMLElement).show();
  select('#fgid_c594f4542f3268d5003c41ac8', HTMLElement).show();
  select('#m-booked-bl-simple-10717', HTMLElement).show();
  removeTime = false;
  removeCalendar = false;
  displayHealth = false;
}

function hideHalfApp() {
  if(health == true){
    health2Button.hide();
  }
  if(youtube == true){
    youtube2Button.hide();
  }
  if(mail == true){
    emailButton.hide();
  }
  if(facebook == true){
    facebookButton.hide();
  }
  if(instagram == true){
    instagramButton.hide();
  }
  if(linkdin == true){
    linkedInButton.hide();
  }
  if(snapchat == true){
    snapchatButton.hide();
  }
  if(spotify == true){
    spotifyButton.hide();
  }
  if(messaging == true){
    telegramButton.hide();
  }
  if(twitter == true){
    twitterButton.hide();
  }

  plusButton.hide();
  select('#custom', HTMLElement).hide();
  healthButton.hide();
  select('#spotify', HTMLElement).hide();
  pg.clear();
  removeCalendar = true;
}

// ---------------------------------------------------------------
// A D D   A P P S   T O    H O M E P A G E
// ---------------------------------------------------------------

function addAppsToHomePage (name) {
  if(onHomePage == false){
 switch(name) {
   case "Health":
     health = true;
     backToMirror();
     break;
   case "Youtube":
     youtube = true;
     backToMirror();
     break;
   case "Mail":
     mail = true;
     backToMirror();
     break;
   case "Facebook":
     facebook = true;
     backToMirror();
     break;
   case "Instagram":
     instagram = true;
     backToMirror();
     break;
   case "LinkedIn":
     linkdin = true;
     backToMirror();
     break;
   case "Snapchat":
     snapchat = true;
     backToMirror();
     break;
   case "Spotify":
     spotify = true;
     backToMirror();
     break;
   case "Messaging":
     messaging = true;
     backToMirror();
     break;
   case "Twitter":
     twitter = true;
     backToMirror();
     break;
 };
  }
  else{
    // Draggable code comes here
  }
}

function backToMirror(){
  setup();
  if(health == true){
        health2Button.position(pg.width/2, pg.height/2);
  }
  else{
  health2Button.hide();
  }
  if(youtube == true){
    youtube2Button.position(pg.width/2, pg.height/2);
  }
  else{
    youtube2Button.hide();
  }
  if(mail == true){
        emailButton.position(pg.width/2, pg.height/2);
  }
  else{
  emailButton.hide();
  }
  if(facebook == true){
        facebookButton.position(pg.width/2, pg.height/2);
  }
  else{
  facebookButton.hide();
  }
  if(instagram == true){
        instagramButton.position(pg.width/2, pg.height/2);
  }
  else{
  instagramButton.hide();
  }
  if(linkdin == true){
        linkedInButton.position(pg.width/2, pg.height/2);
  }
  else{
  linkedInButton.hide();
  }
  if(snapchat == true){
        snapchatButton.position(pg.width/2, pg.height/2);
  }
  else{
  snapchatButton.hide();
  }
  if(spotify == true){
        spotifyButton.position(pg.width/2, pg.height/2);
  }
  else{
  spotifyButton.hide();
  }

  if(messaging == true){
        telegramButton.position(pg.width/2, pg.height/2);
  }
  else{
  telegramButton.hide();
  }
  if(twitter == true){
        twitterButton.position(pg.width/2, pg.height/2);
  }
  else{
  twitterButton.hide();
  }
  backButton.hide();
  plusButton.show();
  select('#custom', HTMLElement).show();
  healthButton.show();
  select('#twitter', HTMLElement).show();
  select('#spotify', HTMLElement).show();
  select('#fgid_c594f4542f3268d5003c41ac8', HTMLElement).show();
  select('#m-booked-bl-simple-10717', HTMLElement).show();
  removeTime = false;
  removeCalendar = false;
}

function hideAllApps() {
  if(health == true){
    health2Button.hide();
  }
  if(youtube == true){
    youtube2Button.hide();
  }
  if(mail == true){
    emailButton.hide();
  }
  if(facebook == true){
    facebookButton.hide();
  }
  if(instagram == true){
    instagramButton.hide();
  }
  if(linkdin == true){
    linkedInButton.hide();
  }
  if(snapchat == true){
    snapchatButton.hide();
  }
  if(spotify == true){
    spotifyButton.hide();
  }
  if(messaging == true){
    telegramButton.hide();
  }
  if(twitter == true){
    twitterButton.hide();
  }

  plusButton.hide();
  select('#custom', HTMLElement).hide();
  healthButton.hide();
  select('#twitter', HTMLElement).hide();
  select('#spotify', HTMLElement).hide();
  select('#fgid_c594f4542f3268d5003c41ac8', HTMLElement).hide();
  select('#m-booked-bl-simple-10717', HTMLElement).hide();
  select('#m-booked-weather-bl250-84348', HTMLElement).position(pg.width/2-125, 75).hide();
  pg.clear();
  pg.background(0, 0, 0, 150);
  removeTime = true;
  removeCalendar = true;

}

// ---------------------------------------------------------------
// N O T I F I C A T I O N S
// ---------------------------------------------------------------

function drawNotification() {
    let c = color('rgba(31,31,31,0.75)');
    pg.fill(c);
    pg.rect(pg.width-268, pg.height-695, 258, 220);

    strokeWeight(1);
    pg.fill(255);
    pg.textSize(20);
    pg.textFont('Helvetica Neue');
    pg.text("Notifications", pg.width-193, pg.height-670);

    // Example notification
    pg.fill(35, 197, 82);
    pg.rect(pg.width-246, pg.height-655, 220, 55, 10);

    // Sample text for the top notification
    strokeWeight(1);
    pg.fill(255);
    pg.textSize(16);
    pg.textFont('Helvetica Neue');
    pg.text("Snapchat \n New snap from Jenny.", pg.width-210, pg.height-632);

    // Example notification
    pg.fill(35, 197, 82);
    pg.rect(pg.width-246, pg.height-595, 220, 55, 10);

    // Sample text for the second notification
   strokeWeight(1);
   pg.fill(255);
   pg.textSize(16);
   pg.textFont('Helvetica Neue');
   pg.text("        Instagram \n Someone started following you.", pg.width-240, pg.height-572);

}

