const nomes = ["Fernando", "Camila", "Renan", "Natália"];

nomes.forEach(function (nome) {
    console.log(nome);
});

nomes.forEach((nome) => {
    console.log(nome);
});

function imprimeNome(nome) {
    console.log(nome);
}

nomes.forEach(imprimeNome);

