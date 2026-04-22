#include <bits/stdc++.h> 
using namespace std;
int main(){
    int tam_lista;
    stack<int> st;
    cin >> tam_lista;
    for (int i=0;i<tam_lista;i++){
        int numero;
        cin >> numero;
        if (numero==0){
            st.pop();
        }else{
            st.push(numero);
        }
    }
    if (st.empty()){
        cout << 0<< endl;
    }else{
        int soma=0;
        while (!st.empty()){
            soma+=st.top();
            st.pop();
        }
    cout <<soma<<endl;
    }
}