const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 그래프 만드는 함수
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
///



//dfs
const answer = [];
const visited = new Array(node + 1).fill(false);

function dfs(visited, node) {
  if (!visited[node]) {
    answer.push(node);
    visited[node] = true;
    for (let i of graph[node]) {
      dfs(visited, i);
    }
  }
}

dfs(visited, start);


//dfs 후 추가 공정 처리

const visitOrder = new Array(node + 1).fill(0);

for (let i = 0; i < answer.length; i++) {
  const value = answer[i];
  visitOrder[value] = i + 1;
}


for (let i = 1; i <= node; i++) {
  console.log(visitOrder[i]);
}