function solution(num) {
    count =0
    while(num!==1){
        if (num%2==0){
            num=num/2
            count++
            continue
    }
        else {
            num = num*3 +1
            count++
            continue
        }
    }
    if(count>500){
        return -1
    }
    return count
}