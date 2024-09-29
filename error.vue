<template>
  <div class="text-themeText w-screen h-screen flex flex-col justify-center items-center font-bold">
    <div class="text-4xl mb-5">！！發生錯誤！！</div>
    <div class="text-2xl">請稍後再試</div>
  </div>
</template>
<script setup>
defineProps({ error: Object })
</script>
