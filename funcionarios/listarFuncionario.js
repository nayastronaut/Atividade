const { funcionarios } = require('../data');

const listarFuncionario = (req, res) => {
res.status(200).send(funcionarios);
};

module.exports = listarFuncionario;
