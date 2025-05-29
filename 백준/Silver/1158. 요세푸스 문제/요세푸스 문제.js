const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [num, od] = input[0].split(" ").map(Number);
const arr = [];
const ans = [];
for (let i = 1; i <= num; i++) {
  arr.push(i);
}






let a = 0
for(let i = 1; i<=num; i++){
    a =  (a + od -1) % arr.length

    ans.push(arr[a])
    arr.splice(a,1)
    

}



console.log(`<${ans.join(', ')}>`)