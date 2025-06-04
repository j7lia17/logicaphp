const conexao = require('../conexao');

//criar tarefa (titulo e descricao)

exports.criarTarefa = (req, res) => {
    const {titulo, descricao} = req.body
    conexao.query(
 'INSERT INTO tarefas (titulo, descricao) VALUES (?,?)',
        [titulo, descricao],
        (err) => {
         if (err) return res.status(500).send('Erro ao criar lista');
         res.status(201).send(results);   
        });

    };

//listagem
exports.listarTarefas = (req, res) => {
    conexao.query('SELECT * FROM tarefas', (err, results) => {
        if(err) return res.status(500).send('Erro ao buscar lista');
        res.status(201).send(results);
    });
};

exports.filtrarTarefas = (req, res) => {

    conexao.query('SELECT * FROM tarefas where status = ?',[status], (err, results) => {
        if(err) return res.status(500).send('Erro ao buscar lista');
        res.status(201).send(results);
    });
};

//atualizar listas
exports.atualizarTarefa = (req, res) => {
    const {id} = req.params;
    const {titulo, descricao} = req.body;
    const query = 'UPDATE tarefas SET titulo = ?, descricao = ? WHERE id = ?';

    conexao.query(query, [titulo, descricao, id], (err, results) => {
        if (err) return res.status(500).send('Erro ao atualizar');
        if (results.affectedRows === 0) return res.status(404).send('Lista de tarefa não encontrada');
        res.send('Lista atualizada com sucesso');
    });
};

//excluir 
exports.deletarTarefa = (req, res) => {
    const {id} = req.params;

    conexao.query('DELETE FROM tarefas WHERE id =?', [id], (err,results) => {
        if (err) return res.status(500).send('Erro ao deletar');
        if (results.affectedRows === 0) return res.status(404).send('Produto não encontrado');
        res.status(200).send('Lista deletada com sucesso');
    });
};