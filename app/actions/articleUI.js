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
export const ACTION_ARTICLE = 'ACTION_ARTICLE';
export function actionArticleAction(articleId, target) {
  return {
    type: ACTION_ARTICLE,
    id: articleId,
    target: target,
  }
}

// 对 comment 操作
export const ACTION_COMMENT = 'ACTION_COMMENT';
export function actionCommentAction(articleId, commentId, target) {
  return {
    type: ACTION_COMMENT,
    id: articleId,
    cid: commentId,
    target: target,
  }
}

// 重置错误
export const RESET_ERROR = 'RESET_ERROR';
export function resetErrorAction() {
  return {
    type: RESET_ERROR,
  }
}
