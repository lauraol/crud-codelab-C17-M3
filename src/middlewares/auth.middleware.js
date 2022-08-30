const jwt = require('jsonwebtoken');
const { config } = require('dotenv');
const { findByIdUsuarioService } = require('../services/usuario.service');

config();

module.exports = async function authentication(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'Por favor, informe o token! >:(' });
  }

  //const parts = authHeader.split(' ');

  /*if (parts.length !== 2) {
    return res.status(401).status({ message: 'Token inválido! >;(' });
  }*/

  // const [scheme, token] = parts;

  //let replaceToken = parts;
  //let result = replaceToken.replace(',', ' ');
  console.log(`O que está vindo na const parts: ${parts}`);

  console.log(`O que está vindo na const authHeader: ${authHeader}`);

  /*if (!/^Bearer$/i.test(authHeader)) {
    return res
      .status(401)
      .send({ message: 'O token não está formatado corretamente!' });
  }*/

  jwt.verify(token, process.env.SECRET, async (error, decoded) => {
    const user = findByIdUsuarioService(decoded.id);

    if (error || !user || !user.id) {
      return res.status(401).send({ message: 'Token inválido! (teste)' });
    }

    req.userId = await user.id;

    return next();
  });
};
