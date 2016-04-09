import React from 'react';
import objectAssign from 'object-assign';

import styles from './ArticleComment.scss';

class ArticleComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentList: this.props.commentList,
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.refs.input.addEventListener('focus', this.focusInput.bind(this));
    this.refs.input.addEventListener('blur', this.blurInput.bind(this));
  }

  componentWillUnMount() {
    this.refs.input.removeEventListener('focus', this.focusInput.bind(this));
    this.refs.input.removeEventListener('blur', this.blurInput.bind(this));
  }

  focusInput() {
    const input = this.refs.input;
    input.rows = 5;
  }

  blurInput() {
    const input = this.refs.input;
    input.rows = 1;
  }

  sendMessage() {
    const _commentList = objectAssign([], this.state.commentList);
    const input = this.refs.input;
    const datetime = new Date();

    if (!input.value) return;

    // TODO 部分用户数据需要重新获取
    const comment = {
      author: {
        name: '新用户',
        imageURL: 'http://p2.wmpic.me/article/2015/03/16/1426483393_yCesCgkT.jpeg',
      },
      content: input.value,
      datetime: `${datetime.getYear()%100}年${datetime.getMonth()+1}月${datetime.getDate()}日`,
    }

    _commentList.push(comment);
    this.setState({commentList: _commentList});
    this.props.onSendMessage(input.value);
    input.value = '';
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
    // TODO 排序功能
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
          { this.renderCommentList(this.state.commentList) }
        </div>
        <div className={styles.sendMessage}>
          <textarea placeholder="请在这里输入评论" rows="1" ref="input" onFocus={this.inputFoucs}></textarea>
          <span className={"fa fa-paper-plane " + styles.icon}
            onClick={this.sendMessage}
          />
        </div>
      </div>
    );
    // TODO 做完这个发送按钮 参见知乎
  }
}

export default ArticleComment;
