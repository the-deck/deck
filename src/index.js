const SUITS = [
  'Spade', 'Heart', 'Diamond', 'Club'
];

const NAMES = [
  'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
];

module.exports = class Deck {
  constructor({
    random = false,
    joker = false,
    frontBack = false,
  }) {

    const cards = [];

    SUITS.forEach(suit => {
      NAMES.forEach(name => {
        cards.push({
          suit,
          name,
        })
      })
    })

    return cards;
  }
};
