<template>
  <div class="w-10 rounded-xl bg-blue-600 text-white font-bold text-center">
    {{ props.text }}
  </div>
</template>

<script setup lang="ts">
interface IProps {
  text: string;
}
const props = withDefaults(defineProps<IProps>(), {
  text: "",
});
</script>

<style scoped lang="scss"></style>
