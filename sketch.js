var fixedBox, movingBox;

function setup() {
  createCanvas(800, 400);
  fixedBox = createSprite(400, 200, 50, 50);
  fixedBox.debug = true;
  movingBox = createSprite(200, 200, 50, 50);
  movingBox.debug = true;
}

function draw() {
  background(255, 255, 255);

  movingBox.x = mouseX;
  movingBox.y = mouseY;

  if (fixedBox.x - movingBox.x === fixedBox.width / 2 + movingBox.width / 2 ||
    movingBox.x - fixedBox.x === fixedBox.width / 2 + movingBox.width / 2 ||
    fixedBox.y - movingBox.y === fixedBox.height / 2 + movingBox.height / 2 ||
    movingBox.y - fixedBox.y === fixedBox.height / 2 + movingBox.height / 2) {
    movingBox.shapeColor = "green";
    fixedBox.shapeColor = "green";
  } else {
    movingBox.shapeColor = "black";
    fixedBox.shapeColor = "black";
  }

  drawSprites();
}