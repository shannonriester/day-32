import React from 'react';

import store from '../store';
import CardListItem from './cardListItem';

const UsersCardsList = React.createClass({
  render: function(){
    let cardArr = store.cards.map((card, i) => {
      return <CardListItem card={card} key={i} />
    });
    return (
      <ul>
        {cardArr}
      </ul>
    );
  }
});

export default UsersCardsList;
