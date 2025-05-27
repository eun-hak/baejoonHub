const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0])
const dp = new Array(num+1).fill(0)

dp[1] = 0


for(let i=2; i<=num; i++){
  dp[i] = dp[i-1]+1
  if(i%2 ==0) dp[i] = Math.min(dp[i/2]+1, dp[i])
  if(i%3==0) dp[i] = Math.min(dp[i/3]+1, dp[i])
}

console.log(dp[num])