// src/routes/index.ts
import { Router } from "express";
import UserRoute from "@/modules/User/UserRoute";

const routerV1 = Router();

// Mount routes
routerV1.use(UserRoute);

export default routerV1;