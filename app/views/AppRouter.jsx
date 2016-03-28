import React from 'react';

// 导入 Container Compoennt
import MainShowPageContainer from "./MainShowPage/MainShowPageContainer.jsx";
import SearchPageContainer from "./SearchPage/SearchPageContainer.jsx";

// 导入 Dumb Component
import BlockFade from '../components/BlockFade/BlockFade.jsx';
import SideBar from './SideBar/SideBar.jsx';

// 导入样式
import styles from './AppRouter.scss';


export default class AppRouter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: 'mainShowPage',
		}

		this.clickSide = this.clickSide.bind(this);
		this.clickSearch = this.clickSearch.bind(this);
		this.clickSideItem = this.clickSideItem.bind(this);
	}

	clickSide() {
		this.setState({currentPage: 'sideBar'});
	}

	clickSearch() {
		this.setState({currentPage: 'searchPage'});
	}

	clickSideItem(pageName) {
		this.setState({currentPage: pageName});
	}

	render() {
		return (
			<div ref="container" style={{height: window.innerHeight, position: 'relative'}} >
				<MainShowPageContainer
					onClickSide={this.clickSide}
					onClickSearch={this.clickSearch}
				/>
			  <BlockFade toggled={this.state.currentPage === 'searchPage'}>
					<SearchPageContainer />
				</BlockFade>
				<BlockFade width="240px" toggled={this.state.currentPage === 'sideBar'}>
					<SideBar onClickSideItem={this.clickSideItem}/>
				</BlockFade>
			</div>
		);
	}
}
