<template>
  <div>
    <h1 class="font-bold text-3xl break-all">
      {{ props.title }}
    </h1>
    <div class="flex gap-2">
      <div class="flex items-center gap-1">
        <Icon name="material-symbols:calendar-month-sharp" />
        <span> {{ $dayjs(props.created_at * 1000).format("YYYY/MM/DD") }}</span>
      </div>
      <div class="flex items-center gap-1">
        <Icon name="mdi:eye" />
        <span>{{ props.watch_count }}</span>
      </div>
      <div class="flex items-center gap-1" v-if="!isShare">
        <Icon name="mdi:share" />
        <span>{{ props.share_count }}</span>
      </div>
      <div v-else>
        <ArticleShareModal :shares="props.share_count" />
      </div>
    </div>
    <hr class="my-1" />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  created_at: number;
  watch_count: number;
  share_count: number;
  isShare?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {});
</script>

<style scoped lang="scss"></style>
