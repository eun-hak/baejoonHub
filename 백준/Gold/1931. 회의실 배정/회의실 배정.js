const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let answer= 0
const N = input[0]
const meetings = input.slice(1).map(line => {
  const [start, end] = line.split(' ').map(Number)
  return [start, end]
})
meetings.sort((a,b)=>{
  if(a[1] === b[1]) return a[0]-b[0]
  return a[1] - b[1]
})
let now_time = 0;
for(let i=0; i < meetings.length ; i ++ ){
   const [start, end] = meetings[i]
   if( start >= now_time){
     answer++
     now_time = end
   }
   }

console.log(answer)
