import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import PostList from '../../views/post/PostList.jsx';

import * as postDataActions from '../../actions/postData';
import * as postUIActions from '../../actions/postUI';

import settings from '../../settings';

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.post.get('isFetching'),
    user: state.user.toJSON(),
    label: state.post.get('label').toJSON(),
    post: state.post.get('post').toJSON(),
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // 初始化
    getLabelList : function() {
      dispatch(postDataActions.fetchLabel());
    },
    clickCard: function(id) {
      hashHistory.push('/post/'+id);
    },
    getLabelData: function(label) {
      dispatch(postDataActions.fetchPostList(label, 0, settings.post.pagination));
    },
    // 碰到底端
    addList: function(tag, count) {
      dispatch(postDataActions.fetchPostList(tag, count, count+settings.post.pagination));
    },
    postPost: function(tag, user, title, content) {
      dispatch(postDataActions.postPost(`tag=${tag}&token=${user.token}&title=${title}&content=${content}`));
    }
  }
}

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

export default PostListContainer;
