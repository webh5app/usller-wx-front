import React from 'react';

import styles from './CollectionPage.scss';

import ScrollUp from '../../components/ScrollUp/ScrollUp.jsx';

// 导入测试数据
import section from './data';

class CollectionPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionName: '闲聊',
    }

    this.imageURL = 'http://p2.wmpic.me/article/2015/03/16/1426483393_yCesCgkT.jpeg';

    this.scrollUp = this.scrollUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollUp);
  }

  componentDidUnMount() {
    window.removeEventListener('scroll', this.scrollUp);
  }

  scrollUp() {
    const topLinks = this.refs.topLinks;
    if (window.scrollY > 140) {
      topLinks.style.position = 'fixed';
      topLinks.style.top = '3rem';
    } else {
      topLinks.style.position = 'static';
    }
  }

  clickLinkItem(sectionName) {
    this.setState({sectionName: sectionName});
  }

  renderTopLink() {
    const linkList = [
      {name: '闲聊',},
      {name: '车辆',},
      {name: '路况',},
      {name: '活动',},
      {name: '反馈',},
    ];

    return (
      <div ref="topLinks" className={styles.linksWrapper}>
        {linkList.map( (item) =>
          <span
            className={styles.linkItem + " " + (this.state.sectionName===item.name?styles.active:"")}
            onClick={this.clickLinkItem.bind(this, item.name)}
          >
          {item.name}
          </span>
        )}
      </div>
    );
  }

  sectionTempelate(title, posts) {
    return (
      <div className={styles.postSection}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.list}>
        {
          posts.map( (item) => (
              <div className={styles.sectionItem}>
                <div className={styles.sectionLeft}>
                  <img src={item.author.imageURL} />
                </div>
                <div className={styles.sectionRight}>
                  <div className={styles.top}>
                    {item.author.name}
                  </div>
                  <div className={styles.contentWrapper}>
                    {item.content}
                  </div>
                  <div className={styles.bottom}>
                    <span className={"fa fa-like " + styles.icon}></span>
                    <span className={styles.like}>{item.meta.like}</span>
                    <span className={"fa fa-eye " + styles.icon}></span>
                    <span className={styles.view}>{item.meta.view}</span>
                    <span className={"fa fa-comment " + styles.icon}></span>
                    <span className={styles.comment}>{item.meta.comment}</span>
                  </div>
                </div>
              </div>
            )
          )
        }
        </div>
      </div>
    );
  }

  section() {
    // 获取并数据
    const office = section.office;
    const hot = section.hot;
    const post = section.post;

    return (
      <div className={styles.sectionWrapper}>
        { this.sectionTempelate(office.meta.name, office.posts) }
        { this.sectionTempelate(hot.meta.name, hot.posts) }
        { this.sectionTempelate(post.meta.name, post.posts) }
      </div>
    );
  }

  render() {
    return (
      <div classNamoe={styles.container}>
        <div className={styles.publicNoticWrapper}>
          <img src={this.imageURL} />
          { this.renderTopLink() }
        </div>
        { this.section(this.state.sectionName ) }
        <ScrollUp showUnder={160}>
					<span className={"fa fa-arrow-up"}></span>
				</ScrollUp>
      </div>
    );
  }
}

export default CollectionPage;
