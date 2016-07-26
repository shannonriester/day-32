import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import store from './store';
import Login from './components/login';
import Signup from './components/signup';

const CardRouter = (
  <Router history={hashHistory}>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/user/{store.session.username}" component={Signup}/>
    <Route path="/user/{store.session.username}/cardsCollection" component={Signup}/>
  </Router>
)

ReactDOM.render(CardRouter, document.getElementById('container'));
