import { connect } from 'react-redux'

import App from '../views/App.jsx';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
