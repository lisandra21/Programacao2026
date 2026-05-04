p, b=map(int, input().split())
n=int(input())
t1,t2=n//2, n//2+1
tent1=p*b*n*t1-p*b*(t1**2)
tent2=p*b*n*t2-p*b*(t2**2)
print(max(tent1,tent2))