const router = require('express').Router();
const controllerPostagem = require('../controllers/postagem.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const authMiddleware = require('../middlewares/auth.middleware');
const { validId } = require('../middlewares/validacoes-gerais.middleware');
const {
  validObjectBodyPostagem,
  validObjectBodyComentario,
  validObjectBodyCurtida,
} = require('../middlewares/postagem.middleware');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

/*router.get('/all-postagens', controllerPostagem.findAllPostagensController);

router.get(
  '/one-postagem/:id',
  validId,
  validObjectBodyPostagem,
  controllerPostagem.findPostagemByIdController,
);*/

router.post(
  '/create-postagem',
  authMiddleware,
  controllerPostagem.createPostagemController,
);

/*router.put(
  '/edit-postagem/:id',
  validId,
  validObjectBodyPostagem,
  controllerPostagem.editPostagemController,
);

router.delete(
  '/delete-postagem/:id',
  validId,
  controllerPostagem.deletePostagemController,
);

router.post(
  '/creat-comentarios',
  validObjectBodyComentario,
  controllerPostagem.creatComentarioController,
);

router.put(
  '/edit-comentario/:id',
  validId,
  validObjectBodyComentario,
  controllerPostagem.editComentarioController,
);

router.delete(
  '/delete-comentario/:id',
  validId,
  controllerPostagem.deleteComentarioController,
);

router.post(
  'creat-curtida',
  validObjectBodyCurtida,
  controllerPostagem.creatCurtidaController,
);

router.delete(
  'delete-curtida/:id',
  validId,
  controllerPostagem.deleteCurtidaController,
);*/

module.exports = router;
