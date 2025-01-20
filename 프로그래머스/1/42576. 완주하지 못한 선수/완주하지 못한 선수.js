function solution(participant, completion) {
    var answer = '';
      const map = new Map();
    
   
    for (let person of participant) {
        map.set(person, (map.get(person) || 0) + 1);
    }
    for (let person of completion){
        if(map.has(person))
        map.set(person,(map.get(person)||0)-1)
    }
    
    for (let [key, value] of map){
        if (value > 0){
            return key
        }
    }
   
  
    return ''
}