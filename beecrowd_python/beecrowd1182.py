operacao = input()
soma=0
numeros=0
for i in range(12):
    for j in range(12):
        numero = float(input())
        if j>i:
            soma+=numero
            numeros+=1
if operacao=='S':
    print(f'{soma:.1f}')
else:
    print(f'{(soma/numeros):.1f}')