import React from 'react';
import classnames from 'classnames';

import styles from './EditTemplate.scss';

class EditTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    }

    this.clickSend = this.clickSend.bind(this);
    this.clickChange = this.clickChange.bind(this);
  }

  clickSend() {
    this.props.send(this.state.content);
  }

  clickChange() {
    this.setState({content: this.input.value});
    console.log("TO: " + this.props.at + "!!Content> " + this.state.content);
  }

  renderAt(name) {
    return (
      <div className={styles.editAtWrapper} >
        回复 {name}
      </div>
    );
  }

  render() {
    return (
      <div className={styles.editContainer}>
        <div className={styles.editHeader}>
          <div className={styles.left} onClick={this.props.close}>
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
          { this.props.at ? this.renderAt(this.props.at):null }
          <textarea rows="11" placeholder="在这里输入内容" onChange={this.clickChange} ref={(dom) => this.input = dom}/>
        </div>
      </div>
    );
  }
}

EditTemplate.PropTypes = {
  at: React.PropTypes.string,
  send: React.PropTypes.func.isRequired,
  close: React.PropTypes.func.isRequired,
}

export default EditTemplate;
