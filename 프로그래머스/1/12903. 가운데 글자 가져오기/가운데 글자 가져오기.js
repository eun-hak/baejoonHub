function solution(s) {
    if (s.length%2 ===0){
        let a = s.length/2
           return s.slice(a-1,a+1)
    }
    else{
        let a = Math.floor(s.length/2)
           return s.substr(a,1)
    }
    
  
}