// Mentor 13:22
// Given an array (or string), the task is to reverse the array/string.
// Examples : 


// let arr = [1,2,3]
// // Output : arr[] = {3, 2, 1}

// // Input :  arr[] = {4, 5, 1, 2}
// // Output : arr[] = {2, 1, 5, 4}

// let arr1 = []
// let j=0
// for(let i =arr.length-1; i>=0; i--){
//     arr1[j]=arr[i]
//     j++
// }

// console.log(arr1)

// sort an array :merge sort
// let array = [5, 3, 4, 52, 6, 58, 48, 66, 78]
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] > array[j]) {
//             let temp = array[i]
//             array[i] = array[j]
//             array[j] = temp
//         }
//     }
// }
// console.log(array)

// 2D array traversing
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//     }
// }


let a = 0;
let N = 5
for (let i = 0; i < N; i++) {
    for (let j = N; j > i; j--) {
        a = a + i + j;
    }
}
