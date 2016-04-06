/**
 * @author  Milos Janda
 * @licence MIT
 * @github: https://github.com/milosjanda/react-scroll-up/blob/master/scrollUp.jsx
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TweenFunctions from 'tween-functions';
import objectAssign from 'object-assign';

class ScrollUp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        show: false,
      }

      this.data = {
        startValue: 0,
        currentTime: 0, // store current time of animation
        startTime: null,
        rafId: null,
      }

      this.handleScroll = this.handleScroll.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.scrollStep = this.scrollStep.bind(this);
      this.stopScrolling = this.stopScrolling.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
      return nextState.show !== this.state.show;
    }

    componentDidMount() {
      // 初始化状态
      this.handleScroll();
      // 在滚动中判定是否显示
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener("wheel", this.stopScrolling, false);
      window.addEventListener("touchstart", this.stopScrolling, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener("wheel", this.stopScrolling, false);
      window.removeEventListener("touchstart", this.stopScrolling, false);
    }

    // 判定是否显示
    handleScroll() {
      if (window.pageYOffset > this.props.showUnder) {
          this.setState({show: true});
      } else {
          this.setState({show: false});
      }
    }

    handleClick() {
      this.stopScrolling();
      this.data.startValue = window.pageYOffset;
      this.data.currentTime = 0;
      this.data.startTime = null;
      this.data.rafId = window.requestAnimationFrame(this.scrollStep);
    }

    scrollStep(timestamp) {
      if (!this.data.startTime) {
          this.data.startTime = timestamp;
      }

      this.data.currentTime = timestamp - this.data.startTime;

      var position = TweenFunctions[this.props.easing](
          this.data.currentTime,
          this.data.startValue,
          this.props.topPosition,
          this.props.duration
      );

      if (window.pageYOffset <= this.props.topPosition) {
          this.stopScrolling();
      } else {
          window.scrollTo(window.pageYOffset, position);
          this.data.rafId = window.requestAnimationFrame(this.scrollStep);
      }
    }

    stopScrolling() {
      window.cancelAnimationFrame(this.data.rafId);
    }

    render() {
      const propStyle = this.props.style;
      propStyle.bottom = this.props.bottom;
      const element =
          <div style={propStyle} onClick={this.handleClick}>
              {this.props.children}
          </div>;

      var style = objectAssign({}, propStyle);
      style.opacity = this.state.show ? 1 : 0;
      style.visibility = this.state.show ? 'visible' : 'hidden';
      style.transitionProperty = 'opacity, visibility';

      return React.cloneElement(element, {style: style});
    }
};

ScrollUp.propTypes = {
  // 顶部位置
  topPosition: React.PropTypes.number,
  // 在什么位置显示
  showUnder: React.PropTypes.number.isRequired, // show button under this position,
  bottom: React.PropTypes.string,
  // 回滚方式
  easing: React.PropTypes.oneOf(['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic',
    'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint',
    'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo',
    'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInElastic', 'easeOutElastic',
    'easeInOutElastic', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInBounce', 'easeOutBounce',
    'easeInOutBounce']),
  // 持续时间
  duration: React.PropTypes.number, // seconds
  // 类型
  style: React.PropTypes.object
};

ScrollUp.defaultProps = {
  duration: 250,
  easing: 'easeOutCubic',
  bottom: '4.5rem',
  style: {
    position: 'fixed',
    height: 48,
    width: 48,
    right: '1rem',
    cursor: 'pointer',
    transitionDuration: '0.2s',
    transitionTimingFunction: 'linear',
    transitionDelay: '0s',
    backgroundColor: '#FF5595',
    borderRadius: 500,
    fontSize: '16px',
    marginTop: '-2px',
    color: 'white',
    lineHeight: '48px',
    textAlign: 'center',
    verticalAlign: 'middle',
    boxShadow: '2px 2px 3px #b4b4b4',
  },
  topPosition: 0
};

export default ScrollUp;
