import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import PostList from '../../views/post/PostList.jsx';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickCard: function(id) {
      hashHistory.push('/post/'+id);
    }
  }
}

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

export default PostListContainer;
