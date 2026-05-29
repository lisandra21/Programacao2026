n=int(input())
for _ in range(n):
    n_amgs=int(input())
    amgs=list(map(int,input().split()))
    for amigo in range(n_amgs):
        perm=[amigo+1]
        amigo_orig=amigo
        while amgs[amigo]!=amigo_orig+1:
            perm.append(amgs[amigo])
            amigo=amgs[amigo]-1
        print(*perm)