n,m=map(int,input().split())
pinos=list(map(int,input().split()))
mov=0
for i in range(n):
    if pinos[i]!=m:
        mov+=abs(m-pinos[i])
        pinos[i+1]+=m-pinos[i]
        pinos[i]=m
print(mov)