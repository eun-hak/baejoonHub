const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const arr = input[1].split(" ").map(Number);
arr.unshift(0)


const dp = new Array(n + 1).fill(0);

dp[1] = arr[1]

for (let i = 2; i <= n; i++) {
  for (let j =0 ; j<i ; j++){
    if(arr[i]>arr[j]){
      dp[i] = Math.max(dp[i], dp[j] + arr[i]);
    }
  }
}
console.log(Math.max(...dp));