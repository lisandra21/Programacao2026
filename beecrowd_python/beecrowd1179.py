par=[]
impar=[]

for i in range(15):
    num = int(input())
    if num%2==0:
        par.append(num)
        if len(par)==5:
            for item in range(5):
                print(f'par[{item}] = {par[item]}')
            par=[]
    else:
        impar.append(num)
        if len(impar)==5:
            for item in range(5):
                print(f'impar[{item}] = {impar[item]}')
            impar=[]

for item in range(len(impar)):
    print(f'impar[{item}] = {impar[item]}')
for item in range(len(par)):
    print(f'par[{item}] = {par[item]}')