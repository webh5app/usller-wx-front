import React from 'react';

import TopBarContainer from './top-bar-container/topBarContainer';
import ArticleContainer from './pages/article-container/ArticleContainer';


import styles from './page-container.scss';

export default class PageContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			filter: null,
			create: null
		}
	}

	renderPage() {
		let page = null;
		switch(this.props.path) {
			case 'article':
				page = <ArticleContainer />
				break;
		}

		return page;
	}

	render() {
		return (
			<div className={styles.container}>
				<TopBarContainer searchPage={this.onSearchPage} createPage={this.onCreatePage.bind(this)}/>
				<div style={{height: (Number.parseInt(this.props.height) - 64 ) + 'px' }}>
					{ this.renderPage() }
				</div>
			</div>
		);
	}

	onCreatePage(name) {
		// 跳转相应的创建页面
	}

	onSearchPage() {
		// 筛选搜索结果
	}
}

PageContainer.propTypes = {
	path: React.PropTypes.string.isRequired,
	height: React.PropTypes.string.isRequired
}