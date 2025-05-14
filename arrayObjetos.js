let livros = [
    {titulo: "Assim na terra como embaixo dela",autor: "Ana Paula Maia",ano: 2017},
    {titulo: "Terra amaldiçoada",autor: "Douglas Lobo",ano: 2015},
    {titulo: "Frankenstein",autor: "Mary Shalley",ano: 1818}
]
console.log(livros[0]);

livros.forEach(livro => console.log(livro.titulo)); //mostra todos os titulos

let recentes = livros.filter(livro => livro.ano >2010 );
console.log(recentes);