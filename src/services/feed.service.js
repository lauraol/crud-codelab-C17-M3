const Feed = require('../models/Feed');

// postagens
const findAllPostagensService = async () => {
  const allPostagensDoFeed = await Feed.find();
  return allPostagensDoFeed;
};

const findPostagemByIdService = async (idParam) => {
  const postagem = await Feed.findById(idParam);
  return postagem;
};

const creatPostagemService = async (newPostagem) => {
  const createdPostagem = await Feed.create(newPostagem);
  return createdPostagem;
};

const editPostagemService = async (idParam, editPostagem) => {
  const updatePostagem = await Feed.findByIdAndUpdate(idParam, editPostagem);
  return updatePostagem;
};

const deletePostagemService = async (idParam) => {
  return await Feed.findByIdAndDelete(idParam);
};

// comentários
const creatComentarioService = async (newComentario) => {
  const createdComentario = await Feed.create(newComentario);
  return createdComentario;
};

const editComentarioService = async (idParam, editComentario) => {
  const updateComentario = await Feed.create(idParam, editComentario);
  return updateComentario;
};

const deleteComentarioService = async (idParam) => {
  return await Feed.findByIdAndDelete(idParam);
};

// curtidas
const creatCurtidaService = async (newCurtida) => {
  const createdCurtida = await Feed.creat(newCurtida);
  return createdCurtida;
};

const deleteCurtidaService = async (idParam) => {
  return await Feed.findByIdAndDelete(idParam);
};

module.exports = {
  findAllPostagensService,
  findPostagemByIdService,
  creatPostagemService,
  editPostagemService,
  deletePostagemService,
  creatComentarioService,
  editComentarioService,
  deleteComentarioService,
  creatCurtidaService,
  deleteCurtidaService,
};
