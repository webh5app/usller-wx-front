import React from 'react';

import styles from './nav-container.scss';

export default class NavContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.composeWrapper}>
					<ul>
						<li onClick={this.props.onChangePage.bind(null, 'article')}>
							<span className={"fa fa-file-text " + styles.fa}/>
							文档
						</li>
						<li onClick={this.props.onChangePage.bind(null, 'watch')}>
							<span className={"fa fa-eye " + styles.fa}/>
							关注	
						</li>
						<li onClick={this.props.onChangePage.bind(null, 'collection')}>
							<span className={"fa fa-th " + styles.fa}/>
							收藏	
						</li>
					</ul>
				</div>
				<div className={styles.resourceWrapper}>
					<ul>
						<li onClick={this.props.onChangePage.bind(null, 'article')}>
							<span className={"fa fa-picture-o " + styles.fa}/>
							图片
						</li>
						<li onClick={this.props.onChangePage.bind(null, 'watch')}>
							<span className={"fa fa-film " + styles.fa}/>
							视频
						</li>
						<li onClick={this.props.onChangePage.bind(null, 'collection')}>
							<span className={"fa fa-bullhorn " + styles.fa}/>
							音频
						</li>
						<li onClick={this.props.onChangePage.bind(null, 'watch')}>
							<span className={"fa fa-download " + styles.fa}/>
							下载
						</li>
						<li onClick={this.props.onChangePage.bind(null, 'collection')}>
							<span className={"fa fa-gift " + styles.fa}/>
							调查问卷
						</li>
					</ul>
				</div>
				<div className={styles.websiteWrapper}>
					<ul>
						<li onClick={this.props.onChangePage.bind(null, 'article')}>
							<span className={"fa fa-info-circle " + styles.fa}/>
							网站信息
						</li>
						<li onClick={this.props.onChangePage.bind(null, 'watch')}>
							<span className={"fa fa-users " + styles.fa}/>
							人员管理	
						</li>
						<li onClick={this.props.onChangePage.bind(null, 'collection')}>
							<span className={"fa fa-cog " + styles.fa}/>
							其他设置
						</li>
					</ul>
				</div>
			</div>
		);
	}
}