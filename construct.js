// function Person(name, email, phone) {
//   this.name = name;
//   this.email = email;
//   this.phone = phone;
// }
//
// Person.prototype.greet = function(other) {
//   console.log('Hello ' + other.name + ', I am ' + this.name + '!');
// };
//
// var Sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
// var Jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
// Sonny.greet(Jordan);
// Jordan.greet(Sonny);
// console.log(Jordan.email, Jordan.phone);
function Card(point, suit) {
  this.point = point;
  this.suit = suit;
};
Card.prototype.show = function() {
  console.log('the card point is ' + this.point + ' and suit is ' + this.suit)
};

var myCard = new Card(5, 'diamonds')

myCard.show();

Card.prototype.getImageUrl = function() {
  return 'images/' + this.point + '_of_' + this.suit + '.png'
};
console.log(myCard.getImageUrl())

function Hand() {
  this.cardArray = []
  this.points = 0
};

Hand.prototype.addCard = function(card) {
  this.cardArray.push({point: card.point, suit: card.suit});
};

Hand.prototype.getPoints = function(hand) {
  this.cardArray.reduce(function (currSum, addCurrVal) {
    var add = addCurrVal.point;
    if (add > 10) {
      add = 10;
    } else if (add === 1) {
      if (add > 10){
        add = 1;
      } else {
        add += 11;
      }
    }
    return currSum + add;
  }, 0);
};

var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()
