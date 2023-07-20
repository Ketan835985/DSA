// find longest subsequence length palindrome string

function longestPalindromeSubSquenceString(s) {
  const n = s.length;
  // Create a 2D DP table to store the length of the longest palindromic subsequence
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));

  // All substrings of length 1 are palindromic with length 1
  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  // Loop to consider all substrings of length 2 and above
  for (let subLen = 2; subLen <= n; subLen++) {
    for (let i = 0; i < n - subLen + 1; i++) {
      const j = i + subLen - 1;
      if (s[i] === s[j] && subLen === 2) {
        dp[i][j] = 2;
      } else if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  // The length of the longest palindromic subsequence will be stored in dp[0][n-1]
  return dp[0][n - 1];
}


console.log(longestPalindromeSubSquenceString('abba'));
