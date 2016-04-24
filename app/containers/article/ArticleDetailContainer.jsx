import { connect } from 'react-redux';

import ArticleDetail from '../../views/article/ArticleDetail.jsx';

const mapStateToProps = (state, ownProps) => {
  const _id = ownProps.params.articleId;
  return {
    article: state.article.getIn(['detail', _id]).toJSON(),
    comment: state.article.getIn(['comment', _id]).toJSON(),
    error: state.article.get('error').toJSON(),
  };
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const ArticleDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail)

export default ArticleDetailContainer;
