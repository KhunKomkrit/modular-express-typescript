import { Router } from "express";
import UserController from "./UserController";

const objController = new UserController()
const MyRoute = Router()

MyRoute.get('/user', objController.getAll.bind(objController));
MyRoute.get('/user/:id', objController.getById.bind(objController));
MyRoute.post('/user', objController.create.bind(objController));
MyRoute.put('/user', objController.update.bind(objController));
MyRoute.patch('/user', objController.update.bind(objController));
MyRoute.delete('/user', objController.delete.bind(objController));

export default MyRoute