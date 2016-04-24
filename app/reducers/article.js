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
    count: 2,     // 列表长度
    list: [
      {
        id: 100001,
        briefImage: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg',
        title: '这是一个测试样例, 请测试一下',
        meta: {
          like: 10,
          view: 100,
          comment: 1,
          datetime: _datetime,
        }
      },
      {
        id: 100002,
        briefImage: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg',
        title: 'DANGER!!!! 优步又要优惠啦!!!!!',
        meta: {
          like: 10,
          view: 100,
          comment: 1,
          datetime: _datetime,
        }
      }
    ],

    // 整个列表作为一个项缓存
    detail: {
      100001: {
          id: 100001,
          lastUpdated: _datetime,
          bannerImage: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg',
          title: '这是一个测试样例, 请测试一下',
          body: '这是一个测试测试, 的事都会返回法萨芬撒发生该假设该会计师考虑国家爱上;的国家是大家干撒的价格;三大关键时刻搞技术的开关技术的关键;是个分公司了;国家是空格健身卡国家;傻瓜可刷卡机; ',
          meta: {
            like: 10,
            likeEnable: false,
            view: 100,
            viewEnable: false,
            comment: 1,
            datetime: _datetime,
          }
      },
      100002: {
        id: 100002,
        lastUpdated: _datetime,
        bannerImage: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg',
        title: 'DANGER!!!! 优步又要优惠啦!!!!!',
        body: '测试是打发时间空间啊;干啥都看过介绍的感觉;斯柯达垃圾卡时代感;收到国家爱思考的高价收;赶紧撒打开该价格就是打个;撒故事大纲',
        meta: {
          like: 10,
          likeEnable: false,
          view: 100,
          viewEnable: false,
          comment: 1,
          datetime: _datetime,
        }
      }
    },

    // 缓存项
    comment: {
      100001: {
        articleId: 100001,
        lastUpdated: _datetime,
        count: 1,
        comment: [
          {
            cid: 1,
            user: {
              id: 100002,
              name: '大熊',
              portrait: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg',
            },
            body: 'Hello World!!!!',
            response: null,
            meta: {
              like: 0,
              likeEnable: false,
              datetime: _datetime,
            }
          },
        ]
      },
      100002: {
        articleId: 100002,
        lastUpdated: _datetime,
        count: 1,
        comment: [
          {
            cid: 1,
            user: {
              id: 100001,
              name: '小步步',
            },
            body: '愚蠢的人类',
            response: null,
            meta: {
              like: 10,
              likeEnable: true,
              datetime: _datetime,
            }
          }
        ]
      },
    }, //缓存项
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

        case settings.fetchStatus.REQUEST:
          const newList = fromJS(action.message);
          return state
            .set('isFetching', false)
            .set('lastUpdated', Date.now())
            .update('count', (val) => {
              if (state.get('didInvalided')) return action.message.length;
              return val += action.message.length;
            })
            .update('list', (list) => {
              if (state.get('didInvalided')) return newList;
              return list.merge(newList);
            })
            .set('didInvalided', false);

        case settings.fetchStatus.REQUEST:
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
          const _article = action.message;
          const newArticleItem = fromJS({
            id: _article.articleId,
            lastUpdated: Date.now(),
            title: _article.articleTitle,
            bannerImage: _article.articleBannerImage,
            body: _article.articleBody,
            meta: _article.articleMeta,
          });

          return state
            .set('isFetching', false)
            .update('detail', (obj) => obj.set([_article.articleId], newArticleItem));

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
    // ============================================================================ //
    case articleUIActions.ARTICLE_LIST_INVALIDED:
      return state
        .set('didInvalided', true);

    // id: articleId
    // type: "like", "view"
    case articleUIActions.ACTION_ARTICLE:
      return state
        .get('detail', action.id)
        .updateIn(['meta', action.type], (val) => val+1)
        .updateIn(['meta', `${action.type}Enable`], () => true)

    // id: articleId
    // cid: 0,
    // type: "like"
    case articleUIActions.ACTION_COMMENT:
      return state
        .getIn(['comment', action.id, 'comment'])
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
