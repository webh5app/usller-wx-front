import React from 'react';

// 导入 container components
import HomePageContainer from '../../containers/mainFramework/HomePageContainer.jsx';

// 导入 dump components
import MessagePage from './MessagePage/MessagePage.jsx';
import UserPage from './UserPage/UserPage.jsx';
import SwipeLayer from '../components/SwipeLayer/SwipeLayer.jsx';
import BottomNavBar from './BottomNavBar.jsx';
import TopBar from './TopBar.jsx';

// 导入样式
import styles from './MainShowPage.scss';

class MainShowPage extends React.Component {
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
					return <MessagePage />;
				case '用户':
					return <UserPage />;
				default:
					return null;
		}
	}

	// 底栏触发页面切换
	clickNavItem(pageName) {
		this.setState({currentPage: pageName});
	}

	render() {
		// 底栏触发页面路由, Side 为叠加页面, Search 为新页面
		return (
			<div className={styles.container}>
				<TopBar
					onClickSide={this.props.clickSide}
					onClickSearch={this.props.clickSearch}
				/>
				<SwipeLayer
					touchType="left2right"
					touchArritube={{side:true, threshold:40}}
					onCompletedAtType={this.props.clickSide}
				>
					<div className={styles.viewWrapper} style={{minHeight: window.innerHeight}}>
						{ this.switchPage(this.state.currentPage) }
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

export default MainShowPage;
