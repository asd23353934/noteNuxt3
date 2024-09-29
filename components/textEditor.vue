<template>
  <client-only>
    <JoditEditor v-model="modelValue" :config="editorConfig" />
  </client-only>
</template>

<script setup lang="ts">
import "jodit/es2021/jodit.min.css";
import { JoditEditor } from "jodit-vue";
const modelValue = defineModel();
interface IProps {
  config?: any;
}
const { config = {} } = defineProps<IProps>();

const editorConfig = {
  placeholder: "请输入文章内容",
  language: "zh_cn",
  //限製字元數
  limitChars: false,
  ...config,
  // 这里可以添加默认配置
};
</script>

<style lang="scss">
.jodit-workplace {
  word-break: break-all;
  li {
    margin-left: 2rem !important;
    padding: 0 !important;
  }
  ul {
    li {
      list-style-type: disc !important;
    }
  }
}
</style>
