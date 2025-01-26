import {Router} from 'express'
import { UserController } from '../resources/user.controller';

const routes = Router()

const userController = new UserController()

routes.patch('/:codigo', userController.update)
routes.post('/', userController.create)

export default routes;