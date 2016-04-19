import React from 'react';
import classnames from 'classnames';

import styles from './PostCard.scss';

const cardData = {
  author: {
    name: 'Kim Montls',
    imageURL: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg'
  },
  datetime: '27时前',
  content: {
    title: '早上吃什么呢?',
    body: '吃吃吃吃吃吃吃, 狂吃,狂吃, 哈哈哈哈哈哈哈哈哈哈哈'
  },
  imageList:  [],
  meta: {
    like: 122,
    comment: 200,
    view: 1000,
    cataIcon: 'bullhorn',
    cataText: '热门'
  }
}

class PostCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.postSectionContainer} onClick={this.props.click}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardHeader}>
            <div className={styles.right}>
              <span className={classnames('fa', 'fa-'+this.props.cardData.meta.cataIcon, styles.icon)} />
              { this.props.cardData.meta.cataText }
            </div>
            <div className={styles.left}>
              <img src={this.props.cardData.author.imageURL} className={styles.authorImage} />
              <div className={styles.info}>
                <div className={styles.authorName}>
                  {this.props.cardData.author.name}
                </div>
                <div className={styles.datetime}>
                  {this.props.cardData.datetime}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.title}>
              {this.props.cardData.content.title}
            </div>
            <div className={styles.body}>
              {this.props.cardData.content.body}
            </div>
          </div>
          <div className={styles.cardImage}>
            { this.props.cardData.imageList.map( (image) =>
              <div className={styles.imageItem} />
            )}
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.like}>
              <span className={classnames('fa', 'fa-thumbs-o-up', styles.icon)}/>
              {this.props.cardData.meta.like}
            </div>
            <div className={styles.comment}>
              <span className={classnames('fa', 'fa-comments', styles.icon)}/>
              {this.props.cardData.meta.comment}
            </div>
            <div className={styles.view}>
              <span className={classnames('fa', 'fa-eye', styles.icon)}/>
              {this.props.cardData.meta.view}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostCard.PropTypes = {
  cardData: React.PropTypes.shape({
    author: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      imageURL: React.PropTypes.string.isRequired
    }),
    content: React.PropTypes.shape({
      title: React.PropTypes.string.isRequired,
      body: React.PropTypes.string.isRequired
    }),
    imageList: React.PropTypes.array.isRequired,
    content: React.PropTypes.shape({
      view: React.PropTypes.string.isRequired,
      like: React.PropTypes.string.isRequired,
      comment: React.PropTypes.string.isRequired,
      cataIcon: React.PropTypes.string.isRequired,
      cataText: React.PropTypes.string.isRequired,
    })
  }),
  click: React.PropTypes.func.isRequired,
}

PostCard.defaultProps = {
  cardData: cardData
}

export default PostCard;
