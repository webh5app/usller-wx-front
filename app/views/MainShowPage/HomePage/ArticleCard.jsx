import React from 'react';

import styles from './ArticleCard.scss';

const propTypes = {
	article: React.PropTypes.object.isRequired,
};

export default class ArticleCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const article = this.props.article;

		return (
			<div className={styles.container}>
				<div className={styles.leftWrapper}>
					<img className={styles.image} src={article.imageUrl} />
				</div>
				<div className={styles.rightWrapper}>
					<div className={styles.info}>
						<span className={styles.viewed}>{article.viewed} 人看过</span>
						<span className={styles.datetime}>{article.datetime}</span>
						<span className={styles.articleType}>{article.type}</span>
					</div>
					<div className={styles.title}>
						{article.title}
					</div>
				</div>

			</div>
		);
	}
}

ArticleCard.propTypes = propTypes;
