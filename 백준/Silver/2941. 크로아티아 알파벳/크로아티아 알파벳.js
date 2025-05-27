const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
const stringarr = input[0]
const len = stringarr.length
let answer =0
for (let i of a){
  let num = 0
  num = stringarr.split(i).length-1
  answer += num
}


console.log(len- answer)
