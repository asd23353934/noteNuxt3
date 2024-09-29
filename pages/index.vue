<template>
  <div class="flex flex-col justify-center items-center">
    <ArticleDescription
      class="w-full mb-5"
      v-for="item in articleDescriptions"
      :item="item"
    />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "main",
});
useHead({
  title: "HsinHe’s Blog",
  meta: [
    { name: "description", content: "主要分享個人學習與興趣的地方" },
    { property: "og:title", content: "HsinHe’s Blog" },
    { property: "og:description", content: "主要分享個人學習與興趣的地方" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
const { articleDescriptions, getArticleDescriptions } = useArticleDescription();
const init = async () => {
  await getArticleDescriptions();
};
init();
</script>
<style lang="scss" scoped></style>
