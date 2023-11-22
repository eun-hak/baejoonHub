    function IsPrime(n){
    if (n==0) return false;
    if (n==1) return false;
    for (let i=2 ; i<=Math.sqrt(n); i++){
        if (n%i ==0) return false
    }
    return true
}



function solution(n, k) {
    
    let answer= 0
    let demi = n.toString(k)
    let split_demi = demi.split("0")
    for (i of split_demi){
        
        if (IsPrime(Number(i))){
            answer+=1
        }
    }
    return answer
}
    
