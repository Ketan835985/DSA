// function swap(arr, low, high) {
//     arr[low] = arr[low] + arr[high]
//     arr[high] = arr[low] - arr[high]
//     arr[low] = arr[low] - arr[high]
//     return arr
// }
// function partition(arr, low, high) {
//     // Your code here
//     let pivot = arr[high]
//     let i = low - 1
//     for (let j = low; j < high - 1; j++) {
//         if (arr[j] < pivot) {
//             i++
//             swap(arr, i, j)
//         }
//     }
//     swap(arr, i + 1, high)
//     return i + 1;
// }

// function quickSort(arr, low, high) {
//     //code here
//     if (low < high) {
//         let pi = partition(arr, low, high)
//         quickSort(arr, low, pi - 1)
//         quickSort(arr, pi + 1, high)
//     }
//     return arr
// }
// let arr = [8,16,22,36,85,75]
// console.log(quickSort(arr, 0, arr.length - 1))


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[arr.length - 1];
  const smaller = [];
  const greater = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      smaller.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  
  return [...quickSort(smaller), pivot, ...quickSort(greater)];
}

// Example usage
const myArray = [7, 2, 1, 6, 8, 5, 3, 4];
const sortedArray = quickSort(myArray);
console.log(sortedArray);
