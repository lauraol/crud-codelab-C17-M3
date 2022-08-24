const validObjectBody = (req, res, next) => {
  const usuario = req.body;

  if (
    !usuario.nome ||
    !usuario.apelido ||
    !usuario.cpf ||
    !usuario.email ||
    !usuario.senha
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do usuário, por favor! >:(' });
  }
  next();
};

module.exports = {
  validObjectBody,
};
