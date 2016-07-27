import React from 'react';
// import Router from 'react-router';
import {Link} from 'react-router';
import store from '../store';

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <h1>Cardcaptors Trading Cards</h1>
        <ul className="nav-main">
          <Link to={`/user/${store.session.username}/`}><li>Home</li></Link>
          <Link to={`/user/${store.session.username}/cardsCollection`}><li>Your Cards</li></Link>
          <Link to={`/user/${store.session.username}/cardsCollection/addNewCard`}><li>Add Card</li></Link>
        </ul>
        {this.props.children}
        <ul className="nav-session">
          <Link to="/login"><li className="login-button">Login</li></Link>
          <Link to="/signup"><li className="signup-button">Sign Up</li></Link>
          <Link to="/login"><li className="logout-button">Logout</li></Link>
        </ul>
      </nav>
    );
  }
});

export default Nav;
