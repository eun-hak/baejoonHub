function solution(cacheSize, cities) {
    let answer= 0
    let cache = []
    
    cities.forEach((e)=>{
          e = e.toLowerCase();
       if (cache.includes(e)) {
      answer++;
      cache.splice(cache.indexOf(e), 1);
    } 
        else{answer+=5}
        cache.push(e)
        if(cache.length>cacheSize){ cache.shift()}
})
return answer
}   