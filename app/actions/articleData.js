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
  return dispatch => {
    const url = `${settings.url.prefix}/articleComment/${resourceId}`
    return dispatch =>
      actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchCommentListAction)
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

export function postComment(resourceId, data, token) {
  const url = `${settings.url.prefix}/article/${aritcle}/comment`;
  data.token = token;
  return dispatch =>
    actionDataUtils.thunkPostAndGetResult(dispatch, url, data, postCommentAction);
}

// 更新信息
// ==================================================================== //
export function putArticleDetail(articleId, data, token) {
  const url = `${settings.url.prefix}/article/${articleId}`;
  // data.token = token;
  return dispatch => {
    return actionDataUtils.thunkPutAndNotResult(url, data);

  }
}

export function putComment(articleId, data, token) {
  const url = `${settings.url.prefix}/article/${articleId}/comment`;
  data.token = token;
  return dispatch =>
    actionDataUtils.thunkPutAndNotResult(url, data);
}
