import settings from '../settings';
import * as actionDataUtils from './actionDataUtils';
import * as actionUIActions from './articleUI';


/* Get Article List */
// ==================================================================== //
export const FETCH_ARTICLE_LIST = 'FETCH_ARTICLE_LIST';
function fetchArticleListAction(status, message) {
  return {
    type: FETCH_ARTICLE_LIST,
    status: status,
    message: message,
  }
}

export function fetchArticleList(start, end) {
  const url = `${settings.url.prefix}/article/?rangeStart=${start}&rangeEnd=${end}`;
  return (dispatch) =>
    actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchArticleListAction);
}



/* Get Article Detail */
// ==================================================================== //
// 获取文章数据出错
export const FETCH_ARTICLE_DETAIL = 'FETCH_ARTICLE_DETAIL';
function fetchArticleDetailAction(status, message) {
  return {
    type: FETCH_ARTICLE_DETAIL,
    status: status,
    message: message,
  }
}

// 通过 resourceId 来获取文章
export function fetchArticleDetail(articleId) {
  const url = `${settings.url.prefix}/article/${articleId}/`
  return dispatch =>
    actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchArticleDetailAction);
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
  const url = `${settings.url.prefix}/article/${resourceId}/comment/`
  return dispatch =>
    actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchCommentListAction)
}

/* 提交文章评论信息 */
// ==================================================================== //
// 提交评论回调 Action
export const POST_COMMENT = 'POST_COMMENT';
function postCommentAction(status, message) {
  return {
    type: POST_COMMENT,
    status: status,
    message: message,
  }
}

// 提交评论
export function postComment(articleId, data) {
  const url = `${settings.url.prefix}/article/${articleId}/comment/`;
  return dispatch =>
    actionDataUtils.thunkPostAndGetResult(dispatch, url, data, postCommentAction);
}

// 为文章点赞
export function postArticleLike(articleId, data) {
  const url = `${settings.url.prefix}/article/${articleId}/like/`;
  return dispatch => {
    return actionDataUtils.thunkPutAndNotResult(url, data);
  }
}

// 为文章的评论点赞
export function postCommentLike(articleId, cid, data) {
  const url = `${settings.url.prefix}/article/${articleId}/comment/${cid}/like/`;
  return dispatch =>
    actionDataUtils.thunkPutAndNotResult(url, data);
}
