n,m=map(int,input().split())
dicio={}
for i in range(m):
    pal1,pal2=input().split()
    if len(pal2)<len(pal1):
        dicio[pal1]=pal2
    else:
        dicio[pal1]=pal1
trad=input().split()
for palavra in trad:
    print(dicio[palavra], end=' ')