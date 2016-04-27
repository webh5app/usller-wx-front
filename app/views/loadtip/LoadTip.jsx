import React from 'react';
import classnames from 'classnames';

import styles from './LoadTip.scss';

class LoadTip extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, document.body.scrollHeight)
  }


  render() {
    return (
      <div ref="container" className={styles.loadTipContainer}>
        <span className={classnames('fa', 'fa-spinner', styles.icon)}></span>
        <span className={styles.info}>{this.props.info}</span>
      </div>
    );
  }
}

export default LoadTip;
