import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import store from '../store';

const Signup = React.createClass({
  signupFunction: function(e){
    e.preventDefault();
    store.session.usesrname = this.refs.username.value;
    if (this.refs.password === this.refs.password2) {
      store.session.password = this.refs.password.value;
    } else {
      console.log('your passwords don\t match');
    }
  },
  // loginFunction: function(e) {
  //   e.preventDefault();
  //   hashHistory.push('/login');
  // },
  render: function(){
    return (
      <form className="submit-page" onSubmit={this.signupFunction}>
        <input type="text" placeholder="create username" ref="username"/>
        <input type="password" placeholder="create password" ref="password"/>
        <input type="password" placeholder="verify password" ref="password2"/>
        <input className="button" type="submit" value="enter" />
      </form>
    );
  }
})

export default Signup;
