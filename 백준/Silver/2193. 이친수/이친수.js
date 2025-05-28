const fs = require('fs');
const num = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = new Array(num + 1).fill(0n); // BigInt 0

dp[1] = 1n;
if (num >= 2) dp[2] = 1n;

for (let i = 3; i <= num; i++) {
  dp[i] = dp[i - 1] + dp[i - 2]; // BigInt + BigInt
}

console.log(dp[num].toString()); // BigInt 출력은 toString()