let map;
let xPosition, yPosition;
xPosition = 1;
yPosition = 1;
map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  
];

function moveUp() {
  if (xPosition > 1 && map[xPosition - 1][yPosition] == 0) {
    xPosition--;
  } else if (xPosition == 1 && map[0][yPosition] == 0) {
    xPosition--;
  }
  console.log(xPosition);
  console.log(yPosition);
  movePosition(xPosition, yPosition);
}

function moveDown() {
  if (xPosition < 19 && map[xPosition + 1][yPosition] == 0) {
    xPosition++;
  } else if (xPosition == 19 && map[19][yPosition] == 0) {
    xPosition++;
  }
  console.log(xPosition);
  console.log(yPosition);
  movePosition(xPosition, yPosition);
}

function moveLeft() {
  if (yPosition > 1 && map[xPosition][yPosition - 1] == 0) {
    yPosition--;
  } else if (yPosition == 1 && map[xPosition][0] == 0) {
    yPosition--;
  }
  console.log(xPosition);
  console.log(yPosition);
  movePosition(xPosition, yPosition);
}

function moveRight() {
  if (yPosition < 19 && map[xPosition][yPosition + 1] == 0) {
    yPosition++;
  } else if (yPosition == 19 && map[xPosition][19] == 0) {
    console.log("You Win!");
   }
  console.log(xPosition);
  console.log(yPosition);
  movePosition(xPosition, yPosition);
}

document.addEventListener('keydown', function (event) {
  if (event.key == 'w') {
    moveUp();
    movePosition(xPosition,yPosition)
  } else if (event.key == 's') {
    moveDown();
    movePosition(xPosition,yPosition)
  } else if (event.key == 'a') {
    moveLeft();
    movePosition(xPosition,yPosition)
  } else if (event.key == 'd') {
    moveRight();
    movePosition(xPosition,yPosition)
  }
});
let img = document.createElement('img');
let w, h;
w = 5;
h = 5;
startBtn = document.querySelector('#start-btn');
a = document.querySelector('#h');
b = document.querySelector('#p');
function createWall(x, y) {
  let wall = document.createElement('div');
  wall.className = 'wall';
  wall.style.height = h + 'vh';
  wall.style.width = w + 'vw';
  wall.style.left = w * y + 'vw';
  wall.style.top = h * x + 'vh';
  document.body.appendChild(wall);
}
function createMap(){
for (let a = 0; a < map.length; a++) {
  for (let i = 0; i <map[a].length; i++) {
    if (map[a][i] == 1) {
      createWall(a, i);
    }
  }
}

img.src = "./img/sonic-ring.png"; 
img.id = "ring";
img.style.left = w  + 'vw';
img.style.top = h  + 'vh';
img.style.width = w + 'vw';
img.style.height = h + 'vh';
document.body.appendChild(img);
a.style.opacity = 0;
startBtn.style.opacity = 0;
b.style.opacity = 0;

}

startBtn.onclick = createMap;
function movePosition(x, y) {
  img.style.left = y * w + 'vw';
  img.style.top = x * h + 'vh';
}