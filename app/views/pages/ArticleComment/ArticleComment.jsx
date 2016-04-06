import React from 'react';

import styles from './ArticleComment.scss';

class ArticleComment extends React.Component {
  constructor(props) {
    super(props);

    this.placeholder = '请在这里输入评论';
  }

  componentDidMount() {
    this.refs.input.value = this.placeholder;
    this.refs.input.addEventListener('focus', this.focusInput.bind(this));
    this.refs.input.addEventListener('blur', this.blurInput.bind(this));
  }

  componentWillUnMount() {
    this.refs.input.removeEventListener('focus', this.focusInput.bind(this));
    this.refs.input.removeEventListener('blur', this.blurInput.bind(this));
  }

  focusInput() {
    const input = this.refs.input;
    if (input.value === this.placeholder) {
      input.value = '';
    }
    input.rows = 5;
  }

  blurInput() {
    const input = this.refs.input;
    if (input.value === '') {
      input.value = this.placeholder;
    }
    input.rows = 1;
  }

  sendMessage() {
    this.props.onSendMessage(this.refs.input.value);
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
          <textarea rows="1" ref="input" onFocus={this.inputFoucs}></textarea>
          <span className={"fa fa-paper-plane " + styles.icon}
            onClick={this.sendMessage.bind(this)}
          />
        </div>
      </div>
    );
    // TODO 做完这个发送按钮 参见知乎
  }
}

export default ArticleComment;
