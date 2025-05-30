const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const ans = input[0]
  .split("")
  .map((item, i) =>
    parseInt(item, 8)
      .toString(2)
      .padStart(i === 0 ? 1 : 3, "0"),
  )
  .join("");

console.log(ans);
