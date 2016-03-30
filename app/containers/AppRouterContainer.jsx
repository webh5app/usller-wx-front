import { connect } from 'react-redux'

import AppRouter from './components/AppRouter.jsx';

const mapStateToProps = (state) => {
  return {
    currentPage: state.router.pageCurrent,
  }
}

const AppRouterContainer = connect(
  mapStateToProps,
)(AppRouter)

export default AppRouterContainer;
