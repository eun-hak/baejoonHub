const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N =Number(input[0])


const arr = input[1].split(' ').map(Number)
let answer = 0;




function getPermutations(arr){
  const result = []
  const visited = new Array(arr.length).fill(false)

  const dfs =(path) =>{
    if(path.length ===arr.length){
      result.push([...path])
      return
    }
    for(let i=0; i<arr.length; i++){
      if(visited[i]) continue
      visited[i] = true
      path.push(arr[i])
      dfs(path)
      path.pop()
      visited[i] = false
    }
  }
  dfs([])
  return result
}



const calculateArr = (arr) =>{
    let sum =0
    for(let i =1; i<N ; i++){
      sum += Math.abs(arr[i-1]-arr[i])
    }

  return sum
}


const perms = getPermutations(arr);
for (let p of perms) {
  const result = calculateArr(p);
  answer = Math.max(answer, result);
}

console.log(answer)