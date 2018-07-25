function Person(name, email, phone) { 
    this.name = name; 
    this.email = email; 
    this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
    console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};

var Sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
var Jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');
console.log(Jordan.greet(Sonny));
console.log(Sonny.greet(Jordan));
console.log(Sonny.email + " " + Sonny.phone);
console.log(Jordan.email + " " + Jordan.phone);

function Card(point, suit){
    this.point = point;
    this.suit = suit;
}

Card.prototype.getImageUrl = function(card){
    pointURL = ""
    switch(card[0]) {
        case 1: 
        pointURL = 'A';
        break;
    case 11:
        pointURL = 'J';
        break;
    case 12:
        pointURL = 'Q';
        break;
    case 13:
        pointURL = 'K';
        break;
    default:
        pointURL = card[0];
}
var suitURL = '';
switch(card[1]) {
    case 'hearts':
        suitURL = 'H';
        break;
    case 'diamonds':
        suitURL = 'D';
        break;
    case 'clubs':
        suitURL = 'C';
        break;
    case 'spades':
        suitURL = 'S';
}
return `cards/${pointURL}${suitURL}.jpg`;
};

function Hand() {
    this.cardsInHand = [];
}

Hand.prototype.addCard = function(card) {
    this.cardsInHand.push(card);
}

Hand.prototype.getPoints = function(){
    var self = this;
    var points = self.cardsInHand.map(function(e) {
        return e.point;
    });
    points.reduce(function(a, b) {
        return a + b;
    }, 0);
}

function Deck() {
    this.deck = [];
}

Deck.prototype.draw = function() {
    let cardIndex = Math.floor(Math.random() * deck.length);
    var randCard = deck[cardIndex];
    randCard.splice(cardIndex, 1);
    return randCard;
}

Deck.prototype.shuffle = function() {
    for (var i = this.deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
    }
    return this.deck;
}

Deck.prototype.numCardsLeft = function() {
    return this.deck.length;
}