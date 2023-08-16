//Given a number N. The task is to find the Nth catalan number.
/*The first few Catalan numbers for N = 0, 1, 2, 3, … are 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, …

Catalan Number for N is equal to the number of expressions containing N pairs of paranthesis that are correct matched, i.e., for each of the N '(' there exist N ')' on there right and vice versa.

Since answer can be huge return answer modulo 1e9 + 7.

Note: Positions start from 0 as shown above.

    Example 1:

Input:
N = 5
Output: 42
Example 2:

Input:
N = 4
Output: 14
Your Task:
Complete findCatalan() function that takes n as an argument and returns the Nth Catalan number.The output is printed by the driver code.

Expected Time Complexity: O(N ^ 2).
Expected Auxiliary Space: O(N).

    Constraints:
1 <= N <= 103
*/


// function catalanNumber(n) {
//     if(n==0) return 1;
//     let up = 1
//     for (var i=1; i<=2*n; i++){
//         up *= i
//     }
//     let down = 1
//     for(let i=1; i<=n ; i++){ 
//         down *= i
//     }

//     let result = Math.round(up / ((down * (n+1))*down))

//     return result
// }

// console.log(catalanNumber(15))

// console.log(typeof [9, 4, 1, 8, 7, 9, 7, 8, 3, 2, 2].join(''))