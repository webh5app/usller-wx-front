export const TO_PAGE = 'TO_PAGE';
export const TO_COMPOSITION = 'TO_COMPOSITION';

export function toPage(pageName, preload={}) {
  return {
      type: TO_PAGE,
      pageName: pageName,
      preload: preload,
  }
}

export function toComposition(compositionName, preload={}) {
  return {
    type: TO_COMPOSITION,
    compositionName: compositionName,
    preload: preload,
  }
}

export const pageNames = {
  MainShowPage: 'mainShowPage',
  SideBar: 'sideBar',
  SearchPage: 'searchPage',
  ArticleDetail: 'articleDetail',
  ArticleComment: 'ArticleComment',
}

export const compositionNames = {
  SideBar: 'sideBar',
  ShareBox: 'shareBox',
  LoginSelectBox: 'loginSelectBox',
}
