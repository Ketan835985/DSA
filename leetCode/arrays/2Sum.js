/*

let arr = [2,3,5,4,8,6,9,4] , target = 9
 */ 

// function twoSum(arr, target) {
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]!== undefined) {
//             obj[arr[i]]=1
//         } else {
//             obj[arr[i]]++
//         }
//     }
//     let ans = []
//     for(let i = 0; i<arr.length; i++) {
//         let curr =  target - arr[i]
//         while(obj.hasOwnProperty(curr) && obj[curr]>0) {
//             ans.push([arr[i],curr])
//             obj[curr]--
//         }
//     }
//     return ans
// }

console.log(twoSum([2,3,5,4,8,6,9,4], 9))