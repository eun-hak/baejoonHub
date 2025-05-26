const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, C] = input[0].split(' ').map(Number)
const alphbet = input[1].split(' ').sort()



const vowels = new Set(['a', 'e', 'i','o','u'])

const result= []
const stack = []


function dfs(depth,start){
  if(depth === L){
    const vowelcounts = stack.filter((l)=> vowels.has(l)).length
    const constantscounts = L-vowelcounts
    if( vowelcounts>=1 && constantscounts>=2){
      result.push(stack.join(''))
    }
    return
  }
  for (let i=start; i<C ; i++){
    stack.push(alphbet[i])
    dfs(depth+1 , i +1)
    stack.pop()
  }
  
}

dfs(0,0)
for(let i of result){
  console.log(i)
}