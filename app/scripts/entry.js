import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import store from './store';
import App from './components/App';
import Nav from './components/nav';
import Login from './components/login';
import Signup from './components/signup';
import CardsList from './components/cardsList';
import ClowcardDetail from './components/clowcardDetail';
import Profile from './components/profile';

const router = (

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CardsList}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/user/:username" component={Profile}/>
      <Route path="/user/:username/cardsCollection" component={CardsList}/>
      <Route path="/user/:username/cardsCollection/clowcard/:name" component={ClowcardDetail}/>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('cards-page'));
// ReactDOM.render(<Nav />, document.getElementById('header'));
