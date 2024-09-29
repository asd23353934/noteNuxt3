<template>
  <div class="overflow-hidden">
    <div
      @click="toggle"
      class="bg-gray-100 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-colors duration-200"
    >
      <span class="font-medium">{{ props.title }}</span>
      <svg
        class="w-5 h-5 transition-transform duration-200"
        :class="{ 'transform rotate-180': isExpanded }"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-show="isExpanded" class="px-4 py-3">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
}
const props = withDefaults(defineProps<IProps>(), {
  title: "",
});

const isExpanded = ref(false);

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
