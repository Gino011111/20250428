let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#d4a373');
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide();
}

function draw() {
  background('#d4a373');
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2); 
  //將影像放在畫面中間
}

function windowResized() { //畫面大小改變時
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
}
