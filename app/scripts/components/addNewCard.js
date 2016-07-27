import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import store from '../store';

const AddNewCard = React.createClass({
  addCard: function(e){
    e.preventDefault();
      // let name = this.refs.cardName.value,
      // let url = this.refs.cardUrl.value,
      // let magic = this.refs.cardMagic.value,
      // let creator =  this.refs.cardCreator.value,
      // let guardian =  this.refs.cardGuardian.value
    let newCard = {
      name: name,
      url: url,
      magic: magic,
      creator: creator,
      guardian: guardian
    }
    console.log('You created a new card!', newCard);
  },
  render: function(){
    return (
      <form onSubmit={this.addCard}>
        <input type="text" placeholder="Card Name" ref="cardName"/>
        <input type="text" placeholder="image url" ref="cardUrl"/>
        <a href="http://cardcaptorsakura.wikia.com/wiki/Clow_Cards">Get images here...</a>
        <input type="text" placeholder="Magic" ref="cardMagic"/>
        <input type="text" placeholder="Value" ref="cardValue"/>
        <input type="text" placeholder="Creator" ref="cardCreator"/>
        <input type="text" placeholder="Guardian" ref="cardGuardian"/>
        <input type="submit" value="enter" />
      </form>
    );
  }
})

export default AddNewCard;
