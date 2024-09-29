<template>
  <Transition
    enter-active-class="transition ease-out duration-300 transform"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="toast"
      :class="[
        'fixed bottom-4 right-4 px-4 py-2 rounded-md text-white z-50',
        {
          'bg-green-500': toast.type === 'success',
          'bg-red-500': toast.type === 'error',
          'bg-blue-500': toast.type === 'info',
        },
      ]"
    >
      {{ toast.message }}
    </div>
  </Transition>
</template>
<script setup lang="ts">
import stores from "~/stores";

const toast = computed(() => stores.toast().GetToast());
</script>
