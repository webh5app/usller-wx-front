import React from 'react';

// 导入 dump components
import ScrollUp from '../../components/ScrollUp/ScrollUp.jsx';

// NOTE 仔细看 SCSS 的规范和文档, 重新规划 CSS
import styles from './ArticleDetail.scss';

// NOTE 重构这个东西
export default class ArticleDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const article = this.props.article;

	// NOTE 改变整体样式
	return (
		<div className={styles.container}>
			<div className={styles.topBarContent}>
			 <div className={styles.cancel} onClick={this.props.onCancel}>
				<span className={"fa fa-arrow-left " + styles.cancelIcon}></span>
				返回
				</div>
				<div className={styles.shareIcon} onClick={this.props.onShare}>
					<span className={"fa fa-share-alt " + styles.icon}/>
				</div>
				<div className={styles.commentIcon} onClick={this.props.onComment}>
					<span className={"fa fa-comments " + styles.icon}/>
					<span className={styles.commentNumber}>122</span>
				</div>
			</div>
			<div className={styles.topBarMask}>
			</div>
			<img className={styles.bannerImage} src={article.meta.imageUrl} />
			<div className={styles.infoWrapper}>
				<span className={styles.types}>活动</span>
				<span className={styles.datetime}>今日发布</span>
				<span className={styles.viewed}>17777人浏览</span>
			</div>
			<div className={styles.titleWrapper}>
				{article.title}
			</div>
			<div className={styles.authorWrapper}>
				<img className={styles.authorImage} />
				{ article.meta.author }
			</div>
			<ScrollUp showUnder={160} bottom="1rem">
				<span className={"fa fa-arrow-up"}></span>
			</ScrollUp>
			<div className={styles.contentWrapper} dangerouslySetInnerHTML={{__html: article.content}} />
		</div>
	);
		// NOTE 自制一个简易的 XML parser
	}
}
