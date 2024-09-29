<template>
  <button
    class="flex flex-row flex-nowrap items-center rounded-xl"
    @mousemove="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <div class="text-nowrap">
      <slot name="text"></slot>
    </div>

    <div class="relative overflow-hidden w-4 h-8">
      <div
        class="absolute inset-0 flex items-center"
        :class="
          isHovering
            ? 'animate-theme-RightToCenter'
            : 'animate-theme-LeftToRightInfinite'
        "
      >
        <slot name="icon"></slot>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
const isHovering = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
