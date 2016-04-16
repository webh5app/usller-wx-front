import { connect } from 'react-redux';

import ArticleDetail from '../../views/article/ArticleDetail.jsx';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const ArticleDetailContainer = connect(
  mapStateToProps
)(ArticleDetail)

export default ArticleDetailContainer;
