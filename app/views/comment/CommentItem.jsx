import React from 'react';
import classnames from 'classnames';

import DateTimeSpan from '../../components/DateTimeSpan/DateTimeSpan';

import styles from './CommentItem.scss';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderResponse(response) {
    return (
      <div className={styles.response}>
        <span className={styles.light}>题主回复: </span>
        <span className={styles.body}>{ response.content }</span>
      </div>
    );
  }

  render() {
    const comment = this.props.comment;
    return (
      <div className={styles.commentItemContainer}>
        <div className={styles.profile}>
          <img src={comment.user.portrait} />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.header}>
            { comment.user.name }
          </div>
          <div className={styles.footer}>
            <div className={styles.right}>
              { comment.meta.replyEnable ?
                <div className={styles.clickItem} onClick={this.props.clickComment.bind(null, comment.user.id)}>
                  <span className={classnames('fa', 'fa-comments', styles.icon)} />
                  回复
                </div> : null
              }
              <div className={comment.meta.likeEnable ? styles.clickItemActive : styles.clickItem} onClick={this.props.clickLike}>
                <span className={classnames('fa', 'fa-thumbs-o-up', styles.icon)} />
                { comment.meta.like }
              </div>
            </div>
            <div className={styles.left}>
              <DateTimeSpan
                styles={{size: '12px', color: '#4f4f4f', isBold: false}}
                type="Readable"
                datetime={comment.meta.datetime}
              />
            </div>
          </div>
          <div className={styles.body}>
            { comment.content }
          </div>
        </div>
        { comment.response ? this.renderResponse(comment.response) : null }
      </div>
    );
  }
};

CommentItem.propTypes = {
  comment: React.PropTypes.shape({
    user: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      portrait: React.PropTypes.string.siRequired,
    }),
    content: React.PropTypes.string.isRequired,
    cid: React.PropTypes.number.isRequired,
    meta: React.PropTypes.shape({
      likeEnable: React.PropTypes.bool.isRequired,
      like: React.PropTypes.number.isRequired,
      replyEnable: React.PropTypes.bool.isRequired,
      datetime: React.PropTypes.number.isRequired,
    }),
  }),
  clickLike: React.PropTypes.func.isRequired,
  clickComment: React.PropTypes.func.isRequired,
}

export default CommentItem;
