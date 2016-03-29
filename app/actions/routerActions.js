export const TO_PAGE = 'TO_PAGE'

// TODO: 为其添加负载
export function toPage(pageName) {
  return {
      type: TO_PAGE,
      pageName: pageName,
  }
}

export const pageNames = {
  MainShowPage: 'mainShowPage',
  SideBar: 'sideBar',
  SearchPage: 'searchPage',
  ArticleDetail: 'articleDetail',
  ArticleSpread: 'articleSpread',
}
