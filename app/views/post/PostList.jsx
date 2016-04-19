import React from 'react';
import classnames from 'classnames';

import NavBar from '../navbar/NavBar.jsx';
import PostCard from './PostCard.jsx';
import EditTemplate from '../edit/EditTemplate.jsx';
import IconFloatButton from '../../components/IconFloatButton/IconFloatButton.jsx';
import ScrollUp from '../../components/ScrollUp/ScrollUp.jsx';

import styles from './PostList.scss';

// NOTE 测试 image URL
const talkImageURL = require('../../images/banner.jpg');

// NOTE 测试数据
import { labelList, cardObj } from './detailData';

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelSelectToggled: false,
      label: {
        name: 'talk',
        cnName: '闲聊',
        icon: 'home',
        description: '欢迎PO各种好玩有趣的图片',
        imageURL: talkImageURL,
      },
      comment: {
        atName: null,
        toggled: false,
      }
    }

    this.clickLabel = this.clickLabel.bind(this);
    this.clickLabelItem = this.clickLabelItem.bind(this);
    this.closeLabelItem = this.closeLabelItem.bind(this);

    this.clickCard = this.clickCard.bind(this);

    this.editNew = this.editNew.bind(this);
    this.editSend = this.editSend.bind(this);
    this.editClose= this.editClose.bind(this);
    this.editNew = this.editNew.bind(this);
  }

  clickLabel() {
    this.setState({labelSelectToggled: true});
  }

  clickLabelItem(label) {
    this.setState({labelSelectToggled: false, label: label});
  }

  closeLabelItem() {
    this.setState({labelSelectToggled: false});
  }

  clickCard(id) {
    this.props.clickCard(id);
  }

  editNew(atName) {
    this.setState({comment: {atName: atName, toggled: true}});
  }

  editSend(data) {
    // 这的数据是生成 Post
  }

  editClose() {
    this.setState({comment: {toggled: false}});
  }

  // 渲染 Label 选择界面
  renderLabelSelect() {
    return (
      <div className={styles.labelMask} onClick={this.closeLabelItem} >
        <div className={styles.optionWrapper} >
          {
            labelList.map( (label) =>
              <div className={styles.optionItem} onClick={this.clickLabelItem.bind(null, label)}>
                <span className={classnames("fa", "fa-"+label.icon, styles.icon)} />
                { label.cnName}
              </div>
            )
          }
        </div>
      </div>
    );
  }

  render() {
    const cardList = cardObj[this.state.label.name].posts;
    return (
      <div className={styles.postListContainer}>
        <NavBar active="post" />
        <div className={styles.listHeader}>
          <div className={styles.selectLabel} onClick={this.clickLabel}>
            <span className={classnames("fa", "fa-"+this.state.label.icon, styles.icon)} />
            <span className={styles.text}>{this.state.label.cnName}</span>
            <span className={styles.down}></span>
          </div>
          { this.state.labelSelectToggled? this.renderLabelSelect():null }
          <img src={this.state.label.imageURL} />
          <div className={styles.navWrapper}>
          {this.state.label.description}
          </div>
        </div>
        { // PostCard 列表
          cardList.map( (card) => (
              <PostCard cardData={card} click={this.clickCard}/>
            )
          )
        }
        { // Post 编辑页面
          this.state.comment.toggled ?
          <EditTemplate
            at={this.state.comment.atName}
            send={this.editSend}
            close={this.editClose}
          /> : null
        }
        <IconFloatButton
          position={{
            bottom: '1rem',
            right: '1rem',
            zIndex: '100',
          }}
          icon='pencil'
          click={this.editNew.bind(null, null)}
        />
      </div>
    );
  }
}

export default PostList;
