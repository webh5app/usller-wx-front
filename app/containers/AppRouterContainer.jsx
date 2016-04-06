import { connect } from 'react-redux';

import AppRouter from '../views/AppRouter.jsx';

const mapStateToProps = (state) => {
  return {
    pageName: state.router.get('pageName'),
    pagePreload: state.router.get('pagePreload'),
    compositionName: state.router.get('compositionName'),
    compositionPreload: state.router.get('compositionPreload'),
  }
};

const AppRouterContainer = connect(
  mapStateToProps
)(AppRouter);

export default AppRouterContainer;
