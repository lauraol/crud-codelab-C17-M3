const Post = require('../models/Postagem');

// postagens
/*const findAllPostagensService = async () => {
  const allPostagensDoFeed = await Post.find();
  return allPostagensDoFeed;
};*/

const findPostagemByIdService = async (idUser) => {
  const postagem = await Post.findById(idUser);
  return postagem;
};

const createPostagemService = async (message, userId) => {
  return Post.create({ message, user: userId });
};

/*const editPostagemService = async (idParam, editPostagem) => {
  const updatePostagem = await Post.findByIdAndUpdate(idParam, editPostagem);
  return updatePostagem;
};*/

/*const deletePostagemService = async (idParam) => {
  return await Post.findByIdAndDelete(idParam);
};*/

// comentários
/*const creatComentarioService = async (newComentario) => {
  const createdComentario = await Post.create(newComentario);
  return createdComentario;
};

const editComentarioService = async (idParam, editComentario) => {
  const updateComentario = await Post.create(idParam, editComentario);
  return updateComentario;
};

const deleteComentarioService = async (idParam) => {
  return await Post.findByIdAndDelete(idParam);
};*/

// curtidas
/*const creatCurtidaService = async (newCurtida) => {
  const createdCurtida = await Post.creat(newCurtida);
  return createdCurtida;
};

const deleteCurtidaService = async (idParam) => {
  return await Post.findByIdAndDelete(idParam);
};*/

/*module.exports = {
  findAllPostagensService,
  findPostagemByIdService,
  createPostagemService,
  editPostagemService,
  deletePostagemService,
  creatComentarioService,
  editComentarioService,
  deleteComentarioService,
  creatCurtidaService,
  deleteCurtidaService,
};*/

module.exports = {
  findPostagemByIdService,
  createPostagemService,
};
