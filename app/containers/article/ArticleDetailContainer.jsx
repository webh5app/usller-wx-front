import { connect } from 'react-redux';
import { Map, List } from 'immutable';

import * as articleUIActions from '../../actions/articleUI';
import * as articleDataActions from '../../actions/articleData';

import ArticleDetail from '../../views/article/ArticleDetail.jsx';

const mapStateToProps = (state, ownProps) => {
  const _id = ownProps.params.articleId;
  const _article = state.article.getIn(['detail', _id]);
  let json = {};

  if (_article) json = _article.toJSON();

  return {
    article: json,
    // comment: state.article.getIn(['comment', _id], Map()).toJSON(),
    error: state.article.get('error').toJSON(),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    initial: function(articleId) {
      // 判断是否过期, 不过期不用重新获取
      dispatch(articleDataActions.fetchArticleDetail(articleId));
    },

    liked: function(articleId, token) {
      dispatch(articleDataActions.putArticleDetail(articleId, {like: true}, token));
      dispatch(articleUIActions.actionArticleAction(articleId, 'like'));
    },
    viewed: function(articleId, token) {
      dispatch(articleDataActions.putArticleDetail(articleId, {view: true}, token));
      dispatch(articleUIActions.actionArticleAction(articleId, 'view'));
    },
    likeCommended: function(articleId, commentId, token) {
      actionDataActions.putComment(articleId, {cid: commentId, like: true}, token)
    }
  }
}

const ArticleDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail)

export default ArticleDetailContainer;
