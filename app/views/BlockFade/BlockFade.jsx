import React from 'react';

const propTypes = {
  toggled: React.PropTypes.bool,
  width: React.PropTypes.string,
}

const defaultProps = {
  width: '100%',
}

export default class BlockFade extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      toggle: this.props.toggled,
    };

    this.onClickLayer = this.onClickLayer.bind(this);
	}

  ComponentDidMount() {
    this.setState({toggle: this.props.toggle});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({toggle: nextProps.toggled});
  }

  onClickLayer() {
    this.setState({toggle: false});
  }

  renderDynamicStyles() {
      return {
        noToggle: {
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${this.props.width}`,
          marginLeft: `-${window.innerWidth}px`,
          transition: 'margin-left .5s ease',
          zIndex: 100,
        },
        toggled: {
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: `${this.props.width}`,
          marginLeft: 0,
          transition: 'margin-left .5 cubic-bezier(.22,.81,.01,.99)',
          zIndex: 100,
        },
        touchLayer: {
          position: 'fixed',
          top: 0,
          left: 0,
          opacity: '0.2',
          backgroundColor: 'black',
          width: `${window.innerWidth}`,
          height: '100%',
          zIndex: 99,
        },
      }
  }

	render() {
    // 淡出淡入效果
    let container = this.renderDynamicStyles().noToggle;
    // 触摸层
    const touchLayer = this.renderDynamicStyles().touchLayer;

    if (this.state.toggle)  container = this.renderDynamicStyles().toggled;

		return (
			<div>
        {this.state.toggle ? <div style={touchLayer} onClick={this.onClickLayer}></div> : null}
        <div style={container}>
          {this.props.children}
        </div>
			</div>
		);
	}
}

BlockFade.propTypes = propTypes;
BlockFade.defaultProps = defaultProps;
