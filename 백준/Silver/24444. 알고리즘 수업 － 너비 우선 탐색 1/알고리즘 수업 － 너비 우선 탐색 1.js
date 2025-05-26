const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const [node, line, start] = input[0].split(" ").map(Number);
const inputArr = input.slice(1).map((i) => {
  const [first, end] = i.split(" ").map(Number);
  return [first, end];
});
const graph = Array.from({ length: node + 1 }, () => Array(0).fill(0));
for (let i = 0; i < inputArr.length; i++) {
  graph[inputArr[i][0]].push(inputArr[i][1]);
  graph[inputArr[i][1]].push(inputArr[i][0]);
  
}
for (let i = 1; i <= node; i++) {
  graph[i].sort((a, b) => a - b);
}

visited = new Array(node+1).fill(0)
let count = 1;

const bfs_answer = []
function bfs(start){
  const queue = [start]
  visited[start] = count++
  while(queue.length>0){
    const node = queue.shift()
      for(let next of graph[node]){
        if(visited[next] ===0){
          visited[next] = count++
          queue.push(next)
        }
      }
  }
}


bfs(start)

for(let i =1; i<visited.length; i++){

  console.log(visited[i])
}

