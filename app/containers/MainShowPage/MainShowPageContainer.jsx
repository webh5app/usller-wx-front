import { connect } from 'react-redux';

import { toPage, pageNames }from '../../actions/routerActions';
import MainShowPage from '../../views/MainShowPage/MainShowPage.jsx';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      completedAtType: () => {
        dispatch(toPage(pageNames.SideBar));
      },
      clickSide: () => {
        dispatch(toPage(pageNames.SideBar));
      },
      clickSearch: () => {
        dispatch(toPage(pageNames.SearchPage))
      }
    };
};

const MainShowPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShowPage);

export default MainShowPageContainer;
