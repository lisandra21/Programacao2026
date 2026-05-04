n,m=map(int,input().split())
minutos=list(map(int,input().split()))
resp=''
for i in range(1,m+1):
    res=m-i
    resp+=str(res)+' '
print(resp)