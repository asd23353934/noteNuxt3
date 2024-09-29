<template>
  <canvas class="fixed top-0 left-0 -z-10 w-full h-full" ref="canvas"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationId: number | null = null;
let lastTime = 0;
let lastBallDropTime = 0;
const balls: Ball[] = [];
const maxBalls = 150;
const ballDropInterval = 1000;
const ballLifespan = 180000;
let mouseX = -1000;
let mouseY = -1000;
const mouseInfluenceRadius = 100;

class Ball {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  mass: number;
  isResting: boolean;
  creationTime: number;

  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = `hsl(${Math.random() * 360}, 50%, 50%, 0.3)`;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = 0;
    this.mass = radius * radius * Math.PI;
    this.isResting = false;
    this.creationTime = Date.now();
  }

  update(deltaTime: number, width: number, height: number) {
    this.vy += 0.001 * deltaTime;
    this.x += this.vx * deltaTime * 0.1;
    this.y += this.vy * deltaTime * 0.1;

    if (this.y + this.radius > height) {
      this.y = height - this.radius;
      this.vy *= -0.6;
      this.vx *= 0.95;
    }

    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.vx *= -1;
      this.x = Math.max(this.radius, Math.min(width - this.radius, this.x));
    }

    this.isResting = false;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  isExpired(): boolean {
    return Date.now() - this.creationTime > ballLifespan;
  }
}

function createBall(width: number, height: number) {
  if (balls.length < maxBalls) {
    const radius = Math.random() * 20 + 10;
    const x = Math.random() * (width - radius * 2) + radius;
    const y = radius;
    balls.push(new Ball(x, y, radius));
  }
}

function checkCollision(ball1: Ball, ball2: Ball) {
  const dx = ball2.x - ball1.x;
  const dy = ball2.y - ball1.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < ball1.radius + ball2.radius) {
    const angle = Math.atan2(dy, dx);
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    let vx1 = ball1.vx * cos + ball1.vy * sin;
    let vy1 = ball1.vy * cos - ball1.vx * sin;
    let vx2 = ball2.vx * cos + ball2.vy * sin;
    let vy2 = ball2.vy * cos - ball2.vx * sin;

    const vxTotal = vx1 - vx2;
    vx1 =
      ((ball1.mass - ball2.mass) * vx1 + 2 * ball2.mass * vx2) /
      (ball1.mass + ball2.mass);
    vx2 = vxTotal + vx1;

    ball1.vx = vx1 * cos - vy1 * sin;
    ball1.vy = vy1 * cos + vx1 * sin;
    ball2.vx = vx2 * cos - vy2 * sin;
    ball2.vy = vy2 * cos + vx2 * sin;

    const overlap = (ball1.radius + ball2.radius - distance) / 2;
    ball1.x -= overlap * cos;
    ball1.y -= overlap * sin;
    ball2.x += overlap * cos;
    ball2.y += overlap * sin;
  }
}

function checkMouseCollision(ball: Ball) {
  const dx = mouseX - ball.x;
  const dy = mouseY - ball.y;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < mouseInfluenceRadius) {
    const angle = Math.atan2(dy, dx);
    const force = 2 * (1 - distance / mouseInfluenceRadius);
    ball.vx -= Math.cos(angle) * force;
    ball.vy -= Math.sin(angle) * force;
    ball.isResting = false;
  }
}

function animate(time: number) {
  if (!canvas.value || !ctx) return;

  const deltaTime = time - lastTime;
  lastTime = time;

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  for (let i = balls.length - 1; i >= 0; i--) {
    if (balls[i].isExpired()) {
      balls.splice(i, 1);
    } else {
      balls[i].update(deltaTime, canvas.value.width, canvas.value.height);
      checkMouseCollision(balls[i]);
      for (let j = i + 1; j < balls.length; j++) {
        checkCollision(balls[i], balls[j]);
      }
      balls[i].draw(ctx);
    }
  }

  if (time - lastBallDropTime > ballDropInterval) {
    createBall(canvas.value.width, canvas.value.height);
    lastBallDropTime = time;
  }

  animationId = requestAnimationFrame(animate);
}

function resizeCanvas() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
  }
}

function handleMouseMove(event: MouseEvent) {
  if (canvas.value) {
    const rect = canvas.value.getBoundingClientRect();
    const scaleX = canvas.value.width / rect.width;
    const scaleY = canvas.value.height / rect.height;

    mouseX = (event.clientX - rect.left) * scaleX;
    mouseY = (event.clientY - rect.top) * scaleY;
  }
}

function handleMouseLeave() {
  mouseX = -1000;
  mouseY = -1000;
}

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext("2d");
    resizeCanvas();
    animate(0);
  }

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeCanvas);
  window.removeEventListener("mousemove", handleMouseMove);
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
  }
});
</script>
