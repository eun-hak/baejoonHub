const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const makePrefixSum = (board, N, M) => {
  const prefixSum = Array.from({ length: N }, () => new Array(M).fill(0));
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      let curr = Number(board[y][x]);
      let top = y > 0 ? prefixSum[y - 1][x] : 0;
      let left = x > 0 ? prefixSum[y][x - 1] : 0;
      let corner = x > 0 && y > 0 ? prefixSum[y - 1][x - 1] : 0;

      prefixSum[y][x] = curr + top + left - corner;
    }
  }

  return prefixSum;
};

const getSum = (prefixSum, y1, x1, y2, x2) => {
  let curr = prefixSum[y2][x2];
  let top = y1 > 0 ? prefixSum[y1 - 1][x2] : 0;
  let left = x1 > 0 ? prefixSum[y2][x1 - 1] : 0;
  let corner = x1 > 0 && y1 > 0 ? prefixSum[y1 - 1][x1 - 1] : 0;

  return curr - top - left + corner;
};

const [N, M] = input[0].split(" ").map(Number);
const inputArr = input.slice(1);
const arr = Array.from({ length: N }, () => new Array(0).fill(M));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i].push(Number(inputArr[i][j]));
  }
}

const prefixSum = makePrefixSum(arr, N, M);

let max = 0;

// 1. 가로로 3등분
for (let i = 1; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const a = getSum(prefixSum, 0, 0, i - 1, M - 1);
    const b = getSum(prefixSum, i, 0, j - 1, M - 1);
    const c = getSum(prefixSum, j, 0, N - 1, M - 1);
    max = Math.max(max, a * b * c);
  }
}

// 2. 세로로 3등분
for (let i = 1; i < M - 1; i++) {
  for (let j = i + 1; j < M; j++) {
    const a = getSum(prefixSum, 0, 0, N - 1, i - 1);
    const b = getSum(prefixSum, 0, i, N - 1, j - 1);
    const c = getSum(prefixSum, 0, j, N - 1, M - 1);
    max = Math.max(max, a * b * c);
  }
}

// 3. 가로로 2등분 → 아래를 세로로 분할
for (let i = 1; i < N; i++) {
  for (let j = 1; j < M; j++) {
    const a = getSum(prefixSum, 0, 0, i - 1, M - 1);
    const b = getSum(prefixSum, i, 0, N - 1, j - 1);
    const c = getSum(prefixSum, i, j, N - 1, M - 1);
    max = Math.max(max, a * b * c);
  }
}

// 4. 가로로 2등분 → 위를 세로로 분할
for (let i = 1; i < N; i++) {
  for (let j = 1; j < M; j++) {
    const a = getSum(prefixSum, 0, 0, i - 1, j - 1);
    const b = getSum(prefixSum, 0, j, i - 1, M - 1);
    const c = getSum(prefixSum, i, 0, N - 1, M - 1);
    max = Math.max(max, a * b * c);
  }
}

// 5. 세로로 2등분 → 오른쪽을 가로로 분할
for (let i = 1; i < M; i++) {
  for (let j = 1; j < N; j++) {
    const a = getSum(prefixSum, 0, 0, N - 1, i - 1);
    const b = getSum(prefixSum, 0, i, j - 1, M - 1);
    const c = getSum(prefixSum, j, i, N - 1, M - 1);
    max = Math.max(max, a * b * c);
  }
}

// 6. 세로로 2등분 → 왼쪽을 가로로 분할
for (let i = 1; i < M; i++) {
  for (let j = 1; j < N; j++) {
    const a = getSum(prefixSum, 0, i, N - 1, M - 1);
    const b = getSum(prefixSum, 0, 0, j - 1, i - 1);
    const c = getSum(prefixSum, j, 0, N - 1, i - 1);
    max = Math.max(max, a * b * c);
  }
}

console.log(max);