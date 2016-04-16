import { hashHistory } from 'react-router';
import { connect } from 'react-redux';

import ArticleList from '../../views/article/ArticleList.jsx';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickSider: function(id) {
      hashHistory.push('/article/'+id);
    },
    clickCard: function(id) {
      hashHistory.push('/article/'+id);
    }
  }
}

const ArticleListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList)

export default ArticleListContainer;
