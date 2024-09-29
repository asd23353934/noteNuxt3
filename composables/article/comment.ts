import { CreateCommentAPI, GetArticleCommentsAPI } from "~/api/article";
import stores from "~/stores";
import type {
  IArticleComment,
  IArticleCommentBody,
} from "~/types/article/article";

export const useArticleComment = () => {
  const initArticleCommentBody: IArticleCommentBody = {
    content: "",
    name: stores.user().GetUserName(),
    article_id: "",
  };
  const createArticleCommentBody = reactive<IArticleCommentBody>(
    HSINDataUtil.deepCopy(initArticleCommentBody)
  );
  const isArticleCommentSend = computed(
    () => !createArticleCommentBody.content || !createArticleCommentBody.name
  );
  const articleComments = ref<IArticleComment[]>([]);

  const getArticleComments = async (id: string) => {
    const { data } = await GetArticleCommentsAPI(id);
    articleComments.value = data ?? [];
    articleComments.value.sort((a, b) =>
      a.created_at > b.created_at ? -1 : 1
    );
    articleComments.value.forEach((item) => {
      if (!item.replies || item.replies.length <= 0) return;
      item.replies.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
    });
  };

  const createArticleComment = async () => {
    if (!createArticleCommentBody.name) {
      stores.toast().SetToast({
        message: "新增失敗，缺少匿名",
        type: "error",
      });
      return false;
    }
    if (!createArticleCommentBody.content) {
      stores.toast().SetToast({
        message: "新增失敗，缺少內容",
        type: "error",
      });
      return false;
    }
    const { error } = await CreateCommentAPI(createArticleCommentBody);
    if (error) {
      stores.toast().SetToast({
        message: "新增失敗，請稍後再試",
        type: "error",
      });
      return false;
    }
    stores.toast().SetToast({
      message: "回覆成功",
      type: "success",
    });
    return true;
  };

  const resetArticleComment = () => {
    Object.assign(
      createArticleCommentBody,
      HSINDataUtil.deepCopy(initArticleCommentBody)
    );
    articleComments.value = [];
  };

  return {
    articleComments,
    createArticleCommentBody,
    isArticleCommentSend,
    createArticleComment,
    getArticleComments,
    resetArticleComment,
  };
};
