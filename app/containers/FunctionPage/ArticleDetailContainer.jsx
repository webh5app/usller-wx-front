import { connect } from 'react-redux';

import { toPage, pageNames } from '../../actions/routerActions';

import ArticleDetail from '../../views/ArticleDetail/ArticleDetail.jsx';

const mapStateToProps = (state) => {
  return {};
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
