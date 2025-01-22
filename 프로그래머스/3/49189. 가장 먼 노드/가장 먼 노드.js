function solution(n, edge) {
    var answer = 0;
    const graph = Array.from({length : n+1}, ()=>[])
    for (let [start,end] of edge){
        graph[start].push(end)
        graph[end].push(start)
    }
    
    const result = Array(n+1).fill(0)
    const queue = []
    const visited= Array(n+1).fill(false)

    
    visited[1] = true
    const distances = Array(n + 1).fill(0); // 거리 배열, -1로 초기화
    function BFS(nodes){
      
        distances[1] = 0; // 시작 노드의 거리는 0
       
        queue.push(nodes)
       
        while (queue.length !==0){
            
            const node = queue.shift()
            
            for ( neighbor of graph[node]){
                if (!visited[neighbor]){
                    visited[neighbor] = true
                    distances[neighbor] = distances[node] + 1;
                  
                    queue.push(neighbor)
                }
            
            }
            
            
        }
        
    }
    BFS(1)
    const Max_value = Math.max(...distances)
    for (let i of distances){
    if (i ==Max_value)
        answer++
    }
    
    return answer;
}