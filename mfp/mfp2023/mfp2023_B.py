x=int(input())
linha=list(map(int,input().split()))
linha.sort()
aa=linha[int(x/2)-1]+linha[int(x/2)]
print(aa//2)