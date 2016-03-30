import React from 'react';

// Dump Compoenent
import ScrollBanner from './ScrollBanner.jsx';
import ArticleSection from './ArticleSection.jsx';

// 样式
import styles from './HomePageContainer.scss';

// 数据
import articleData from './articleData';

const propTypes = {
};

export default class HomePageContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			articleList: articleData.articleList,
			activityList: articleData.activityList,
		}

		this.clickSpread = this.clickSpread.bind(this);
		this.clickArticleCard = this.clickArticleCard.bind(this)
	}

	// 就地触发
	clickSpread() 	{
		// 触发 Card 缩略弹出框
	}

	// 返回到 AppRouter 触发
	clickArticleCard(article) {
		// 更新数据 CurrentArticle, CurrentPage
	}

	render() {
		console.log(this.state)
		return (
			<div className={styles.container} >
				<ScrollBanner activityList={this.state.activityList} />
				<div className={styles.articleListView}>
					{
						this.state.articleList.map( (section) =>
							<ArticleSection
								articleSection={section}
								onClickSpread={this.clickSpread}
								onClickArticleCard={this.clickArticleCard}
							/>
						)
					}
				</div>
			</div>
		);
	}
}

HomePageContainer.propTypes = propTypes;
