import React from 'react';
import classnames from 'classnames';

import IconFloatButton from '../../components/IconFloatButton/IconFloatButton.jsx';
import DateTimeSpan from '../../components/DateTimeSpan/DateTimeSpan.jsx';
import EditTemplate from '../edit/EditTemplate.jsx';
import CommentTemplate from '../comment/CommentTemplate.jsx';

import styles from './PostDetail.scss';

const PostHeader = ({post, postLike}) => (
  <div className={styles.postHeader}>
    <div className={styles.info}>
      <img src={post.user.portrait} />
      <div className={styles.author}>
        <div className={styles.name}>
          { post.user.name }
        </div>
        <div className={styles.datetime}>
          <DateTimeSpan datetime={post.meta.datetime} />
        </div>
      </div>
    </div>
    <div className={styles.title}>
      { post.title }
    </div>
    <div className={styles.body}>
      { post.content}
    </div>
    <div className={styles.operateWrapper} onClick={postLike}>
      <div className={styles.likeItem}>
        <span className={classnames('fa', 'fa-heart' + (post.meta.likeEnable ? '':'-o'), styles.icon)}/>
        喜欢
      </div>
    </div>
    <div className={styles.meta}>
      <span className={styles.metaItem}>「{post.meta.view}」人看过·</span>
      <span className={styles.metaItem}>「{post.meta.like}」人喜欢·</span>
      <span className={styles.metaItem}>「{post.meta.comment}」人评论</span>
    </div>
  </div>
);

class PostDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentToggled: false,
      atName: null,
    }

    this.postClose = this.postClose.bind(this);
    this.postLike = this.postLike.bind(this);

    this.commentEdit = this.commentEdit.bind(this);
    this.commentLike = this.commentLike.bind(this);

    this.editSend = this.editSend.bind(this);
    this.editClose = this.editClose.bind(this);
  }

  componentDidMount() {
    this.props.initial(this.props.params.postId);
    window.scrollTo(0,0);
  }

  postClose() {
    history.go(-1);
  }

  postLike() {
    this.props.postPostLike(this.props.params.postId, this.props.user);
  }

  commentEdit(atName) {
    this.setState({commentToggled: true, atName: atName});
  }

  commentLike(cid) {
    // NOTE 暂时不上线
    // this.props.postPostCommentLike(this.props.params.postId, this.props.user, cid)
  }

  editSend(content) {
    this.props.postPostComment(this.props.params.postId, this.props.user, content);
    this.setState({commentToggled: false, atName: null});
  }

  editClose() {
    this.setState({commentToggled: false, atName: null});
  }

  render() {
    let _comment = [];
    let _detail = {
      user: {},
      meta: {},
    };

    if (this.props.comment) _comment = this.props.comment.data;

    if (this.props.detail) _detail = this.props.detail;

    return (
      <div className={styles.postDetailContainer} style={{minHeight: window.innerHeight}}>
        <PostHeader post={_detail} postLike={this.postLike}/>
        <CommentTemplate commentList={_comment} clickLike={this.commentLike} clickEdit={this.commentEdit}/>
        <div className={styles.floatButtonContainer}>
          <IconFloatButton
            icon="chevron-left"
            position={{
              bottom: '1rem',
              left: '1rem',
              zIndex: '100'
            }}
            bgColor='rgba(0,0,0,0.78)'
            click={this.postClose}
          />
          <IconFloatButton
            icon="comments"
            position={{
              bottom: '1rem',
              right: '1rem',
              zIndex: '100'
            }}
            click={this.commentEdit.bind(null, null)}
          />

        </div>
        {
          this.state.commentToggled ?
          <EditTemplate
            at={this.state.atName}
            close={this.editClose}
            send={this.editSend}
          /> : null
        }
      </div>
    );
  }
}

export default PostDetail;
