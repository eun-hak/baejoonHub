function solution(name, yearning, photo) {
    let Obj = {}
    let ans = []
    
    
    for (let i in name){
        Obj[name[i]] = i
    }
    for(let i=0 ; i<yearning.length ; i++){
        Obj[name[i]] = yearning[i]
    }
    
    
    
    for (let i =0 ; i<photo.length ; i ++){
        let num = 0
        
        for (let j =0 ; j<photo[i].length ; j++){
            if(Obj[photo[i][j]]){
                 num += Obj[photo[i][j]]
            }
           
          
        }
    
        ans.push(num)
        
    }
    
    
    return ans;
}