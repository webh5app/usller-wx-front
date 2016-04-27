import React from 'react';
import classnames from 'classnames';

import DateTimeSpan from '../../components/DateTimeSpan/DateTimeSpan.jsx';

import styles from './ArticleNormalCard.scss';

class ArticleNormalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // 计算是否显示提示标签
  renderLabel() {
    const _now = Date.now();
    const _meta = this.props.meta;
    const _v = _meta.view * 0.5 + _meta.like * 2 + _meta.comment * 5;
    let isNew = false;
    let isHot = false;

    if (_now - _meta.created_at < 24*60*60*1000) isNew = true;
    if (_v > 100) isHot = true;

    return (
      <div className={styles.labelWrapper}>
        <div className={styles.labelHot} style={{display: isHot ? "block" : "none"}}>热门</div>
        <div className={styles.labelNew} style={{display: isNew ? "block" : "none"}}>最新</div>
      </div>
    )
  }

  render() {
    return (
      <div
        className={styles.articleNormalCardContainer}
        onClick={this.props.clickCard.bind(null, this.props.id)}
      >
        <img src={this.props.image} />
        { this.renderLabel() }
        <div className={styles.titleWrapper}>
          {this.props.title}
        </div>
        <div className={styles.meta}>
          <span className={styles.metaItem}> {this.props.meta.view} 人看过·</span>
          <span className={styles.metaItem}> {this.props.meta.like} 人喜欢·</span>
          <span className={styles.metaItem}> {this.props.meta.comment} 人评论·</span>
          <span className={styles.metaItem}>
            <DateTimeSpan type="Readable" datetime={this.props.meta.created_at} />
          </span>
        </div>
      </div>
    )
  }
}

ArticleNormalCard.propTypes = {
  id: React.PropTypes.number.isRequired,
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  meta: React.PropTypes.shape({
    view: React.PropTypes.number.isRequired,
    like: React.PropTypes.number.isRequired,
    created_at: React.PropTypes.number.isRequired,
  }),
  clickCard: React.PropTypes.func.isRequired,
}

export default ArticleNormalCard;
