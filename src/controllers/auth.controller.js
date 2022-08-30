const bcrypt = require('bcryptjs');
require('dotenv').config();
const authService = require('../services/auth.service');

loginController = async (req, res) => {
  const { email, senha } = req.body;

  const user = await authService.loginService(email);

  if (!user) {
    return res.status(400).send({ message: 'Usuário não encontrado!' });
  }

  const isPasswordValid = await bcrypt.compare(senha, user.senha);

  if (!isPasswordValid) {
    return res.status(400).send({ message: 'Senha inválida!' });
  }

  const token = authService.generateToken(user.id);

  res.send({ token });
};

module.exports = {
  loginController,
};
