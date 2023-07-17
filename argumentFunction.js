// this is called an argument object function



// function sum (){
//     let result = 0;
//     for(let i =0; i<arguments.length; i++){
//         result += arguments[i]
//     }
//     return result
// }

// console.log(sum(10,25,35))


// we can apply array method on argument object



// pros and cons
/*
pros works with every environment
break, continue use for control flow of program

*/

/*
cons - not work with every environment
imperative
when we face one by one error
*/


// const d = new Date();
// console.log(d.toLocaleDateString());
// console.log(d.getTime())

// const d1 = new Date();
// const d2 = new Date();

// console.log(d1===d2); // false
// console.log(d1.getDate()==d2.getDate());

// const multiLineString = "hello\
// world";
// console.log(multiLineString);



// function are already an Object







/*
How to find length of parameter how many parameter in the function

*/

// function lengthOfParameter(parameter, a, b,c, f,t,r){

// }
// console.log(lengthOfParameter.length)
// let arr = [5,3,6,5]
// console.log((arr.map).length)


// Generate otp 

// const otp = Math.round((Math.random()*9000)+1000)

// console.log(otp)


// let regex = /pattern/i;// i include for case sensitive remove pattern

/* i ===  case sensitive remove pattern
g = global match rather then first match
m == perform multiple line match
*/

// console.log(("Pattern").search(regex));

// global variable
// const regex= /one/g
// console.log("Learn one By one".match(regex)) //[ 'one', 'one' ]


//exec

// const regex = /you/
// console.log(regex.exec('how are you youBuddy'))//[ 'you', index: 8, input: 'how are you youBuddy', groups: undefined ]





// let img = new Image();
// img.onload = function(){
//     console.log("Image Loaded" , this.width, this.height);
// }
// img.src = "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";