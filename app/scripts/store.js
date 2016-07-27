import cardsCollection from './collections/cardsCollection';
import usersCollection from './collections/cardsCollection';

const store = {
  session: {
    'username': 'filler',
    'password': ''
  },
  cards: cardsCollection,
  users: usersCollection
}

export default store;
