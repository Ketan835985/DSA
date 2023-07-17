// let arr = [95, 56, 78, 52, 45, 75, 8, 68, 94, 256, 85, 63, 25]

// //=== sort the arr ============

// function merge(a, b) {
//     let arr = [];
//     let i = 0;
//     let j = 0
//     while (i < a.length && j < b.length) {
//         if (a[i] > a[j]) {
//             arr.push(a[i]);
//             i++;
//         }
//         else {
//             arr.push(b[j]);
//             j++;
//         }
//     }
//     while (i < a.length) {
//         arr.push(a[i]);
//         i++;
//     }
//     while (j < b.length) {
//         arr.push(b[j]);
//         j++;
//     }
//     return arr;
// }
// function mergeSort(arr) {
//     if (arr.length == 1) {
//         return arr
//     }
//     let mid = Math.floor(arr.length / 2)
//     let low = mergeSort(arr.slice(0, mid))
//     let high = mergeSort(arr.slice(mid))
//     return merge(low, high)
// }

// // let arr2 = mergeSort(arr)

// function binarySearch(arr, k) {
//     let l = 0
//     let h = arr.length - 1
//     while (l < h) {
//         let mid = l + Math.floor((h - l) / 2)
//         if (arr[mid] === k) {
//             return mid
//         }
//         else if (arr[mid] > k) {
//             h = mid - 1
//         }
//         else {
//             l = mid + 1
//         }
//     }
//     return -1
// }










// //====================== recursive binary search ==================
// function recursiveBinarySearch(arr, k,l, h){
//     if (l>h) return false
//     let mid = Math.floor(h-l / 2)
//     if (arr[mid] === k) {
//         return true
//     }
//     else if (arr[mid] > k) {
//         return recursiveBinarySearch(arr, k, mid-1, h)
//     }
//     else {
//         return recursiveBinarySearch(arr, k, l, mid+1)
//     }
// }
// let arr2 = [12,36,45,56,78,85,86,96]
// // console.log(recursiveBinarySearch(arr2, 56))
// let l = 0
// let h = arr2.length - 1
// let k = 56
// if(recursiveBinarySearch(arr2,k,l,h)){
//     console.log("found")
// }
// else{
//     console.log("not found")
// }