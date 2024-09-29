<template>
  <div class="flex flex-row overflow-auto mb-2 md:flex-col">
    <template v-for="item in props.items" :key="item.tag">
      <NuxtLink :to="`/${item.tag}`">
        <ButtonTag
          class="mt-1 mr-2 md:mr-0"
          :class="
            tagParams == item.tag
              ? 'bg-gradient-to-r from-purple-500 to-pink-500'
              : ''
          "
          :tag="item.tag"
          :count="item.count"
        />
      </NuxtLink>
    </template>
    <div class="hidden">{{ tagParams }}</div>
  </div>
</template>

<script setup lang="ts">
import type { IArticleTagInfo } from "~/types/article/article";

interface IProps {
  items: IArticleTagInfo[];
}

const props = withDefaults(defineProps<IProps>(), {
  items: () => [],
});
const { tagParams } = useParams();
</script>

<style scoped lang="scss"></style>
