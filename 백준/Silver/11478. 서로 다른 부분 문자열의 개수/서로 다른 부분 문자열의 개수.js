const s = require('fs').readFileSync('/dev/stdin').toString().trim();

const suffixes = [];
for (let i = 0; i < s.length; i++) {
  suffixes.push(s.slice(i));
}

suffixes.sort();

function getLCP(a, b) {
  let len = 0;
  while (len < a.length && len < b.length && a[len] === b[len]) {
    len++;
  }
  return len;
}

let total = 0;
for (let i = 0; i < suffixes.length; i++) {
  const len = suffixes[i].length;
  if (i === 0) {
    total += len;
  } else {
    const lcp = getLCP(suffixes[i], suffixes[i - 1]);
    total += len - lcp;
  }
}

console.log(total);