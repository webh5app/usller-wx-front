import { connect } from 'react-redux';

import { toPage, pageNames } from '../../actions/routerActions';

import ArticleDetail from '../../views/pages/ArticleDetail/ArticleDetail.jsx';

// NOTE: 测试
import datas from '../../datas/articleData';

const mapStateToProps = (state, ownProps) => {
  const articleCard = ownProps.article;

  // 通过 articleCard 来找到 article 文章
  // 如果没有 articleCard 就加载空页面
  return {
    article: datas.pureTextArticle,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onCancel: () => {
        dispatch(toPage(pageNames.MainShowPage))
      },
      // TODO: 弹出分享页面(临时页面)
      onShare: () => {
        dispatch(toPage(pageNames.MainShowPage))
      },
    }
}

const ArticleDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);

export default ArticleDetailContainer;
