import { connect } from 'react-redux';

import { toPage, toComposition, pageNames } from '../../actions/routerActions';

import ShareBox from '../../views/compositions/ShareBox.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickShare: (pageName) => {
      dispatch(toPage(pageName));
    },
    onCancel: () => {
      dispatch(toComposition(null));
    }
  };
}

const ShareBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareBox);

export default ShareBoxContainer;
