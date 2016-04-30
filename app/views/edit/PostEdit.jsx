import React from 'react';
import classnames from 'classnames';

import styles from './PostEdit.scss';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    }

    this.clickSend = this.clickSend.bind(this);
    this.clickClose = this.clickClose.bind(this);

    this.changeTitle = this.changeTitle.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  clickClose() {
    this.props.close();
  }

  clickSend() {
    this.props.send(this.state.title, this.state.content);
  }

  changeContent() {
    this.setState({content: this.refs.content.value});
  }

  changeTitle() {
    this.setState({title: this.refs.title.value});
  }

  render() {
    return (
      <div className={styles.editContainer}>
        <div className={styles.editHeader}>
          <div className={styles.left} onClick={this.clickClose}>
              <span className={classnames('fa', 'fa-close', styles.icon)}/>
              关闭
          </div>
          <div className={styles.right}>
            <div className={styles.send} onClick={this.clickSend}>
              <span className={classnames('fa', 'fa-send', styles.icon)}/>
              <span className={styles.text}>发送</span>
            </div>
          </div>
        </div>
        <div className={styles.editContent}>
          <div className={styles.editItem}>
            <span className={styles.titleLabel}>标题: </span>
            <input type="text" placeholder="在这里输入标题" onChange={this.changeTitle} ref="title" />
          </div>
          <div className={styles.editItem}>
            <span className={styles.contentLabel}>内容: </span>
            <textarea rows="11" placeholder="在这里输入内容" onChange={this.changeContent} ref="content"/>
          </div>
        </div>
      </div>
    );
  }
}

PostEdit.PropTypes = {
  send: React.PropTypes.func.isRequired,
  close: React.PropTypes.func.isRequired,
}

export default PostEdit;
