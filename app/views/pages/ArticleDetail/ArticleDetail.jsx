import React from 'react';

// NOTE 仔细看 SCSS 的规范和文档, 重新规划 CSS
import styles from './ArticleDetail.scss';

export default class ArticleDetail extends React.Component {
	constructor(props) {
		super(props);

		this.toTop = this.toTop.bind(this);
	}

	// TODO: 实现缓慢向上滚动功能
	toTop() {

	}

	render() {
		const article = this.props.article;

	// NOTE 改变整体样式
		return (
			<div className={styles.container}>
				<div className={styles.bannerWrapper}>
					<img className={styles.bannerImage} src={article.meta.imageUrl} />
					<div className={styles.cancel} onClick={this.props.onCancel}>
						<span className={"fa fa-arrow-left " + styles.cancelIcon}></span>
						返回
					</div>
				</div>
				<div className={styles.titleWrapper}>
					{article.title}
				</div>
				<div className={styles.infoWrapper}>
					<div>
						<img className={styles.authorImage} />
						<span className={styles.author} >{article.meta.author}</span>
					</div>
					<div>
						<span className={styles.types}>{article.meta.type}</span>
						<span className={styles.datetime}>发布于 {article.meta.datetime}</span>
						<span className={styles.viewed}>阅读量 {article.meta.viewed}</span>
					</div>
				</div>
				<div className={styles.contentWrapper} dangerouslySetInnerHTML={{__html: article.content}} />
			</div>
		);
		// NOTE 自制一个简易的 XML parser
	}
}
