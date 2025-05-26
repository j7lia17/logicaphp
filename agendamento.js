const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    passsword: '',
    database: 'centro_treinamento'
});

const sessoes = []

app.post('/sessoes', (req, res) => {
const sessao = {
    nome: req.body.nome,
    personal: req.body.personal,
    tipo_treino: req.body.tipo_treino,
    data: req.body.data,
    horario: req.body.horario,
    observacoes: req.body.observacoes
}

conexao.query(
    'INSERT INTO sessoes (aluno, personal, tipo_treino, data, horario, observacoes) VALUES (?, ?, ?, ?, ?, ?)',
    [sessao.nome, sessao.personal, sessao.tipo_treino, sessao.data, sessao.horario, sessao.observacoes],
   ()=> {
        res.status(201).send('Treinamento agendado com sucesso!')
    }
);
})
app.get('/sessoes', (req, res) => {
    conexao.query('SELECT * FROM sessoes', (err, results) => {
    if (err) {
        return res.status(500).send('Erro ao buscar cadastros');
    }
    res.status(200).send(results);
    });
});

app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
});
