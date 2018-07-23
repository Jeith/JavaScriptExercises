
var myArray = [4, 2, -5, 6, -1];
var newArray = myArray.filter(function(element){
    return element > 0;
});
console.log(newArray);


var badArray = [2, 3, 6, 4, 7, 9];
var evenNums = badArray.filter(function(element){
    return element % 2 === 0;
});
console.log(evenNums);


var numToBeSquared = [1, 2, 3, 4];
var squaredNums = numToBeSquared.map(function(element){
    return element * element;
});
console.log(squaredNums);


var cities = [ { name: 'Los Angeles', temperature: 60.0}, { name: 'Atlanta', temperature: 52.0 }, { name: 'Detroit', temperature: 48.0 }, { name: 'New York', temperature: 80.0 } ];
var coolCities = cities.filter(function(element){
    if (element.temperature < 70){
        return element;
    }
});
console.log(coolCities);


cities.forEach(function(element){
    console.log(element.name);
})


var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
people.forEach(function(element){
    console.log("Good job, " + element + "!");
});


people.sort(function(a, b){
    return a <= b;
})


var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
people.sort(function(a, b){
    return b.length - a.length;
});
console.log(people);


var arr = [ [1, 3, 4], [2, 4, 6, 8], [3, 6] ];

var sumArray = arr1.map(function(element){
    var sum = 0;
    for(var i = 0; i < element.length; i++){
        sum = sum + element[i]
    }
    return sum
})


function call3Times(fun) { 
    fun = function fun(){
        console.log("Hello, world!");
    }
    fun(); 
    fun(); 
    fun(); 
}
call3Times();


var fun = function fun(){
    console.log("Hello, world!");
}
function callNTimes(num, fun){
    for (var i = 0; i < num; i++){
        fun();
    }
}
callNTimes(4, fun);


var nums = [1, 2, 3];
var sum = nums.reduce((total, amount) => total + amount); 
console.log(sum);


var acronym = ['very', 'important', 'person'];
var splitarr = [];
var joinarr = [];

function acro() {
    for(word in acronym) {
        splitword = acronym[word]
        splitLetter = splitword.split('') 
        joinarr.push(splitLetter[0])
        
    }
    console.log(joinarr.join(''))
}
console.log(acro());

