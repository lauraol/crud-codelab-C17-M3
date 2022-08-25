const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/loggedUser', authController.loginController);

module.exports = router;
