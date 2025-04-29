class Pessoa {
    nome;
    idade;

    falar(nome, idade) {
        console.log("Olá, eu sou a " + nome + ".")
        console.log("Eu tenho " + idade + " anos de idade.")

    }
}
var pessoa = new Pessoa()

pessoa.falar("Júlia", 18)

//CODIGO COM THIS

class Pessoa {
    nome;
    idade;

falar(nome, idade) {
    this.nome = nome
    this.idade = idade
    console.log("Olá, eu sou " + this.nome)
    console.log("Eu tenho " + this.idade + " anos de idade.")

    }
}
