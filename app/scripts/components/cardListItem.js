import React from 'react';
import {Router, route, hashHistory} from 'react-router';

import store from '../store';
import ClowcardDetail from './clowcardDetail';

const CardListItem = React.createClass({
  clowcardDetail: function(e) {
    e.preventDefault();
    let linkName = this.props.card.name.split().join();
    hashHistory.push(`/user/:username/cardsCollection/clowcard/${linkName.split(' ').join('_')}`);
    return <ClowcardDetail />
  },
  render: function() {
    return (
      <li className="card-preview" onClick={this.clowcardDetail}>
        <h3>{this.props.card.name}</h3>
        <img src={this.props.card.url} />
      </li>
    );
  }

});


export default CardListItem;
