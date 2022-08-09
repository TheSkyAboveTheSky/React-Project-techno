const { Router } = require('express');
const userController = require('../controllers/userController');
const userRouter = Router();
const verifyRoles = require('../middlewares/verifyRoles');

userRouter.get('/users',verifyRoles("1010","2020","3030","4040"), userController.getAllUsers);
userRouter.get('/users/:id',verifyRoles("1010","2020","3030","4040"), userController.getUser);
userRouter.put('/updateuser/:id',verifyRoles("1010","2020","3030","4040"), userController.updateUser);
userRouter.get('/friends/:id',verifyRoles("1010","2020","3030","4040"), userController.getFriends);
userRouter.put('/loginstatus/:id',verifyRoles("1010","2020","3030","4040"), userController.updateLoginStatus);
module.exports = userRouter;
