// OK importa biblio
if (typeof vis !== 'undefined') {
    console.log("Biblioteca Visjs importada")
} else {
    console.error("[ERRO] Biblioteca Visjs não importada")
} 

function realizacao(){
    // 1. Pega os valores digitados pelo usuário e transforma em lista de números
    let input = document.getElementById("meuInput").value; 
    let elementoResultado = document.getElementById("resultado"); 
    let vetor = input.split(" ").map(Number)

    // 2. Verifica se realiza multigrafo, ou seja, se a soma dos elementos é par
    let soma = vetor.reduce((acum,atual)=>acum+atual,0); // a variavel "acum" é um acumulador q vai se atualizando
    let ehMultigrafo = (soma%2==0); // verifica se soma é par

    // 3. Verifica se realiza grafo simples (desigualdade)
    let vetorord = [...vetor].sort((a,b)=>b-a); // [...] cria uma cópia de vetor
    let ehSimples = ehMultigrafo;
    let n=vetorord.length;

    if (ehSimples){ 
        for (let k=1; k<=n; k++){
            let esq = 0;
            for (let i=0; i<k; i++){
                esq += vetorord[i];
            }

            let dir = k*(k-1);
            for (let i = k; i < n; i++){
                dir += Math.min(k, vetorord[i]);
            }

            if (esq > dir) {
                ehSimples = false;
                break;
            }
        }
    }

    if (ehSimples) {
        elementoResultado.innerText = "Realiza grafo simples.";
    } else if (ehMultigrafo) {
        elementoResultado.innerText = "Realiza apenas multigrafo.";
    } else {
        elementoResultado.innerText = "Não realiza nenhum grafo, pois a soma dos graus é ímpar.";
        document.getElementById('drawArea').innerHTML = ""; 
        return; 
    }

    // Construção inicial do grafo:
    let nodes = [];
    for (let i = 0; i < vetorord.length; i++){
        nodes.push({id: i, label: 'V' + i + '\nGrau ' + vetorord[i]}) 
    }
    
    // Vetor que guarda as arestas
    let edges = []; 

    // 4. Se só realiza grafo simples, montar ele aqui
    if (ehSimples){
        let vizinhos = Array.from({length: n}, () => new Set());
        let deficiencia = [...vetorord];

        for (let r=0; r<n; r++){
            while (deficiencia[r] > 0){
                let defResolv = false;
                let caso1=false;
                let caso2=false;
                let caso3=false;
                // Case (0): vr<-/->vi pra algum vi com deficiencia
                for (let i=0; i<n; i++){
                    if (deficiencia[r] == 0) { break; }
                    if (i !== r && !vizinhos[r].has(i) && deficiencia[i] > 0){ // checa todas condições
                        vizinhos[r].add(i);
                        vizinhos[i].add(r); // adiciona aresta r-i
                        deficiencia[r] -= 1;
                        deficiencia[i] -= 1; // diminui a def de cada um
                        defResolv = true; 
                    }
                }
                
                // Case (1)
                
                if (!defResolv){
                    for (let i = 0; i < r; i++){
                        if (!vizinhos[r].has(i)){ // vr<-/-< vi p/ algum i<r
                            let u = null;
                            for (let vizDeI of vizinhos[i]){ 
                                if (!vizinhos[r].has(vizDeI) && vizDeI != r){ // conforme o artigo descreveu, esse u deve existir
                                    u = vizDeI; // achamos u que pertence à vizinhança de vi mas não à viz fechada de v_r
                                    break; 
                                }
                            }
                            
                            if (u != null){
                                if (deficiencia[r] >= 2) { //  If dr − d(vr) ≥ 2
                                    // then replace u-v_i with {u-v_r, v_i-v_r}
                                    vizinhos[u].delete(i); 
                                    vizinhos[i].delete(u);
                                    vizinhos[u].add(r);
                                    vizinhos[r].add(u);
                                    vizinhos[i].add(r);
                                    vizinhos[r].add(i);
                                    deficiencia[r] -= 2;
                                    caso1 = true;
                                    defResolv = true;
                                    break;
                                } else if (deficiencia[r] == 1) { // If d_r − d(v_r) = 1
                                    let k=null; // esse k existe já q a soma é par
                                    for (let candK = r + 1; candK < n; candK++) { 
                                        if (deficiencia[candK] > 0 && vizinhos[r].has(candK)) {
                                            k = candK;
                                            break;
                                        }
                                    }
                                    if (k !== null){
                                        // se o k e o r não tivessem conectados, teriamos aplicado o caso 0
                                        // como ele n foi, eles estão conectados
                                        //  replace {v_r-v_k, u-v_i} with {u-v_r, v_i-v_r}.
                                        vizinhos[r].delete(k);
                                        vizinhos[k].delete(r); 
                                        vizinhos[u].delete(i);
                                        vizinhos[i].delete(u);
                                        vizinhos[u].add(r);
                                        vizinhos[r].add(u);
                                        vizinhos[i].add(r);
                                        vizinhos[r].add(i);
                                        deficiencia[r] -= 1;
                                        deficiencia[k] += 1; 
                                        caso1 = true;
                                        defResolv = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                
                // Case (2)
                if (!caso1 && !defResolv) {

                    for (let k = r + 1; k < n; k++) {
                        let grauAtualK = vetorord[k] - deficiencia[k];
                        if (grauAtualK !== Math.min(r, vetorord[k])) {
                            let iSelecionado = null;
                            for (let i = 0; i < r; i++) {
                                if (!vizinhos[k].has(i)) {
                                    iSelecionado = i;
                                    break;
                                }
                            }
                            // todos os V antes de v_r sao vizinhos de r, e d(v_k)!=min{r,d_k} p/algum k>r
                            // como S é indep e d(v_k)<d_k, d(v_k)<min{r,d_k}
                            // caso 0 se aplica a menos que v_k esteja conectado a v_r
                            // como d(v_k)<r, existe i antes de r tal que v_k<-/->v_i
                            // como d_vi>=d_r>d(v_r), existe u vizinho de v_i que não é vizinho de r
                            
                            if (iSelecionado !== null) {
                                let i = iSelecionado;
                                let uSelecionado = null;
                                for (let vizinhoDeI of vizinhos[i]) {
                                    if (!vizinhos[r].has(vizinhoDeI) && vizinhoDeI !== r) {
                                        uSelecionado = vizinhoDeI;
                                        break;
                                    }
                                }

                                if (uSelecionado !== null) {
                                    //  Replace u-v_i with {u-v_r, v_i-v_k}.
                                    let u = uSelecionado;
                                    vizinhos[u].delete(i);
                                    vizinhos[i].delete(u);
                                    vizinhos[u].add(r);
                                    vizinhos[r].add(u);
                                    vizinhos[i].add(k);
                                    vizinhos[k].add(i);
                                    deficiencia[r]--;
                                    deficiencia[k]--;
                                    caso2 = true;
                                    defResolv = true;
                                    break; 
                                }
                            }
                        }
                    } // fim do for do caso 2
                } // fim do if caso1 nao serviu
                    if (!caso2) {
                        let i = null;
                        let j = null;
                        let u = null;
                        let w = null;
                        // r é vizinho de todos anteriores e existem i,j menores que r não conectados
                        // caso 1 se aplica a menos que v_i e v_j sejam vizinhos de v_r
                        // como d(v_i)>=d(v_j)>d(v_r), existe u que é vizinho de i mas não é de r, nem é o próprio r
                        for (let candi = 0; candi < r-1; candi++){
                            for (let candj = 0; candj < candi-1; candj++){
                                if (!vizinhos[candi].has(candj)){
                                    i = candi;
                                    j = candj;
                                    break;
                                }
                            }
                            if (i!==null) break; // se ja achou i e j, quebra loop externo
                        }
                        if (i!==null && j!== null){
                            for (let candU = 0; candU < n; candU++){
                                if (vizinhos[i].has(candU) && !vizinhos[r].has(candU) && candU!=r){
                                    u = candU;
                                    break;
                                }
                            }
                            for (let candW = 0; candW < n; candW++){
                                if (vizinhos[j].has(candW) && !vizinhos[r].has(candW) && candW!=r){
                                    w = candW;
                                    break;
                            }
                        }
                    }
                    if (w !== null && u!== null) {
                        //  Replace {u-v_i, w-v_j} with {v_i-v_j, u-v_r}.
                        vizinhos[u].delete(i);
                        vizinhos[i].delete(u);
                        vizinhos[j].delete(w);
                        vizinhos[w].delete(j);
                        vizinhos[u].add(r);
                        vizinhos[r].add(u);
                        vizinhos[i].add(j);
                        vizinhos[j].add(i);
                        deficiencia[r]--;
                        deficiencia[w]++;
                        caso3 = true;
                        defResolv = true;
                        break; 
                        }
                }
                if (!caso3) break;
            } // fim de while (deficiencia[r] > 0)
        } // fim de for r
        
        // converte a lista de adjacência (vizinhos) para o array de arestas criado antes: 
        for(let i = 0; i < n; i++){
            for(let j of vizinhos[i]){
                if(i <= j){ // pra nao adicionar arestas repetidas, compara o id de cada um
                    edges.push({ 
                        from: i,
                        to: j
                    });
                }
            }
        }
    }
    
    // 5. Se realiza multigrafo, montar ele aqui
    else if (ehMultigrafo){
        let impares = []; // salva impares num vetor pra conectar todos depois

        for (let i=0; i<n; i++) {
            while (vetorord[i]>=2) { // vai diminuindo grau do V de 2 em 2
                edges.push({
                    from: i,
                    to: i,
                    selfReference:
                    {
                        size: 5*vetorord[i],
                    }
                });
                vetorord[i] -= 2;
            }
            if (vetorord[i] == 1) {
                impares.push(i);
            }
        }

        for (let i=0; i<impares.length; i+=2) { // de 2 em 2, vai conectando vertices impares
            edges.push({
                from: impares[i],
                to: impares[i + 1]
            });
        }
    }

    // 6. Desenha o grafo 
    let container = document.getElementById("drawArea");

    let data = {
        nodes: new vis.DataSet(nodes),
        edges: new vis.DataSet(edges)
    };

    let options = {
        physics: true,
        edges: {
            smooth: false
        },
        nodes:{
            color:{
                background: '#c92424',
                border: 'black'
            }}
    };

    new vis.Network(container, data, options);
}