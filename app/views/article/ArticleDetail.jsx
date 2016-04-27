import React from 'react';
import classnames from 'classnames';
import 'whatwg-fetch';

import EditTemplate from '../edit/EditTemplate.jsx';
import CommentTemplate from '../comment/CommentTemplate.jsx';
import IconFloatButton from '../../components/IconFloatButton/IconFloatButton.jsx';
import DateTimeSpan from '../../components/DateTimeSpan/DateTimeSpan.jsx';

import styles from './ArticleDetail.scss';

// 文章细节页面头
const DetailHeader = ({article, clickReturn, clickLike, clickShare}) => (
  <div className={styles.articleHeader}>
    <div className={styles.headerTop}>
      <img src={article.bannerImage} />
    </div>
    <div className={styles.headerTitle}>
      {article.title}
    </div>
    <div className={styles.headerMeta}>
      <span className={styles.metaItem}> {article.meta.view} 人看过·</span>
      <span className={styles.metaItem}> {article.meta.like} 人喜欢·</span>
      <span className={styles.metaItem}> {article.meta.comment} 人评论·</span>
      <span className={styles.metaItem}>
        <DateTimeSpan type="Readable" datetime={article.meta.created_at} />
      </span>
    </div>
    <div className={styles.operateWrapper}>
      <div className={styles.operateItem}>
        <span className={classnames("fa", "fa-heart-o", styles.icon)} />
        喜欢
      </div>
      <div className={styles.operateItem}>
        <span className={classnames("fa", "fa-share-alt", styles.icon)} />
        分享
      </div>
    </div>
  </div>
);

// 文章细节页面的常用组件
const DetailContent = ({body}) => (
  <div className={styles.articleContent}>
    <div className={styles.contentHeader}>
      正文
    </div>
    <div className={styles.contentBody}>
      <div dangerouslySetInnerHTML={{__html: body}}></div>
    </div>
  </div>
);


class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeEdit: false,
      atName: null,
    }

    // 文章
    this.articleReturn = this.articleReturn.bind(this);
    this.articleLike = this.articleLike.bind(this);
    this.articleShare = this.articleShare.bind(this);
    this.articleEdit = this.articleEdit.bind(this);

    // 评论页面
    this.editClose = this.editClose.bind(this);
    this.editChange = this.editChange.bind(this);
    this.editSend = this.editSend.bind(this);
  }

  componentDidMount() {
    // 从顶部显示
    window.scrollTo(0,0);

    this.props.initial(this.props.detail, this.props.params.articleId);
  }

  articleLike() {
    console.log("Article Like");
  }

  articleShare() {
    console.log("Article Share");
  }

  articleReturn() {
    if (history.length <= 2) {
      this.props.toArticleList();
    } else {
      history.go(-1);
    }
  }

  articleEdit(atName) {
    this.setState({activeEdit: true, atName: atName});
  }

  editClose() {
    this.setState({activeEdit: false});
  }

  editChange() {
    console.log('Edit Change');
  }

  editSend(data) {
    this.setState({activeEdit: false});
    this.props.postComment(this.props.article.id, data, this.props.user.token)
  }

  render() {
    const _article = this.props.article;
    let _comment = [];

    // 当数据没加载时的预设逻辑
    if (!this.props.comment.comment) {
        _comment = [];
    } else {
      _comment = this.props.comment.comment;
    }

    if (!_article.meta) {
      _article.meta = [];
    }

    return (
      <div className={styles.articleDetail}>
        <DetailHeader
          article={_article}
          clickReturn={this.articleReturn}
          clickLike={this.articleLike}
          clickShare={this.articleShare}
        />
      <DetailContent body={_article.body} />
        {
          <CommentTemplate commentList={_comment} clickEdit={this.articleEdit} clickLike={this.articleLike}/>
        }
        <IconFloatButton
          position={{
            bottom: '1rem',
            right: '1rem',
            zIndex: '100',
          }}
          icon='pencil'
          click={this.articleEdit.bind(null, null)}
        />

        <IconFloatButton
          position={{
            bottom: '1rem',
            left: '1rem',
            zIndex: '100',
          }}
          icon='chevron-left'
          bgColor="rgba(0,0,0,0.78)"
          click={this.articleReturn}
        />

        {
          this.state.activeEdit ?
          <EditTemplate
            at={this.state.atName}
            send={this.editSend}
            close={this.editClose}
          />
          :null
        }

      </div>
    );
  }
}

export default ArticleDetail;
