const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');



const [N, M] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let sum = 0;
let count = 0;

while (right <= N) {
  if (sum < M) {
    sum += A[right];
    right++;
  } else if (sum > M) {
    sum -= A[left];
    left++;
  } else {
    count++;
    sum -= A[left];
    left++;
  }
}

console.log(count);
