import { connect } from 'react-redux';

import { toPage, pageNames } from '../../actions/routerActions';

import ArticleDetail from '../../views/pages/ArticleDetail/ArticleDetail.jsx';

// NOTE: 测试
import datas from '../../datas/articleData';

const mapStateToProps = (state, ownProps) => {
  const articleCard = ownProps.article;

  // NOTE 通过 articleCard 来找到 article 文章
  // NOTE 如果没有 articleCard 就加载空页面
  return {
    article: datas.pureTextArticle,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onCancel: () => {
        dispatch(toPage(pageNames.MainShowPage))
      },
      onShare: () => {
        // TODO preload 放入分享的链接和标题, composition 为 shareComposition
        dispatch(toPage(pageNames.MainShowPage, {}, null));
      },
      onComment: () => {
        dispatch(toPage(pageNames.ArticleComment));
      }
    }
}

const ArticleDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);

export default ArticleDetailContainer;
