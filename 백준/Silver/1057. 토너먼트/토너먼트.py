import math
a,b,c = map(int,input().split())



if b>c:
    n = b
    m= c
else:
    n =c
    m = b



answer = 1

while True:
    if n%2==0 and n-m==1:
        print(answer)
        break
    a= a//2
    n= math.ceil(n/2)
    m= math.ceil(m/2)
    #print(m,n)
    answer+=1

    if a<=0:
        break

#print(-1)

#부르트포스로 해결
# 16일때는 8 9니까
# 8일 때는 4 5
# 4일 때는 2 3
# 2일 때는 1 2


#더 큰쪽이 짝수고 큰수-작은수 가 1이면 됨


#1000일때는 20 31
#500일때는 10 16
#250일때는 5 8
#125일때는 3 4
