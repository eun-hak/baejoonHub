function solution(n) {
    let fibos = [0n, 1n]
    for (let i =2; i<=n ; i++){
        fibos[i] = BigInt(fibos[i-1]) + BigInt(fibos[i-2])
    }
    
    return fibos[n] % 1234567n
}