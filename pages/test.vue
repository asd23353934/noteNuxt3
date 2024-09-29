<template>
  <div>test</div>
</template>

<script setup lang="ts">
const { getArticleTagInfos, articleTagInfos } = useArticleTag();
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.apiBackend || import.meta.env.VITE_API_BACKEND);
const init = async () => {
  await getArticleTagInfos();
  console.log(articleTagInfos.value);
};
init();
</script>

<style scoped lang="scss"></style>
