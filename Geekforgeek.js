// Write a program to find the transpose of a square matrix of size N*N. Transpose of a matrix is obtained by changing rows to columns and columns to rows.

// Example 1:

// Input:
// N = 4
// mat[][] = {{1, 1, 1, 1},
//            {2, 2, 2, 2}
//            {3, 3, 3, 3}
//            {4, 4, 4, 4}}
// Output: 
// {{1, 2, 3, 4},  
//  {1, 2, 3, 4}  
//  {1, 2, 3, 4}
//  {1, 2, 3, 4}} 
// let N = 1
// function transpose(N, arr) {
//     var gfg = new Array(N);
//     for (var i = 0; i < gfg.length; i++) {
//         gfg[i] = [];
//     }

//     for(let i = 0; i< arr.length; i++){
//         for(let j = 0; j< arr[i].length; j++){
//             gfg[j][i] = arr[i][j]
//         }
//     }
//     return gfg
// }

// console.log(transpose(4, [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]]))

/*
Given a matrix with n rows and m columns. Your task is to find the kth element which is obtained while traversing the matrix spirally. You need to complete the method findK which takes four arguments the first argument is the matrix A and the next two arguments will be n and m denoting the size of the matrix A and then the forth argument is an integer k. The function will return the kth element obtained while traversing the matrix spirally.
*/

// n = 4, m = 4, k = 10
// A[][] = {{1  2  3  4},
//          {5  6  7  8},
//          {9  10 11 12},
//          {13 14 15 16}}
// Output:
// 13




const spiralOrder = (matrix) => {
    const arr = [];
    if(matrix.length === 0) return arr;
    let rowBegin = 0;
    let rowEnd = matrix.length - 1;
    let columnBegin = 0;
    let columnEnd = matrix[0].length -1;
     
    while(rowBegin <= rowEnd && columnBegin <= columnEnd) {
       for(let i = columnBegin; i <= columnEnd; i++){
          arr.push(matrix[rowBegin][i]);
       }
       rowBegin++;
        
       for(let i = rowBegin; i <= rowEnd; i++){
           arr.push(matrix[i][columnEnd]);
       }
       columnEnd--;
        
       if(rowBegin <= rowEnd){
          for(let i = columnEnd; i >= columnBegin; i--){
             arr.push(matrix[rowEnd][i]);
          }      
       }
       rowEnd--;
        
       if(columnBegin <= columnEnd){
           for(let i = rowEnd; i>= rowBegin; i--){
              arr.push(matrix[i][columnBegin]);
           }          
       }
       columnBegin++;
    }
     return arr;
 };
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));


function findK(matrix, m, n, k){
    // Write your code here
    const arr = [];
    if(matrix.length === 0) return arr;
    let rowBegin = 0;
    let rowEnd = m-1;
    let columnBegin = 0;
    let columnEnd = n-1;
     
    while(rowBegin <= rowEnd && columnBegin <= columnEnd) {
       for(let i = columnBegin; i <= columnEnd; i++){
          arr.push(matrix[rowBegin][i]);
       }
       rowBegin++;
        
       for(let i = rowBegin; i <= rowEnd; i++){
           arr.push(matrix[i][columnEnd]);
       }
       columnEnd--;
        
       if(rowBegin <= rowEnd){
          for(let i = columnEnd; i >= columnBegin; i--){
             arr.push(matrix[rowEnd][i]);
          }      
       }
       rowEnd--;
        
       if(columnBegin <= columnEnd){
           for(let i = rowEnd; i>= rowBegin; i--){
              arr.push(matrix[i][columnBegin]);
           }          
       }
       columnBegin++;
    }
     return arr[k];
    
}
console.log(findK([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 4, 4, 10))