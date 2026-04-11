def lis(A): # A é a lista de numeros, ex A=[3, 1, 8, 2, 5]
    L=[1]*len(A) # L = [1,1,1,1,1]
    for i in range(1,len(L)): # range(1,5)
        subproblems= [L[k] for k in range(i) if A[k]<A[i]]
        L[i] = 1+max(subproblems, default=0)
        print('interação número', i, ':')
        print('subproblems:', subproblems)
        print('L:', L)
        return max(L, default=0)
    
a=lis([[3, 1, 8, 2, 5]])
print(a)