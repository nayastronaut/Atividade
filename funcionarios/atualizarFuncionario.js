const { funcionarios } = require('../data');

const atualizarFuncionario = (req, res) => {
    const { id } = req.params;
    const novoTitulo = req.body.titulo;

    const funcionario = funcionarios.find((b) => b.id == id);

    if (!funcionario) {
        return res.status(404).send({ message: 'Funcionário não encontrado' });
    }

    funcionario.titulo = novoTitulo;
    res.status(200).send({
        message: 'Funcionário atualizado com sucesso!',
        funcionario: funcionario
    });
}

module.exports = atualizarFuncionario;