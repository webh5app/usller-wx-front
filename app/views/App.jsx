import React from 'react';

import styles from './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.appContainer}>
        { this.props.children }
      </div>
    );
  }
}

export default App;
