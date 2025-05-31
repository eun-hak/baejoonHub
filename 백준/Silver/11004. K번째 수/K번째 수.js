const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N ,K] = input[0].split(' ').map(Number)
const inputArr = input[1].split(' ').map(Number)
const sortedArr = inputArr.sort((a,b)=>a-b)

console.log(sortedArr[K-1])