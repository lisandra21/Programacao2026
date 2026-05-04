alfab='abcdefghijklmnopqrstuvwxyz'
alfabeto=list(alfab)
alf={}
for i in range(26):
    alf[alfabeto[i]]=i
n, m=map(int, input().split())
pal=[]
res=0
for i in range(n):
    palavra=input()
    pal.append(palavra)
for pal1 in pal:
    for pal2 in pal:
        lpal1=list(pal1)
        lpal2=list(pal2)
        npal=[]
        for j in range(m):
            n1=alf[lpal1[j]]
            n2=alf[lpal2[j]]
            npal.append((n1+n2)%26)
        if npal==npal[::-1]:
            res+=1
print(res)