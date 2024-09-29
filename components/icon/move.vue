<template>
  <div
    class="flex flex-row flex-nowrap items-center"
    @mousemove="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div class="text-nowrap">
      <slot name="text"></slot>
    </div>

    <div class="relative overflow-hidden w-4 h-8">
      <div
        class="absolute inset-0 flex items-center animate-moveRightInfinite"
        :class="isHovering ? 'animate-moveLeft' : 'animate-moveRightInfinite'"
      >
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isHovering = ref<boolean>(false);
</script>

<style scoped lang="scss">
@keyframes moveRightInfinite {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes moveLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}

.animate-moveRightInfinite {
  animation: moveRightInfinite 1s linear infinite;
}
.animate-moveLeft {
  animation: moveLeft 0.5s ease-in;
}
</style>
