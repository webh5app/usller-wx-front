import * as userActions from '../actions/user';
import { fromJS, List, Map } from 'immutable';

import settings from '../settings';

const userInitial = {
  isFetching: false,
  token: null,
  id: null,
  name: null,
  portrait: null,
  lastUpdated: Date.now(),
  info: {},
  error: {},
}

export default function user(state=fromJS(userInitial), action) {
  switch (action.type) {
    case userActions.FETCH_USER_TOKEN:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true);

        case settings.fetchStatus.SUCCESS:
          const _id = 1;
          const _name = 'nihao';
          const _portrait = '1';
          // 解析 token
          console.log(action.message)
          return state
            .set('isFetching', false)
            .set('token', action.message.token)
            .set('lastUpdated', Date.now())
            .set('id', _id)
            .set('portrait', _portrait)
            .set('name', _name)

        case settings.settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .setIn(['error', 'isError'], true)
            .setIn(['error', 'errorName'], 'fetchUserTokenFailure')
            .setIn(['error', 'errorMessage'], '登录失败')

        default:
          return state;
      }

    case userActions.FETCH_USER_INFO:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true);

        case settings.fetchStatus.SUCCESS:
          return state
            .set('isFetching', false)
            .set('info', fromJS(action.message));

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .setIn(['error', 'isError'], true)
            .setIn(['error', 'errorName'], 'fetchUserInfoFailure')
            .setIn(['error', 'errorMessage'], '获取用户数据失败')
      }

    case userActions.UPDATE_USER_INFO:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true);

        case settings.fetchStatus.SUCCESS:
          return state
            .set('isFetching', false)
            .set('info', fromJS(action.info));

        case settings.fetchStatus.FIALURE:
          return state
            .set('isFetching', false)
            .setIn(['error', 'isError'], true)
            .setIn(['error', 'errorName'], 'userInfoUpdateFailure')
            .setIn(['error', 'errorMessage'], '更新用户数据失败')

        default:
          return state;
      }

    default:
      return state;

  }
}
