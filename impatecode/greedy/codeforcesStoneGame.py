'''
tá dando errado pra esse caso:

8
4 2 3 1 8 6 7 5

'''



c=int(input())
for _ in range(c):
    maxi=int(input())
    mini=1
    Mdir=False
    mdir=False
    pedras=list(map(int,input().split()))
    for i in range(maxi):
        if pedras[i]==maxi:
            if i>=maxi//2:
                Mdir=True
                r1=maxi-i
            else:
                r1=i+1
        elif pedras[i]==mini:
            if i>=maxi//2:
                mdir=True
                r2=maxi-i
            else:
                r2=i+1
    if Mdir==mdir:
        print(max(r1,r2))
    else:
        print(r1+r2)