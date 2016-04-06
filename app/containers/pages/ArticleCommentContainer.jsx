import { connect } from 'react-redux';

import { toPage, pageNames } from '../../actions/routerActions';

import ArticleComment from '../../views/pages/ArticleComment/ArticleComment.jsx';

import { commentList } from '../../datas/comments';

const mapStateToProps = (state) => {
  return {
    commentList: commentList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCancel: () => {
      dispatch(toPage(pageNames.MainShowPage));
    }
  };
}

const ArticleCommentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleComment);

export default ArticleCommentContainer;
