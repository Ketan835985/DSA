// what is recursion
// Recursion is the number of children that recursively call a function.


// function factorial(n){
//     if(n ==0){
//         return 1;
//     }
//     return n*factorial(n-1);
// }
// console.log(factorial(5))


// function fibonacci(n){
//     if(n==0) return 0
//     if(n == 1 || n == 2){
//         return 1;
//     }

//     return fibonacci(n-1)+fibonacci(n-2);
// }
// console.log(fibonacci(5))


// function printNum(n){
//     // console.log(n); ///head
//     if(n>0){
//         printNum(n-1);
//     }
//     console.log(n);  //tail
// }
// console.log("hello" ,printNum(5));


/* An indirect recursive function is a function that calls another function, which in turn calls the
original function. In the provided code example, the `buyApple` function calls the `spendMoney`
function, which in turn calls the `buyApple` function again. This creates a loop of function
calls that continues until a certain condition is met (in this case, until the input argument `x`
is less than or equal to 0). This type of recursion can be useful in certain situations, but it
can also lead to infinite loops if not implemented correctly. */

//indirect recursive function  --- indirect function is the function that calls other function and the other function class called function is the indirect function


// let money = 100
// let totalApple = 0

// function buyApple(x) {
//     if(x>0){
//         totalApple++
//         console.log("left money", x-10, "buyApple", totalApple)
//         spendMoney(x)
//     }
//     else{
//         console.log(totalApple)
//     }
// }
// function spendMoney(x) {
//     buyApple(x-10)
// }
// buyApple(money)



// Head And Tail recursion 


// function Tail(){
//     console.log("tail");
// }
// function stomach(){
//     Tail()
// }

// function neck(){
//     stomach()
// }

// function head(){
//     neck()
// }

// head()






// // reverse value using recursion

// /**
//  * The function reverses a given number using recursion in JavaScript.
//  * @param n - The input number that needs to be reversed.
//  * @returns The function `reverseNum` is returning the reversed number of the input argument `n`. In
//  * this case, since `n` is 100, the function will return 1.
//  */
// let sum = 0
// function reverseNum(n) {
//     if (n == 0) return 0
//     sum = sum * 10 + (n % 10);
//     n = Math.floor(n / 10);
//     reverseNum(n);
//     return sum
// }
// console.log(reverseNum(100))



// function powerOfTwo (n){
//     if(n==1) return true;
//     if(n%2!=0 && n==0) return false; 
//     return powerOfTwo(Math.floor(n/2));
// }

// console.log(powerOfTwo(6))


/*fibonacci series without recursion and recursion */

// function fibonacci(n){
//     if(n==0) return 0;
//     if(n==1) return 1;
//     return fibonacci(n-1)+fibonacci(n-2);
// }
// console.log(fibonacci(5))

// function fibonacci(n){  
//     if(n==0) return 0;
//     if(n==1) return 1;
//     let first = 0;
//     let second = 1;
//     let sum = 0;
//     for(let i=2;i<=n;i++){
//         sum = first + second;
//         first = second;
//         second = sum;
//     }
//     return sum;
// }
// console.log(fibonacci(2))



/// flat array method -- using recursion


// function flattenArr (arr){
//     let newArr = [];
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             newArr = newArr.concat(flattenArr(arr[i]));
//         }
//         else{
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }




// console.log(flattenArr([1,2,[3,4,[5,6]]]))