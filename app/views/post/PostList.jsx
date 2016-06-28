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
      status: {
        isBottom: false,
        isLabelToggled: false,
        isCommentToggled: false,
      },
      label: 'chat',
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
    // get Label List
    this.props.getLabelList();
    // get Card data
    this.props.getLabelData('chat');

    document.addEventListener('scroll', this.listenScroll, false);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.listenScroll, false);
  }

  clickLabel() {
    const status = Object.assign({}, this.state.status);
    status.isLabelToggled = true;
    this.setState({status: status});
  }

  clickLabelItem(label) {
    console.log(label)
    const status = Object.assign({}, this.state.status);
    status.isLabelToggled = false;
    this.setState({label: label.name})
  }

  closeLabelItem() {
    const status = Object.assign({}, this.state.status);
    status.isLabelToggled = false;
    this.setState({status: status});
  }

  clickCard(id) {
    this.props.clickCard(id);
  }

  editNew(atName) {
    const status = Object.assign({}, this.state.status);
    status.isCommentToggled = true;
    this.setState({status: status});
  }

  editSend(title, content) {
    this.props.postPost(this.state.label, this.props.user, title, content);
    const status = Object.assign({}, this.state.status);
    status.isCommentToggled = false;
    this.setState({status: status});
  }

  editClose() {
    const status = Object.assign({}, this.state.status);
    status.isCommentToggled = false;
    this.setState({status: status});
  }

  listenScroll() {
    const status = Object.assign({}, this.state.status);

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.state.isBottom) {
      this.props.addList(this.state.label, this.props.post[this.state.label].count);
      status.isBottom = true;
      this.setState({status: status});
    }

    if ((window.innerHeight + window.scrollY ) < document.body.offsetHeight - 200 && this.state.isBottom) {
      status.isBottom = false;
      this.setState({status: status});
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
    let currentLabel = null;

    const postList = this.props.post[this.state.label];
    const rawCurrentLabel = this.props.label.data.filter((obj) =>
      obj.name === this.state.label
    )

    if (rawCurrentLabel.length > 0)
      currentLabel = rawCurrentLabel[0]
    else
      currentLabel = {}

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
            <span className={styles.text}>{currentLabel.nick_name}</span>
            <span className={styles.down}></span>
          </div>
          { this.state.status.isLabelToggled ? this.renderLabelSelect(this.props.label.data):null }
          <img src={currentLabel.banner} />
          <div className={styles.navWrapper}>
          {currentLabel.description}
          </div>

        </div>
        { // PostCard 列表
          cardList.map( (card) => <PostCard cardData={card} click={this.clickCard.bind(null, card.pid)}/> )
        }

        { // Post 编辑页面
          this.state.status.isCommentToggled ?
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
            this.state.status.isBottom && this.props.isFetching ? <LoadTip info="正在获取帖子中, 请稍后 ... "/> : null
          }
        </div>
      </div>
    );
  }
}

export default PostList;
