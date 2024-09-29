<template>
  <CardColorful>
    <div class="p-4">
      <div class="flex items-center gap-2">
        <Icon name="octicon:octoface-16" />
        <h1 class="font-bold text-orange-500">
          {{ props.articleComment.name }}
        </h1>
      </div>

      <div class="text-sm text-gray-400">
        <Icon name="material-symbols:calendar-month-sharp" />
        {{
          dayjs(props.articleComment.created_at * 1000).format(
            "YYYY/MM/DD HH:mm:DD"
          )
        }}
      </div>
      <hr />
      <div v-html="props.articleComment.content"></div>
      <template
        v-if="
          props.articleComment.replies &&
          props.articleComment.replies.length > 0
        "
      >
        <ArticleMessage
          v-for="item in props.articleComment.replies"
          :article-comment="item"
          :first-comment="false"
        />
      </template>
      <template v-if="props.firstComment">
        <ArticleCommentEdit />
      </template>
    </div>
  </CardColorful>
</template>

<script setup lang="ts">
import dayjs from "#build/dayjs.imports.mjs";
import type { IArticleComment } from "~/types/article/article";

interface IProps {
  articleComment: IArticleComment;
  firstComment?: boolean;
}

const props = withDefaults(defineProps<IProps>(), { firstComment: true });
</script>

<style scoped lang="scss"></style>
