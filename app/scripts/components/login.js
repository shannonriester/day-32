import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import store from '../store';

const Login = React.createClass({
  loginFunction: function(e){
    e.preventDefault();
    store.session.username = this.refs.username.value;
    store.session.password = this.refs.password.value;
    console.log('session', store.session);
    hashHistory.push(`/user/${store.session.username}`);
  },
  signupFunction: function(e) {
    e.preventDefault();
    hashHistory.push('/signup');
  },
  render: function(){
    return (
      <form onSubmit={this.loginFunction}>
        <input type="text" placeholder="username" ref="username"/>
        <input type="password" placeholder="password" ref="password"/>
        <input className="button" type="submit" value="enter" />
        <input className="button" type="button" value="or sign up!" onClick={this.signupFunction} />
      </form>
    );
  }
})

export default Login;
