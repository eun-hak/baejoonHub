const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);

const dp = new Array(num + 1).fill(0);

dp[1] = 1;

if (num >= 2) dp[2] = 3;

for (let i = 3; i < num + 1; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 2]) % 10007;
}

console.log(dp[num]);
