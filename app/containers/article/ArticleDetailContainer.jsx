import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

import settings from '../../settings';

import * as articleUIActions from '../../actions/articleUI';
import * as articleDataActions from '../../actions/articleData';

import ArticleDetail from '../../views/article/ArticleDetail.jsx';

const mapStateToProps = (state, ownProps) => {
  const _id = ownProps.params.articleId;
  const _article = state.article.getIn(['detail', _id]);
  const _comment = state.article.getIn(['comment', _id]);

  let article_json = {};
  let comment_json = {};

  if (_article) article_json = _article.toJSON();

  if (_comment) comment_json = _comment.toJSON();

  return {
    detail: state.article.get('detail').toJSON(),
    article: article_json,
    comment: comment_json,
    user: state.user.toJSON(),
    error: state.article.get('error').toJSON(),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    initial: function(detail, articleId) {
      if (detail[articleId]) {
        if (Date.now() - detail[articleId].lastUpdated < settings.article.timeout) {
          return;
        }
      }
      dispatch(articleDataActions.fetchArticleDetail(articleId));
      dispatch(articleDataActions.fetchCommentList(articleId));
    },

    likeArticle: function(articleId, token) {
      dispatch(articleDataActions.postArticleLike(articleId, {token: token}));
      dispatch(articleUIActions.actionArticleAction(articleId, 'like'));
    },

    likeCommend: function(articleId, commentId, token) {
      dispatch(articleDataActions.postCommentLike(articleId, {cid: commentId, token: token}));
    },

    postComment: function(articleId, body, token) {
      dispatch(articleDataActions.postComment(articleId, `content=${body}&token=${token}`));
    },

    toArticleList: function() {
      hashHistory.push('/article');
    }
  }
}

const ArticleDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail)

export default ArticleDetailContainer;
