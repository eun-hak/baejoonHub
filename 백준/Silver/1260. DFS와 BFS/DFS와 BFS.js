const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [len, line, start] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((i) => i.split(" ").map(Number));

// 인접 리스트 초기화
const graph = Array.from({ length: len + 1 }, () => []);

for (let [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a);
}

// 정점 번호 작은 것부터 방문하도록 정렬
for (let i = 1; i <= len; i++) {
  graph[i].sort((a, b) => a - b);
}

// DFS
const visited = new Array(len + 1).fill(false);
const dfs_answer = [];

function dfs(v) {
  visited[v] = true;
  dfs_answer.push(v);

  for (let i of graph[v]) {
    if (!visited[i]) dfs(i);
  }
}

// BFS
const visited2 = new Array(len + 1).fill(false);
const bfs_answer = [];

function bfs(v) {
  const queue = [v];
  visited2[v] = true;

  while (queue.length) {
    const node = queue.shift();
    bfs_answer.push(node);

    for (let next of graph[node]) {
      if (!visited2[next]) {
        visited2[next] = true;
        queue.push(next);
      }
    }
  }
}

// 실행
dfs(start);
bfs(start);

console.log(dfs_answer.join(" "));
console.log(bfs_answer.join(" "));