<template>
  <div class="flex sticky top-0 shadow bg-gray-50 z-20">
    <div class="container mx-auto px-4 py-1">
      <NuxtLink to="/">
        <h1 class="text-3xl font-bold underline">{{ title }}</h1>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title?: string;
}
const { title = "HsinHe’s Blog" } = defineProps<IProps>();
</script>

<style scoped lang="scss"></style>
