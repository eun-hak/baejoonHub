function solution(brown, yellow) {
//  1.   2x + 2y= brown+4
//  2.   x-2 * y-2 한 값이 yellow 
    
    let xy = (brown + 4) / 2 
    let xy2 = xy-2
    let answer = []
    for (let i = 2; i<=xy ; i++){
        
        if((i-2)*(xy2-2) ==yellow){
            answer.push(xy2)
            answer.push(i)
            return answer
        } 
        xy2 = xy2-1
    }
}