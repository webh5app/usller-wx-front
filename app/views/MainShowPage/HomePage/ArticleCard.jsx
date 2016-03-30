import React from 'react';

import styles from './ArticleCard.scss';

const propTypes = {
	article: React.PropTypes.object.isRequired,
	onClickSpread: React.PropTypes.func,
	onClickArticleCard: React.PropTypes.func.isRequired,
};

export default class ArticleCard extends React.Component {
	constructor(props) {
		super(props);

		this.clickArticleCard = this.clickArticleCard.bind(this);
		this.clickSpread = this.clickSpread.bind(this);
	}

	clickSpread(event) {
		event.stopPropagation();
		this.props.onClickSpread(this.props.article);
	}

	clickArticleCard(event) {
		this.props.onClickArticleCard(this.props.article);
	}

	render() {
		const article = this.props.article;

		return (
			<div
				className={styles.container}
				onClick={this.clickArticleCard}
				key={article.id}
			>
				<div className={styles.leftWrapper}>
					<img className={styles.image} src={article.imageUrl} />
				</div>
				<div className={styles.rightWrapper}>
					<div className={styles.info}>
						<span className={styles.datetime}>{article.datetime}</span>
						<span className={styles.viewed}>{article.viewed} 人看过</span>
						<span className={styles.articleType}>{article.type}</span>
					</div>
					<div className={styles.title}>
						{article.title}
					</div>
					<div className={styles.spread} onClick={this.clickSpread}>
						展开
					</div>
				</div>

			</div>
		);
	}
}

ArticleCard.propTypes = propTypes;
