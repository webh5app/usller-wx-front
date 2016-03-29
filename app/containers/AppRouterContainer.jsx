import { connect } from 'react-redux';

import AppRouter from '../views/AppRouter.jsx';

const mapStateToProps = (state) => {
  return {
    currentPage: state.router.get('pageCurrent'),
  }
};

const AppRouterContainer = connect(
  mapStateToProps
)(AppRouter);

export default AppRouterContainer;
