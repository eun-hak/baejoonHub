function solution(n, computers) {
 let answer= 0
 let visited = []
 
 function newRoot(i,n,visited){
     for (let j =0; j<n ; j++){
         if (computers[i][j]==1 && !visited.includes(j)){
             visited.push(j)
             newRoot(j,n,visited)
         }
     }
     
 }
    for (let i=0 ; i<n ; i++){
        if (!visited.includes(i)){
            visited.push(i)
            answer = answer+1
            newRoot(i,n,visited)
        }
    }
    return answer
}



// def solution(n, computers):
//     answer = 0
//     visited = []

//     def newRoot (i,n,visited):
//         for j in range(n):
//             if computers[i][j] == 1 and j not in visited:
//                 visited.append(j)
//                 newRoot(j,n,visited)

//     for i in range(n):
//         if i not in visited :
//             visited.append(i)
//             answer = answer+1
//             newRoot(i,n,visited)

//     return answer