function solution(s){
    s= s.toLowerCase()
    let county =0
    let countp =0
    
    for (let i =0; i<=s.length ; i++){
        if (s[i] ==='p'){
            countp ++
        }
        else if (s[i] =='y'){
            county ++
        }
        
}

    if( county==countp){
        return true
        
    }
    else if (county!==countp){
        return false
    }
}
