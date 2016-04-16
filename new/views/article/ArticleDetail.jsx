import React from 'react';
import classnames from 'classnames';

import styles from './ArticleDetail.scss';

import article from './detailData';

const DetailHeader = ({header, clickReturn, clickLike, clickShare}) => (
  <div className={styles.articleHeader}>
    <div className={styles.headerTop}>
      <div className={styles.headerFloatWrapper}>
        <span className={classnames("fa", "fa-chevron-left", styles.return)} onClick={clickReturn}></span>
        <div className={styles.headerRightWrapper}>
          <span className={classnames("fa", "fa-thumbs-o-up", styles.like)} onClick={clickLike}></span>
          <span className={classnames("fa", "fa-share-alt", styles.share)} onClick={clickShare}></span>
        </div>
      </div>
      <img src={header.banner} />
    </div>
    <div className={styles.headerTitle}>
      {header.title}
    </div>
    <div className={styles.headerBottom}>
      <span className={styles.activity}>{header.activity}</span>
      <span className={styles.datetime}>{header.datetime}</span>
    </div>
    <div className={styles.headerOpt}>
      <span className={classnames("fa", "fa-eye", styles.icon)}></span>
      <span className={styles.number}>{header.info.view}</span>
      <span className={classnames("fa", "fa-thumbs-o-up", styles.icon)}></span>
      <span className={styles.number}>{header.info.like}</span>
      <span className={classnames("fa", "fa-comments", styles.icon)}></span>
      <span className={styles.number}>{header.info.comment}</span>
    </div>
  </div>
);

const DetailContent = ({content}) => (
  <div className={styles.articleContent}>
    <div className={styles.contentHeader}>
      正文
    </div>
    <div className={styles.contentWrapper}>
      <div dangerouslySetInnerHTML={{__html: content}} />
    </div>
  </div>
);

const DetailComment = ({comments, clickEdit}) => (
  <div className={styles.articleComment}>
    <div className={styles.commentHeader}>
      <span>评论</span>
      <div className={styles.editWrapper} onClick={clickEdit}>
        <span className={classnames("fa", "fa-pencil", styles.icon)}></span>
         写留言
      </div>
    </div>
    <div className={styles.commentWrapper}>
      {
        comments.map( (comment) => (
          <div className={styles.commentItem}>
            <div className={styles.leftFloat}>
              <image src={comment.author.image} />
            </div>
            <div className={styles.rightFloat}>
              <div className={styles.rightHeader}>
                {comment.author.name}
              </div>
              <div className={styles.rightComment}>
                {comment.comment}
              </div>
              <div className={styles.rightBottom}>
                <span className={styles.datetime}>
                  {comment.datetime}
                </span>
                <div className={styles.right}>
                  <span className={classnames('fa', 'fa-thumbs-o-up', styles.icon)}></span>
                  {comment.like}
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </div>
);

const DetailEdit = ({clickReturn, clickSend, clickImage, editChange}) => (
  <div className={styles.articleEdit}>
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
)

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeEdit: false,
      input: '',
    }

    // Detail 事件
    this.clickReturn = this.clickReturn.bind(this);
    this.clickLike = this.clickLike.bind(this);
    this.clickShare = this.clickShare.bind(this);
    this.clickEdit = this.clickEdit.bind(this);

    // DetailEdit 事件
    this.editChange = this.editChange.bind(this);
    this.clickEditSend = this.clickEditSend.bind(this);
    this.clickEditReturn = this.clickEditReturn.bind(this);
    this.clickEditImage = this.clickEditImage.bind(this)
  }

  componentDidMount() {
    // 从顶部显示
    window.scrollTo(0,0);
  }

  clickReturn() {
    history.back();
  }

  clickLike() {

  }

  clickShare() {

  }

  clickEdit() {
    this.setState({activeEdit: true});
  }

  editChange(e) {
    this.setState({input: e.target.value})
  }

  clickEditSend(e, value) {
    console.log('Click Send: ' + this.state.input);
    this.setState({activeEdit: false});
  }

  clickEditReturn() {
    this.setState({activeEdit: false});
  }

  clickEditImage() {
    console.log('Click Image');
  }

  render() {
    return (
      <div className={styles.articleDetail}>
        <DetailHeader
          header={article.header}
          clickReturn={this.clickReturn}
          clickLike={this.clickLike}
          clickShare={this.clickShare}
        />
      <DetailContent content={article.content} />
      <DetailComment comments={article.comments} clickEdit={this.clickEdit}/>
      { this.state.activeEdit ?
        <DetailEdit
          editChange={this.editChange}
          clickReturn={this.clickEditReturn}
          clickSend={this.clickEditSend}
          clickImage={this.clickEditImage}
        />
      :null}
      </div>
    );
  }
}

export default ArticleDetail;
