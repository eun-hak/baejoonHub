function solution(n,a,b)

// 계속 2씩 나눠가면 됨 둘다
// 둘이 빼서 1이 나올때 까지
{
   let answer = 0
   while(a!==b){
       a= Math.round(a/2)
       b= Math.round(b/2)
       answer++
   }
   return answer
}