import React from 'react';
import classnames from 'classnames';

import styles from './PostEdit.scss';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);

    this.clickEdit = this.clickEdit.bind(this);
  }

  clickEdit() {

  }

  render() {
    return (
      <div
        style={{bottom: this.props.position.bottom, right: this.props.position.right}}
        className={styles.postEditContainer}
        onClick={this.clickEdit}
      >
        <div className={styles.contentWrapper}>
          <span className={classnames("fa", "fa-pencil", styles.icon)} />
        </div>
      </div>
    );
  }
}

PostEdit.propTypes = {
  position: React.PropTypes.shape({
    bottom: React.PropTypes.string,
    right: React.PropTypes.string
  })
}

PostEdit.defaultProps = {
  position: {
    bottom: '0',
    right: '0',
  }
}

export default PostEdit;
