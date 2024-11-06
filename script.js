function calcularPartidas (qtdeVitorias, qtdeDerrotas) {
    let saldoRankeadas = qtdeVitorias - qtdeDerrotas;
    return saldoRankeadas;
}

let nivel;

let partidasRankeadas = calcularPartidas(200, 1);

if (partidasRankeadas < 10) {
    nivel = "Ferro";
} else if (partidasRankeadas >= 11 && partidasRankeadas < 20) {
    nivel = "Bronze";
} else if (partidasRankeadas >= 21 && partidasRankeadas < 50) {
    nivel = "Prata";
} else if (partidasRankeadas >= 51 && partidasRankeadas < 80) {
    nivel = "Ouro";
} else if (partidasRankeadas >= 81 && partidasRankeadas < 90) {
    nivel = "Diamante";
} else if (partidasRankeadas >= 91 && partidasRankeadas < 100) {
    nivel = "Lendário";
} else if (partidasRankeadas >= 101) {
    nivel = "Imortal";
}

console.log ("O Herói tem de saldo de "+ partidasRankeadas +  " e está no nível " + nivel);