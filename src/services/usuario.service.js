const Usuarios = require('../models/Usuario');

const findAllUsuariosService = async () => {
  const allUsuarios = await Usuarios.find();
  return allUsuarios;
};

const findByIdUsuarioService = async (idUser) => {
  const usuario = await Usuarios.findById(idUser);
  return usuario;
};

findByEmailUsuarioService = async (email) => {
  const emailDoUsuario = await Usuarios.findOne({ email: email });
  return emailDoUsuario;
};

const createUsuarioService = async (newUsuario) => {
  const createdUsuario = await Usuarios.create(newUsuario);
  return createdUsuario;
};

const editUsuarioService = async (idParam, editUsuario) => {
  const updateUsuario = await Usuarios.findByIdAndUpdate(idParam, editUsuario);
  return updateUsuario;
};

const deleteUsuarioService = async (idParam) => {
  return await Usuarios.findByIdAndDelete(idParam);
};

module.exports = {
  findAllUsuariosService,
  findByIdUsuarioService,
  findByEmailUsuarioService,
  createUsuarioService,
  editUsuarioService,
  deleteUsuarioService,
};
