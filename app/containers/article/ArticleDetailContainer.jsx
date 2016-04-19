import { connect } from 'react-redux';

import ArticleDetail from '../../views/article/ArticleDetail.jsx';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const ArticleDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail)

export default ArticleDetailContainer;
