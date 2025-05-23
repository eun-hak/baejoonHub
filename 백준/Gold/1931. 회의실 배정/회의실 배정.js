const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const meetings = input.slice(1).map((item) => {
  const [start, end] = item.split(" ").map(Number);
  return [start, end];
});

meetings.sort((a, b) => {
  if (a[1] == b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = 0;
let now_num = 0;
for (i = 0; i < meetings.length; i++) {
  const [start, end] = meetings[i];
  if (start >= now_num) {
    answer++;
    now_num = end;
  }
}

console.log(answer);
