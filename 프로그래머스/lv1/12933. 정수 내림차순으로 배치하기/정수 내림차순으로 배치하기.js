function solution(n) {
    let ans = String(n).split('').map((n)=>Number(n)).sort((a,b)=>b-a)
    let ans2 = parseInt(ans.join(''))
    return ans2
    
}

