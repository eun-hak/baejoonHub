function solution(s) {
    let answer = []
    let num = 0
    let try1 = 0
    
   while (true){
      
    var count = s.match(/0/g);
    if (count === null) {
        s = s.length
        s = s.toString(2);
    } else {
        num+=count.length;
        s = s.replace(/0/g,'')
        s = s.length
        s = s.toString(2);
    }
    try1 +=1
    count = 0
    if (s==="1"){
        break
    }
   }
    
        
    
    return [try1,num]
    
}