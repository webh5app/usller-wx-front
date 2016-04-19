import { connect } from 'react-redux';

import PostDetail from '../../views/post/PostDetail.jsx';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    close: function() {
      history.go(-1);
    }
  }
}

const PostDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)

export default PostDetailContainer;
