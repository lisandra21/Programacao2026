n,m=map(int, input().split())
veloc_max = {}
veloc_vaca={}
trechos_tot_vel={}
trecho=0
for i in range(n):
    dist,vel=map(int, input().split())
    trecho+=dist
    veloc_max[trecho]=vel
for _ in range(m):
    distv,velv=map(int, input().split())
    trechov+=distv
    veloc_vaca[trechov]=velv
