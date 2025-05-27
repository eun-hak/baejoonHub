const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0])

const dp = Array.from({length: num+1}, ()=> new Array(10).fill(0))

for (let i =0; i<=9; i++){
  dp[1][i]= 1
}

for(let i =2; i<= num; i++){
  for(j =0; j<=9 ; j++){

    if(j ==0){
      dp[i][j] = dp[i-1][j]
    }
    else { dp[i][j] = (dp[i][j-1] +dp[i-1][j] )%10007 } 
  }
}




console.log(dp[num].reduce((acc,cur)=>acc+=cur ,0)%10007)