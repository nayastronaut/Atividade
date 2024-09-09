const { funcionarios } = require('../data')

const deletarFuncionario = (req, res) => {
    const { id } = req.params;
    const index = funcionarios.find((b) => b.id == id);

    if (index === -1) {
        return res.status(404).send('Funcionário não encontrado!');
    }

    const FuncionarioDeletado = funcionarios.splice(index, 1)[0];
}

module.exports = deletarFuncionario;
