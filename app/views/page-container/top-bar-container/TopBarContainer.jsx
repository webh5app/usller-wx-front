import React from 'react';

import styles from './top-bar-container.scss';

export default class TopBarContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			datetime: new Date()
		}
	}

	componentDidMount() {
		window.setInterval( () => 
			this.clock(),
			1000
		);
	}

	clock() {
		this.setState({datetime: new Date()})
	}

	renderTime() {
		const datetime = this.state.datetime;
		const month = datetime.getMonth()+ 1; 
		const day =  datetime.getDate();
		const xq = datetime.getDay() - 1;
		let hours = datetime.getHours();
		let minute = datetime.getMinutes();
		const xq_array = ['一', '二', '三', '四', '五', '六', '天']
		const sun = hours > 12 ? '下午':'上午';
		hours = hours % 13 + 1;
		hours = hours < 10 ? ('0' + hours) : hours;
		minute = minute < 10 ? ('0' + minute) : minute;

		return `${month}月${day}  星期${xq_array[xq]}  ${sun}  ${hours}:${minute}`;
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.searchWrapper}>
					<input ref="search" type="search" className={styles.searchBox} onKeyPress={this.onEnterPress.bind(this)}/>
					<span className={"fa  fa-chevron-down " + styles.searchDown}></span>
					<span className={"fa fa-search " + styles.searchSymbol} onClick={this.onSearch.bind(this)}></span>
				</div>
				<div className={styles.createWrapper} onClick={this.props.createPage }>
					Create New
					<span className={"fa fa-plus " + styles.createSymbol}></span>
				</div>
				<div className={styles.datetimeWrapper}>
					{this.renderTime() }
				</div>
			</div>
		);
	}

	onEnterPress(e) {
		if (e.key === 'Enter') {
			this.props.searchPage(this.refs.search.value)
			console.log(this.refs.search.value);
		}
	}

	onSearch() {
		this.props.searchPage(this.refs.search.value)
		console.log(this.refs.search.value)
	}
}

TopBarContainer.propTypes = { 
	searchPage: React.PropTypes.func.isRequired,
	createPage: React.PropTypes.func.isRequired	
};