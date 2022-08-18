const termosService = require('../services/termo.service');
const mongoose = require('mongoose');

const findAllTermosController = async (req, res) => {
  const termos = await termosService.findAllTermosService();

  if (termos.length == 0) {
    return res.status(404).send({
      message: 'Não existe nenhum termo cadastrado vamos começar? ;)',
    });
  }
  res.send(termos);
};

const findByIdTermosController = async (req, res) => {
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido, tente novamente...' });
  }

  const escolhaTermo = await termosService.findByIdTermoService(parametroId);

  if (!escolhaTermo) {
    return res
      .status(404)
      .send({ message: 'Termo não encontrado no Guide Dev ;(' });
  }

  res.send(escolhaTermo);
};

const createTermoController = async (req, res) => {
  const termo = req.body;

  if (!termo || !termo.descricao || !termo.logo || !termo.ano_de_criacao) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do novo termo, por favor! >:(' });
  }

  const newTermo = await termosService.createTermoService(termo);
  res.status(201).send(newTermo);
};

const editTermoController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido, tente novamente...' });
  }

  const termoEdit = req.body;

  if (
    !termoEdit ||
    !termoEdit.descricao ||
    !termoEdit.logo ||
    !termoEdit.ano_de_criacao
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do termo, por favor! >:(' });
  }

  const editedTermo = await termosService.editTermoService(idParam, termoEdit);
  res.send(editedTermo);
};

const deleteTermoController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido, tente novamente...' });
  }

  await termosService.deleteTermoService(idParam);

  res.send({ message: 'Termo deletado com sucesso do dicionário! :)' });
};

module.exports = {
  findAllTermosController,
  findByIdTermosController,
  createTermoController,
  editTermoController,
  deleteTermoController,
};
