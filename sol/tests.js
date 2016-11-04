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

describe('Hand', function() {
  it('empty hand has zero points', function() {
    var hand = new Hand();
    expect(hand.getPoints()).toEqual(0);
  });

  it('hand with one card returns value of card', function() {
    var card = new Card(5, 'clubs');
    var hand = new Hand();
    hand.addCard(card);
    expect(hand.getPoints()).toEqual(5);
  });

  it('sums multiple cards', function() {
    var hand = new Hand();
    hand.addCard(new Card(5, 'clubs'));
    hand.addCard(new Card(9, 'hearts'));
    expect(hand.getPoints()).toEqual(14);
  });

  it('kings, queens, jacks count for 10', function() {
    var hand = new Hand();
    hand.addCard(new Card(11, 'clubs'));
    expect(hand.getPoints()).toEqual(10);
    hand = new Hand();
    hand.addCard(new Card(12, 'clubs'));
    expect(hand.getPoints()).toEqual(10);
    hand = new Hand();
    hand.addCard(new Card(13, 'clubs'));
    expect(hand.getPoints()).toEqual(10);
  });

  it('aces become 11s', function() {
    var hand = new Hand();
    hand.addCard(new Card(1, 'clubs'));
    expect(hand.getPoints()).toEqual(11);
  });

  it('aces should not bust if possible', function() {
    var hand = new Hand();
    hand.addCard(new Card(10, 'clubs'));
    hand.addCard(new Card(2, 'clubs'));
    hand.addCard(new Card(1, 'clubs'));
    expect(hand.getPoints()).toEqual(13);
  });

  it('aces should not bust if possible (but aces is in front)', function() {
    var hand = new Hand();
    hand.addCard(new Card(1, 'clubs'));
    hand.addCard(new Card(10, 'clubs'));
    hand.addCard(new Card(2, 'clubs'));
    expect(hand.getPoints()).toEqual(13);
  });
});

describe('Deck', function() {
  it('instantiates', function() {
    var deck = new Deck();
    expect(deck.numOfCards()).toEqual(52);
  });

  it('card count decreases', function() {
    var deck = new Deck();
    deck.draw();
    expect(deck.numOfCards()).toEqual(51);
  });

  it('returns cards in order', function() {
    var deck = new Deck();
    for (var i = 13; i >= 1; i--) {
      expect(deck.draw()).toEqual(new Card(i, 'spades'));
      expect(deck.draw()).toEqual(new Card(i, 'hearts'));
      expect(deck.draw()).toEqual(new Card(i, 'clubs'));
      expect(deck.draw()).toEqual(new Card(i, 'diamonds'));
    }
  });

  it('shuffles', function() {
    var deck = new Deck();
    var card1 = deck.getCard(1);
    var card2 = deck.getCard(2);
    deck.shuffle();
    var card1After = deck.getCard(1);
    var card2After = deck.getCard(2);
    var card1moved = card1 !== card1After;
    var card2moved = card2 !== card2After;
    expect(card1moved || card2moved).toEqual(true);
  });
});
