function solution(s){
    let stack = 0
    for (let i=0 ; i <s.length ; i++){
        if (s[0]===")"){
            return false
        }
        else if(s[s.length -1] ==="("){
            return false
        }
        
        if(s[i]==="("){
            stack+=1
        }
        if(s[i] === ")"){
            if(stack === 0){
                return false
            }
            else{
                stack-=1
                continue
            }
        }
    }
    return stack===0
    
}