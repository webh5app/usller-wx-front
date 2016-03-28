import React from 'react';

import styles from './BottomNavBar.scss';

const info_list = [
	{
		icon: 'fa-home',
		name: '首页'
	},
	{
		icon: 'fa-paw',
		name: '广场'
	},
	{
		icon: 'fa-commenting',
		name: '消息'
	},
	{
		icon: 'fa-user',
		name: '用户'
	},
];

const propTypes = {
	onClickNavItem: React.PropTypes.func.isRequired
};

export default class BottomNavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: '首页'
		}

		this.clickItem = this.clickItem.bind(this);
	}

	clickItem(pageName) {
		this.setState({currentPage: pageName});
		this.props.onClickNavItem(pageName);
	}

	renderContent() {
		const currentPage = this.state.currentPage;

		return info_list.map( (item) =>
			<div
				className={`${styles.navItem} ${currentPage === item.name ? styles.active : 'null'}`}
				onClick={this.clickItem.bind(null, item.name)}
			>
				<span className={`fa ${item.icon} ${styles.icon}`}></span><br/>
				{item.name}
			</div>
		);
	}

	render() {
		return (
			<div className={styles.container}>
			{ this.renderContent() }
			</div>
		);
	}
}

BottomNavBar.propTypes = propTypes;
