function solution(arr) {
    let count = 0
    arr.forEach((index)=>{ return count +=index})
    return count/arr.length
}