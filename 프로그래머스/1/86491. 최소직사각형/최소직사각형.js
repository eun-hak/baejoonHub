function solution(sizes) {
    
    var answer = 0;
    
    const Arr= []
    const minArr  = []
   
    
    for( let [a,b] of sizes){
            
            minArr.push(Math.min(a,b))
            
            Arr.push(a,b)
            
    }

    minNum = Math.max(...minArr)
    maxNum = Math.max(...Arr)
    return minNum*maxNum;
}


