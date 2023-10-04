function solution (el){
    const Sum_Set = new Set();
    
    const len = el.length;
    for (let i=1; i<=len; i++) { 
       
        let sum = 0;
        for (let j=0; j<len; j++) { 
            if (j === 0) { 
                for (let k=0; k<i; k++) {
                    sum += el[k];
                }
            }
            else { 
                sum -= el[j-1];
                sum += el[(j+i-1) % len];
            }
            Sum_Set.add(sum);
        }
       
    }
    
    return Sum_Set.size;
}