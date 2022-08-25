const bcrypt = require('bcryptjs');
require('dotenv').config();
const authService = require('../services/auth.service');

loginController = async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await authService.authService(email);

  if (!usuario) {
    return res.status(400).send({
      message: 'Usuário não encontrado na base de dados. Tente novamente...',
    });
  }

  const isPasswordValid = await bcrypt.compare(senha, usuario.senha);

  if (!isPasswordValid) {
    return res
      .status(400)
      .send({ message: 'Senha inválida! Digite novamente...' });
  }

  const token = authService.generateToken(usuario.id);

  res.status(201).send({
    usuario: {
      id: usuario.id,
      nome,
      apelido,
      cpf,
      email,
    },
    token,
  });
};

module.exports = {
  loginController,
};
