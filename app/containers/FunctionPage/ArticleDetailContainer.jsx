import { connect } from 'react-redux';

import { toPage, pageNames } from '../../actions/routerActions';

import ArticleDetail from '../../views/ArticleDetail/ArticleDetail.jsx';

const mapStateToProps = (state, ownProps) => {
    return {
      article: ownProps.article
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onCancel: () => {
        dispatch(toPage(pageNames.MainShowPage))
      }
    }
}

const ArticleDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleDetail);

export default ArticleDetailContainer;
