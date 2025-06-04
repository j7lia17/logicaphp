//criando conexao para criar tarefas titulo e descricao
const mysql = require('mysql2');
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
});

module.exports = conexao;