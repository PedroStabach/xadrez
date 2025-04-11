const area = document.getElementById("area");

for (let i = 0; i < 10; i++) {
  const linha = document.createElement("ul");
  linha.className = "linha";

  for (let j = 0; j < 8; j++) {
    const item = document.createElement("li");
    const quadrado = document.createElement("div");
    quadrado.className = "quadrado";
    quadrado.textContent = "";

    item.appendChild(quadrado);
    linha.appendChild(item);
    if(j%2 == 0 && i%2 != 0) {
        quadrado.classList.add("ativo");
    }
    else if(j%2 != 0 && i%2 == 0) {
        quadrado.classList.add("ativo");
    }
  }

  area.appendChild(linha);
}