import React from 'react';

import store from '../store';

const Profile = React.createClass({
  render: function() {
    let userArr = store.users.map(user, i) =>{
      return <UserProfile user={user} key={i} />
    }
    return (
      <div className="profile-page">
        <ul className="profile-ul">
          {userArr}
        </ul>
      </div>
    );
  }
});

export default Profile;
