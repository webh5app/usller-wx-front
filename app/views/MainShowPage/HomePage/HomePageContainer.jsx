import React from 'react';

// Dump Compoenent
import ScrollBanner from './ScrollBanner.jsx';
import ArticleSection from './ArticleSection.jsx';

// 样式
import styles from './HomePageContainer.scss';

// 数据
import articleData from './articleData';

export default class HomePageContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			articleList: articleData.articleList,
			activityList: articleData.activityList,
		}
	}

	render() {
		console.log(this.state)
		return (
			<div className={styles.container} >
				<ScrollBanner activityList={this.state.activityList} />
				<div className={styles.articleListView}>
					{
						this.state.articleList.map( (section) =>
							<ArticleSection articleSection={section} />
						)
					}
				</div>
			</div>
		);
	}
}
