def fatorial(n):
    if n==1:
        return 1
    else:
        return n*fatorial(n-1)
s_alfabeto='abcdefghijklmnopqrstuvwxyz'
alfabeto={}
for i in range(1,27):
    alfabeto[i]=s_alfabeto[i-1]

pal=list(input())
letra_num={}
for letra in pal:
    if letra in letra_num:
        letra_num[letra]+=1
    else:
        letra_num[letra]=1