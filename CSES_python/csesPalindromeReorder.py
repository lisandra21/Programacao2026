palavra = list(input().strip()) # limpando a entrada, sem caracteres fantasmas
palin1=[]
sempar=[]
for letra in palavra:
    if letra in sempar: # O(1) pois len(sempar) é no max 26
        palin1.append(letra)
        sempar.remove(letra)
    else:
        sempar.append(letra)
if len(sempar)<=1:
    palin2=palin1[::-1]
    print("".join(palin1)+"".join(sempar)+"".join(palin2))
else:
    print('NO SOLUTION')