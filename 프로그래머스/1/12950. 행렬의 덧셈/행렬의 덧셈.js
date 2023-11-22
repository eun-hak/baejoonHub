function solution(arr1, arr2) {
    // let new_arr = Array.from(Array(2), ()=> new Array(arr1[0].length))
   let new_arr =[]
    for (let i= 0; i<arr1.length; i++){
        let prof = []
        for (let j =0; j<arr1[0].length; j++){
            prof.push(arr1[i][j] + arr2[i][j])
        }
        new_arr.push(prof) 
    }
    
    return new_arr;
}