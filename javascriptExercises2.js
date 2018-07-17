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



var newString = [];
function leetspeak(string){
    string = string.toUpperCase();
    for (var i = 0; i < string.length; i++){
        if (string[i] == "A"){
            newString.push('4');
        } else if (string[i] == "E") {
            newString.push('3');
        } else if (string[i] == "G") {
            newString.push('6');
        } else if (string[i] == "I") {
            newString.push('1');
        } else if (string[i] == "O") {
            newString.push('0');
        } else if (string[i] == "S") {
            newString.push('5');
        } else if (string[i] == "T") {
            newString.push('7');
        } else {
            newString.push(string[i]);
        }
    }
    return newString.join('');
}
leetspeak('leetspeak')



var newString = [];
function longVowels(string){
    string = string.toUpperCase();
    for (var i = 0; i < string.length; i++){
        if (string[i] === "A" && string[i + 1] === "A"){
            newString.push('AAAAA');
            i++;
        } else if (string[i] === "E" && string[i + 1] === "E") {
            newString.push('EEEEE');
            i++;
        } else if (string[i] === "U" && string[i + 1] === "U") {
            newString.push('UUUUU');
            i++
        } else if (string[i] === "I" && string[i + 1] === "I") {
            newString.push('IIIII');
            i++
        } else if (string[i] === "O" && string[i + 1] === "O") {
            newString.push('OOOOO');
            i++
        } else {
            newString.push(string[i]);
        }
    }
    return newString.join('');
}
longVowels('good man cheese')




oldArray = [6, 3, 1, -2, 7, -6, -10, 124, -3495];
newArray = [];
function positiveNumbers(){
    for (var i = 0; i < oldArray.length; i++){
        if (oldArray[i] > -1) {
            newArray.push(oldArray[i]);
        }
    }
    return newArray;
}
positiveNumbers()