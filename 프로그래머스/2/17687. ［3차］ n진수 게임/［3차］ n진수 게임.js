function solution(n, t, m, p) {
    let li = []
    let answer = ""
    for (let i=0; i<t*m ; i++){
        let li_num = i.toString(n)
        if(li_num == "a" || li_num == "b" || li_num == "c" || li_num == "d" || li_num == "e" || li_num == "f"){
                    li_num = li_num.toUpperCase()
                }
        if(li_num.length > 1){
            
            for (let j of li_num){
                if(j == "a" || j == "b" || j == "c" || j == "d" || j == "e" || j == "f"){
                    j = j.toUpperCase()
                    
                }
                li.push(j)
            }
        }
        else{
             li.push(li_num)
        }
       
        
    }
    for (let i =p-1; i<t*m; i= i+m){
        answer+=li[i]
    }
    
    return(answer)
}

