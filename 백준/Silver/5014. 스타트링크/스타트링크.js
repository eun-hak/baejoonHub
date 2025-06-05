const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [F, S, G, U, D] = input[0].split(" ").map(Number);

let ans = 0;

const queue = [];
const visited = new Array(F + 1).fill(-1);
queue.push(S);
visited[S] = 0

const directions = [];
if (U > 0) directions.push(U);
if (D > 0) directions.push(-D);



while (queue.length > 0) {

  const cur = queue.shift();
  for (let move of directions) {
    const next = cur + move;
    if(next>=1 && next<=F && visited[next] ===-1){
      visited[next] = visited[cur] +1
      queue.push(next)
    }
  }
}

if (visited[G] === -1) {
  console.log("use the stairs");
} else {
  console.log(visited[G]);
}