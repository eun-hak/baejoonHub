const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);

const InputArr = input.slice(1).map((i) => {
  const [a, b] = i.split(' ').map(Number);
  return [a, b];
});

let index = 0;

for (let i = 0; i < n; i++) {
  const [V, E] = InputArr[index];
  const graph = Array.from({ length: V + 1 }, () => []);
  const visited = new Array(V + 1).fill(-1);

  // 간선은 index + 1 ~ index + E까지
  for (let j = index + 1; j <= index + E; j++) {
    const [a, b] = InputArr[j];
    graph[a].push(b);
    graph[b].push(a);
  }

  function DFS(node, color) {
    visited[node] = color;
    for (let next of graph[node]) {
      if (visited[next] === -1) {
        if (!DFS(next, 1 - color)) return false;
      } else if (visited[next] === color) {
        return false;
      }
    }
    return true;
  }

  let isBipartite = true;
  for (let v = 1; v <= V; v++) {
    if (visited[v] === -1) {
      if (!DFS(v, 0)) {
        isBipartite = false;
        break;
      }
    }
  }

  console.log(isBipartite ? 'YES' : 'NO');

  // 다음 테스트케이스로 index 갱신
  index += (E + 1); // 정점/간선 정보 + 간선 E개
}

