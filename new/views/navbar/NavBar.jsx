import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import SideBar from './SideBar.jsx';

import styles from './NavBar.scss';

const NavIconItem = ({name, icon, floatDir='left', active=false}) => (
  <div
    className={classnames(
      styles.itemWrapper,
      styles.iconWrapper,
      {
        [styles.rightWrapper]: floatDir === 'right',
      }
    )}
  >
    <span className={"fa fa-"+icon} />
  </div>
);

const NavFontItem = ({name, description, floatDir='left', active=false}) => (
  <div
    className={classnames(
      styles.itemWrapper,
      styles.fontWrapper,
      {
        [styles.rightWrapper]: floatDir === 'right',
        [styles.itemActive]: active === name
      }
    )}
    >
    {description}
  </div>
);

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'close',
    }

    this.clickItem = this.clickItem.bind(this);
    this.renderSidebar = this.renderSidebar.bind(this);
  }

  clickItem() {
    this.setState({status: 'open'});
  }

  renderSidebar() {
    return (
      <div className={styles.SidebarContainer}>
        <div className={styles.topWrapper}>
          <span>UBER</span>
        </div>
        <div className={styles.middleWrapper}>
        </div>
        <div className={styles.bottomWrapper}>
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
        onClick={this.clickItem}
      >
        <span className={"fa fa-bars"} />
        { this.state.status === 'open' ? this.renderSidebar : null }
      </div>
    );
  }
}


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.topNavBarContainer}>
        <SideBar />
        <Link to="/article">
          <NavFontItem
            name="article"
            description="文章"
            active={this.props.active}
          />
        </Link>
        <Link to="/post">
          <NavFontItem
            name="post"
            description="帖子"
            active={this.props.active}
          />
        </Link>
        <Link to="account">
          <NavIconItem
            name="account"
            icon="user"
            floatDir="right"
            active={this.props.active}
          />
        </Link>
        <Link to="/search">
          <NavIconItem
            name="search"
            icon="search"
            floatDir="right"
            active={this.props.active}
          />
        </Link>
        <Link to="/message">
          <NavIconItem
            name="message"
            icon="bell"
            floatDir="right"
            active={this.props.active}
          />
        </Link>
      </div>
    );
  }
}

NavBar.propTypes = {
  active: React.PropTypes.oneOf(['sidebar', 'article', 'post', 'message', 'search', 'account']),
}

NavBar.defaultProps = {
  active: 'article',
}

export default NavBar;
