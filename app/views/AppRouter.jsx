import React from 'react';

// 导入 container compoenets
import MainShowPageContainer from '../containers/mainFramework/MainShowPageContainer.jsx';
import ArticleDetailContainer from '../containers/pages/ArticleDetailContainer.jsx';
import ArticleCommentContainer from '../containers/pages/ArticleCommentContainer.jsx';
import SearchPageContainer from '../containers/pages/SearchPageContainer.jsx';
import SideBarContainer from '../containers/compositions/SideBarContainer.jsx';
import ShareBoxContainer from '../containers/compositions/ShareBoxContainer.jsx';

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
        // NOTE this.props.pageProload 在这里使用
				return <ArticleDetailContainer />
			case pageNames.SearchPage:
        // NOTE this.props.pageProload 在这里使用
				return <SearchPageContainer />
      case pageNames.ArticleComment:
        return <ArticleCommentContainer />
			default:
        // NOTE this.props.pageProload 在这里使用
				return <PageNotFound />
		}
	}

	showComposition(activeName) {
		switch (activeName) {
			case compositionNames.SideBar:
        // NOTE this.props.compositionProload 在这里使用
				return <SideBarContainer />
      case compositionNames.ShareBox:
        // NOTE this.props.compositionProload 在这里使用
        return <ShareBoxContainer />
			default:
				return null;
		}
	}

	render() {
		return (
			<div className={styles.pageWrapper}>
				<div className={styles.newPageWrapper}>
					{ this.switchPage(this.props.pageName) }
				</div>
				<div style={{display: this.props.compositionName?'block':'none'}} className={styles.compositionWrapper}>
					{ this.showComposition(this.props.compositionName) }
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
