const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'consultorio_medico'
});

const consultas = []

app.post('/consultas', (req, res) => {
    const consulta = {
        paciente: req.body.paciente,
        medico: req.body.medico,
        especialidade: req.body.especialidade,
        data: req.body.data,
        horario: req.body.horario,
        observacoes: req.body.observacoes
}

conexao.query(
    'INSERT INTO consultas (paciente, medico, especialidade, data, horario, observacoes) VALUES (?, ?, ?, ?, ?, ?)',
    [consulta.paciente, consulta.medico, consulta.especialidade, consulta.data, consulta.horario, consulta.observacoes],
   ()=> {
        res.status(201).send('Consulta agendada com sucesso!')
    }
);

})



app.get('/consultas', (req, res) => {
    conexao.query('SELECT * FROM consultas', (err, results) => {
        if(err) {
            return res.status(500).send('Erro ao buscar cadastros');
        }
        res.status(200).send(results); 
    });
});

app.listen(3000, () => {
    console.log("Servidor backend rodando em http://localhost:3000")
});