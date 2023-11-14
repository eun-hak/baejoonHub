chess = []

for i in range(8):
    chess_row = []
    a= input()

    for i in a:
        chess_row.append(i)
        
    chess.append(chess_row)

count = 0


for k in range(0,8,2):
    for t in range(0,8,2):
        
        if chess[k][t]=='F':
            count+=1
    
for j in range(1,8,2):
    for t in range(1,8,2):
        
        if chess[j][t]=='F':
            count+=1

print(count)

