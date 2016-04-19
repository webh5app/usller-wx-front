import React from 'react';
import classnames from 'classnames';

import IconFloatButton from '../../components/IconFloatButton/IconFloatButton.jsx';
import EditTemplate from '../edit/EditTemplate.jsx';
import CommentTemplate from '../comment/CommentTemplate.jsx';

import styles from './PostDetail.scss';

const post = {
  author: {
    name: 'Kim Montls',
    imageURL: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg'
  },
  datetime: '27时前',
  content: {
    title: '早上吃什么呢?',
    body: '吃吃吃吃吃吃吃, 狂吃,狂吃, 哈哈哈哈哈哈哈哈哈哈哈dsfjaskdlfjaslk;fjsklfg上点击发送点开放家里看;国家可拉伸的价格;阿萨德就干啥的价格可简单概括;爱就是打开;国家贷款;干啥都开了个健康四大;更快乐撒;工具;开朗就;卡时间观看了;手机观看了;十几个删掉个杀手的高科技阿萨德; 撒大哥撒大哥撒大哥阿萨德刚'
  },
  imageList:  [],
  meta: {
    like: 122,
    comment: 200,
    view: 1000,
    cataIcon: 'bullhorn',
    cataText: '热门'
  },
  commentList: [
    {
      author: {
        name: '你好',
        imageURL: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg',
      },
      datetime: '1小时前',
      content: 'hi 你好啊',
      meta: {
        like: 100,
      },
      response: '不是的哦'
    },
    {
      author: {
        name: '王尼玛',
        imageURL: 'http://img.wxcha.com/file/201603/28/2722e3ab4c.jpg',
      },
      datetime: '3小时前',
      content: 'hi 你好啊asdf',
      meta: {
        like: 1000,
      }
    }
  ]
}

const PostHeader = ({post}) => (
  <div className={styles.postHeader}>
    <div className={styles.info}>
      <img src={post.author.imageURL} />
      <div className={styles.cata}>
        <span className={classnames('fa', 'fa-'+post.meta.cataIcon, styles.icon)} />
        { post.meta.cataText }
      </div>
      <div className={styles.author}>
        <div className={styles.name}>
          { post.author.name }
        </div>
        <div className={styles.datetime}>
          { post.datetime }
        </div>
      </div>
    </div>
    <div className={styles.title}>
      { post.content.title }
    </div>
    <div className={styles.body}>
      { post.content.body }
    </div>
    <div className={styles.meta}>
      <div className={styles.metaItem}>
        <span className={classnames('fa', 'fa-eye', styles.icon)} />
        {post.meta.view}
      </div>
      <div className={styles.metaItem}>
        <span className={classnames('fa', 'fa-thumbs-o-up', styles.icon)} />
        {post.meta.like}
      </div>
      <div className={styles.metaItem}>
        <span className={classnames('fa', 'fa-comments', styles.icon)} />
        {post.meta.comment}
      </div>
    </div>
  </div>
);

class PostDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentToggled: false,
      atName: null,
    }

    this.clickEdit = this.clickEdit.bind(this);
    this.clickLike = this.clickLike.bind(this);
    this.editSend = this.editSend.bind(this);
    this.editClose = this.editClose.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  clickEdit(atName) {
    this.setState({commentToggled: true, atName: atName});
  }

  clickLike() {
    // 外部逻辑
    console.log("Click Like");
  }

  editSend(data) {
    this.setState({commentToggled: false, atName: null});
    // 提示发送成功
    // 发送数据给外部逻辑
  }

  editClose() {
    this.setState({commentToggled: false, atName: null});
  }

  render() {
    return (
      <div className={styles.postDetailContainer}>
        <PostHeader post={post} />
        <CommentTemplate commentList={post.commentList} clickLike={this.clickLike} clickEdit={this.clickEdit}/>
        <div className={styles.floatButtonContainer}>
          <IconFloatButton
            icon="chevron-left"
            position={{
              bottom: '1rem',
              left: '1rem',
              zIndex: '100'
            }}
            bgColor='rgba(0,0,0,0.78)'
            click={this.props.close}
          />
          <IconFloatButton
            icon="comments"
            position={{
              bottom: '1rem',
              right: '1rem',
              zIndex: '100'
            }}
            click={this.clickEdit.bind(null, null)}
          />
        </div>
        {
          this.state.commentToggled ?
          <EditTemplate
            at={this.state.atName}
            close={this.editClose}
            send={this.editSend}
          /> : null
        }
      </div>
    );
  }
}

export default PostDetail;
