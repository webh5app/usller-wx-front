import { connect } from 'react-redux';

import { setCurrentArticle } from '../../actions/articleActions';
import { toPage } from '../../actions/routerActions';

import HomePage from '../../views/MainShowPage/HomePage/HomePage';

const mapStateToProps = (state) => {
  return {
    articleList: state.article.get('articleList'),
    activityList: state.article.get('activityList'),
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      clickArticleCard: (article) => {
        // TODO: 去掉这个函数, 改为 toPage
        dispatch(setCurrentArticle(article));
      },
    }
}

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

export default HomePageContainer;
