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
      // 缓存文章
      if (detail[articleId]) {
        if (Date.now() - detail[articleId].lastUpdated < settings.article.timeout) return;
      }
      dispatch(articleDataActions.fetchArticleDetail(articleId));

      // 并没有缓存评论
      dispatch(articleDataActions.fetchCommentList(articleId));
    },

    likeArticle: function(article, user) {
      dispatch(articleDataActions.postArticleLike(article.id, `token=${user.token}`));

      if (!article.meta.likeEnable)
        dispatch(articleUIActions.actionArticleLike(article.id, 'like'));

    },

    likeComment: function(article, comment, cid, user) {
      dispatch(articleDataActions.postCommentLike(article.id, cid, `token=${user.token}`));

      let _f = true;
      comment.comment.map((item) => {
        if (item.cid == cid && item.meta.likeEnable) {
          _f = false;
        }
      });
      if (_f)
        dispatch(articleUIActions.actionCommentLike(article.id, cid));
    },

    postComment: function(article, content, user) {
      dispatch(articleDataActions.postComment(article.id, `content=${content}&token=${user.token}`));
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
