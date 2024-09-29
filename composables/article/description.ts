import {
  GetArticleDescriptionsAPI,
  GetArticleDescriptionsByTagAPI,
} from "~/api/article";
import type { IArticleDescription } from "~/types/article/article";

export const useArticleDescription = () => {
  const articleDescriptions = ref<IArticleDescription[]>([]);
  const articleDescriptionsByTag = ref<IArticleDescription[]>([]);

  const getArticleDescriptions = async (tag?: string) => {
    if (tag) {
      const { data } = await GetArticleDescriptionsByTagAPI(tag);
      articleDescriptionsByTag.value = (data ?? []) as IArticleDescription[];
    } else {
      const { data } = await GetArticleDescriptionsAPI();
      articleDescriptions.value = (data ?? []) as IArticleDescription[];
    }
  };

  return {
    articleDescriptions,
    articleDescriptionsByTag,
    getArticleDescriptions,
  };
};
