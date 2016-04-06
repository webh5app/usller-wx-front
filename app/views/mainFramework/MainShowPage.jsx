import React from 'react';

// 导入 container components
import HomePageContainer from '../../containers/mainFramework/HomePageContainer.jsx';

// 导入 dump components
import MessagePage from './MessagePage/MessagePage.jsx';
import UserPage from './UserPage/UserPage.jsx';
import SwipeLayer from '../components/SwipeLayer/SwipeLayer.jsx';
import ScrollUp from '../components/ScrollUp/ScrollUp.jsx';
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
		return (
			<div ref="container" className={styles.container} onScroll={this.scrollDown}>
				<div className={styles.topBarWrapper}>
					<TopBar
						onClickSide={this.props.clickSide}
						onClickSearch={this.props.clickSearch}
					/>
				</div>
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
				<ScrollUp showUnder={160}>
					<span className={"fa fa-arrow-up"}></span>
				</ScrollUp>
			</div>
		);
	}
}

export default MainShowPage;
