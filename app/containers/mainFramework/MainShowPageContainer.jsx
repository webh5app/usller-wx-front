import { connect } from 'react-redux';

import { toPage, toComposition, pageNames, compositionNames }from '../../actions/routerActions';
import MainShowPage from '../../views/mainFramework/MainShowPage.jsx';

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      clickSide: () => {
        dispatch(toComposition(compositionNames.SideBar))
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
