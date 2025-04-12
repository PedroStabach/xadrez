import { pecasInfo } from './pecas.js';

const area = document.getElementById("area");

function addPeca(i, j, mapa, quadrado) {
  const tipo = mapa[`${i},${j}`];
  if (tipo) {
    const img = document.createElement("img");
    img.src = `/images/${tipo.img}`;
    img.alt = tipo.nome;
    img.style.width = "30px";
    quadrado.appendChild(img);
  }
}

const pecas = {
  "0,0": pecasInfo.torre, "0,7": pecasInfo.torre,
  "7,0": pecasInfo.torre, "7,7": pecasInfo.torre,

  "0,1": pecasInfo.cavalo, "0,6": pecasInfo.cavalo,
  "7,1": pecasInfo.cavalo, "7,6": pecasInfo.cavalo,

  "0,2": pecasInfo.bispo, "0,5": pecasInfo.bispo,
  "7,2": pecasInfo.bispo, "7,5": pecasInfo.bispo,

  "0,3": pecasInfo.rainha, "7,4": pecasInfo.rainha,
  "0,4": pecasInfo.rei,    "7,3": pecasInfo.rei,

  "1,0": pecasInfo.peao, "1,1": pecasInfo.peao, "1,2": pecasInfo.peao,
  "1,3": pecasInfo.peao, "1,4": pecasInfo.peao, "1,5": pecasInfo.peao,
  "1,6": pecasInfo.peao, "1,7": pecasInfo.peao,

  "6,0": pecasInfo.peao, "6,1": pecasInfo.peao, "6,2": pecasInfo.peao,
  "6,3": pecasInfo.peao, "6,4": pecasInfo.peao, "6,5": pecasInfo.peao,
  "6,6": pecasInfo.peao, "6,7": pecasInfo.peao,
};

const posicao = {
  "0": "A", "1": "B", "2": "C", "3": "D",
  "4": "E", "5": "F", "6": "G", "7": "H"
};

for (let i = 0; i < 8; i++) {
  const linha = document.createElement("ul");
  linha.className = "linha";

  for (let j = 0; j < 8; j++) {
    const numero = document.createElement("h1");
    const item = document.createElement("li");
    const quadrado = document.createElement("div");
    quadrado.className = "quadrado";

    if ((i + j) % 2 !== 0) {
      quadrado.classList.add("ativo");
    }

    if (j === 7) {
      numero.innerHTML = `${i + 1}`;
    }

    addPeca(i, j, pecas, quadrado);
    item.appendChild(quadrado);
    linha.appendChild(item);
    linha.appendChild(numero);
  }

  area.appendChild(linha);
}

const linhaLetras = document.createElement("ul");
linhaLetras.className = "linha";

for (let j = 0; j < 8; j++) {
  const item = document.createElement("li");
  const letra = document.createElement("h2");
  letra.className = "letra";
  letra.innerText = `${posicao[j]} `;
  item.appendChild(letra);
  linhaLetras.appendChild(item);
}

area.appendChild(linhaLetras);
