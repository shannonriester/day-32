import React from 'react';
import {Router, route, hashHistory} from 'react-router';

import store from '../store';

const ClowcardDetail = React.createClass({
  render: function(){
    let cardObj = store.cards.filter((card, i) => {
      if (this.props.params.name.split('_').join(' ') === card.name) {
        return card;
      }
    });
    console.log(cardObj[0]);
    return (
      <div>
        <div className="card-detail"><img src={cardObj[0].url} /></div>
        <div className="card-info">
          <ul>
            <li>
            <p className="card-name card-data"><span className="span-card-data">Name: </span> {cardObj[0].name}</p>
            <p className="card-value card-data"><span className="span-card-data">Value: </span> {cardObj[0].value}</p>
            <p className="card-magic card-data"><span className="span-card-data">Magic: </span> {cardObj[0].magic}</p>
            <h4><span className="span-card-data">Notes: </span></h4>
            <p className="user-notes">I like this card so much and I hope you do too!</p>
            </li>
          </ul>
        </div>
      </div>
   );
  }
});

export default ClowcardDetail;
