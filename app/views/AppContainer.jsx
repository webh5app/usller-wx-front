import React from 'react';

import NavContainer from "./navigator/NavContainer.jsx";
import PageContainer from "./page-container/PageContainer.jsx";

import styles from './app-container.scss';

export default class AppContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: 'article',
			height: window.innerHeight
		}
	}

	componentDidMount() {
		window.addEventListener('resize', () =>  {
				this.setState({ height: window.innerHeight });
			}
		);
	}

	renderHeightStyle() {
		return {
			height: this.state.height
		}
	}

	render() {
		return (
			<div className={styles.container} style={this.renderHeightStyle()}>
				<div className={styles.navContainer}>
					<div className={styles.logoContainer}>
						LLers' Console
					</div>
					<div className={styles.navListWrapper}>
						<NavContainer onChangePage={this.onChangePage.bind(this)} />
					</div>
				</div>
				<div className={styles.pageContainer}>
					<PageContainer path={this.state.active} height={this.state.height}/>
				</div>
			</div>
		);
	}

	onChangePage(name) {
		this.setState({active: name});
	}
}