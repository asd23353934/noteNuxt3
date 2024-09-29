<template>
  <CardColorful>
    <div class="flex flex-col p-4 min-w-full min-h-52 flex-grow">
      <ArticleInfo
        :title="props.item.title"
        :created_at="props.item.created_at"
        :share_count="props.item.share_count"
        :watch_count="props.item.watch_count"
      />

      <p class="line-clamp-3">{{ props.item.description }}</p>
      <div class="mt-auto flex flex-row justify-between items-center">
        <NuxtLink
          class="mt-auto ml-auto cursor-pointer px-2 py-1 rounded-xl duration-300 hover:bg-blue-500 hover:text-white"
          :to="`${tagParams ?? props.item.tags[0]}/${props.item.id}`"
        >
          <IconMove>
            <template #text>
              <div>前往閱讀</div>
            </template>
            <template #icon>
              <Icon
                name="material-symbols:keyboard-double-arrow-right-rounded"
              ></Icon>
            </template>
          </IconMove>
        </NuxtLink>
      </div>
    </div>
  </CardColorful>
</template>

<script setup lang="ts">
import type { IArticleDescription } from "~/types/article/article";

interface IProps {
  item: IArticleDescription;
}

const props = withDefaults(defineProps<IProps>(), {});
const { tagParams } = useParams();
</script>

<style scoped lang="scss"></style>
