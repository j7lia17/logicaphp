const express = require('express') 
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Bem-vindo ao servidor Express!")
})

app.get('/sobre', (req, res) => {
    res.send("Este é um projeto de exemplo com rotas.")
})

app.get('/contato', (req, res)=> {
    res.send("Entre em contato pelo e-mail: juliadoboco070@email.com")
})

app.post('/usuario', (req, res)=> {
    const nome = req.body.nome
    const cargo = req.body.cargo

    produtos.push()
    res.send("Usuário " + nome + " criado com sucesso! O seu cargo é " + cargo + ".")
})


app.listen(3001,()=>{
    console.log('servidor rodando em http://localhost:3001')
})
