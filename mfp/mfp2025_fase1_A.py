N, M = map(int, input().split())
linha = list(map(int, input().split()))
frequencia = [0] * (M + 2)
for i in linha:
    frequencia[i] += 1
B = [0] * (M + 2)
for k in range(M, 0, -1):
    B[k] = frequencia[k] + B[k + 1] 
print(*B[1:M+1])
