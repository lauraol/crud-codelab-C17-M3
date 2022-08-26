//postagem
const validObjectBodyPostagem = (req, res, next) => {
  const postagem = req.body;

  if (!postagem.postagem) {
    return res.status(400).send({
      message: 'Você não pode publicar uma postagem vazia, escreva algo ;)',
    });
  }
};

//comentário
const validObjectBodyComentario = (req, res, next) => {
  const comentario = req.body;

  if (!comentario.comentario) {
    return res
      .status(400)
      .send({ message: 'Comentário vazio, escreva algo :)' });
  }
};

//curtida
const validObjectBodyCurtida = (req, res, next) => {
  const curtida = req.body;

  if (!curtida.curtida) {
    return res
      .status(400)
      .send({ message: 'Sua curtida não foi gravada, curta novamente ;(' });
  }
};
