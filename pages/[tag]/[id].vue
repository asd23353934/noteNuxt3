<template>
  <div>
    <ArticleContent :data="article" class="mb-5" />
    <ArticleCommentEdit />
    <template v-for="item in articleComments">
      <ArticleMessage class="mt-5" :article-comment="item" />
    </template>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "main",
});
const { idParams } = useParams();
const { article, getArticle, updateArticleWatchCount } = useArticle();
const { articleComments, getArticleComments } = useArticleComment();

const init = async () => {
  if (!idParams.value) return;
  await Promise.all([
    getArticle(idParams.value),
    getArticleComments(idParams.value),
    updateArticleWatchCount(idParams.value),
  ]);
  useHead({
    title: `${article.value.title} - HsinHe’s Blog`,
  });
};
init();
</script>

<style scoped lang="scss"></style>
