import { connect } from 'react-redux';

import PostDetail from '../../views/post/PostDetail.jsx';

import * as postDataActions from '../../actions/postData';
import * as postUIActions from '../../actions/postUI';

const mapStateToProps = (state, ownProps) => {
  const _id = ownProps.params.postId;
  const _detail = state.post.get('detail').toJSON();
  const _comment = state.post.get('comment').toJSON();

  return {
    detail: _detail[_id],
    user: state.user.toJSON(),
    comment: _comment[_id],
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    // 加载数据
    initial: function(pid) {
      // 判断是否有缓存, 并且是否需要更新
      dispatch(postDataActions.fetchPostDetail(pid));
      // 判断是否有缓存, 并且是否需要更新
      dispatch(postDataActions.fetchPostCommentList(pid));
    },

    // 发表评论
    postPostComment: function(pid, user, content) {
      dispatch(postDataActions.postPostComment(pid, `token=${user.token}&content=${content}`));
    },

    // 给帖子的评论点赞
    postPostCommentLike: function(pid, user, cid) {
      dispatch(postDataActions.postCommentLike(pid, cid, `token=${user.token}`)).then(() => {
        dispatch(postUIActions.postCommentLikeAction(pid, cid));
      });
    },

    postPostLike: function(pid, user) {
      dispatch(postDataActions.postPostLike(pid,  `token=${user.token}`)).then(() => {
        dispatch(postUIActions.postPostLikeAction(pid));
      })
    },
  }
}

const PostDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)

export default PostDetailContainer;
