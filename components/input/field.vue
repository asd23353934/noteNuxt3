<template>
  <div>
    <label
      :for="lable"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >{{ lable }}</label
    >
    <input
      v-model="modelValue"
      :type="type"
      :id="lable"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
    />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  lable?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  type?: string;
}
const modelValue = defineModel();
const {
  lable = "",
  placeholder = "",
  disabled = false,
  required = true,
  type = "text",
} = defineProps<IProps>();
</script>

<style scoped lang="scss"></style>
