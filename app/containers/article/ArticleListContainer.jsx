import { hashHistory } from 'react-router';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';

import settings from '../../settings';

import * as articleDataActions from '../../actions/articleData';
import * as articleUIActions from '../../actions/articleUI';

import ArticleList from '../../views/article/ArticleList.jsx';


const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.article.get('isFetching'),
    lastUpdated: state.article.get('lastUpdated'),
    count: state.article.get('count'),
    list: state.article.get('list').toJSON(),
    error: state.article.get('error').toJSON(),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    initial: function(lastUpdated, count) {
      if (count == 0) {
        dispatch(articleDataActions.fetchArticleList(0, settings.article.pagination));
      } else {
        // 缓存文章列表
        if (Date.now() - lastUpdated > settings.timeout) {
          articleUIActions.articleListInvalided();
          articleDataActions.fetchArticleList(0, count);
        }
      }
    },
    // 碰到底端
    addList: function(count) {
      dispatch(articleDataActions.fetchArticleList(count, count+settings.article.pagination));
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
