import React from 'react';
import classnames from 'classnames';

import styles from './IconFloatButton.scss';

class FloatButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      backgroundColor: this.props.bgColor,
      color: this.props.color,
      top: this.props.position.top,
      left: this.props.position.left,
      right: this.props.position.right,
      bottom: this.props.position.bottom,
      zIndex: this.props.position.zIndex,
    }

    return (
      <div className={styles.floatButtonWrapper} style={style} onClick={this.props.click}>
        <span className={classnames('fa', 'fa-'+this.props.icon)} />
      </div>
    );
  }
}

FloatButton.propTypes = {
  bgColor: React.PropTypes.string,
  color: React.PropTypes.string,
  position: React.PropTypes.shape({
    'top': React.PropTypes.string,
    'bottom': React.PropTypes.string,
    'left': React.PropTypes.string,
    'right': React.PropTypes.string,
    'zIndex': React.PropTypes.string,
  }),
  icon: React.PropTypes.string.isRequired,
  click: React.PropTypes.func.isRequired,
}

FloatButton.defaultProps = {
  bgColor: 'rgba(255,78,78,0.78)',
  color: 'white',
  position: {
    'top': 'none',
    'bottom': 'none',
    'left': 'none',
    'right': 'none',
    'zIndex': '0',
  }
}

export default FloatButton;
