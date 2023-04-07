function solution(n) {
    let arr = new Array(n)
    for(let i=0;i<n;i+=2){
        arr[i]="수"
    }
    for(let i=1;i<n;i+=2){
        arr[i]="박"
    }
    
    return arr.join('');
}