const termosService = require('../services/termo.service');

const findAllTermosController = (req, res) => {
  const termos = termosService.findAllTermosService();
  res.send(termos);
};

const findByIdTermosController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaTermo = termosService.findByIdTermoService(parametroId);
  res.send(escolhaTermo);
};

const createTermoController = (req, res) => {
  const termo = req.body;
  const newTermo = termosService.createTermoService(termo);
  res.send(newTermo);
};

const editTermoController = (req, res) => {
  const idParam = Number(req.params.id);
  const termoEdit = req.body;
  const editedTermo = termosService.editTermoService(idParam, termoEdit);
  res.send(editedTermo);
};

const deleteTermoController = (req, res) => {
  const idParam = req.params.id;
  termosService.deleteTermoService(idParam);
  res.send({ message: 'Termo deletado com sucesso do dicionário! :)' });
};

module.exports = {
  findAllTermosController,
  findByIdTermosController,
  createTermoController,
  editTermoController,
  deleteTermoController,
};
