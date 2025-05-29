const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0])

const arr = input[1].split(' ').map(Number)
const dp1 = new Array(n).fill(1)
const dp2 = new Array(n).fill(1)
dp1[0] = 1
dp2[n-1] = 1

for(let i=1; i<n; i++){
  for(let j=0; j<i; j++){
    if(arr[i] > arr[j]){
     dp1[i] = Math.max(dp1[i], dp1[j]+1)
    }
  }
}
for(let i=n-2; i>=0; i--){
  for(let j=n-1; j>i; j--){
    if(arr[i] > arr[j]){
     dp2[i] = Math.max(dp2[i], dp2[j]+1)
    }
  }
}
const answer = []
for(let i = 0 ; i<n ; i++){
   let a= dp1[i] + dp2[i] -1
    answer.push(a)
}


if(Math.max(...answer) ===0){
  console.log(1)
}
else{
  console.log(Math.max(...answer))
}

