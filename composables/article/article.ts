import {
  GetArticleAPI,
  UpdateArticleInfoShareCountAPI,
  UpdateArticleInfoWatchCountAPI,
} from "~/api/article";
import type { IArticle } from "~/types/article/article";

export const useArticle = () => {
  const article = ref<IArticle>({} as IArticle);

  const getArticle = async (id: string) => {
    const { data } = await GetArticleAPI(id);
    article.value = data ?? ({} as IArticle);
  };

  const updateArticleShareCount = async (id: string) => {
    const { error } = await UpdateArticleInfoShareCountAPI(id);
    return error;
  };

  const updateArticleWatchCount = async (id: string) => {
    const { error } = await UpdateArticleInfoWatchCountAPI(id);
    return error;
  };

  return {
    article,
    getArticle,
    updateArticleShareCount,
    updateArticleWatchCount,
  };
};
