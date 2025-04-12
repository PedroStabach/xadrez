export const pecasInfo = {
  torre: {
    nome: "Torre",
    img: "torre_transparente.png",
    movimentos: (x, y) => {
      const moves = [];
      for (let i = 0; i < 8; i++) {
        if (i !== x) moves.push([i, y]);
        if (i !== y) moves.push([x, i]);
      }
      return moves;
    }

  },
  cavalo: {
    nome: "Cavalo",
    img: "cavalo_transparente.png",
    movimentos: (x, y) => {
      const offsets = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
      ];
      return offsets.map(([dx, dy]) => [x + dx, y + dy])
                    .filter(([i, j]) => i >= 0 && i < 8 && j >= 0 && j < 8);
    }
  },
  bispo: {
    nome: "Bispo",
    img: "bispo.png",
    movimentos: (x, y) => {
      const moves = [];
      for (let i = 1; i < 8; i++) {
        moves.push([x + i, y + i], [x - i, y - i], [x + i, y - i], [x - i, y + i]);
      }
      return moves.filter(([i, j]) => i >= 0 && i < 8 && j >= 0 && j < 8);
    }
  },
  rainha: {
    nome: "Rainha",
    img: "rainha.png",
    movimentos: (x, y) => {
      return [...pecasInfo.torre.movimentos(x, y), ...pecasInfo.bispo.movimentos(x, y)];
    }
  },
  rei: {
    nome: "Rei",
    img: "rei.png",
    movimentos: (x, y) => {
      const moves = [];
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx !== 0 || dy !== 0) moves.push([x + dx, y + dy]);
        }
      }
      return moves.filter(([i, j]) => i >= 0 && i < 8 && j >= 0 && j < 8);
    }
  },
  peao: {
    nome: "Tropa",
    img: "peao.png",
    movimentos: (x, y, cor = "branco") => {
      const dir = cor === "branco" ? 1 : -1;
      const moves = [[x + dir, y]];
      if ((cor === "branco" && x === 1) || (cor === "preto" && x === 6)) {
        moves.push([x + dir * 2, y]);
      }
      return moves.filter(([i, j]) => i >= 0 && i < 8 && j >= 0 && j < 8);
    }
  }
};
