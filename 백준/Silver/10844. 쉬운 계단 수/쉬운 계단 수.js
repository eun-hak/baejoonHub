const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const MOD = 1_000_000_000;
const num = Number(input[0])


const dp = Array.from({ length: num+1 }, () => new Array(10).fill(0));


for(let i=1; i<10; i++){
  dp[1][i] = 1
}


for (let i = 2; i <= num; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j - 1 >= 0) dp[i][j] += dp[i - 1][j - 1];
    if (j + 1 <= 9) dp[i][j] += dp[i - 1][j + 1];
    dp[i][j] %= MOD;
  }
}

console.log(dp[num].reduce((acc, cur) => acc + cur, 0) % MOD);

