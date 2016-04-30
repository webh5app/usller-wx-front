import React from 'react';
import classnames from 'classnames';

import DateTimeSpan from '../../components/DateTimeSpan/DateTimeSpan.jsx';

import styles from './PostCard.scss';

class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.postSectionContainer} onClick={this.props.click}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardHeader}>
            <div className={styles.left}>
              <img src={this.props.cardData.user.portrait} className={styles.authorImage} />
              <div className={styles.info}>
                <div className={styles.authorName}>
                  {this.props.cardData.user.name}
                </div>
                <div className={styles.datetime}>
                  <DateTimeSpan datetime={this.props.cardData.meta.datetime} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>
              {this.props.cardData.title}
            </div>
            <div className={styles.body}>
              {this.props.cardData.content}
            </div>
          </div>
          <div className={styles.cardImage}>
          { /* 图片显示 */}
          </div>
          <div className={styles.cardFooter}>
            <span className={styles.view}> {this.props.cardData.meta.view}人看过·</span>
            <span className={styles.like}> {this.props.cardData.meta.like}人喜欢·</span>
            <span className={styles.comment}> {this.props.cardData.meta.comment}人评论</span>
          </div>
        </div>
      </div>
    );
  }
}

PostCard.PropTypes = {
  cardData: React.PropTypes.shape({
    user: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      imageURL: React.PropTypes.string.isRequired
    }),
    pid: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    meta: React.PropTypes.shape({
      view: React.PropTypes.string.isRequired,
      like: React.PropTypes.string.isRequired,
      likeEnable: React.PropTypes.bool.isRequired,
      comment: React.PropTypes.string.isRequired,
      datetime: React.PropTypes.number.isRequired,
    })
  }),
  click: React.PropTypes.func.isRequired,
}

export default PostCard;
