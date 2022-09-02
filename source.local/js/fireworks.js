var canvas = document.createElement("canvas");
canvas.style.position = "fixed";
canvas.style.pointerEvents = "none";
canvas.style.left = 0;
canvas.style.top = 0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var particlesArray = [];
class Particle {
  constructor(t, a) {
    this.x = t;
    this.y = a;
    this.color = Math.random() * 255 | 0;
    this.vx = .5 - Math.random();
    this.vy = .5 - Math.random();
    this.age = Math.random() * 100
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += .01;
    this.age--;
    this.color++
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "hsla(" + this.color % 255 + "deg,50%,50%,.3)";
    ctx.arc(this.x, this.y, this.color % 3, Math.PI * 2, false);
    ctx.fill()
  }
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var t = 0; t < particlesArray.length; t++) {
    var a = particlesArray[t];
    a.update();
    a.draw();
    if (a.age < 0) {
      particlesArray.splice(t, 1)
    }
  }
}
window.addEventListener("mousemove", function(t) {
  for (var a = 0; a < 7; a++) {
    particlesArray.push(new Particle(t.x,t.y))
  }
});
window.addEventListener("click", function(t) {
  for (var a = 0; a < 77; a++) {
    particlesArray.push(new Particle(t.x,t.y))
  }
});
setInterval(draw, 10);
