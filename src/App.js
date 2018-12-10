import React, { Component, Fragment } from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import { GlobalIconfontStyle}  from './statics/iconfont/iconfont';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={ store }>
            <BrowserRouter> 
              <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' exact component={Detail}></Route>
              </div>
            </BrowserRouter>
        </Provider>
        
        <GlobalIconfontStyle />
      </Fragment>
    );
  }
}

export default App;
