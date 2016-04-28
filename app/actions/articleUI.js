import settings from '../settings';
import articleDataActions from './articleData';

// 数据有效性
export const ARTICLE_LIST_INVALIDED = "ARTICLE_LIST_INVALIDED";
function articleListInvalidedAction(articleId) {
  return {
    type: ARTICLE_LIST_INVALIDED,
  }
}

// 对 article 操作
export const ACTION_ARTICLE_LIKE = 'ACTION_ARTICLE_LIKE';
export function actionArticleLike(articleId) {
  return {
    type: ACTION_ARTICLE_LIKE,
    id: articleId,
  }
}

// 对文章点赞
export const ACTION_COMMENT_LIKE = 'ACTION_COMMENT_LIKE';
export function actionCommentLike(articleId, cid) {
  return {
    type: ACTION_COMMENT_LIKE,
    id: articleId,
    cid: cid,
  }
}

// 重置错误
export const RESET_ERROR = 'RESET_ERROR';
export function resetErrorAction() {
  return {
    type: RESET_ERROR,
  }
}
