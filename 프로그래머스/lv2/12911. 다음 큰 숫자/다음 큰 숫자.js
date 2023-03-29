function solution(n) {
    n2 = n.toString(2)
    n2= n2.replace(/0/g,'')
    let i = n+1
    while(true){
        i2 = i.toString(2)
        i2= i2.replace(/0/g,'')
        if (i2.length ===n2.length){
            break
        }
        i++
        
    }
    return i;
}