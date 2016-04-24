import React from 'react';
import classnames from 'classnames';
import { List, Map } from 'immutable';

import NavBar from '../navbar/NavBar.jsx';
import Slider from '../slider/Slider.jsx';

import styles from './ArticleList.scss';

// 文章块样式
const ArticleCard = ({article, clickCard}) => (
  <div className={styles.cardWrapper} onClick={clickCard}>
    <img src={article.briefImage} />
    <div className={styles.title}>{article.title}</div>
    <div className={styles.meta}>
      <div className={styles.metaLeft}>
        一天前
      </div>
      <div className={styles.metaRight}>
        <div classname={styles.view}>
          <span className={classnames("fa", 'fa-eye', styles.icon)} />
          {article.meta.view}
        </div>
        <div className={styles.comment}>
          <span className={classnames("fa", 'fa-comment', styles.icon)} />
          {article.meta.comment}
        </div>
      </div>
    </div>
  </div>
);

// 文章章节
const ArticleSection = ({item, clickCard}) => (
  <div className={styles.section} >
    <div className={styles.sectionHeader}>
      {item.name}
    </div>
    <div className={styles.sectionContent}>
      { item.list.map( (articleItem) => (
          <ArticleCard article={articleItem} clickCard={clickCard.bind(null, articleItem.id)}/>
      ))}
    </div>
  </div>
);

// 文章列表样式组件
class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const _list = this.props.list;
    const _section = [{name: '近期消息', list: _list}];
    return (
      <div className={styles.articleList}>
        <NavBar active="article" />
        <div className={styles.articleContentWrapper}>
          {/* <Slider slideList={_activity} clickSider={this.props.clickSider}/> */}
          <div className={styles.articleSectionWrapper}>
            {
              _section.map( (item) =>
                <ArticleSection item={item} clickCard={this.props.clickCard} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleList;
