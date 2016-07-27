import React from 'react';

import Nav from './nav';

const App = React.createClass({
  render: function() {
    return (
      <div className="app-container">
        <Nav></Nav>
        {this.props.children}
      </div>
    );
  }
});

export default App;
