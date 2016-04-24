import settings from '../settings';

// 请求获取数据, 并确认结果
export function thunkFetchAndGetResult(dispatch, url, actionCallback) {
  dispatch(actionCallback(settings.fetchStatus.REQUEST));
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      if (json.meta.error.isError) throw json.meta.error.errorName;
      dispatch(actionCallback(settings.fetchStatus.SUCCESS, json))
    })
    .catch(message => dispatch(actionCallback(setttings.fetchStatus.FAILURE, message)));
}

// 请求发送数据, 并确认结果
export function thunkPostAndGetResult(dispath, url, sendData, actionCallback) {
  dispath(actionCallback(settings.fetchStatus.REQUEST));
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(sendData),
  })
  .then(response => response.json())
  .then(json => {
    if (json.meta.error.isError) throw json.meta.error.errorName;
    dispatch(actionCallback(settings.fetchStatus.SUCCESS, json))
  })
  .catch(message => dispatch(actionCallback(settings.fetchStatus.FAILURE, message)));
}

// 请求更新数据, 无需任何确认
export function thunkUpdateAndNotResult(dispath, url, updateData, actionCallback) {
  return fetch(url, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(updateData)
  })
}
