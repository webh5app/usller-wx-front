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
            <img src="http://7xljtg.com1.z0.glb.clouddn.com/uber-logo-rect-youbu.png"/>
          </div>
          <div className={styles.middleWrapper}>
            <a href="http://mp.weixin.qq.com/mp/homepage?__biz=MzAwODc2MzA2NA==&hid=1&sn=5ea8149bf44078ce4e3ec0d03cecce4e&pass_ticket=DQDHUZmnM2TLMx5ZA3cmIA3I%2BZ%2FwHdRKiEDdqsxmtesTZxYU7oAKEnzIyfInqw0a1">
              <div className={styles.barItem}>
                  <span className={classnames('fa', 'fa-question-circle', styles.icon)} />
                  <span>帮助</span>
              </div>
            </a>
            <div className={styles.barItem}>
              <span className={classnames('fa', 'fa-registered', styles.icon)} />
              <span>注册</span>
            </div>
            <div className={styles.barItem}>
              <span className={classnames('fa', 'fa-heart', styles.icon)} />
              <span>App</span>
            </div>
          </div>
          <div className={styles.bottomWrapper}>
            <span className={classnames('fa', 'fa-cog', styles.icon)} />
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
