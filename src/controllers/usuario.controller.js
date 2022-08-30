const usuariosService = require('../services/usuario.service');
const authService = require('../services/auth.service');

const findAllUsuariosController = async (req, res) => {
  const allusuarios = await usuariosService.findAllUsuariosService();
  if (allusuarios.length == 0) {
    return res.status(404).send({
      message:
        'Não existe nenhum usuário cadastrado na base de dados, viu? Vamos começar...',
    });
  }

  res.send(allusuarios);
};

const findByIdUsuarioController = async (req, res) => {
  const idParam = req.params.id;
  const chosenUsuario = await usuariosService.findByIdUsuarioService(idParam);

  if (!chosenUsuario) {
    return res
      .status(404)
      .send({ message: 'Usuário não encontrado na base de dados :(' });
  }

  res.send(chosenUsuario);
};

/*const createUsuarioController = async (req, res) => {
  const usuario = req.body;
  const newUsuario = await usuariosService.createUsuarioService(usuario);
  res.status(201).send(newUsuario);
};*/

const editUsuarioController = async (req, res) => {
  const idParam = req.params.id;
  const editUsuario = req.body;
  const editedUsuario = await usuariosService.editUsuarioService(
    idParam,
    editUsuario,
  );
  res.send(editedUsuario);
};

const deleteUsuarioController = async (req, res) => {
  const idParam = req.params.id;
  await usuariosService.deleteUsuarioService(idParam);
  res.send({ message: 'Usuário deletado com sucesso da base de dados ;)' });
};

/*------------------- */

const createUsuarioController = async (req, res) => {
  const { nome, apelido, cpf, email, senha, foto } = req.body;

  if (!nome || !apelido || !cpf || !email || !senha || !foto) {
    return res.status(400).send({
      message: 'Alguns campos estão faltando, revise e tente novamente!',
    });
  }

  const foundUser = await usuariosService.findByEmailUsuarioService(email);

  if (foundUser) {
    return res.status(400).send({
      message: 'Usuário já existe!',
    });
  }

  const user = await usuariosService
    .createUsuarioService(req.body)
    .catch((err) => console.log(err, message));

  if (!user) {
    return res.status(400).send({
      message: 'Erro ao criar Usuário!',
    });
  }

  const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      nome,
      apelido,
      cpf,
      email,
      foto,
    },
    token,
  });
};

module.exports = {
  findAllUsuariosController,
  findByIdUsuarioController,
  createUsuarioController,
  editUsuarioController,
  deleteUsuarioController,
};
