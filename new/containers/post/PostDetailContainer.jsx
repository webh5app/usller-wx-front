import { connect } from 'react-redux';

import PostDetail from '../../views/post/PostDetail.jsx';

const mapStateToProps = ({state, ownProps}) => {
  return {};
}

const PostDetailContainer = connect(
  mapStateToProps
)(PostDetail)

export default PostDetailContainer;
