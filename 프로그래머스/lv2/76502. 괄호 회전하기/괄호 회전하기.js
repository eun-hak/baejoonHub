function solution(s) {
    stack = []
    result = 0
    isRight = true
    if (s.length % 2 === 1) return 0;
    for (let i =0; i<s.length; i++){
        let candidate = s.slice(i) + s.slice(0,i)
        isRight = true
        for (let word of candidate){
            if (word ==="{" || word ==="(" || word ==="["  ) stack.push(word)
            else{
                leftword = stack.pop()
                if (word == ")"&& leftword == "(") continue
                 if (word == "}"&& leftword == "{") continue
                 if (word == "]"&& leftword == "[") continue
                isRight = false
                break
            }
           
        }
         if (isRight) result ++
    }
    return result
 
    
}