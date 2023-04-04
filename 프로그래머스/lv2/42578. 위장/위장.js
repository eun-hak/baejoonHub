//각 착장마다 배열에 담은 후 배열에서 하나씩 꺼내는 조합으로 풀면 좋을듯?
// [1]  [1,2]  

// 혹은 처음 배열의 개수를 추가한 후 서로 다른 조합이 몇개인지만 구분해서 숫자를 추가해도 좋을듯

function solution(clothes) {
    let answer = 1;
    const clotheslist = {};
    
    clothes.forEach(row =>{
        const [name, kinds] = row
        if(clotheslist.hasOwnProperty(kinds)){
            clotheslist[kinds]++
        }
        else{
            clotheslist[kinds] =1
            
        }   
   
    })
    
     for(const key in clotheslist){
        answer *= (clotheslist[key]+1)
    }   
       
    return answer-1;
}