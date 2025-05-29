const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let j = 0
const arr = input.slice(1).map((i) => {
  
  const [a, b] = i.split(" ")
  
  return [Number(a), b , j++];
});


const sortArr = arr.sort((a,b)=>{
  if(a[0] !== b[0]){
   return a[0] -b[0]
  }
  return a[2]-b[2]
})

for (let i of sortArr){
  const [a,b] = i
  console.log(a, b)
}

