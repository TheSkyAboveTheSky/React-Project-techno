const { Router } = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const refreshTokenController = require('../controllers/refreshTokenController');
const userRouter = Router();
const verifyRoles = require('../middlewares/verifyRoles');

userRouter.get('/users',verifyRoles("1010"), userController.getAllUsers);
userRouter.get('/users/:id',verifyRoles("4040"), userController.getUser);
userRouter.put('/updateuser/:id',verifyRoles("1010"), userController.updateUser);

module.exports = userRouter;
