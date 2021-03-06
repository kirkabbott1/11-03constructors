describe('Card', function () {

  it('should instantiate a card with a point and a suit', function() {
    var card = new Card(5, 'diamonds');
    expect(card.point).toEqual(5);
    expect(card.suit).toEqual('diamonds');
  });

  it('image URL works for 2-10', function() {
    var card = new Card(2, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/2_of_diamonds.png');
    card = new Card(3, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/3_of_diamonds.png');
    card = new Card(4, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/4_of_diamonds.png');
    card = new Card(5, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/5_of_diamonds.png');
    card = new Card(6, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/6_of_diamonds.png');
    card = new Card(7, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/7_of_diamonds.png');
    card = new Card(8, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/8_of_diamonds.png');
    card = new Card(9, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/9_of_diamonds.png');
    card = new Card(10, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/10_of_diamonds.png');
  });

  it('image URL works for jack, queen, king and ace', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(12, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/queen_of_diamonds.png');
    card = new Card(13, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/king_of_diamonds.png');
    card = new Card(1, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/ace_of_diamonds.png');
  });

  it('image URL works for different suits', function() {
    var card = new Card(11, 'diamonds');
    expect(card.getImageUrl()).toEqual('images/jack_of_diamonds.png');
    card = new Card(11, 'clubs');
    expect(card.getImageUrl()).toEqual('images/jack_of_clubs.png');
    card = new Card(11, 'spades');
    expect(card.getImageUrl()).toEqual('images/jack_of_spades.png');
    card = new Card(11, 'hearts');
    expect(card.getImageUrl()).toEqual('images/jack_of_hearts.png');
  });
});
describe('hand', function () {

  it('return hand point value', function() {
    myHand.addCard(new Card(13, 'spades'));
    expect(myHand.getPoints()).toEqual(10);
  });

});
describe('Deck', function() {
  it('instantiates', function() {
    var deck = new Deck();
    expect(deck.numCardsLeft()).toEqual(52);
  });

  it('card count decreases', function() {
    var deck = new Deck();
    deck.draw();
    expect(deck.numCardsLeft()).toEqual(51);
  });

  it('returns cards in order', function() {
    var newDeck = new Deck();
    for (var i = 13; i >= 1; i--) {
      expect(newDeck.draw()).toEqual(new Card(i, 'hearts'));
      expect(newDeck.draw()).toEqual(new Card(i, 'clubs'));
      expect(newDeck.draw()).toEqual(new Card(i, 'spades'));
      expect(newDeck.draw()).toEqual(new Card(i, 'diamonds'));
    }
  });

  it('shuffles', function() {
    var deck = new Deck();
    var card1 = deck.draw(1);
    var card2 = deck.draw(2);
    deck.shuffle();
    var card1After = deck.draw(1);
    var card2After = deck.draw(2);
    var card1moved = card1 !== card1After;
    var card2moved = card2 !== card2After;
    expect(card1moved || card2moved).toEqual(true);
  });
});
