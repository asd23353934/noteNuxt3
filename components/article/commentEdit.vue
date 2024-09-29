<template>
  <Colorful>
    <ExpandableElement :title="'留言處'">
      <div class="p-2">
        <div class="flex flex-row justify-between items-end mb-2">
          <InputField lable="暱稱" v-model="createArticleCommentBody.name" />
          <ButtonField
            class="bg-green-400 text-white"
            :disabled="isArticleCommentSend"
            >送出</ButtonField
          >
        </div>

        <LazyTextEditor
          v-model="createArticleCommentBody.content"
          :config="{
            buttons: [
              'bold',
              'italic',
              'underline',
              '|',
              'ul',
              'ol',
              '|',
              'link',
            ],
          }"
        />
      </div>
    </ExpandableElement>
  </Colorful>
</template>

<script setup lang="ts">
import Colorful from "../card/colorful.vue";
interface IProps {
  parent_id?: string;
}

const props = withDefaults(defineProps<IProps>(), {});
const { idParams } = useParams();
const { createArticleCommentBody, isArticleCommentSend, createArticleComment } =
  useArticleComment();

const createComment = async () => {
  createArticleCommentBody.article_id = idParams.value;
  if (props.parent_id) createArticleCommentBody.parent_id = props.parent_id;
  await createArticleComment();
};
</script>

<style scoped lang="scss"></style>
