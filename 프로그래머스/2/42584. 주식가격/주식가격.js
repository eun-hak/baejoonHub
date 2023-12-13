function solution(prices) {
    const stack = [], result = Array(prices.length).fill(0).map((_,idx)=>idx).reverse()
    const visited = []

    prices.forEach((price,idx)=>{
        const sLastIdx = stack.length-1
        // console.log(stack)
        // 자신보다 뒤에 있는 숫자 중에서 작아지면 처리 
        if(price < stack[sLastIdx]){
            let backTrackingIdx = 0
            // 이전 값이 크다면
            while(price < stack[sLastIdx-backTrackingIdx]){
                // 처음 접근한 값이라면 값을 적용 
                if(!visited[sLastIdx-backTrackingIdx]){
                    result[sLastIdx-backTrackingIdx] -= (prices.length-1-idx)
                    visited[sLastIdx-backTrackingIdx] = true
                }
                backTrackingIdx++
            }
        }
        stack.push(price)
    })
    return result
}