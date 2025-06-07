const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0])

const A = input[1].split(' ').map(Number).sort((a,b)=>a-b)
const B = input[2].split(' ').map(Number).sort((a,b)=>b-a)
let answer = 0

for(let i=0; i<N; i++){
   let b = B.shift()
   let a = A.shift()
   answer+= a*b

}
console.log(answer)