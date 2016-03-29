import { connect } from 'react-redux';

import { toPage, pageNames } from '../../actions/routerActions';

import SearchPage from '../../views/SearchPage/SearchPage.jsx';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCancel: () => {
      dispatch(toPage(pageNames.MainShowPage));
    }
  };
}

const SearchPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);

export default SearchPageContainer;
