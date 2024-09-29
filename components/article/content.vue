<template>
  <CardColorful>
    <div class="w-full min-h-80 p-5" v-if="props.data.id">
      <ArticleInfo
        :title="props.data.title"
        :created_at="props.data.created_at"
        :share_count="props.data.share_count"
        :watch_count="props.data.watch_count"
        :is-share="true"
      />
      <div v-html="props.data.content" class="content"></div>
    </div>
  </CardColorful>
</template>

<script setup lang="ts">
import type { IArticle } from "~/types/article/article";

interface IProps {
  data: IArticle;
}

const props = withDefaults(defineProps<IProps>(), {});
</script>

<style scoped lang="scss">
.content {
  word-break: break-all;

  :deep(ul),
  :deep(ol) {
    @apply list-outside pl-6;
  }

  :deep(ul) {
    @apply list-disc;
  }

  :deep(ol) {
    @apply list-decimal;
  }

  :deep(ul li),
  :deep(ol li) {
    @apply relative pl-1 min-h-[1rem] py-1;
  }

  :deep(ul li::before),
  :deep(ol li::before) {
    @apply absolute left-0 top-0 h-full flex items-center;
  }

  :deep(ol) {
    counter-reset: list-counter;
  }
}
</style>
