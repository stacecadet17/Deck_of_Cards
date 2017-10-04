var Deck = function Deck(){
  this.deck = [];
  this.reset();
  this.shuffle();
};

Deck.prototype.reset = function(){
  this.deck = [];

  var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
  var pips = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", 'queen', 'king'];

  for(var suit in suits){
    for(var pip in pips){
      this.deck.push(pips[pip] + 'of' + suits[suit]);
    }
  }
  return this;
}

Deck.prototype.shuffle = function(){
  var m = this.deck.length, t, i;

  while(m){
    i = Math.floor(Math.random() * m--);

    t = this.deck[m];
    this.deck[m] = this.deck[i];
    this.deck[i] = t;
  }
  return this;
};

Deck.prototype.deal = function(){
  return this.deck.pop();
}

var Player = function Player(name){
  this.name = name;
  this.hand = [];
}
Player.prototype.draw = function(deck){
  this.hand.push(deck.deal());
  return this;
}

Player.prototype.discard = function(i){
  return this.hand.pop();
}


var deck1 =  new Deck();
var deck2 = new Deck();

var player1 = new Player('stacey');
player1.draw(deck1).draw(deck2);
console.log(player1.hand);
