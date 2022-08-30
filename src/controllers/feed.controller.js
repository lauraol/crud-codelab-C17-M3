const postService = require('../services/feed.service');

// postagens
/*const findAllPostagensController = async ((req, res) => {
  try{
    if(posts.length === 0){
      return res.status(400).send({message: "Não existe nenhuma postagem!"})
    }

    return res.send({
      results: posts.map((post) => ({
        id: post._id,
        postagem: post.postagem,
        curtida: post.curtida,
        comentario: post.comentario
      }))
    })
  }catch(error) {
    res.status(500).send({message: error.message})
  }
})*/

//const findPostagemByIdController

const createPostagemController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(
        (400).send({
          message:
            'Envie todos os dados necessários para a criação de uma nova postagem.',
        }),
      );
    }

    const { id } = await postService.createPostagemService(message, req.userId);

    return res.send({
      message: 'Postagem criada com sucesso!',
      post: { id, message },
    });
  } catch (error) {
    res.status((500).send({ message: error.message }));
  }
};

/*const editPostagemController

const deletePostagemController

// comentários
const creatComentarioController

const editComentarioController

const deleteComentarioController

// curtidas
const creatCurtidaController

const deleteCurtidaController
*/

module.exports = {
  createPostagemController,
};
