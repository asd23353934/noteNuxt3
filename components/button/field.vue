<template>
  <button
    v-ripple
    class="flex flex-row items-center justify-around rounded-xl px-2 py-2 duration-300 ease-in font-bold border text-nowrap"
    :disabled="props.disabled"
    :class="{
      'opacity-50 cursor-auto': props.disabled,
      'hover:opacity-80 cursor-pointer': !props.disabled,
    }"
  >
    <Icon :name="props.icon" v-if="props.icon"></Icon>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  icon?: string;
  disabled?: boolean;
}
// const { icon = "", disabled = false } = defineProps<IProps>();
const props = withDefaults(defineProps<IProps>(), {
  icon: "",
  disabled: false,
});
</script>

<style scoped lang="scss"></style>
