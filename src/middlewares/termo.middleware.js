const validObjectBody = (req, res, next) => {
  const termo = req.body;

  if (!termo || !termo.descricao || !termo.logo || !termo.ano_de_criacao) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do novo termo, por favor! >:(' });
  }
  next();
};

module.exports = {
  validObjectBody,
};
