import React from 'react';

class SwipeLayer extends React.Component {
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
		const deltaX = this.state.startX - this.state.endX;
		const deltaY = this.state.startY - this.state.endY;

		const type = this.props.touchType;
		const threshold = this.props.threshold;
    const isSide = this.props.isSide;
		const completedAtType = this.props.completedAtType;

		if (type === 'herizon' && this.herizon(deltaY, isSide, threshold)) {
        completedAtType(type);
		}
		if (type === 'vertical' && this.vertical(deltaY, isSide, threshold)) {
        completedAtType(type);
		}
	}

	herizon(deltaX, side=false, threshold=40) {
		if (Math.abs(deltaX) < threshold) return false;
		if (side) {
				if (this.state.startX > 20) return false;
				return true;
		}
		return true;
	}

	vertical(deltaY, side=false, threshold=40) {
		if (Math.abs(deltaY) < threshold) return false;
		if (side) {
				if (this.state.startY > 20) return false;
				return true;
		}
		return true;
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

SwipeLayer.propTypes = {
  touchType: React.PropTypes.oneOf(['herizon', 'vertical']),
  threshold: React.PropTypes.number,
  isSide: React.PropTypes.bool,
	completedAtType: React.PropTypes.func.isRequired,
}

SwipeLayer.defaultProps = {
  touchType: 'herizon',
  threshold: 40,
  isSide: false,
}

export default SwipeLayer;
