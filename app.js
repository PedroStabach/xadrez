const area = document.getElementById("area");

// Função para adicionar a peça no quadrado
function addPeca(i, j, mapa, quadrado) {
  const tipo = mapa[`${i},${j}`];
  if (tipo) {
    quadrado.innerHTML = tipo;
    quadrado.style.fontSize = "18px";
    quadrado.style.textAlign = "center";
    quadrado.style.color = "red";
  }
}

// Mapa com as posições das peças
const pecas = {
  // Torres
  "0,0": "TORRE", "0,7": "TORRE", "7,0": "TORRE", "7,7": "TORRE",
  // Cavalos
  "0,1": "CAVALO", "0,6": "CAVALO", "7,1": "CAVALO", "7,6": "CAVALO",
  // Bispos
  "0,2": "BISPO", "0,5": "BISPO", "7,2": "BISPO", "7,5": "BISPO",
  // Rainha
  "0,3": "QUEEN", "7,4": "QUEEN",
  // Rei
  "0,4": "KING", "7,3": "KING",
  // Tropas (peões)
  "1,0": "TROPA", "1,1": "TROPA", "1,2": "TROPA", "1,3": "TROPA",
  "1,4": "TROPA", "1,5": "TROPA", "1,6": "TROPA", "1,7": "TROPA",
  "6,0": "TROPA", "6,1": "TROPA", "6,2": "TROPA", "6,3": "TROPA",
  "6,4": "TROPA", "6,5": "TROPA", "6,6": "TROPA", "6,7": "TROPA",
};
const posicao = {
    "7,0" : "A", "7,1" : "B", "7,2" : "C", "7,3" : "D", "7,4" : "E", "7,5" : "F",
    "7,6" : "G", "7,7" : "H"
}

for (let i = 0; i < 8; i++) {
  const linha = document.createElement("ul");
  linha.className = "linha";

  for (let j = 0; j < 8; j++) {
    var numero = document.createElement("h1");
    const item = document.createElement("li");
    const quadrado = document.createElement("div");
    quadrado.className = "quadrado";

    // Cores alternadas
    if ((i + j) % 2 !== 0) {
      quadrado.classList.add("ativo");
    }
    if(j == 7) {
    numero.innerHTML = `${(i + 1)}`
    }   

    // Adiciona peça se existir nessa posição
    addPeca(i, j, pecas, quadrado);
    item.appendChild(quadrado);
    linha.appendChild(item);
    linha.appendChild(numero);
  }
  
  area.appendChild(linha);
}
