const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = input.shift();

// 시간 초과를 방지하기 위해 ans 배열에 답을 담아 join으로 하나의 문자열 출력
let ans = [];

for(let i = 0; i < iter; i++){
    let sentence = [];
    
    // input으로 들어온 하나의 문장을 공백 기준으로 쪼개서 단어 단위로 만듦.
    let arr = input[i].split(" ");
    
    for(let j = 0; j < arr.length; j++){
        // 하나의 단어를 하나의 알파벳으로 쪼갬.
        // reverse가 배열에 적용되는 메서드이므로, 알파벳 배열로 만들어서 메서드 적용.
        // reverse 후 join을 사용해 단어 단위로 만들어줌.
        let word = arr[j].split("").reverse().join("");
        
        // sentence에는 뒤집혀진 단어가 push됨.
        // sentence에는 쪼개진 단어들이 원소로 들어가게 됨.
        sentence.push(word);
    }
    
    // 각 단어가 reverse가 되어서 sentence에 들어가 있으므로,
    // 그들을 다시 join(" ")해서 하나의 문자열로 만들어줌.
    let newSentence = sentence.join(" ");
    
    ans.push(newSentence);
}

console.log(ans.join("\n"));