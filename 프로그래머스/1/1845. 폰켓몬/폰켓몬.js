function solution(nums) {
    let set_nums = new Set(nums)
    
    let classify_nums = [...set_nums]
    let answer = 0
    for (let i=0; i<nums.length/2 ; i++){
        if (classify_nums.length!=0){
            answer+=1
            classify_nums.pop()
        }

        
    }
    return answer
}