export const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';
export const CLEAR_CURRENT_ARTICLE = 'CLEAR_CURRENT_ARTICLE';
export const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST';
export const SET_ACTIVITY_LIST = 'SET_ACTIVITY_LIST';

// TODO: 删掉这个函数
export function setCurrentArticle(article) {
  return {
    type: SET_CURRENT_ARTICLE,
    article: article,
  }
}

// TODO: 删掉这个函数
export function clearCurrentArticle(article) {
  return {
    type: CLEAR_CURRENT_ARTICLE,
    article: article,
  }
}

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
