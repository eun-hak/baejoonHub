from collections import deque

a, b = map(int,input().split())





def bfs(node,node2):
   
    queue = deque([(node,1)])
    while queue:
        now,cnt= queue.popleft()
        
        if now==node2:
            print(cnt)
            return
        if now * 2 <= b:
            queue.append((now*2,cnt+1))
        if now * 10 + 1 <= b:
            queue.append((now*10 +1,cnt+1))
        
    print(-1)

bfs(a,b)

