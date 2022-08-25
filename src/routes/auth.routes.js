const router = require('express').Router();
const authController = require('../controllers/auth.controller');
//const lalala;

router.post('/login', authController.loginController);

module.exports = router;
