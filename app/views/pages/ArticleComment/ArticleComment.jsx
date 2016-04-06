import React from 'react';

import styles from './ArticleComment.scss';

class ArticleComment extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCommentList(data) {
    return data.map( (eachComment) =>
      <div className={styles.commentWrapper}>
        <img className={styles.authorImageWrapper} src={eachComment.author.imageURL} />
        <div className={styles.contentWrapper}>
          <div className={styles.authorName}>
            { eachComment.author.name }
          </div>
          <div className={styles.contentContainer}>
            { eachComment.content }
          </div>
          <div className={styles.contentBottom}>
            <span className={styles.datetime}>
            { eachComment.datetime }
            </span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.leftBar}>
            <span className={"fa fa-close " + styles.icon} onClick={this.props.onCancel}/>
            评论
          </div>
          <div className={styles.rightBar}>
            <span className={"fa fa-th-list " + styles.icon}/>
          </div>
        </div>
        <div className={styles.commentList}>
          { this.renderCommentList(this.props.commentList) }
        </div>
        <div className={styles.sendMessage}>
          <input width={window.innerWidth * 0.9 + 'px'}  type="text" placeholder="在这里写评论"/>
          <span className={"fa fa-paper-plane " + styles.icon}/>
        </div>
      </div>
    );
    // TODO 做完这个发送按钮 参见知乎
  }
}

export default ArticleComment;
