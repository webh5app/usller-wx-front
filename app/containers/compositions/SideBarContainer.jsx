import { connect } from 'react-redux';

import { toPage, toComposition, pageNames }from '../../actions/routerActions';

import SideBar from '../../views/compositions/SideBar.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSideItem: (pageName) => {
      // pageName is undefined
      dispatch(toPage(pageName));
    },
    onMask: () => {
      dispatch(toComposition(null));
    }
  };
}

const SideBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SideBarContainer;
