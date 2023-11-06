function solution(priorities, location) {
    let Max_num;
    let Shift_num;
    let Shift_pos
    let answer =1
    let pos_map = []
    priorities.map((value,index)=>{
        pos_map.push(index)
    }) 
    while (true){
        Max_num = Math.max(...priorities)
        Shift_num = priorities.shift()
        
       if(Shift_num ==Max_num){
           if (location == pos_map[0]){
               return answer
           }
           Shift_pos = pos_map.shift()
           answer++
       }
       else{
           Shift_pos = pos_map.shift()
           priorities.push(Shift_num)
           pos_map.push(Shift_pos)
           
        }
        
    }
    
}

// 결국 자기 바로 앞에 더 큰 숫자 뒤로 내가 있을 테니 그 이후 자기의 위치를 더하면 될듯?
// 이미 젤 큰 숫자들은 그냥 더하고
// 자기가 가장 max_num이 되었을 때 자신의 위치를 어떻게 알지