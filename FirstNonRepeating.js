/*Given an input stream A of n characters consisting only of lower case alphabets. While reading characters from the stream, you have to tell which character has appeared only once in the stream upto that point. If there are many characters that have appeared only once, you have to tell which one of them was the first one to appear. If there is no such character then append '#' to the answer.
 

Example 1:

Input: A = "aabc"
Output: "a#bb"
Explanation: For every character first non
repeating character is as follow-
"a" - first non-repeating character is 'a'
"aa" - no non-repeating character so '#'
"aab" - first non-repeating character is 'b'
"aabc" - first non-repeating character is 'b'
Example 2:

Input: A = "zz"
Output: "z#"
Explanation: For every character first non
repeating character is as follow-
"z" - first non-repeating character is 'z'
"zz" - no non-repeating character so '#'
 

Your Task:
You don't need to read or print anything. Your task is to complete the function FirstNonRepeating() which takes A as input parameter and returns a string after processing the input stream.
*/
function FirstNonRepeating(A) {
  const frequency = {};
  const queue = [];

  const result = [];
  for (let i = 0; i < A.length; i++) {
    const char = A[i];
    // Increment the frequency of the current character
    frequency[char] = (frequency[char] || 0) + 1;

    // Append the character to the queue if it's the first appearance
    if (frequency[char] === 1) {
      queue.push(char);
    }

    // Remove characters from the queue that are no longer non-repeating
    while (queue.length > 0 && frequency[queue[0]] > 1) {
      queue.shift();
    }

    // Append the first non-repeating character to the result list
    if (queue.length > 0) {
      result.push(queue[0]);
    } else {
      result.push("#");
    }
  }

  return result.join("");
}
