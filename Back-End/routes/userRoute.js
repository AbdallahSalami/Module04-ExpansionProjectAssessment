import express  from 'express'
import UserController from "../Controllers/UserController.js";
import {verifyadmin, verifyToken} from '../middlewares/authMiddleware.js'

const userRouter = express.Router()

userRouter.post('/',verifyadmin, UserController.createUser);
userRouter.get('/', verifyToken,UserController.getUser);
userRouter.get('/:id',verifyToken, UserController.getOneUser);
userRouter.patch('/:id',verifyadmin, UserController.updateUser);
userRouter.delete('/:id',verifyadmin, UserController.deleteUser);
userRouter.post('/login', UserController.login);

export default userRouter;
