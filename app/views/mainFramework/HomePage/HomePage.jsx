import React from 'react';

// Dump Compoenent
import ScrollBanner from './ScrollBanner.jsx';
import ArticleSection from './ArticleSection.jsx';

// 样式
import styles from './HomePage.scss';

const HomePage = ({ activityList, articleList, clickSpread, clickArticleCard }) => (
	<div className={styles.container}>
		<ScrollBanner activityList={activityList} />
		<div className={styles.articleListView}>
			{
				articleList.map( (section) =>
					<ArticleSection
						articleSection={section}
						onClickSpread={clickSpread}
						onClickArticleCard={clickArticleCard}
					/>
				)
			}
		</div>
	</div>
);

HomePage.propTypes = {
	activityList: React.PropTypes.array.isRequired,
	articleList: React.PropTypes.array.isRequired,
	clickSpread: React.PropTypes.func.isRequired,
	clickArticleCard: React.PropTypes.func.isRequired,
};

export default HomePage;
