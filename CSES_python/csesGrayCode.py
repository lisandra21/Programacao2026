n=int(input())-1
bin=['0','1']
for num in range(n):
    inv=bin[::-1]
    bin=bin+inv
    for i in range(len(bin)):
        if i<len(bin)/2:
            bin[i]='0'+bin[i]
        else:
            bin[i]='1'+bin[i]
for item in bin:
    print(item)