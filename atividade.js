class Livro {
titulo;
autor;

exibirInfo(titulo, autor) {
    this.titulo = titulo
    this.autor = autor
    console.log("Estou lendo o livro " + this.titulo + ", que foi escrito por " + this.autor);

    }
}

var livro1 = new Livro()
var livro2 = new Livro()
var livro3 = new Livro()

livro1.exibirInfo("A paciente silenciosa", "Alex Michaelides.")
livro2.exibirInfo("A biblioteca da meia-noite","Matt Haig.")
livro3.exibirInfo("O Mundo Sombrio de Sabrina", "Roberto Aguirre-Sacasa.")

