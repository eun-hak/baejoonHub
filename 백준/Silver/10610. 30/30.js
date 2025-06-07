const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0].split("").map(Number);
N.sort((a, b) => b - a)
const sum = N.reduce((acc,cur)=> acc+cur)
if (N.includes(0) && sum%3===0){
  console.log(N.join(""))
}
else{
  console.log(-1)
}


