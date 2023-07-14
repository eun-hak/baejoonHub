function solution(arr, divisor) {
    let ans = []
    for(let i=0; i<arr.length; i++){
        if (arr[i]%divisor ==0){
            ans.push(arr[i])
        }
    }
    return ans[0] ===undefined ?  [-1] : ans.sort((a,b)=>(a-b))
}

