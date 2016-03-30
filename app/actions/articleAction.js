export const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';
export const CLEAR_CURRENT_ARTICLE = 'CLEAR_CURRENT_ARTICLE';

export function setCurrentArticle(article) {
  return {
    type: SET_CURRENT_ARTICLE,
    article: article,
  }
}

export function clearCurrentArticle(article) {
  return {
    type: CLEAR_CURRENT_ARTICLE,
    article: article,
  }
}
