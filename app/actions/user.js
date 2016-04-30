import settings from '../settings';
import actionDataUtils from './actionDataUtils';

// 数据部分
// =========================================== //
export const FETCH_USER_TOKEN = "FETCH_USER_TOKEN";
function fetchUserTokenAction(status, message) {
  return {
    type: FETCH_USER_TOKEN,
    status: status,
    message: message,
  }
}

export const FETCH_USER_INFO = "FETCH_USER_INFO";
function fetchUserInfoAction(status, message) {
  return {
    type: FETCH_USER_INFO,
    status: status,
    message: message,
  }
}

export const UPDATE_USER_INFO= "UPDATE_USER_INFO";
function updateUserInfoAction(status, info) {
  return {
    type: UPDATE_USER_INFO,
    status: status,
    info: info,
  }
}

// export function fetchUserToken(info) {
//   const url = `${settings.prefix.url}/token`;
//   return dispatch =>
//     actionDataUtils.thunkPostAndGetResult(dispatch, url, info, fetchUserInfoAction)
// }
export function fetchUserToken(info) {
  // Production
  const token = document.getElementById('token').getAttribute('data-token');
  // Test
  // const token = "43b58b888d849919ffea16d168e688f4b4d8c7a6";

  return dispatch =>
    dispatch(fetchUserTokenAction(settings.fetchStatus.SUCCESS, {token: token}));
}


export function fetchUserInfo(urlId) {
  const url = `${settings.prefix.url}/user/${userId}`;
  return dispatch =>
    actionDataUtils.thunkFetchAndGetResult(dispatch, url, fetchUserInfoAction)
}

export function updateUserInfo(userId, info) {
  const url = `${settings.prefix.url}/user/${userId}`;
  return dispatch =>
    actionDataUtils.thunkPostAndGetResult(dispath, url, info, updateUserInfoAction);
}

// UI 部分
// =========================================== //
export const USER_TOKEN_INVALIDED = "USER_TOKEN_INVALIDED";
export function userTokenInvalided() {
  return {
    type: USER_TOKEN_INVALIDED,
  }
}

export const USER_INFO_INVALIDED = "USER_INFO_INVALIDED";
export function userInfoInvalided(){
  return {
    type: USER_INFO_INVALIDED,
  }
}
