#include <bits/stdc++.h> // inclui a classe vector
using namespace std;

int main(){
    int num;
    cin >> num; // numero de elementos no vetor
    vector<bool> existe(num+1); // vetor booleano: o numero existe ou nao na sequencia?
    for (int i=1; i<=num-1; i++){ // itera sobre toda a segunda linha da entrada
        int k;
        cin >> k;
        existe[k]=true; // o numero existe na lista
    }
    for (int i=1; i<=num;i++){ // itera sobre o vetor booleano
        if (!existe[i]){
            int missing_number;
            missing_number=i;
            cout << missing_number << endl; // imprime o missing number
        }
    }
    }