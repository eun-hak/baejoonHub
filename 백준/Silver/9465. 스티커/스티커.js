const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const Input = Number(input[0]);

let j = 1;

for (let i = 0; i < Input; i++) {
  const Score = [];
  let num = Number(input[j++]);
  const inputArr = input[j++].split(" ").map(Number);
  Score.push([...inputArr]);
  const inputArr2 = input[j++].split(" ").map(Number);
  Score.push([...inputArr2]);
  // console.log(Score);
  const dp = Array.from({ length: 2 }, () => new Array(num).fill(0));
  // console.log(dp);
  dp[0][0] = Score[0][0];
  dp[1][0] = Score[1][0];
  dp[0][1] = Score[0][1] + dp[1][0];
  dp[1][1] = Score[1][1] + dp[0][0];
  for (let j = 2; j < num; j++) {
    dp[0][j] = Math.max(Score[0][j] + dp[1][j - 1], Score[0][j] + dp[1][j - 2]);

    dp[1][j] = Math.max(Score[1][j] + dp[0][j - 1], Score[1][j] + dp[0][j - 2]);
  }

  console.log(Math.max(dp[0][num-1], dp[1][num-1]));
}
