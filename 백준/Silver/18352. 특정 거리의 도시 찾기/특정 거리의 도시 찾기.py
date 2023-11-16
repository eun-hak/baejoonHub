from collections import deque
import sys
input = sys.stdin.readline
N,M,K,X = map(int,input().split())


visited = [False] * (N+1)
graph = [[]for i in range(N+1)]
distance = [0] * (N+1)
for _ in range(M):
    a,b = map(int,input().split())
    graph[a].append(b)


queue = deque([X])
answer =[]

visited[X] = True
distance[X] = 0
while queue:
    v= queue.popleft()

    for i in graph[v]:
        
        if not visited[i] :
            queue.append(i)
            visited[i] = True
            distance[i] = distance[v] + 1
            if distance[i] == K:
                answer.append(i)
                
if len(answer) == 0:
        print(-1)
else:
    answer.sort()
    for i in answer:
        print(i, end='\n')
