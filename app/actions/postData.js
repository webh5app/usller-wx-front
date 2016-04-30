import * as actionDataUtils from './actionDataUtils';
import settings from '../settings';

// 获取 Label 列表
// label: { @data[], @meta}
// @data[]: {icon: String, description: String, name: String, nick_name: String}
// @meta: {lastUpdated: Number, count: Number}
export const FETCH_LABEL= 'FETCH_LABEL';
function fetchLabelAction(status, message) {
  return {
    type: FETCH_LABEL,
    status: status,
    message: message,
  }
}

export function fetchLabel() {
  const url = `${settings.url.prefix}/post/tag/`;
  return dispatch =>
    actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchLabelAction);
}


// 获取 Post 列表
// postList: {@meta, @data[]}
// @meta: {lastUpdated: Number, tag: String, count: Number}
// @data[]: {tag: String, content: String, @user, @@meta, pid: Number, title: String}
// @user: {name: String, id: Number, portrait: String}
// @@meta: {datetime: Number, likeEnable: Boolean, like: Number, view: Number, comment: Number}
export const FETCH_POST_LIST = "FETCH_POST_LIST";
function fetchPostListAction(status, message) {
  return {
    type: FETCH_POST_LIST,
    status: status,
    message: message,
  }
}

export function fetchPostList(labelName, start, end) {
  const url = `${settings.url.prefix}/post/?tag=${labelName}&rangeStart=${start}&rangeEnd=${end}`;
  return dispatch =>
    actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchPostListAction);
}

// 获取 Post 数据
// postData: {@data, @meta}
// @meta: {lastUpdated: Number}
// @data: {title: String, @user, @@meta, pid: Number, content: String, tag: String }
// @user: {name: String, id: Number, portrait: String}
// @@meta: {datetime: Number, likeEnable: Boolean, like: Number, view: Number, comment: Number}
export const FETCH_POST_DETAIL = "FETCH_POST_DETAIL";
function fetchPostDetailAction(status, message) {
  return {
    type: FETCH_POST_DETAIL,
    status: status,
    message: message,
  }
}

export function fetchPostDetail(pid) {
  const url = `${settings.url.prefix}/post/${pid}/`;
  return dispatch =>
    actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchPostDetailAction);
}

// 获取 Post 评论列表的数据
// postCommentList: {@data[], @meta}
// @data[]: {@@meta, @user, cid: Number, content: String}
// @meta: {count: Number, pid: Number, lastUpdated: Number}
// @user: {name: String, id: Number, portrait: String}
// @@meta: {datetime: Number, likeEnable: Boolean, like: Number}
export const FETCH_POST_COMMENT_LIST = "FETCH_POST_COMMENT_LIST";
function fetchPostCommentListAction(status, message) {
  return {
    type: FETCH_POST_COMMENT_LIST,
    status: status,
    message: message,
  }
}

export function fetchPostCommentList(pid) {
  const url = `${settings.url.prefix}/post/${pid}/comment/`;
  return dispatch =>
    actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchPostCommentListAction);
}


export const POST_POST = "POST_POST";
function postPostAction(status, message) {
  return {
    type: POST_POST,
    status: status,
    message: message,
  }
}

export function postPost(sendData) {
  const url = `${settings.url.prefix}/post/`;
  return dispatch =>
    actionDataUtils.thunkPostAndGetResult(dispatch, url, sendData, postPostAction);
}

export const POST_POST_COMMENT = "POST_POST_COMMENT";
function postPostCommentAction(status, message) {
  return {
    type: POST_POST_COMMENT,
    status: status,
    message: message,
  }
}

export function postPostComment(pid, sendData) {
  const url = `${settings.url.prefix}/post/${pid}/comment/`
  return dispatch =>
    actionDataUtils.thunkPostAndGetResult(dispatch, url, sendData, postPostCommentAction);
}

// ========================================================== //
export function postPostLike(pid, sendData) {
  const url = `${settings.url.prefix}/post/${pid}/like/`;
  return dispatch =>
    actionDataUtils.thunkPutAndNotResult(url, sendData);
}

export function postCommentLike(pid, cid, sendData) {
  const url = `${settings.url.prefix}/post/${pid}/comment/${cid}/like/`;
  return dispatch =>
    actionDataUtils.thunkPutAndNotResult(url, sendData)
}
