import React from 'react';

import styles from './ShareBox.scss';

class ShareBox extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMound() {
    this.refs.box.focus();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.maskWrapper} onClick={this.props.onCancel}></div>
        <div className={styles.boxWrapper}>
          <div ref="box" className={styles.boxContainer} onBlur={this.props.onCancel}/>
        </div>
      </div>
    );
  }
}

export default ShareBox;
