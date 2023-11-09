function getPermutations(arr) {
  const result = [];

  function permute(arr, currentIndex) {
    if (currentIndex === arr.length - 1) {
      result.push([...arr]);
      return;
    }

    for (let i = currentIndex; i < arr.length; i++) {
      [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]]; // Swap elements
      permute(arr, currentIndex + 1);
      [arr[currentIndex], arr[i]] = [arr[i], arr[currentIndex]]; // Restore the array
    }
  }

  permute(arr, 0);
  return result;
}



function solution(k, dungeons) {
    const answer_array = getPermutations(dungeons)
    const answer = []
    
    for (let i = 0; i<answer_array.length  ; i++){
        let first_num = k
        let number=0
        
        for (let j =0 ; j<answer_array[i].length ; j++){
                   
            if (first_num>=answer_array[i][j][0]){
                first_num-=answer_array[i][j][1]
                number ++
        }
    }
        answer.push(number)
    }
   
    
   
    return Math.max(...answer)
   
}   
 



//던전이 나올 수 있는 경우의 수만큼 만들어놓고
// 그 경우를 다 돌아서 그중에 가장 많이 나오는 경우가 정답