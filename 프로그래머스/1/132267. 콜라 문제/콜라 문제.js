function solution(a, b, n) {
    let answer =0;
    while (n>=a){
        let remain_empty_bottle = n%a
        
        n = Math.floor(n/a) 
        
        let return_bottle = n * b
        answer = answer + return_bottle 
        
        n= return_bottle+remain_empty_bottle
        console.log(return_bottle,"의 콜라를 받습니다")
        console.log("이때 가지고 있는 병 수는",n,"병 입니다")
    }
    // if(n>2){
    //     answer = answer+n
    // }
    
    return answer
}


