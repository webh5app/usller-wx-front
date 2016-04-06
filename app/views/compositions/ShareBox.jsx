import React from 'react';

import styles from './ShareBox.scss';

class ShareBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.maskWrapper}></div>
        <div className={styles.boxWrapper}>
          <div className={styles.boxContainer}>
          </div>
        </div>
      </div>
    );
  }
}
