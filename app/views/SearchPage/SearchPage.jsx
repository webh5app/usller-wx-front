import React from 'react';

import styles from './SearchPage.scss';

export default class SearchPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.container}>
				<div onClick={this.props.onCancel}>关闭这个页面</div>
			</div>
		);
	}
}
