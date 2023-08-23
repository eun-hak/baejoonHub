function solution(progresses, speeds) {
    let answer = []
    while (true){
        let stack = []
        let ans = 0
        for (let i=0; i<speeds.length; i++){
            progresses[i]+=speeds[i]
        }
        
        for (let j=0; j<speeds.length; j++){
            if(progresses[j]>=100){
                stack.push(progresses[j])
            }
            else{
                break
            }
        }
        
        if (stack.length>0){
            answer.push(stack.length)
        }
    
            for (let k=0; k<stack.length; k++){
            progresses.shift()
            speeds.shift()
        }
        
    
        if (progresses.length ==0){
            break
        }
    }
    
   return answer
}