import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { GlobalIconfontStyle}  from './statics/iconfont/iconfont';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <GlobalIconfontStyle />
      </Fragment>
    );
  }
}

export default App;
