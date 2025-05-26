const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(" ");
const NumArr = input[1].split(" ").map(Number);
const Arr = input.slice(2).map((i) => {
  const [a, b] = i.split(" ").map(Number);
  return [a, b];
});
NumArr.unshift(0);


const prefixSum = new Array(N+1).fill(0)

for(let i =1 ; i<=N ; i++){
  prefixSum[i] = prefixSum[i-1] + NumArr[i]
}


const output = [];

for (let [start, end] of Arr) {
  output.push(prefixSum[end] - prefixSum[start - 1]);
}
console.log(output.join('\n'));