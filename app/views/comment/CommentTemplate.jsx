import React from 'react';

import CommentItem from './CommentItem.jsx';

import styles from './CommentTemplate.scss';

class CommentTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.postCommentList}>
        <div className={styles.commentHeader}>
          <div className={styles.title}>
            评论列表
          </div>
        </div>
        <div className={styles.commentList}>
        {
          this.props.commentList.map( (comment) =>
            <CommentItem comment={comment} clickComment={this.props.clickEdit} clickLike={this.props.clickLike} />
          )
        }
        </div>
      </div>
    );
  }
}

CommentTemplate.propType = {
  commentList: React.PropTypes.array.isRequired,
  clickEdit: React.PropTypes.func.isRequired,
  clickLike: React.PropTypes.func.isRequired,
}

export default CommentTemplate;
