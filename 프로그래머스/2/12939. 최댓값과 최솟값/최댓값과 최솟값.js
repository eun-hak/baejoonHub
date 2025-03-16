// function solution(s) {
    
    
//     const arr = s.split(' ')
//     const arr2 =arr.map((value,idx)=>{return Number(value)})
//     const maxnum = Math.max(...arr2)
//     const minnum = Math.min(...arr2)
//     var answer = String(minnum)+' '+String(maxnum) 
//     return answer;
// }


function solution(s) {
    const NumArr = s.split(' ').map(Number)
    const maxNum = Math.max(...NumArr)
    const minNum = Math.min(...NumArr)
    
    return[ minNum,maxNum].join(' ')
}