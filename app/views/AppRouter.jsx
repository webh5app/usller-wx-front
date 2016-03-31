import React from 'react';
import { connect } from 'react-redux';

// 导入 Container Compoennt
import MainShowPageContainer from "../containers/MainShowPage/MainShowPageContainer.jsx";
import SearchPageContainer from "../containers/FunctionPage/SearchPageContainer.jsx";
import ArticleDetailContainer from '../containers/FunctionPage/ArticleDetailContainer.jsx';
import SideBarContainer from '../containers/FunctionPage/SideBarContainer.jsx';

// 导入 Dumb Component
import BlockFade from './BlockFade/BlockFade.jsx';

// 导入样式
import styles from './AppRouter.scss';

const AppRouter = ({ currentPage, preload }) => (
	<div style={{height: window.innerHeight, position: 'relative'}} >
		<MainShowPageContainer />
	  <BlockFade toggled={currentPage === 'searchPage'}>
			<SearchPageContainer />
		</BlockFade>
		<BlockFade width="160px" toggled={currentPage === 'sideBar'}>
			<SideBarContainer />
		</BlockFade>
		<BlockFade toggled={currentPage == 'articleDetail'}>
			<ArticleDetailContainer preload={preload}/>
		</BlockFade>
	</div>
);

AppRouter.propTypes = {
	currentPage: React.PropTypes.string,
	preload: React.PropTypes.object,
};

export default AppRouter;
