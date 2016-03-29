import React from 'react';

// 导入 Containre 组件
import HomePageContainer from '../../containers/MainShowPage/HomePageContainer.jsx';

// 导入 Dump 组件
import MessagePage from './MessagePage/MessagePage.jsx';
import UserPage from './UserPage/UserPage.jsx';
import SwipeLayer from '../SwipeLayer/SwipeLayer.jsx';
import BottomNavBar from './BottomNavBar.jsx';
import TopBar from './TopBar.jsx';

// 导入样式
import styles from './MainShowPage.scss';

export default class MainShowPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: '首页',
		}

		this.clickNavItem = this.clickNavItem.bind(this);
	}

	// 页面切换
	switchPage(pageName) {
		switch (pageName) {
				case '首页':
					return <HomePageContainer />;
				case '消息':
					return <MessagePageContainer />;
				case '用户':
					return <UserPageContainer />;
				default:
					return null;
		}
	}

	clickNavItem(pageName) {
		this.setState({currentPage: pageName});
	}

	render() {
		return (
			<div className={styles.container}>
				<TopBar
					onClickSide={this.props.clickSide}
					onClickSearch={this.props.clickSearch}
				/>
				<SwipeLayer
					touchType="left2right"
					touchArritube={{side:true, threshold:40}}
					onCompletedAtType={this.props.completedAtType}
				>
					<div className={styles.viewWrapper} style={{minHeight: window.innerHeight}}>
						{this.switchPage(this.state.currentPage)}
					</div>
				</SwipeLayer>
				<div className={styles.bottomNavBarWrapper}>
					<BottomNavBar
						onClickNavItem={this.clickNavItem}
					/>
				</div>
			</div>
		);
	}
}
