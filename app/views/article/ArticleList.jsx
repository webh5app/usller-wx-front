import React from 'react';
import classnames from 'classnames';
import { List, Map } from 'immutable';

import NavBar from '../navbar/NavBar.jsx';
import Slider from '../slider/Slider.jsx';
import LoadTip from '../loadtip/LoadTip.jsx';

import ArticleNormalCard from './ArticleNormalCard.jsx';

import styles from './ArticleList.scss';


// 文章列表样式组件
class ArticleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isBottom: false,
      data: '',
    }

    this.listenScroll = this.listenScroll.bind(this);
  }

  componentDidMount() {
    this.props.initial(this.props.lastUpdated, this.props.count);
    // 监测碰到底端
    document.addEventListener('scroll', this.listenScroll, false);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.listenScroll, false);
  }

  listenScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.state.isBottom) {
      this.props.addList(this.props.count);
      this.setState({isBottom: true});
    }

    if ((window.innerHeight + window.scrollY ) < document.body.offsetHeight - 200 && this.state.isBottom) {
      this.setState({isBottom: false});
    };
  }

  render() {
    const _list = this.props.list;
    return (
      <div className={styles.articleListContainer}>
        <NavBar active="article" />
        {/* <Slider slideList={_activity} clickSider={this.props.clickSider}/> */}
        <div className={styles.articleCardWrapper}>
        {
          _list.map( (item) =>
            <ArticleNormalCard
              id={item.id}
              meta={item.meta}
              image={item.briefImage}
              title={item.title}
              clickCard={this.props.clickCard}
            />
          )
        }
        </div>
        {
          this.state.isBottom && this.props.isFetching ? <LoadTip info="正在从后台获取数据, 请稍后"/> : null
        }
      </div>
    );
  }
}

export default ArticleList;
