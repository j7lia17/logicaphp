
class Calculadora{
    valor1;
    valor2;
    somar( valor1, valor2) {
        this.valor1= valor1;
        this.valor2= valor2;
        var resultado = this.valor1 + this.valor2;
        console.log("O valor da soma é: " + resultado);
    }

    multiplicar(valor1, valor2) {
        this.valor1= valor1;
        this.valor2= valor2;
        var resultado= this.valor1 * this.valor2;
        console.log("O valor da multiplicação é: " + resultado);
    }

    dividir( valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
        var resultado = this.valor1 / this.valor2;
        console.log("O valor dessa divisão é: " + resultado);
    }
}

//criando o objeto
var calculadora = new Calculadora();
calculadora.somar(700,300);
calculadora.multiplicar(25, 25);
calculadora.dividir(180, 180);



class Produto {
    nome;
    preco;
    quantidade;

    exibirDetalhes(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
    console.log("O nosso melhor produto é o " + this.nome + ".Temos " + this.quantidade + " unidades, pelo valor simbólico de " + this.preco + " reais.");
 }  
    calcularTotal ( preco, quantidade) {
        this.preco = preco;
        this.quantidade = quantidade;
        var resultado = this.preco * this.quantidade;
        console.log("O valor total é de: " + resultado);
    }
}

var produto = new Produto();
produto.exibirDetalhes("pão de forma", 8, 14);
produto.calcularTotal(8, 14);




class Filme {
    titulo;
    genero;

    exibiir(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
    console.log("O nome do filme é " + this.titulo + " e o gênero é de " + this.genero + ".");
}
}

var filmeA = new Filme();
filmeA.exibiir("Tinker Bell", "animação");

var filmeB = new Filme();
filmeB.exibiir("Casei com uma Feiticeira", "fantasia e comédia Romântica");

var filmeC = new Filme();
filmeC.exibiir("Numanice","suspense");