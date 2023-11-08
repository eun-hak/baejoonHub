// function solution(triangle) {
//     for (let i =1; i<triangle.length ; i++){
//         for(let j=0; j<triangle[i].length; j++){
//             triangle[i][j] += Math.max(triangle[i - 1][j - 1] || 0, triangle[i - 1][j] || 0);
//         }
//     }
    
//     return Math.max(...triangle[triangle.length - 1])
 
// }


//[[여기 배열에서 더해진 값을] , [여기 다음 값에서 모두 처리]]
// 즉 answer[100] 에는 2차원배열 값이 점점 쌓여가는것임


function solution(triangle) {
    for(let i = 1 ; i < triangle.length; i += 1) {
        for (let j = 0; j <triangle[i].length; j += 1){
            triangle[i][j] += Math.max(triangle[i - 1][j - 1] || 0, triangle[i - 1][j] || 0);
        };
    };
    console.log(triangle)
    return Math.max(...triangle[triangle.length - 1]);
}