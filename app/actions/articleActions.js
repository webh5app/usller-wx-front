export const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST';
export const SET_ACTIVITY_LIST = 'SET_ACTIVITY_LIST';

export function setArticleList(articleList) {
  return {
    type: SET_ARTICLE_LIST,
    articleList: articleList,
  }
}

export function setActivityList(activityList) {
  return {
    type: SET_ACTIVITY_LIST,
    activityList: activityList,
  }
}
