import React from 'react';

// Dump Compoenent
import ScrollBanner from './ScrollBanner.jsx';
import ArticleSection from './ArticleSection.jsx';

// 样式
import styles from './HomePage.scss';


class HomePage extends React.Component {
	constructor(props) {
		super(props);
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
								onClickSpread={this.props.clickSpread}
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
	clickSpread: React.PropTypes.func.isRequired,
	clickArticleCard: React.PropTypes.func.isRequired,
};

export default HomePage;
