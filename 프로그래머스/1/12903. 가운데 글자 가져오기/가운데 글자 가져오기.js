function solution(s) {
    if (s.length%2 ===0){
        let a = s.length/2
           return s.substr(a-1,2)
    }
    else{
        let a = Math.floor(s.length/2)
           return s.substr(a,1)
    }
    
  
}