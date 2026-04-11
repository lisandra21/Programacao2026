testes = int(input())
for caso in range(testes):
    num=int(input())
    lista1=input().split()
    lista=list(map(int, lista1))
    ind_n=lista.index(num)
    # ja poe o maior numero no inicio
    prim=lista[0]
    lista[0]=num
    lista[ind_n]=prim
    print(*lista)