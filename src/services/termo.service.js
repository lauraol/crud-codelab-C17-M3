const Termos = require('../models/Termo');

const findAllTermosService = async () => {
  const termos = await Termos.find();
  return termos;
};

const findByIdTermoService = async (parametroId) => {
  const termo = await Termos.findById(parametroId);
  return termo;
};

const createTermoService = async (newTermo) => {
  const termoCreated = await Termos.create(newTermo);
  return termoCreated;
};

const editTermoService = async (id, termoEdit) => {
  const termoUpdate = await Termos.findByIdAndUpdate(id, termoEdit);
  return termoUpdate;
};

const deleteTermoService = async (id) => {
  return await Termos.findByIdAndDelete(id);
};

module.exports = {
  findAllTermosService,
  findByIdTermoService,
  createTermoService,
  editTermoService,
  deleteTermoService,
};
