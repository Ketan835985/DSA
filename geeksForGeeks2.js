/* Given an array arr of N integers, the task is to check whether the frequency of the elements in the array is unique or not. Or in other words, there are no two distinct numbers in array with equal frequency. If all the frequency is unique then return true, else return false.

Example 1:

Input:
N = 5
arr = [1, 1, 2, 5, 5]
Output:
false
Explanation:
The array contains 2 (1’s), 1 (2’s) and 2 (5’s), since the number of frequency of 1 and 5 are the same i.e. 2 times. Therefore, this array does not satisfy the condition.
Example 2:

Input:
N = 10
arr = [2, 2, 5, 10, 1, 2, 10, 5, 10, 2]
Output:
true
Explanation:
Number of 1’s -> 1
Number of 2’s -> 4
Number of 5’s -> 2
Number of 10’s -> 3.
Since, the number of occurrences of elements present in the array is unique. Therefore, this array satisfy the condition.
Your task:
You don't need to read input or print anything. Your task is to complete the function isFrequencyUnique() which take integer N and array arr of size N as arguments, and returns a boolean.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)*/

function unique(arr, n) {
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  let val = Object.values(obj);
  let obj2 = {};
  for (let j = 0; j < val.length; j++) {
      if (obj2[val[j]]) {
          obj2[val[j]]++;
        } else {
            obj2[val[j]] = 1;
        }
    }
    let val2 = Object.keys(obj2);
    console.log(val, obj, val2, obj2);
    if (val2.length != val.length) {
        return false;
    } else {
    return true;
  }
}

//   console.log(obj);
// let n = 10;
// let arr = [2, 2, 5, 10, 1, 2, 10, 5, 10, 2];
let n = 5;
let arr = [1, 1, 2, 5, 5];
console.log(unique(arr, n));
