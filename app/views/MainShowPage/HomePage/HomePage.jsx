import React from 'react';

// Dump Compoenent
import ScrollBanner from './ScrollBanner.jsx';
import ArticleSection from './ArticleSection.jsx';

// 样式
import styles from './HomePage.scss';


class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.clickSpread = this.clickSpread.bind(this);
	}

	// TODO: 全局展开, 使用 toPage, 删掉这个函数
	clickSpread(article) {

	}

	render() {
		return (
			<div className={styles.container} >
				<ScrollBanner activityList={this.props.activityList} />
				<div className={styles.articleListView}>
					{
						this.props.articleList.map( (section) =>
							<ArticleSection
								articleSection={section}
								onClickSpread={this.clickSpread}
								onClickArticleCard={this.props.clickArticleCard}
							/>
						)
					}
				</div>
			</div>
		);
	}
}

HomePage.propTypes = {
	activityList: React.PropTypes.array.isRequired,
	articleList: React.PropTypes.array.isRequired,
	clickArticleCard: React.PropTypes.func.isRequired,
};

export default HomePage;
