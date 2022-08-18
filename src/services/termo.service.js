const Termos = require('../models/Termo');

const findAllTermosService = async () => {
  const alltermos = await Termos.find();
  return alltermos;
};

const findByIdTermoService = async (idParam) => {
  const termo = await Termos.findById(idParam);
  return termo;
};

const createTermoService = async (newTermo) => {
  const createdTermo = await Termos.create(newTermo);
  return createdTermo;
};

const editTermoService = async (idParam, editTermo) => {
  const updateTermo = await Termos.findByIdAndUpdate(idParam, editTermo);
  return updateTermo;
};

const deleteTermoService = async (idParam) => {
  return await Termos.findByIdAndDelete(idParam);
};

module.exports = {
  findAllTermosService,
  findByIdTermoService,
  createTermoService,
  editTermoService,
  deleteTermoService,
};
