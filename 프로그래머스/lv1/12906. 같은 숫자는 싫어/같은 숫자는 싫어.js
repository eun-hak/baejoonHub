function solution(arr)
{
    let queue = []
    queue[0] = arr[0]
    let j =1;
    for (let i=1; i<arr.length; i++){
        if(queue[i-1] !==queue[i]){
            queue.push(arr[j])
            j++
        }
    }
    return queue
}





function solution(arr)
{
    let answer = [];
    let i;
    let j = 1;
    answer[0] = arr[0];
    for (i = 1; i < arr.length; i++){
        if(arr[i-1] !== arr[i]){
            answer[j] = arr[i];
            j++;
        }
    }
    return answer;
}

