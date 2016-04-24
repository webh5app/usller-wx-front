import settings from '../settings';
import actionUtils from './actionUtils';


/* Get Article List */
// ==================================================================== //
export const FETCH_ARTICLE_LIST = 'FETCH_ARTICLE_LIST';
function fetchArticleListAction(status, message) {
  return {
    type: FETCH_ARTICLE_LIST_FAILURE,
    status: status,
    message: message,
  }
}

export function fetchArticleList(start, end) {
  const url = `${settings.url.prefix}/article?start=${start}&end=${end}`;
  return actionUtils.thunkFetchAndGetResult(dispatch, url, fetchArticleListAction);
}



/* Get Article Detail */
// ==================================================================== //
// 获取文章数据出错
export const FETCH_ARTICLE_DETAIL = 'FETCH_ARTICLE_DETAIL';
function fetchArticleDetailAction(status, message) {
  return {
    type: FETCH_ARTICLE_DETAIL_FAILURE,
    status: status,
    message: message,
  }
}

// 通过 resourceId 来获取文章
export function fetchArticleDetail(resourceId) {
  const url = `${settings.url.prefix}/article/${resourceId}`
  return actionUtils.thunkFetchAndGetResult(dispatch, url, fetchArticleDetailAction);
}


/* 获取文章评论信息 */
// ==================================================================== //
export const FETCH_COMMENT_LIST = 'FETCH_COMMENT_LIST';
function fetchCommentListAction(status, message) {
  return {
    type: FETCH_COMMENT_LIST,
    status: status,
    message: message,
  }
}

export function fetchCommentList(resourceId) {
  return dispatch => {
    const url = `${settings.url.prefix}/articleComment/${resourceId}`
    return actionUtils.thunkFetchAndGetResult(dispatch, url, fetchCommentListAction)
  }
}

/* 提交文章评论信息 */
// ==================================================================== //
export const POST_COMMENT = 'POST_COMMENT';
function postCommentAction(status, message) {
  return {
    type: POST_COMMENT,
    status: status,
    message: message,
  }
}

export function postComment(resourceId, data) {
  const url = `${settings.url.prefix}/articleComment`
  return actionUtils.thunkPostAndGetResult(dispatch, url, data, postCommentAction);
}

/* Update Article Detail 信息 */
// ==================================================================== //
export function postArticleDetail(resourceId, data) {
  const url = `${settings.url.prefix}/article/${resourceId}`
  return actionUtils.thunkUpdateAndNotResult(dispatch, url, data, updateArticleDetailAction)
}
