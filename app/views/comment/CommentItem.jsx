import React from 'react';
import classnames from 'classnames';

import styles from './CommentItem.scss';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderResponse(response) {
    return (
      <div className={styles.response}>
        <span className={styles.light}>题主回复: </span>
        <span className={styles.body}>{ response }</span>
      </div> : null
    );
  }

  render() {
    const comment = this.props.comment;

    return (
      <div className={styles.commentItemContainer}>
        <div className={styles.profile}>
          <img src={comment.author.imageURL} />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.header}>
            { comment.author.name }
          </div>
          <div className={styles.body}>
            { comment.content }
          </div>
          <div className={styles.footer}>
            <div className={styles.right}>
              <div className={styles.clickItem} onClick={this.props.clickComment.bind(null, comment.author.name)}>
                <span className={classnames('fa', 'fa-comments', styles.icon)} />
                回复
              </div>
              <div className={styles.clickItem} onClick={this.props.clickLike}>
                <span className={classnames('fa', 'fa-thumbs-o-up', styles.icon)} />
                { comment.meta.like }
              </div>
            </div>
            <div className={styles.left}>
              { comment.datetime }
            </div>
          </div>
        </div>
        { comment.response ? this.renderResponse(comment.response):null }
      </div>
    );
  }
};

CommentItem.propTypes = {
  comment: React.PropTypes.object.isRequired,
  clickLike: React.PropTypes.func.isRequired,
  clickComment: React.PropTypes.func.isRequired,
}

export default CommentItem;
