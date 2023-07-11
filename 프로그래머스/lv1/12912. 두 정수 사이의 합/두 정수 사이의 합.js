function solution(a, b) {
    
    let count =0
    if(a<b){
         for (let i=a; i<=b; i++){
        count+=i
    }
    return count
        
    }
    else{
         for (let i=b; i<=a; i++){
        count+=i
    }
    return count
    }
    
    
}