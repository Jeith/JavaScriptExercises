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

Card.prototype.getImageUrl = function(url){
    return (this.url);
}
console.log(Card.getImageUrl());

function Hand(){
    
}

myHand.prototype.getPoints = function(){
    
}