function solution(arr) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const lcm = (a, b) => a * b / gcd(a, b);

    // arr = arr.sort(function(a,b){return a-b})
    answer = lcm(arr[0],1)
    for (let i=1; i<arr.length; i++){
        
        answer = lcm(arr[i],answer)
        
    }
    return answer;
}