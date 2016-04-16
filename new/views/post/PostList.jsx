import React from 'react';
import classnames from 'classnames';

import NavBar from '../navbar/NavBar.jsx';
import PostEdit from './PostEdit.jsx';
import PostSection from './PostSection.jsx';
import ScrollUp from '../../components/ScrollUp/ScrollUp.jsx';

import styles from './PostList.scss';

// NOTE 测试数据
import cardList from './detailData';

const labelList = [
  {
    name: '闲聊',
    icon: 'home',
    description: '欢迎PO各种好玩的东东啦'
  },
  {
    name: '车辆',
    icon: 'car',
    description: '车辆检测,维修,保险 等等...'
  },
  {
    name: '反馈',
    icon: 'user',
    description: '有什么问题尽管来问小步步呀'
  },
  {
    name: '活动',
    icon: 'gift',
    description: '各种福利出没,请注意!!!'
  }
];

const ListEdit = ({clickReturn, clickSend, clickImage, editChange}) => (
  <div className={styles.listEdit}>
    <div className={styles.editHeader}>
      <div className={styles.left} onClick={clickReturn}>
          <span className={classnames('fa', 'fa-close', styles.icon)}/>
          关闭
      </div>

      <div className={styles.right}>
        <span className={classnames('fa', 'fa-picture-o', styles.icon)} onClick={clickImage}></span>
        <div className={styles.send} onClick={clickSend}>
          <span className={classnames('fa', 'fa-send', styles.icon)}/>
          <span className={styles.text}>发送</span>
        </div>
      </div>
    </div>
    <div className={styles.editContent}>
      <textarea rows="11" placeholder="在这里输入内容" onChange={editChange}/>
    </div>
  </div>
);

class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
      active: {
        name: '闲聊',
        icon: 'home',
        description: '欢迎PO各种好玩有趣的图片'
      }
    }

    this.clickLabel = this.clickLabel.bind(this);
    this.clickLabelItem = this.clickLabelItem.bind(this);
    this.cancelLabelItem = this.cancelLabelItem.bind(this);
  }

  clickLabel() {
    this.setState({toggled: true});
  }

  clickLabelItem(label) {
    this.setState({toggled: false, active: label});
  }

  cancelLabelItem() {
    this.setState({toggled: false});
  }

  renderLabelSelect() {
    return (
      <div className={styles.labelMask} onClick={this.cancelLabelItem} >
        <div
          className={styles.optionWrapper}
        >
          {
            labelList.map( (label) =>
              <div className={styles.optionItem} onClick={this.clickLabelItem.bind(null, label)}>
                <span className={classnames("fa", "fa-"+label.icon, styles.icon)} />
                { label.name }
              </div>
            )
          }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.postListContainer}>
        <NavBar active="post" />
        <div className={styles.listHeader}>
          <div className={styles.selectLabel} onClick={this.clickLabel}>
            <span className={classnames("fa", "fa-"+this.state.active.icon, styles.icon)} />
            <span className={styles.text}>{this.state.active.name}</span>
            <span className={styles.down}></span>
          </div>
          { this.state.toggled ? this.renderLabelSelect():null }
          <div className={styles.navWrapper}>
          {this.state.active.description}
          </div>
        </div>
        { cardList.map( (card) => (
          <PostSection cardData={card} />
        ))}
        <PostEdit position={{bottom: '1rem', right: '1rem'}}/>
      </div>
    );
  }
}

export default PostList;
