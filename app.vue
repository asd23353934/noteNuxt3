<template>
  <div>
    <BackgroundMain />
    <NuxtLayout>
      <Toast />
      <NuxtLoadingIndicator color="#41B883" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(
      () => console.log("register success"),
      (err) => console.log("register fail:", err)
    );
  }
});
</script>

<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
