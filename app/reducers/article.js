import { fromJS, Map, List } from 'immutable';
import * as articleDataActions from '../actions/articleData';
import * as articleUIActions from '../actions/articleUI';

import settings from '../settings';

const _datetime = Date.now();

// article 的初始化数据
const listInitialState =  {
    isFetching: false,
    lastUpdated: _datetime,
    didInvalided: false,
    count: 0,     // 列表长度
    list: [],
    // 整个列表作为一个项缓存
    detail: {},
    // 缓存项
    comment: {},
    //缓存项
    error: {
      isError: false,
      errorName: '',
      errorMessage: '',
    }
};

export default function article(state=fromJS(listInitialState), action) {
  switch (action.type) {

    /*
      @action.status
      @action.message
        if status == REQUEST => message = null
        if status == SUCCESS => message = json_data
        if status == FAILURE => message = error_obj
    */
    case articleDataActions.FETCH_ARTICLE_LIST:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state.set('isFetching', true)

        case settings.fetchStatus.SUCCESS:
          const _length = action.message.meta.count;
          const newList = action.message.data
          return state
            .set('isFetching', false)
            .set('lastUpdated', Date.now())
            .update('count', (val) => {
              if (state.get('didInvalided'))  return _length;
              return val += _length;
            })
            .update('list', (list) => {
              if (state.get('didInvalided')) return newList;
              const _list = list.toJSON();
              _list.push(...newList);
              return fromJS(_list);
            })
            .set('didInvalided', false);

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('error', Map(action.message));

        default:
          return state;
      }

      /*
        @action.status
        @action.message
          if status == REQUEST => message = null
          if status == SUCCESS => message = json_data
          if status == FAILURE => message = error_obj
      */
    case articleDataActions.FETCH_ARTICLE_DETAIL:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true);

        case settings.fetchStatus.SUCCESS:
          const _article = action.message.data;
          const _meta = action.message.meta;

          const newArticleItem = fromJS({
            id: _article.id,
            lastUpdated: Date.now(),
            title: _article.title,
            bannerImage: _article.bannerImage,
            body: _article.body,
            meta: _article.meta,
          });

          return state
            .set('isFetching', false)
            .update('detail', (obj) => obj.set(''+_article.id, newArticleItem));

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('error', Map(action.message));

        default:
          return state;
      }

    /*
      @action.status
      @action.message
        if status == REQUEST => message = null
        if status == SUCCESS => message = json_data
        if status == FAILURE => message = error_obj
    */
    case articleDataActions.FETCH_COMMENT_LIST:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true);

        case settings.fetchStatus.SUCCESS:
          // message: {articleId, count, lastUpdated, comment[]}
          // _comment[]: {cid, user: {userId, userName, userPortrait}, body, meta: {like, datetime, isMylike, isMyView}, response}
          const _comment = action.message.comment;
          const newCommentItem = fromJS({
            articleId: action.message.articleId,
            lastUpdated: Date.now(),
            count: action.message.count,
            list: _comment,
          })

          return state
            .set('isFetching', false)
            .update('comment', (obj) => obj.set([action.message.articleId], newCommentItem));

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .set('error', Map(action.message));

        default:
          return state
      }

    // 提交评论
    case articleDataActions.POST_COMMENT:
      switch (action.status) {
        case settings.fetchStatus.REQUEST:
          return state
            .set('isFetching', true)

        case settings.fetchStatus.SUCCESS:
          return state
            .set('isFetching', false)
            .updateIn(['detail', message.articleId, 'meta','comment'], (val) => val += 1)
            .setIn(['detail', message.articleId], message)

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .setIn(['error', 'isError'], true)
            .setIn(['error', 'errorName'], 'postCommentFailure')
            .setIn(['error', 'errorMessage'], '提交评论失败')

        default:
          return state;

      }
    // ============================================================================ //
    case articleUIActions.ARTICLE_LIST_INVALIDED:
      return state
        .set('didInvalided', true);


    // id: articleId
    // type: "like", "view"
    case articleUIActions.ACTION_ARTICLE:
      return state
        .updateIn(['detail', action.id, 'meta', action.target], (val) => val+1)
        .updateIn(['detail', action.id, 'meta', `${action.target}Enable`], () => true)

    // id: articleId
    // cid: 0,
    // type: "like"
    case articleUIActions.ACTION_COMMENT:
      return state
        .getIn(['comment', action.id+"", 'comment'])
        .find((val) => val.cid === action.cid)
        .updateIn(['meta', action.type], (val) => val+1)
        .updateIn(['meta', `${action.type}Enable`], () => true);

    case articleUIActions.RESET_ERROR:
      return state
              .set('error', Map({isError: true, errorName: '', errorMessage}));
    default:
      return state;
  }
}
