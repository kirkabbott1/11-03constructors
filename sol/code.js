function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

Card.prototype.getImageUrl = function() {
  var name = this.point;
  if (name === 11) {
    name = 'jack';
  } else if (name === 12) {
    name = 'queen';
  } else if (name === 13) {
    name = 'king';
  } else if (name === 1) {
    name = 'ace';
  }
  return 'images/' + name + '_of_' + this.suit + '.png';
};

function Hand() {
  this.cardArray = [];
}

Hand.prototype.getPoints = function() {
  var combine = function(sum, card) {
    var point = card.point;
    if (point === 11 || point === 12 || point === 13) {
      point = 10;
    }
    if (point === 1 && sum <= 10) {
      point = 11;
    }
    return sum + point;
  };
  return this.cardArray.reduce(combine, 0);
};

Hand.prototype.addCard = function(card) {
  this.cardArray.push(card);
  this.cardArray.sort(function(a, b) {
    return b.point - a.point;
  });
};

function Deck() {
  this.cardArray = [];
  for (var i = 1; i <= 13; i++) {
    this.cardArray.push(new Card(i, 'diamonds'));
    this.cardArray.push(new Card(i, 'clubs'));
    this.cardArray.push(new Card(i, 'hearts'));
    this.cardArray.push(new Card(i, 'spades'));
  }
}

Deck.prototype.numOfCards = function() {
  return this.cardArray.length;
};

Deck.prototype.draw = function() {
  return this.cardArray.pop();
};

Deck.prototype.getCard = function(i) {
  return this.cardArray[i - 1];
};

Deck.prototype.shuffle = function() {
  for (var i = 0; i < this.cardArray.length; i++) {
    var rand = Math.floor(Math.random() * this.cardArray.length),
        rand2 = Math.floor(Math.random() * this.cardArray.length),
        temp;
    temp = this.cardArray[rand];
    this.cardArray[rand] = this.cardArray[rand2];
    this.cardArray[rand2] = temp;
  }
}
