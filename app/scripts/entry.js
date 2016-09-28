import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';
import App from './Components/App';
import FlashCards from './Components/FlashCards';
import HtmlVocab from './Components/HtmlVocab';
import CssVocab from './Components/CssVocab';
import JsVocab from './Components/JsVocab';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FlashCards}/>
      <Route path="/html" component={HtmlVocab}/>
      <Route path="/css" component={CssVocab}/>
      <Route path="/js" component={JsVocab}/>
    </Route>
  </Router>
)


ReactDOM.render(router, document.querySelector('.container'));
