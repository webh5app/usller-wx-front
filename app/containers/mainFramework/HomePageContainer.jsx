import { connect } from 'react-redux';

import { toPage, pageNames } from '../../actions/routerActions';

import HomePage from '../../views/mainFramework/HomePage/HomePage.jsx';

const mapStateToProps = (state) => {
  return {
    articleList: state.article.get('articleList'),
    activityList: state.article.get('activityList'),
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      clickArticleCard: (article) => {
        dispatch(toPage(pageNames.ArticleDetail, {article: article}));
      },
      clickSpread: (article) => {
        dispatch(toPage(pageNames.MainShowPage));
      }
    }
}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageContainer;
