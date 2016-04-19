import React from 'react';
import classnames from 'classnames';

import NavBar from '../navbar/NavBar.jsx';
import ArticleSlider from './ArticleSlider.jsx';

import styles from './ArticleList.scss';

import sectionList from './listData';

const ArticleCard = ({article, clickCard}) => (
  <div className={styles.cardWrapper} onClick={clickCard}>
    <img src={article.imageURL} />
    <div className={styles.title}>{article.title}</div>
    <div className={styles.meta}>
      <div className={styles.metaLeft}>
        {article.meta.datetime}
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

const ArticleSection = ({item, clickCard}) => (
  <div className={styles.section} >
    <div className={styles.sectionHeader}>
      {item.name}
    </div>
    <div className={styles.sectionContent}>
      { item.articles.map( (articleItem) => (
          <ArticleCard article={articleItem} clickCard={clickCard.bind(null, articleItem.articleId)}/>
      ))}
    </div>
  </div>
);

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.articleList}>
        <NavBar active="article" />
        <div className={styles.articleContentWrapper}>
          <ArticleSlider clickSider={this.props.clickSider}/>
          <div className={styles.articleSectionWrapper}>
            {
              sectionList.map( (item) =>
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
