import { Router } from "express";
import MyController from "./PathController";

const objController = new MyController()
const MyRoute = Router()

MyRoute.get('/PathRoute', objController.getAll.bind(objController));
MyRoute.get('/PathRoute/:id', objController.getById.bind(objController));
MyRoute.post('/PathRoute', objController.create.bind(objController));
MyRoute.put('/PathRoute', objController.update.bind(objController));
MyRoute.patch('/PathRoute', objController.update.bind(objController));
MyRoute.delete('/PathRoute', objController.delete.bind(objController));

export default MyRoute