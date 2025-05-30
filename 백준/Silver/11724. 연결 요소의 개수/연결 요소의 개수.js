const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(Number);

const inputArr = input.slice(1).map((i) => {
  const [start, end] = i.split(" ").map(Number);
  return [start, end];
});
const graph = Array.from({ length: N + 1 }, () => []);

for (let i of inputArr) {
  const [start, end] = i;
  graph[start].push(end);
  graph[end].push(start);
}

const visited = new Array(N + 1).fill(false);
let ans = 0;

function DFS(start) {
  if (!visited[start]) {
    visited[start] = true;
    for (let i of graph[start]) {
      DFS(i);
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    DFS(i);
    ans++;
  }
}

console.log(ans);
