<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <ArticleDescription
        class="w-full mb-5"
        v-for="item in articleDescriptionsByTag"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});
const { tagParams } = useParams();
useHead({
  title: `${tagParams.value} - HsinHe’s Blog`,
});

const { articleDescriptionsByTag, getArticleDescriptions } =
  useArticleDescription();
const init = async () => {
  await getArticleDescriptions(tagParams.value);
};
init();
</script>

<style scoped lang="scss"></style>
