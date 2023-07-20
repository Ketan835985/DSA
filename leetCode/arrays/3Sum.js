/*Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter. */



// function threeSum(arr){
//     arr.sort((a,b)=>a-b)

//     let result = []
//     for(let i=0;i<arr.length-1;i++){
//         let low = i+1
//         let high = arr.length-1
//         while(low<high){
//             let sum = arr[i]+arr[low]+arr[high]
//             if(sum<0){
//                 low++
//             }else if(sum>0){
//                 high--
//             }else{
//                 result.push([arr[i],arr[low],arr[high]])
//                 while(low<high && arr[low]==arr[low+1]){
//                     low++
//                 }
//                 while(low<high && arr[high]==arr[high-1]){
//                     high--
//                 }
//                 low++
//                 high--
//             }
//         }
//         while(arr[i+1]==arr[i])i++
//     }
//     return result
// }

// console.log(threeSum([-1,0,1,2,-1,-4]))