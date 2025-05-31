const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
  }

  push(val) {
    this.arr.push(val);
  }

  pop() {
    if (this.empty()) return -1;
    return this.arr[this.head++];
  }

  size() {
    return this.arr.length - this.head;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  front() {
    return this.empty() ? -1 : this.arr[this.head];
  }

  back() {
    return this.empty() ? -1 : this.arr[this.arr.length - 1];
  }
}


const queue = new Queue();
const N = Number(input[0]);
const result = [];

for (let i = 1; i <= N; i++) {
  const [cmd, val] = input[i].split(' ');
  if (cmd === 'push') queue.push(Number(val));
  else result.push(queue[cmd]());
}

console.log(result.join('\n'));
