let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#d4a373');
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide();

  // 建立與視訊畫面一樣大小的 Graphics
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.clear(); // 確保背景透明
}

function draw() {
  background('#d4a373');

  // 繪製視訊畫面
  translate(width, 0); // 將原點移到畫布右上角
  scale(-1, 1); // 水平翻轉畫布
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);

  // 在 overlayGraphics 上繪製網格
  overlayGraphics.background(0); // 設定背景為黑色
  overlayGraphics.noStroke();

  for (let y = 0; y < overlayGraphics.height; y += 20) {
    for (let x = 0; x < overlayGraphics.width; x += 20) {
      // 從 capture 中取得對應位置的顏色
      let col = capture.get(x, y);
      overlayGraphics.fill(col);
      overlayGraphics.ellipse(x + 10, y + 10, 15, 15); // 繪製圓形
    }
  }

  // 將 overlayGraphics 顯示在視訊畫面上
  image(
    overlayGraphics,
    (width - capture.width) / 2,
    (height - capture.height) / 2
  );
}

function windowResized() { // 畫面大小改變時
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);

  // 重新調整 overlayGraphics 的大小
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.clear();
}
