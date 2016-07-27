import React from 'react';

import store from '../store';
import profileListItem from './profileDetail';

const Profile = React.createClass({
  render: function() {

    return (
      <div className="profile-page">
          Hi, {store.session.username}!
      </div>
    );
  }
});

export default Profile;
