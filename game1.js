
var canvas = document.getElementById('thecanvas');
var contex = canvas.getContext('2d');
var time = Date.now();
var sprite = {
  x: 200,
  y: 200,
  width: 50,
  height: 50,
  speed: 200,
  color: '#f00'
}

var keysdown = {};

window.addEventListener('keydown', function(key) {
  keysdown[key.keyCode] = true;
});

window.addEventListener('keyup', function(key) {
  delete keysdown[key.keyCode];
});

function fixerror() {
  
}

function update(mod) {
  if (39 in keysdown) {
    sprite.x += sprite.speed * mod;
  }
  if (37 in keysdown) {
    sprite.x -= sprite.speed * mod;
  }
  if (40 in keysdown) {
   sprite.y += sprite.speed * mod;
  }
  if (38 in keysdown) {
    sprite.y -= sprite.speed * mod;
  }
}

function render() {
  contex.fillStyle = '#000';
  contex.fillRect(0, 0, canvas.width, canvas.height);
  contex.fillStyle = sprite.color;
  contex.fillRect(sprite.x, sprite.y, sprite.width, sprite.height);
}

function run() {
  update((Date.now() - time) / 1000);
  render();
  time = Date.now();
}

setInterval(run, 10);
