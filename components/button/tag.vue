<template>
  <button
    v-ripple
    class="flex flex-row w-auto justify-between rounded-xl px-2 py-2 duration-300 ease-in font-bold cursor-pointer border text-nowrap bg-white hover:bg-blue-400 hover:text-white hover:scale-95 md:w-full"
  >
    <div>{{ props.tag }}</div>
    <div>({{ props.count }})</div>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  tag: string;
  count: number;
}
const props = withDefaults(defineProps<IProps>(), {
  tag: "",
  count: 0,
});
</script>

<style scoped lang="scss"></style>
