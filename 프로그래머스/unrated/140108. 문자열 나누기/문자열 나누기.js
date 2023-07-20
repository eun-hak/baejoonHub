// 6:18 ~ 6:27
function solution(s) {
    var answer = 0;
    let sameCount = 0, diffCount = 0, sameStr
   
    s.split('').forEach((str)=>{

        if(sameStr === undefined){
            sameStr = str
            sameCount++
        }

        else if(sameStr === str){
            sameCount++
        }

        else{
            diffCount++
        }

        if(sameCount === diffCount){
            sameCount = 0
            diffCount = 0
            sameStr = undefined
            answer++
        }
    })

    // 남은 부분이 존재하면 해당 문자열도 추가 분리 
    if(sameCount !==0 || diffCount !== 0)
        answer++

    return answer
}