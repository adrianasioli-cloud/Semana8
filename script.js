
// DEFINIÇÃO DOS DADOS


const catalogo = [
    {
        id: 1,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.2,
        assistido: true
    },
    {
        id: 2,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção científica", "terror"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 3,
        titulo: "O Senhor dos Anéis",
        tipo: "filme",
        ano: 2001,
        generos: ["fantasia", "aventura"],
        nota: 9.0,
        assistido: false
    },
    {
        id: 4,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.5,
        assistido: false
    },
    {
        id: 5,
        titulo: "Matrix",
        tipo: "filme",
        ano: 1999,
        generos: ["ação", "ficção científica"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 6,
        titulo: "The Last of Us",
        tipo: "serie",
        ano: 2023,
        generos: ["drama", "aventura"],
        nota: 8.8,
        assistido: false
    }
];



// ACESSO E LEITURA DOS DADOS


console.log(catalogo);

// Título do primeiro item
console.log("Título do primeiro item:", catalogo[0].titulo);

// Ano do último item
console.log(
    "Ano do último item:",
    catalogo[catalogo.length - 1].ano
);

// Segundo gênero do terceiro item
if (catalogo[2].generos.length >= 2) {
    console.log(
        "Segundo gênero do terceiro item:",
        catalogo[2].generos[1]
    );
} else {
    console.log("O terceiro item possui apenas um gênero.");
}


// FOREACH


console.log("LISTA DE FILMES E SÉRIES:");

catalogo.forEach(function (item) {
    console.log(
        "- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")"
    );
});


// MAP


const titulosEmCaixaAlta = catalogo.map(function (item) {
    return item.titulo.toUpperCase();
});

console.log("TÍTULOS EM CAIXA ALTA:");
console.log(titulosEmCaixaAlta);


// FILTER


const naoAssistidos = catalogo.filter(function (item) {
    return item.assistido === false;
});

console.log("Quantidade de itens não assistidos:", naoAssistidos.length);


// FIND


const primeiroNotaAlta = catalogo.find(function (item) {
    return item.nota >= 9;
});

if (primeiroNotaAlta) {
    console.log(
        "Primeiro item com nota >= 9:",
        primeiroNotaAlta.titulo,
        "- Nota:",
        primeiroNotaAlta.nota
    );
} else {
    console.log("Nenhum item possui nota igual ou superior a 9.");
}

// REDUCE


// Soma das notas de todos os itens

const somaNotas = catalogo.reduce(function (total, item) {
    return total + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

console.log("Média geral das notas:", mediaGeral.toFixed(2));


// Média das notas dos itens assistidos

const assistidos = catalogo.filter(function (item) {
    return item.assistido === true;
});

const somaNotasAssistidos = assistidos.reduce(function (total, item) {
    return total + item.nota;
}, 0);

const mediaAssistidos =
    somaNotasAssistidos / assistidos.length;

console.log(
    "Média das notas dos assistidos:",
    mediaAssistidos.toFixed(2)
);


// SOME E EVERY


// Verifica se existe algum item anterior ao ano 2000

const existeAnteriorA2000 = catalogo.some(function (item) {
    return item.ano < 2000;
});

console.log(
    "Existe algum item anterior ao ano 2000?",
    existeAnteriorA2000
);

// Verifica se todos os itens possuem pelo menos um gênero

const todosPossuemGenero = catalogo.every(function (item) {
    return item.generos.length >= 1;
});

console.log(
    "Todos os itens possuem pelo menos um gênero?",
    todosPossuemGenero
);


// B.4 - SAÍDA NA TELA (DOM)


const totalItens = catalogo.length;

const quantidadeFilmes = catalogo.filter(function (item) {
    return item.tipo === "filme";
}).length;

const quantidadeSeries = catalogo.filter(function (item) {
    return item.tipo === "serie";
}).length;

// Cria uma cópia do catálogo para fazer o ranking
const ranking = [...catalogo];

ranking.sort(function (a, b) {
    return b.nota - a.nota;
});

const top3 = ranking.slice(0, 3);

let rankingHTML = "";

top3.forEach(function (item, index) {
    rankingHTML +=
        "<li>" +
        (index + 1) +
        "º - " +
        item.titulo +
        " - Nota: " +
        item.nota.toFixed(1) +
        "</li>";
});

// Seleciona a div do index.html
const output = document.getElementById("output");

// Mostra o resumo na página
output.innerHTML = `
    <h2>Resumo do Catálogo</h2>

    <p><strong>Total de itens:</strong> ${totalItens}</p>
    <p><strong>Filmes:</strong> ${quantidadeFilmes}</p>
    <p><strong>Séries:</strong> ${quantidadeSeries}</p>
    <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
    <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

    <h3>Top 3 maiores notas</h3>
    <ol>
        ${rankingHTML}
    </ol>
`;