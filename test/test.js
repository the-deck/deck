const Deck = require('../src/index.js');

const myDeck = new Deck({ random: false, joker: false, frontBack: false });

console.dir(myDeck)
