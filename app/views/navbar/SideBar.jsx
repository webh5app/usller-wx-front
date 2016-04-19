import React from 'react';
import classnames from 'classnames';

import styles from './SideBar.scss';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'close',
    }

    this.clickIcon = this.clickIcon.bind(this);
    this.clickMask = this.clickMask.bind(this);
    this.renderSidebar = this.renderSidebar.bind(this);
  }

  clickIcon() {
    this.setState({status: 'open'});
  }

  clickMask(e) {
    e.stopPropagation()
    this.setState({status: 'close'});
  }

  renderSidebar() {
    return (
      <div className={styles.sideBarContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.topWrapper}>
            <span>UBER</span>
          </div>
          <div className={styles.middleWrapper}>
            <div className={styles.barItem}>
              <span>下载App</span>
            </div>
            <div className={styles.barItem}>
              <span>抽奖活动</span>
            </div>
            <div className={styles.barItem}>
              <span>调查问卷</span>
            </div>
          </div>
          <div className={styles.bottomWrapper}>
            <span>设置</span>
          </div>
        </div>
        <div onClick={this.clickMask} className={styles.maskWrapper}>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div
        className={classnames(
          styles.itemWrapper,
          styles.iconWrapper
        )}
        onClick={this.clickIcon}
      >
        <span className={"fa fa-bars"} />
        { this.state.status === 'open' ? this.renderSidebar() : null }
      </div>
    );
  }
}

export default SideBar;
