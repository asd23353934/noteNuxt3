<template>
  <div
    ref="container"
    class="relative bg-white rounded-2xl shadow-lg p-1 overflow-hidden"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- 彩色散射效果 -->
    <canvas ref="canvas" class="absolute top-0 left-0 w-full h-full"></canvas>

    <!-- 內容 -->
    <div class="relative z-10 bg-white rounded-xl border overflow-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const container = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationFrameId: number | null = null;
let isHovering = false;
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;
let opacity = 0;

function resizeCanvas() {
  if (!container.value || !canvas.value || !ctx) return;
  canvas.value.width = container.value.offsetWidth;
  canvas.value.height = container.value.offsetHeight;
  draw();
}

function handleMouseMove(event: MouseEvent) {
  if (!container.value) return;
  const rect = container.value.getBoundingClientRect();
  targetX = event.clientX - rect.left;
  targetY = event.clientY - rect.top;
  isHovering = true;
  if (animationFrameId === null) {
    animationFrameId = requestAnimationFrame(updateAndDraw);
  }
}

function handleMouseLeave() {
  isHovering = false;
}

function updateAndDraw() {
  const ease = 0.1;
  currentX += (targetX - currentX) * ease;
  currentY += (targetY - currentY) * ease;

  if (isHovering) {
    opacity += (1 - opacity) * ease;
  } else {
    opacity -= opacity * ease;
  }

  draw();

  if (
    isHovering ||
    Math.abs(targetX - currentX) > 0.1 ||
    Math.abs(targetY - currentY) > 0.1 ||
    opacity > 0.01
  ) {
    animationFrameId = requestAnimationFrame(updateAndDraw);
  } else {
    animationFrameId = null;
  }
}

function draw() {
  if (!ctx || !canvas.value) return;

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);

  if (opacity < 0.01) return;

  const gradient = ctx.createRadialGradient(
    currentX,
    currentY,
    0,
    currentX,
    currentY,
    canvas.value.width * 0.6
  );
  gradient.addColorStop(0, `rgba(236, 72, 153, ${opacity * 0.7})`); // pink-500
  gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity * 0.5})`); // purple-500
  gradient.addColorStop(1, `rgba(59, 130, 246, 0)`); // blue-500

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
}

onMounted(() => {
  if (!canvas.value) return;
  ctx = canvas.value.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeCanvas);
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>
