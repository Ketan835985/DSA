// reverse array with the help of recursion


// function reverseArray(data, start, end) {
//     console.log(data)
//     if (start <= end) {
//         let temp = data[start];
//         data[start] = data[end];
//         data[end] = temp;
//         reverseArray(data, start + 1, end - 1)
//     }

// }
let data = [78, 565, 86, 85, 12, 36]
// reverseArray(data, 0, data.length - 1);


// function maxProduct(a) {
//     let start = 0
//     let end = a.length - 1
//     function sort(a, start=0, end=a.length-1) {
//         // console.log(a)
//         if (start <= end) {
//             if (a[start] > a[end]) {
//                 let temp = a[start]
//                 a[start] = a[end]
//                 a[end] = temp
//                 sort(a, start++, end--)
//             }
//         }
//     }
//    sort(a,start,end)
//     return a
// }

// maxProduct(data)

// function sort(a, start = 0, end = a.length - 1) {
//     // console.log(a)
//         if (start <= end) {
//             let temp = a[start]
//             a[start] = a[end]
//             a[end] = temp
//             end--
//             start++
//             sort(a, start, end)
//         }
//     return a
// }
// console.log(sort(data))


// Array flatten method using recursion
// let arr2 = ["a",["x", "y"], ["c","d", ["f","g","e", ["i", "u", "y"]]]]


// function arrayFlat(arr){
//     let newArr = []
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             newArr = newArr.concat(arrayFlat(arr[i]))
//         }
//         else{
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(arrayFlat(arr2))