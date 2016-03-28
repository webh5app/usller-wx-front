import React from 'react';

const propType = {
	touchType: React.PropTypes.string.isRequired,
	touchArritube: React.PropTypes.object.isRequired,
	onCompletedAtType: React.PropTypes.func.isRequired,
}

const defaultProps = {
	touchFromSide: false,
}

export default class SwipeLayer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			startX: null,
			startY: null,
			endX: null,
			endY: null,
			status: 'ready'
		}

		this.onTouchStart = this.onTouchStart.bind(this);
		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);
	}

	onTouchStart(event) {
		const touch = event.touches[0];
		this.setState({startX: touch.pageX, startY: touch.pageY, status: 'start'});
	}

	onTouchMove(event) {
		const touch = event.touches[0];
		this.setState({endX: touch.pageX, endY: touch.pageY, status: 'running'});
	}

	onTouchEnd(event) {
		this.setState({status: 'completed'})
		this.core();
	}

	core() {
		// 正数代表从右往左, 负数代表从左往右
		const deltaX = this.state.startX - this.state.endX;
		// 正数代表从下往上, 负数代表从上往下
		const deltaY = this.state.startY - this.state.endY;
		// 两点之间的直线距离
		const delta = Math.sqrt(Math.pow(deltaX, 2), Math.pow(deltaY, 2));

		const type = this.props.touchType;
		const {threshold=40, side=false} = this.props.touchArritube;
		const completedAtType = this.props.onCompletedAtType;

		switch (type) {
			case 'left2right': {
				if (this.herizon(deltaX, true, side, threshold)) completedAtType(type);
				break;
			}
			case 'right2left': {
				if (this.herizon(deltaX, false, side, threshold)) completedAtType(type);
				break;
			}
			case 'top2down': {
				if (this.vertical(deltaY, true, side, threshold)) completedAtType(type);
				break;
			}
			case 'pointer2pointer': {
				if (this.pointer2pointer(delta, threshold)) completedAtType(type);
				break;
			}
			default:
				break;
			}
	}

	herizon(deltaX, left2right, side=false, threshold=40) {
		if (Math.abs(deltaX) < threshold) return false;
		if (left2right) {
			if (deltaX > 0) return false;
		} else {
			if (deltaX < 0) return ture;
		}
		if (side) {
				if (this.state.startX > 20) return false;
				return true;
		}
		return true;
	}

	vertical(deltaY, top2bottom, side=false, threshold=40) {
		if (Math.abs(deltaY) < threshold) return false;
		if (top2bottom) {
			if (deltaY > 0) return false;
		} else {
			if (deltaY < 0) return false;
		}
		if (side) {
				if (this.state.startY > 20) return false;
				return true;
		}
		return true;
	}


	pointer2pointer(delta, threshold=10) {
		if (Math.abs(delta) > threshold) return true;
		return false;
	}

	render() {
		return (
			<div
				onTouchStart={this.onTouchStart}
				onTouchMove={this.onTouchMove}
				onTouchEnd={this.onTouchEnd}
			>
				{this.props.children}
			</div>
		);
	}
}

SwipeLayer.propTypes = propType;
SwipeLayer.defaultProps = defaultProps;
