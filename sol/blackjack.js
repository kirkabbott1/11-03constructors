var deck = newDeck();
var dealerHand = [];
var playerHand = [];

function deal(hand, handSelector) {
  var card = deck.pop();
  hand.push(card);
  $(handSelector).append('<img class="card" src="' + getCardImageUrl(card) + '">');
}

$(function() {

  $('#deal-button').click(function() {
    deal(dealerHand, '#dealer-hand');
    deal(playerHand, '#player-hand');
    deal(dealerHand, '#dealer-hand');
    deal(playerHand, '#player-hand');
    $('#dealer-points').text(calculatePoints(dealerHand));
    $('#player-points').text(calculatePoints(playerHand));

  });

  $('#hit-button').click(function() {
    deal(playerHand, '#player-hand');
    var playerPoints = calculatePoints(playerHand);
    $('#player-points').text(playerPoints);
    if (playerPoints > 21) {
      $('#messages').text('You busted!');
    }

  });

});
