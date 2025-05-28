const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [str , MyStr] = input

const a =str.split(`${MyStr}`)
console.log(a.length-1)
