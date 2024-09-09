const { funcionarios } = require('../data');

function buscarFuncionario(req, res) {
    const { idFuncionario } = req.params;
    const resultados = funcionarios.filter(funcionarios => funcionarios.idFuncionario === parseInt(idFuncionario));

    if(resultados.length > 0){
        res.status(200).send(resultados);
    } else {
        res.status(400).send({message: 'Nenhum funcionário encontrado'});
    }
}

module.exports = buscarFuncionario;

