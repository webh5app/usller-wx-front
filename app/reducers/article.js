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
            .setIn(['error', 'isError'], true)
            .setIn(['error', 'errorName'], 'fetchArticleListFailure')
            .setIn(['error', 'errorMessage'], '获取文章列表失败');

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
            content: _article.content,
            meta: _article.meta,
          });

          return state
            .set('isFetching', false)
            .update('detail', (obj) => obj.set(''+_article.id, newArticleItem));

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .setIn(['error', 'isError'], true)
            .setIn(['error', 'errorName'], 'fetchArticleDetailFailure')
            .setIn(['error', 'errorMessage'], '获取文章失败')

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
          // message: { meta: { articleId, count, lastUpdated } , @data}
          // @data[]: {cid, user: {id, name, portrait}, body, meta: {like, likeEnable, datetime}, response}
          const _commentList = action.message;
          const newCommentItem = fromJS({
            articleId: _commentList.meta.articleId,
            lastUpdated: Date.now(),
            count: _commentList.meta.count,
            comment: fromJS(_commentList.data),
          })

          return state
            .set('isFetching', false)
            .update('comment', (obj) => obj.set(''+_commentList.meta.articleId, newCommentItem));

        case settings.fetchStatus.FAILURE:
          return state
            .set('isFetching', false)
            .setIn(['error', 'isError'], true)
            .setIn(['error', 'errorName'], 'fetchCommentListFailure')
            .setIn(['error', 'errorMessage'], '获取文章评论失败')

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
            .setIn(['detail', action.message.articleId, 'meta', 'comment'], action.message.count)
            .setIn(['comment', action.message.articleId, 'lastUpdated'], Date.now())
            .updateIn(['comment', action.message.articleId, 'count'], (count) => count + 1)
            .updateIn(['comment', action.message.articleId+'', 'comment'], (list) =>  list.push(fromJS(action.message.comment)))

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

    // 对文章 like
    case articleUIActions.ACTION_ARTICLE_LIKE:
      return state
        .updateIn(['detail', action.id+'', 'meta', 'like'], (val) => val+1)
        .updateIn(['detail', action.id+'', 'meta', 'likeEnable'], () => true)

    // 对文章评论 like
    case articleUIActions.ACTION_COMMENT_LIKE:
      const _c = state.getIn(['comment', action.id+'']).toJSON();
      _c.count += 1;
      _c.lastUpdated = Date.now();

      _c.comment.map((item) => {
        if (item.cid == action.cid) {
          item.meta.like += 1;
          item.meta.likeEnable = true;
          return item;
        }
      })

      return state.updateIn(['comment', action.id+''], (val) => fromJS(_c));

    case articleUIActions.RESET_ERROR:
      return state
              .set('error', Map({isError: true, errorName: '', errorMessage}));
    default:
      return state;
  }
}
