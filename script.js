
const goAheadBtn = document.getElementById("go-ahead");
if (goAheadBtn) {
  goAheadBtn.onclick = () => {
    window.location.href = "surprise.html";
  };
}

const yesBtn = document.getElementById("yes");
if (yesBtn) {
  yesBtn.onclick = () => {
    startConfetti();
    setTimeout(() => {
      window.location.href = "yes button.html";
    }, 2500);
  };
}

const noBtn = document.getElementById("no");
if (noBtn) {
  noBtn.onclick = () => {
    window.location.href = "no button.html";
  };

  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
}


const tryAgainLink = document.getElementById("try-again");
if (tryAgainLink){
  tryAgainLink.onclick = (e) => {
    window.location.href = "surprise.html";
  };
}

// -------------------------
// CONFETTI: only if canvas exists
const canvas = document.getElementById("confetti");
let ctx;
if (canvas) {
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class ConfettiParticle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      this.size = Math.random() * 8 + 4;
      this.speed = Math.random() * 3 + 2;
      this.angle = Math.random() * 360;
      this.color = `hsl(${Math.random() * 360}, 70%, 60%)`;
    }
    update() {
      this.y += this.speed;
      this.x += Math.sin(this.angle * Math.PI / 180) * 2;
      if (this.y > canvas.height) this.y = -this.size;
      if (this.x > canvas.width) this.x = 0;
      if (this.x < 0) this.x = canvas.width;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);
    }
  }

  let confettiArray = [];

  function startConfetti() {
    confettiArray = [];
    for (let i = 0; i < 150; i++) {
      confettiArray.push(new ConfettiParticle());
    }
    animateConfetti();
  }

  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiArray.forEach(p => p.update() || p.draw());
    requestAnimationFrame(animateConfetti);
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}                           

