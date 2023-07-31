function solution(begin, target, words) {
    let answer = 24700000000
    let flag =0
    let m = words.length;
    let ch = new Array(m).fill(false);
    
    function DFS(word ,target, val){
        
        if (word == target){
            flag = 1
            answer = Math.min(answer,val)
        }
else {
        for (let i=0; i<m ; i++){
            let cnt = 0
            for (let j=0; j<word.length; j++){

            if (word[j] !== words[i][j]){
                cnt +=1
            }
                }
               if (ch[i] === false && cnt === 1) {
                    ch[i] = true;
                    DFS(words[i], target, val + 1);
                    ch[i] = false;
                }
            }
        }

        
        
    }
    
    
    DFS(begin, target, 0);
    if (flag) {
        return answer;
    } else {
        return 0;
    }
       
}

// function solution(begin, target, words) {
//     let answer = 24700000000;
//     let flag = 0;
//     let m = words.length;
//     let ch = new Array(m).fill(false);

//     function dfs(word, target, val) {
//         if (word === target) {
//             flag = 1;
//             answer = Math.min(answer, val);
//         } else {
//             for (let i = 0; i < m; i++) {
//                 let cnt = 0;
//                 // 한 번에 한 개의 알파벳만 바꿀 수 있는 조건 체크
//                 for (let j = 0; j < word.length; j++) {
//                     if (word[j] !== words[i][j]) {
//                         cnt += 1;
//                     }
//                 }
//                 if (ch[i] === false && cnt === 1) {
//                     ch[i] = true;
//                     dfs(words[i], target, val + 1);
//                     ch[i] = false;
//                 }
//             }
//         }
//     }

//     dfs(begin, target, 0);
//     if (flag) {
//         return answer;
//     } else {
//         return 0;
//     }
// }