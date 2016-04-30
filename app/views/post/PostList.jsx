import React from 'react';
import classnames from 'classnames';

import PostCard from './PostCard.jsx';
import NavBar from '../navbar/NavBar.jsx';
import PostEdit from '../edit/PostEdit.jsx';
import IconFloatButton from '../../components/IconFloatButton/IconFloatButton.jsx';
import ScrollUp from '../../components/ScrollUp/ScrollUp.jsx';
import LoadTip from '../loadtip/LoadTip.jsx';

import styles from './PostList.scss';


class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      labelSelectToggled: false,
      label: {
        name: 'home',
        nick_name: '闲聊',
        icon: 'home',
        description: '欢迎PO各种好玩有趣的图片',
        banner: "https://ooo.0o0.ooo/2016/04/26/57201cd612135.jpg",
      },
      commentToggled: false,
      isBottom: false,
    }

    this.clickLabel = this.clickLabel.bind(this);
    this.clickLabelItem = this.clickLabelItem.bind(this);
    this.closeLabelItem = this.closeLabelItem.bind(this);

    this.clickCard = this.clickCard.bind(this);

    this.editNew = this.editNew.bind(this);
    this.editSend = this.editSend.bind(this);
    this.editClose= this.editClose.bind(this);
    this.editNew = this.editNew.bind(this);
    this.listenScroll = this.listenScroll.bind(this);
  }

  componentDidMount() {
    this.props.initial();
    document.addEventListener('scroll', this.listenScroll, false);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.listenScroll, false);
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
    this.setState({commentToggled: true});
  }

  editSend(title, content) {
    this.props.postPost(this.state.label.name, this.props.user, title, content);
    this.setState({commentToggled: false});
  }

  editClose() {
    this.setState({commentToggled: false});
  }

  listenScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.state.isBottom) {
      this.props.addList(this.state.label.name, this.props.post[this.state.label.name].count);
      this.setState({isBottom: true});
    }

    if ((window.innerHeight + window.scrollY ) < document.body.offsetHeight - 200 && this.state.isBottom) {
      this.setState({isBottom: false});
    };
  }

  // 渲染 Label 选择界面
  renderLabelSelect(labelList) {
    return (
      <div className={styles.labelMask} onClick={this.closeLabelItem} >
        <div className={styles.optionWrapper} >
          {
            labelList.map( (label) =>
              <div className={styles.optionItem} onClick={this.clickLabelItem.bind(null, label)}>
                <span className={classnames("fa", "fa-"+label.icon, styles.icon)} />
                { label.nick_name}
              </div>
            )
          }
        </div>
      </div>
    );
  }

  render() {
    // cardList 接入
    let cardList = null;
    const postList = this.props.post[this.state.label.name];

    if (!postList) {
      cardList = []
    } else {
      cardList = postList.data;
    }

    return (
      <div className={styles.postListContainer}>
        <NavBar active="post" />
        <div className={styles.listHeader}>
          <div className={styles.selectLabel} onClick={this.clickLabel}>
            <span className={classnames("fa", "fa-"+this.state.label.icon, styles.icon)} />
            <span className={styles.text}>{this.state.label.nick_name}</span>
            <span className={styles.down}></span>
          </div>
          { this.state.labelSelectToggled? this.renderLabelSelect(this.props.label.data):null }
          <img src={this.state.label.banner} />
          <div className={styles.navWrapper}>
          {this.state.label.description}
          </div>

        </div>
        { // PostCard 列表
          cardList.map( (card) => <PostCard cardData={card} click={this.clickCard.bind(null, card.pid)}/> )
        }

        { // Post 编辑页面
          this.state.commentToggled ?
          <PostEdit
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
        <div className={styles.loadTipWrapper}>
          {
            this.state.isBottom && this.state.isFetching ? <LoadTip info="正在获取帖子中, 请稍后 ... "/> : null
          }
        </div>
      </div>
    );
  }
}

export default PostList;
