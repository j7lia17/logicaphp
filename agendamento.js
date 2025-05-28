const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'centro_treinamento'
});

const sessoes = []

app.post('/sessoes', (req, res) => {
const { nome, personal, tipo_treino, data, horario,observacoes } = req.body

conexao.query(
    'INSERT INTO sessoes (aluno, personal, tipo_treino, data, horario, observacoes) VALUES (?, ?, ?, ?, ?, ?)',
    [nome,
     personal,
     tipo_treino, 
    data,
    horario,
    observacoes
],
   ()=> {
        res.status(201).send('Treinamento agendado com sucesso!')
    })
})

app.post('/planos', (req, res) => {
    const { nome, duracao_meses, preco , descricao} = req.body
    console.log(req.body)
    conexao.query(
        'INSERT INTO planos (nome, duracao_meses, preco, descricao) VALUES (?, ?, ?, ?)',
        [nome, duracao_meses, preco, descricao],
       ()=> {
            res.status(201).send('Plano cadastrado com sucesso!')
        }
    );

app.put('/planos/:id', (req, res)=>{
    const { id } = req.params;
    const{nome, duracao_meses, preco, descricao}= req.body;
    
    const query = 'UPDATE planos SET nome = ?, duracao_meses = ?, preco = ?, descricao = ? where id= ?';
    conexao.query(query, [nome, duracao_meses, preco, descricao, id], (err, results)=>{
        if(err) {
            return res.status(500).send('Erro ao atualizar');
        }
        
        if ( results.affectedRows === 0){
            return res.status(404).send('Cadastro não encontrado');
        } 
        
        res.send('Plano atualizado com sucesso');
    });
});

app.delete('/planos/:id', (req, res)=>{
    const {id}= req.params;
    conexao.query('DELETE FROM planos WHERE id = ?', [id],(err, results)=>{
        if(err){
            return res.status(500).send(' Erro ao deletar');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send( 'Cadastro não encontrado');
        }
        
        res.status(200).send('Cadastro deletado com sucesso');
    });
    
});

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
