const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const [n, m] = input[0].split(" ").map(Number);
const visited = new Array(n + 1).fill(false);
const result = [];
const output = [];

function dfs(depth) {
  if (depth === m) {
    output.push(result.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      dfs(depth + 1);
      result.pop();
      visited[i] = false;
    }
  }
}

dfs(0);

for (let i of output) {
  console.log(i);
}
