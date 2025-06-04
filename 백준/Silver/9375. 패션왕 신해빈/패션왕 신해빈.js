const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const N = Number(input[0]);
let index = 1;

for (let i = 0; i < N; i++) {
  let n = Number(input[index]);
  let answer = 1
  //
  let costume = new Map()
  for (let j = index+1; j < index + n+1 ; j++) {
    const [item , kind] = input[j].split(' ')
    if(costume.get(kind)){
      costume.set(kind, costume.get(kind)+1 )
    }
    else{
       costume.set(kind, 1)
    }
  }
  for (let [kind, count] of costume) {
    answer *= (count + 1);
  }
  console.log(answer-1)
  //
  index += n + 1;
}
