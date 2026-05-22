jog,ntimes=map(int, input().split())
times=[[f'Time {n+1}'] for n in range(ntimes)]
hab_jog={}
for i in range(jog):
    jogador,hab=input().split()
    hab_jog[int(hab)]=jogador
maior_p_menor=sorted(list(hab_jog.keys()))[::-1]
for j in range(len(maior_p_menor)):
    times[int(j%ntimes)].append(f'{hab_jog[maior_p_menor[j]]}')
for time in times:
    print(time[0])
    time.sort()
    for jogador in time[1:]:
        print(jogador)
    print()