const uniqueElementArr =(arr) => [...new Set(arr)]

console.log(uniqueElementArr([1,2,3,4,1,5,2,3,6,1,4,22,5,3,5,3,5,6,4,7,3,5,3,]))



//=============== insert Number in particular position =================

// const insertNumber = (arr,num,pos) => {
//     let newArr = [...arr]
//     newArr.splice(pos,0,num)
//     return newArr
// }

// const insertNumber = (arr,index, ...num) => {
//     return [...arr.slice(0,index),...num, ...arr.slice(index)]
// }


// console.log(insertNumber([1,2,3,4,5], 3,12,15,18));