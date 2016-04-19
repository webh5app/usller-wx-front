import React from 'react';
import classnames from 'classnames';

import styles from './ArticleSlider.scss';

// 测试图片导入
const image1 = require("../../images/1.jpeg");
const image2 = require("../../images/2.jpeg");
const image3 = require("../../images/3.jpeg");
const image4 = require("../../images/4.jpeg");

// 测试数据
const itemList = [
  {
    id: 1,
    activityId: 10001,
    image: image1,
  },
  {
    id: 2,
    activityId: 10002,
    image: image2,
  },
  {
    id: 3,
    activityId: 10003,
    image: image3,
  },
  {
    id: 4,
    activityId: 10004,
    image: image4,
  }
]

const SliderFlag = ({itemList, active}) => (
  <div className={styles.flagWrapper}>
  {
    itemList.map( (item) =>
      <span className={classnames(styles.flag, {[styles.flagActive]: item.id=== active})}></span>
    )
  }
  </div>
);

class ArticleSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startX: null,
      endX: null,
      active: 1,
    }

    // 记录总的 item 的数量
    this.itemLen = 4;
    this.innerWidth = window.innerWidth;
    this.clickSider = this.clickSider.bind(this);
    this.swipeSliderStart = this.swipeSliderStart.bind(this);
    this.swipeSliderMove = this.swipeSliderMove.bind(this);
    this.swipeSliderEnd = this.swipeSliderEnd.bind(this);
  }

  // 初始化数据
  swipeSliderStart(evt) {
    evt.preventDefault();

    const touch = evt.touches[0];

    this.setState({startX: touch.pageX})
  }

  // 实时滑动, 记录滑动数据, 更新信息
  swipeSliderMove(evt) {
    console.log(1)
    evt.preventDefault();

    const touch = evt.touches[0];
    const pageX = touch.pageX;
    const slide = this.slideWrapper;
    const currentX = -((this.state.active - 1) * this.innerWidth)

    slide.style.transition = 'none';
    slide.style.transform = `translate3D(${currentX + (pageX - this.state.startX)/2}px, 0, 0)`

    // 支持 android 版的微信
    slide.style.webkitTransition = 'none';
    slide.style.webkitTransform = `translate3D(${currentX + (pageX - this.state.startX)/2}px, 0, 0)`

    this.setState({endX: pageX})
  }

  // 判断是否滑动到下一页
  swipeSliderEnd(evt) {
    evt.preventDefault();

    const slide = this.slideWrapper;
    const delta = this.state.endX - this.state.startX;
    let current = this.state.active;

    if (delta < -60) {
      if (current + 1 <= this.itemLen) current += 1;
      this.setState({active: current});
    } else if (delta > 60) {
      if (current - 1 >= 1) current -= 1;
      this.setState({active: current});
    } else if (delta < 10 && delta > -10) {
      this.clickSider();
    }

    slide.style.transition = '.3s ease-in-out transform';
    slide.style.transform = `translate3D(-${(current-1) * this.innerWidth}px, 0, 0)`;

    // 支持 android 版的微信
    slide.style.webkitTransition = '.3s ease-in-out -webkit-transform';
    slide.style.webkitTransform = `translate3D(-${(current-1) * this.innerWidth}px, 0, 0)`;

  }

  clickSider() {
    const _id = itemList[this.state.active - 1].activityId;
    this.props.clickSider(_id);
  }

  render() {
    return (
        <div className={styles.slider} style={{width: this.innerWidth}}>
          <div
            className={styles.slideWrapper}
            style={{width: itemList.length+"00%"}}
            onTouchStart={this.swipeSliderStart}
            onTouchMove={this.swipeSliderMove}
            onTouchEnd={this.swipeSliderEnd}
            onClick={this.clickSider}
            ref={(dom) => this.slideWrapper = dom}
          >
            {
              itemList.map( (item) =>
                <div className={styles.slide} style={{width: window.innerWidth}}>
                  <img src={item.image} />
                </div>
              )
            }
          </div>
          <SliderFlag itemList={itemList} active={this.state.active} />
        </div>
    );
  }
}

ArticleSlider.propTypes = {
  clickSider: React.PropTypes.func.isRequired,
}

export default ArticleSlider;
