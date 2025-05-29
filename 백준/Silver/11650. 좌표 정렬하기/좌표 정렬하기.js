const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const arr = input.slice(1).map((i) => {
  const [a, b] = i.split(" ");
  return [Number(a), Number(b)];
});

const sortarr = arr.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
});

for (let i of sortarr) {
  const [a, b] = i;
  console.log(a, b);
}
