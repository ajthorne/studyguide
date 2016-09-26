import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './Components/App';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)


ReactDOM.render(router, document.querySelector('.container'));
