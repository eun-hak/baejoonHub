const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [K, N] = input[0].split(" ").map(Number);

const arr = [];

for (i = 1; i <= K; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let right = arr[arr.length - 1];
let left = 1;
let mid = right;
let answer = 0;

while (left <= right) {
  let ans = 0;
  mid = Math.floor((left + right) / 2);

  for (i of arr) {
    ans += Math.floor(i / mid);
  }

  if (ans >= N) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
