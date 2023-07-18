/*
CallBack Function  ==  Any function that is passed as an argument to the another function so that it can be executed in that other function is called as a callback function..
*/


function sum (a, b){
    return a+b;
}


function twoSum(a, b){
    return sum (a, b) + sum (b, a);
}

console.log(twoSum(1, 2));


/* CallBack Hell = This is a disadvantage of using callbacks is callback hell. callback hell is essentially nested callbacks where each callback depends on the previous callback. callback hell affects the readability and performance of the code.
 */


