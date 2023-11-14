from collections import deque
import sys
input = sys.stdin.readline
a, b = map(int,input().split())


def bfs(a,b):
    queue = deque()
    queue.append(a)

    
    answer_num = 0
    answer_count =0

 
    visited = [0] * 100001
    visited[a] =0

    
    while queue:
        x= queue.popleft()
        cnt = visited[x] 
        if x==b:
            answer_count = cnt   
            answer_num+=1
            continue
             
        for nx in [x-1 , x+1, x*2]:
            if 0<=nx<100001:
                if visited[nx]==0 or visited[nx]==visited[x]+1:
                    queue.append(nx)
                    visited[nx]= cnt +1

                    
    print(answer_count)        
    print(answer_num)  
    
    
bfs(a,b)









        
   
        
