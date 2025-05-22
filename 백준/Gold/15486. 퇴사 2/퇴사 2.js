const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);

const N = Number(input[0]);
const T = [];
const P = [];
const dp = new Array(N + 2).fill(0);

for (let i = 1; i <= N; i++) {
  const [ti, pi] = input[i].split(' ').map(Number);
  T[i] = ti;
  P[i] = pi;
}

for (let i = N; i >= 1; i--) {
  if (i + T[i] <= N + 1) {
    dp[i] = Math.max(dp[i + 1], dp[i + T[i]] + P[i]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[1]);
