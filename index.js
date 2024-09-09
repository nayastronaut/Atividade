const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const { funcionarios } = require('./data.js')

const criarFuncionario = require('./funcionarios/criarFuncionario');
const atualizarFuncionario = require('./funcionarios/atualizarFuncionario');
const listarFuncionario = require('./funcionarios/listarFuncionario');
const buscarFuncionario = require('./funcionarios/buscarFuncionario');
const deletarFuncionario = require('./funcionarios/deletarFuncionario');

app.post('/funcionarios', criarFuncionario);
app.get('/funcionarios', listarFuncionario);
app.get('/funcionarios?salario=5000', buscarFuncionario);
app.put('/funcionarios/:id', atualizarFuncionario);
app.delete('/funcionarios/:id', deletarFuncionario);

app.get ('/', (req, res) => {
    res.send('Servidor Express está funcionando!');
});

app.listen(port, () => {
    console.log(` Servidor rodando em http://localhost ${port} `); 
});