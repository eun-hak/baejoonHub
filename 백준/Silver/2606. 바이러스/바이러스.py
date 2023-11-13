import sys
a = int(sys.stdin.readline())
b = int(sys.stdin.readline())
visited = [False for _ in range(a+1)]
graph = [[0 for _ in range(a+1)] for _ in range(a+1)]

answer = 0


for i in range(b):
    
    c = list(map(int,sys.stdin.readline().split()))
    graph[c[0]][c[1]] = 1
    graph[c[1]][c[0]] = 1
    

def dfs(v):
    global answer
    visited[v] = True
   #print(v,"번 방문")
    for i in range(a+1):
        if graph[v][i] and not visited[i]:
           # print(v,"번",i,"랑접함")
            answer+=1
            dfs(i)


dfs(1)

print(answer)

    



      



