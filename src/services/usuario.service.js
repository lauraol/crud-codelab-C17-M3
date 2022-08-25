const Usuarios = require('../users/Usuario');

const findAllUsuariosService = async () => {
  const allUsuarios = await Usuarios.find();
  return allUsuarios;
};

const findByIdUsuarioService = async (idParam) => {
  const usuario = await Usuarios.findById(idParam);
  return usuario;
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
  createUsuarioService,
  editUsuarioService,
  deleteUsuarioService,
};
