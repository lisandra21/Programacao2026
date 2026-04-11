import math

def fatorar(n):
    fatores = []
    d = 2
    while d * d <= n:
        while n % d == 0:
            fatores.append(d)
            n //= d
        d += 1
    if n > 1:
        fatores.append(n)
    return fatores

n=int(input())
for i in range(n):
    num=int(input())
    # pega todos os fatores e escreve como uma multiplicacao de fatores
    fatores = fatorar(num)
    fatores_unicos = set(fatores)
    print(math.prod(fatores_unicos))