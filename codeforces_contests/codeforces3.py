t=int(input())
for caso in range(t):
    n=int(input()) # numero de blogs
    for blog_i in range(n):
        total_usuarios=[]
        num_usuarios=blog_i[0]
        lista_usuarios=list(map(int, blog_i[1:].split()))
        for user in lista_usuarios:
            if user in total_usuarios:
                total_usuarios[0]=user
            