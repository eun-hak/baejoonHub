const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const numbers = input.slice(1).map(Number);

// 1, 0, 양수, 음수 나눠서 처리
const ones = numbers.filter(n => n === 1).length;
const zeros = numbers.filter(n => n === 0).length;
const positives = numbers.filter(n => n > 1).sort((a, b) => b - a); // 큰 수부터 곱해야 유리
const negatives = numbers.filter(n => n < 0).sort((a, b) => a - b); // 작은 수부터 곱해야 양수 커짐

let answer = 0;

// 양수 묶기
let now_num = 0;
for (let i = 0; i < positives.length; i++) {
  if (now_num === 0) {
    now_num = positives[i];
  } else {
    answer += now_num * positives[i];
    now_num = 0;
  }
}
if (now_num !== 0) answer += now_num; // 남은 양수 처리

// 음수 묶기
now_num = 0;
for (let i = 0; i < negatives.length; i++) {
  if (now_num === 0) {
    now_num = negatives[i];
  } else {
    answer += now_num * negatives[i];
    now_num = 0;
  }
}
if (now_num !== 0) {
  if (zeros > 0) {
    // 0이 있으면 음수 하나 버림
  } else {
    answer += now_num; // 0이 없으면 그냥 더하기
  }
}

// 1은 무조건 더함
answer += ones;

console.log(answer);