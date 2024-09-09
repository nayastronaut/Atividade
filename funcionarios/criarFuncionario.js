const { funcionarios } = require('../data');

function criarFuncionario(req, res) {
    const novofuncionario = {
    id: funcionarios.length + 1,
    nome: req.body.titulo
    };
    funcionarios.push(novofuncionario)
    res.status(201).send({message: 'Funcionário adicionado com sucesso!', funcionarios: novofuncionario});
}

module.exports = criarFuncionario;