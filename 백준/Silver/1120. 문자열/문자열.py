a,b = input().split()

#print (a,b)
ans=[]
ran = len(b)-len(a)+1
for i in range(ran):
    count =0
    for j in range(len(a)):
        if a[j]!=b[i+j]:
            count+=1
    ans.append(count)

print(min(ans))
                   

    



