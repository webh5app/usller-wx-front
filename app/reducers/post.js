import { Map, List, fromJS } from 'immutable';
import * as postDataActions from '../actions/postData';
import * as postUIActions from '../actions/postUI';

import settings from '../settings';

const postInitialState = {
  isFetching: false,
  label: {
    lastUpdated: Date.now(),
    count: 0,
    data: [],
  },
  post: {},
  detail: {},
  comment: {},
}

const labelPostInitialState = {
  lastUpdated: Date.now(),
  count: 0,
  didInvalided: false,
  data: [],
}

// 数据格式
// const post = {
//   home: {
//     lastUpdated: Data.now(),
//     count: 0,
//     didInvalided: false,
//     data: [
//       {
//         tag: 'home',
//         pid: 1,
//         title: "x",
//         content: "开始",
//         user: {
//           name: "一只猫",
//           id: 1,
//           portrait: "",
//         },
//         meta: {
//           like: 0,
//           likeEnable: false,
//           view: 0,
//           content: 0,
//           datetime: 1461729137905,
//         }
//       }
//     ]
//   }
// }

export default function post(state=fromJS(postInitialState), action) {
  switch (action.type) {
    case postDataActions.FETCH_LABEL:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true)

        case settings.fetchStatus.SUCCESS:
          let _post = {};
          action.message.data.map((item) => {
            _post[item.name] = labelPostInitialState;
          });

          return state
            .set('isFetching', false)
            .setIn(['label', 'lastUpdated'], Date.now())
            .setIn(['label', 'count'], action.message.meta.count)
            .setIn(['label', 'data'], fromJS(action.message.data))
            .set('post', fromJS(_post));

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('isError', true)
            .set('errorName', 'fetchLabelFailure')
            .set('errorMessage', '获取标签信息失败')

        default:
          return state;
      }

    case postDataActions.FETCH_POST_LIST:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true)

        case settings.fetchStatus.SUCCESS:
          return state
            .set('isFetching', false)
            .setIn(['post', action.message.meta.tag, 'lastUpdated'], Date.now())
            .updateIn(['post', action.message.meta.tag, 'count'], (count) => {
              if (state.getIn(['post', action.message.meta.tag, 'didInvalided']))
                return action.message.meta.count
              return count + action.message.meta.count
            })
            .setIn(['post', action.message.meta.tag, 'didInvalided'], false)
            .updateIn(['post', action.message.meta.tag, 'data'], (list) => {
              if (state.getIn(['post', action.message.meta.didInvalided]))
                return fromJS(action.message.data);
              return list.push(...action.message.data);
            })

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('isError', true)
            .set('errorName', 'fetchPostListFailure')
            .set('errorMessage', '获取帖子列表失败')

        default:
          return state;
      }

    case postDataActions.FETCH_POST_DETAIL:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state.set('isFetching', false);

        case settings.fetchStatus.SUCCESS:
          action.message.data.lastUpdated = Date.now();
          return state
            .set('isFetching', false)
            .setIn(['detail', action.message.data.pid], fromJS(action.message.data));

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('isError', true)
            .set('errorName', 'fetchPostDetailFailure')
            .set('errorMessage', '获取帖子失败')

        default:
          return state
      }

    case postDataActions.FETCH_POST_COMMENT_LIST:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true)

        case settings.fetchStatus.SUCCESS:
          return state
            .set('isFetching', false)
            .setIn(['comment', action.message.meta.pid, 'pid'], action.message.meta.pid)
            .setIn(['comment', action.message.meta.pid, 'count'], action.message.meta.count)
            .setIn(['comment', action.message.meta.pid, 'lastUpdated'], Date.now())
            .setIn(['comment', action.message.meta.pid, 'data'], fromJS(action.message.data))

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('isError', true)
            .set('errorName', 'fetchPostCommentList')
            .set('errorMessage', '获取评论列表失败')

        default:
          return state;
      }

    // =============================================================================== //
    case postDataActions.POST_POST:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true)

        case settings.fetchStatus.SUCCESS:
          return state
            .set('isFetching', true)
            .setIn(['post', action.message.data.tag, 'lastUpdated'], Date.now())
            .updateIn(['post', action.message.data.tag, 'count'], (val) => val + 1)
            .updateIn(['post', action.message.data.tag, 'data'], (list) => list.unshift(fromJS(action.message.data)));


        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('isError', true)
            .set('errorName', 'postPostFailure')
            .set('errorMessage', '提交帖子失败')

        default:
          return state;
      }

    case postDataActions.POST_POST_COMMENT:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true);

        case settings.fetchStatus.SUCCESS:
          return state
            .set('isFetching', true)
            .setIn(['comment', action.message.pid, 'lastUpdated'], Date.now())
            .updateIn(['comment', action.message.pid, 'count'], (val) => val + 1)
            .updateIn(['comment', action.message.pid, 'data'], (list) => list.push(action.message.data));

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('isError', true)
            .set('errorName', 'postPostCommentFailure')
            .set('errorMessage', '对帖子评论失败')
        default:
          return state;
      }

    // ============================================================================== //
    case postUIActions.POST_LIST_INVALIDED:
      return state
        .setIn(['post', action.tag, 'didInvalided'], true);

    case postUIActions.POST_POST_LIKE:
      const _d = state.get('detail').toJSON()[action.pid];
      _d.meta.like += 1;
      _d.meta.likeEnable = true;
      return state.setIn(['detail', action.pid+''], fromJS(_d));

    case postUIActions.POST_COMMENT_LIKE:
        const _c_list =  state.getIn(['comment', action.pid, 'data']).toJSON();

        _c_list.map((item) => {
          if (item.cid == action.cid) {
            item.meta.like += 1;
            item.meta.likeEnable = true;
          }
        });

        return state.setIn(['comment', action.pid, 'data'], fromJS(_c_list));

    default:
      return state;
  }
}
