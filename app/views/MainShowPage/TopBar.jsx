import React from 'react';

import styles from './TopBar.scss';

const propTypes = {
	onClickSide: React.PropTypes.func.isRequired,
	onClickSearch: React.PropTypes.func.isRequired
};

export default class TopBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={"fa fa-reorder " + styles.icon} onClick={this.props.onClickSide}>
				</div>
				<div className={styles.logoWrapper}>
					uber
				</div>
				<div className={"fa fa-search " + styles.icon} onClick={this.props.onClickSearch}>
				</div>
			</div>
		);
	}
}

TopBar.propTypes = propTypes;
