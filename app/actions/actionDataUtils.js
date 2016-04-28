import settings from '../settings';

// 请求获取数据, 并确认结果
export function thunkFetchAndGetResult(dispatch, url, actionCallback) {
  dispatch(actionCallback(settings.fetchStatus.REQUEST));
  return fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if (json.meta.error.isError) throw json.meta.error.errorName;
      dispatch(actionCallback(settings.fetchStatus.SUCCESS, json))
    })
    .catch(message => dispatch(actionCallback(settings.fetchStatus.FAILURE, message)));
}

// 请求发送数据, 并确认结果
export function thunkPostAndGetResult(dispatch, url, sendData, actionCallback) {
  dispatch(actionCallback(settings.fetchStatus.REQUEST));
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: sendData,
  })
  .then(response => response.json())
  .then(json => {
    if (json.errcode != 0) throw 'Error';
    dispatch(actionCallback(settings.fetchStatus.SUCCESS, json))
  })
  .catch(message => dispatch(actionCallback(settings.fetchStatus.FAILURE, message)));
}

// 请求更新数据, 无需任何确认
export function thunkPutAndNotResult(url, sendData) {
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: sendData,
  });
}
