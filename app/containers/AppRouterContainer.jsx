import { connect } from 'react-redux';

import AppRouter from '../views/AppRouter.jsx';

const mapStateToProps = (state) => {
  return {
    currentPage: state.router.get('pageCurrent'),
    preload: state.router.get('preload'),
  }
};

const AppRouterContainer = connect(
  mapStateToProps
)(AppRouter);

export default AppRouterContainer;
