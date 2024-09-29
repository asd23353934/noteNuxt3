<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      >
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full m-4">
          <div class="flex justify-between items-center border-b p-4">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <button
              @click="$emit('update:modelValue', false)"
              class="text-gray-500 hover:text-gray-700"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div class="p-4">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const modelValue = defineModel();
defineProps({
  title: String,
});
</script>

<style scoped lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
