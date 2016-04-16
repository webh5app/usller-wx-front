import { connect } from 'react-redux';

import PostList from '../../views/post/PostList.jsx';

const mapStateToProps = ({state, ownProps}) => {
  return {};
}

const PostListContainer = connect(
  mapStateToProps
)(PostList)

export default PostListContainer;
