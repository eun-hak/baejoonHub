function solution(word) {
    let word_list = ['A', 'E','I','O','U']
    let ans_word = ''
    let answer = 0
   
   
    for (let i of word_list){
         answer+=1
                  ans_word = i
                  if (word==ans_word){
                        return answer}
        for (let j of word_list){
            answer+=1
                  ans_word = i+j
                  if (word==ans_word){
                        return answer}
            for(let k of word_list){
                 answer+=1
                  ans_word = i+j+k
                  if (word==ans_word){
                        return answer}
                for (let a of word_list){
                    answer+=1
                        ans_word = i+j+k+a
                        if (word==ans_word){
                            return answer}
                    for (let b of word_list){
                        answer+=1
                        ans_word = i+j+k+a+b
                        if (word==ans_word){
                            return answer
                        }
                    }
                }
            }
        }
    }
}