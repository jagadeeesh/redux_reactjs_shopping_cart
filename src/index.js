import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';
import store, { history } from './store';
import { Router, Route } from 'react-router';
import Cart from './containers/Cart';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}></Route>
      <Route path="/cart" component={Cart}></Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
