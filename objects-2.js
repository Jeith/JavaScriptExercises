var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black' 
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};

daughter.__proto__ = mom;
console.log(daughter.firstName + " " + daughter.lastName + " " + daughter.eyeColor + " " + daughter.hairColor);



class Person{
    constructor (name) {
        this.name = name; 
        this.friends = []; 
    } 
    addFriend(friend){
        this.friends.push(friend);
    }
    createGreeting(other){
        return 'Yo ' + other.name + '! from ' + this.name + '.';
    }
    greet(other){
        console.log(this.createGreeting(other));
    }
    lazyGreet(other){
        setTimeout(() => {
            console.log('Yo ' + other.name + '! from ' + this.name + '.');
        }, 2000);
    }
    createGreetingsForFriends(){
        var x = this.friends.map(function(element){
            return 'Yo ' + element.name + '! from ' + this.name + '.';
        });
        console.log(x);
    }
}
var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
alfie.createGreetingsForFriends();
alfie.createGreeting(anushka);
anushka.lazyGreet(alfie);
