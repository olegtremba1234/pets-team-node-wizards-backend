const express = require('express');
const authController = require('../../../controllers/authController');
const {
  validateBody,
  callController,
  authMiddleware,
} = require('../../../middlewares');
const { validationSchemas } = require('../../../helpers');

const {
  uploadCloudMiddleware,
} = require('../../../middlewares/upload-cloud-middleware');

const router = express.Router();

router
  .post(
    '/register',
    validateBody(validationSchemas.register),
    callController(authController.register)
  )
  .post(
    '/login',
    validateBody(validationSchemas.login),
    callController(authController.login)
  )
  .post('/logout', authMiddleware, callController(authController.logout));
// .post('/', authMiddleware, callController(authController.petRegister));

router.post(
  '/upload-file',
  uploadCloudMiddleware.single('avatar'),
  callController((req, res) => {
    console.log(req.file);
    res.status(201).json({ message: 'file uploaded successfully' });
  })
);

module.exports = router;
