export interface IArticle extends IArticleDescription {
  content: string;
}

export interface IArticleDescription {
  id: string;
  tags: string[];
  title: string;
  share_count: number;
  comment_count: number;
  watch_count: number;
  description: string;
  created_at: number;
  updated_at: number;
}

export interface IArticleTagInfo {
  tag: string;
  count: number;
  status: number;
  updated_at: number;
}

export interface IArticleCommentBody {
  name: string;
  content: string;
  article_id: string;
  parent_id?: string;
}

export interface IArticleComment extends IArticleCommentBody {
  comment_id: string;
  created_at: number;
  updated_at: number;
  status: number;
  replies?: IArticleComment[];
}
