import type { IArticleCommentBody } from "~/types/article/article";
import { $BackendAPI } from ".";

export const GetArticleTagsAPI = async () => {
  return await $BackendAPI({ method: "GET", url: `/article/tags` });
};

export const GetArticleDescriptionsAPI = async () => {
  return await $BackendAPI({ method: "GET", url: `/article/descriptions` });
};

export const GetArticleDescriptionsByTagAPI = async (tag: string) => {
  return await $BackendAPI({
    method: "GET",
    url: `/article/descriptions/${tag}`,
  });
};

export const GetArticleAPI = async (id: string) => {
  return await $BackendAPI({ method: "GET", url: `/article/${id}` });
};

export const GetArticleCommentsAPI = async (id: string) => {
  return await $BackendAPI({ method: "GET", url: `/article/${id}/comment` });
};

export const UpdateArticleInfoShareCountAPI = async (id: string) => {
  return await $BackendAPI({
    method: "PUT",
    url: `/article/${id}/info/share/count`,
  });
};

export const UpdateArticleInfoWatchCountAPI = async (id: string) => {
  return await $BackendAPI({
    method: "PUT",
    url: `/article/${id}/info/watch/count`,
  });
};

export const CreateCommentAPI = async (body: IArticleCommentBody) => {
  return await $BackendAPI({ method: "POST", url: `/article/comment`, body });
};
