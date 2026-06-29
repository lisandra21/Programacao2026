n=int(input())
gravetos=list(map(int,input().split()))
if n%2==0:
    meios=sorted(gravetos)[n//2-1:n//2+1]
    res1=0
    res2=0
    for i in range(n):
        res1+=abs(meios[0]-gravetos[i])
        res2+=abs(meios[1]-gravetos[i])
    print(max(res1,res2))
else:
    meio=sorted(gravetos)[n//2]
    res=0
    for i in range(n):
        res+=abs(meio-gravetos[i])
    print(res)