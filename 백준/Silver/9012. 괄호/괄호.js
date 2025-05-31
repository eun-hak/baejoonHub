const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  const stack = [];
  let err = 0;
  const arr = input[i].split("");
  for (let j of arr) {
    if (j === "(") {
      stack.push(j);
    }
    if (j === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        err++;
        break;
      }
    }
  }
  if (stack.length > 0 || err > 0) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
