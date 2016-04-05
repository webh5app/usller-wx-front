export const TO_PAGE = 'TO_PAGE'

export function toPage(pageName, preload={}, composition=null) {
  return {
      type: TO_PAGE,
      pageName: pageName,
      preload: preload,
      composition: composition,
  }
}

export const pageNames = {
  MainShowPage: 'mainShowPage',
  SideBar: 'sideBar',
  SearchPage: 'searchPage',
  ArticleDetail: 'articleDetail',
  ArticleSpread: 'articleSpread',
}
