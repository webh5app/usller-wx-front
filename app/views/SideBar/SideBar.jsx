import React from 'react';

import styles from './SideBar.scss';

const propTypes = {
	onClickSideItem: React.PropTypes.func.isRequired
};

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.container} >
				<div className={styles.logoWrapper}>
					uber
				</div>
				<ul className={styles.navWrapper}>
					<li onClick={this.props.onClickSideItem.bind(null, '帮助')}>
						<span className={"fa fa-user " + styles.icon}></span>
						帮助
					</li>
					<li onClick={this.props.onClickSideItem.bind(null, '通知')}>
						<span className={"fa fa-inbox " + styles.icon}></span>
						通知
					</li>
					<li onClick={this.props.onClickSideItem.bind(null, '注册')}>
						<span className={"fa fa-sign-in " + styles.icon}></span>
						注册
					</li>
					<li onClick={this.props.onClickSideItem.bind(null, 'App')}>
						<span className={"fa fa-map-marker " + styles.icon}></span>
						APP
					</li>
					<li onClick={this.props.onClickSideItem.bind(null, '设置')}>
						<span className={"fa fa-cog " + styles.icon}></span>
						设置
					</li>
				</ul>
			</div>
		);
	}
}

SideBar.propTypes = propTypes;