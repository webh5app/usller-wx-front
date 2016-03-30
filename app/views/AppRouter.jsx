import React from 'react';
import { connect } from 'react-redux';

// 导入 Container Compoennt
import MainShowPageContainer from "../containers/MainShowPage/MainShowPageContainer.jsx";
import SearchPageContainer from "../containers/FunctionPage/SearchPageContainer.jsx";
import ArticleDetailContainer from '../containers/FunctionPage/ArticleDetailContainer.jsx';

// 导入 Dumb Component
import BlockFade from './BlockFade/BlockFade.jsx';
import SideBar from './SideBar/SideBar.jsx';

// 导入样式
import styles from './AppRouter.scss';

export default class AppRouter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div ref="container" style={{height: window.innerHeight, position: 'relative'}} >
				<MainShowPageContainer />
			  <BlockFade toggled={this.state.currentPage === 'searchPage'}>
					<SearchPageContainer />
				</BlockFade>
				<BlockFade width="160px" toggled={this.state.currentPage === 'sideBar'}>
					<SideBar />
				</BlockFade>
				<BlockFade toggled={this.state.currentPage == 'articleDetail'}>
					<ArticleDetailContainer  />
					</BlockFade>
			</div>
		);
	}
}
