import React from 'react';

// Dump COmponent
import ArticleCard from './ArticleCard.jsx';

// 样式
import styles from './ArticleSection.scss';

const propTypes = {
		articleSection: React.PropTypes.object.isRequired,
		onClickSpread: React.PropTypes.func,
		onClickArticleCard: React.PropTypes.func.isRequired,
};

export default class ArticleSection extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
		return (
			<div className={styles.container}>
				<div className={styles.timeLine}>
					{this.props.articleSection.timeline}
				</div>
				{
					this.props.articleSection.articles.map((article) =>
							<ArticleCard
								article={article}
								onClickSpread={this.props.onClickSpread}
								onClickArticleCard={this.props.onClickArticleCard}
							/>
					)
				}
			</div>
		);
	}
}

ArticleSection.propTypes = propTypes;
