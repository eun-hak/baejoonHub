const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [M, N] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= N; i++) {
  let line = input[i].split(" ").map(Number);
  graph.push(line);
}

const visited = Array.from({ length: N }, () => new Array(M).fill(-1));
const queue = [];
for (let i = 0; i < graph.length; i++) {
  for (let j = 0; j < graph[0].length; j++) {
    if (graph[i][j] === 1) {
      queue.push([i, j]);
      visited[i][j] = 0;
    }
    if (graph[i][j] === -1) {
      visited[i][j] = -2;
    }
  }
}

let head = 0;

while (head < queue.length) {
   const [tomatoX, tomatoY] = queue[head++];
  // const [tomatoX, tomatoY] = queue.shift();
  
  for (let next of [
    [tomatoX + 1, tomatoY],
    [tomatoX, tomatoY + 1],
    [tomatoX - 1, tomatoY],
    [tomatoX, tomatoY - 1],
  ]) {
    const [nextX, nextY] = next;
    if (
      nextX >= 0 &&
      nextX < N &&
      nextY >= 0 &&
      nextY < M &&
      graph[nextX][nextY] !== -1 &&
      visited[nextX][nextY] === -1
    ) {
      queue.push(next);
      visited[nextX][nextY] = visited[tomatoX][tomatoY] + 1;
    }
  }
}



let visited_ans = visited.flat();

if (visited_ans.includes(-1)) console.log(-1);
else console.log(Math.max(...visited_ans));
