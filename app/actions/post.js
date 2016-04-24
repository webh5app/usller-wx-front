/* get label list */

// 请求 label 列表
export const GET_LABEL_LIST = 'GET_LABEL_LIST';
// 获取 label 列表
export const PULL_LABEL_LIST = 'PULL_LABEL_LIST';

export function getLabelList() {
  return {
    type: GET_LABEL_LIST,
    preload: {},
  }
}

// LabelList: [@Label, ... , @Label]
// @Label: {labelId: 1, labelName: 'talk', labelcnName: '闲聊', labelIcon: 'talk'}
export function pullLabelList(labelList) {
  return {
    type: PULL_LABEL_LIST,
    preload: {
      labelList: labelList,
    },
  }
}


/* get post list */

// 请求 post 列表
export const GET_POST_LIST = 'GET_POST_LIST';
// 获得 post 列表
export const PULL_POST_LIST = 'PULL_POST_LIST';

// range: [0, 100]
export function getPostList(labelId, range=[0,100]) {
  return {
    type: GET_POST_LIST,
    preload: {
      labelId: labelId,
      range: range,
    },
  }
}

// postList: [@poat, ... , @post]
// @post: {postId: 1, postTitle: 'hi', postBrief: 'this is brief', @postMeta, @postType, @user}
// @postMeta: {datatime: 1222, like: 123213, view: 112, comment: 123123}
// @postType: {typeName: '热门', tpyeIcon: 'bornhull'}
// @user: {userName: '小明', userPortrait: CND_URL}
export function pullPostList(postList) {
  return {
    type: PULL_POST_LIST,
    preload: {
      postList: postList
    }
  }
}


/* get post detail */

// 请求 post 数据
export const GET_POST_DETAIL = 'GET_POST_DETAIL';
// 获取 post 数据
export const PULL_POST_DETAIL = 'PULL_POST_DETAIL';
// 为自己设置 liked
export const SET_POST_LIKE = 'SET_POST_LIKE';
// 为自己设置 viewed
export const SET_POST_VIEW = 'SET_POST_VIEW';

export function getPostDetail(resourceId) {
  return {
    type: GET_POST_DETAIL,
    preload: {
      resourceId: resourceId,
    },
  }
}

// post: {postId: 1, postTitle: 'hi', postCotnent: 'this is content', @postMeta, @postType, @user}
// @postMeta: {datatime: 1222, like: 123213, view: 112, comment: 123123}
// @postType: {typeName: '热门', tpyeIcon: 'bornhull'}
// @user: {userName: '小明', userPortrait: CDN_URL}
export function pullPostDetail(post) {
  return {
    type: PULL_POST_DETAIL,
    preload: {
      post: post,
    },
  }
}

export function setPostView(resourceId) {
  return {
    type: SET_POST_LIKE,
    preload: {
      resourceId: resourceId,
    }
  }
}

export function setPostLike(resourceId) {
  return {
    type: SET_POST_LIKE,
    preload: {
      resourceId: resourceId,
    },
  }
}
