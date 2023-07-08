function solution(citations) {
    citations = citations.sort((a,b)=>b-a)
    let count =0
    
    for (let i =0 ; i<citations.length; i++){
        if (i+1 <=citations[i]){
            count ++
        }
        else{
            break
        }
    }
  return count

}