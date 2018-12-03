import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { GlobalIconfontStyle}  from './statics/iconfont/iconfont';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={ store }>
          <div>
            <Header />
            <BrowserRouter> 
              <div>
                <Route path='/' exact render={() => <div>home</div>}></Route>
                <Route path='/detail' exact render={() => <div>detail</div>}></Route>
              </div>
            </BrowserRouter>
          </div>
        </Provider>
        
        <GlobalIconfontStyle />
      </Fragment>
    );
  }
}

export default App;
