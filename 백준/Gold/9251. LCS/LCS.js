const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\r?\n/);



const [A, B] = input.map(str => str.split(''));

const dp = Array.from({ length: A.length + 1 }, () =>
  Array(B.length + 1).fill(0)
);

for (let i = 1; i <= A.length; i++) {
  for (let j = 1; j <= B.length; j++) {
    if (A[i - 1] === B[j - 1]) {
      // 같은 문자면, 이전 값에서 +1
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      // 다르면, 위 or 왼쪽 중 더 큰 값
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
}


console.log(dp[A.length][B.length])