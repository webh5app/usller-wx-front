import React from 'react';

// Dump Compoenent
import ScrollBanner from './ScrollBanner.jsx';
import ArticleSection from './ArticleSection.jsx';
import ToTopButton from '../../components/ToTopButton/ToTopButton.jsx';

// 样式
import styles from './HomePage.scss';

class HomePage extends React.Component {
	constructor(props) {
		super(props);

		this.toTop = this.toTop.bind(this);
	}

	// TODO 回到最上面
	toTop() {

	}

	// TODO toTopButton 显示
	showToTopButton() {
		return	(<ToTopButton toTop={ this.toTop }/>);
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
				<div className={styles.toTopButtonWrapper}>
					{ this.showToTopButton() }
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
