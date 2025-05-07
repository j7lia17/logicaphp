function cadAstro(nome, idade){
    if(nome == null || idade == null){
        console.log ("Preencha todos os campos!")
    } else if ( idade < 0) {
        console.log ("Preencha a idade corretamente!")
    } else {
    console.log("Usuário cadastrado com sucesso!")
    console.log("Nome: " + nome)
    console.log("Idade: " + idade + " anos")
}
}
module.exports = cadAstro;