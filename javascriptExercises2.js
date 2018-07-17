var madlibStr = "";
function madlib(name, subject){
    var madlibStr = name + "'s favorite subject in school is " + subject + ".";
    return madlibStr;
}
console.log(madlib("keith", "art"));


function tipAmount(bill, service){
    if (service == "good") {
        return bill * .20;
    } else if (service == "fair") {
        return bill * .15;
    } else if (service == 'bad') {
        return bill * .10;
    } else {
        return "Invalid input";
    }
}
console.log(tipAmount(100, 'good'))
console.log(tipAmount(40, 'fair'))


theTip = 0;
function totalAmount(bill, service){
    if (service == "good") {
        theTip = bill * .20;
        return theTip + bill;
    } else if (service == "fair") {
        theTip = bill * .15;
        return theTip + bill;
    } else if (service == 'bad') {
        theTip = bill * .10;
        return theTip + bill;
    } else {
        return "Invalid input";
    }
}
console.log(totalAmount(100, 'good'));
console.log(totalAmount(40, 'fair'));


function printNumbers(start, end){
    for (var i = start; i <= end; i++){
        console.log(i);
    }
}
printNumbers(6,30);



function printSquare(num){
    var stars = '*****';
    for (var i = 0; i < num; i++){
        console.log(stars)
    }
}
printSquare(5);



var boxWidth = [];
var hollowWidth = [];
var boxHeight = [];
function printBox(width, height){
    for (var i = 0; i < width; i++){
        boxWidth.push("*");
        hollowWidth.push(" ");
    }
    console.log(boxWidth.join(''));
    hollowWidth.splice(2, 2);
    for (var i = 0; i < (height - 2); i++){
        boxHeight = '*' + (hollowWidth.join('')) + '*';
        console.log(boxHeight);
    }
    console.log(boxWidth.join(''));
}
printBox(6, 4);



var banner = ['*', '*', '*', '*'];
function printBanner(string){
    for (var j = 0; j < string.length; j++){
        banner.push('*');
    }
    console.log(banner.join(''));
    console.log("* " + string + " *");
    console.log(banner.join(''));
}
printBanner('Hello World');