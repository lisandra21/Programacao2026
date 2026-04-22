#include <bits/stdc++.h> 
using namespace std;
int main(){
    long long n, max, res;
    res=0;
    cin >> n;
    cin >> max;
    for (int i=2; i<=n; i++){
        int num;
        cin >> num;
        if (num<max){
            res+=max-num;
        }else{
            max=num;
        }
    }
    cout << res << endl;
}