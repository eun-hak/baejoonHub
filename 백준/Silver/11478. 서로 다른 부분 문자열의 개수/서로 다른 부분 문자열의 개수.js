const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0]
const setArr = new Set();
for (let i = 0; i < arr.length; i++) {
  for (let j = i+1; j <= arr.length; j++) {
      setArr.add(arr.slice(i,j))
  }
}
console.log(setArr.size);

