import settings from '../settings';
import articleDataActions from './articleData';
import actionUtils from './actionUtils';

// 数据有效性
export const ARTICLE_LIST_INVALIDED = "ARTICLE_LIST_INVALIDED";
function articleListInvalided(articleId) {
  return {
    type: ARTICLE_DETAIL_INVALIDED,
  }
}

// 重置错误
export const RESET_ERROR = 'RESET_ERROR';
export function resetError() {
  return {
    type: RESET_ERROR,
  }
}

// 对 article 操作
export const ACTION_ARTICLE = 'ACTION_ARTICLE';
export function actionArticle(articleId, target) {
  return {
    type: ACTION_ARTICLE,
    id: articleId,
    target: target,
  }
}

// 对 comment 操作
export const ACTION_COMMENT = 'ACTION_COMMENT';
export function actionComment(articleId, commentId, target) {
  return {
    type: ACTION_COMMENT,
    id: articleId,
    cid: commentId,
    target: target,
  }
}
