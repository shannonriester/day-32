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
          <li><Link to={`/user/${store.session.username}/`}>Home</Link></li>
          <li><Link to={`/user/${store.session.username}/cardsCollection`}>Your Cards</Link></li>
          <li><Link to={`/user/${store.session.username}/cardsCollection/addNewCard`}>Add Card</Link></li>
        </ul>
        {this.props.children}
        <ul className="nav-session">
          <li className="login-button"><Link to="/login">Login</Link></li>
          <li className="signup-button"><Link to="/signup">Sign Up</Link></li>
          <li className="logout-button"><Link to="/login">Logout</Link></li>
        </ul>
      </nav>
    );
  }
});

export default Nav;
