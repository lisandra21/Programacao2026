#include <bits/stdc++.h> // inclui a classe vector
using namespace std;

int main(){
    string seq;
    int atual = 1;
    int res = 1;
    cin >> seq;
    int tam = seq.size();
    // iterar sobre as letras da palavra:
    for (int i=1; i<tam; i++){
        string letra;
        if (seq[i-1]!=seq[i]){
            atual=1;
        }else{
            atual++;
        }
        res = max(res, atual);
    }
    cout << res << endl;
}