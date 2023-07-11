function solution(x) {
  let n = String(x).split('').map(Number).reduce((a,b)=>{return a+b})
  if (x%n ==0){
      return true
  }
  return false
}