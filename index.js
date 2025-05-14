const express = require('express')
const app = express()

app.use(express.json())


let produtos = []

app.post('/produtos', (req, res)=> {
    const produto = {
     nome: req.body.nome,
     preco: req.body.preco,
     quantidade: req.body.quantidade
    }
    produtos.push(produto)
    res.send("O produto que você deseja é: " + nome + " ,que está custando apenas " + preco + " reais." )
})

app.listen(3000,()=>{
    console.log('servidor rodando em http://localhost:3000')
})