import React from 'react';

// 导入 Containre 组件
import HomePageContainer from './HomePage/HomePageContainer.jsx';
import MessagePageContainer from './MessagePage/MessagePageContainer.jsx';
import UserPageContainer from './UserPage/UserPageContainer.jsx';

// 导入 Dump 组件
import SwipeLayer from '../SwipeLayer/SwipeLayer.jsx';
import BottomNavBar from './BottomNavBar.jsx';
import TopBar from './TopBar.jsx';

// 导入样式
import styles from './MainShowPage.scss';


/**
 * 	组件类型为 Container
 * 	目的: 对主显示页面进行 Router, 包括: Home, Message, User, Search, etc.
 *       同时还会触发其父路由, 包括: ArticleDetail, etc.
 *  @func: onRouterCallBack(page_name, page_paras_array)
 */
export default class MainShowPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: '首页',
		}

		this.clickSide = this.clickSide.bind(this);
		this.clickSearch = this.clickSearch.bind(this);
		this.clickNavItem = this.clickNavItem.bind(this);
		this.completedAtType = this.completedAtType.bind(this);
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

	clickSide() {
		this.props.onClickSide();
	}

	clickSearch() {
		this.props.onClickSearch();
	}

	clickNavItem(pageName) {
		this.setState({currentPage: pageName});
	}

	completedAtType(type) {
		if (type == 'left2right') this.props.onClickSide();
	}

	render() {
		return (
			<div className={styles.container}>
				<TopBar
					onClickSide={this.clickSide}
					onClickSearch={this.clickSearch}
				/>
				<SwipeLayer
					touchType="left2right"
					touchArritube={{side:true, threshold:40}}
					onCompletedAtType={this.completedAtType}
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
