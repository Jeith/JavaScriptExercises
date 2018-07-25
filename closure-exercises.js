function counter(){
    var count = 0;
    var reallyCount = function(){
        count++;
        return count;
    }
    return reallyCount;
}
var count1 = counter();
var count2 = counter();
count1();
count1();
count2();
count1();

function counter(num){
    var count = num;
    var reallyCount = function(){
        count++;
        return count;
    }
    return reallyCount;
}
var count1 = counter(4);
count1();


class Counter{
    constructor (num) {
        this.num = num; 
    } 
    increment(){
        return this.num += 1;
        
    }
    decrement(){
        return this.num -= 1;
    }
}
var count1 = new Counter(4);
count1.increment();
count1.decrement();
count1.decrement();