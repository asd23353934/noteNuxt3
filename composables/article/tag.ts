import { GetArticleTagsAPI } from "~/api/article";
import type { IArticleTagInfo } from "~/types/article/article";

export const useArticleTag = () => {
  const articleTagInfos = ref<IArticleTagInfo[]>([]);
  const getArticleTagInfos = async () => {
    const { data } = await GetArticleTagsAPI();
    articleTagInfos.value = data ?? [];
    if (articleTagInfos.value.length > 0) {
      articleTagInfos.value.sort((a, b) => a.tag.localeCompare(b.tag));
    }
  };

  return {
    articleTagInfos,
    getArticleTagInfos,
  };
};
