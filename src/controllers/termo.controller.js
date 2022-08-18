const termosService = require('../services/termo.service');
const mongoose = require('mongoose');

const findAllTermosController = async (req, res) => {
  const alltermos = await termosService.findAllTermosService();

  if (alltermos.length == 0) {
    return res.status(404).send({
      message: 'Não existe nenhum termo cadastrado vamos começar? ;)',
    });
  }
  res.send(alltermos);
};

const findByIdTermosController = async (req, res) => {
  const idParam = req.params.id;

  const chosenTermo = await termosService.findByIdTermoService(idParam);

  if (!chosenTermo) {
    return res
      .status(404)
      .send({ message: 'Termo não encontrado no Guide Dev ;(' });
  }

  res.send(chosenTermo);
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

  const editTermo = req.body;

  if (
    !editTermo ||
    !editTermo.descricao ||
    !editTermo.logo ||
    !editTermo.ano_de_criacao
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do termo, por favor! >:(' });
  }

  const editedTermo = await termosService.editTermoService(idParam, editTermo);
  res.send(editedTermo);
};

const deleteTermoController = async (req, res) => {
  const idParam = req.params.id;

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
