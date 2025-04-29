class Aluno{
    nome;
    idade;
    curso;
  
    falar(){
        console.log("Olá, eu sou "+ this.nome);
        console.log("E tenho "+ this.idade);
        console.log("O curso que frequento é " + this.curso);
  
       
    }
  }
  
  //criando um objeto
  
  var aluno1= new Aluno();
  aluno1.nome="Leonor";
  aluno1.idade= 30;
  aluno1.curso= "TI"
  
  var aluno2= new Aluno();
  
  aluno2.nome= "Júlia";
  aluno2.idade= 23
  aluno2.curso= "Design"
  //Chamando um método do objeto
  aluno1.falar();
  aluno2.falar();


  class Alunos{
    nome;
    idade;
    curso;
    
    falar() {
        console.log("Prazer! Eu me chamo " + this.nome + ".")
        console.log("Eu tenho " + this.idade + " anos de idade.")
        console.log("O curso que estou fazendo é de " + this.curso + ".")
    }
  }

  var aluno1 = new Alunos()
  aluno1.nome = "Melissa"
  aluno1.idade = 22
  aluno1.curso = "Moda"

  var aluno2 = new Alunos()
  aluno2.nome = "Hermes"
  aluno2.idade = 30
  aluno2.curso = "Direito"

  aluno1.falar();
  aluno2.falar();