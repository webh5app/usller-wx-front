import { connect } from 'react-redux';

import { toPage, pageNames } from '../../actions/routerActions';

import CollectionPage from '../../views/mainFramework/CollectionPage/CollectionPage.jsx';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
      onClickSection: (sectionName) => {
        dispatch(toPage(pageNames.CollectionPage, {sectionName: sectionName}));
      },
    }
}

const CollectionPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPage)

export default CollectionPageContainer;
