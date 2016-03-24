import React from 'react';

import styles from './article-container.scss';

export default class ArticleContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.listWrapper} ref={(c) => this.listWrapper = c}>
					<div className={styles.toolWrapper}>
						<div className={styles.catalog}>
							刷新 
						</div>
						<div className={styles.changePage}>
							《  当前第一页  》 
						</div>
						<div className={styles.filte}>
							筛选
						</div>
					</div>
					<div className={styles.listItemWrapper}>
					</div>
				</div>
				<div className={styles.detailWrapper}>
				</div>
			</div>
		);
	}
}