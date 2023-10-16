function solution(answers) {
    let first_answer = [1,2,3,4,5] 
    let first_count = 0
    let second_answer = [2,1,2,3,2,4,2,5]
    let second_count = 0
    let third_answer = [3,3,1,1,2,2,4,4,5,5]
    let third_count = 0
   
    let answer = []
    //나머지 계산
    answers.forEach((answer,idx)=>{
        if(first_answer[idx % first_answer.length] === answer)
            first_count++
        if(second_answer[idx % second_answer.length] === answer)
            second_count++
        if(third_answer[idx % third_answer.length] === answer)
            third_count++
    })
    
   
    let maxnum = Math.max(first_count,second_count,third_count)
    if (first_count ==maxnum){
        answer.push(1)
    }
    if (second_count ==maxnum){
        answer.push(2)
    }
    
    if (third_count ==maxnum){
        answer.push(3)
    }
    
    return answer
    
    

}

//   const answer = [];
//     let person1=0, person2=0, person3=0
//     const pick1 = [1, 2, 3, 4, 5], 
//           pick2 = [2, 1, 2, 3, 2, 4, 2, 5], 
//           pick3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//     answers.forEach((answer,idx)=>{
//         if(pick1[idx % pick1.length] === answer)
//             person1++
//         if(pick2[idx % pick2.length] === answer)
//             person2++
//         if(pick3[idx % pick3.length] === answer)
//             person3++
//     })

//     const maxAnswer = Math.max(person1,person2,person3)

//     if(person1 === maxAnswer)
//         answer.push(1)
//     if(person2 === maxAnswer)
//         answer.push(2)
//     if(person3 === maxAnswer)
//         answer.push(3)
//     return answer