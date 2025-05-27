const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


let wrong = 0
const num = Number(input[0])
const arr = input.slice(1)
let answer = arr.length
let duplicate = []
for(let i of arr){
  duplicate = []
  for(let j=0; j<i.length; j++){
    if(!duplicate.includes(i[j])){
      duplicate.push(i[j])
    }
    else{
      if(i[j] !==i[j-1]){
        wrong+=1
        break
      }
    }
  }
 
}

console.log(answer-wrong)