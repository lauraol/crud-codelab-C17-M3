const router = require('express').Router();
const controllerFeed = require('../controllers/feed.controller');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const authMiddleware = require('../middlewares/auth.middleware');
const { validId } = require('../middlewares/validacoes-gerais.middleware');
const {
  validObjectBodyPostagem,
  validObjectBodyComentario,
  validObjectBodyCurtida,
} = require('../middlewares/feed.middleware');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.get('/all-postagens', controllerFeed.findAllPostagensController);

router.get(
  '/one-postagem/:id',
  validId,
  validObjectBodyPostagem,
  controllerFeed.findPostagemByIdController,
);

router.post(
  '/create-postagem',
  authMiddleware,
  controllerFeed.createPostagemController,
);

router.put(
  '/edit-postagem/:id',
  validId,
  validObjectBodyPostagem,
  controllerFeed.editPostagemController,
);

router.delete(
  '/delete-postagem/:id',
  validId,
  controllerFeed.deletePostagemController,
);

router.post(
  '/creat-comentarios',
  validObjectBodyComentario,
  controllerFeed.creatComentarioController,
);

router.put(
  '/edit-comentario/:id',
  validId,
  validObjectBodyComentario,
  controllerFeed.editComentarioController,
);

router.delete(
  '/delete-comentario/:id',
  validId,
  controllerFeed.deleteComentarioController,
);

router.post(
  'creat-curtida',
  validObjectBodyCurtida,
  controllerFeed.creatCurtidaController,
);

router.delete(
  'delete-curtida/:id',
  validId,
  controllerFeed.deleteCurtidaController,
);

module.exports = router;
