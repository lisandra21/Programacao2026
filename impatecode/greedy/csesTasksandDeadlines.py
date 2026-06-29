n=int(input())

dur_dead=[]

for _ in range(n): # O(n)
    dur,dead=map(int,input().split())
    dur_dead.append((dur,dead))

dur_dead.sort()
h_at=0
saldo=0
for i in range(n):
    h_at+=dur_dead[i][0]
    saldo+=dur_dead[i][1]-h_at
    
print(saldo)