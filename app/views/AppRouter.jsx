import React from 'react';

// 导入 container compoenets
import MainShowPageContainer from '../containers/mainFramework/MainShowPageContainer.jsx';
import ArticleDetailContainer from '../containers/pages/ArticleDetailContainer.jsx';
import SearchPageContainer from '../containers/pages/SearchPageContainer.jsx';
import SideBarContainer from '../containers/compositions/SideBarContainer.jsx';

// 导入 dump components
import PageNotFound from './components/PageNotFound/PageNotFound.jsx';

// 导入样式
import styles from './AppRouter.scss';

import { pageNames, compositionNames } from '../actions/routerActions';

class AppRouter extends React.Component {
	switchPage(pageName) {
		switch (pageName) {
			case pageNames.MainShowPage:
				return <MainShowPageContainer />
			case pageNames.ArticleDetail:
				return <ArticleDetailContainer />
			case pageNames.SearchPage:
				return <SearchPageContainer />
			default:
				return <PageNotFound />
		}
	}

	showComposition(activeName) {
		switch (activeName) {
			case compositionNames.SideBar:
				return <SideBarContainer />
			default:
				return null;
		}
	}

	render() {
		return (
			<div className={styles.pageWrapper}>
				<div className={styles.newPageWrapper}>
					{ this.switchPage(this.props.currentPage) }
				</div>
				<div style={{display: this.props.activeComposition?'block':'none'}} className={styles.compositionWrapper}>
					{ this.showComposition(this.props.activeComposition) }
				</div>
			</div>
		);
	}
}

AppRouter.propTypes = {
	currentPage: React.PropTypes.string,
	preload: React.PropTypes.object,
};

export default AppRouter;
