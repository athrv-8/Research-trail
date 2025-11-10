// Navbar Toggle for Mobile
function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('show');
}

// Simple Login/Logout Simulation
const loginBtn = document.querySelector('.login-btn');
const logoutBtn = document.querySelector('.logout-btn');

loginBtn.addEventListener('click', () => {
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'inline-block';
  alert('Logged In Successfully!');
});

logoutBtn.addEventListener('click', () => {
  logoutBtn.style.display = 'none';
  loginBtn.style.display = 'inline-block';
  alert('Logged Out Successfully!');
});

// Hero Animation (Floating Dots)
const canvas = document.getElementById('hero-animation');
const ctx = canvas.getContext('2d');
let particlesArray;

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

function Particle(x, y, size, directionX, directionY) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.directionX = directionX;
  this.directionY = directionY;
}

Particle.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fill();
};

Particle.prototype.update = function() {
  if (this.x + this.size > canvas.width || this.x - this.size < 0) {
    this.directionX = -this.directionX;
  }
  if (this.y + this.size > canvas.height || this.y - this.size < 0) {
    this.directionY = -this.directionY;
  }
  this.x += this.directionX;
  this.y += this.directionY;
  this.draw();
};

function init() {
  particlesArray = [];
  for (let i = 0; i < 60; i++) {
    let size = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - size * 2);
    let y = Math.random() * (innerHeight - size * 2);
    let directionX = (Math.random() * 0.4) - 0.2;
    let directionY = (Math.random() * 0.4) - 0.2;
    particlesArray.push(new Particle(x, y, size, directionX, directionY));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
}

init();
animate();
      
