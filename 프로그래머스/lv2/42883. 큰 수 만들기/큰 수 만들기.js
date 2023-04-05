


function solution(number, k) {
    let arr = [];
    for (let i=0; i<number.length;i++){
        
        while(arr.length>0 && arr[arr.length-1]<number[i] &&k>0){
            k--;
            arr.pop()
        }
        arr.push(number[i])
        
    }
     arr.splice(number.length - k, k); // 모든 숫자를 비교한 후 k가 0보다 크면 남은 k만큼 뒤에서 제거함
    return arr.join("");
    
}